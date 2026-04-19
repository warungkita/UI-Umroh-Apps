import React from 'react';
import { MessageCircle, Plus, Search, Play, Pause, RefreshCw, Users, CheckCircle2 } from 'lucide-react';
import { cn } from '../lib/utils';

export default function BroadcastWA() {
  return (
    <div className="max-w-[1600px] mx-auto h-full flex flex-col xl:flex-row gap-6">
      {/* Left: Campaigns List */}
      <div className="flex-1 overflow-y-auto">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
          <div>
            <h2 className="text-2xl font-bold text-slate-800">Broadcast WhatsApp</h2>
            <p className="text-slate-500 text-sm mt-1">Kirim pesan massal untuk promosi, tagihan, dan pengumuman</p>
          </div>
          <button className="bg-emerald-600 hover:bg-emerald-700 text-white px-5 py-2.5 rounded-xl font-bold flex items-center gap-2 shadow-lg shadow-emerald-500/20 transition-all outline-none focus-visible:ring-4 focus-visible:ring-emerald-500/30">
            <Plus className="w-5 h-5" />
            Buat Campaign
          </button>
        </div>

        <div className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden mb-6">
          <div className="p-4 border-b border-slate-100 bg-slate-50 flex justify-between items-center">
            <div className="relative w-full max-w-sm group">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 w-4 h-4 group-focus-within:text-emerald-500 transition-colors" />
              <input
                type="text"
                placeholder="Cari campaign broadcast..."
                className="w-full pl-10 pr-4 py-2 bg-white border border-slate-200 focus:bg-white focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 rounded-xl text-sm font-medium transition-all outline-none"
              />
            </div>
          </div>
          <div className="divide-y divide-slate-100">
            {[1, 2, 3].map((item) => (
              <div key={item} className="p-5 hover:bg-slate-50 transition-colors cursor-pointer group flex flex-col sm:flex-row gap-4 justify-between items-start sm:items-center">
                <div className="flex gap-4">
                  <div className={cn(
                    "w-12 h-12 rounded-xl flex items-center justify-center shrink-0 border",
                    item === 1 ? "bg-amber-50 text-amber-600 border-amber-200" : "bg-emerald-50 text-emerald-600 border-emerald-200"
                  )}>
                    {item === 1 ? <RefreshCw className="w-5 h-5 animate-spin-slow" /> : <CheckCircle2 className="w-5 h-5" />}
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-800 text-base">{item === 1 ? 'Promo Ramadhan 1445H' : `Reminder Manasik Kloter ${item}`}</h4>
                    <div className="flex items-center gap-3 text-sm text-slate-500 mt-1">
                      <span className="flex items-center gap-1"><Users className="w-3.5 h-3.5" /> 1,240 Target</span>
                      <span className="w-1 h-1 bg-slate-300 rounded-full"></span>
                      <span>Dibuat: 10 Okt 2024</span>
                    </div>
                  </div>
                </div>

                <div className="w-full sm:w-auto flex items-center gap-4">
                  <div className="w-full md:w-32 shrink-0">
                    <div className="flex justify-between text-xs font-semibold mb-1">
                      <span className={item === 1 ? "text-amber-600" : "text-emerald-600"}>{item === 1 ? '45%' : '100%'}</span>
                      <span className="text-slate-400">{item === 1 ? 'Mengirim' : 'Selesai'}</span>
                    </div>
                    <div className="h-1.5 bg-slate-100 rounded-full overflow-hidden">
                      <div className={cn("h-full rounded-full transition-all", item === 1 ? "bg-amber-500" : "bg-emerald-500")} style={{width: item === 1 ? '45%' : '100%'}}></div>
                    </div>
                  </div>
                  {item === 1 && (
                    <button className="w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-600 flex items-center justify-center transition-colors">
                      <Pause className="w-4 h-4 fill-current" />
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Right Side: Quick Action or Detail View */}
      <div className="w-full xl:w-[400px] shrink-0 xl:h-[calc(100vh-140px)] flex flex-col bg-slate-900 rounded-3xl shadow-sm border border-slate-800 overflow-hidden relative text-white">
        <div className="p-6 border-b border-slate-800">
          <h3 className="font-bold text-lg mb-2">Simulasi Pesan</h3>
          <p className="text-slate-400 text-sm">Pratinjau pesan di WhatsApp</p>
        </div>
        <div className="flex-1 p-6 bg-[#efeae2] overflow-y-auto" style={{backgroundImage: `url('https://cdn.whatsapp.net/img/bg-chat-tile-light_04fcacde539c58cca6745483d4858c52.png')`, opacity: 0.9}}>
          {/* Mock WA Bubble */}
          <div className="bg-white text-slate-800 p-3 rounded-2xl rounded-tl-none shadow-sm max-w-[85%] text-sm mb-4 relative ml-2">
            <span className="font-bold text-emerald-600 text-xs block mb-1">Admin UmrahSync</span>
            <p className="leading-relaxed whitespace-pre-wrap">
              *Assalamualaikum, Bpk/Ibu {"{{nama_jamaah}}"}* 🙏{"\n\n"}
              Semoga selalu dalam lindungan Allah SWT.{"\n\n"}
              Kami menginformasikan bahwa *Promo Potongan Spesial Ramadhan sebesar Rp 2.000.000* akan segera berakhir besok!{"\n\n"}
              Segera amankan seat Anda! Kuota tersisa sangat terbatas.
            </p>
            <div className="text-[10px] text-right text-slate-400 mt-1">10:45</div>
            {/* Bubble Tail */}
            <div className="absolute top-0 -left-2 w-3 h-3 bg-white" style={{clipPath: 'polygon(100% 0, 0 0, 100% 100%)'}}></div>
          </div>

          <div className="flex flex-col gap-2 max-w-[85%] ml-auto">
            <div className="bg-[#d9fdd3] text-slate-800 p-3 rounded-2xl rounded-tr-none shadow-sm text-sm relative">
               <p>Waalaikumsalam, terima kasih infonya. Mau daftar untuk 2 orang masih bisa?</p>
               <div className="text-[10px] text-right text-emerald-600 mt-1 flex justify-end items-center gap-1">10:48 <CheckCircle2 className="w-3 h-3"/></div>
               <div className="absolute top-0 -right-2 w-3 h-3 bg-[#d9fdd3]" style={{clipPath: 'polygon(0 0, 100% 0, 0 100%)'}}></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
