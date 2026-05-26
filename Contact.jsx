import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '@/lib/LanguageContext';

export default function Contact() {
  const { t } = useLanguage();
  return (
    <div className="min-h-screen pt-28 pb-20">
      <div className="max-w-3xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <p className="text-[11px] font-medium tracking-[0.3em] uppercase text-white/30 mb-4">
            {t.contact.label}
          </p>
          <h1 className="font-display font-black text-4xl md:text-6xl text-white tracking-tight mb-4">
            {t.contact.title}
          </h1>
          <div className="w-12 h-px bg-white/20 mb-6" />
          <p className="text-sm text-white/30 leading-relaxed">
            {t.contact.desc}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="border border-border bg-card/20 p-10 space-y-8"
        >
          <div>
            <p className="text-[10px] tracking-widest uppercase text-white/20 mb-3">{t.contact.discordLabel}</p>
            <a href="https://discord.gg/N7q7vv49tX" target="_blank" rel="noreferrer" className="text-sm text-white/50 hover:text-white transition-colors">discord.gg/N7q7vv49tX</a>
          </div>
          <div className="border-t border-border pt-8">
            <p className="text-[10px] tracking-widest uppercase text-white/20 mb-3">{t.contact.socialLabel}</p>
            <a href="https://www.tiktok.com/@midnight_.trials" target="_blank" rel="noreferrer" className="text-sm text-white/50 hover:text-white transition-colors">
              TikTok — @midnight_.trials
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
}