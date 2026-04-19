import React, { useState } from 'react';
import { Eye, Plus, Search, Filter, Download, MoreVertical, Edit, Trash2, X } from 'lucide-react';
import { cn } from '../lib/utils';

export default function DataJamaah() {
  const [jamaahs, setJamaahs] = useState([
    { id: 1, name: "Ahmad Zainuddin", package: "Umrah Reguler 9 Hari", registerDate: "12 Okt 2024", paymentStatus: "Lunas", docProgress: 100 },
    { id: 2, name: "Siti Fatimah", package: "Umrah VIP 12 Hari", registerDate: "15 Okt 2024", paymentStatus: "DP 50%", docProgress: 60 },
    { id: 3, name: "Budi Santoso", package: "Umrah Plus Turki", registerDate: "18 Okt 2024", paymentStatus: "Belum Bayar", docProgress: 20 },
    { id: 4, name: "Keluarga H. Abdul", package: "Paket Keluarga 5 Pax", registerDate: "20 Okt 2024", paymentStatus: "Lunas", docProgress: 85 }
  ]);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingId, setEditingId] = useState<number | null>(null);
  const [formData, setFormData] = useState({ name: '', package: 'Umrah Reguler 9 Hari', paymentStatus: 'Belum Bayar', docProgress: 0 });

  const handleOpenModal = (jamaah?: any) => {
    if (jamaah) {
      setEditingId(jamaah.id);
      setFormData(jamaah);
    } else {
      setEditingId(null);
      setFormData({ name: '', package: 'Umrah Reguler 9 Hari', paymentStatus: 'Belum Bayar', docProgress: 0 });
    }
    setIsModalOpen(true);
  };

  const handleDelete = (id: number) => {
    if (window.confirm('Hapus data jamaah ini permanen?')) {
      setJamaahs(jamaahs.filter(j => j.id !== id));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const today = new Intl.DateTimeFormat('id-ID', { day: '2-digit', month: 'short', year: 'numeric' }).format(new Date());

    if (editingId) {
      setJamaahs(jamaahs.map(j => j.id === editingId ? { ...j, ...formData } : j));
    } else {
      setJamaahs([...jamaahs, { ...formData, id: Date.now(), registerDate: today }]);
    }
    setIsModalOpen(false);
  };

  return (
    <div className="max-w-[1600px] mx-auto">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
        <div>
          <h2 className="text-2xl font-bold text-slate-800">Database Jamaah</h2>
          <p className="text-slate-500 text-sm mt-1">Kelola data pendaftaran, dokumen perjalanan, dan riwayat pembayaran jamaah</p>
        </div>
        <button onClick={() => handleOpenModal()} className="bg-emerald-600 hover:bg-emerald-700 text-white px-5 py-2.5 rounded-xl font-bold flex items-center gap-2 shadow-lg shadow-emerald-500/20 transition-all outline-none focus-visible:ring-4 focus-visible:ring-emerald-500/30">
          <Plus className="w-5 h-5" />
          Tambah Jamaah
        </button>
      </div>

      <div className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden">
        {/* Toolbar */}
        <div className="p-4 border-b border-slate-100 bg-slate-50 flex flex-col sm:flex-row gap-4 items-center justify-between">
          <div className="relative w-full max-w-md group">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 w-4 h-4 group-focus-within:text-emerald-500 transition-colors" />
            <input
              type="text"
              placeholder="Cari nama, NIK, atau nomor porsi..."
              className="w-full pl-10 pr-4 py-2.5 bg-white border border-slate-200 focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 rounded-xl text-sm font-medium transition-all outline-none"
            />
          </div>
          <div className="flex items-center gap-3 w-full sm:w-auto">
            <button className="flex-1 sm:flex-none flex items-center gap-2 px-4 py-2.5 text-sm font-semibold text-slate-600 bg-white border border-slate-200 rounded-xl hover:bg-slate-50 transition-colors">
              <Filter className="w-4 h-4" /> Filter
            </button>
            <button className="flex-1 sm:flex-none flex items-center gap-2 px-4 py-2.5 text-sm font-semibold text-slate-600 bg-white border border-slate-200 rounded-xl hover:bg-slate-50 transition-colors">
              <Download className="w-4 h-4" /> Export
            </button>
          </div>
        </div>
        
        {/* Table */}
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead className="bg-slate-50 text-slate-500 text-[11px] uppercase font-bold tracking-wider border-b border-slate-200">
              <tr>
                <th className="px-6 py-4 whitespace-nowrap">ID / Nama Jamaah</th>
                <th className="px-6 py-4 whitespace-nowrap">Paket Pilihan</th>
                <th className="px-6 py-4 whitespace-nowrap">Tanggal Daftar</th>
                <th className="px-6 py-4 whitespace-nowrap">Status Pembayaran</th>
                <th className="px-6 py-4 whitespace-nowrap">Progress Dokumen</th>
                <th className="px-6 py-4 whitespace-nowrap text-right">Aksi</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 text-sm">
              {jamaahs.map((jamaah) => (
                <tr key={jamaah.id} className="hover:bg-slate-50/80 transition-colors group">
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <img 
                        src={`https://ui-avatars.com/api/?name=${jamaah.name.split(' ').join('+')}&background=random`} 
                        alt="Avatar" 
                        className="w-10 h-10 rounded-full border border-slate-200"
                      />
                      <div>
                        <p className="font-bold text-slate-800">{jamaah.name}</p>
                        <p className="text-xs text-slate-500 font-mono mt-0.5">JMH-{jamaah.id.toString().padStart(4, '0')}</p>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <span className="font-semibold text-slate-700">{jamaah.package}</span>
                  </td>
                  <td className="px-6 py-4 text-slate-600 font-medium">
                    {jamaah.registerDate}
                  </td>
                  <td className="px-6 py-4">
                    <span className={cn(
                      "px-2.5 py-1 rounded-lg text-xs font-bold border",
                      jamaah.paymentStatus === 'Lunas' 
                        ? "bg-emerald-50 text-emerald-700 border-emerald-100"
                        : jamaah.paymentStatus.includes('DP')
                        ? "bg-amber-50 text-amber-700 border-amber-100"
                        : "bg-red-50 text-red-700 border-red-100"
                    )}>
                      {jamaah.paymentStatus}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3 w-48">
                      <div className="flex-1 h-2 bg-slate-100 rounded-full overflow-hidden">
                        <div 
                          className={cn(
                            "h-full rounded-full transition-all duration-500",
                            jamaah.docProgress === 100 ? "bg-emerald-500" : "bg-blue-500"
                          )} 
                          style={{ width: `${Math.min(100, Math.max(0, jamaah.docProgress))}%` }}
                        ></div>
                      </div>
                      <span className="text-xs font-bold text-slate-600 w-8">{jamaah.docProgress}%</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-right">
                    <div className="flex items-center justify-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                      <button className="p-2 text-slate-400 hover:text-emerald-600 hover:bg-emerald-50 rounded-lg transition-colors"><Eye className="w-4 h-4" /></button>
                      <button onClick={() => handleOpenModal(jamaah)} className="p-2 text-slate-400 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"><Edit className="w-4 h-4" /></button>
                      <button onClick={() => handleDelete(jamaah.id)} className="p-2 text-slate-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors"><Trash2 className="w-4 h-4" /></button>
                    </div>
                  </td>
                </tr>
              ))}
              {jamaahs.length === 0 && (
                <tr>
                  <td colSpan={6} className="px-6 py-8 text-center text-slate-500">
                    Belum ada jamaah terdaftar.
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
              <h3 className="font-bold text-lg text-slate-800">{editingId ? 'Edit Data Jamaah' : 'Tambah Jamaah Baru'}</h3>
              <button onClick={() => setIsModalOpen(false)} className="text-slate-400 hover:bg-slate-100 p-1.5 rounded-lg transition-colors"><X className="w-5 h-5"/></button>
            </div>
            <form onSubmit={handleSubmit} className="p-5 space-y-4">
              <div>
                <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Nama Lengkap (Sesuai KTP)</label>
                <input required type="text" value={formData.name} onChange={e => setFormData({...formData, name: e.target.value})} className="w-full border border-slate-200 rounded-xl px-4 py-2.5 text-sm focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none" placeholder="Masukkan nama..." />
              </div>
              <div>
                 <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Pilihan Paket</label>
                 <select value={formData.package} onChange={e => setFormData({...formData, package: e.target.value})} className="w-full border border-slate-200 rounded-xl px-4 py-2.5 text-sm focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none bg-white">
                    <option value="Umrah Reguler 9 Hari">Umrah Reguler 9 Hari</option>
                    <option value="Umrah VIP 12 Hari">Umrah VIP 12 Hari</option>
                    <option value="Umrah Plus Turki">Umrah Plus Turki</option>
                    <option value="Paket Keluarga 5 Pax">Paket Keluarga 5 Pax</option>
                 </select>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Status Bayar</label>
                  <select value={formData.paymentStatus} onChange={e => setFormData({...formData, paymentStatus: e.target.value})} className="w-full border border-slate-200 rounded-xl px-4 py-2.5 text-sm focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none bg-white">
                    <option value="Belum Bayar">Belum Bayar</option>
                    <option value="DP 30%">DP 30%</option>
                    <option value="DP 50%">DP 50%</option>
                    <option value="Lunas">Lunas</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Kelengkapan Dokumen (%)</label>
                  <input required type="number" min="0" max="100" value={formData.docProgress} onChange={e => setFormData({...formData, docProgress: parseInt(e.target.value)||0})} className="w-full border border-slate-200 rounded-xl px-4 py-2.5 text-sm focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none" />
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
