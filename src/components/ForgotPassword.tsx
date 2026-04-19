import React, { useState } from 'react';
import { MoonStar, Mail, ArrowLeft, Send } from 'lucide-react';

export default function ForgotPassword({ onBackToLogin }: { onBackToLogin: () => void }) {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  return (
    <div className="min-h-screen w-full flex bg-white font-sans text-slate-900">
      {/* Left Grid - Image & Branding (Hidden on mobile) */}
      <div className="hidden lg:flex w-1/2 relative bg-slate-900 overflow-hidden items-center justify-center">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1584551246679-0daf3d275d0f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
            alt="Mosque architecture"
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
              Keamanan Data Anda Adalah Prioritas Utama.
            </h1>
            <p className="text-lg text-emerald-50/80 font-medium leading-relaxed mb-10">
              Jangan khawatir jika Anda melupakan kata sandi. Kami akan membantu Anda memulihkan akses ke dashboard dengan aman dan cepat.
            </p>
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

          {!isSubmitted ? (
            <>
              <div className="mb-10 text-left">
                <button 
                  onClick={onBackToLogin}
                  className="flex items-center gap-2 text-sm font-semibold text-slate-500 hover:text-slate-800 transition-colors mb-6 group outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 rounded-lg py-1 pr-2 -ml-1"
                >
                  <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                  Kembali ke Login
                </button>
                <h2 className="text-3xl font-bold text-slate-900 mb-3 tracking-tight">Lupa Kata Sandi?</h2>
                <p className="text-slate-500 font-medium text-base leading-relaxed">
                  Masukkan alamat email yang terdaftar. Kami akan mengirimkan tautan untuk mengatur ulang kata sandi Anda.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700 block">Alamat Email</label>
                  <div className="relative group">
                    <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400 group-focus-within:text-emerald-600 transition-colors" />
                    <input
                      type="email"
                      placeholder="admin@umrahsync.com"
                      className="w-full pl-12 pr-4 py-3.5 bg-slate-50 border border-slate-200 focus:bg-white focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 rounded-xl text-sm font-medium transition-all outline-none"
                      required
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-4 px-4 rounded-xl transition-all shadow-lg shadow-emerald-600/20 flex items-center justify-center gap-2 group mt-4 outline-none focus-visible:ring-4 focus-visible:ring-emerald-500/30"
                >
                  Kirim Tautan Reset
                  <Send className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </button>
              </form>
            </>
          ) : (
            <div className="text-center animating-fade-in fade-in transition-all">
              <div className="w-20 h-20 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <Send className="w-8 h-8 ml-1" />
              </div>
              <h2 className="text-2xl font-bold text-slate-900 mb-3">Cek Email Anda</h2>
              <p className="text-slate-500 font-medium text-base leading-relaxed mb-8">
                Tautan untuk mengatur ulang kata sandi telah dikirimkan ke email Anda. Silakan periksa kotak masuk atau folder spam.
              </p>
              <button
                onClick={onBackToLogin}
                className="w-full bg-slate-900 hover:bg-slate-800 text-white font-bold py-4 px-4 rounded-xl transition-all shadow-lg flex items-center justify-center gap-2 outline-none focus-visible:ring-4 focus-visible:ring-slate-500/30"
              >
                <ArrowLeft className="w-4 h-4" />
                Kembali ke Login
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
