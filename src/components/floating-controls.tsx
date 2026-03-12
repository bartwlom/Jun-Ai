'use client';

import { motion } from 'framer-motion';
import { Home } from 'lucide-react';
import Link from 'next/link';
import * as React from 'react';

import { LanguageSelector } from '@/components/language-selector';
import { ThemeToggle } from '@/components/theme-toggle';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

interface FloatingControlsProps {
  className?: string;
  side?: 'left' | 'right';
}

export function FloatingControls({ className, side = 'right' }: FloatingControlsProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: side === 'left' ? -20 : 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
      className={cn(
        'fixed z-50 flex flex-col items-center gap-3 p-2.5 rounded-2xl',
        'bg-white/[0.04] dark:bg-white/[0.03]',
        'backdrop-blur-2xl',
        'border border-white/10',
        'shadow-xl shadow-black/20',
        side === 'left' ? 'left-4' : 'right-4',
        'top-1/2 -translate-y-1/2',
        className
      )}
      style={{
        boxShadow:
          '0 0 0 1px oklch(1 0 0 / 8%), 0 8px 32px oklch(0 0 0 / 30%), 0 0 20px oklch(0.65 0.28 290 / 10%)',
      }}
    >
      <Link href="/">
        <Button
          variant="ghost"
          size="icon"
          className="rounded-xl h-9 w-9 bg-violet-500/10 hover:bg-violet-500/20 text-violet-400 border border-violet-500/20 hover:border-violet-400/40 transition-all duration-300"
        >
          <Home size={16} />
          <span className="sr-only">Home</span>
        </Button>
      </Link>
      <ThemeToggle />
      <LanguageSelector />
    </motion.div>
  );
}
