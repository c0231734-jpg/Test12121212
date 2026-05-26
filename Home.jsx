import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ChevronRight, ExternalLink } from 'lucide-react';
import { useLanguage } from '@/lib/LanguageContext';
import { useQuery } from '@tanstack/react-query';
import { base44 } from '@/api/base44Client';

export default function Home() {
  const { t } = useLanguage();
  const { data: members = [] } = useQuery({
    queryKey: ['team-members-home'],
    queryFn: () => base44.entities.TeamMember.list('order', 4),
  });
  const { data: games = [] } = useQuery({
    queryKey: ['games-home'],
    queryFn: () => base44.entities.Game.list('-created_date', 1),
  });
  const featuredGame = games[0] || null;
  return (
    <div>
      {/* HERO */}
      <section className="relative min-h-screen flex flex-col justify-center px-6 overflow-hidden">
        <div className="max-w-7xl mx-auto w-full grid md:grid-cols-2 gap-12 items-center pt-20">
          {/* Left */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-8"
            >
              <div className="inline-flex items-center gap-2 border border-white/15 px-3 py-1.5 mb-8">
                <span className="w-1.5 h-1.5 rounded-full bg-white/60" />
                <span className="text-[11px] font-medium tracking-[0.2em] uppercase text-white/50">
                  {t.hero.badge}
                </span>
              </div>

              <h1 className="font-display font-black leading-none tracking-[-0.02em] mb-6">
                <span className="block text-[clamp(3rem,10vw,7rem)] text-white">MIDNIGHT</span>
                <span className="block text-[clamp(1.2rem,4vw,2.5rem)] text-white/30 font-medium tracking-[0.15em] uppercase mt-2">
                  {t.hero.sub}
                </span>
              </h1>

              <p className="text-sm md:text-base text-white/40 leading-relaxed max-w-sm font-light mb-10">
                {t.hero.desc}
              </p>

              <div className="flex items-center gap-4">
                <Link
                  to="/game"
                  className="inline-flex items-center gap-2 bg-white text-black px-6 py-3 text-xs font-semibold tracking-[0.15em] uppercase hover:bg-white/90 transition-colors group"
                >
                  {t.hero.cta}
                  <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                </Link>
                <a
                  href="https://discord.gg/N7q7vv49tX"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 border border-white/20 text-white px-6 py-3 text-xs font-medium tracking-[0.15em] uppercase hover:bg-white/5 transition-colors"
                >
                  {t.hero.discord}
                </a>
              </div>
            </motion.div>
          </div>

          {/* Right — Logo placeholder */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="hidden md:flex items-center justify-center"
          >
            <div className="relative w-72 h-72 flex items-center justify-center">
              <img
                src="https://media.base44.com/images/public/6a0f8bffe77164e50b8c9054/255bd8616_image.png"
                alt="Midnight's Projects Logo"
                className="w-full h-full object-contain opacity-80 select-none"
              />
              {/* Corner accents */}
              <div className="absolute top-0 left-0 w-8 h-8 border-t border-l border-white/15" />
              <div className="absolute top-0 right-0 w-8 h-8 border-t border-r border-white/15" />
              <div className="absolute bottom-0 left-0 w-8 h-8 border-b border-l border-white/15" />
              <div className="absolute bottom-0 right-0 w-8 h-8 border-b border-r border-white/15" />
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <span className="text-[10px] tracking-[0.3em] uppercase text-white/20">SCROLL</span>
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-px h-10 bg-gradient-to-b from-white/20 to-transparent"
          />
        </motion.div>
      </section>

      {/* ABOUT */}
      <section className="py-28 border-t border-border">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="max-w-2xl"
          >
            <p className="text-[11px] font-medium tracking-[0.3em] uppercase text-white/30 mb-5">
              {t.about.label}
            </p>
            <h2 className="font-display font-bold text-3xl md:text-4xl text-white leading-tight mb-6">
              {t.about.title}
            </h2>
            <p className="text-sm text-white/40 leading-relaxed">
              {t.about.body}
            </p>
          </motion.div>
        </div>
      </section>

      {/* GAME PREVIEW */}
      <section className="py-20 border-t border-border">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-end justify-between mb-10">
            <div>
              <p className="text-[11px] font-medium tracking-[0.3em] uppercase text-white/30 mb-3">{t.game.label}</p>
              <h2 className="font-display font-bold text-2xl md:text-3xl text-white">{t.game.title}</h2>
            </div>
            <Link to="/game" className="text-[11px] tracking-widest uppercase text-white/30 hover:text-white flex items-center gap-1.5 transition-colors">
              {t.game.seeMore} <ChevronRight className="w-3 h-3" />
            </Link>
          </div>

          {featuredGame ? (
            <div className="border border-border bg-card/30 p-10 flex flex-col md:flex-row gap-10 items-start">
              {featuredGame.cover_url ? (
                <img src={featuredGame.cover_url} alt={featuredGame.title} className="w-full md:w-80 h-48 object-cover shrink-0 grayscale" />
              ) : (
                <div className="w-full md:w-80 h-48 border border-white/10 flex items-center justify-center shrink-0 bg-white/[0.02]">
                  <span className="text-[11px] tracking-widest uppercase text-white/15">{t.game.imgPlaceholder}</span>
                </div>
              )}
              <div>
                <div className="inline-flex items-center gap-2 border border-white/10 px-3 py-1 mb-5">
                  <span className="w-1 h-1 rounded-full bg-yellow-400" />
                  <span className="text-[10px] tracking-widest uppercase text-white/40">Em Desenvolvimento</span>
                </div>
                <h3 className="font-display font-bold text-2xl text-white mb-3">{featuredGame.title}</h3>
                {featuredGame.tagline && <p className="text-sm text-white/40 italic mb-3">"{featuredGame.tagline}"</p>}
                {featuredGame.description && (
                  <p className="text-sm text-white/30 leading-relaxed max-w-lg">{featuredGame.description}</p>
                )}
                <div className="flex items-center gap-6 mt-6">
                  <div>
                    <p className="text-[10px] tracking-widest uppercase text-white/20 mb-1">{t.game.genre}</p>
                    <p className="text-sm text-white/50">{featuredGame.genre || '—'}</p>
                  </div>
                  <div>
                    <p className="text-[10px] tracking-widest uppercase text-white/20 mb-1">{t.game.platform}</p>
                    <p className="text-sm text-white/50">{featuredGame.platform || '—'}</p>
                  </div>
                  <div>
                    <p className="text-[10px] tracking-widest uppercase text-white/20 mb-1">Engine</p>
                    <p className="text-sm text-white/50">{featuredGame.engine || '—'}</p>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div className="border border-border bg-card/30 p-10 flex flex-col md:flex-row gap-10 items-center">
              <img src="https://media.base44.com/images/public/6a0f8bffe77164e50b8c9054/9264749e6_image8.webp" alt="Midnight Trials" className="w-full md:w-80 h-48 object-cover shrink-0 grayscale" />
              <div>
                <div className="inline-flex items-center gap-2 border border-white/10 px-3 py-1 mb-5">
                  <span className="w-1 h-1 rounded-full bg-yellow-400" />
                  <span className="text-[10px] tracking-widest uppercase text-white/40">{t.game.statusBadge}</span>
                </div>
                <h3 className="font-display font-bold text-2xl text-white mb-3">{t.game.tba}</h3>
                <p className="text-sm text-white/30 leading-relaxed max-w-lg">{t.game.tbaDesc}</p>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* TEAM PREVIEW */}
      <section className="py-20 border-t border-border">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-end justify-between mb-10">
            <div>
              <p className="text-[11px] font-medium tracking-[0.3em] uppercase text-white/30 mb-3">{t.team.label}</p>
              <h2 className="font-display font-bold text-2xl md:text-3xl text-white">{t.team.title}</h2>
            </div>
            <Link to="/team" className="text-[11px] tracking-widest uppercase text-white/30 hover:text-white flex items-center gap-1.5 transition-colors">
              {t.team.seeAll} <ChevronRight className="w-3 h-3" />
            </Link>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {members.slice(0, 4).map((member, i) => (
              <motion.div
                key={member.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="border border-border bg-card/20 p-6 group hover:bg-card/50 transition-colors"
              >
                <div className="w-12 h-12 border border-white/10 bg-white/5 mb-4 overflow-hidden flex items-center justify-center">
                  {member.avatar_url
                    ? <img src={member.avatar_url} alt={member.name} className="w-full h-full object-cover" />
                    : <span className="text-xs text-white/20 font-bold">{member.name?.[0]}</span>
                  }
                </div>
                <p className="text-sm font-medium text-white/70 mb-1 truncate">{member.name}</p>
                <p className="text-[11px] text-white/30 tracking-wider uppercase truncate">{member.role}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* WIKI */}
      <section className="py-20 border-t border-border">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-[11px] font-medium tracking-[0.3em] uppercase text-white/30 mb-5">{t.wiki.label}</p>
              <h2 className="font-display font-bold text-3xl md:text-4xl text-white leading-tight mb-5">
                {t.wiki.title}
              </h2>
              <p className="text-sm text-white/35 leading-relaxed mb-8">
                {t.wiki.body}
              </p>
              <Link
                to="/wiki"
                className="inline-flex items-center gap-2 border border-white/20 text-white/60 px-5 py-2.5 text-xs tracking-widest uppercase hover:bg-white/5 hover:text-white transition-all"
              >
                {t.wiki.cta} <ChevronRight className="w-3 h-3" />
              </Link>
            </div>
            <div className="grid grid-cols-3 gap-3">
              {t.wiki.cats.map((item, i) => {
                const available = i < 2; // Criaturas e Lore disponíveis
                return (
                  <div key={item} className={`border p-6 text-center ${available ? 'border-white/20 bg-white/[0.04]' : 'border-white/8 bg-white/[0.02]'}`}>
                    <div className={`w-8 h-8 border mx-auto mb-4 flex items-center justify-center ${available ? 'border-white/30' : 'border-white/10'}`}>
                      {available && <span className="w-1.5 h-1.5 bg-white/60" />}
                    </div>
                    <p className={`text-[11px] tracking-widest uppercase ${available ? 'text-white/50' : 'text-white/30'}`}>{item}</p>
                    <p className={`text-[10px] mt-1 ${available ? 'text-white/30' : 'text-white/15'}`}>{available ? '✓ Disponível' : t.wiki.soon}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}