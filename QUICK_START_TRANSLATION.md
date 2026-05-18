# Quick Start - Translate All Career Data to Hindi

## 30-Second Setup

### 1. Install Ollama
```bash
# macOS
brew install ollama

# Linux
curl https://ollama.ai/install.sh | sh

# Windows
# Download from https://ollama.ai
```

### 2. Start Ollama (Terminal 1)
```bash
ollama serve
```

### 3. Pull Model (Terminal 2)
```bash
ollama pull translategemma:4b
```

### 4. Run Translation
```bash
node scripts/batchTranslateCareerData.mjs
```

**Done!** ✅ All career data is now translated to Hindi.

---

## What Happens

The script will:
1. Find all career data files (`*UpdateData.ts`)
2. Extract titles, descriptions, and content
3. Translate to Hindi using Ollama
4. Add `titleHi`, `descriptionHi`, `contentHi` fields
5. Save updated files automatically

**Time**: ~15-20 minutes for all files

---

## Verify It Worked

```bash
node scripts/verifyTranslations.mjs
```

You should see:
```
✅ SUMMARY
   Total Sections: 150
   With Hindi: 150
   Completion: 100%
```

---

## Use in Components

```typescript
import { useInlineTranslations } from '@/app/hooks/useInlineTranslations';

export function CareerSection({ section }) {
  const { getString, getArray } = useInlineTranslations();
  
  return (
    <div>
      <h2>{getString(section.title, section.titleHi)}</h2>
      {getArray(section.content, section.contentHi).map((item, idx) => (
        <p key={idx}>{item}</p>
      ))}
    </div>
  );
}
```

---

## Troubleshooting

**"Ollama is not running"**
```bash
ollama serve
```

**"Model not found"**
```bash
ollama pull translategemma:4b
```

**"Slow translation"**
- Close other apps
- Check internet (for model download)
- Wait for first run to complete

---

## Performance

- **Speed**: 1.7s per item (local, no API)
- **Cost**: Free (runs on your machine)
- **Cache**: Reuses translations (1000x faster on duplicates)
- **All data**: ~15-20 minutes

---

## Next Steps

1. ✅ Run translation script
2. ✅ Verify with `verifyTranslations.mjs`
3. ✅ Update components to use `useInlineTranslations` hook
4. ✅ Test language switching in UI
5. ✅ Commit changes

---

## Files

- **Main Script**: `scripts/batchTranslateCareerData.mjs`
- **Verify Script**: `scripts/verifyTranslations.mjs`
- **Hook**: `app/hooks/useInlineTranslations.ts`
- **Guide**: `TRANSLATION_SCRIPTS_README.md`

---

**That's it!** 🎉 Your career data is now bilingual.
