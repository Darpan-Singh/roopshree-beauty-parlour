import Image from 'next/image';
import Link from 'next/link';
import { GALLERY_IMAGES } from '@/lib/data';

export default function GalleryPreview() {
  const preview = GALLERY_IMAGES.slice(0, 6);

  return (
    <section className="py-20 bg-white relative overflow-hidden">
      {/* Faint background pattern */}
      <div className="absolute inset-0 opacity-[0.025]"
           style={{
             backgroundImage: `radial-gradient(circle at 1px 1px, #C9507B 1px, transparent 0)`,
             backgroundSize: '32px 32px',
           }} />

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <span className="section-subtitle">Our Work</span>
          <h2 className="section-title">
            Beauty <span className="gradient-text">Transformations</span>
          </h2>
          <p className="text-gray-400 mt-2 text-sm">See the magic we create every day at RoopShree</p>
        </div>

        {/* Masonry-style grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-5">
          {preview.map((img, idx) => (
            <Link
              key={idx}
              href="/gallery"
              className={`relative overflow-hidden rounded-2xl group cursor-pointer block ${
                idx === 0 ? 'md:row-span-2' : ''
              }`}
              style={{ minHeight: idx === 0 ? 400 : 190, height: idx === 0 ? 'auto' : 190 }}
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
                sizes="(max-width: 768px) 50vw, 33vw"
              />

              {/* Gradient overlay */}
              <div className="absolute inset-0 transition-opacity duration-400 opacity-0 group-hover:opacity-100"
                   style={{ background: 'linear-gradient(to top, rgba(45,10,26,0.85) 0%, rgba(45,10,26,0.2) 50%, transparent 100%)' }} />

              {/* Info panel */}
              <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-3 group-hover:translate-y-0 transition-transform duration-400 opacity-0 group-hover:opacity-100">
                <p className="text-white font-semibold text-sm">{img.alt}</p>
                <span
                  className="text-xs text-white px-2.5 py-0.5 rounded-full mt-1 inline-block"
                  style={{ background: 'linear-gradient(135deg, #C9507B, #9B2559)' }}
                >
                  {img.category}
                </span>
              </div>

              {/* Corner zoom icon */}
              <div className="absolute top-3 right-3 w-8 h-8 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-1 group-hover:translate-y-0 text-white text-sm"
                   style={{ background: 'rgba(255,255,255,0.2)', backdropFilter: 'blur(8px)' }}>
                ⤢
              </div>
            </Link>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link href="/gallery" className="btn-primary px-8 py-3.5 text-base">
            View Full Gallery →
          </Link>
        </div>
      </div>
    </section>
  );
}
