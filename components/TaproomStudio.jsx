import React, { useState } from 'react';
import Image from 'next/image';
import { ArrowRight, Check, X } from 'lucide-react';

// Where "Request Prototype" leads get sent. Update this to your preferred inbox.
const CONTACT_EMAIL = 'jbarbalaco22@gmail.com';

export default function TaproomStudio() {
  // Request Prototype modal state
  const [showRequestModal, setShowRequestModal] = useState(false);
  const [requestSent, setRequestSent] = useState(false);
  const [requestForm, setRequestForm] = useState({ breweryUrl: '', email: '' });

  const openRequestModal = () => {
    setRequestSent(false);
    setShowRequestModal(true);
  };

  const closeRequestModal = () => {
    setShowRequestModal(false);
    setRequestSent(false);
    setRequestForm({ breweryUrl: '', email: '' });
  };

  const handleRequestSubmit = (e) => {
    e.preventDefault();
    if (!requestForm.breweryUrl || !requestForm.email) return;

    const subject = `Prototype Request: ${requestForm.breweryUrl}`;
    const body = `Brewery URL: ${requestForm.breweryUrl}\nContact email: ${requestForm.email}`;
    const mailtoLink = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    window.location.href = mailtoLink;
    setRequestSent(true);
  };

  const scrollToId = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-stone-950 text-white font-sans">
      {/* Navigation */}
      <nav className="border-b border-stone-800 bg-stone-950/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2 text-2xl font-bold tracking-tight font-serif">
            <Image src="/logo-badge.png" alt="Taproom Studio" width={36} height={40} className="h-9 w-auto" priority />
            Taproom Studio
          </div>
          <button
            onClick={openRequestModal}
            className="bg-amber-500 hover:bg-amber-400 text-stone-950 font-semibold px-6 py-2.5 rounded-full transition"
          >
            Request Prototype
          </button>
        </div>
      </nav>

      {/* Hero */}
      <section className="max-w-6xl mx-auto px-6 pt-20 pb-24">
        <div className="grid lg:grid-cols-[1.15fr_0.85fr] gap-12 items-center">
          <div>
            <span className="inline-block text-amber-500 text-sm font-semibold uppercase tracking-[0.2em] mb-5">
              Web Design for Craft Breweries
            </span>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-[0.95] font-serif">
              Your Brewery's Website,
              <br />
              <span className="text-amber-400">Without the Headache</span>
            </h1>
            <p className="text-xl text-stone-400 mb-8 max-w-xl leading-relaxed">
              We design, build, and host a professional website for your brewery — live in days, not months, with your branding and your own domain.
            </p>
            <div className="flex items-center gap-8 flex-wrap">
              <button
                onClick={openRequestModal}
                className="bg-amber-500 hover:bg-amber-400 text-stone-950 font-semibold px-8 py-3.5 rounded-full transition flex items-center gap-2"
              >
                Get Your Free Prototype <ArrowRight size={20} />
              </button>
              <button
                onClick={() => scrollToId('pricing')}
                className="group text-stone-200 hover:text-amber-400 font-semibold transition flex items-center gap-2"
              >
                See Pricing
                <ArrowRight size={16} className="transition group-hover:translate-x-1" />
              </button>
            </div>
          </div>

          <div className="relative flex justify-center lg:justify-end">
            <div className="absolute inset-0 bg-amber-600/25 blur-[90px] rounded-full" />
            <Image
              src="/logo-badge.png"
              alt=""
              width={420}
              height={480}
              className="relative w-64 md:w-80 h-auto rotate-2 drop-shadow-2xl"
              priority
            />
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="max-w-6xl mx-auto px-6 py-20 border-t border-stone-800">
        <span className="inline-block text-amber-500 text-sm font-semibold uppercase tracking-[0.2em] mb-4">
          How It Works
        </span>
        <h2 className="text-4xl font-bold mb-4 font-serif">From Sign-Up to Live Site</h2>
        <p className="text-stone-400 mb-14 max-w-2xl">Three steps, and we handle every one of them with you.</p>

        <div className="grid md:grid-cols-3 gap-10">
          <div>
            <div className="w-12 h-12 rounded-full border border-amber-500/60 text-amber-400 font-serif text-xl flex items-center justify-center mb-5">
              1
            </div>
            <h3 className="text-xl font-bold mb-3 font-serif">You Send Us Your Brewery</h3>
            <p className="text-stone-400 leading-relaxed">
              Your brewery name, current site or social page, and your tap list. Takes about two minutes.
            </p>
          </div>

          <div>
            <div className="w-12 h-12 rounded-full border border-amber-500/60 text-amber-400 font-serif text-xl flex items-center justify-center mb-5">
              2
            </div>
            <h3 className="text-xl font-bold mb-3 font-serif">We Design &amp; Launch Your Site</h3>
            <p className="text-stone-400 leading-relaxed">
              You'll get a live, mobile-first website with your own branding and domain — built and hosted for you, with a reply within 24 hours.
            </p>
          </div>

          <div>
            <div className="w-12 h-12 rounded-full border border-amber-500/60 text-amber-400 font-serif text-xl flex items-center justify-center mb-5">
              3
            </div>
            <h3 className="text-xl font-bold mb-3 font-serif">We Keep Your Taps Current</h3>
            <p className="text-stone-400 leading-relaxed">
              Send us your new tap list whenever it changes and we'll swap it in — included as part of your monthly plan. No logins, no software to learn.
            </p>
          </div>
        </div>
      </section>

      {/* Why Breweries Choose Us */}
      <section className="max-w-6xl mx-auto px-6 py-20 border-t border-stone-800">
        <h2 className="text-4xl font-bold mb-12 font-serif">What We're Brewing</h2>

        <div className="grid md:grid-cols-3 gap-x-10 gap-y-10">
          <div className="border-t border-stone-800 pt-6">
            <h3 className="text-xl font-bold mb-3 font-serif">Built for Breweries</h3>
            <p className="text-stone-400 leading-relaxed">
              Not a generic template reskinned for every industry. Every site is designed around how breweries actually work — taps, hours, and events.
            </p>
          </div>

          <div className="border-t border-stone-800 pt-6">
            <h3 className="text-xl font-bold mb-3 font-serif">See It Before You Pay</h3>
            <p className="text-stone-400 leading-relaxed">
              We build a live prototype of your actual brewery's site first — free, no commitment — so you know exactly what you're getting.
            </p>
          </div>

          <div className="border-t border-stone-800 pt-6">
            <h3 className="text-xl font-bold mb-3 font-serif">Fully Managed</h3>
            <p className="text-stone-400 leading-relaxed">
              Hosting, uptime monitoring, domain management, and support are all included in your monthly plan. One person to call, not five.
            </p>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="max-w-6xl mx-auto px-6 py-20 border-t border-stone-800 scroll-mt-20">
        <h2 className="text-4xl font-bold mb-12 text-center font-serif">Pricing</h2>

        <div className="max-w-4xl mx-auto bg-stone-900/60 border border-stone-800 rounded-2xl overflow-hidden">
          <div className="grid md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-stone-800">
            <div className="p-10 text-center">
              <h3 className="text-2xl font-bold mb-2 font-serif">Setup Fee</h3>
              <p className="text-stone-500 text-sm mb-6 uppercase tracking-wider">One-time</p>
              <div className="mb-8">
                <span className="text-5xl font-bold text-amber-400 font-serif">$500</span>
              </div>
              <div className="text-left space-y-3 max-w-xs mx-auto">
                <div className="flex items-center gap-3">
                  <Check className="text-amber-400 shrink-0" size={20} />
                  <span>Site design &amp; build</span>
                </div>
                <div className="flex items-center gap-3">
                  <Check className="text-amber-400 shrink-0" size={20} />
                  <span>Deployment</span>
                </div>
                <div className="flex items-center gap-3">
                  <Check className="text-amber-400 shrink-0" size={20} />
                  <span>Tap list setup</span>
                </div>
                <div className="flex items-center gap-3">
                  <Check className="text-amber-400 shrink-0" size={20} />
                  <span>Custom domain configuration</span>
                </div>
              </div>
            </div>

            <div className="p-10 text-center bg-gradient-to-br from-amber-600/10 to-transparent">
              <h3 className="text-2xl font-bold mb-2 font-serif">Monthly Hosting</h3>
              <p className="text-stone-500 text-sm mb-6 uppercase tracking-wider">Recurring</p>
              <div className="mb-8">
                <span className="text-5xl font-bold text-amber-400 font-serif">$99</span>
                <span className="text-stone-400 text-lg">/mo</span>
              </div>
              <div className="text-left space-y-3 max-w-xs mx-auto">
                <div className="flex items-center gap-3">
                  <Check className="text-amber-400 shrink-0" size={20} />
                  <span>Hosting &amp; infrastructure</span>
                </div>
                <div className="flex items-center gap-3">
                  <Check className="text-amber-400 shrink-0" size={20} />
                  <span>Up to 4 tap updates / month</span>
                </div>
                <div className="flex items-center gap-3">
                  <Check className="text-amber-400 shrink-0" size={20} />
                  <span>Domain management</span>
                </div>
                <div className="flex items-center gap-3">
                  <Check className="text-amber-400 shrink-0" size={20} />
                  <span>Uptime monitoring &amp; email support</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <p className="text-center text-stone-500 text-sm mt-8">
          Extra tap updates beyond 4/month: $25 each.
        </p>
      </section>

      {/* CTA */}
      <section className="max-w-6xl mx-auto px-6 py-20 border-t border-stone-800 text-center">
        <h2 className="text-4xl font-bold mb-6 font-serif">Ready to See Your Brewery Live?</h2>
        <p className="text-xl text-stone-400 mb-8">Send us your brewery's URL — we'll reply with a free prototype within 24 hours.</p>
        <button
          onClick={openRequestModal}
          className="bg-amber-500 hover:bg-amber-400 text-stone-950 font-bold px-8 py-4 rounded-full text-lg transition"
        >
          Request Your Free Prototype →
        </button>
      </section>

      {/* Footer */}
      <footer className="border-t border-stone-800 bg-stone-950/80 py-12 mt-4">
        <div className="max-w-6xl mx-auto px-6 text-center text-stone-500">
          <p>Taproom Studio • Websites built for breweries, by people who get it</p>
          <p className="text-sm mt-2">© 2026 Taproom Studio. All rights reserved.</p>
        </div>
      </footer>

      {/* Request Prototype Modal */}
      {showRequestModal && (
        <div
          className="fixed inset-0 z-50 bg-black/70 flex items-center justify-center p-4"
          onClick={closeRequestModal}
        >
          <div
            className="bg-stone-900 border border-stone-700 rounded-2xl p-8 max-w-md w-full relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={closeRequestModal}
              className="absolute top-4 right-4 text-stone-500 hover:text-white transition"
              aria-label="Close"
            >
              <X size={22} />
            </button>

            {!requestSent ? (
              <>
                <h3 className="text-2xl font-bold mb-2 font-serif">Request Your Prototype</h3>
                <p className="text-stone-400 mb-6">
                  Send us your brewery's URL and we'll reply with a free, no-commitment prototype within 24 hours.
                </p>
                <form onSubmit={handleRequestSubmit} className="space-y-4">
                  <div>
                    <label className="block text-sm text-stone-300 mb-1" htmlFor="breweryUrl">
                      Your brewery's website or Facebook/Instagram URL
                    </label>
                    <input
                      id="breweryUrl"
                      type="text"
                      required
                      placeholder="e.g. yourbrewery.com"
                      value={requestForm.breweryUrl}
                      onChange={(e) => setRequestForm({ ...requestForm, breweryUrl: e.target.value })}
                      className="w-full bg-stone-950 border border-stone-700 rounded-lg px-4 py-3 text-white placeholder-stone-500 focus:outline-none focus:border-amber-600 transition"
                    />
                  </div>
                  <div>
                    <label className="block text-sm text-stone-300 mb-1" htmlFor="contactEmail">
                      Your email
                    </label>
                    <input
                      id="contactEmail"
                      type="email"
                      required
                      placeholder="you@yourbrewery.com"
                      value={requestForm.email}
                      onChange={(e) => setRequestForm({ ...requestForm, email: e.target.value })}
                      className="w-full bg-stone-950 border border-stone-700 rounded-lg px-4 py-3 text-white placeholder-stone-500 focus:outline-none focus:border-amber-600 transition"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-amber-500 hover:bg-amber-400 text-stone-950 font-bold py-3 rounded-full transition"
                  >
                    Send Request
                  </button>
                </form>
              </>
            ) : (
              <>
                <h3 className="text-2xl font-bold mb-2 font-serif">Almost there!</h3>
                <p className="text-stone-300 mb-6">
                  We opened your email app with the request pre-filled — just hit send. We'll reply within 24 hours. If nothing opened, email us
                  directly at{' '}
                  <a href={`mailto:${CONTACT_EMAIL}`} className="text-amber-400 underline">
                    {CONTACT_EMAIL}
                  </a>
                  .
                </p>
                <button
                  onClick={closeRequestModal}
                  className="w-full bg-stone-800 hover:bg-stone-700 text-white font-semibold py-3 rounded-full transition"
                >
                  Close
                </button>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
