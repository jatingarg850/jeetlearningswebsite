# 🚀 Translate Everything to Hindi - FAST

## 1. Start Ollama
```bash
ollama serve
```

## 2. Pull Model (another terminal)
```bash
ollama pull translategemma:4b
```

## 3. Run Translation
```bash
node scripts/translateAllContent.mjs
```

Done! All career data will be translated to Hindi with `contentHi` fields added.

## Use in Components
```typescript
import { useInlineTranslations } from '@/app/hooks/useInlineTranslations';

export function Section({ section }) {
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

## Verify
```bash
node scripts/verifyTranslations.mjs
```

