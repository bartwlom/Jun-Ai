'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import * as React from 'react';

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { cn, safeStyle } from '@/lib/utils';

import { GradientBackground } from './gradient-background';

interface AuthCardProps extends React.ComponentProps<typeof Card> {
  colorScheme?: 'blue' | 'purple' | 'cyan' | 'indigo' | 'default';
  children: React.ReactNode;
  title: string;
  description?: string;
  footer?: React.ReactNode;
  contentClassName?: string;
  headerClassName?: string;
  footerClassName?: string;
}

// Shared utility: get brand color values per scheme
function getSchemeColors(colorScheme: string) {
  switch (colorScheme) {
    case 'blue':
      return {
        primary: 'rgb(59, 130, 246)',
        secondary: 'rgb(14, 165, 233)',
        borderClass: 'border-blue-500/25 dark:border-blue-400/30',
      };
    case 'purple':
      return {
        primary: 'rgb(168, 85, 247)',
        secondary: 'rgb(217, 70, 239)',
        borderClass: 'border-purple-500/25 dark:border-purple-400/30',
      };
    case 'cyan':
      return {
        primary: 'rgb(14, 165, 233)',
        secondary: 'rgb(20, 184, 166)',
        borderClass: 'border-cyan-500/25 dark:border-cyan-400/30',
      };
    case 'indigo':
      return {
        primary: 'rgb(139, 92, 246)',
        secondary: 'rgb(14, 165, 233)',
        borderClass: 'border-violet-500/25 dark:border-violet-400/30',
      };
    default:
      return {
        primary: 'rgb(139, 92, 246)',
        secondary: 'rgb(14, 165, 233)',
        borderClass: 'border-violet-500/25 dark:border-violet-400/30',
      };
  }
}

export function AuthCard({
  colorScheme = 'default',
  children,
  title,
  description,
  footer,
  className,
  contentClassName,
  headerClassName,
  footerClassName,
  ...props
}: AuthCardProps) {
  const { primary, secondary, borderClass } = getSchemeColors(colorScheme);

  return (
    <motion.div
      className="relative w-full"
      animate={{
        boxShadow: [
          `0 0 20px ${primary}22, 0 0 60px ${secondary}11`,
          `0 0 35px ${primary}44, 0 0 80px ${secondary}22`,
          `0 0 20px ${primary}22, 0 0 60px ${secondary}11`,
        ],
      }}
      transition={{ duration: 4, repeat: Infinity, repeatType: 'reverse', ease: 'easeInOut' }}
    >
      <Card
        className={cn(
          'w-full backdrop-blur-2xl border relative overflow-hidden',
          borderClass,
          'bg-white/5 dark:bg-white/[0.04]',
          'shadow-2xl',
          className
        )}
        {...props}
      >
        <CardHeader className={cn('space-y-1 relative z-10', headerClassName)}>
          <CardTitle className="text-2xl font-bold">{title}</CardTitle>
          {description && <CardDescription>{description}</CardDescription>}
        </CardHeader>
        <CardContent className={cn('relative z-10', contentClassName)}>{children}</CardContent>
        {footer && (
          <CardFooter className={cn('flex flex-col space-y-4 relative z-10', footerClassName)}>
            {footer}
          </CardFooter>
        )}
      </Card>
    </motion.div>
  );
}

// Animated version of the AuthCard
export function AnimatedAuthCard({
  colorScheme = 'default',
  children,
  title,
  description,
  footer,
  className,
  contentClassName,
  headerClassName,
  footerClassName,
  ...props
}: AuthCardProps) {
  const { primary, secondary, borderClass } = getSchemeColors(colorScheme);

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
    >
      <motion.div
        className="relative w-full"
        animate={{
          boxShadow: [
            `0 0 20px ${primary}22, 0 0 60px ${secondary}11`,
            `0 0 40px ${primary}44, 0 0 100px ${secondary}22`,
            `0 0 20px ${primary}22, 0 0 60px ${secondary}11`,
          ],
        }}
        transition={{ duration: 4, repeat: Infinity, repeatType: 'reverse', ease: 'easeInOut' }}
      >
        <GradientBackground baseColor={primary} className="rounded-xl opacity-60" />

        {/* Neon border gradient overlay */}
        <div
          className="absolute inset-0 rounded-xl pointer-events-none z-0"
          style={safeStyle({
            background: `linear-gradient(135deg, ${primary}30 0%, transparent 50%, ${secondary}20 100%)`,
          })}
        />

        <Card
          className={cn(
            'w-full backdrop-blur-2xl border relative overflow-hidden rounded-xl',
            borderClass,
            'bg-white/5 dark:bg-white/[0.04]',
            'shadow-2xl',
            className
          )}
          {...props}
        >
          {/* Shimmer top-edge highlight */}
          <div
            className="absolute top-0 left-0 right-0 h-px z-10 pointer-events-none"
            style={safeStyle({
              background: `linear-gradient(90deg, transparent, ${primary}80, ${secondary}80, transparent)`,
            })}
          />

          <CardHeader className={cn('space-y-1 relative z-10', headerClassName)}>
            <div className="flex flex-col items-center mb-4">
              <div
                className="h-16 w-16 mb-4 rounded-2xl flex items-center justify-center"
                style={safeStyle({
                  background: `linear-gradient(135deg, ${primary}30, ${secondary}20)`,
                  border: `1px solid ${primary}40`,
                  boxShadow: `0 0 20px ${primary}30`,
                })}
              >
                <Image
                  src="/images/hirelytics-logo.svg"
                  alt="Hirelytics"
                  width={40}
                  height={40}
                  className="h-10 w-10 dark:invert-[0.1] dark:brightness-110"
                />
              </div>
            </div>
            <CardTitle className="text-2xl font-bold text-center">{title}</CardTitle>
            {description && (
              <CardDescription className="text-center">{description}</CardDescription>
            )}
          </CardHeader>
          <CardContent className={cn('relative z-10', contentClassName)}>{children}</CardContent>
          {footer && (
            <CardFooter className={cn('flex flex-col space-y-4 relative z-10', footerClassName)}>
              {footer}
            </CardFooter>
          )}
        </Card>
      </motion.div>
    </motion.div>
  );
}
