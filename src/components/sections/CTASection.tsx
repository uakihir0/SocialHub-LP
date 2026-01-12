'use client';
import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import { useInView } from 'react-intersection-observer';
import { Button } from '@/components/ui/Button';
import { APP_STORE_URL } from '@/lib/constants';

export function CTASection() {
  const t = useTranslations('cta');
  const { ref, inView } = useInView({ threshold: 0.2, triggerOnce: true });

  return (
    <section ref={ref} className="py-20 md:py-32">
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center gradient-cta rounded-3xl py-16 md:py-24 px-6"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">{t('title')}</h2>
          <p className="text-lg md:text-xl text-white/80 mb-8">{t('subtitle')}</p>
          <Button variant="primary" href={APP_STORE_URL}>
            {t('button')}
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
