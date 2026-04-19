import React, { useState } from 'react';
import { Package, Plus, Search, Filter, CalendarDays, Users, MapPin, PlaneTakeoff, Edit, Trash2, X } from 'lucide-react';
import { cn } from '../lib/utils';

export default function PaketUmrah() {
  const [packages, setPackages] = useState([
    { id: 1, title: "Umrah Reguler 9 Hari", duration: "9 Hari", capacity: "45/45", destination: "Makkah & Madinah", price: "Rp 28.500.000", flight: "Saudia Airlines", star: 4, image: "https://images.unsplash.com/photo-1591585806655-bfa53e41c4eb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", status: 'Aktif' },
    { id: 2, title: "Umrah VIP Lailatul Qadar", duration: "15 Hari", capacity: "20/30", destination: "Makkah (Hotel Zamzam)", price: "Rp 45.000.000", flight: "Garuda Indonesia", star: 5, image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", status: 'Aktif' },
    { id: 3, title: "Umrah Plus Turki", duration: "12 Hari", capacity: "0/40", destination: "Makkah, Madinah, Istanbul", price: "Rp 35.500.000", flight: "Turkish Airlines", star: 5, image: "https://images.unsplash.com/photo-1541432901042-2d8bd64b4a9b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", status: 'Draft' },
  ]);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingId, setEditingId] = useState<number | null>(null);
  const [formData, setFormData] = useState({ title: '', duration: '', destination: '', price: '', flight: '', capacity: '', star: 4, status: 'Aktif', image: 'https://images.unsplash.com/photo-1565552353086-53861fb66215?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80' });

  const handleOpenModal = (pkg?: any) => {
    if (pkg) {
      setEditingId(pkg.id);
      setFormData(pkg);
    } else {
      setEditingId(null);
      setFormData({ title: '', duration: '9 Hari', destination: 'Makkah & Madinah', price: '', flight: 'Saudia Airlines', capacity: '0/45', star: 4, status: 'Aktif', image: 'https://images.unsplash.com/photo-1565552353086-53861fb66215?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80' });
    }
    setIsModalOpen(true);
  };

  const handleDelete = (id: number) => {
    if (window.confirm('Ingin menghapus paket ini?')) {
      setPackages(packages.filter(p => p.id !== id));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (editingId) {
      setPackages(packages.map(p => p.id === editingId ? { ...p, ...formData } : p));
    } else {
      setPackages([...packages, { ...formData, id: Date.now() }]);
    }
    setIsModalOpen(false);
  };

  return (
    <div className="max-w-[1600px] mx-auto">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
        <div>
          <h2 className="text-2xl font-bold text-slate-800">Manajemen Paket Umrah</h2>
          <p className="text-slate-500 text-sm mt-1">Kelola daftar paket umrah, harga, ketersediaan, dan maskapai penerbangan</p>
        </div>
        <button onClick={() => handleOpenModal()} className="bg-emerald-600 hover:bg-emerald-700 text-white px-5 py-2.5 rounded-xl font-bold flex items-center gap-2 shadow-lg shadow-emerald-500/20 transition-all outline-none focus-visible:ring-4 focus-visible:ring-emerald-500/30">
          <Plus className="w-5 h-5" />
          Tambah Paket
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {packages.map((pkg) => (
          <div key={pkg.id} className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden hover:shadow-md transition-all group flex flex-col">
            <div className="h-48 relative overflow-hidden bg-slate-100">
              <img src={pkg.image} alt={pkg.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" referrerPolicy="no-referrer" />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent"></div>
              <span className={cn(
                "absolute top-4 left-4 text-[10px] font-bold px-2 py-1 rounded shadow-sm uppercase tracking-wider backdrop-blur",
                pkg.status === 'Aktif' ? "bg-emerald-500/90 text-white" : "bg-slate-800/90 text-white"
              )}>
                {pkg.status}
              </span>
              <div className="absolute top-4 right-4 flex gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                <button onClick={() => handleOpenModal(pkg)} className="p-1.5 bg-white/90 text-slate-700 hover:text-emerald-600 hover:bg-white rounded-md shadow-sm"><Edit className="w-4 h-4" /></button>
                <button onClick={() => handleDelete(pkg.id)} className="p-1.5 bg-white/90 text-slate-700 hover:text-red-600 hover:bg-white rounded-md shadow-sm"><Trash2 className="w-4 h-4" /></button>
              </div>
              <div className="absolute bottom-4 left-4 right-4 text-white">
                <h3 className="font-bold text-xl mb-1">{pkg.title}</h3>
                <div className="flex items-center gap-3 text-sm text-white/80 font-medium">
                  <span className="flex items-center gap-1.5"><CalendarDays className="w-4 h-4" /> {pkg.duration}</span>
                  <span className="flex items-center gap-1.5"><MapPin className="w-4 h-4" /> {pkg.destination}</span>
                </div>
              </div>
            </div>

            <div className="p-5 flex-1 flex flex-col">
              <div className="grid grid-cols-2 gap-4 mb-5">
                <div className="bg-slate-50 p-3 rounded-xl border border-slate-100">
                  <span className="text-xs text-slate-500 font-semibold mb-1 flex items-center gap-1.5"><Users className="w-3.5 h-3.5" /> Kuota Terisi</span>
                  <p className="font-bold text-slate-800">{pkg.capacity} Pax</p>
                </div>
                <div className="bg-slate-50 p-3 rounded-xl border border-slate-100">
                  <span className="text-xs text-slate-500 font-semibold mb-1 flex items-center gap-1.5"><PlaneTakeoff className="w-3.5 h-3.5" /> Penerbangan</span>
                  <p className="font-bold text-slate-800">{pkg.flight}</p>
                </div>
              </div>
              
              <div className="flex items-center justify-between mt-auto pt-4 border-t border-slate-100">
                <div>
                  <p className="text-xs text-slate-400 font-semibold mb-0.5">Harga Mulai</p>
                  <p className="text-lg font-bold text-emerald-600">{pkg.price}</p>
                </div>
                <div className="flex items-center gap-1 bg-amber-50 text-amber-600 px-2.5 py-1 rounded-md border border-amber-100">
                   <span className="text-xs font-bold">Fasilitas ★ {pkg.star}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 bg-slate-900/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md overflow-hidden transform transition-all">
            <div className="flex justify-between items-center p-5 border-b border-slate-100">
              <h3 className="font-bold text-lg text-slate-800">{editingId ? 'Edit Paket Umrah' : 'Buat Paket Baru'}</h3>
              <button onClick={() => setIsModalOpen(false)} className="text-slate-400 hover:bg-slate-100 p-1.5 rounded-lg transition-colors"><X className="w-5 h-5"/></button>
            </div>
            <form onSubmit={handleSubmit} className="p-5 space-y-4">
              <div>
                <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Nama Paket</label>
                <input required type="text" value={formData.title} onChange={e => setFormData({...formData, title: e.target.value})} className="w-full border border-slate-200 rounded-xl px-4 py-2.5 text-sm focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none" placeholder="cth: Umrah VIP Plus Turki" />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Harga Jual (Rp)</label>
                  <input required type="text" value={formData.price} onChange={e => setFormData({...formData, price: e.target.value})} className="w-full border border-slate-200 rounded-xl px-4 py-2.5 text-sm focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none" placeholder="cth: Rp 35.000.000" />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Status Publikasi</label>
                  <select value={formData.status} onChange={e => setFormData({...formData, status: e.target.value})} className="w-full border border-slate-200 rounded-xl px-4 py-2.5 text-sm focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none bg-white">
                    <option value="Aktif">Aktif</option>
                    <option value="Draft">Draft</option>
                  </select>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                 <div>
                  <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Durasi Hari</label>
                  <input required type="text" value={formData.duration} onChange={e => setFormData({...formData, duration: e.target.value})} className="w-full border border-slate-200 rounded-xl px-4 py-2.5 text-sm focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none" placeholder="cth: 9 Hari" />
                 </div>
                 <div>
                  <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Kapasitas Porsi</label>
                  <input required type="text" value={formData.capacity} onChange={e => setFormData({...formData, capacity: e.target.value})} className="w-full border border-slate-200 rounded-xl px-4 py-2.5 text-sm focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none" placeholder="cth: 0/45" />
                 </div>
              </div>
              <div>
                <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Maskapai Penerbangan</label>
                <input type="text" value={formData.flight} onChange={e => setFormData({...formData, flight: e.target.value})} className="w-full border border-slate-200 rounded-xl px-4 py-2.5 text-sm focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none" placeholder="cth: Saudia Airlines" />
              </div>
              <div className="pt-4 flex gap-3">
                 <button type="button" onClick={() => setIsModalOpen(false)} className="flex-1 bg-white border border-slate-200 text-slate-700 font-bold py-2.5 rounded-xl hover:bg-slate-50 transition-colors">Batal</button>
                 <button type="submit" className="flex-1 bg-emerald-600 text-white font-bold py-2.5 rounded-xl hover:bg-emerald-700 transition-colors shadow-lg shadow-emerald-500/20">Simpan Paket</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
