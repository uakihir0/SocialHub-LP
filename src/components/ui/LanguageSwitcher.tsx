'use client';
import { useRouter, usePathname } from '@/i18n/routing';
import { useLocale } from 'next-intl';
import { motion } from 'framer-motion';

export function LanguageSwitcher() {
  const router = useRouter();
  const pathname = usePathname();
  const locale = useLocale();

  const toggleLocale = () => {
    const newLocale = locale === 'en' ? 'ja' : 'en';
    router.replace(pathname, { locale: newLocale });
  };

  return (
    <motion.button
      onClick={toggleLocale}
      className="fixed top-6 right-6 z-50 px-4 py-2 rounded-lg bg-white/10 hover:bg-white/20 border border-border font-mono text-sm"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      {locale === 'ja' ? 'EN' : 'JA'}
    </motion.button>
  );
}
