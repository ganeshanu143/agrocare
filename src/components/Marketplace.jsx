import React, { useState } from 'react';
import { ShoppingBag, PlusCircle, Search, Filter, MapPin, Tag, Star, Calendar, MessageSquare, PhoneCall, X, Upload, CheckCircle2, ShieldCheck } from 'lucide-react';
import { translations } from '../data/translations';
import { sampleProducts } from '../data/mockData';

export default function Marketplace({ lang }) {
  const t = translations[lang]?.marketplace || translations.en.marketplace;

  const [products, setProducts] = useState(sampleProducts);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [viewMode, setViewMode] = useState('buy'); // 'buy' | 'sell'

  // Modal States
  const [showSellModal, setShowSellModal] = useState(false);
  const [selectedProductModal, setSelectedProductModal] = useState(null);
  const [showContactModal, setShowContactModal] = useState(null);

  // New Listing Form State
  const [newListing, setNewListing] = useState({
    title: '',
    category: 'Vegetables',
    quantity: '',
    unit: 'Kg',
    price: '',
    location: 'Guntur, AP',
    harvestDate: '2026-09-15',
    condition: 'Fresh Harvest',
    description: ''
  });

  const categoriesList = ['All', 'Vegetables', 'Fruits', 'Grains', 'Pulses', 'Seeds', 'Fertilizers', 'Farming tools', 'Organic products', 'Other'];

  const filteredProducts = products.filter(prod => {
    const matchCategory = selectedCategory === 'All' || prod.category === selectedCategory;
    const matchSearch = prod.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                        prod.location.toLowerCase().includes(searchQuery.toLowerCase());
    return matchCategory && matchSearch;
  });

  const handlePostListing = (e) => {
    e.preventDefault();
    if (!newListing.title || !newListing.price) {
      alert("Please fill in product name and expected price.");
      return;
    }
    const createdProd = {
      id: 'prod_' + Date.now(),
      title: newListing.title,
      category: newListing.category,
      quantity: `${newListing.quantity} ${newListing.unit}`,
      price: `₹${newListing.price} / ${newListing.unit}`,
      location: newListing.location,
      sellerName: 'My Farm Listing',
      sellerRating: '5.0 ★',
      datePosted: 'Just Now',
      image: newListing.category === 'Grains' ? '/hero_banner.jpg' : '/fresh_produce.jpg',
      condition: newListing.condition,
      description: newListing.description || 'Quality produce freshly listed by farmer.'
    };
    setProducts([createdProd, ...products]);
    setShowSellModal(false);
    alert("Your product listing has been posted successfully to Agro Marketplace!");
  };

  return (
    <div className="container animate-fade-in" style={{ padding: '40px 20px 80px 20px' }}>
      
      {/* Header & Two Main Action CTA Buttons */}
      <div style={{ textAlign: 'center', maxWidth: '750px', margin: '0 auto 36px auto' }}>
        <div className="badge badge-pink" style={{ marginBottom: '12px' }}>
          <ShoppingBag size={16} /> Direct Farmer-to-Buyer Marketplace
        </div>
        <h1 style={{ fontSize: '32px', color: 'var(--primary-green-dark)', marginBottom: '8px' }}>
          {t.title}
        </h1>
        <p style={{ fontSize: '16px', marginBottom: '24px' }}>{t.subtitle}</p>

        {/* Two Prominent Action Buttons */}
        <div style={{ display: 'flex', justifyContent: 'center', gap: '16px' }}>
          <button
            className={`btn btn-lg ${viewMode === 'buy' ? 'btn-primary' : 'btn-secondary'}`}
            onClick={() => setViewMode('buy')}
          >
            <ShoppingBag size={22} /> {t.buyBtn}
          </button>

          <button
            className={`btn btn-lg ${viewMode === 'sell' ? 'btn-pink' : 'btn-secondary'}`}
            onClick={() => { setViewMode('sell'); setShowSellModal(true); }}
            style={{ fontWeight: 800 }}
          >
            <PlusCircle size={22} /> {t.sellBtn}
          </button>
        </div>
      </div>

      {/* Search & Category Filter Bar */}
      <div className="card" style={{ marginBottom: '36px', padding: '20px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr auto', gap: '16px', marginBottom: '16px' }}>
          <div style={{ position: 'relative' }}>
            <Search size={20} style={{ position: 'absolute', left: '16px', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-muted)' }} />
            <input
              className="form-input"
              style={{ paddingLeft: '48px' }}
              placeholder={t.searchPlaceholder}
              value={searchQuery}
              onChange={e => setSearchQuery(e.target.value)}
            />
          </div>

          <button className="btn btn-pink" onClick={() => setShowSellModal(true)}>
            <PlusCircle size={18} /> {t.postBtn}
          </button>
        </div>

        {/* Category Chips */}
        <div style={{ display: 'flex', gap: '8px', overflowX: 'auto', paddingBottom: '6px' }}>
          {categoriesList.map(cat => (
            <button
              key={cat}
              className={`btn btn-sm ${selectedCategory === cat ? 'btn-primary' : 'btn-secondary'}`}
              onClick={() => setSelectedCategory(cat)}
              style={{ flexShrink: 0, fontSize: '13px' }}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* PRODUCT GRID */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '28px' }}>
        {filteredProducts.map(product => (
          <div key={product.id} className="card" style={{ padding: 0, overflow: 'hidden', display: 'flex', flexDirection: 'column' }}>
            
            <div style={{ height: '200px', position: 'relative', overflow: 'hidden' }}>
              <img src={product.image} alt={product.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              <div style={{ position: 'absolute', top: '12px', right: '12px' }}>
                <span className="badge badge-pink">{product.category}</span>
              </div>
              <div style={{ position: 'absolute', bottom: '12px', left: '12px' }}>
                <span className="badge badge-green" style={{ background: 'rgba(255,255,255,0.9)', color: 'var(--primary-green-dark)' }}>
                  <MapPin size={12} /> {product.location}
                </span>
              </div>
            </div>

            <div style={{ padding: '20px', display: 'flex', flexDirection: 'column', flex: 1 }}>
              <h3 style={{ fontSize: '18px', color: 'var(--primary-green-dark)', marginBottom: '8px' }}>
                {product.title}
              </h3>

              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}>
                <div>
                  <span style={{ fontSize: '12px', color: 'var(--text-muted)' }}>Quantity:</span>
                  <div style={{ fontWeight: 700, fontSize: '15px', color: 'var(--text-dark)' }}>{product.quantity}</div>
                </div>
                <div style={{ textAlign: 'right' }}>
                  <span style={{ fontSize: '12px', color: 'var(--text-muted)' }}>Price:</span>
                  <div style={{ fontWeight: 800, fontSize: '18px', color: 'var(--primary-green)' }}>{product.price}</div>
                </div>
              </div>

              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '12px', color: 'var(--text-muted)', marginBottom: '16px', borderTop: '1px solid var(--gray-200)', pt: '8px' }}>
                <span>Seller: {product.sellerName}</span>
                <span style={{ color: 'var(--warning-text)', fontWeight: 700 }}>{product.sellerRating}</span>
              </div>

              <div style={{ marginTop: 'auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px' }}>
                <button className="btn btn-secondary btn-sm" onClick={() => setSelectedProductModal(product)}>
                  {t.viewDetails}
                </button>
                <button className="btn btn-primary btn-sm" onClick={() => setShowContactModal(product)}>
                  <MessageSquare size={16} /> {t.contactSeller}
                </button>
              </div>
            </div>

          </div>
        ))}
      </div>

      {/* SELL PRODUCT LISTING MODAL */}
      {showSellModal && (
        <div className="modal-overlay" onClick={() => setShowSellModal(false)}>
          <div className="modal-card" onClick={e => e.stopPropagation()}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
              <h2 style={{ fontSize: '24px', color: 'var(--primary-green-dark)' }}>{t.postProductTitle}</h2>
              <button className="btn btn-sm btn-secondary" onClick={() => setShowSellModal(false)}><X size={20} /></button>
            </div>

            <form onSubmit={handlePostListing}>
              <div className="form-group">
                <label className="form-label">Product Name</label>
                <input className="form-input" value={newListing.title} onChange={e => setNewListing({ ...newListing, title: e.target.value })} placeholder="e.g. Organic Red Tomatoes" required />
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                <div className="form-group">
                  <label className="form-label">Category</label>
                  <select className="form-select" value={newListing.category} onChange={e => setNewListing({ ...newListing, category: e.target.value })}>
                    {categoriesList.filter(c => c !== 'All').map(c => <option key={c} value={c}>{c}</option>)}
                  </select>
                </div>
                <div className="form-group">
                  <label className="form-label">Condition</label>
                  <input className="form-input" value={newListing.condition} onChange={e => setNewListing({ ...newListing, condition: e.target.value })} placeholder="Fresh Harvest" />
                </div>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '12px' }}>
                <div className="form-group">
                  <label className="form-label">Quantity</label>
                  <input className="form-input" value={newListing.quantity} onChange={e => setNewListing({ ...newListing, quantity: e.target.value })} placeholder="500" />
                </div>
                <div className="form-group">
                  <label className="form-label">Unit</label>
                  <select className="form-select" value={newListing.unit} onChange={e => setNewListing({ ...newListing, unit: e.target.value })}>
                    <option value="Kg">Kg</option>
                    <option value="Quintals">Quintals</option>
                    <option value="Tons">Tons</option>
                    <option value="Bags">Bags</option>
                    <option value="Packets">Packets</option>
                  </select>
                </div>
                <div className="form-group">
                  <label className="form-label">Expected Price (₹)</label>
                  <input className="form-input" value={newListing.price} onChange={e => setNewListing({ ...newListing, price: e.target.value })} placeholder="25" required />
                </div>
              </div>

              <div className="form-group">
                <label className="form-label">Farm Location</label>
                <input className="form-input" value={newListing.location} onChange={e => setNewListing({ ...newListing, location: e.target.value })} placeholder="Guntur, Andhra Pradesh" />
              </div>

              <div className="form-group">
                <label className="form-label">Description</label>
                <textarea className="form-textarea" rows={3} value={newListing.description} onChange={e => setNewListing({ ...newListing, description: e.target.value })} placeholder="Describe quality, farm practices, packaging..." />
              </div>

              <button className="btn btn-primary btn-lg" style={{ width: '100%', marginTop: '10px' }} type="submit">
                <CheckCircle2 size={20} /> {t.postBtn}
              </button>
            </form>
          </div>
        </div>
      )}

      {/* PRODUCT DETAILS MODAL */}
      {selectedProductModal && (
        <div className="modal-overlay" onClick={() => setSelectedProductModal(null)}>
          <div className="modal-card" onClick={e => e.stopPropagation()}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
              <span className="badge badge-pink">{selectedProductModal.category}</span>
              <button className="btn btn-sm btn-secondary" onClick={() => setSelectedProductModal(null)}><X size={20} /></button>
            </div>

            <img src={selectedProductModal.image} alt={selectedProductModal.title} style={{ width: '100%', height: '240px', objectFit: 'cover', borderRadius: 'var(--radius-lg)', marginBottom: '16px' }} />

            <h2 style={{ fontSize: '24px', color: 'var(--primary-green-dark)', marginBottom: '8px' }}>{selectedProductModal.title}</h2>
            <div style={{ fontSize: '22px', fontWeight: 800, color: 'var(--primary-green)', marginBottom: '16px' }}>{selectedProductModal.price}</div>

            <p style={{ fontSize: '14px', marginBottom: '20px' }}>{selectedProductModal.description}</p>

            <div style={{ background: 'var(--gray-100)', padding: '16px', borderRadius: 'var(--radius-md)', marginBottom: '20px', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px', fontSize: '13px' }}>
              <div><strong>Available Quantity:</strong> {selectedProductModal.quantity}</div>
              <div><strong>Condition:</strong> {selectedProductModal.condition}</div>
              <div><strong>Location:</strong> {selectedProductModal.location}</div>
              <div><strong>Posted Date:</strong> {selectedProductModal.datePosted}</div>
            </div>

            <button className="btn btn-primary btn-lg" style={{ width: '100%' }} onClick={() => { setSelectedProductModal(null); setShowContactModal(selectedProductModal); }}>
              <MessageSquare size={20} /> Request Order / Contact Seller
            </button>
          </div>
        </div>
      )}

      {/* CONTACT SELLER MODAL */}
      {showContactModal && (
        <div className="modal-overlay" onClick={() => setShowContactModal(null)}>
          <div className="modal-card" onClick={e => e.stopPropagation()}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
              <h3 style={{ fontSize: '20px', color: 'var(--primary-green-dark)' }}>Contact Seller: {showContactModal.sellerName}</h3>
              <button className="btn btn-sm btn-secondary" onClick={() => setShowContactModal(null)}><X size={20} /></button>
            </div>

            <div style={{ background: 'var(--pink-accent-bg)', border: '1px solid var(--pink-accent-border)', padding: '16px', borderRadius: 'var(--radius-md)', marginBottom: '20px' }}>
              <div style={{ fontWeight: 700, color: 'var(--pink-accent-dark)', fontSize: '14px' }}>
                Protected Buyer-Seller Messaging System
              </div>
              <div style={{ fontSize: '13px', color: 'var(--text-muted)', marginTop: '4px' }}>
                Your request will be sent directly to the seller via AgroCare SMS notification. Personal phone numbers remain protected.
              </div>
            </div>

            <div className="form-group">
              <label className="form-label">Your Name</label>
              <input className="form-input" defaultValue="Farmer Buyer" />
            </div>

            <div className="form-group">
              <label className="form-label">Requested Quantity</label>
              <input className="form-input" defaultValue={showContactModal.quantity} />
            </div>

            <div className="form-group">
              <label className="form-label">Message / Inquiry</label>
              <textarea className="form-textarea" rows={3} defaultValue={`Hello ${showContactModal.sellerName}, I am interested in buying ${showContactModal.title}. Please confirm availability.`} />
            </div>

            <button className="btn btn-primary btn-lg" style={{ width: '100%' }} onClick={() => { alert("Inquiry sent! The seller will reply back to your phone via AgroCare SMS."); setShowContactModal(null); }}>
              Send Inquiry Request
            </button>
          </div>
        </div>
      )}

    </div>
  );
}
