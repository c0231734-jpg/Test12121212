import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { base44 } from '@/api/base44Client';
import { motion } from 'framer-motion';
import { ChevronLeft, AlertTriangle } from 'lucide-react';

const THREAT_COLORS = {
  low: 'text-green-400 border-green-400/20',
  moderate: 'text-yellow-400 border-yellow-400/20',
  high: 'text-orange-400 border-orange-400/20',
  extreme: 'text-red-400 border-red-400/20',
  unknown: 'text-white/30 border-white/10',
};

const THREAT_LABELS = {
  low: 'Baixa',
  moderate: 'Moderada',
  high: 'Alta',
  extreme: 'Extrema',
  unknown: 'Desconhecida',
};

export default function CreatureDetail() {
  const { slug } = useParams();

  const { data: creatures = [], isLoading } = useQuery({
    queryKey: ['creature', slug],
    queryFn: () => base44.entities.Creature.filter({ slug }),
  });

  const creature = creatures[0];

  if (isLoading) {
    return (
      <div className="min-h-screen bg-grid flex items-center justify-center">
        <div className="w-6 h-6 border border-white/20 border-t-white/60 rounded-full animate-spin" />
      </div>
    );
  }

  if (!creature) {
    return (
      <div className="min-h-screen bg-grid flex flex-col items-center justify-center gap-4">
        <AlertTriangle className="w-8 h-8 text-white/20" />
        <p className="font-display font-semibold text-white/30">Criatura não encontrada</p>
        <Link to="/wiki" className="text-xs tracking-widest uppercase text-white/20 hover:text-white transition-colors">
          ← Voltar à Wiki
        </Link>
      </div>
    );
  }

  const threatClass = THREAT_COLORS[creature.threat_level] || THREAT_COLORS.unknown;

  return (
    <div className="bg-grid min-h-screen pt-24 pb-20">
      <div className="max-w-5xl mx-auto px-6">
        <motion.div initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.4 }}>
          <Link to="/wiki" className="inline-flex items-center gap-1.5 text-[11px] tracking-widest uppercase text-white/25 hover:text-white/60 transition-colors mb-12">
            <ChevronLeft className="w-3 h-3" />
            Wiki
          </Link>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {creature.image_url ? (
              <img src={creature.image_url} alt={creature.name} className="w-full aspect-square object-cover grayscale" />
            ) : (
              <div className="w-full aspect-square border border-white/8 flex items-center justify-center bg-white/[0.02]">
                <span className="text-[11px] tracking-widest uppercase text-white/10">Imagem</span>
              </div>
            )}
          </motion.div>

          {/* Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            {creature.type && (
              <p className="text-[11px] tracking-[0.3em] uppercase text-white/25 mb-3">{creature.type}</p>
            )}
            <h1 className="font-display font-black text-3xl md:text-5xl text-white tracking-tight mb-6">
              {creature.name}
            </h1>

            <div className={`inline-flex items-center gap-2 border px-3 py-1.5 mb-8 ${threatClass}`}>
              <AlertTriangle className="w-3 h-3" />
              <span className="text-[11px] tracking-widest uppercase">
                Ameaça: {THREAT_LABELS[creature.threat_level] || 'Desconhecida'}
              </span>
            </div>

            {creature.description && (
              <div className="mb-8">
                <p className="text-[10px] tracking-widest uppercase text-white/20 mb-3">Descrição</p>
                <p className="text-sm text-white/45 leading-relaxed">{creature.description}</p>
              </div>
            )}

            {creature.habitat && (
              <div className="mb-8">
                <p className="text-[10px] tracking-widest uppercase text-white/20 mb-3">Habitat</p>
                <p className="text-sm text-white/45">{creature.habitat}</p>
              </div>
            )}

            {creature.abilities && creature.abilities.length > 0 && (
              <div className="mb-8">
                <p className="text-[10px] tracking-widest uppercase text-white/20 mb-3">Habilidades</p>
                <div className="flex flex-wrap gap-2">
                  {creature.abilities.map((ability, i) => (
                    <span key={i} className="border border-white/10 px-3 py-1 text-[11px] text-white/40 tracking-wider">
                      {ability}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </motion.div>
        </div>

        {/* Lore */}
        {creature.lore && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-16 border-t border-border pt-12"
          >
            <p className="text-[10px] tracking-[0.3em] uppercase text-white/20 mb-6">Lore</p>
            <p className="text-sm text-white/35 leading-loose max-w-2xl whitespace-pre-line">{creature.lore}</p>
          </motion.div>
        )}
      </div>
    </div>
  );
}