import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Download, Shield, Zap, Lock, Info, Star, Mail, ExternalLink, Menu, X, Smartphone, CheckCircle, ArrowRight, MessageCircle, Heart } from 'lucide-react';
import teaserImage from '/teaser.png';

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-50px" },
    transition: { duration: 0.6, ease: "easeOut" }
  };

  const stagger = {
    visible: { transition: { staggerChildren: 0.1 } }
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 font-sans selection:bg-emerald-100 selection:text-emerald-900 overflow-x-hidden">

      {/* Custom Background Pattern */}
      <div className="fixed inset-0 z-0 opacity-[0.03] pointer-events-none bg-grid-pattern"></div>

      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/90 backdrop-blur-xl shadow-sm py-4' : 'bg-transparent py-6'}`}>
        <div className="container mx-auto px-6 flex justify-between items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-3"
          >
            <div className="w-10 h-10 rounded-xl flex items-center justify-center overflow-hidden shadow-lg shadow-emerald-200 bg-white">
              <img src="/logo_garda.jpg" alt="Antigravity Logo" className="w-full h-full object-cover" />
            </div>
            <span className="text-2xl font-bold tracking-tight text-slate-900">GardaWara<span className="text-emerald-500">AI</span></span>
          </motion.div>

          {/* Desktop Menu */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="hidden md:flex items-center gap-8"
          >
            <a href="#features" className="text-base font-semibold text-slate-600 hover:text-emerald-600 transition-colors">Fitur</a>
            <a href="#manual" className="text-base font-semibold text-slate-600 hover:text-emerald-600 transition-colors">Panduan</a>
            <a href="#testimonials" className="text-base font-semibold text-slate-600 hover:text-emerald-600 transition-colors">Testimoni</a>
            <a href="#download" className="btn btn-primary px-6 py-2.5 shadow-lg shadow-emerald-200 hover:shadow-emerald-300">
              Unduh APK
            </a>
          </motion.div>

          {/* Mobile Menu Button */}
          <button className="md:hidden p-2 text-slate-600 rounded-lg hover:bg-slate-100" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Dropdown */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-white border-b border-slate-100 absolute w-full shadow-xl overflow-hidden"
            >
              <div className="flex flex-col p-6 gap-4">
                <a href="#features" onClick={() => setIsMenuOpen(false)} className="text-lg font-bold text-slate-700 py-3 border-b border-slate-50">Fitur Unggulan</a>
                <a href="#manual" onClick={() => setIsMenuOpen(false)} className="text-lg font-bold text-slate-700 py-3 border-b border-slate-50">Panduan Instalasi</a>
                <a href="#testimonials" onClick={() => setIsMenuOpen(false)} className="text-lg font-bold text-slate-700 py-3 border-b border-slate-50">Testimoni</a>
                <a href="#download" onClick={() => setIsMenuOpen(false)} className="btn btn-primary justify-center w-full mt-4 py-3">Unduh Sekarang</a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-36 pb-20 md:pt-48 md:pb-32 overflow-hidden">
        {/* Abstract Blobs */}
        <motion.div
          animate={{ scale: [1, 1.1, 1], rotate: [0, 5, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-0 right-0 -translate-y-1/4 translate-x-1/4 w-[600px] h-[600px] bg-emerald-100/50 rounded-full blur-[100px] z-[-1]"
        ></motion.div>
        <div className="absolute bottom-0 left-0 translate-y-1/4 -translate-x-1/4 w-[500px] h-[500px] bg-blue-100/40 rounded-full blur-[100px] z-[-1]"></div>

        <div className="container mx-auto px-6">
          <div className="flex flex-col items-center text-center max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ type: "spring", stiffness: 100 }}
              className="mb-8"
            >
              <span className="px-5 py-2 rounded-full bg-white border border-emerald-100 text-emerald-600 text-sm font-bold shadow-sm flex items-center gap-2">
                <div className="w-5 h-5 rounded-full overflow-hidden flex items-center justify-center">
                  <img src="/logo_garda.jpg" alt="Logo" className="w-full h-full object-cover" />
                </div> #1 AI Anti-Judi Protection
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="text-5xl md:text-7xl font-bold tracking-tight text-slate-900 mb-8 leading-[1.1]"
            >
              Lawan Judi Online<br />dengan <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 to-teal-400">Cerdas</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.7 }}
              className="text-xl text-slate-500 mb-12 max-w-2xl leading-relaxed font-medium"
            >
              Lindungi diri dan keluarga dari jeratan situs judi online. GardaWara AI mendeteksi dan memblokir akses ke <span className="text-slate-800 font-bold bg-emerald-100/50 px-1 rounded">situs website judi</span> secara otomatis.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="flex flex-col sm:flex-row w-full sm:w-auto gap-4"
            >
              <a href="#download" className="btn btn-primary text-lg px-8 py-4 shadow-xl shadow-emerald-200/50 hover:shadow-2xl hover:shadow-emerald-200/50">
                <Download className="w-5 h-5" /> Download Sekarang
              </a>
              <a href="#manual" className="btn btn-secondary text-lg px-8 py-4">
                <Info className="w-5 h-5" /> Cara Install
              </a>
            </motion.div>
          </div>

          {/* Hero Image / Teaser */}
          <motion.div
            initial={{ opacity: 0, y: 80 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="mt-24 relative mx-auto max-w-5xl group"
          >
            <div className="absolute -inset-4 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-[2rem] opacity-20 blur-2xl group-hover:opacity-30 transition-opacity duration-500"></div>
            <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-slate-200 border-4 border-white bg-white">
              <img src="/teaser.png" alt="Dashboard GardaWara" className="w-full h-auto" />

              {/* Floating Stats Card Animation */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute bottom-6 left-6 md:bottom-12 md:left-12 bg-white/95 backdrop-blur p-5 rounded-2xl shadow-xl border border-white/50 hidden md:block"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center overflow-hidden border-2 border-white shadow-sm">
                    <img src="/logo_garda.jpg" alt="Logo" className="w-full h-full object-cover" />
                  </div>
                  <div>
                    <p className="text-xs text-slate-500 font-bold uppercase tracking-wider">Status Proteksi</p>
                    <p className="font-bold text-slate-800 text-lg">Aktif & Aman</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Grid */}
      <section id="features" className="py-24 bg-white relative">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <motion.h2 {...fadeInUp} className="text-3xl md:text-4xl font-bold mb-4 text-slate-900">Kenapa GardaWara?</motion.h2>
            <motion.p {...fadeInUp} className="text-slate-500 text-lg font-medium">Teknologi cerdas yang bekerja di latar belakang untuk ketenangan pikiran Anda.</motion.p>
          </div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={stagger}
            viewport={{ once: true }}
            className="grid md:grid-cols-3 gap-8"
          >
            {[
              {
                icon: <img src="/protektif.png" alt="Protektif" className="w-10 h-10 object-contain" />,
                color: "bg-emerald-50",
                title: "Protektif",
                desc: "AI Canggih dan protektif melebihi VPN dan blokir situs pemerintah."
              },
              {
                icon: <img src="/chatbot.png" alt="Chatbot" className="w-10 h-10 object-contain" />,
                color: "bg-blue-50",
                title: "Chatbot",
                desc: "Chatbot untuk dukungan psikologis yang siap mendengarkan kapan saja."
              },
              {
                icon: <img src="/support.png" alt="Support" className="w-10 h-10 object-contain" />,
                color: "bg-rose-50",
                title: "Support",
                desc: "Supportif notifikasi psikologis untuk menjaga kesehatan mental Anda."
              }
            ].map((item, idx) => (
              <motion.div
                key={idx}
                variants={fadeInUp}
                className="card group hover:scale-[1.02]"
              >
                <div className={`w-16 h-16 ${item.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  {item.icon}
                </div>
                <h3 className="text-2xl font-bold mb-3 text-slate-800">{item.title}</h3>
                <p className="text-slate-500 leading-relaxed font-medium">{item.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Manual Installation Guide */}
      <section id="manual" className="py-24 bg-slate-50 border-y border-slate-200 overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="w-full lg:w-1/2">
              <motion.div {...fadeInUp}>
                <h2 className="text-3xl md:text-4xl font-bold mb-6 text-slate-900">Pasang dalam 3 Langkah Mudah</h2>
                <p className="text-slate-500 text-lg mb-10 font-medium">Karena aplikasi ini memblokir situs web secara sistem, instalasi memerlukan izin khusus.</p>

                <div className="space-y-8">
                  {[
                    { step: "01", title: "Download & Install", desc: "Unduh APK dari tombol di bawah. Izinkan instalasi dari 'Unknown Sources' jika diminta." },
                    { step: "02", title: "Buka Aplikasi", desc: "Jalankan GardaWara AI. Anda akan melihat status perlindungan belum aktif." },
                    { step: "03", title: "Aktifkan Izin", desc: "Ikuti petunjuk di layar untuk mengaktifkan 'Aksesibilitas'. Ini kunci pemblokiran." }
                  ].map((s, i) => (
                    <div key={i} className="flex gap-6 relative group">
                      {i !== 2 && <div className="absolute left-[1.65rem] top-14 bottom-[-2rem] w-0.5 bg-slate-200 group-hover:bg-emerald-200 transition-colors"></div>}
                      <div className="flex-shrink-0 w-14 h-14 rounded-full bg-white border-2 border-emerald-100 flex items-center justify-center text-emerald-600 font-bold shadow-sm z-10 text-xl group-hover:bg-emerald-500 group-hover:text-white transition-all duration-300">
                        {s.step}
                      </div>
                      <div className="pt-2">
                        <h4 className="text-xl font-bold text-slate-800 mb-2 group-hover:text-emerald-600 transition-colors">{s.title}</h4>
                        <p className="text-slate-500">{s.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>

            <div className="w-full lg:w-1/2">
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="relative bg-white p-10 rounded-[2.5rem] shadow-xl shadow-slate-200/50 border border-slate-100"
              >
                <div className="flex items-center gap-5 mb-10">
                  <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center">
                    <CheckCircle className="w-8 h-8 text-emerald-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-2xl text-slate-900">Informasi Teknis</h3>
                    <p className="text-slate-400 font-medium">Versi 1.0.0 Stable</p>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-5 bg-slate-50 rounded-2xl border border-slate-100">
                    <span className="text-slate-600 font-semibold">Ukuran File</span>
                    <span className="font-bold text-slate-800">90 MB</span>
                  </div>
                  <div className="flex items-center justify-between p-5 bg-slate-50 rounded-2xl border border-slate-100">
                    <span className="text-slate-600 font-semibold">Android Versi</span>
                    <span className="font-bold text-slate-800">8.0+</span>
                  </div>
                  <div className="flex items-center justify-between p-5 bg-slate-50 rounded-2xl border border-slate-100">
                    <span className="text-slate-600 font-semibold">Tipe Aplikasi</span>
                    <span className="font-bold text-slate-800">Offline</span>
                  </div>
                  <div className="flex items-center justify-between p-5 bg-slate-50 rounded-2xl border border-slate-100">
                    <span className="text-slate-600 font-semibold">Keamanan</span>
                    <span className="font-bold text-emerald-600">Terjamin Aman</span>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="py-24 bg-white relative">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-slate-900">Apa Kata Mereka?</h2>
          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={stagger}
            viewport={{ once: true }}
            className="grid md:grid-cols-3 gap-8"
          >
            {[
              { text: "Sangat membantu saya lepas dari kecanduan slot. Fiturnya simpel tapi efektif banget.", role: "Mahasiswa" },
              { text: "Sebagai orang tua, saya jadi tenang minjamkan HP ke anak. Terima kasih GardaWara!", role: "Tukang Parkir" },
              { text: "Aplikasi ringan, gak bikin HP panas. Deteksinya juga cepet banget. Mantap!", role: "Satpam" }
            ].map((t, i) => (
              <motion.div
                key={i}
                variants={fadeInUp}
                whileHover={{ y: -10 }}
                className="p-8 bg-slate-50 rounded-3xl border border-slate-100 relative"
              >
                <div className="absolute -top-4 left-8 text-6xl text-emerald-200 font-serif opacity-50">"</div>
                <div className="flex gap-1 mb-6 mt-2">
                  {[1, 2, 3, 4, 5].map(s => <Star key={s} className="w-5 h-5 text-amber-400 fill-amber-400" />)}
                </div>
                <p className="text-slate-600 mb-8 italic text-lg leading-relaxed">"{t.text}"</p>
                <div className="border-t border-slate-200 pt-6">
                  <p className="font-bold text-slate-900 text-lg">R****</p>
                  <p className="text-emerald-500 font-medium text-sm uppercase tracking-wider mt-1">{t.role}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Download Final Call */}
      <section id="download" className="py-24 bg-white relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-[0.03]"></div>

        <div className="container mx-auto px-6 text-center relative z-10">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-bold mb-8 text-slate-900"
          >
            Ambil Langkah Pertama Hari Ini
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-slate-500 text-xl mb-12 max-w-2xl mx-auto font-medium"
          >
            Jangan biarkan situs judi online merusak masa depan Anda. Download GardaWara AI sekarang.
          </motion.p>

          <div className="flex flex-col items-center gap-6">
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="/gardawara.apk"
              download
              className="btn btn-primary px-8 py-5 md:px-12 md:py-6 text-lg md:text-xl font-bold shadow-2xl rounded-full flex items-center gap-3 transition-colors w-full md:w-auto justify-center"
            >
              <div className="bg-white/20 p-1.5 rounded-full"><Download className="w-6 h-6 text-white" /></div>
              Download APK Sekarang
            </motion.a>

            <div className="w-full">
              <p className="text-slate-400 font-bold tracking-widest text-xs md:text-sm mb-4 md:mb-6 mt-4">COMING SOON</p>
              <div className="flex flex-col md:flex-row items-center justify-center gap-3 md:gap-4 px-8">
                {/* Google Play (Coded) */}
                <motion.div
                  className="h-12 md:h-14 w-full md:w-auto px-5 bg-slate-900 border border-slate-800 rounded-lg flex items-center justify-center md:justify-start gap-3 opacity-50 cursor-not-allowed grayscale"
                >
                  <svg viewBox="0 0 24 24" className="w-6 h-6 fill-white"><path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.5,12.92 20.16,13.19L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z" /></svg>
                  <div className="text-left leading-none">
                    <div className="text-[8px] md:text-[9px] text-slate-300 uppercase font-medium mb-0.5">GET IT ON</div>
                    <div className="text-base md:text-lg font-bold text-white">Google Play</div>
                  </div>
                </motion.div>

                {/* Xiaomi Store (Coded) */}
                <motion.div
                  className="h-12 md:h-14 w-full md:w-auto px-5 bg-slate-900 border border-slate-800 rounded-lg flex items-center justify-center md:justify-start gap-3 opacity-50 cursor-not-allowed grayscale"
                >
                  <div className="w-6 h-6 bg-white rounded flex items-center justify-center text-slate-900 font-bold text-xs">mi</div>
                  <div className="text-left leading-none">
                    <div className="text-[8px] md:text-[9px] text-slate-300 uppercase font-medium mb-0.5">GET IT ON</div>
                    <div className="text-base md:text-lg font-bold text-white">Xiaomi Store</div>
                  </div>
                </motion.div>

                {/* Huawei Store (Coded) */}
                <motion.div
                  className="h-12 md:h-14 w-full md:w-auto px-5 bg-slate-900 border border-slate-800 rounded-lg flex items-center justify-center md:justify-start gap-3 opacity-50 cursor-not-allowed grayscale"
                >
                  <div className="w-6 h-6 flex items-center justify-center text-white"><svg viewBox="0 0 24 24" className="fill-current w-full h-full"><path d="M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2M12,4A8,8 0 0,0 4,12A8,8 0 0,0 12,20A8,8 0 0,0 20,12A8,8 0 0,0 12,4Z" /></svg></div>
                  <div className="text-left leading-none">
                    <div className="text-[8px] md:text-[9px] text-slate-300 uppercase font-medium mb-0.5">EXPLORE IT ON</div>
                    <div className="text-base md:text-lg font-bold text-white">AppGallery</div>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="bg-slate-50 pt-24 pb-12 border-t border-slate-200">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-12 mb-20">
            <div className="col-span-1 md:col-span-2 pr-10">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-lg flex items-center justify-center overflow-hidden shadow-sm">
                  <img src="/logo_garda.jpg" alt="Logo" className="w-full h-full object-cover" />
                </div>
                <span className="text-2xl font-bold text-slate-900">GardaWara<span className="text-emerald-500">AI</span></span>
              </div>
              <div className="w-full h-px bg-slate-200 my-6"></div>
              <p className="text-slate-500 mb-8 max-w-md text-lg leading-relaxed">
                Solusi cerdas untuk Indonesia bebas judi online. Dibangun dengan teknologi AI untuk perlindungan maksimal dari judi Online.
              </p>
              <div className="flex gap-4">
                <a href="#" className="w-12 h-12 rounded-full bg-white shadow-sm border border-slate-100 flex items-center justify-center text-slate-400 hover:bg-emerald-500 hover:text-white hover:border-emerald-500 transition-all"><Mail className="w-5 h-5" /></a>
                <a href="#" className="w-12 h-12 rounded-full bg-white shadow-sm border border-slate-100 flex items-center justify-center text-slate-400 hover:bg-emerald-500 hover:text-white hover:border-emerald-500 transition-all"><ExternalLink className="w-5 h-5" /></a>
              </div>
            </div>

            <div>
              <h4 className="font-bold text-slate-900 mb-8 text-lg">Tautan Cepat</h4>
              <ul className="space-y-4 text-slate-500 font-medium">
                <li><a href="#" className="hover:text-emerald-600 transition-colors flex items-center gap-2"><ArrowRight className="w-4 h-4 text-emerald-200" /> Beranda</a></li>
                <li><a href="#features" className="hover:text-emerald-600 transition-colors flex items-center gap-2"><ArrowRight className="w-4 h-4 text-emerald-200" /> Fitur Unggulan</a></li>
                <li><a href="#manual" className="hover:text-emerald-600 transition-colors flex items-center gap-2"><ArrowRight className="w-4 h-4 text-emerald-200" /> Panduan Instalasi</a></li>
                <li><a href="#download" className="hover:text-emerald-600 transition-colors flex items-center gap-2"><ArrowRight className="w-4 h-4 text-emerald-200" /> Download</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-slate-900 mb-8 text-lg">Afiliasi Akademik</h4>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white p-3 rounded-xl border border-slate-100 hover:border-emerald-200 hover:shadow-md transition-all flex items-center justify-center h-20">
                  <img src="/telu.jpg" alt="Telkom University" className="max-h-full max-w-full object-contain" />
                </div>
                <div className="bg-white p-3 rounded-xl border border-slate-100 hover:border-emerald-200 hover:shadow-md transition-all flex items-center justify-center h-20">
                  <img src="/informatika.png" alt="Informatika" className="max-h-full max-w-full object-contain" />
                </div>
                <div className="bg-white p-3 rounded-xl border border-slate-100 hover:border-emerald-200 hover:shadow-md transition-all flex items-center justify-center h-20 col-span-2">
                  <img src="/adikara.jpg" alt="Adikara" className="max-h-full max-w-full object-contain" />
                </div>
              </div>
            </div>
          </div>

          <div className="pt-8 border-t border-slate-200 text-center flex flex-col md:flex-row justify-between items-center text-slate-400 font-medium text-sm">
            <p>&copy; 2025 GardaWara AI Team. Hak Cipta Dilindungi.</p>
            <p>Dibuat dengan ❤️ untuk Indonesia</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
