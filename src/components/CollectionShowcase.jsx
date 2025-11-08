import React, { useMemo, useState } from 'react';
import { Search, Filter, Star } from 'lucide-react';

// Lightweight demo dataset (can be replaced with live metadata later)
const demoNFTs = Array.from({ length: 12 }).map((_, i) => ({
  id: i + 1,
  name: `Turtle #${i + 1}`,
  image: `https://picsum.photos/seed/turtle-${i + 1}/600/600`,
  rarity: ['Common', 'Uncommon', 'Rare', 'Epic'][i % 4],
  traits: ['Shell', 'Eyes', 'Background'].slice(0, (i % 3) + 1),
  traitCount: (i % 6),
}));

export default function CollectionShowcase() {
  const [query, setQuery] = useState('');
  const [rarity, setRarity] = useState('All');

  const filtered = useMemo(() => {
    return demoNFTs.filter((n) => {
      const matchesQuery = query ? String(n.id).includes(query) || n.name.toLowerCase().includes(query.toLowerCase()) : true;
      const matchesRarity = rarity === 'All' ? true : n.rarity === rarity;
      return matchesQuery && matchesRarity;
    });
  }, [query, rarity]);

  return (
    <section id="collection" className="py-16 md:py-24 bg-neutral-50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-neutral-900">Collection Explorer</h2>
            <p className="mt-2 text-neutral-600 max-w-2xl">
              Search by ID, filter by rarity, and preview example items. This will connect to full JSON metadata
              and trait encyclopedia in the next phase.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-3">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-neutral-400" />
              <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search by ID or name"
                className="w-64 rounded-full border border-neutral-200 bg-white pl-9 pr-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-neutral-900"
              />
            </div>
            <div className="relative">
              <Filter className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-neutral-400" />
              <select
                value={rarity}
                onChange={(e) => setRarity(e.target.value)}
                className="w-48 appearance-none rounded-full border border-neutral-200 bg-white pl-9 pr-9 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-neutral-900"
              >
                {['All', 'Common', 'Uncommon', 'Rare', 'Epic'].map((r) => (
                  <option key={r} value={r}>{r}</option>
                ))}
              </select>
            </div>
          </div>
        </div>

        <div className="mt-10 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filtered.map((n) => (
            <article key={n.id} className="group rounded-xl overflow-hidden bg-white border border-neutral-200 shadow-sm hover:shadow-md transition-shadow">
              <div className="aspect-square overflow-hidden">
                <img src={n.image} alt={n.name} className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform" />
              </div>
              <div className="p-3">
                <div className="flex items-center justify-between">
                  <h3 className="font-semibold text-sm text-neutral-900">{n.name}</h3>
                  <span className="inline-flex items-center gap-1 text-xs text-amber-600">
                    <Star className="w-3.5 h-3.5 fill-amber-500 text-amber-500" />
                    {n.rarity}
                  </span>
                </div>
                <p className="mt-1 text-xs text-neutral-500">Traits: {n.traits.join(', ')}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
