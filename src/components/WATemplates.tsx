import React from 'react';
import { FileCode, Plus, Search, Edit, Trash2, MessageSquare, Copy } from 'lucide-react';

export default function WATemplates() {
  return (
    <div className="max-w-[1600px] mx-auto">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
        <div>
          <h2 className="text-2xl font-bold text-slate-800">WhatsApp Templates</h2>
          <p className="text-slate-500 text-sm mt-1">Kelola template teks dengan variabel dinamis untuk otomatisasi pesan</p>
        </div>
        <button className="bg-emerald-600 hover:bg-emerald-700 text-white px-5 py-2.5 rounded-xl font-bold flex items-center gap-2 shadow-lg shadow-emerald-500/20 transition-all outline-none focus-visible:ring-4 focus-visible:ring-emerald-500/30">
          <Plus className="w-5 h-5" />
          Buat Template
        </button>
      </div>

       {/* Toolbar */}
       <div className="bg-white p-4 rounded-2xl shadow-sm border border-slate-100 mb-6 flex items-center justify-between">
        <div className="relative w-full max-w-md group">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 w-4 h-4 group-focus-within:text-emerald-500 transition-colors" />
          <input
            type="text"
            placeholder="Cari template pesan..."
            className="w-full pl-10 pr-4 py-2.5 bg-slate-50 border border-slate-200 focus:bg-white focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 rounded-xl text-sm font-medium transition-all outline-none"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        {[
          { title: "Tagihan Pembayaran", type: "OTP & Penagihan", body: "Assalamualaikum Bapak/Ibu {{nama_jamaah}},\n\nMengingatkan batas waktu pelunasan untuk tagihan dengan Invoice: *{{no_invoice}}* adalah pada *{{jatuh_tempo}}*.\n\nTotal tagihan: Rp {{sisa_tagihan}}.\nMohon segera diselesaikan." },
          { title: "Pengingat Manasik", type: "Pemberitahuan", body: "Diingatkan kepada jamaah kloter *{{kloter}}*,\nManasik akan diadakan pada:\nHari/Tanggal: {{tanggal_manasik}}\nPukul: {{waktu}}\nTempat: {{lokasi_manasik}}\n\nKehadiran sangat diharapkan." },
          { title: "Pendaftaran Berhasil", type: "Pendaftaran", body: "Alhamdulillah,\nPendaftaran atas nama *{{nama_jamaah}}* untuk paket *{{nama_paket}}* telah kami terima.\n\nSilakan cek email untuk rincian login aplikasi Jamaah App UmrahSync.\n\nTerima kasih." },
          { title: "Dokumen Kurang", type: "Pemberitahuan", body: "Afwan Bapak/Ibu {{nama_jamaah}},\n\nSyarat dokumen visa Anda masih ada yang kurang, yaitu:\n*{{list_dokumen_kurang}}*\n\nMohon disetorkan maksimal *{{deadline_dokumen}}*." }
        ].map((tpl, i) => (
          <div key={i} className="bg-white rounded-2xl shadow-sm border border-slate-100 flex flex-col group hover:border-emerald-300 transition-colors">
            <div className="p-5 border-b border-slate-100 flex justify-between items-start bg-slate-50/50 rounded-t-2xl">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-emerald-100 text-emerald-600 rounded-lg flex items-center justify-center shrink-0">
                  <FileCode className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-bold text-slate-800 text-base">{tpl.title}</h3>
                  <span className="bg-slate-200 text-slate-600 text-[10px] font-bold px-2 py-0.5 rounded uppercase tracking-wider">{tpl.type}</span>
                </div>
              </div>
            </div>
            
            <div className="p-5 flex-1 relative">
              <div className="absolute right-4 top-4 flex gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                <button className="p-1.5 text-slate-400 hover:text-blue-600 bg-white shadow-sm border border-slate-100 rounded-md" title="Copy"><Copy className="w-3.5 h-3.5" /></button>
                <button className="p-1.5 text-slate-400 hover:text-emerald-600 bg-white shadow-sm border border-slate-100 rounded-md" title="Edit"><Edit className="w-3.5 h-3.5" /></button>
                <button className="p-1.5 text-slate-400 hover:text-red-600 bg-white shadow-sm border border-slate-100 rounded-md" title="Delete"><Trash2 className="w-3.5 h-3.5" /></button>
              </div>
              
              <div className="bg-[#efeae2] p-4 rounded-xl border border-[#d3ceca] font-sans text-sm text-slate-800 leading-relaxed whitespace-pre-wrap">
                {tpl.body}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
