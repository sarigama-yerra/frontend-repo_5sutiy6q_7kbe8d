import React from 'react';
import { ShoppingBag, ExternalLink, Twitter, Send, Users } from 'lucide-react';

export default function BuyAndSocial() {
  return (
    <section id="buy" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-neutral-900">Where to Buy</h2>
            <p className="mt-2 text-neutral-600 max-w-xl">
              Jump into the market. Explore current listings, recent sales, and collection stats across top
              marketplaces.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            {[
              { name: 'Magic Eden', url: '#'},
              { name: 'OpenSea', url: '#'},
              { name: 'Kasplex', url: '#'},
            ].map((m) => (
              <a
                key={m.name}
                href={m.url}
                className="inline-flex items-center gap-2 rounded-full bg-neutral-900 text-white px-5 py-3 text-sm font-semibold shadow hover:bg-neutral-800 transition-colors"
              >
                <ShoppingBag className="w-4 h-4" />
                {m.name}
                <ExternalLink className="w-3.5 h-3.5 opacity-70" />
              </a>
            ))}
          </div>
        </div>

        <div className="mt-12 grid sm:grid-cols-3 gap-6">
          <a href="#" className="group rounded-xl border border-neutral-200 p-6 bg-neutral-50 hover:bg-white transition-colors">
            <div className="flex items-center gap-3">
              <Twitter className="w-5 h-5" />
              <div>
                <h3 className="font-semibold text-neutral-900">Follow on X</h3>
                <p className="text-sm text-neutral-600">News, announcements, and highlights.</p>
              </div>
            </div>
          </a>
          <a href="#" className="group rounded-xl border border-neutral-200 p-6 bg-neutral-50 hover:bg-white transition-colors">
            <div className="flex items-center gap-3">
              <Send className="w-5 h-5" />
              <div>
                <h3 className="font-semibold text-neutral-900">Join Telegram</h3>
                <p className="text-sm text-neutral-600">Chat with the community in real-time.</p>
              </div>
            </div>
          </a>
          <a href="#" className="group rounded-xl border border-neutral-200 p-6 bg-neutral-50 hover:bg-white transition-colors">
            <div className="flex items-center gap-3">
              <Users className="w-5 h-5" />
              <div>
                <h3 className="font-semibold text-neutral-900">Enter Discord</h3>
                <p className="text-sm text-neutral-600">Hang out, share art, and collaborate.</p>
              </div>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}
