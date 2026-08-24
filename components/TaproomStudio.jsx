import React, { useState } from 'react';
import Image from 'next/image';
import { Plus, Trash2, Edit2, ArrowRight, Check, X } from 'lucide-react';

// Where "Request Prototype" leads get sent. Update this to your preferred inbox.
const CONTACT_EMAIL = 'jbarbalaco22@gmail.com';

export default function TaproomStudio() {
  const [taps, setTaps] = useState([
    { id: 1, name: 'Fast Prototypes', style: 'Live Site', abv: 'In 3 min', price: 'Included' },
    { id: 2, name: 'Mobile-First Design', style: 'Built for phones', abv: 'First', price: 'Included' },
    { id: 3, name: 'Tap Management', style: 'Brewery controls', abv: 'Updates', price: 'Included' },
  ]);

  const [formData, setFormData] = useState({
    name: '',
    style: '',
    abv: '',
    price: '',
  });

  const [editingId, setEditingId] = useState(null);
  const [showForm, setShowForm] = useState(false);

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

  const handleAddTap = () => {
    if (formData.name && formData.style) {
      if (editingId) {
        setTaps(taps.map(t => t.id === editingId ? { ...formData, id: editingId } : t));
        setEditingId(null);
      } else {
        setTaps([...taps, { ...formData, id: Date.now() }]);
      }
      setFormData({ name: '', style: '', abv: '', price: '' });
      setShowForm(false);
    }
  };

  const handleEdit = (tap) => {
    setFormData(tap);
    setEditingId(tap.id);
    setShowForm(true);
  };

  const handleDelete = (id) => {
    setTaps(taps.filter(t => t.id !== id));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white font-sans">
      {/* Navigation */}
      <nav className="border-b border-slate-700 bg-slate-900/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2 text-2xl font-bold tracking-tight font-serif">
            <Image src="/logo-badge.png" alt="Taproom Studio" width={36} height={40} className="h-9 w-auto" priority />
            Taproom Studio
          </div>
          <button
            onClick={openRequestModal}
            className="bg-amber-600 hover:bg-amber-700 text-slate-900 font-semibold px-6 py-2 rounded-lg transition"
          >
            Request Prototype
          </button>
        </div>
      </nav>

      {/* Hero */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight font-serif">
            Fast, Mobile-First Websites
            <br />
            <span className="text-amber-400">for Craft Breweries</span>
          </h1>
          <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto leading-relaxed">
            We build beautiful brewery websites in minutes. You manage tap lists with a single click. No coding. No confusion. Just a site that works.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <button
              onClick={() => scrollToId('demo')}
              className="bg-amber-600 hover:bg-amber-700 text-slate-900 font-semibold px-8 py-3 rounded-lg transition flex items-center gap-2"
            >
              See It In Action <ArrowRight size={20} />
            </button>
            <button
              onClick={() => scrollToId('pricing')}
              className="border border-amber-600 text-amber-400 hover:bg-amber-600/10 font-semibold px-8 py-3 rounded-lg transition"
            >
              Pricing
            </button>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-4 md:gap-8 text-center mb-20">
          <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-6">
            <div className="text-4xl font-bold text-amber-400">3</div>
            <div className="text-sm text-slate-400 mt-2">Minutes to Live</div>
          </div>
          <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-6">
            <div className="text-4xl font-bold text-amber-400">1</div>
            <div className="text-sm text-slate-400 mt-2">Click to Update</div>
          </div>
          <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-6">
            <div className="text-4xl font-bold text-amber-400">∞</div>
            <div className="text-sm text-slate-400 mt-2">Mobile-First</div>
          </div>
        </div>
      </section>

      {/* What We're Brewing - Services */}
      <section className="max-w-6xl mx-auto px-6 py-20 border-t border-slate-700">
        <h2 className="text-4xl font-bold mb-12 font-serif">What We're Brewing</h2>
        
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-8 hover:border-amber-600/50 transition">
            <h3 className="text-2xl font-bold mb-3">Tap Management Built In</h3>
            <p className="text-slate-300 mb-6">
              No more emailing us to update your tap list. No more waiting. Your site has a built-in update form. You click. Your site updates. Done.
            </p>
            <div className="text-amber-400 font-semibold flex items-center gap-2">
              <Check size={20} /> Brewery Controls Everything
            </div>
          </div>

          <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-8 hover:border-amber-600/50 transition">
            <h3 className="text-2xl font-bold mb-3">Hosting Included</h3>
            <p className="text-slate-300 mb-6">
              Your site lives on our infrastructure. Fast, secure, reliable. Custom domain ready. You don't touch the backend.
            </p>
            <div className="text-amber-400 font-semibold flex items-center gap-2">
              <Check size={20} /> We Handle the Ops
            </div>
          </div>

          <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-8 hover:border-amber-600/50 transition">
            <h3 className="text-2xl font-bold mb-3">Mobile First, Always</h3>
            <p className="text-slate-300 mb-6">
              Built for phones first. Your customers find you on mobile. Your site works beautifully every time.
            </p>
            <div className="text-amber-400 font-semibold flex items-center gap-2">
              <Check size={20} /> 97% Mobile Traffic
            </div>
          </div>

          <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-8 hover:border-amber-600/50 transition">
            <h3 className="text-2xl font-bold mb-3">Prototype in 3 Minutes</h3>
            <p className="text-slate-300 mb-6">
              Send us your brewery URL. We send back a live prototype. You see exactly what your site will look like before you commit.
            </p>
            <div className="text-amber-400 font-semibold flex items-center gap-2">
              <Check size={20} /> No Surprises
            </div>
          </div>
        </div>
      </section>

      {/* Tap Management Demo */}
      <section id="demo" className="max-w-6xl mx-auto px-6 py-20 border-t border-slate-700 scroll-mt-20">
        <h2 className="text-4xl font-bold mb-4 font-serif">Try It Now</h2>
        <p className="text-slate-400 mb-12">This is how your brewery manages taps. Simple, fast, no confusion. Try clicking the pencil icon on a tap below, or add a new one.</p>

        {/* Current Taps Display */}
        <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-8 mb-8">
          <h3 className="text-2xl font-bold mb-6">On Tap</h3>
          <div className="space-y-3">
            {taps.map(tap => (
              <div key={tap.id} className="flex items-center justify-between bg-slate-900 border border-slate-600 rounded-lg p-4 group hover:border-amber-600/50 transition">
                <div className="flex-1">
                  <div className="font-bold text-lg">{tap.name}</div>
                  <div className="text-sm text-slate-400">{tap.style} • {tap.abv} • {tap.price}</div>
                </div>
                <div className="flex gap-2 opacity-0 group-hover:opacity-100 transition">
                  <button 
                    onClick={() => handleEdit(tap)}
                    className="p-2 hover:bg-slate-700 rounded transition"
                  >
                    <Edit2 size={18} className="text-amber-400" />
                  </button>
                  <button 
                    onClick={() => handleDelete(tap.id)}
                    className="p-2 hover:bg-slate-700 rounded transition"
                  >
                    <Trash2 size={18} className="text-red-400" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Add/Edit Tap Form */}
        {!showForm ? (
          <button
            onClick={() => setShowForm(true)}
            className="w-full bg-slate-800/50 border border-dashed border-slate-600 hover:border-amber-600 rounded-lg p-6 text-center transition flex items-center justify-center gap-2 text-slate-300 hover:text-amber-400"
          >
            <Plus size={24} /> Add a Tap
          </button>
        ) : (
          <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-8">
            <h3 className="text-xl font-bold mb-6">{editingId ? 'Edit Tap' : 'Add a New Tap'}</h3>
            <div className="grid md:grid-cols-2 gap-4 mb-6">
              <input
                type="text"
                placeholder="Beer Name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="bg-slate-900 border border-slate-600 rounded-lg px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:border-amber-600 transition"
              />
              <input
                type="text"
                placeholder="Style (IPA, Lager, etc.)"
                value={formData.style}
                onChange={(e) => setFormData({ ...formData, style: e.target.value })}
                className="bg-slate-900 border border-slate-600 rounded-lg px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:border-amber-600 transition"
              />
              <input
                type="text"
                placeholder="ABV %"
                value={formData.abv}
                onChange={(e) => setFormData({ ...formData, abv: e.target.value })}
                className="bg-slate-900 border border-slate-600 rounded-lg px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:border-amber-600 transition"
              />
              <input
                type="text"
                placeholder="Price"
                value={formData.price}
                onChange={(e) => setFormData({ ...formData, price: e.target.value })}
                className="bg-slate-900 border border-slate-600 rounded-lg px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:border-amber-600 transition"
              />
            </div>
            <div className="flex gap-3">
              <button
                onClick={handleAddTap}
                className="flex-1 bg-amber-600 hover:bg-amber-700 text-slate-900 font-semibold py-3 rounded-lg transition"
              >
                {editingId ? 'Update Tap' : 'Add Tap'}
              </button>
              <button
                onClick={() => {
                  setShowForm(false);
                  setEditingId(null);
                  setFormData({ name: '', style: '', abv: '', price: '' });
                }}
                className="flex-1 bg-slate-700 hover:bg-slate-600 text-white font-semibold py-3 rounded-lg transition"
              >
                Cancel
              </button>
            </div>
          </div>
        )}

        <p className="text-slate-400 text-sm mt-8 text-center">
          ↑ This is exactly how your brewery updates their site. No training needed. No support tickets.
        </p>
      </section>

      {/* Pricing */}
      <section id="pricing" className="max-w-6xl mx-auto px-6 py-20 border-t border-slate-700 scroll-mt-20">
        <h2 className="text-4xl font-bold mb-12 text-center font-serif">Pricing</h2>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-10 text-center">
            <h3 className="text-2xl font-bold mb-2 font-serif">Setup Fee</h3>
            <p className="text-slate-400 text-sm mb-6">One-time</p>
            <div className="mb-8">
              <span className="text-5xl font-bold text-amber-400">$500</span>
            </div>
            <div className="text-left space-y-3">
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
                <span>Tap form setup</span>
              </div>
              <div className="flex items-center gap-3">
                <Check className="text-amber-400 shrink-0" size={20} />
                <span>Custom domain configuration</span>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-amber-600/10 to-slate-800/50 border border-amber-600/30 rounded-lg p-10 text-center">
            <h3 className="text-2xl font-bold mb-2 font-serif">Monthly Hosting</h3>
            <p className="text-slate-400 text-sm mb-6">Recurring</p>
            <div className="mb-8">
              <span className="text-5xl font-bold text-amber-400">$99</span>
              <span className="text-slate-300 text-lg">/mo</span>
            </div>
            <div className="text-left space-y-3">
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

        <p className="text-center text-slate-400 text-sm mt-8">
          Extra tap updates beyond 4/month: $25 each.
        </p>

        <div className="text-center mt-10">
          <button
            onClick={openRequestModal}
            className="bg-amber-600 hover:bg-amber-700 text-slate-900 font-bold px-8 py-3 rounded-lg transition"
          >
            Request Prototype
          </button>
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-6xl mx-auto px-6 py-20 border-t border-slate-700 text-center">
        <h2 className="text-4xl font-bold mb-6 font-serif">Ready to see your brewery live?</h2>
        <p className="text-xl text-slate-300 mb-8">Send us your brewery URL. We'll send back a prototype in 3 minutes.</p>
        <button
          onClick={openRequestModal}
          className="bg-amber-600 hover:bg-amber-700 text-slate-900 font-bold px-8 py-4 rounded-lg text-lg transition"
        >
          Request Your Prototype →
        </button>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-700 bg-slate-900/50 py-12 mt-20">
        <div className="max-w-6xl mx-auto px-6 text-center text-slate-400">
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
            className="bg-slate-800 border border-slate-600 rounded-lg p-8 max-w-md w-full relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={closeRequestModal}
              className="absolute top-4 right-4 text-slate-400 hover:text-white transition"
              aria-label="Close"
            >
              <X size={22} />
            </button>

            {!requestSent ? (
              <>
                <h3 className="text-2xl font-bold mb-2">Request Your Prototype</h3>
                <p className="text-slate-400 mb-6">
                  Send us your brewery's URL and we'll get back to you with a live prototype in 3 minutes.
                </p>
                <form onSubmit={handleRequestSubmit} className="space-y-4">
                  <div>
                    <label className="block text-sm text-slate-300 mb-1" htmlFor="breweryUrl">
                      Your brewery's website or Facebook/Instagram URL
                    </label>
                    <input
                      id="breweryUrl"
                      type="text"
                      required
                      placeholder="e.g. yourbrewery.com"
                      value={requestForm.breweryUrl}
                      onChange={(e) => setRequestForm({ ...requestForm, breweryUrl: e.target.value })}
                      className="w-full bg-slate-900 border border-slate-600 rounded-lg px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:border-amber-600 transition"
                    />
                  </div>
                  <div>
                    <label className="block text-sm text-slate-300 mb-1" htmlFor="contactEmail">
                      Your email
                    </label>
                    <input
                      id="contactEmail"
                      type="email"
                      required
                      placeholder="you@yourbrewery.com"
                      value={requestForm.email}
                      onChange={(e) => setRequestForm({ ...requestForm, email: e.target.value })}
                      className="w-full bg-slate-900 border border-slate-600 rounded-lg px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:border-amber-600 transition"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-amber-600 hover:bg-amber-700 text-slate-900 font-bold py-3 rounded-lg transition"
                  >
                    Send Request
                  </button>
                </form>
              </>
            ) : (
              <>
                <h3 className="text-2xl font-bold mb-2">Almost there!</h3>
                <p className="text-slate-300 mb-6">
                  We opened your email app with the request pre-filled — just hit send. If nothing opened, email us
                  directly at{' '}
                  <a href={`mailto:${CONTACT_EMAIL}`} className="text-amber-400 underline">
                    {CONTACT_EMAIL}
                  </a>
                  .
                </p>
                <button
                  onClick={closeRequestModal}
                  className="w-full bg-slate-700 hover:bg-slate-600 text-white font-semibold py-3 rounded-lg transition"
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
