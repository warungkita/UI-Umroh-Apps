import React, { useState } from 'react';
import { Ticket, Plus, Search, Copy, Edit, Trash2, Clock, Percent, DollarSign, X } from 'lucide-react';
import { cn } from '../lib/utils';

export default function Voucher() {
  const [vouchers, setVouchers] = useState([
    { id: 1, code: "RAMADHANBERKAH", name: "Promo Umrah Ramadhan", type: "fixed", value: "Rp 2.000.000", used: 45, limit: 100, expiry: "30 Apr 2024", status: "active" },
    { id: 2, code: "EARLYBIRD10", name: "Diskon Pendaftar Awal", type: "percent", value: "10%", used: 12, limit: 50, expiry: "12 Des 2024", status: "active" },
    { id: 3, code: "KORPORATVIP", name: "Paket Khusus Korporat", type: "fixed", value: "Rp 1.500.000", used: 100, limit: 100, expiry: "01 Jan 2024", status: "expired" },
    { id: 4, code: "AGENBONUS", name: "Cashback Closing Agen", type: "fixed", value: "Rp 500.000", used: 8, limit: 1000, expiry: "31 Des 2024", status: "active" },
  ]);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingId, setEditingId] = useState<number | null>(null);
  const [formData, setFormData] = useState({ code: '', name: '', type: 'fixed', value: '', used: 0, limit: 100, expiry: '', status: 'active' });

  const handleOpenModal = (item?: any) => {
    if (item) {
      setEditingId(item.id);
      setFormData(item);
    } else {
      setEditingId(null);
      setFormData({ code: '', name: '', type: 'fixed', value: '', used: 0, limit: 100, expiry: '', status: 'active' });
    }
    setIsModalOpen(true);
  };

  const handleDelete = (id: number) => {
    if (window.confirm('Hapus voucher ini secara permanen?')) {
      setVouchers(vouchers.filter(v => v.id !== id));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (editingId) {
      setVouchers(vouchers.map(v => v.id === editingId ? { ...v, ...formData } : v));
    } else {
      setVouchers([...vouchers, { ...formData, id: Date.now() }]);
    }
    setIsModalOpen(false);
  };

  return (
    <div className="max-w-[1600px] mx-auto">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
        <div>
          <h2 className="text-2xl font-bold text-slate-800">Voucher & Diskon</h2>
          <p className="text-slate-500 text-sm mt-1">Kelola kode promo, cashback, dan potongan harga khusus jamaah</p>
        </div>
        <button onClick={() => handleOpenModal()} className="bg-emerald-600 hover:bg-emerald-700 text-white px-5 py-2.5 rounded-xl font-bold flex items-center gap-2 shadow-lg shadow-emerald-500/20 transition-all outline-none focus-visible:ring-4 focus-visible:ring-emerald-500/30">
          <Plus className="w-5 h-5" />
          Buat Voucher
        </button>
      </div>

      <div className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden">
        <div className="p-4 border-b border-slate-100 bg-slate-50 flex flex-col sm:flex-row gap-4 items-center justify-between">
          <div className="relative w-full max-w-sm group">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 w-4 h-4 group-focus-within:text-emerald-500 transition-colors" />
            <input
              type="text"
              placeholder="Cari kode voucher..."
              className="w-full pl-10 pr-4 py-2.5 bg-white border border-slate-200 focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 rounded-xl text-sm font-medium transition-all outline-none"
            />
          </div>
        </div>
        
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead className="bg-slate-50 text-slate-500 text-[11px] uppercase font-bold tracking-wider border-b border-slate-200">
              <tr>
                <th className="px-6 py-4 whitespace-nowrap">Detail Voucher</th>
                <th className="px-6 py-4 whitespace-nowrap">Nilai Diskon</th>
                <th className="px-6 py-4 whitespace-nowrap">Penggunaan</th>
                <th className="px-6 py-4 whitespace-nowrap">Masa Berlaku</th>
                <th className="px-6 py-4 whitespace-nowrap">Status</th>
                <th className="px-6 py-4 whitespace-nowrap text-right">Aksi</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 text-sm">
              {vouchers.map((item) => (
                <tr key={item.id} className="hover:bg-slate-50/80 transition-colors group">
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <div className={cn(
                        "w-10 h-10 rounded-xl flex items-center justify-center shrink-0 border",
                        item.type === 'percent' ? "bg-purple-50 text-purple-600 border-purple-100" : "bg-emerald-50 text-emerald-600 border-emerald-100"
                      )}>
                         {item.type === 'percent' ? <Percent className="w-5 h-5"/> : <DollarSign className="w-5 h-5"/>}
                      </div>
                      <div>
                        <div className="flex items-center gap-2">
                           <p className="font-mono font-bold text-slate-800 tracking-tight">{item.code}</p>
                           <button className="text-slate-400 hover:text-blue-600 transition-colors" title="Copy"><Copy className="w-3.5 h-3.5" /></button>
                        </div>
                        <p className="text-xs text-slate-500 mt-1">{item.name}</p>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <p className="font-bold text-slate-800 text-lg">{item.value}</p>
                  </td>
                  <td className="px-6 py-4">
                    <div className="w-full max-w-[120px]">
                      <div className="flex justify-between text-xs font-semibold mb-1">
                        <span className="text-slate-600">{item.used} / {item.limit}</span>
                        <span className="text-slate-400">{Math.round((item.used/item.limit)*100)}%</span>
                      </div>
                      <div className="h-1.5 bg-slate-100 rounded-full overflow-hidden">
                        <div className={cn(
                           "h-full rounded-full",
                           item.used >= item.limit ? "bg-red-500" : "bg-emerald-500"
                        )} style={{width: `${Math.min(100, (item.used/item.limit)*100)}%`}}></div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-1.5 text-slate-600 text-sm">
                      <Clock className="w-4 h-4 text-slate-400" /> {item.expiry}
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <span className={cn(
                      "px-2.5 py-1 rounded-lg text-xs font-bold border",
                      item.status === 'active' && item.used < item.limit ? "bg-emerald-50 text-emerald-700 border-emerald-100" : 
                      item.used >= item.limit ? "bg-red-50 text-red-700 border-red-100" :
                      "bg-slate-100 text-slate-600 border-slate-200"
                    )}>
                      {item.status === 'active' && item.used < item.limit ? 'Aktif' : 
                       item.used >= item.limit ? 'Habis (Limit)' : 'Kedaluwarsa'}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-right">
                    <div className="flex items-center justify-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                       <button onClick={() => handleOpenModal(item)} className="p-2 text-slate-400 hover:text-emerald-600 hover:bg-emerald-50 rounded-lg transition-colors"><Edit className="w-4 h-4" /></button>
                       <button onClick={() => handleDelete(item.id)} className="p-2 text-slate-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors"><Trash2 className="w-4 h-4" /></button>
                    </div>
                  </td>
                </tr>
              ))}
              {vouchers.length === 0 && (
                <tr>
                  <td colSpan={6} className="px-6 py-8 text-center text-slate-500">
                    Tidak ada data voucher.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* MODAL CRUD */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-slate-900/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md overflow-hidden transform transition-all">
            <div className="flex justify-between items-center p-5 border-b border-slate-100">
              <h3 className="font-bold text-lg text-slate-800">{editingId ? 'Edit Voucher' : 'Buat Voucher Baru'}</h3>
              <button onClick={() => setIsModalOpen(false)} className="text-slate-400 hover:bg-slate-100 p-1.5 rounded-lg transition-colors"><X className="w-5 h-5"/></button>
            </div>
            <form onSubmit={handleSubmit} className="p-5 space-y-4">
              <div>
                <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Nama Promo</label>
                <input required type="text" value={formData.name} onChange={e => setFormData({...formData, name: e.target.value})} className="w-full border border-slate-200 rounded-xl px-4 py-2.5 text-sm focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none" placeholder="cth: Promo Ramadhan" />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Kode Kupon</label>
                  <input required type="text" value={formData.code} onChange={e => setFormData({...formData, code: e.target.value})} className="w-full border border-slate-200 rounded-xl px-4 py-2.5 text-sm focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none font-mono uppercase" placeholder="cth: PROMO2024" />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Tipe Diskon</label>
                  <select value={formData.type} onChange={e => setFormData({...formData, type: e.target.value})} className="w-full border border-slate-200 rounded-xl px-4 py-2.5 text-sm focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none bg-white">
                    <option value="fixed">Nominal (Rp)</option>
                    <option value="percent">Persentase (%)</option>
                  </select>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Nilai</label>
                  <input required type="text" value={formData.value} onChange={e => setFormData({...formData, value: e.target.value})} className="w-full border border-slate-200 rounded-xl px-4 py-2.5 text-sm focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none" placeholder="10% / Rp 1.000.000" />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Limit Kuota</label>
                  <input required type="number" min="1" value={formData.limit} onChange={e => setFormData({...formData, limit: parseInt(e.target.value) || 0})} className="w-full border border-slate-200 rounded-xl px-4 py-2.5 text-sm focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none" />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Kedaluwarsa</label>
                  <input required type="text" value={formData.expiry} onChange={e => setFormData({...formData, expiry: e.target.value})} className="w-full border border-slate-200 rounded-xl px-4 py-2.5 text-sm focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none" placeholder="cth: 30 Apr 2024" />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Status</label>
                  <select value={formData.status} onChange={e => setFormData({...formData, status: e.target.value})} className="w-full border border-slate-200 rounded-xl px-4 py-2.5 text-sm focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none bg-white">
                    <option value="active">Active</option>
                    <option value="expired">Expired</option>
                  </select>
                </div>
              </div>
              <div className="pt-4 flex gap-3">
                 <button type="button" onClick={() => setIsModalOpen(false)} className="flex-1 bg-white border border-slate-200 text-slate-700 font-bold py-2.5 rounded-xl hover:bg-slate-50 transition-colors">Batal</button>
                 <button type="submit" className="flex-1 bg-emerald-600 text-white font-bold py-2.5 rounded-xl hover:bg-emerald-700 transition-colors shadow-lg shadow-emerald-500/20">Simpan Data</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
