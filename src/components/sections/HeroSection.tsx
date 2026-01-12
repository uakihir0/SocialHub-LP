'use client';
import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import { Button } from '@/components/ui/Button';
import { ScrollIndicator } from '@/components/ui/ScrollIndicator';
import { CanvasWrapper } from '@/components/three/CanvasWrapper';
import { APP_STORE_URL, GITHUB_URL } from '@/lib/constants';

export function HeroSection() {
  const t = useTranslations('hero');

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      <CanvasWrapper />

      <div className="relative z-10 container mx-auto px-6 text-center">
        <motion.h1
          className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-bold tracking-tight mb-4 sm:mb-6"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          {t('title')}
        </motion.h1>

        <motion.p
          className="text-base sm:text-lg md:text-xl text-foreground-secondary max-w-3xl mx-auto mb-3 sm:mb-4"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          {t('tagline')}
        </motion.p>

        <motion.p
          className="text-xs sm:text-sm md:text-base text-foreground-muted mb-8 sm:mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.8 }}
        >
          {t('subtitle')}
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.8 }}
        >
          <Button variant="primary" href={APP_STORE_URL}>
            {t('downloadCTA')}
          </Button>
          <Button variant="secondary" href={GITHUB_URL}>
            {t('githubCTA')}
          </Button>
        </motion.div>
      </div>

      <ScrollIndicator />
    </section>
  );
}
