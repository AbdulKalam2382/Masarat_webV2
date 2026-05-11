import type { Metadata } from "next";
import { Inter, Outfit, Cairo } from "next/font/google";
import "./globals.css";
import { SmoothScrollProvider } from "@/lib/lenis";
import LogoIntro from "@/components/ui/LogoIntro";
import PageTransition from "@/components/layout/PageTransition";
import GSAPSetup from "@/components/ui/GSAPSetup";
import ScrollProgressBar from "@/components/ui/ScrollProgressBar";
import { cn } from "@/lib/utils";
import { ThemeProvider } from "next-themes";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { LanguageProvider } from "@/lib/LanguageContext";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const outfit = Outfit({ subsets: ["latin"], variable: "--font-outfit" });
const cairo = Cairo({ 
  subsets: ['arabic'],
  weight: ['300','400','500','600','700'],
  variable: '--font-cairo'
});

export const metadata: Metadata = {
  metadataBase: new URL('https://masaratkwt.com'),
  title: {
    default: 'Masarat Technologies | Enterprise IT Solutions',
    template: '%s | Masarat Technologies'
  },
  description: 'Leading IT solutions company specializing in Cybersecurity, Cloud Engineering, AI Integration, and IT Consulting. Proven enterprise technology expertise.',
  keywords: [
    'IT consulting',
    'cybersecurity', 
    'cloud solutions',
    'AI integration',
    'managed IT services',
    'enterprise technology',
    'مسارات تكنولوجيز',
    'شركة تقنية معلومات'
  ],
  authors: [{ name: 'Masarat Technologies' }],
  creator: 'Masarat Technologies',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    alternateLocale: 'ar_KW',
    url: 'https://masaratkwt.com',
    siteName: 'Masarat Technologies',
    title: 'Masarat Technologies | Enterprise IT Solutions',
    description: 'Leading IT solutions company specializing in Cybersecurity, Cloud, and AI. Proven enterprise technology expertise.',
    images: [{
      url: '/images/Masarat Logo.png',
      width: 1200,
      height: 630,
      alt: 'Masarat Technologies'
    }]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Masarat Technologies | Enterprise IT Solutions',
    description: 'Leading enterprise IT solutions company.',
    images: ['/images/Masarat Logo.png']
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1
    }
  },
  verification: {
    google: 'ADD_YOUR_GOOGLE_VERIFICATION_CODE_HERE'
  }
}


export default async function RootLayout({
  children,
  params: { locale }
}: Readonly<{
  children: React.ReactNode;
  params: { locale: string };
}>) {
  // Validate that the incoming `locale` is supported
  if (!routing.locales.includes(locale as "en" | "ar")) {
    notFound();
  }

  // Providing all messages to the client
  // side is the easiest way to get started
  const messages = await getMessages();

  const isRtl = locale === 'ar';

  return (
    <html lang={locale} dir={isRtl ? 'rtl' : 'ltr'} style={{ scrollBehavior: 'auto' }} suppressHydrationWarning>
      <body className={cn(
        inter.variable, 
        outfit.variable, 
        cairo.variable,
        isRtl ? "font-cairo" : "font-inter",
        "antialiased"
      )}>
        <LanguageProvider>
          <NextIntlClientProvider messages={messages}>
            <ThemeProvider
              attribute="class"
              defaultTheme="system"
              enableSystem
              disableTransitionOnChange={false}
            >
            <div className="noise-overlay" />
            <script
              type="application/ld+json"
              dangerouslySetInnerHTML={{
                __html: JSON.stringify({
                  "@context": "https://schema.org",
                  "@type": "Organization",
                  "name": "Masarat Technologies",
                  "url": "https://masaratkwt.com",
                  "logo": "https://masaratkwt.com/images/Masarat Logo.png",
                  "description": "Enterprise IT Solutions & Services provider",
                  "address": {
                    "@type": "PostalAddress",
                    "addressCountry": "KW",
                    "addressLocality": "Regional Headquarters"
                  },
                  "contactPoint": {
                    "@type": "ContactPoint",
                    "telephone": "+965-67013229",
                    "email": "info@masaratkwt.com",
                    "contactType": "customer service"
                  },
                  "sameAs": [
                    "https://www.linkedin.com/company/masarat-technologies"
                  ]
                })
              }}
            />
            <SmoothScrollProvider>
              <LogoIntro />
              {/* Global Orbs */}
              <div className={cn("orb bg-blue-600/20 top-[-100px]", isRtl ? "right-[-100px]" : "left-[-100px]")} />
              <div className={cn("orb bg-[#1A56DB]/10 bottom-[-100px] animation-delay-2000", isRtl ? "left-[-100px]" : "right-[-100px]")} />
              
              <ScrollProgressBar />
              <main className="relative min-h-screen">
                <GSAPSetup />
                <PageTransition>
                  {children}
                </PageTransition>
              </main>
            </SmoothScrollProvider>
          </ThemeProvider>
        </NextIntlClientProvider>
      </LanguageProvider>
    </body>
    </html>
  );
}
