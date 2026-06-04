'use client';
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { GALLERY_IMAGES } from '@/lib/data';

const CATEGORIES = ['All', ...Array.from(new Set(GALLERY_IMAGES.map((img) => img.category)))];

export default function GalleryPage() {
  const [active, setActive] = useState('All');
  const [lightbox, setLightbox] = useState(null);

  const filtered =
    active === 'All' ? GALLERY_IMAGES : GALLERY_IMAGES.filter((img) => img.category === active);

  return (
    <div className="min-h-screen bg-cream pt-24 pb-16">
      {/* Header */}
      <div className="bg-gradient-to-r from-parlour-dark to-parlour-mid py-12 text-center mb-10">
        <p className="text-rose-light text-sm uppercase tracking-widest mb-2">Our Work</p>
        <h1 className="font-heading text-4xl md:text-5xl font-bold text-white mb-3">
          Beauty <span className="text-gold-primary">Gallery</span>
        </h1>
        <p className="text-white/60">Every look is a masterpiece. See our transformations.</p>
      </div>

      <div className="max-w-7xl mx-auto px-4">
        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-3 mb-8">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`px-5 py-2 rounded-full font-semibold text-sm transition-all duration-200 ${
                active === cat
                  ? 'bg-rose-primary text-white shadow-md'
                  : 'bg-white text-parlour-dark border border-rose-100 hover:border-rose-primary'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">
          {filtered.map((img, i) => (
            <div
              key={i}
              className="break-inside-avoid relative overflow-hidden rounded-2xl cursor-pointer group"
              onClick={() => setLightbox(img)}
            >
              <div className="relative w-full" style={{ paddingBottom: i % 3 === 0 ? '133%' : '75%' }}>
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 50vw, 25vw"
                />
              </div>
              <div className="absolute inset-0 bg-parlour-dark/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <div className="text-center text-white">
                  <p className="font-semibold">{img.alt}</p>
                  <span className="text-xs bg-rose-primary px-2 py-0.5 rounded-full">{img.category}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Book CTA */}
        <div className="mt-12 text-center">
          <p className="text-gray-500 mb-4">Love what you see? Book your transformation today!</p>
          <Link href="/book" className="btn-primary text-lg px-10 py-4">
            📅 Book Now
          </Link>
        </div>
      </div>

      {/* Lightbox */}
      {lightbox && (
        <div
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={() => setLightbox(null)}
        >
          <div className="relative max-w-3xl max-h-[90vh] w-full" onClick={(e) => e.stopPropagation()}>
            <button
              onClick={() => setLightbox(null)}
              className="absolute -top-10 right-0 text-white text-3xl font-bold"
            >
              ×
            </button>
            <div className="relative w-full h-[80vh]">
              <Image
                src={lightbox.src}
                alt={lightbox.alt}
                fill
                className="object-contain"
              />
            </div>
            <p className="text-white text-center mt-2 font-semibold">{lightbox.alt}</p>
          </div>
        </div>
      )}
    </div>
  );
}
