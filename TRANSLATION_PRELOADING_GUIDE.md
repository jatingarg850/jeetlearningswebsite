# Translation Preloading System Guide

## Overview

The translation preloading system automatically loads Hindi translations when users switch to Hindi language. It shows a loading buffer/indicator while translations are being fetched, ensuring users see content only after translations are ready.

## How It Works

### 1. **Automatic Route Preloading**
When a user switches to Hindi language or navigates to a new route with Hindi selected:
- The system automatically preloads all translations for that route
- A loading indicator appears at the top of the page
- Content is displayed only after translations are loaded

### 2. **Loading States**
- **Loading Indicator**: A thin animated bar at the top of the page (visible only during Hindi translation loading)
- **Full Page Loading Buffer**: Optional full-screen loader for critical content
- **Skeleton Loaders**: For individual content sections

## Components & Hooks

### Components

#### `TranslationLoadingIndicator`
Minimal loading bar at the top of the page.
```tsx
import { TranslationLoadingIndicator } from "@/app/components/TranslationLoadingBuffer";

// Already included in root layout
```

#### `TranslationLoadingBuffer`
Full-screen loading state for critical content.
```tsx
import { TranslationLoadingBuffer } from "@/app/components/TranslationLoadingBuffer";

export default function MyPage() {
  return (
    <TranslationLoadingBuffer>
      <YourContent />
    </TranslationLoadingBuffer>
  );
}
```

#### `TranslationSkeleton`
Skeleton loader for content sections.
```tsx
import { TranslationSkeleton } from "@/app/components/TranslationLoadingBuffer";

export default function MySection() {
  const { isRouteLoading } = useTranslation();
  
  if (isRouteLoading) {
    return <TranslationSkeleton />;
  }
  
  return <ActualContent />;
}
```

### Hooks

#### `useTranslation()`
Get current language and loading state.
```tsx
import { useTranslation } from "@/app/context/TranslationContext";

export default function MyComponent() {
  const { language, isRouteLoading, toggleLanguage } = useTranslation();
  
  return (
    <div>
      <p>Current Language: {language}</p>
      <p>Loading: {isRouteLoading}</p>
      <button onClick={toggleLanguage}>Toggle Language</button>
    </div>
  );
}
```

#### `useRouteTranslationPreload()`
Manually trigger route preloading.
```tsx
import { useRouteTranslationPreload } from "@/app/hooks/useRouteTranslationPreload";

export default function MyComponent() {
  const { isRouteLoading } = useRouteTranslationPreload();
  
  return <div>{isRouteLoading ? "Loading..." : "Ready"}</div>;
}
```

#### `useTranslatedContent()`
Get translated text for a single string.
```tsx
import { useTranslatedContent } from "@/app/hooks/useTranslatedContent";

export default function MyComponent() {
  const translatedText = useTranslatedContent("Hello World");
  
  return <p>{translatedText}</p>;
}
```

#### `useTranslatedContents()`
Get translated text for multiple strings.
```tsx
import { useTranslatedContents } from "@/app/hooks/useTranslatedContent";

export default function MyComponent() {
  const translations = useTranslatedContents({
    title: "Welcome",
    description: "This is a description"
  });
  
  return (
    <div>
      <h1>{translations.title}</h1>
      <p>{translations.description}</p>
    </div>
  );
}
```

#### `useTranslationLoading()`
Get only the loading state.
```tsx
import { useTranslationLoading } from "@/app/hooks/useTranslatedContent";

export default function MyComponent() {
  const isLoading = useTranslationLoading();
  
  return <div>{isLoading ? "Loading translations..." : "Ready"}</div>;
}
```

## Usage Examples

