import React, { useState } from 'react';
import { ShieldAlert, Users, Stethoscope, Compass, ShoppingBag, Plus, Edit2, Trash2, CheckCircle2 } from 'lucide-react';
import { masterCrops, sampleDiseases, sampleProducts } from '../data/mockData';

export default function AdminDashboard() {
  const [activeAdminTab, setActiveAdminTab] = useState('diseases');

  const [diseaseList, setDiseaseList] = useState(sampleDiseases);
  const [cropList, setCropList] = useState(masterCrops);
  const [productList, setProductList] = useState(sampleProducts);

  return (
    <div className="container animate-fade-in" style={{ padding: '40px 20px 80px 20px' }}>
      
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '30px', flexWrap: 'wrap', gap: '16px' }}>
        <div>
          <div className="badge badge-pink" style={{ marginBottom: '6px' }}>System Administration</div>
          <h1 style={{ fontSize: '30px', color: 'var(--primary-green-dark)' }}>AgroCare Admin Console</h1>
        </div>

        <span className="badge badge-green" style={{ fontSize: '14px', padding: '6px 14px' }}>
          Admin Role: Lead Agricultural Officer
        </span>
      </div>

      {/* Admin Nav Tabs */}
      <div style={{ display: 'flex', gap: '10px', overflowX: 'auto', marginBottom: '30px', borderBottom: '2px solid var(--gray-200)', pb: '10px' }}>
        <button
          className={`btn ${activeAdminTab === 'diseases' ? 'btn-primary' : 'btn-secondary'}`}
          onClick={() => setActiveAdminTab('diseases')}
        >
          <Stethoscope size={18} /> Plant Diseases Knowledgebase ({diseaseList.length})
        </button>

        <button
          className={`btn ${activeAdminTab === 'crops' ? 'btn-pink' : 'btn-secondary'}`}
          onClick={() => setActiveAdminTab('crops')}
        >
          <Compass size={18} /> Crop Database ({cropList.length})
        </button>

        <button
          className={`btn ${activeAdminTab === 'marketplace' ? 'btn-primary' : 'btn-secondary'}`}
          onClick={() => setActiveAdminTab('marketplace')}
        >
          <ShoppingBag size={18} /> Marketplace Listings ({productList.length})
        </button>
      </div>

      {/* DISEASES TAB */}
      {activeAdminTab === 'diseases' && (
        <div className="card">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
            <h2 style={{ fontSize: '20px', color: 'var(--primary-green-dark)' }}>Plant Disease Catalog</h2>
            <button className="btn btn-pink btn-sm" onClick={() => alert("Add New Disease Entry Modal opened")}>
              <Plus size={16} /> Add Disease Record
            </button>
          </div>

          <div style={{ overflowX: 'auto' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', minWidth: '600px' }}>
              <thead>
                <tr style={{ background: 'var(--primary-green-subtle)', borderBottom: '2px solid var(--primary-green-light)' }}>
                  <th style={{ padding: '12px' }}>Disease Name</th>
                  <th style={{ padding: '12px' }}>Symptoms Count</th>
                  <th style={{ padding: '12px' }}>Medicine</th>
                  <th style={{ padding: '12px' }}>Actions</th>
                </tr>
              </thead>
              <tbody>
                {diseaseList.map(dis => (
                  <tr key={dis.id} style={{ borderBottom: '1px solid var(--gray-200)' }}>
                    <td style={{ padding: '12px', fontWeight: 700 }}>{dis.name}</td>
                    <td style={{ padding: '12px' }}>{dis.symptoms.length} Symptoms</td>
                    <td style={{ padding: '12px', fontSize: '13px' }}>{dis.medicine.name}</td>
                    <td style={{ padding: '12px' }}>
                      <button className="btn btn-sm btn-secondary" style={{ marginRight: '6px' }} onClick={() => alert("Editing " + dis.name)}><Edit2 size={14} /></button>
                      <button className="btn btn-sm btn-pink" onClick={() => setDiseaseList(diseaseList.filter(d => d.id !== dis.id))}><Trash2 size={14} /></button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* CROPS TAB */}
      {activeAdminTab === 'crops' && (
        <div className="card">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
            <h2 style={{ fontSize: '20px', color: 'var(--primary-green-dark)' }}>Crop Recommendation Rules</h2>
            <button className="btn btn-primary btn-sm" onClick={() => alert("Add Crop Master Record")}>
              <Plus size={16} /> Add Crop Record
            </button>
          </div>

          <div style={{ overflowX: 'auto' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', minWidth: '600px' }}>
              <thead>
                <tr style={{ background: 'var(--pink-accent-bg)', borderBottom: '2px solid var(--pink-accent-border)' }}>
                  <th style={{ padding: '12px' }}>Crop Name</th>
                  <th style={{ padding: '12px' }}>Category</th>
                  <th style={{ padding: '12px' }}>Growing Days</th>
                  <th style={{ padding: '12px' }}>Water Req</th>
                  <th style={{ padding: '12px' }}>Actions</th>
                </tr>
              </thead>
              <tbody>
                {cropList.map(c => (
                  <tr key={c.id} style={{ borderBottom: '1px solid var(--gray-200)' }}>
                    <td style={{ padding: '12px', fontWeight: 700 }}>{c.name}</td>
                    <td style={{ padding: '12px' }}><span className="badge badge-pink">{c.category}</span></td>
                    <td style={{ padding: '12px' }}>{c.growingPeriod}</td>
                    <td style={{ padding: '12px' }}>{c.waterReq}</td>
                    <td style={{ padding: '12px' }}>
                      <button className="btn btn-sm btn-secondary" style={{ marginRight: '6px' }}><Edit2 size={14} /></button>
                      <button className="btn btn-sm btn-pink" onClick={() => setCropList(cropList.filter(cr => cr.id !== c.id))}><Trash2 size={14} /></button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* MARKETPLACE TAB */}
      {activeAdminTab === 'marketplace' && (
        <div className="card">
          <h2 style={{ fontSize: '20px', color: 'var(--primary-green-dark)', marginBottom: '20px' }}>Manage User Listings</h2>
          <div style={{ overflowX: 'auto' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', minWidth: '600px' }}>
              <thead>
                <tr style={{ background: 'var(--primary-green-subtle)' }}>
                  <th style={{ padding: '12px' }}>Product</th>
                  <th style={{ padding: '12px' }}>Seller</th>
                  <th style={{ padding: '12px' }}>Price</th>
                  <th style={{ padding: '12px' }}>Status</th>
                  <th style={{ padding: '12px' }}>Actions</th>
                </tr>
              </thead>
              <tbody>
                {productList.map(p => (
                  <tr key={p.id} style={{ borderBottom: '1px solid var(--gray-200)' }}>
                    <td style={{ padding: '12px', fontWeight: 700 }}>{p.title}</td>
                    <td style={{ padding: '12px' }}>{p.sellerName}</td>
                    <td style={{ padding: '12px' }}>{p.price}</td>
                    <td style={{ padding: '12px' }}><span className="badge badge-green">Active</span></td>
                    <td style={{ padding: '12px' }}>
                      <button className="btn btn-sm btn-pink" onClick={() => setProductList(productList.filter(pr => pr.id !== p.id))}><Trash2 size={14} /></button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

    </div>
  );
}
