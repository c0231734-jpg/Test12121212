import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { base44 } from '@/api/base44Client';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import { useLanguage } from '@/lib/LanguageContext';

export default function Game() {
  const { t } = useLanguage();
  const { data: games = [], isLoading } = useQuery({
    queryKey: ['games'],
    queryFn: () => base44.entities.Game.list('-created_date'),
  });

  return (
    <div className="min-h-screen pt-28 pb-20">
      <div className="max-w-7xl mx-auto px-6">
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
            {t.game_page.title}
          </h1>
          <div className="w-12 h-px bg-white/20" />
        </motion.div>

        {isLoading ? (
          <div className="border border-border h-64 animate-pulse bg-card/20" />
        ) : games.length === 0 ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="border border-border bg-card/20 p-12 md:p-16 flex flex-col md:flex-row gap-12 items-start"
          >
            <div className="w-full md:w-96 h-56 border border-white/8 flex items-center justify-center bg-white/[0.02] shrink-0">
              <span className="text-[11px] tracking-widest uppercase text-white/10">{t.game_page.imgPlaceholder}</span>
            </div>
            <div className="flex-1">
              <div className="inline-flex items-center gap-2 border border-white/10 px-3 py-1 mb-6">
                <span className="w-1.5 h-1.5 rounded-full bg-yellow-400/70" />
                <span className="text-[10px] tracking-widest uppercase text-white/30">{t.game_page.status.in_development}</span>
              </div>
              <h2 className="font-display font-bold text-3xl text-white mb-3">—</h2>
              <p className="text-sm text-white/30 leading-relaxed max-w-lg mb-8">
                {t.game_page.noGamesDesc}
              </p>
              <div className="grid grid-cols-3 gap-6 border-t border-border pt-6">
                {[t.game.genre, 'Engine', t.game.platform].map(label => (
                  <div key={label}>
                    <p className="text-[10px] tracking-widest uppercase text-white/20 mb-1">{label}</p>
                    <p className="text-sm text-white/40">—</p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        ) : (
          <div className="space-y-6">
            {games.map((game, i) => (
              <motion.div
                key={game.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="border border-border bg-card/20 p-10 flex flex-col md:flex-row gap-10 items-start hover:bg-card/30 transition-colors"
              >
                {game.cover_url ? (
                  <img src={game.cover_url} alt={game.title} className="w-full md:w-80 h-48 object-cover shrink-0 grayscale" />
                ) : (
                  <div className="w-full md:w-80 h-48 border border-white/8 flex items-center justify-center bg-white/[0.02] shrink-0">
                    <span className="text-[11px] tracking-widest uppercase text-white/10">{t.game_page.imgPlaceholder}</span>
                  </div>
                )}
                <div className="flex-1">
                  <div className="inline-flex items-center gap-2 border border-white/10 px-3 py-1 mb-5">
                    <span className="w-1.5 h-1.5 rounded-full bg-yellow-400/70" />
                    <span className="text-[10px] tracking-widest uppercase text-white/30">
                      {t.game_page.status[game.status] || game.status}
                    </span>
                  </div>
                  <h2 className="font-display font-bold text-2xl text-white mb-2">{game.title}</h2>
                  {game.tagline && <p className="text-sm text-white/40 italic mb-4">"{game.tagline}"</p>}
                  {game.description && <p className="text-sm text-white/30 leading-relaxed mb-6 max-w-lg">{game.description}</p>}
                  <div className="grid grid-cols-3 gap-6 border-t border-border pt-5">
                    <div>
                      <p className="text-[10px] tracking-widest uppercase text-white/20 mb-1">{t.game.genre}</p>
                      <p className="text-sm text-white/50">{game.genre || '—'}</p>
                    </div>
                    <div>
                      <p className="text-[10px] tracking-widest uppercase text-white/20 mb-1">Engine</p>
                      <p className="text-sm text-white/50">{game.engine || '—'}</p>
                    </div>
                    <div>
                      <p className="text-[10px] tracking-widest uppercase text-white/20 mb-1">{t.game.platform}</p>
                      <p className="text-sm text-white/50">{game.platform || 'Roblox'}</p>
                    </div>
                  </div>
                  {game.roblox_url && (
                    <a href={game.roblox_url} target="_blank" rel="noreferrer"
                      className="inline-flex items-center gap-2 mt-5 border border-white/20 px-5 py-2 text-xs tracking-widest uppercase text-white/60 hover:text-white hover:bg-white/5 transition-all">
                      {t.game_page.playRoblox} <ExternalLink className="w-3 h-3" />
                    </a>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}