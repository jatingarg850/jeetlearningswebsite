'use client';

import { useEffect, useRef, useState } from 'react';

interface UseStackingCardsOptions {
  cardHeight?: number;
  gap?: number;
  scaleStep?: number;
}

export function useStackingCards(options: UseStackingCardsOptions = {}) {
  const { cardHeight = 400, gap = 20, scaleStep = 0.05 } = options;
  const containerRef = useRef<HTMLDivElement>(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Intersection Observer to detect when container is in view
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    observer.observe(container);

    return () => {
      observer.unobserve(container);
    };
  }, []);

  useEffect(() => {
    if (!isInView) return;

    const container = containerRef.current;
    if (!container) return;

    const cards = container.querySelectorAll('[data-stack-card]');
    if (cards.length === 0) return;

    const handleScroll = () => {
      const containerRect = container.getBoundingClientRect();
      const containerTop = containerRect.top;

      cards.forEach((card, index) => {
        const cardElement = card as HTMLElement;
        const cardRect = cardElement.getBoundingClientRect();

        // Calculate how much the card has scrolled past its natural position
        const cardNaturalTop = index * (cardHeight + gap);
        const scrollProgress = containerTop - cardNaturalTop;

        if (scrollProgress > 0) {
          // Card is fixed - apply stacking effect
          const scale = Math.max(0.85, 1 - (scrollProgress * scaleStep) / cardHeight);
          const translateY = gap * index;
          cardElement.style.transform = `translateY(${translateY}px) scale(${scale})`;
          cardElement.style.position = 'sticky';
          cardElement.style.top = `${gap}px`;
        } else {
          // Card is not fixed yet
          cardElement.style.transform = 'translateY(0) scale(1)';
          cardElement.style.position = 'relative';
        }
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => window.removeEventListener('scroll', handleScroll);
  }, [isInView, cardHeight, gap, scaleStep]);

  return containerRef;
}
