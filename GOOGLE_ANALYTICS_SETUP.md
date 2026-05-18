# Google Analytics 4 Setup Guide - Jeet Learnings

## 📊 Overview
This guide explains how to set up and configure Google Analytics 4 (GA4) for the Jeet Learnings career guidance platform.

## 🚀 Quick Start

### Step 1: Create a Google Analytics Account
1. Go to [Google Analytics](https://analytics.google.com)
2. Click "Start measuring"
3. Enter your account name: "Jeet Learnings"
4. Accept the data sharing settings
5. Click "Create"

### Step 2: Create a Property
1. Property name: "Jeet Learnings Website"
2. Reporting timezone: "Asia/Kolkata" (India)
3. Currency: "Indian Rupee (₹)"
4. Click "Create property"

### Step 3: Create a Web Data Stream
1. Select "Web" as your platform
2. Website URL: `https://jeetlearnings.com`
3. Stream name: "Jeet Learnings Web"
4. Click "Create stream"

### Step 4: Get Your Measurement ID
1. After creating the stream, you'll see your Measurement ID
2. Format: `G-XXXXXXXXXX`
3. Copy this ID

### Step 5: Configure Environment Variables
1. Create a `.env.local` file in your project root
2. Add the following:
```
NEXT_PUBLIC_GOOGLE_ANALYTICS_ID=G-XXXXXXXXXX
```
3. Replace `G-XXXXXXXXXX` with your actual Measurement ID

### Step 6: Verify Installation
1. Deploy your changes or run `npm run dev`
2. Go to your website
3. In Google Analytics, go to "Real-time" → "Overview"
4. You should see active users on your site

## 📋 Configuration Details

### Environment Variables
```bash
# Required
NEXT_PUBLIC_GOOGLE_ANALYTICS_ID=G-XXXXXXXXXX

# Optional
SITE_URL=https://jeetlearnings.com
```

### Files Involved
- `app/components/GoogleAnalytics.tsx` - GA initialization component
- `app/utils/analytics.ts` - Event tracking utilities
- `app/layout.tsx` - GA component integration

## 📈 Event Tracking

### Available Events

#### Career Exploration
```typescript
import { trackCareerExploration } from '@/app/utils/analytics';

trackCareerExploration('Data Scientist', 'Science & Engineering');
```

#### Assessment Events
```typescript
import { trackAssessmentStarted, trackAssessmentCompleted } from '@/app/utils/analytics';

// When user starts assessment
trackAssessmentStarted('dmit');

// When user completes assessment
trackAssessmentCompleted('dmit', 85);
```

#### Consultation Booking
```typescript
import { trackConsultationBooked } from '@/app/utils/analytics';

trackConsultationBooked('Career Counseling');
```

#### Blog Post Views
```typescript
import { trackBlogPostView } from '@/app/utils/analytics';

trackBlogPostView('Top 10 Careers in 2024', 'Career Trends');
```

#### Form Submissions
```typescript
import { trackFormSubmission } from '@/app/utils/analytics';

trackFormSubmission('Contact Form', 'Inquiry');
```

#### Button Clicks
```typescript
import { trackButtonClick } from '@/app/utils/analytics';

trackButtonClick('Explore Careers', 'Homepage Hero');
```

#### Search Queries
```typescript
import { trackSearch } from '@/app/utils/analytics';

trackSearch('data scientist', 15);
```

#### External Links
```typescript
import { trackExternalLinkClick } from '@/app/utils/analytics';

trackExternalLinkClick('https://example.com', 'Partner Website');
```

#### Social Sharing
```typescript
import { trackSocialShare } from '@/app/utils/analytics';

trackSocialShare('LinkedIn', 'Career Guide: Data Scientist');
```

#### User Authentication
```typescript
import { trackUserSignup, trackUserLogin } from '@/app/utils/analytics';

trackUserSignup('Email');
trackUserLogin('Google');
```

#### Video Events
```typescript
import { trackVideoPlay, trackVideoCompletion } from '@/app/utils/analytics';

trackVideoPlay('Career Path Overview', 300);
trackVideoCompletion('Career Path Overview');
```

#### Language Changes
```typescript
import { trackLanguageChange } from '@/app/utils/analytics';

trackLanguageChange('Hindi');
```

#### Error Tracking
```typescript
import { trackError } from '@/app/utils/analytics';

trackError('Failed to load career data', 'API Error');
```

#### Engagement Metrics
```typescript
import { trackScrollDepth, trackTimeOnPage } from '@/app/utils/analytics';

trackScrollDepth(75);
trackTimeOnPage('Career Guide', 180);
```

## 🎯 Custom Events Setup

### Creating Custom Events in GA4

1. Go to Google Analytics
2. Navigate to "Admin" → "Custom definitions"
3. Click "Create custom metric" or "Create custom dimension"
4. Define your custom event

### Example: Career Exploration Event
```
Event name: career_explored
Parameters:
- career_name (string)
- career_category (string)
- timestamp (string)
```

## 📊 Reports to Set Up

### 1. User Acquisition Report
- Shows where users are coming from
- Organic search, direct, referral, etc.

### 2. Engagement Report
- Page views, session duration, bounce rate
- User interactions and events

### 3. Conversion Report
- Track consultation bookings
- Assessment completions
- Form submissions

### 4. Career Exploration Report
- Most viewed careers
- Career category popularity
- User journey through careers

### 5. Assessment Report
- DMIT test completions
- Psychometric test completions
- Assessment scores

## 🔍 Debugging

### Check if GA is Working
1. Open your website
2. Open browser DevTools (F12)
3. Go to Console tab
4. Type: `window.gtag`
5. Should return a function

### View Real-time Data
1. Go to Google Analytics
2. Click "Real-time" in left sidebar
3. Go to "Overview"
4. You should see active users

### Check Events
1. Go to "Real-time" → "Events"
2. Perform an action on your site
3. You should see the event appear

### Debug with Google Tag Assistant
1. Install [Google Tag Assistant](https://chrome.google.com/webstore/detail/tag-assistant-legacy/kejbdjndbnbjgmefkgdddjlbokphgjcf)
2. Open your website
3. Click Tag Assistant icon
4. It will show all tags on your page

## 🔐 Privacy & Compliance

### GDPR Compliance
```typescript
// In GoogleAnalytics.tsx, we've already set:
gtag('config', '${gaId}', {
  anonymize_ip: true,  // Anonymize IP addresses
  cookie_flags: 'SameSite=None;Secure'  // Secure cookies
});
```

### Cookie Consent
Consider implementing a cookie consent banner:
```typescript
// Example: Only load GA after user consent
if (userHasConsentedToAnalytics) {
  // Load GA
}
```

### Data Retention
1. Go to Admin → Data Settings
2. Set data retention to 14 months (default)
3. Disable data collection for users who opt-out

## 📱 Mobile & Cross-Device Tracking

### Enable User-ID Feature
1. Go to Admin → Property Settings
2. Enable "User-ID feature"
3. Implement user ID tracking in your app

### Cross-Device Tracking
```typescript
import { setUserProperties } from '@/app/utils/analytics';

setUserProperties('user_123', {
  user_type: 'premium',
  registration_date: '2024-05-12'
});
```

## 🎓 Advanced Features

### Goals & Conversions
1. Go to Admin → Conversions
2. Create new conversion event
3. Select event to track
4. Set conversion value (optional)

### Audiences
1. Go to Admin → Audiences
2. Create new audience based on:
   - User behavior
   - Demographics
   - Technology
   - Custom parameters

### Custom Reports
1. Go to "Reports" → "Explore"
2. Create custom report with:
   - Dimensions (Career, Category, etc.)
   - Metrics (Users, Sessions, etc.)
   - Filters and segments

## 📞 Support & Resources

### Google Analytics Resources
- [GA4 Documentation](https://support.google.com/analytics/answer/10089681)
- [GA4 Setup Guide](https://support.google.com/analytics/answer/9304153)
- [GA4 Events Guide](https://support.google.com/analytics/answer/9322688)

### Troubleshooting
- [GA4 Troubleshooting](https://support.google.com/analytics/answer/9164320)
- [Tag Assistant Help](https://support.google.com/tagassistant/answer/6103696)

### Community
- [Google Analytics Community](https://support.google.com/analytics/community)
- [Stack Overflow - Google Analytics](https://stackoverflow.com/questions/tagged/google-analytics)

## ✅ Verification Checklist

- [ ] Google Analytics account created
- [ ] GA4 property created
- [ ] Web data stream created
- [ ] Measurement ID obtained
- [ ] `.env.local` file created with GA ID
- [ ] GoogleAnalytics component added to layout
- [ ] Real-time data visible in GA
- [ ] Custom events configured
- [ ] Reports set up
- [ ] Privacy settings configured
- [ ] Team members added to GA account
- [ ] Goals and conversions created

## 🚀 Next Steps

1. **Week 1**: Set up GA4 and verify data collection
2. **Week 2**: Create custom events and reports
3. **Week 3**: Set up goals and conversions
4. **Week 4**: Create audiences and custom reports
5. **Ongoing**: Monitor analytics and optimize based on data

## 📊 Key Metrics to Monitor

### Daily
- Active users
- Sessions
- Page views
- Bounce rate

### Weekly
- Top pages
- Top events
- User acquisition sources
- Conversion rate

### Monthly
- Traffic trends
- User behavior patterns
- Goal completions
- Revenue (if applicable)

---

**Setup Date**: May 12, 2024
**Last Updated**: May 12, 2024
**Status**: Ready for Implementation
