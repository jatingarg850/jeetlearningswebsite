/**
 * Google Analytics Event Tracking Utility
 * Provides functions to track various user interactions
 */

declare global {
  interface Window {
    gtag?: (command: string, ...args: any[]) => void;
  }
}

/**
 * Track a custom event in Google Analytics
 */
export function trackEvent(
  eventName: string,
  eventParams?: Record<string, any>
) {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', eventName, eventParams);
  }
}

/**
 * Track page view
 */
export function trackPageView(path: string, title?: string) {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'page_view', {
      page_path: path,
      page_title: title,
    });
  }
}

/**
 * Track career exploration
 */
export function trackCareerExploration(careerName: string, category: string) {
  trackEvent('career_explored', {
    career_name: careerName,
    career_category: category,
    timestamp: new Date().toISOString(),
  });
}

/**
 * Track assessment started
 */
export function trackAssessmentStarted(assessmentType: 'dmit' | 'psychometric') {
  trackEvent('assessment_started', {
    assessment_type: assessmentType,
    timestamp: new Date().toISOString(),
  });
}

/**
 * Track assessment completed
 */
export function trackAssessmentCompleted(
  assessmentType: 'dmit' | 'psychometric',
  score?: number
) {
  trackEvent('assessment_completed', {
    assessment_type: assessmentType,
    score: score,
    timestamp: new Date().toISOString(),
  });
}

/**
 * Track consultation booking
 */
export function trackConsultationBooked(consultationType: string) {
  trackEvent('consultation_booked', {
    consultation_type: consultationType,
    timestamp: new Date().toISOString(),
  });
}

/**
 * Track resource download
 */
export function trackResourceDownload(resourceName: string, resourceType: string) {
  trackEvent('resource_downloaded', {
    resource_name: resourceName,
    resource_type: resourceType,
    timestamp: new Date().toISOString(),
  });
}

/**
 * Track blog post view
 */
export function trackBlogPostView(postTitle: string, postCategory: string) {
  trackEvent('blog_post_viewed', {
    post_title: postTitle,
    post_category: postCategory,
    timestamp: new Date().toISOString(),
  });
}

/**
 * Track search query
 */
export function trackSearch(searchQuery: string, resultsCount?: number) {
  trackEvent('search', {
    search_term: searchQuery,
    results_count: resultsCount,
    timestamp: new Date().toISOString(),
  });
}

/**
 * Track button click
 */
export function trackButtonClick(buttonName: string, buttonLocation: string) {
  trackEvent('button_clicked', {
    button_name: buttonName,
    button_location: buttonLocation,
    timestamp: new Date().toISOString(),
  });
}

/**
 * Track form submission
 */
export function trackFormSubmission(formName: string, formType: string) {
  trackEvent('form_submitted', {
    form_name: formName,
    form_type: formType,
    timestamp: new Date().toISOString(),
  });
}

/**
 * Track video play
 */
export function trackVideoPlay(videoTitle: string, videoDuration?: number) {
  trackEvent('video_started', {
    video_title: videoTitle,
    video_duration: videoDuration,
    timestamp: new Date().toISOString(),
  });
}

/**
 * Track video completion
 */
export function trackVideoCompletion(videoTitle: string) {
  trackEvent('video_completed', {
    video_title: videoTitle,
    timestamp: new Date().toISOString(),
  });
}

/**
 * Track language change
 */
export function trackLanguageChange(language: string) {
  trackEvent('language_changed', {
    language: language,
    timestamp: new Date().toISOString(),
  });
}

/**
 * Track error
 */
export function trackError(errorMessage: string, errorType: string) {
  trackEvent('error_occurred', {
    error_message: errorMessage,
    error_type: errorType,
    timestamp: new Date().toISOString(),
  });
}

/**
 * Track user engagement (scroll depth)
 */
export function trackScrollDepth(scrollPercentage: number) {
  trackEvent('scroll_depth', {
    scroll_percentage: scrollPercentage,
    timestamp: new Date().toISOString(),
  });
}

/**
 * Track time on page
 */
export function trackTimeOnPage(pageName: string, timeInSeconds: number) {
  trackEvent('time_on_page', {
    page_name: pageName,
    time_seconds: timeInSeconds,
    timestamp: new Date().toISOString(),
  });
}

/**
 * Track external link click
 */
export function trackExternalLinkClick(linkUrl: string, linkText: string) {
  trackEvent('external_link_clicked', {
    link_url: linkUrl,
    link_text: linkText,
    timestamp: new Date().toISOString(),
  });
}

/**
 * Track social share
 */
export function trackSocialShare(platform: string, contentTitle: string) {
  trackEvent('social_share', {
    platform: platform,
    content_title: contentTitle,
    timestamp: new Date().toISOString(),
  });
}

/**
 * Track user signup
 */
export function trackUserSignup(signupMethod: string) {
  trackEvent('user_signup', {
    signup_method: signupMethod,
    timestamp: new Date().toISOString(),
  });
}

/**
 * Track user login
 */
export function trackUserLogin(loginMethod: string) {
  trackEvent('user_login', {
    login_method: loginMethod,
    timestamp: new Date().toISOString(),
  });
}

/**
 * Set user properties
 */
export function setUserProperties(userId: string, properties?: Record<string, any>) {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('config', {
      user_id: userId,
      ...properties,
    });
  }
}

/**
 * Track conversion
 */
export function trackConversion(conversionName: string, conversionValue?: number) {
  trackEvent('conversion', {
    conversion_name: conversionName,
    conversion_value: conversionValue,
    timestamp: new Date().toISOString(),
  });
}
