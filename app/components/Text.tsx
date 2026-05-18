'use client';

import { useTranslation } from '@/app/hooks/useTranslation';

interface TextProps {
  children: string;
  className?: string;
  as?: 'span' | 'p' | 'div' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
}

/**
 * Translatable Text Component
 * Automatically translates text based on current language (English/Hindi)
 * 
 * Usage:
 * <Text>Home</Text>
 * <Text as="h1">Career Path</Text>
 * <Text className="text-lg">Book Consultation</Text>
 */
export function Text({ children, className, as: Component = 'span' }: TextProps) {
  let translatedText = children;
  
  try {
    const { t } = useTranslation();
    translatedText = t(children);
  } catch (error) {
    // If not in provider context, just use the original text
    translatedText = children;
  }

  return (
    <Component className={className}>
      {translatedText}
    </Component>
  );
}

/**
 * Translatable Button Component
 */
interface TranslatableButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: string;
}

export function TranslatableButton({ children, className, ...props }: TranslatableButtonProps) {
  let translatedText = children;
  
  try {
    const { t } = useTranslation();
    translatedText = t(children);
  } catch (error) {
    // If not in provider context, just use the original text
    translatedText = children;
  }

  return (
    <button className={className} {...props}>
      {translatedText}
    </button>
  );
}

/**
 * Translatable Link Component
 */
interface TranslatableLinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  children: string;
}

export function TranslatableLink({ children, className, ...props }: TranslatableLinkProps) {
  let translatedText = children;
  
  try {
    const { t } = useTranslation();
    translatedText = t(children);
  } catch (error) {
    // If not in provider context, just use the original text
    translatedText = children;
  }

  return (
    <a className={className} {...props}>
      {translatedText}
    </a>
  );
}
