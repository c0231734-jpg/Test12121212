import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { base44 } from '@/api/base44Client';
import { motion } from 'framer-motion';
import { Github, Twitter } from 'lucide-react';
import { useLanguage } from '@/lib/LanguageContext';

export default function Team() {
  const { t } = useLanguage();
  const { data: members = [], isLoading } = useQuery({
    queryKey: ['team-members'],
    queryFn: () => base44.entities.TeamMember.list('order', 20),
  });

  return (
    <div className="min-h-screen pt-28 pb-20">
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <div className="flex items-center gap-3 mb-3">
            <div className="w-8 h-px bg-white/20" />
            <span className="text-[10px] tracking-[0.4em] uppercase text-white/25">The Collective</span>
          </div>
          <h1 className="font-display font-black text-5xl md:text-7xl text-white tracking-tight leading-none">
            DEV TEAM
          </h1>
        </motion.div>

        {/* Cards */}
        {isLoading ? (
          <div className="flex flex-wrap gap-4">
            {[1, 2, 3, 4].map(i => (
              <div key={i} className="w-44 h-56 border border-border bg-card/20 animate-pulse" />
            ))}
          </div>
        ) : members.length === 0 ? (
          <p className="text-sm text-white/20 tracking-widest uppercase">{t.team_page.noMembers}</p>
        ) : (
          <div className="flex flex-wrap gap-4">
            {members.map((member, i) => (
              <motion.div
                key={member.id}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: i * 0.07 }}
                className="relative w-44 border border-white/10 bg-[#0d0d0d] p-5 flex flex-col items-center gap-3 group hover:border-white/20 transition-colors"
              >
                {/* Corner accents */}
                <div className="absolute top-0 left-0 w-3 h-3 border-t border-l border-white/20" />
                <div className="absolute top-0 right-0 w-3 h-3 border-t border-r border-white/20" />
                <div className="absolute bottom-0 left-0 w-3 h-3 border-b border-l border-white/20" />
                <div className="absolute bottom-0 right-0 w-3 h-3 border-b border-r border-white/20" />

                {/* Avatar */}
                <div className="w-20 h-20 rounded-full overflow-hidden border border-white/10 bg-white/5 flex items-center justify-center shrink-0">
                  {member.avatar_url ? (
                    <img
                      src={member.avatar_url}
                      alt={member.name}
                      className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-300"
                    />
                  ) : (
                    <span className="text-white/30 text-xl font-display font-bold">{member.name[0]}</span>
                  )}
                </div>

                {/* Name */}
                <p className="font-display font-semibold text-sm text-white text-center leading-tight">
                  {member.name}
                </p>

                {/* Role badge */}
                <div className="border border-white/10 px-3 py-1 w-full text-center">
                  <span className="text-[9px] tracking-[0.25em] uppercase text-white/40">{member.role}</span>
                </div>

                {/* Bio */}
                {member.bio && (
                  <p className="text-[10px] text-white/25 text-center leading-relaxed">{member.bio}</p>
                )}

                {/* Links */}
                {(member.github_url || member.twitter_url) && (
                  <div className="flex gap-3 mt-auto pt-1">
                    {member.github_url && (
                      <a href={member.github_url} target="_blank" rel="noreferrer" className="text-white/15 hover:text-white/60 transition-colors">
                        <Github className="w-3.5 h-3.5" />
                      </a>
                    )}
                    {member.twitter_url && (
                      <a href={member.twitter_url} target="_blank" rel="noreferrer" className="text-white/15 hover:text-white/60 transition-colors">
                        <Twitter className="w-3.5 h-3.5" />
                      </a>
                    )}
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}