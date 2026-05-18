'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { trackPageView } from '@/app/utils/analytics';

/**
 * Hook to automatically track page views
 * Use this in your layout or page components
 */
export function useAnalytics() {
  const pathname = usePathname();

  useEffect(() => {
    // Track page view when pathname changes
    if (pathname) {
      trackPageView(pathname, document.title);
    }
  }, [pathname]);
}

/**
 * Hook to track time on page
 * Tracks how long user spends on a page
 */
export function useTimeOnPage(pageName: string) {
  useEffect(() => {
    const startTime = Date.now();

    return () => {
      const timeSpent = Math.round((Date.now() - startTime) / 1000);
      if (timeSpent > 5) {
        // Only track if user spent more than 5 seconds
        const { trackTimeOnPage } = require('@/app/utils/analytics');
        trackTimeOnPage(pageName, timeSpent);
      }
    };
  }, [pageName]);
}

/**
 * Hook to track scroll depth
 * Tracks how far down the page user scrolls
 */
export function useScrollDepth() {
  useEffect(() => {
    let maxScroll = 0;

    const handleScroll = () => {
      const scrollPercentage =
        (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;

      if (scrollPercentage > maxScroll) {
        maxScroll = scrollPercentage;

        // Track at 25%, 50%, 75%, 100%
        if (
          maxScroll >= 25 ||
          maxScroll >= 50 ||
          maxScroll >= 75 ||
          maxScroll >= 100
        ) {
          const { trackScrollDepth } = require('@/app/utils/analytics');
          trackScrollDepth(Math.round(maxScroll));
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
}

/**
 * Hook to track external link clicks
 * Automatically tracks clicks on external links
 */
export function useExternalLinkTracking() {
  useEffect(() => {
    const handleClick = (event: MouseEvent) => {
      const target = event.target as HTMLAnchorElement;

      if (target.tagName === 'A' && target.href) {
        const isExternal =
          !target.href.includes(window.location.hostname) &&
          target.href.startsWith('http');

        if (isExternal) {
          const { trackExternalLinkClick } = require('@/app/utils/analytics');
          trackExternalLinkClick(target.href, target.textContent || 'External Link');
        }
      }
    };

    document.addEventListener('click', handleClick);
    return () => document.removeEventListener('click', handleClick);
  }, []);
}

/**
 * Hook to track button clicks
 * Tracks clicks on buttons with data-analytics attribute
 */
export function useButtonTracking() {
  useEffect(() => {
    const handleClick = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      const button = target.closest('[data-analytics-button]') as HTMLElement;

      if (button) {
        const buttonName = button.getAttribute('data-analytics-button');
        const buttonLocation = button.getAttribute('data-analytics-location') || 'Unknown';

        const { trackButtonClick } = require('@/app/utils/analytics');
        trackButtonClick(buttonName || 'Unknown Button', buttonLocation);
      }
    };

    document.addEventListener('click', handleClick);
    return () => document.removeEventListener('click', handleClick);
  }, []);
}

/**
 * Hook to track form submissions
 * Tracks form submissions with data-analytics attribute
 */
export function useFormTracking() {
  useEffect(() => {
    const handleSubmit = (event: SubmitEvent) => {
      const form = event.target as HTMLFormElement;
      const formName = form.getAttribute('data-analytics-form');
      const formType = form.getAttribute('data-analytics-type') || 'Unknown';

      if (formName) {
        const { trackFormSubmission } = require('@/app/utils/analytics');
        trackFormSubmission(formName, formType);
      }
    };

    document.addEventListener('submit', handleSubmit);
    return () => document.removeEventListener('submit', handleSubmit);
  }, []);
}

/**
 * Hook to track video events
 * Tracks video play and completion
 */
export function useVideoTracking(videoId: string, videoTitle: string, videoDuration?: number) {
  useEffect(() => {
    const video = document.getElementById(videoId) as HTMLVideoElement;

    if (!video) return;

    const handlePlay = () => {
      const { trackVideoPlay } = require('@/app/utils/analytics');
      trackVideoPlay(videoTitle, videoDuration);
    };

    const handleEnded = () => {
      const { trackVideoCompletion } = require('@/app/utils/analytics');
      trackVideoCompletion(videoTitle);
    };

    video.addEventListener('play', handlePlay);
    video.addEventListener('ended', handleEnded);

    return () => {
      video.removeEventListener('play', handlePlay);
      video.removeEventListener('ended', handleEnded);
    };
  }, [videoId, videoTitle, videoDuration]);
}
