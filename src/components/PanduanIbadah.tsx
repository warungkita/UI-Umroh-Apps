import React from 'react';
import { Heart, Plus, Search, Book, PlayCircle, Edit, Trash2, Smartphone, Volume2 } from 'lucide-react';
import { cn } from '../lib/utils';

export default function PanduanIbadah() {
  return (
    <div className="max-w-[1600px] mx-auto flex flex-col lg:flex-row gap-8 h-[calc(100vh-140px)]">
      {/* Left List */}
      <div className="flex-1 flex flex-col min-h-0 h-full">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6 shrink-0">
          <div>
            <h2 className="text-2xl font-bold text-slate-800">Panduan Doa & Ibadah</h2>
            <p className="text-slate-500 text-sm mt-1">Kelola konten buku saku digital jamaah (Teks Arab, Latin, Terjemahan, Audio)</p>
          </div>
          <button className="bg-emerald-600 hover:bg-emerald-700 text-white px-5 py-2.5 rounded-xl font-bold flex items-center gap-2 shadow-lg shadow-emerald-500/20 transition-all outline-none focus-visible:ring-4 focus-visible:ring-emerald-500/30">
            <Plus className="w-5 h-5" />
            Tambah Doa Baru
          </button>
        </div>

        <div className="relative w-full mb-6 group shrink-0">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 w-4 h-4 group-focus-within:text-emerald-500 transition-colors" />
          <input
            type="text"
            placeholder="Cari judul doa atau panduan..."
            className="w-full pl-10 pr-4 py-3 bg-white shadow-sm border border-slate-200 focus:bg-white focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 rounded-xl text-sm font-medium transition-all outline-none"
          />
        </div>

        <div className="flex-1 overflow-y-auto pr-2 space-y-3 [&::-webkit-scrollbar]:w-1.5 [&::-webkit-scrollbar-thumb]:bg-slate-200 [&::-webkit-scrollbar-thumb]:rounded-full pb-4">
          {[
            { tag: "Niat", title: "Niat Umrah di Miqat", hasAudio: true },
            { tag: "Thawaf", title: "Doa Memasuki Masjidil Haram", hasAudio: true },
            { tag: "Thawaf", title: "Bacaan Putaran Pertama", hasAudio: true, active: true },
            { tag: "Thawaf", title: "Doa Antara Rukun Yamani & Hajar Aswad", hasAudio: true },
            { tag: "Sa'i", title: "Doa Naik ke Bukit Shafa", hasAudio: false },
            { tag: "Sa'i", title: "Bacaan Melintasi Lampu Hijau", hasAudio: true },
            { tag: "Tahallul", title: "Doa Memotong Rambut", hasAudio: false },
          ].map((item, i) => (
            <div key={i} className={cn(
              "p-4 rounded-2xl flex items-center justify-between cursor-pointer border transition-all group shrink-0",
              item.active ? "bg-emerald-50 border-emerald-500 shadow-sm shadow-emerald-500/10" : "bg-white border-slate-100 shadow-sm hover:border-emerald-300"
            )}>
              <div className="flex items-center gap-4">
                <div className={cn(
                  "w-10 h-10 rounded-full flex items-center justify-center shrink-0",
                  item.active ? "bg-emerald-600 text-white" : "bg-slate-50 text-slate-400"
                )}>
                  <Book className="w-5 h-5" />
                </div>
                <div>
                  <h4 className={cn("font-bold text-base mb-0.5", item.active ? "text-emerald-800" : "text-slate-800")}>{item.title}</h4>
                  <div className="flex items-center gap-2">
                    <span className="text-[10px] uppercase font-bold tracking-wider text-slate-500 bg-slate-100 px-2 py-0.5 rounded">{item.tag}</span>
                    {item.hasAudio && <span className="text-[10px] flex items-center gap-1 font-bold text-blue-600 bg-blue-50 px-2 py-0.5 rounded border border-blue-100"><Volume2 className="w-3 h-3"/> Audio</span>}
                  </div>
                </div>
              </div>
              <div className={cn("flex gap-2 opacity-0 transition-opacity", item.active || "group-hover:opacity-100")}>
                <button className="p-2 text-slate-400 hover:text-emerald-600"><Edit className="w-4 h-4" /></button>
                <button className="p-2 text-slate-400 hover:text-red-500"><Trash2 className="w-4 h-4" /></button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Right / Live Preview UI (Mobile Phone Simulation) */}
      <div className="hidden lg:flex w-[380px] shrink-0 items-center justify-center bg-slate-100/50 rounded-3xl border border-slate-200">
        <div className="w-[320px] h-[650px] bg-slate-900 rounded-[2.5rem] p-3 shadow-2xl relative border-8 border-slate-800 overflow-hidden shrink-0">
           {/* Notch */}
           <div className="absolute top-0 inset-x-0 h-6 flex justify-center z-20">
              <div className="w-32 h-6 bg-slate-800 rounded-b-2xl"></div>
           </div>

           {/* Mobile Screen Content */}
           <div className="bg-white w-full h-full rounded-3xl overflow-hidden flex flex-col font-sans">
              <div className="bg-emerald-600 text-white pt-10 pb-6 px-5 shadow-md relative z-10 shrink-0">
                 <h3 className="font-bold text-lg mb-1">Panduan Thawaf</h3>
                 <p className="text-emerald-100 text-sm opacity-90">Bacaan Putaran Pertama</p>
              </div>

              <div className="flex-1 overflow-y-auto p-5 pb-10 bg-slate-50">
                 <div className="bg-white rounded-2xl p-5 shadow-sm border border-slate-100 mb-4">
                    <p className="text-right font-serif text-2xl leading-loose text-slate-800 mb-6" dir="rtl">
                      بِسْمِ اللَّهِ وَاللَّهُ أَكْبَرُ، اللَّهُمَّ إِيمَانًا بِكَ وَتَصْدِيقًا بِكِتَابِكَ، وَوَفَاءً بِعَهْدِكَ، وَاتِّبَاعًا لِسُنَّةِ نَبِيِّكَ مُحَمَّدٍ صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ
                    </p>
                    
                    <div className="mb-4">
                      <p className="text-[11px] font-bold text-emerald-600 uppercase tracking-wider mb-1">LATIN</p>
                      <p className="text-sm font-medium text-slate-700 italic leading-relaxed">
                        "Bismillahi Wallahu Akbar, Allahumma imanan bika wa tashdiqon bikitabika, wa wafa'an bi'ahdika, wattiba'an lisunnati nabiyyika Muhammadin SAW."
                      </p>
                    </div>

                    <div>
                      <p className="text-[11px] font-bold text-emerald-600 uppercase tracking-wider mb-1">TERJEMAHAN</p>
                      <p className="text-sm text-slate-600 leading-relaxed">
                        "Dengan nama Allah, Allah Maha Besar. Ya Allah, (aku thawaf ini) karena iman kepada-Mu, membenarkan kitab-Mu, memenuhi janji-Mu, dan mengikuti sunnah Nabi-Mu Muhammad SAW."
                      </p>
                    </div>
                 </div>

                 {/* Audio Player Component */}
                 <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-3 flex items-center gap-4 shrink-0">
                    <button className="w-12 h-12 bg-emerald-600 text-white rounded-xl flex items-center justify-center hover:bg-emerald-700 transition-colors shadow-md shadow-emerald-500/20 shrink-0">
                       <PlayCircle className="w-6 h-6 fill-current" />
                    </button>
                    <div className="flex-1">
                      <div className="h-1.5 w-full bg-slate-100 rounded-full overflow-hidden mb-1.5">
                        <div className="h-full bg-emerald-500 w-1/3"></div>
                      </div>
                      <div className="flex justify-between text-[10px] font-bold text-slate-400">
                         <span>0:15</span>
                         <span>0:45</span>
                      </div>
                    </div>
                 </div>
              </div>
           </div>
        </div>
      </div>
    </div>
  );
}
