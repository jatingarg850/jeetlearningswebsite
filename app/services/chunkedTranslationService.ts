/**
 * Chunked Translation Service (Strict Mode)
 * Loads Hindi translations in 100 chunks for faster performance
 * NO FALLBACK - Only uses chunked mode
 */

interface TranslationChunk {
  id: number;
  file: string;
  entries: number;
  firstKey: string;
  lastKey: string;
}

interface TranslationIndex {
  version: string;
  totalEntries: number;
  chunkSize: number;
  chunks: TranslationChunk[];
  createdAt: string;
}

let translationIndex: TranslationIndex | null = null;
let loadedChunks: Map<number, Record<string, string>> = new Map();

/**
 * Load translation index
 */
async function loadIndex(): Promise<TranslationIndex> {
  if (translationIndex) return translationIndex;

  const response = await fetch("/data/translations/hi-index.json");
  if (!response.ok) {
    throw new Error(`Failed to load index: ${response.status}`);
  }
  const index = await response.json() as TranslationIndex;
  translationIndex = index;
  return index;
}

/**
 * Load a specific chunk
 */
async function loadChunk(chunkId: number): Promise<Record<string, string>> {
  // Check if already loaded
  if (loadedChunks.has(chunkId)) {
    return loadedChunks.get(chunkId)!;
  }

  const index = await loadIndex();
  const chunkInfo = index.chunks[chunkId];

  if (!chunkInfo) {
    throw new Error(`Chunk ${chunkId} not found in index`);
  }

  const response = await fetch(
    `/data/translations/hi-chunks/${chunkInfo.file}`
  );
  if (!response.ok) {
    throw new Error(`Failed to load chunk ${chunkId}: ${response.status}`);
  }

  const chunk = await response.json();
  loadedChunks.set(chunkId, chunk);

  return chunk;
}

/**
 * Find which chunk contains a key using binary search
 */
async function findChunkForKey(key: string): Promise<number> {
  const index = await loadIndex();

  // Binary search for the chunk
  let left = 0;
  let right = index.chunks.length - 1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    const chunk = index.chunks[mid];

    if (key >= chunk.firstKey && key <= chunk.lastKey) {
      return mid;
    }

    if (key < chunk.firstKey) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }

  // If not found in range, return closest chunk
  return Math.max(0, Math.min(left, index.chunks.length - 1));
}

/**
 * Get translation for a single key
 */
export async function getTranslation(key: string): Promise<string | null> {
  const chunkId = await findChunkForKey(key);
  const chunk = await loadChunk(chunkId);
  return chunk[key] || null;
}

/**
 * Get translations for multiple keys (optimized)
 */
export async function getTranslations(
  keys: string[]
): Promise<Record<string, string>> {
  const result: Record<string, string> = {};
  const chunkMap = new Map<number, string[]>();

  // Group keys by chunk
  for (const key of keys) {
    const chunkId = await findChunkForKey(key);
    if (!chunkMap.has(chunkId)) {
      chunkMap.set(chunkId, []);
    }
    chunkMap.get(chunkId)!.push(key);
  }

  // Load chunks in parallel
  const chunkPromises = Array.from(chunkMap.entries()).map(
    async ([chunkId, chunkKeys]) => {
      const chunk = await loadChunk(chunkId);
      for (const key of chunkKeys) {
        if (chunk[key]) {
          result[key] = chunk[key];
        }
      }
    }
  );

  await Promise.all(chunkPromises);
  return result;
}

/**
 * Preload all chunks (for offline support)
 */
export async function preloadAllChunks(): Promise<void> {
  const index = await loadIndex();
  const chunkPromises = index.chunks.map((chunk) =>
    loadChunk(chunk.id)
  );

  await Promise.all(chunkPromises);
  console.log(`✅ All ${index.chunks.length} chunks preloaded`);
}

/**
 * Get statistics
 */
export async function getStats(): Promise<{
  totalChunks: number;
  loadedChunks: number;
  totalEntries: number;
}> {
  const index = await loadIndex();
  return {
    totalChunks: index.chunks.length,
    loadedChunks: loadedChunks.size,
    totalEntries: index.totalEntries,
  };
}

/**
 * Clear cache
 */
export function clearCache(): void {
  loadedChunks.clear();
  console.log("✅ Translation cache cleared");
}
