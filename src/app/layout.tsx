import './globals.css';

import type { Metadata } from 'next';
import { Inter, Plus_Jakarta_Sans, Geist_Mono } from 'next/font/google';
import { getLocale } from 'next-intl/server';
import NextTopLoader from 'nextjs-toploader';
import { Toaster } from 'sonner';

import { FloatingControls } from '@/components/floating-controls';
import RootProvider from '@/provider/root-provider';

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
  display: 'swap',
});

const plusJakarta = Plus_Jakarta_Sans({
  variable: '--font-plus-jakarta',
  subsets: ['latin'],
  display: 'swap',
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin']
});

export const metadata: Metadata = {
  title: 'Jun-Ai - AI Interview Platform for Modern Hiring',
  description:
    'Our AI-driven platform transforms the recruitment process from job posting to candidate selection. Automate interviews, analyze resumes, and make data-driven hiring decisions.',
  icons: {
    icon: [{ url: '/favicon.ico' }],
  },
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const locale = await getLocale();
  return (
    <html lang={locale} suppressHydrationWarning>
      <body className={`${inter.variable} ${plusJakarta.variable} ${geistMono.variable} antialiased font-sans`}>
        <NextTopLoader
          color="oklch(0.65 0.28 290)"
          shadow="0 0 10px oklch(0.65 0.28 290),0 0 5px oklch(0.62 0.18 200)"
          height={3}
        />
        <RootProvider>
          <div className="relative flex min-h-screen flex-col">
            <FloatingControls />
            <div className="flex-1">{children}</div>
          </div>
          <Toaster richColors />
        </RootProvider> 
      </body>
    </html>
  );
}
