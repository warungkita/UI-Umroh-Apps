import React, { useState } from 'react';
import { Medal, Plus, Target, CheckCircle2, ChevronRight, Edit, Trash2, ShieldCheck, Star, X } from 'lucide-react';
import { cn } from '../lib/utils';

export default function Reward() {
  const [rewards, setRewards] = useState([
    { id: 1, title: "Umrah Gratis Bintang 5", target: 50, achieved: 4, icon: Star, colorClass: "text-amber-500 bg-amber-50 border-amber-200", progressWidth: "25%", progressColor: "bg-amber-500" },
    { id: 2, title: "Cashback Reward 10 Juta", target: 20, achieved: 12, icon: ShieldCheck, colorClass: "text-emerald-500 bg-emerald-50 border-emerald-200", progressWidth: "60%", progressColor: "bg-emerald-500" },
    { id: 3, title: "Emas Antam 10 Gram", target: 10, achieved: 45, icon: Medal, colorClass: "text-yellow-600 bg-yellow-50 border-yellow-200", progressWidth: "100%", progressColor: "bg-yellow-500" },
    { id: 4, title: "Mobil Operasional Calya", target: 150, achieved: 1, icon: Target, colorClass: "text-blue-500 bg-blue-50 border-blue-200", progressWidth: "8%", progressColor: "bg-blue-500" },
  ]);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingId, setEditingId] = useState<number | null>(null);
  const [formData, setFormData] = useState({ title: '', target: 10, achieved: 0, theme: 'emerald' });

  const handleOpenModal = (rev?: any) => {
    if (rev) {
      setEditingId(rev.id);
      const themeMatch = rev.colorClass.match(/text-([a-z]+)-/);
      setFormData({ 
        title: rev.title, 
        target: rev.target, 
        achieved: rev.achieved,
        theme: themeMatch ? themeMatch[1] : 'emerald'
      });
    } else {
      setEditingId(null);
      setFormData({ title: '', target: 10, achieved: 0, theme: 'emerald' });
    }
    setIsModalOpen(true);
  };

  const handleDelete = (id: number) => {
    if (window.confirm('Hapus program reward ini?')) {
      setRewards(rewards.filter(r => r.id !== id));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const percent = Math.min(100, (formData.achieved / formData.target) * 100);
    const newReward = {
      title: formData.title,
      target: formData.target,
      achieved: formData.achieved,
      icon: Target,
      colorClass: `text-${formData.theme}-500 bg-${formData.theme}-50 border-${formData.theme}-200`,
      progressWidth: `${percent}%`,
      progressColor: `bg-${formData.theme}-500`
    };

    if (editingId) {
      setRewards(rewards.map(r => r.id === editingId ? { ...r, ...newReward, id: editingId } : r));
    } else {
      setRewards([...rewards, { ...newReward, id: Date.now() }]);
    }
    setIsModalOpen(false);
  };

  return (
    <div className="max-w-[1600px] mx-auto">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
        <div>
          <h2 className="text-2xl font-bold text-slate-800">Sistem Reward Agen</h2>
          <p className="text-slate-500 text-sm mt-1">Pantau target pencapaian penjualan agen & berikan apresiasi bonus</p>
        </div>
        <button onClick={() => handleOpenModal()} className="bg-emerald-600 hover:bg-emerald-700 text-white px-5 py-2.5 rounded-xl font-bold flex items-center gap-2 shadow-lg shadow-emerald-500/20 transition-all outline-none focus-visible:ring-4 focus-visible:ring-emerald-500/30">
          <Plus className="w-5 h-5" />
          Buat Program Reward
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {rewards.map((reward) => (
          <div key={reward.id} className="bg-white rounded-2xl shadow-sm border border-slate-100 p-6 flex flex-col group relative overflow-hidden transition-all hover:shadow-md hover:border-emerald-200">
            {/* Context Actions */}
            <div className="absolute top-4 right-4 flex gap-1 opacity-0 group-hover:opacity-100 transition-opacity z-10 bg-white/80 p-1 rounded-lg backdrop-blur-sm">
               <button onClick={() => handleOpenModal(reward)} className="p-1.5 text-slate-400 hover:text-emerald-600 hover:bg-emerald-50 rounded-md"><Edit className="w-4 h-4" /></button>
               <button onClick={() => handleDelete(reward.id)} className="p-1.5 text-slate-400 hover:text-red-500 hover:bg-red-50 rounded-md"><Trash2 className="w-4 h-4" /></button>
            </div>

            <div className="flex items-start gap-4 mb-5">
              <div className={cn("w-14 h-14 rounded-2xl flex items-center justify-center shrink-0 border", reward.colorClass)}>
                {React.createElement(reward.icon, { className: "w-7 h-7" })}
              </div>
              <div>
                <h3 className="font-bold text-slate-800 text-lg leading-tight mb-1">{reward.title}</h3>
                <p className="text-sm font-semibold text-slate-500 flex items-center gap-1">
                  <Target className="w-4 h-4 text-slate-400" /> Target: {reward.target} Penjualan
                </p>
              </div>
            </div>

            {/* Progress */}
            <div className="mb-6">
               <div className="flex justify-between items-end mb-2">
                 <div>
                   <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">Progress Terbanyak</p>
                   {/* Avatar Group */}
                   <div className="flex -space-x-2 mt-2">
                     <img className="w-7 h-7 rounded-full border-2 border-white relative z-30" src="https://ui-avatars.com/api/?name=Agus&background=random" alt="" />
                     <img className="w-7 h-7 rounded-full border-2 border-white relative z-20" src="https://ui-avatars.com/api/?name=Budi&background=random" alt="" />
                     <img className="w-7 h-7 rounded-full border-2 border-white relative z-10" src="https://ui-avatars.com/api/?name=Citra&background=random" alt="" />
                     <div className="w-7 h-7 rounded-full border-2 border-white bg-slate-100 flex items-center justify-center text-[10px] font-bold text-slate-500 z-0">+{reward.achieved}</div>
                   </div>
                 </div>
                 <div className="text-right">
                   <p className="text-2xl font-bold tracking-tight text-slate-800">{reward.achieved}</p>
                   <p className="text-xs font-semibold text-slate-500">Agen Mencapai</p>
                 </div>
               </div>
               
               <div className="h-2 w-full bg-slate-100 rounded-full overflow-hidden mt-3">
                 <div className={cn("h-full rounded-full transition-all duration-1000", reward.progressColor)} style={{ width: reward.progressWidth }}></div>
               </div>
            </div>

            <button className="mt-auto w-full flex items-center justify-center gap-2 py-2.5 rounded-xl border border-slate-200 text-slate-700 font-bold hover:bg-slate-50 transition-colors">
               Lihat Daftar Agen <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        ))}
      </div>

      {/* MODAL CRUD */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-slate-900/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md overflow-hidden transform transition-all">
            <div className="flex justify-between items-center p-5 border-b border-slate-100">
              <h3 className="font-bold text-lg text-slate-800">{editingId ? 'Edit Reward Target' : 'Buat Program Reward'}</h3>
              <button onClick={() => setIsModalOpen(false)} className="text-slate-400 hover:bg-slate-100 p-1.5 rounded-lg transition-colors"><X className="w-5 h-5"/></button>
            </div>
            <form onSubmit={handleSubmit} className="p-5 space-y-4">
              <div>
                <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Nama Program (Hadiah)</label>
                <input required type="text" value={formData.title} onChange={e => setFormData({...formData, title: e.target.value})} className="w-full border border-slate-200 rounded-xl px-4 py-2.5 text-sm focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none" placeholder="cth: Umrah Gratis" />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Target Minimal (Pax)</label>
                  <input required type="number" min="1" value={formData.target} onChange={e => setFormData({...formData, target: parseInt(e.target.value)||1})} className="w-full border border-slate-200 rounded-xl px-4 py-2.5 text-sm focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none" />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Agen Mencapai (Mock)</label>
                  <input required type="number" min="0" value={formData.achieved} onChange={e => setFormData({...formData, achieved: parseInt(e.target.value)||0})} className="w-full border border-slate-200 rounded-xl px-4 py-2.5 text-sm focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none" />
                </div>
              </div>
              <div>
                <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Tema Warna Label</label>
                <select value={formData.theme} onChange={e => setFormData({...formData, theme: e.target.value})} className="w-full border border-slate-200 rounded-xl px-4 py-2.5 text-sm focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none bg-white">
                  <option value="emerald">Hijau (Emerald)</option>
                  <option value="amber">Emas (Amber)</option>
                  <option value="blue">Biru (Blue)</option>
                  <option value="yellow">Kuning Terang</option>
                  <option value="purple">Ungu (Premium)</option>
                </select>
              </div>
              <div className="pt-4 flex gap-3">
                 <button type="button" onClick={() => setIsModalOpen(false)} className="flex-1 bg-white border border-slate-200 text-slate-700 font-bold py-2.5 rounded-xl hover:bg-slate-50 transition-colors">Batal</button>
                 <button type="submit" className="flex-1 bg-emerald-600 text-white font-bold py-2.5 rounded-xl hover:bg-emerald-700 transition-colors shadow-lg shadow-emerald-500/20">Simpan Program</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
