import React, { useMemo, useState } from 'react';
import Spline from '@splinetool/react-spline';
import { Cube, Plus, Trash2 } from 'lucide-react';

export default function PixelTurtle3DGallery() {
  const [models, setModels] = useState([
    {
      name: 'Hero Cubes (Sample)',
      url: 'https://prod.spline.design/vi0ijCQQJTRFc8LA/scene.splinecode',
    },
  ]);
  const [selected, setSelected] = useState(0);
  const [name, setName] = useState('');
  const [url, setUrl] = useState('');

  const validUrl = useMemo(() => /^https?:\/\/.*\.splinecode$/.test(url), [url]);

  const addModel = (e) => {
    e.preventDefault();
    if (!name.trim() || !validUrl) return;
    setModels((m) => [...m, { name: name.trim(), url: url.trim() }]);
    setName('');
    setUrl('');
    setSelected(models.length);
  };

  const removeModel = (idx) => {
    setModels((m) => m.filter((_, i) => i !== idx));
    setSelected((s) => (idx === s ? 0 : s > idx ? s - 1 : s));
  };

  return (
    <section id="models" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex items-start md:items-end justify-between gap-6 flex-col md:flex-row">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-neutral-900">Pixel Turtle 3D Models</h2>
            <p className="mt-2 text-neutral-600 max-w-2xl">
              Preview and interact with your 3D turtles. Paste a Spline scene URL to add it to the gallery
              for quick switching during reviews and showcases.
            </p>
          </div>

          <form onSubmit={addModel} className="w-full md:w-auto flex flex-col sm:flex-row gap-3">
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Model name"
              className="sm:w-48 rounded-full border border-neutral-200 bg-white px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-neutral-900"
            />
            <input
              type="url"
              value={url}
              onChange={(e) => setUrl(e.target.value)}
              placeholder="https://.../scene.splinecode"
              className="sm:w-80 rounded-full border border-neutral-200 bg-white px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-neutral-900"
            />
            <button
              type="submit"
              disabled={!name.trim() || !validUrl}
              className="inline-flex items-center justify-center gap-2 rounded-full bg-neutral-900 text-white px-5 py-2 text-sm font-semibold shadow disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <Plus className="w-4 h-4" /> Add
            </button>
          </form>
        </div>

        <div className="mt-8 grid lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 rounded-2xl border border-neutral-200 overflow-hidden shadow-sm">
            <div className="relative w-full h-[60vh] md:h-[70vh] bg-neutral-50">
              {models[selected] ? (
                <Spline scene={models[selected].url} style={{ width: '100%', height: '100%' }} />
              ) : (
                <div className="w-full h-full flex items-center justify-center text-neutral-500">
                  Select or add a Spline scene to preview
                </div>
              )}
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-white/40 via-transparent to-white/20" />
            </div>
            <div className="p-4 border-t border-neutral-200 flex items-center justify-between">
              <div className="flex items-center gap-2 text-sm text-neutral-700">
                <Cube className="w-4 h-4" />
                {models[selected] ? models[selected].name : 'No model selected'}
              </div>
            </div>
          </div>

          <div className="rounded-2xl border border-neutral-200 p-4 bg-neutral-50 h-full">
            <h3 className="font-semibold text-neutral-900">Gallery</h3>
            <ul className="mt-3 space-y-2">
              {models.map((m, idx) => (
                <li key={idx} className={`flex items-center justify-between gap-3 rounded-lg border bg-white px-3 py-2 text-sm ${
                  idx === selected ? 'border-neutral-900' : 'border-neutral-200'
                }`}>
                  <button
                    className="text-left flex-1 truncate"
                    onClick={() => setSelected(idx)}
                    aria-label={`Select ${m.name}`}
                  >
                    {m.name}
                  </button>
                  <button
                    className="p-1 rounded hover:bg-neutral-100"
                    onClick={() => removeModel(idx)}
                    aria-label={`Remove ${m.name}`}
                  >
                    <Trash2 className="w-4 h-4 text-neutral-500" />
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
