import React from 'react';
import Spline from '@splinetool/react-spline';
import { Rocket, ShoppingCart, Link as LinkIcon } from 'lucide-react';

export default function HeroSplineCover() {
  return (
    <section className="relative w-full h-[80vh] md:h-[90vh] overflow-hidden">
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/vi0ijCQQJTRFc8LA/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Soft gradient overlays to improve text readability */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/70 via-white/30 to-white/80" />

      <div className="relative z-10 container mx-auto px-4 h-full flex flex-col items-center justify-center text-center">
        <span className="inline-flex items-center gap-2 text-xs uppercase tracking-wider font-semibold text-neutral-700 bg-white/70 backdrop-blur px-3 py-1 rounded-full border border-neutral-200 shadow-sm">
          <Rocket className="w-3.5 h-3.5" />
          Bitcoin Turtles • NFT Collection
        </span>
        <h1 className="mt-4 text-4xl md:text-6xl font-extrabold leading-tight text-neutral-900">
          Discover the Lore of the Bitcoin Turtles
        </h1>
        <p className="mt-4 max-w-2xl text-neutral-700">
          An interactive, story-driven showcase of a community-powered collection.
          Explore traits, rarity, and the world behind every shell.
        </p>

        <div className="mt-8 flex flex-col sm:flex-row items-center gap-3">
          <a
            href="#collection"
            className="inline-flex items-center gap-2 rounded-full bg-neutral-900 text-white px-5 py-3 text-sm font-semibold shadow hover:bg-neutral-800 transition-colors"
          >
            <Rocket className="w-4 h-4" />
            Explore Collection
          </a>
          <a
            href="#buy"
            className="inline-flex items-center gap-2 rounded-full bg-white text-neutral-900 px-5 py-3 text-sm font-semibold shadow border border-neutral-200 hover:bg-neutral-50 transition-colors"
          >
            <ShoppingCart className="w-4 h-4" />
            Where to Buy
          </a>
          <a
            href="#story"
            className="inline-flex items-center gap-2 rounded-full bg-white text-neutral-900 px-5 py-3 text-sm font-semibold shadow border border-neutral-200 hover:bg-neutral-50 transition-colors"
          >
            <LinkIcon className="w-4 h-4" />
            Watch the Origin Video
          </a>
        </div>
      </div>
    </section>
  );
}
