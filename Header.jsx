import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '@/lib/LanguageContext';

const LANGS = [
{ code: 'pt-BR', label: 'PT' },
{ code: 'en', label: 'EN' },
{ code: 'es', label: 'ES' }];



export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const { lang, setLang, t } = useLanguage();
  const NAV = [
  { label: t.nav.team, path: '/team' },
  { label: t.nav.games, path: '/game' },
  { label: t.nav.contact, path: '/contact' }];


  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', fn);
    return () => window.removeEventListener('scroll', fn);
  }, []);

  useEffect(() => setOpen(false), [location]);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
    scrolled ? 'bg-background/95 backdrop-blur-md border-b border-border' : 'bg-transparent'}`
    }>
      <div className="max-w-7xl mx-auto px-6 h-14 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 group">
          

          
          <span className="font-display font-bold text-sm tracking-widest uppercase text-white">MIDNIGHT'S PROJECTS

          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-10">
          {NAV.map((item) =>
          <Link
            key={item.path}
            to={item.path}
            className={`text-xs font-medium tracking-[0.2em] transition-colors duration-200 ${
            location.pathname === item.path ? 'text-white' : 'text-white/40 hover:text-white/80'}`
            }>
            
              {item.label}
            </Link>
          )}
        </nav>

        {/* Language switcher */}
        <div className="hidden md:flex items-center gap-1 mr-2">
          {LANGS.map((l) =>
          <button
            key={l.code}
            onClick={() => setLang(l.code)}
            className={`text-[10px] font-medium tracking-widest px-2 py-1 transition-colors ${
            lang === l.code ? 'text-white border-b border-white/60' : 'text-white/30 hover:text-white/70'}`
            }>
            
              {l.label}
            </button>
          )}
        </div>

        {/* Discord button */}
        <div className="hidden md:flex items-center gap-4">
          <a
            href="https://discord.gg/N7q7vv49tX"
            target="_blank"
            rel="noreferrer"
            className="border border-white/20 px-4 py-1.5 text-xs font-medium tracking-widest uppercase text-white hover:bg-white hover:text-black transition-all duration-200">
            
            DISCORD
          </a>
          <div className="flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
            <span className="text-[10px] text-white/40 tracking-widest uppercase">Online</span>
          </div>
        </div>

        <button className="md:hidden text-white p-1" onClick={() => setOpen(!open)}>
          {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      <AnimatePresence>
        {open &&
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          className="md:hidden bg-background/98 border-b border-border overflow-hidden">
          
            <div className="px-6 py-6 flex flex-col gap-5">
              {NAV.map((item) =>
            <Link key={item.path} to={item.path} className="text-sm tracking-widest uppercase text-white/60 hover:text-white">
                  {item.label}
                </Link>
            )}
              <a href="https://discord.gg/N7q7vv49tX" target="_blank" rel="noreferrer" className="border border-white/20 px-4 py-2 text-xs tracking-widest text-center uppercase text-white">DISCORD</a>
              <div className="flex items-center gap-3 pt-2">
                {LANGS.map((l) =>
              <button key={l.code} onClick={() => setLang(l.code)}
              className={`text-xs tracking-widest transition-colors ${lang === l.code ? 'text-white' : 'text-white/30'}`}>
                    {l.label}
                  </button>
              )}
              </div>
            </div>
          </motion.div>
        }
      </AnimatePresence>
    </header>);

}