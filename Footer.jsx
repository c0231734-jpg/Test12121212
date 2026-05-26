import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="max-w-7xl mx-auto px-6 py-10 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          

          
          <span className="font-display font-bold text-xs tracking-widest uppercase text-white/60">
            MIDNIGHT PRODUCTIONS
          </span>
        </div>
        <div className="flex items-center gap-6">
          <Link to="/team" className="text-[11px] text-white/30 hover:text-white/70 tracking-widest uppercase transition-colors">Equipe</Link>
          <Link to="/game" className="text-[11px] text-white/30 hover:text-white/70 tracking-widest uppercase transition-colors">Jogos</Link>
          <Link to="/wiki" className="text-[11px] text-white/30 hover:text-white/70 tracking-widest uppercase transition-colors">Wiki</Link>
        </div>
        <p className="text-[11px] text-white/20 tracking-wider">
          © {new Date().getFullYear()} Midnight Productions
        </p>
      </div>
    </footer>);

}