### Example 1: Basic Page with Preloading
```tsx
"use client";

import { useTranslation } from "@/app/context/TranslationContext";
import { useTranslatedContent } from "@/app/hooks/useTranslatedContent";
import { TranslationLoadingBuffer } from "@/app/components/TranslationLoadingBuffer";

export default function CareerPage() {
  const { language } = useTranslation();
  const title = useTranslatedContent("Career Guidance");
  const description = useTranslatedContent("Explore your career options");
  
  return (
    <TranslationLoadingBuffer>
      <div>
        <h1>{title}</h1>
        <p>{description}</p>
      </div>
    </TranslationLoadingBuffer>
  );
}
```

### Example 2: Component with Loading Skeleton
```tsx
"use client";

import { useTranslation } from "@/app/context/TranslationContext";
import { useTranslatedContent } from "@/app/hooks/useTranslatedContent";
import { TranslationSkeleton } from "@/app/components/TranslationLoadingBuffer";

export default function CareerCard() {
  const { isRouteLoading } = useTranslation();
  const title = useTranslatedContent("Software Engineer");
  
  if (isRouteLoading) {
    return <TranslationSkeleton />;
  }
  
  return (
    <div className="card">
      <h2>{title}</h2>
    </div>
  );
}
```

### Example 3: Language Toggle with Preloading
```tsx
"use client";

import { useTranslation } from "@/app/context/TranslationContext";

export default function LanguageToggle() {
  const { language, toggleLanguage, isRouteLoading } = useTranslation();
  
  return (
    <button 
      onClick={toggleLanguage}
      disabled={isRouteLoading}
    >
      {language === "en" ? "हिंदी" : "English"}
      {isRouteLoading && " (Loading...)"}
    </button>
  );
}
```

## Flow Diagram

```
User clicks Language Toggle (English → Hindi)
         ↓
TranslationContext updates language state
         ↓
useRouteTranslationPreload hook detects change
         ↓
Calls preloadRoute("hi")
         ↓
getAllTranslations("hi") fetches all translations
         ↓
isRouteLoading = true (shows loading indicator)
         ↓
Translations loaded into cache
         ↓
isRouteLoading = false (hides loading indicator)
         ↓
Components re-render with translated content
```

## Key Features

✅ **Automatic Preloading**: Translations load automatically when language changes
✅ **Loading Indicators**: Visual feedback while translations are loading
✅ **Cached Translations**: Translations are cached to avoid redundant fetches
✅ **Fallback Support**: Falls back to English if translation not found
✅ **Route-Aware**: Preloads translations when navigating to new routes
✅ **Performance**: Only loads Hindi translations when needed
✅ **Error Handling**: Gracefully handles missing translations

## Performance Considerations

1. **Caching**: Translations are cached in memory after first load
2. **Lazy Loading**: Translations only load when Hindi is selected
3. **Batch Loading**: All translations for a language load together
4. **No Blocking**: Loading happens asynchronously without blocking UI

## Troubleshooting

### Loading indicator not showing
- Ensure component is inside `TranslationProvider`
- Check that language is set to "hi"
- Verify `isRouteLoading` state in React DevTools

### Translations not loading
- Check browser console for errors
- Verify translation JSON files exist in `app/data/translations/`
- Check network tab for failed requests

### Content showing before translations load
- Wrap content in `TranslationLoadingBuffer`
- Use `TranslationSkeleton` for individual sections
- Check `isRouteLoading` state before rendering

## File Structure

```
app/
├── context/
│   └── TranslationContext.tsx          # Main translation context with preloading
├── hooks/
│   ├── useTranslatedContent.ts         # Hooks for getting translations
│   └── useRouteTranslationPreload.ts   # Hook for route preloading
├── components/
│   └── TranslationLoadingBuffer.tsx    # Loading components
├── services/
│   └── translationService.ts           # Translation fetching service
└── data/
    └── translations/
        ├── en.json                     # English translations
        └── hi.json                     # Hindi translations
```

## Next Steps

1. Test language switching on different routes
2. Monitor performance with large translation files
3. Add more languages by extending the system
4. Customize loading UI to match your design
