'use client';

import { Sparkles } from 'lucide-react';
import Link from 'next/link';
import { useTranslations } from 'next-intl';

export function Footer() {
  const t = useTranslations('HomePage');

  return (
    <footer className="w-full relative overflow-hidden">
      {/* Dark gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-[#080614] to-[#06040f] z-0" />

      {/* Aurora glow blobs */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-0 right-1/4 h-[250px] w-[400px] rounded-full bg-violet-600/15 blur-[100px] animate-pulse-slow" />
        <div
          className="absolute bottom-0 left-1/4 h-[200px] w-[350px] rounded-full bg-cyan-500/10 blur-[90px] animate-pulse-slow"
          style={{ animationDelay: '2.5s' }}
        />
      </div>

      {/* Top border shimmer line */}
      <div className="absolute top-0 left-0 right-0 h-px z-10"
        style={{
          background: 'linear-gradient(90deg, transparent, oklch(0.65 0.28 290 / 50%), oklch(0.62 0.18 200 / 50%), transparent)',
        }}
      />

      <div className="container mx-auto px-4 py-16 relative z-10">
        {/* Brand row */}
        <div className="mb-12 flex flex-col items-center justify-center text-center">
          <div className="mb-5 flex items-center justify-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-violet-600/30 to-cyan-500/20 border border-violet-500/30">
              <Sparkles className="text-violet-400" size={18} />
            </div>
            <h2 className="text-2xl font-bold gradient-text">{t('title')}</h2>
          </div>
          <p className="max-w-md text-center text-muted-foreground text-sm leading-relaxed">
            {t('footer.description')}
          </p>
        </div>

        {/* Links grid */}
        <div className="grid gap-8 md:grid-cols-4 mb-12">
          {/* Platform */}
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-widest text-violet-400/80">
              {t('footer.platform.title')}
            </h3>
            <ul className="space-y-3 text-sm text-muted-foreground">
              {[
                { href: '/#features', label: t('footer.platform.features') },
                { href: '/#how-it-works', label: t('footer.platform.howItWorks') },
                { href: '/learn-more', label: t('footer.platform.learnMore') },
                { href: '/wishlist', label: t('footer.platform.wishlist') },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="transition-colors hover:text-violet-400 duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* For Recruiters */}
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-widest text-violet-400/80">
              {t('footer.forRecruiters.title')}
            </h3>
            <ul className="space-y-3 text-sm text-muted-foreground">
              {[
                { href: '/login/recruiter', label: t('footer.forRecruiters.login') },
                { href: '/register/recruiter', label: t('footer.forRecruiters.register') },
              ].map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="transition-colors hover:text-violet-400 duration-200">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* For Candidates */}
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-widest text-violet-400/80">
              {t('footer.forCandidates.title')}
            </h3>
            <ul className="space-y-3 text-sm text-muted-foreground">
              {[
                { href: '/jobs', label: t('footer.forCandidates.findJobs') },
                { href: '/login/candidate', label: t('footer.forCandidates.login') },
                { href: '/register/candidate', label: t('footer.forCandidates.register') },
              ].map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="transition-colors hover:text-cyan-400 duration-200">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-widest text-violet-400/80">
              {t('footer.company.title')}
            </h3>
            <ul className="space-y-3 text-sm text-muted-foreground">
              {[
                { href: '/about', label: t('footer.company.aboutUs') },
                { href: '/contact', label: t('footer.company.contact') },
                { href: '/privacy-policy', label: t('footer.company.privacyPolicy') },
                { href: '/terms', label: t('footer.company.termsOfService') },
              ].map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="transition-colors hover:text-violet-400 duration-200">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom row */}
        <div className="border-t border-white/8 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          {/* Socials */}
          <div className="flex gap-4">
            {/* LinkedIn */}
            <Link
              href="https://www.linkedin.com/in/sumanta-kabiraj/"
              target="_blank"
              className="text-muted-foreground hover:text-violet-400 transition-colors duration-200"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                <rect width="4" height="12" x="2" y="9" />
                <circle cx="4" cy="4" r="2" />
              </svg>
            </Link>
            {/* Twitter/X */}
            <Link
              href="https://x.com/infysumanta"
              target="_blank"
              className="text-muted-foreground hover:text-cyan-400 transition-colors duration-200"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
              </svg>
            </Link>
            {/* Instagram */}
            <Link
              href="https://www.instagram.com/infysumanta/"
              target="_blank"
              className="text-muted-foreground hover:text-fuchsia-400 transition-colors duration-200"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
              </svg>
            </Link>
          </div>

          <p className="text-xs text-muted-foreground">
            {t('footer.copyright', { year: new Date().getFullYear() })}
          </p>
        </div>
      </div>
    </footer>
  );
}
