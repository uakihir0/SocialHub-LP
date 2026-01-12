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
          className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-6"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          {t('title')}
        </motion.h1>

        <motion.p
          className="text-lg md:text-xl text-foreground-secondary max-w-3xl mx-auto mb-4"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          {t('tagline')}
        </motion.p>

        <motion.p
          className="text-sm md:text-base text-foreground-muted mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          {t('subtitle')}
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
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
