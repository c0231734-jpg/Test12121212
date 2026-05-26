import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { base44 } from '@/api/base44Client';
import { motion } from 'framer-motion';
import { ChevronRight, Lock } from 'lucide-react';
import { useLanguage } from '@/lib/LanguageContext';

const THREAT_COLORS = {
  low: 'text-green-400/70',
  moderate: 'text-yellow-400/70',
  high: 'text-orange-400/70',
  extreme: 'text-red-400/70',
  unknown: 'text-white/30',
};

export default function Wiki() {
  const { t } = useLanguage();
  const [activeSection, setActiveSection] = useState('creatures');
  const { data: creatures = [], isLoading } = useQuery({
    queryKey: ['creatures'],
    queryFn: () => base44.entities.Creature.list('-created_date', 20),
  });

  return (
    <div className="min-h-screen pt-28 pb-20">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <p className="text-[11px] font-medium tracking-[0.3em] uppercase text-white/30 mb-4">
            Midnight Productions
          </p>
          <h1 className="font-display font-black text-4xl md:text-6xl text-white tracking-tight mb-4">
            WIKI
          </h1>
          <div className="w-12 h-px bg-white/20 mb-6" />
          <p className="text-sm text-white/30 max-w-lg leading-relaxed">
            {t.wiki_page.intro}
          </p>
        </motion.div>

        {/* Categories */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-16">
          {[
            { key: 'creatures', label: t.wiki.cats[0], desc: t.wiki.cats[0], active: true },
            { key: 'lore', label: t.lore.label, desc: t.lore.title, active: true },
            { key: 'habitats', label: t.wiki.cats[2], desc: t.wiki.cats[2], active: false },
          ].map((cat, i) => (
            <motion.div
              key={cat.key}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              onClick={() => cat.active && setActiveSection(cat.key)}
              className={`border p-6 transition-colors ${cat.active ? 'border-white/20 bg-card/30 hover:bg-card/50 cursor-pointer' : 'border-border bg-card/10 opacity-50 cursor-not-allowed'} ${activeSection === cat.key ? 'border-white/40 bg-card/50' : ''}`}
            >
              <div className="flex items-start justify-between mb-4">
                <div className="w-8 h-8 border border-white/10 flex items-center justify-center">
                  {cat.active ? (
                    <span className={`w-1.5 h-1.5 ${activeSection === cat.key ? 'bg-white' : 'bg-white/60'}`} />
                  ) : (
                    <Lock className="w-3 h-3 text-white/20" />
                  )}
                </div>
                {!cat.active && (
                  <span className="text-[10px] tracking-widest uppercase text-white/20 border border-white/10 px-2 py-0.5">{t.wiki.soon}</span>
                )}
              </div>
              <p className="font-display font-semibold text-base text-white/70 mb-1">{cat.label}</p>
              <p className="text-xs text-white/25">{cat.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Lore Section */}
        {activeSection === 'lore' && (
          <motion.div
            key="lore"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-16"
          >
            <div className="flex items-center justify-between mb-8">
              <p className="text-[11px] font-medium tracking-[0.3em] uppercase text-white/30">{t.lore.title}</p>
            </div>
            <div className="border border-border bg-card/20 p-8 md:p-12 max-w-3xl">
              {t.lore.text.split('\n\n').map((para, i) => (
                <p key={i} className="text-sm text-white/50 leading-relaxed mb-5 last:mb-0">{para}</p>
              ))}
            </div>
          </motion.div>
        )}

        {/* Creatures */}
        {activeSection === 'creatures' && <div>
          <div className="flex items-center justify-between mb-8">
            <p className="text-[11px] font-medium tracking-[0.3em] uppercase text-white/30">{t.wiki.cats[0]}</p>
            <span className="text-[11px] text-white/20">{creatures.length} {t.wiki_page.records}</span>
          </div>

          {isLoading ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {[1,2,3].map(i => <div key={i} className="border border-border h-48 animate-pulse bg-card/20" />)}
            </div>
          ) : creatures.length === 0 ? (
            <div className="border border-border bg-card/10 p-16 text-center">
              <div className="w-10 h-10 border border-white/10 flex items-center justify-center mx-auto mb-5">
                <Lock className="w-4 h-4 text-white/20" />
              </div>
              <p className="font-display font-semibold text-base text-white/30 mb-2">{t.wiki_page.noCreatures}</p>
              <p className="text-xs text-white/15">{t.wiki_page.noCreaturesDesc}</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {creatures.map((creature, i) => (
                <motion.div
                  key={creature.id}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                >
                  <Link
                    to={`/creatures/${creature.slug}`}
                    className="block border border-border bg-card/20 hover:bg-card/40 transition-colors group"
                  >
                    {creature.image_url ? (
                      <img src={creature.image_url} alt={creature.name} className="w-full h-48 object-cover grayscale group-hover:grayscale-0 transition-all duration-500" />
                    ) : (
                      <div className="w-full h-48 border-b border-border bg-white/[0.02] flex items-center justify-center">
                        <span className="text-[11px] tracking-widest uppercase text-white/10">{t.wiki_page.image}</span>
                      </div>
                    )}
                    <div className="p-6">
                      <div className="flex items-center justify-between mb-2">
                        <p className="font-display font-semibold text-base text-white">{creature.name}</p>
                        <span className={`text-[10px] tracking-widest uppercase ${THREAT_COLORS[creature.threat_level]}`}>
                          {creature.threat_level || 'unknown'}
                        </span>
                      </div>
                      {creature.type && <p className="text-[11px] tracking-wider uppercase text-white/25 mb-3">{creature.type}</p>}
                      {creature.description && <p className="text-xs text-white/30 line-clamp-2 leading-relaxed">{creature.description}</p>}
                      <div className="flex items-center gap-1 mt-4 text-white/20 group-hover:text-white/50 transition-colors">
                        <span className="text-[10px] tracking-widest uppercase">{t.wiki_page.viewSheet}</span>
                        <ChevronRight className="w-3 h-3" />
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          )}
        </div>}
      </div>
    </div>
  );
}