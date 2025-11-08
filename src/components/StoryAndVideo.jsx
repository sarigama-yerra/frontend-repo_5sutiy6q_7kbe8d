import React from 'react';
import { ExternalLink, Video } from 'lucide-react';

export default function StoryAndVideo() {
  return (
    <section id="story" className="relative py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 grid md:grid-cols-2 gap-10 items-start">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-neutral-900">The Tale of Bitcoin the Turtle</h2>
          <p className="mt-4 text-neutral-700 leading-relaxed">
            Born on-chain and tempered by time, the Bitcoin Turtles carry fragments of history on their shells.
            Each trait is a clue, each pattern a chronicle. Dive into the lore and uncover the lineage behind
            the collection: rare 1/1 echoes, bearded wanderers, and Kaspa-touched curiosities.
          </p>
          <p className="mt-4 text-neutral-700">
            This project celebrates creativity, provenance, and community—inviting collectors to explore and
            piece together stories across traits, rarity ranks, and special categories.
          </p>

          <a
            href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
            target="_blank"
            rel="noreferrer"
            className="mt-6 inline-flex items-center gap-2 text-neutral-900 font-semibold hover:underline"
          >
            <ExternalLink className="w-4 h-4" />
            View the original Yonatan video
          </a>
        </div>
        <div>
          <div className="aspect-video w-full rounded-xl overflow-hidden shadow border border-neutral-200 bg-neutral-50 flex items-center justify-center">
            <video
              controls
              className="w-full h-full object-cover"
              poster="https://images.unsplash.com/photo-1520975682031-d652f0f0f0f0?q=80&w=1600&auto=format&fit=crop"
            >
              <source src="" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
          <p className="flex items-center gap-2 text-sm text-neutral-500 mt-3">
            <Video className="w-4 h-4" />
            Introduction video provided by the team will appear here.
          </p>
        </div>
      </div>
    </section>
  );
}
