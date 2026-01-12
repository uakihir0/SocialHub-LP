'use client';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useRouter, usePathname } from '@/i18n/routing';
import { useLocale } from 'next-intl';

export function Header() {
  const router = useRouter();
  const pathname = usePathname();
  const locale = useLocale();

  const toggleLocale = () => {
    const newLocale = locale === 'en' ? 'ja' : 'en';
    router.replace(pathname, { locale: newLocale });
  };

  return (
    <motion.header
      className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-6 py-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Image
              src="/icons/socialhub.webp"
              alt="SocialHub Logo"
              width={32}
              height={32}
              className="rounded-lg"
            />
            <span className="text-lg font-bold">SocialHub</span>
          </div>

          <motion.button
            onClick={toggleLocale}
            className="px-3 py-1.5 rounded-lg bg-white/10 hover:bg-white/20 border border-border font-mono text-sm"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {locale === 'ja' ? 'EN' : 'JA'}
          </motion.button>
        </div>
      </div>
    </motion.header>
  );
}
