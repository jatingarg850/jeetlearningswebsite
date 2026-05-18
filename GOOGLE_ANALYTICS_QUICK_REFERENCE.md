# Google Analytics Quick Reference Card

## 🎯 Get Your ID in 5 Minutes

### Quick Steps:
1. Go to **https://analytics.google.com**
2. Sign in with Gmail
3. Click **"Start measuring"** or **"Create account"**
4. Fill in account name: **"Jeet Learnings"**
5. Click **"Next"** → Fill property details → Click **"Next"**
6. Select **"Web"** as platform
7. Enter website URL: **https://jeetlearnings.com**
8. Click **"Create stream"**
9. **Copy your Measurement ID** (looks like: `G-XXXXXXXXXX`)

## 📝 Add to Your Project

### Create `.env.local` file:
```
NEXT_PUBLIC_GOOGLE_ANALYTICS_ID=G-XXXXXXXXXX
```

### Restart server:
```bash
npm run dev
```

## ✅ Verify It Works

1. Open your website
2. Go to https://analytics.google.com
3. Click **"Real-time"** → **"Overview"**
4. You should see **1 active user**

## 🔗 Important Links

| What | Link |
|------|------|
| Google Analytics | https://analytics.google.com |
| Get ID | Admin → Data streams |
| Real-time Data | Real-time → Overview |
| Documentation | https://support.google.com/analytics |

## 📊 Your Measurement ID Format

```
G-XXXXXXXXXX
```

**Example**: `G-ABC123DEF45`

## 🚀 Common Events to Track

```typescript
// Import from app/utils/analytics.ts
import { 
  trackCareerExploration,
  trackAssessmentStarted,
  trackConsultationBooked,
  trackFormSubmission
} from '@/app/utils/analytics';

// Track career view
trackCareerExploration('Data Scientist', 'Engineering');

// Track assessment start
trackAssessmentStarted('dmit');

// Track booking
trackConsultationBooked('Career Counseling');

// Track form
trackFormSubmission('Contact Form', 'Inquiry');
```

## 🎨 Add Tracking to Buttons

```html
<button 
  data-analytics-button="Explore Careers"
  data-analytics-location="Homepage Hero"
>
  Explore Careers
</button>
```

## 📱 Use Analytics Hooks

```typescript
'use client';

import { useAnalytics, useScrollDepth } from '@/app/hooks/useAnalytics';

export default function Page() {
  useAnalytics();        // Track page views
  useScrollDepth();      // Track scroll depth
  
  return <div>Your content</div>;
}
```

## 🔍 Troubleshooting

| Problem | Solution |
|---------|----------|
| No data showing | Wait 24-48 hours, check ID in .env.local |
| Wrong ID format | Should start with "G-", not "UA-" |
| GA not loading | Restart dev server with `npm run dev` |
| Can't find ID | Go to Admin → Data streams in GA |

## 📞 Need Help?

- **Google Analytics Help**: https://support.google.com/analytics
- **Setup Guide**: See `GOOGLE_ANALYTICS_SETUP.md`
- **Detailed Instructions**: See `GET_GOOGLE_ANALYTICS_ID.md`

---

**Your Measurement ID**: `G-XXXXXXXXXX` (Replace with your actual ID)

**Status**: Ready to implement ✅
