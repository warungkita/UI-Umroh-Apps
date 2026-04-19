import React, { useState } from 'react';
import { MoonStar, Mail, Lock, Eye, EyeOff, ArrowRight } from 'lucide-react';

export default function Login({ onLogin, onForgotPassword }: { onLogin: () => void, onForgotPassword: () => void }) {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="min-h-screen w-full flex bg-white font-sans text-slate-900">
      {/* Left Grid - Image & Branding (Hidden on mobile) */}
      <div className="hidden lg:flex w-1/2 relative bg-slate-900 overflow-hidden items-center justify-center">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1591604129939-f1efa4d9f7fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
            alt="Mecca Kaaba"
            className="w-full h-full object-cover opacity-60"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-emerald-950/70 to-emerald-900/40 mix-blend-multiply"></div>
          <div className="absolute inset-0 bg-emerald-950/20"></div>
        </div>

        {/* Content overlay */}
        <div className="relative z-10 p-12 xl:p-16 flex flex-col justify-end h-full w-full text-white">
          <div className="mb-auto mt-4 inline-flex items-center gap-3 backdrop-blur-md bg-white/10 p-3 rounded-2xl border border-white/20 self-start shadow-xl shadow-black/20">
            <div className="w-10 h-10 bg-emerald-500 rounded-xl flex items-center justify-center text-white shrink-0">
              <MoonStar className="w-5 h-5" />
            </div>
            <span className="font-bold text-2xl tracking-tight pr-2">
              Umrah<span className="text-emerald-400">Sync</span>
            </span>
          </div>

          <div className="max-w-xl">
            <h1 className="text-4xl xl:text-5xl font-bold leading-tight mb-6">
              Manajemen Perjalanan Umrah Tanpa Hambatan.
            </h1>
            <p className="text-lg text-emerald-50/80 font-medium leading-relaxed mb-10">
              Platform all-in-one untuk travel agen skala besar. Kelola data jamaah, jadwal keberangkatan, POS, dan agen dalam satu ekosistem premium.
            </p>
            <div className="flex items-center gap-4 text-sm font-semibold text-emerald-300">
              <div className="flex -space-x-3">
                <img className="w-10 h-10 rounded-full border-2 border-slate-900 object-cover" src="https://ui-avatars.com/api/?name=Ali&background=10b981&color=fff" alt="User" referrerPolicy="no-referrer" />
                <img className="w-10 h-10 rounded-full border-2 border-slate-900 object-cover" src="https://ui-avatars.com/api/?name=Budi&background=0284c7&color=fff" alt="User" referrerPolicy="no-referrer" />
                <img className="w-10 h-10 rounded-full border-2 border-slate-900 object-cover" src="https://ui-avatars.com/api/?name=Siti&background=e11d48&color=fff" alt="User" referrerPolicy="no-referrer" />
              </div>
              <p>Dipercaya oleh 50+ Agen Internasional</p>
            </div>
          </div>
        </div>
      </div>

      {/* Right Grid - Form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-6 sm:p-12 lg:p-24 bg-white relative">
        <div className="w-full max-w-md">
          {/* Mobile Logo */}
          <div className="lg:hidden mb-12 flex items-center gap-3">
            <div className="w-12 h-12 bg-emerald-600 rounded-2xl flex items-center justify-center text-white shrink-0 shadow-lg shadow-emerald-600/20">
              <MoonStar className="w-6 h-6" />
            </div>
            <span className="font-bold text-3xl tracking-tight text-slate-900">
              Umrah<span className="text-emerald-600">Sync</span>
            </span>
          </div>

          <div className="mb-10 text-left">
            <h2 className="text-3xl font-bold text-slate-900 mb-3 tracking-tight">Selamat Datang</h2>
            <p className="text-slate-500 font-medium text-base">Masuk menggunakan kredensial admin Anda.</p>
          </div>

          <form onSubmit={(e) => { e.preventDefault(); onLogin(); }} className="space-y-6">
            <div className="space-y-2">
              <label className="text-sm font-bold text-slate-700 block">Alamat Email</label>
              <div className="relative group">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400 group-focus-within:text-emerald-600 transition-colors" />
                <input
                  type="email"
                  placeholder="admin@umrahsync.com"
                  defaultValue="admin@umrahsync.com"
                  className="w-full pl-12 pr-4 py-3.5 bg-slate-50 border border-slate-200 focus:bg-white focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 rounded-xl text-sm font-medium transition-all outline-none"
                  required
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-bold text-slate-700 block">Kata Sandi</label>
              <div className="relative group">
                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400 group-focus-within:text-emerald-600 transition-colors" />
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="••••••••"
                  defaultValue="password123"
                  className="w-full pl-12 pr-12 py-3.5 bg-slate-50 border border-slate-200 focus:bg-white focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 rounded-xl text-sm font-medium transition-all outline-none"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-emerald-600 transition-colors outline-none p-1 rounded-md"
                >
                  {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                </button>
              </div>
            </div>

            <div className="flex items-center justify-between pt-2">
              <label className="flex items-center gap-3 cursor-pointer group">
                <div className="relative flex items-center justify-center">
                  <input type="checkbox" defaultChecked className="peer appearance-none w-5 h-5 border-2 border-slate-300 rounded-md checked:bg-emerald-500 checked:border-emerald-500 transition-colors cursor-pointer outline-none focus-visible:ring-2 focus-visible:ring-emerald-500/50 focus-visible:ring-offset-1" />
                  <svg className="absolute w-3 h-3 text-white opacity-0 peer-checked:opacity-100 pointer-events-none" viewBox="0 0 14 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1 5L4.5 8.5L13 1" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <span className="text-sm font-semibold text-slate-600 group-hover:text-slate-900 transition-colors">Ingat saya</span>
              </label>
              <button 
                type="button"
                onClick={onForgotPassword}
                className="text-sm font-bold text-emerald-600 hover:text-emerald-700 hover:underline transition-all"
              >
                Lupa sandi?
              </button>
            </div>

            <button
              type="submit"
              className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-4 px-4 rounded-xl transition-all shadow-lg shadow-emerald-600/20 flex items-center justify-center gap-2 group mt-4 outline-none focus-visible:ring-4 focus-visible:ring-emerald-500/30"
            >
              Masuk ke Dashboard
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1.5 transition-transform" />
            </button>
          </form>

          <div className="mt-12 text-center">
            <p className="text-sm font-medium text-slate-500">
              Belum punya akun agen? <a href="#" className="text-emerald-600 font-bold hover:underline ml-1">Kirim Pengajuan</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
