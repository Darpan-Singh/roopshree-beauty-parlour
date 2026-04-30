import Image from 'next/image';
import Link from 'next/link';
import { GALLERY_IMAGES } from '@/lib/data';

export default function GalleryPreview() {
  const preview = GALLERY_IMAGES.slice(0, 6);

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-10">
          <p className="section-subtitle">Our Work</p>
          <h2 className="section-title">Beauty <span className="gradient-text">Transformations</span></h2>
          <p className="text-gray-500 mt-2">See the magic we create every day at RoopShree</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {preview.map((img, idx) => (
            <div
              key={idx}
              className={`relative overflow-hidden rounded-2xl group cursor-pointer ${
                idx === 0 ? 'md:row-span-2' : ''
              }`}
              style={{ minHeight: idx === 0 ? '400px' : '190px', height: idx === 0 ? 'auto' : '190px' }}
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-500"
                sizes="(max-width: 768px) 50vw, 33vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-parlour-dark/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-4 group-hover:translate-y-0 transition-transform duration-300 opacity-0 group-hover:opacity-100">
                <span className="text-white text-sm font-semibold">{img.alt}</span>
                <span className="ml-2 text-xs bg-rose-primary text-white px-2 py-0.5 rounded-full">{img.category}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-8">
          <Link href="/gallery" className="btn-primary">
            View Full Gallery →
          </Link>
        </div>
      </div>
    </section>
  );
}
