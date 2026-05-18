import type { Metadata } from "next";
import { Poppins, Inter, Fredoka, Luckiest_Guy, DM_Sans } from "next/font/google";
import "./globals.css";
import { TranslationProvider } from "@/app/context/TranslationContext";
import { GoogleAnalytics } from "@/app/components/GoogleAnalytics";
import { TranslationLoadingIndicator } from "@/app/components/TranslationLoadingBuffer";
import { TranslationLinkInterceptor } from "@/app/components/TranslationLinkInterceptor";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-inter",
  display: "swap",
});

const fredoka = Fredoka({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-fredoka",
  display: "swap",
});

const luckiestGuy = Luckiest_Guy({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-luckiest-guy",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-dm-sans",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.jeetlearnings.com"),
  title: "Career Guidance Platform | Jeet Learnings - Find Your Perfect Career Path",
  description:
    "Discover your ideal career with our comprehensive 16-section career architecture. Get personalized guidance, psychometric assessments, DMIT analysis, and expert mentorship. Trusted by 10,000+ students for career planning and development.",
  keywords: [
    "career guidance",
    "career counseling",
    "career path",
    "career planning",
    "psychometric test",
    "DMIT test",
    "career assessment",
    "aptitude test",
    "IQ test",
    "personality test",
    "career advice",
    "career development",
    "career exploration",
    "career coaching",
    "career mentorship",
    "career opportunities",
    "job guidance",
    "education counseling",
    "career architecture",
    "career journey",
  ],
  authors: [{ name: "Jeet Learnings" }],
  creator: "Jeet Learnings",
  publisher: "Jeet Learnings",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  icons: {
    icon: {
      url: "/images/mainlogo.png",
      sizes: "192x192",
      type: "image/png",
    },
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://jeetlearnings.com",
    siteName: "Jeet Learnings",
    title: "Career Guidance Platform | Find Your Perfect Career Path",
    description:
      "Comprehensive career guidance with psychometric assessments, DMIT analysis, and expert mentorship. Discover your ideal career with our 16-section career architecture.",
    images: [
      {
        url: "/images/mainlogo.png",
        width: 1200,
        height: 630,
        alt: "Jeet Learnings - Career Guidance Platform",
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Career Guidance Platform | Jeet Learnings",
    description:
      "Discover your ideal career with personalized guidance, psychometric assessments, and expert mentorship.",
    images: ["/images/mainlogo.png"],
    creator: "@jeetlearnings",
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },
  alternates: {
    canonical: "https://jeetlearnings.com",
    languages: {
      "en-IN": "https://jeetlearnings.com",
      hi: "https://jeetlearnings.com/hi",
    },
  },
};

function LayoutContent({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <TranslationLoadingIndicator />
      <TranslationLinkInterceptor />
      {children}
    </>
  );
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=5.0" />
      </head>
      <body className={`${poppins.variable} ${inter.variable} ${fredoka.variable} ${luckiestGuy.variable} ${dmSans.variable} antialiased`}>
        <GoogleAnalytics />
        <TranslationProvider>
          <LayoutContent>{children}</LayoutContent>
        </TranslationProvider>
      </body>
    </html>
  );
}
