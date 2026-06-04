'use client';
import { useState } from 'react';
import { REVIEWS, BUSINESS } from '@/lib/data';

function StarRating({ rating }) {
  return (
    <div className="flex gap-0.5">
      {[1,2,3,4,5].map((s) => (
        <span key={s} className={s <= rating ? 'star text-base' : 'text-gray-200 text-base'}>★</span>
      ))}
    </div>
  );
}

export default function ReviewsSection() {
  const [expanded, setExpanded] = useState(null);

  return (
    <section className="py-20 bg-cream relative overflow-hidden">
      <div
        className="absolute -top-4 left-8 font-display font-bold select-none pointer-events-none opacity-[0.04]"
        style={{ fontSize: '22rem', lineHeight: 1, color: '#C9507B' }}
      >
        "
      </div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="text-center mb-4">
          <span className="section-subtitle">Real Stories</span>
          <h2 className="section-title">What Our <span className="gradient-text">Clients Say</span></h2>
        </div>

        <div className="flex justify-center mb-12">
          <div
            className="flex items-center gap-4 px-8 py-4 rounded-2xl bg-white"
            style={{ boxShadow: '0 4px 24px -4px rgba(201,80,123,0.12)', border: '1px solid rgba(201,80,123,0.08)' }}
          >
            <img src="https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg" alt="Google" className="h-6" />
            <div className="w-px h-8 bg-rose-100" />
            <div className="flex items-center gap-3">
              <span className="font-heading font-bold text-3xl text-parlour-dark">{BUSINESS.rating}</span>
              <div>
                <StarRating rating={5} />
                <span className="text-gray-400 text-xs">{BUSINESS.totalReviews} verified reviews</span>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {REVIEWS.map((review) => {
            const isLong = review.review.length > 160;
            const isExpanded = expanded === review.id;
            const displayText = isLong && !isExpanded ? review.review.slice(0, 160) + '...' : review.review;

            return (
              <div key={review.id} className="review-card bg-white rounded-2xl p-6 flex flex-col">
                <div className="flex items-start gap-3 mb-4">
                  <div
                    className={`w-11 h-11 rounded-full ${review.color} text-white flex items-center justify-center font-bold text-sm flex-shrink-0 ring-2 ring-offset-2 ring-white`}
                    style={{ boxShadow: '0 2px 10px rgba(0,0,0,0.12)' }}
                  >
                    {review.initials}
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="font-semibold text-parlour-dark truncate">{review.name}</p>
                    <div className="flex items-center gap-2 mt-0.5">
                      <StarRating rating={review.rating} />
                      <span className="text-gray-300 text-xs">• {review.date}</span>
                    </div>
                  </div>
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg"
                    alt="Google"
                    className="h-4 opacity-50 flex-shrink-0 mt-0.5"
                  />
                </div>

                <span
                  className="text-xs font-semibold px-2.5 py-0.5 rounded-full mb-3 inline-block w-fit"
                  style={{ background: 'linear-gradient(135deg, #FFF0F6, #FFD6E8)', color: '#C9507B', border: '1px solid rgba(201,80,123,0.15)' }}
                >
                  {review.service}
                </span>

                <p className="text-gray-500 text-sm leading-relaxed flex-1">
                  <span className="text-rose-primary font-display text-2xl leading-none mr-1">"</span>
                  {displayText}
                  <span className="text-rose-primary font-display text-2xl leading-none ml-0.5">"</span>
                </p>

                {isLong && (
                  <button
                    onClick={() => setExpanded(isExpanded ? null : review.id)}
                    className="text-rose-primary text-xs font-semibold mt-2 hover:underline text-left"
                  >
                    {isExpanded ? 'Show less ▲' : 'Read more ▼'}
                  </button>
                )}
              </div>
            );
          })}
        </div>

        <div className="text-center mt-10">
          <a
            href={BUSINESS.mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary px-7 py-3.5"
          >
            📍 See All Reviews on Google
          </a>
        </div>
      </div>
    </section>
  );
}
