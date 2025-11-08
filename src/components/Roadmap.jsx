import React from 'react';
import { CheckCircle2, Circle, Rocket } from 'lucide-react';

const roadmap = [
  { title: 'Launch Website & Lore', status: 'done', description: 'Public debut with interactive storytelling and collection preview.' },
  { title: 'Metadata Import & Rarity Explorer', status: 'progress', description: 'Connect JSON metadata and add full trait filters and rankings.' },
  { title: 'Trait Encyclopedia', status: 'todo', description: 'Dedicated pages for traits with lore, combos, and examples.' },
  { title: 'Original Pixels Explorer', status: 'todo', description: 'Input an ID to reveal coordinates and zoom on original pixels.' },
  { title: 'Wallet Viewer & Social Sharing', status: 'todo', description: 'Let holders showcase what they own and share highlights.' },
];

const StatusIcon = ({ status }) => {
  if (status === 'done') return <CheckCircle2 className="w-5 h-5 text-green-600" />;
  if (status === 'progress') return <Rocket className="w-5 h-5 text-amber-600" />;
  return <Circle className="w-5 h-5 text-neutral-400" />;
};

export default function Roadmap() {
  return (
    <section className="py-16 md:py-24 bg-neutral-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-neutral-900">Roadmap</h2>
        <p className="mt-2 text-neutral-600 max-w-2xl">A living plan that evolves with the community—simple to update as milestones are reached.</p>

        <ol className="mt-8 space-y-4">
          {roadmap.map((item, idx) => (
            <li key={idx} className="rounded-xl border border-neutral-200 bg-white p-5 flex items-start gap-4">
              <StatusIcon status={item.status} />
              <div>
                <h3 className="font-semibold text-neutral-900">{item.title}</h3>
                <p className="text-sm text-neutral-600">{item.description}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
