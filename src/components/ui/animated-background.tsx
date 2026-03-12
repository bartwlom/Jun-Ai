'use client';

import { motion } from 'framer-motion';
import React from 'react';

import { cn, safeStyle } from '@/lib/utils';

interface AnimatedBackgroundProps {
  children: React.ReactNode;
  className?: string;
  patternColor?: string;
  patternOpacity?: number;
  animate?: boolean;
  colorScheme?: 'blue' | 'purple' | 'cyan' | 'indigo' | 'default';
}

export function AnimatedBackground({
  children,
  className,
  patternOpacity = 0.25,
  animate = true,
  colorScheme = 'default',
}: AnimatedBackgroundProps) {
  // Background gradient per scheme
  const getGradientStyle = () => {
    switch (colorScheme) {
      case 'blue':
        return 'bg-gradient-to-br from-slate-950 via-blue-950/60 to-slate-950';
      case 'purple':
        return 'bg-gradient-to-br from-slate-950 via-purple-950/60 to-slate-950';
      case 'cyan':
        return 'bg-gradient-to-br from-slate-950 via-cyan-950/60 to-slate-950';
      case 'indigo':
        return 'bg-gradient-to-br from-[#06040f] via-indigo-950/70 to-[#060413]';
      default:
        return 'bg-gradient-to-br from-[#06040f] via-violet-950/50 to-[#040610]';
    }
  };

  // Blob colors per scheme — more vibrant than before
  type BlobSet = [string, string, string, string, string];
  const getBlobColors = (): BlobSet => {
    switch (colorScheme) {
      case 'blue':
        return ['bg-blue-500', 'bg-cyan-500', 'bg-sky-400', 'bg-blue-300', 'bg-indigo-500'];
      case 'purple':
        return ['bg-purple-500', 'bg-fuchsia-500', 'bg-violet-400', 'bg-purple-300', 'bg-pink-500'];
      case 'cyan':
        return ['bg-cyan-500', 'bg-teal-400', 'bg-cyan-300', 'bg-emerald-400', 'bg-sky-400'];
      case 'indigo':
        return ['bg-indigo-500', 'bg-violet-500', 'bg-indigo-400', 'bg-purple-400', 'bg-cyan-500'];
      default:
        return ['bg-violet-600', 'bg-cyan-500', 'bg-purple-500', 'bg-fuchsia-500', 'bg-indigo-500'];
    }
  };

  const blobs = getBlobColors();

  return (
    <div className={cn('relative min-h-screen w-full overflow-hidden', className)}>
      {/* Deep background gradient */}
      <div className={cn('absolute inset-0', getGradientStyle())} />

      {/* Aurora blob layer */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Primary blob — large violet */}
        <motion.div
          className={cn(`absolute rounded-full ${blobs[0]}/20`)}
          style={safeStyle({
            width: '55%',
            height: '55%',
            top: '-5%',
            left: '-10%',
            filter: 'blur(90px)',
            opacity: patternOpacity * 2.2,
          })}
          animate={animate ? { x: [0, 30, 0], y: [0, 35, 0], scale: [1, 1.08, 1] } : undefined}
          transition={{ duration: 14, repeat: Infinity, repeatType: 'reverse', ease: 'easeInOut' }}
        />

        {/* Secondary blob — cyan right */}
        <motion.div
          className={cn(`absolute rounded-full ${blobs[1]}/25`)}
          style={safeStyle({
            width: '40%',
            height: '40%',
            bottom: '10%',
            right: '-5%',
            filter: 'blur(80px)',
            opacity: patternOpacity * 2.5,
          })}
          animate={animate ? { x: [0, -30, 0], y: [0, 20, 0], scale: [1, 1.12, 1] } : undefined}
          transition={{ duration: 17, repeat: Infinity, repeatType: 'reverse', ease: 'easeInOut' }}
        />

        {/* Accent blob — purple center-left */}
        <motion.div
          className={cn(`absolute rounded-full ${blobs[2]}/30`)}
          style={safeStyle({
            width: '28%',
            height: '28%',
            top: '50%',
            left: '20%',
            filter: 'blur(60px)',
            opacity: patternOpacity * 3,
          })}
          animate={animate ? { x: [0, 40, 0], y: [0, -30, 0], scale: [1, 1.18, 1] } : undefined}
          transition={{ duration: 11, repeat: Infinity, repeatType: 'reverse', ease: 'easeInOut' }}
        />

        {/* Accent blob — fuchsia bottom-left */}
        <motion.div
          className={cn(`absolute rounded-full ${blobs[3]}/25`)}
          style={safeStyle({
            width: '18%',
            height: '18%',
            bottom: '5%',
            left: '5%',
            filter: 'blur(50px)',
            opacity: patternOpacity * 3.5,
          })}
          animate={animate ? { x: [0, -20, 0], y: [0, -30, 0], scale: [1, 1.25, 1] } : undefined}
          transition={{ duration: 9, repeat: Infinity, repeatType: 'reverse', ease: 'easeInOut' }}
        />

        {/* Small accent — top-right */}
        <motion.div
          className={cn(`absolute rounded-full ${blobs[4]}/30`)}
          style={safeStyle({
            width: '15%',
            height: '15%',
            top: '20%',
            right: '15%',
            filter: 'blur(45px)',
            opacity: patternOpacity * 3,
          })}
          animate={animate ? { x: [0, 22, 0], y: [0, 18, 0], scale: [1, 1.15, 1] } : undefined}
          transition={{ duration: 10, repeat: Infinity, repeatType: 'reverse', ease: 'easeInOut' }}
        />
      </div>

      {/* Subtle noise/grain overlay for texture depth */}
      <div
        className="absolute inset-0 opacity-[0.025] pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='1'/%3E%3C/svg%3E")`,
          backgroundRepeat: 'repeat',
          backgroundSize: '128px',
        }}
      />

      {/* Content */}
      <div className="relative z-10 flex min-h-screen w-full items-center justify-center">
        {children}
      </div>
    </div>
  );
}
