"use client";

import { useState } from "react";

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white">
      {/* Demo Banner */}
      <div className="fixed top-0 left-0 right-0 bg-amber-500 text-white text-center py-2 px-4 text-sm font-medium z-[1001]">
        ✨ This is a free redesign mockup created by Byldr —{" "}
        <a href="https://ryancwynar.github.io" className="underline">
          Learn More
        </a>
      </div>

      {/* Navigation */}
      <nav className="fixed top-[36px] w-full bg-white/95 backdrop-blur-sm shadow-sm z-50 px-4 sm:px-6 py-3">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <div className="text-lg sm:text-xl font-bold text-blue-700">
            Pro Bowl Plumbing
          </div>
          <div className="hidden md:flex items-center gap-8 text-sm">
            <a href="#services" className="text-gray-700 hover:text-blue-600 transition">Services</a>
            <a href="#about" className="text-gray-700 hover:text-blue-600 transition">About</a>
            <a href="#reviews" className="text-gray-700 hover:text-blue-600 transition">Reviews</a>
            <a href="#contact" className="text-gray-700 hover:text-blue-600 transition">Contact</a>
          </div>
          <a
            href="tel:954-346-9873"
            className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition whitespace-nowrap"
          >
            (954) 346-9873
          </a>
          <button
            className="md:hidden ml-3 text-gray-700"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
        {menuOpen && (
          <div className="md:hidden mt-3 pb-3 flex flex-col gap-3 text-sm">
            <a href="#services" className="text-gray-700 hover:text-blue-600">Services</a>
            <a href="#about" className="text-gray-700 hover:text-blue-600">About</a>
            <a href="#reviews" className="text-gray-700 hover:text-blue-600">Reviews</a>
            <a href="#contact" className="text-gray-700 hover:text-blue-600">Contact</a>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="pt-36 sm:pt-40 pb-16 sm:pb-24 bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 text-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="max-w-3xl">
            <div className="inline-block bg-white/10 backdrop-blur-sm rounded-full px-4 py-1 text-sm mb-6">
              ⭐ A+ Rated by BBB • 40+ Years Experience
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 leading-tight">
              South Florida&apos;s Most Trusted Plumbing Experts
            </h1>
            <p className="text-lg sm:text-xl text-blue-100 mb-8">
              Family-owned since 1983. Residential &amp; commercial plumbing services
              in Broward and Palm Beach Counties. Licensed, insured, and guaranteed.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="tel:954-346-9873"
                className="bg-white text-blue-700 hover:bg-blue-50 px-8 py-4 rounded-lg font-semibold text-lg transition text-center"
              >
                Call Now: (954) 346-9873
              </a>
              <a
                href="#services"
                className="border-2 border-white text-white hover:bg-white/10 px-8 py-4 rounded-lg font-semibold text-lg transition text-center"
              >
                View Services
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16 sm:py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">Our Plumbing Services</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              From simple repairs to major installations, no job is too big or small
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: "🔧", title: "Leak Repairs", desc: "Fast detection and repair for all pipe, faucet, and fixture leaks" },
              { icon: "🚿", title: "Fixture Installation", desc: "Professional installation of faucets, toilets, showers, and more" },
              { icon: "🔥", title: "Water Heaters", desc: "Repair, installation, and replacement of all water heater types" },
              { icon: "🚰", title: "Drain Cleaning", desc: "Clear stubborn clogs and keep your drains flowing freely" },
              { icon: "🏠", title: "Remodeling", desc: "Kitchen and bathroom plumbing for your renovation projects" },
              { icon: "🏢", title: "Commercial", desc: "Complete plumbing solutions for businesses of all sizes" },
            ].map((service, i) => (
              <div key={i} className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition">
                <div className="text-3xl mb-3">{service.icon}</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{service.title}</h3>
                <p className="text-gray-600 text-sm">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About / Why Choose Us */}
      <section id="about" className="py-16 sm:py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">
                What a Plumber Was Meant to Be
              </h2>
              <p className="text-gray-600 mb-4">
                A plumber should be equally adept at fixing a simple leaky faucet and
                solving a major crisis. The work should be done professionally, promptly,
                and with a deep commitment to customer service.
              </p>
              <p className="text-gray-600 mb-6">
                These are the values Pro Bowl Plumbing was founded on, and with over 40 years
                of experience, we still stand true to them today.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {[
                  "Licensed & Insured",
                  "A+ BBB Rating",
                  "Locally Owned",
                  "Expert Repairs",
                  "Guaranteed Results",
                  "Fair Pricing"
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-2 text-gray-700">
                    <svg className="w-5 h-5 text-green-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-gradient-to-br from-blue-500 to-blue-700 rounded-2xl p-8 text-white">
              <div className="text-5xl font-bold mb-2">40+</div>
              <div className="text-xl mb-6">Years of Experience</div>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="bg-white/20 rounded-full p-2">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-sm text-blue-100">Broward County</div>
                    <div className="font-semibold">(954) 346-9873</div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="bg-white/20 rounded-full p-2">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-sm text-blue-100">Palm Beach County</div>
                    <div className="font-semibold">(561) 322-3522</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section id="reviews" className="py-16 sm:py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">What Our Customers Say</h2>
            <div className="flex items-center justify-center gap-1 text-yellow-400 text-2xl">
              ⭐⭐⭐⭐⭐
            </div>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                name: "Ana Maria B.",
                text: "Pro Bowl Plumbing did an outstanding job for me. Kim was so patient, professional and communicative. The plumber JJ was on time, knowledgeable, did excellent work, cleaned up after himself and the bill was quite a bit less than competitors."
              },
              {
                name: "Julie B.",
                text: "Really happy with Pro Bowl. Kim was able to schedule a service call in a very timely fashion. JJ took a lot of care to diagnose the situation and quickly fixed things. Definitely recommend!"
              },
              {
                name: "Al C.",
                text: "Just had a water purifier installed. One competitor quoted $585, and Pro Bowl did it in an hour for hundreds less. They&apos;re the only plumbing company I will call in the future. Bravo!"
              },
            ].map((review, i) => (
              <div key={i} className="bg-white p-6 rounded-xl shadow-sm">
                <div className="flex items-center gap-1 text-yellow-400 text-sm mb-3">
                  ⭐⭐⭐⭐⭐
                </div>
                <p className="text-gray-600 text-sm mb-4">&ldquo;{review.text}&rdquo;</p>
                <div className="font-medium text-gray-900">— {review.name}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 sm:py-20 bg-blue-700 text-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-blue-100 mb-8 max-w-2xl mx-auto">
            Call now for fast, reliable plumbing service. We serve all of Broward and Palm Beach Counties.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <a
              href="tel:954-346-9873"
              className="bg-white text-blue-700 hover:bg-blue-50 px-8 py-4 rounded-lg font-semibold transition"
            >
              Broward: (954) 346-9873
            </a>
            <a
              href="tel:561-322-3522"
              className="bg-white/10 border-2 border-white text-white hover:bg-white/20 px-8 py-4 rounded-lg font-semibold transition"
            >
              Palm Beach: (561) 322-3522
            </a>
          </div>
          <div className="text-blue-200 text-sm">
            <p>12134 Wiles Rd, Coral Springs, FL 33076</p>
            <p>License #CFC 054102</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-8">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} Pro Bowl Plumbing, Inc. All rights reserved.</p>
          <p className="mt-2">
            Serving Coral Springs, Fort Lauderdale, Boca Raton, Pompano Beach &amp; surrounding areas
          </p>
        </div>
      </footer>

      {/* Tracking pixel */}
      <script
        dangerouslySetInnerHTML={{
          __html: `
            (function() {
              var params = new URLSearchParams(window.location.search);
              var ref = params.get('ref');
              if (ref) {
                var img = new Image();
                img.src = 'https://convex-actions.byldr.co/track?ref=' + encodeURIComponent(ref) + '&url=' + encodeURIComponent(window.location.href);
              }
            })();
          `,
        }}
      />
    </div>
  );
}
