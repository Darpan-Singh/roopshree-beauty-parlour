'use client';
import { useState } from 'react';
import { REVIEWS, BUSINESS } from '@/lib/data';

function StarRating({ rating }) {
  return (
    <div className="flex gap-0.5">
      {[1, 2, 3, 4, 5].map((star) => (
        <span key={star} className={star <= rating ? 'star' : 'text-gray-300'}>
          ★
        </span>
      ))}
    </div>
  );
}

export default function ReviewsSection() {
  const [expanded, setExpanded] = useState(null);

  return (
    <section className="py-16 bg-cream">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-4">
          <p className="section-subtitle">Real Stories</p>
          <h2 className="section-title">What Our <span className="gradient-text">Clients Say</span></h2>
        </div>

        {/* Overall rating */}
        <div className="flex flex-col items-center mb-10">
          <div className="flex items-center gap-3 bg-white rounded-2xl px-8 py-4 shadow-md border border-rose-100">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg"
              alt="Google"
              className="h-6"
            />
            <div className="flex items-center gap-2">
              <span className="font-bold text-2xl text-parlour-dark">{BUSINESS.rating}</span>
              <StarRating rating={5} />
              <span className="text-gray-500 text-sm">({BUSINESS.totalReviews} reviews)</span>
            </div>
          </div>
        </div>

        {/* Reviews grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {REVIEWS.map((review) => {
            const isLong = review.review.length > 160;
            const isExpanded = expanded === review.id;
            const displayText = isLong && !isExpanded
              ? review.review.slice(0, 160) + '...'
              : review.review;

            return (
              <div key={review.id} className="card p-6 bg-white">
                {/* Header */}
                <div className="flex items-start gap-3 mb-4">
                  <div className={`w-11 h-11 rounded-full ${review.color} text-white flex items-center justify-center font-bold text-sm flex-shrink-0`}>
                    {review.initials}
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="font-semibold text-parlour-dark truncate">{review.name}</p>
                    <div className="flex items-center gap-2 mt-0.5">
                      <StarRating rating={review.rating} />
                      <span className="text-gray-400 text-xs">• {review.date}</span>
                    </div>
                  </div>
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg"
                    alt="Google"
                    className="h-4 opacity-60 flex-shrink-0"
                  />
                </div>

                {/* Service tag */}
                <span className="text-xs bg-rose-50 text-rose-primary border border-rose-100 px-2 py-0.5 rounded-full mb-3 inline-block">
                  {review.service}
                </span>

                {/* Review text */}
                <p className="text-gray-600 text-sm leading-relaxed">
                  "{displayText}"
                </p>
                {isLong && (
                  <button
                    onClick={() => setExpanded(isExpanded ? null : review.id)}
                    className="text-rose-primary text-xs font-semibold mt-2 hover:underline"
                  >
                    {isExpanded ? 'Show less' : 'Read more'}
                  </button>
                )}
              </div>
            );
          })}
        </div>

        <div className="text-center mt-8">
          <a
            href={BUSINESS.mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 border-2 border-rose-primary text-rose-primary hover:bg-rose-primary hover:text-white px-6 py-3 rounded-full font-semibold transition-all duration-300"
          >
            📍 See All Reviews on Google
          </a>
        </div>
      </div>
    </section>
  );
}
