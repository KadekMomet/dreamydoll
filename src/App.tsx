/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  ShoppingBag, 
  ShoppingCart, 
  Menu, 
  X, 
  Plus, 
  Minus, 
  Trash2, 
  Star, 
  Rocket, 
  MessageCircle, 
  MapPin, 
  Phone, 
  Clock, 
  Camera, 
  PlayCircle, 
  Mail,
  ArrowRight,
  Palette,
  Leaf,
  Timer,
  CreditCard,
  Sparkles
} from 'lucide-react';
import { PRODUCTS, TESTIMONIALS, STEPS } from './constants';
import { Product, CartItem } from './types';

export default function App() {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const addToCart = (product: Product) => {
    setCart(prev => {
      const existing = prev.find(item => item.id === product.id);
      if (existing) {
        return prev.map(item => 
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prev, { ...product, quantity: 1 }];
    });
    setIsCartOpen(true);
  };

  const removeFromCart = (id: string) => {
    setCart(prev => prev.filter(item => item.id !== id));
  };

  const updateQuantity = (id: string, delta: number) => {
    setCart(prev => prev.map(item => {
      if (item.id === id) {
        const newQty = Math.max(1, item.quantity + delta);
        return { ...item, quantity: newQty };
      }
      return item;
    }));
  };

  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
  const totalPrice = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);

  return (
    <div className="min-h-screen">
      {/* Navbar */}
      <nav className={`fixed top-0 z-50 w-full transition-all duration-300 ${isScrolled ? 'bg-surface-container-lowest/80 backdrop-blur-md shadow-sm py-3' : 'bg-transparent py-5'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="size-10 bg-primary rounded-full flex items-center justify-center text-white shadow-lg shadow-primary/20">
              <Sparkles className="size-6" />
            </div>
            <h1 className="text-xl font-extrabold tracking-tight text-primary">Dreamy Doll</h1>
          </div>
          
          <div className="hidden md:flex items-center gap-8">
            {['Beranda', 'Katalog', 'Cara Pesan', 'Form Pesanan'].map(item => (
              <a key={item} href={`#${item.toLowerCase().replace(' ', '-')}`} className="text-sm font-semibold hover:text-primary transition-colors">
                {item}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-4">
            <button 
              onClick={() => setIsCartOpen(true)}
              className="relative p-2 rounded-full hover:bg-primary/10 transition-colors"
            >
              <ShoppingCart className="size-6 text-on-surface" />
              {totalItems > 0 && (
                <span className="absolute top-0 right-0 h-5 w-5 bg-primary text-white text-[10px] flex items-center justify-center rounded-full font-bold border-2 border-white">
                  {totalItems}
                </span>
              )}
            </button>
            <button className="hidden lg:block bg-primary hover:bg-primary-dark text-white px-6 py-2.5 rounded-xl font-bold text-sm transition-transform active:scale-95 shadow-md shadow-primary/20">
              Order Sekarang
            </button>
            <button className="md:hidden">
              <Menu className="size-6" />
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="beranda" className="relative overflow-hidden pt-32 pb-24 lg:pt-48 lg:pb-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-8 text-center lg:text-left"
            >
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-primary-dark text-sm font-bold border border-primary/20">
                <Star className="size-4 fill-primary" />
                <span>Plushie Artist Sejak 2021</span>
              </div>
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold leading-[1.1] tracking-tight text-on-surface">
                Wujudkan Imajinasi Jadi Nyata dengan <span className="text-primary italic">Custom Keychain</span> Boneka
              </h1>
              <p className="text-lg text-on-surface/70 max-w-xl mx-auto lg:mx-0 leading-relaxed">
                Spesialis pembuatan keychain boneka custom untuk koleksi pribadi dengan detail yang presisi dan bahan super lembut.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-4">
                <button className="w-full sm:w-auto bg-primary text-white px-10 py-4 rounded-2xl font-bold text-lg flex items-center justify-center gap-2 hover:shadow-xl hover:shadow-primary/30 transition-all hover:-translate-y-1">
                  Hubungi Kami
                  <MessageCircle className="size-5" />
                </button>
                <button className="w-full sm:w-auto bg-white border border-outline-variant/20 px-10 py-4 rounded-2xl font-bold text-lg hover:bg-surface-container-low transition-all">
                  Lihat Portofolio
                </button>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-tertiary-container/30 blur-3xl rounded-full"></div>
              <div className="relative grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <div className="h-72 rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
                    <img 
                      className="w-full h-full object-cover" 
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuCp7ZXZOw6WXZpXUzKkLPo9a7TGCP1LdiSQNkn90BBEvBxdL5wJwcu8hUCLhd-8amWoPBBr9SP48rKjZc-ij5ACf5bShKdPkkh_klQqnaRGTbFaisJuHLiWNYpPVJGEfUoWnpWg7LBDDMgHLBXDVFBYwHBxVGzt1TJq6lHwq-7qSZPt44AAF-7tlPOTNk3qjY8ANc6j5cG2Pxg68TNlMclh4UpnoBC-jar3KomCNI5nTGxs2mcYzw_2UaSB68ZzIn3zvMWjAnlOuA" 
                      alt="Custom Plushies"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <div className="h-56 rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
                    <img 
                      className="w-full h-full object-cover" 
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuCEHhGK8ypUPMn3Q2sOdodclsJ_JxCJN6mX84S9-gdIUQs3tX9k-Lm-SdO_Bcbx8JqzCaQNnJ02qK4F5BM6pMCewWmxwQ9fOz2_kdryvcgdXTtlZ3kt_SYdzcxtmJuEWMdZSRHeUtQhk-LN3_U-LWysYeZyyCb62RgcEEYKH88UULGfYjkfcKIFptVh3VSCRZLt-bHxL3KEIFI6D1tv4hM4UCNJAYzcVCKP0brJ3lb40vp-ZYeshZv5QGUz3pxBr9VDxeQMZiZ-ig" 
                      alt="Bear Keychain"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                </div>
                <div className="space-y-4 pt-16">
                  <div className="h-56 rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
                    <img 
                      className="w-full h-full object-cover" 
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuAtCfADdeJAeuLBW7NNEl0o5ynt3go-HAl-RY01FvaXqoxHj8Bu_uZhGewS--IpOOx7p9yTepy01_O1h64I7ubKQGVfaZPcrJc0ajlnzPEVLBGTigDLCvrhdB_hGHq9771J1qsEzA00sNkSMfYP1Uj9MjT1uazkoh5GSEku_N0c4C1Lt10fW0K07caTysGaT52DaFGKtvAgENtcXg2u0QRVLcFAmRRSTw1BXrQozQB2SFalyh6eiDKhg6GET32FHkg9uzwRcXkt1w" 
                      alt="Anime Character Plush"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <div className="h-72 rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
                    <img 
                      className="w-full h-full object-cover" 
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuBvyOdi6jOERAz6WuYUcUxHRd10sopbeN3QET8pZ71dhbSJ70jlJjt2WnRelDzx5NKWUaAzv0XwURlP2LnVdbhCrtwxcJ5bBOdEjrntC0JuxAyp-4ygdUbAKCdFi7yV5o96tfqUiP-ScVv8CryPeF4681PqXeiL_YrdOzlPeKCWseskD8fm8iBSRVjlbyeiT3sGjAFAQnh-2OU3WVkCUzf31cwGNzg2nsNj3LIYOuB3P3S8tai8x4z3DKLzijYHrczTFSbJZkSepw" 
                      alt="Detail Stitching"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Value Proposition */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
            {[
              { icon: Palette, title: '100% Custom', desc: 'Desain bebas sesukamu', color: 'bg-primary/10 text-primary' },
              { icon: Leaf, title: 'Bahan Premium', desc: 'Bulu halus grade A', color: 'bg-tertiary-container/40 text-emerald-600' },
              { icon: Timer, title: 'Proses Cepat', desc: 'Pengerjaan 3-7 hari', color: 'bg-primary/10 text-primary' },
              { icon: CreditCard, title: 'Harga Kompetitif', desc: 'Kualitas butik harga asik', color: 'bg-tertiary-container/40 text-emerald-600' },
            ].map((item, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center group"
              >
                <div className={`size-20 mx-auto mb-6 ${item.color} rounded-[2rem] flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-300`}>
                  <item.icon className="size-10" />
                </div>
                <h3 className="font-extrabold text-xl mb-2">{item.title}</h3>
                <p className="text-sm text-on-surface/60">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Katalog Inspirasi */}
      <section id="katalog" className="py-24">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-end justify-between mb-16">
            <div className="space-y-4">
              <h2 className="text-4xl font-extrabold tracking-tight">Katalog Inspirasi</h2>
              <p className="text-on-surface/60 text-lg">Lihat berbagai hasil karya yang telah kami buat.</p>
            </div>
            <a href="#" className="text-primary font-bold flex items-center gap-2 hover:gap-3 transition-all group">
              Lihat Semua
              <ArrowRight className="size-5" />
            </a>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
            {PRODUCTS.map((product, i) => (
              <motion.div 
                key={product.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white rounded-[2rem] overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 group"
              >
                <div className="h-72 relative bg-surface-container overflow-hidden">
                  <img 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
                    src={product.image} 
                    alt={product.name}
                    referrerPolicy="no-referrer"
                  />
                  {product.isHot && (
                    <div className="absolute top-4 right-4 bg-primary text-white px-3 py-1 rounded-full text-xs font-black shadow-lg">HOT DEAL</div>
                  )}
                </div>
                <div className="p-8">
                  <h4 className="font-extrabold text-xl leading-tight mb-2">{product.name}</h4>
                  <p className="text-primary-dark text-2xl font-black">Rp {product.price.toLocaleString('id-ID')}</p>
                  <button 
                    onClick={() => addToCart(product)}
                    className="w-full mt-6 bg-on-surface text-white py-4 rounded-2xl font-bold flex items-center justify-center gap-2 hover:bg-primary transition-colors shadow-lg shadow-on-surface/10"
                  >
                    <ShoppingBag className="size-5" />
                    Tambah ke Keranjang
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Langkah Memesan */}
      <section id="cara-pesan" className="py-32 bg-surface-container/30">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-extrabold text-center mb-20 tracking-tight">Langkah Mudah Memesan</h2>
          <div className="relative">
            <div className="hidden md:block absolute top-1/2 left-0 w-full h-1.5 bg-primary/10 -translate-y-1/2"></div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">
              {STEPS.map((step, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.2 }}
                  className="bg-white p-10 rounded-[2.5rem] shadow-sm text-center relative border border-primary/5 hover:shadow-xl transition-all"
                >
                  <div className="size-16 bg-primary text-white rounded-full flex items-center justify-center font-black text-2xl mx-auto mb-8 relative z-10 shadow-xl shadow-primary/30">
                    {step.number}
                  </div>
                  <h3 className="font-extrabold text-2xl mb-4">{step.title}</h3>
                  <p className="text-on-surface/60 leading-relaxed">{step.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-32">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-extrabold text-center mb-20 tracking-tight">Apa Kata Mereka?</h2>
          <div className="grid md:grid-cols-3 gap-10">
            {TESTIMONIALS.map((t, i) => (
              <motion.div 
                key={t.id}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className={`p-10 rounded-[2.5rem] border ${i === 1 ? 'bg-tertiary-container/20 border-tertiary-container' : 'bg-primary/5 border-primary/20'}`}
              >
                <div className="flex gap-1 text-primary-dark mb-6">
                  {[...Array(5)].map((_, idx) => (
                    <Star key={idx} className={`size-5 ${idx < t.rating ? 'fill-primary text-primary' : 'text-primary/30'}`} />
                  ))}
                </div>
                <p className="text-on-surface/80 italic mb-8 text-lg leading-relaxed">{t.text}</p>
                <div className="flex items-center gap-4">
                  <div className="size-14 rounded-full bg-surface-dim overflow-hidden border-2 border-primary/30">
                    <img className="w-full h-full object-cover" src={t.avatar} alt={t.name} referrerPolicy="no-referrer" />
                  </div>
                  <div>
                    <p className="font-extrabold text-lg">{t.name}</p>
                    <p className="text-sm text-on-surface/50 font-medium">{t.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Form Pesanan */}
      <section id="form-pesanan" className="py-32 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-surface-container/40 rounded-[3rem] p-10 md:p-16 shadow-2xl border border-primary/10"
          >
            <div className="text-center mb-12">
              <h2 className="text-4xl font-extrabold mb-4 tracking-tight">Form Pesanan Langsung</h2>
              <p className="text-on-surface/60 text-lg">Isi detail pesananmu di bawah ini dan admin kami akan langsung menghubungi via WhatsApp.</p>
            </div>
            <form className="space-y-8">
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-3">
                  <label className="text-sm font-black uppercase tracking-widest ml-1 text-on-surface/70">Nama Lengkap</label>
                  <input className="w-full bg-white border-none rounded-2xl px-6 py-4 focus:ring-4 focus:ring-primary/20 transition-all shadow-sm" placeholder="Contoh: Jane Doe" type="text"/>
                </div>
                <div className="space-y-3">
                  <label className="text-sm font-black uppercase tracking-widest ml-1 text-on-surface/70">Desain</label>
                  <input className="w-full bg-white border-none rounded-2xl px-6 py-4 focus:ring-4 focus:ring-primary/20 transition-all shadow-sm" placeholder="Contoh: Panda, Kucing, dll" type="text"/>
                </div>
              </div>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-3">
                  <label className="text-sm font-black uppercase tracking-widest ml-1 text-on-surface/70">Warna Dominan</label>
                  <input className="w-full bg-white border-none rounded-2xl px-6 py-4 focus:ring-4 focus:ring-primary/20 transition-all shadow-sm" placeholder="Contoh: Pastel Pink & Putih" type="text"/>
                </div>
                <div className="space-y-3">
                  <label className="text-sm font-black uppercase tracking-widest ml-1 text-on-surface/70">Jumlah (Pcs)</label>
                  <input className="w-full bg-white border-none rounded-2xl px-6 py-4 focus:ring-4 focus:ring-primary/20 transition-all shadow-sm" min="1" type="number" defaultValue="1"/>
                </div>
              </div>
              <div className="space-y-3">
                <label className="text-sm font-black uppercase tracking-widest ml-1 text-on-surface/70">Deskripsi & Link Referensi</label>
                <textarea className="w-full bg-white border-none rounded-2xl px-6 py-4 focus:ring-4 focus:ring-primary/20 transition-all shadow-sm" placeholder="Jelaskan detail desainmu di sini..." rows={4}></textarea>
              </div>
              <button className="w-full bg-[#25D366] text-white py-5 rounded-2xl font-black text-xl flex items-center justify-center gap-3 hover:shadow-2xl hover:shadow-[#25D366]/30 transition-all hover:-translate-y-1">
                <MessageCircle className="size-7 fill-current" />
                Kirim ke WhatsApp Sekarang
              </button>
            </form>
          </motion.div>
        </div>
      </section>

      {/* Banner CTA */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="bg-primary rounded-[3.5rem] p-16 md:p-24 text-center text-white relative overflow-hidden group"
          >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-white/30 to-transparent"></div>
            <div className="relative z-10 max-w-3xl mx-auto space-y-10">
              <h2 className="text-5xl md:text-6xl font-black leading-tight tracking-tight">Siap membuat karaktermu menjadi keychain yang menggemaskan?</h2>
              <p className="text-white/90 text-xl font-medium">Jangan biarkan ide serumu cuma jadi gambar. Jadikan nyata bersama Dreamy Doll!</p>
              <button className="bg-white text-primary-dark px-12 py-6 rounded-[2rem] font-black text-2xl hover:scale-105 transition-transform flex items-center justify-center gap-4 mx-auto shadow-2xl shadow-primary-dark/20">
                <Rocket className="size-8" />
                Mulai Custom Sekarang
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-surface-container/50 border-t border-primary/10 pt-24 pb-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20">
            <div className="space-y-8">
              <div className="flex items-center gap-3">
                <div className="size-10 bg-primary rounded-full flex items-center justify-center text-white">
                  <Sparkles className="size-6" />
                </div>
                <h2 className="text-2xl font-black text-primary tracking-tight">Dreamy Doll</h2>
              </div>
              <p className="text-on-surface/60 leading-relaxed">
                Kami adalah workshop kecil yang berfokus pada kualitas dan detail untuk setiap boneka custom. Memberikan kebahagiaan lewat karya tangan.
              </p>
              <div className="flex gap-4">
                {[Camera, PlayCircle, Mail].map((Icon, i) => (
                  <a key={i} href="#" className="size-12 bg-white rounded-2xl flex items-center justify-center text-on-surface/60 hover:text-primary transition-all shadow-sm hover:shadow-md hover:-translate-y-1 border border-primary/5">
                    <Icon className="size-6" />
                  </a>
                ))}
              </div>
            </div>
            
            <div>
              <h4 className="font-black text-lg mb-8 uppercase tracking-widest text-on-surface/80">Tautan Cepat</h4>
              <ul className="space-y-5 text-on-surface/60 font-medium">
                {['Beranda', 'Katalog Produk', 'Cara Memesan', 'Cek Status Pesanan', 'Syarat & Ketentuan'].map(link => (
                  <li key={link}><a href="#" className="hover:text-primary transition-colors">{link}</a></li>
                ))}
              </ul>
            </div>

            <div className="lg:col-span-2">
              <h4 className="font-black text-lg mb-8 uppercase tracking-widest text-on-surface/80">Hubungi Kami</h4>
              <ul className="space-y-6 text-on-surface/60 font-medium">
                <li className="flex items-start gap-4">
                  <MapPin className="size-6 text-primary shrink-0" />
                  <span>Jl. Imajinasi No. 123, Blok C, Kota Kreatif, Indonesia</span>
                </li>
                <li className="flex items-center gap-4">
                  <Phone className="size-6 text-primary shrink-0" />
                  <span>+62 812-3456-7890</span>
                </li>
                <li className="flex items-center gap-4">
                  <Clock className="size-6 text-primary shrink-0" />
                  <span>Setiap Hari: 09:00 - 18:00</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-primary/10 pt-10 flex flex-col md:row items-center justify-between gap-6">
            <p className="text-sm text-on-surface/40 font-medium">© 2024 Dreamy Doll Custom Plush. All rights reserved.</p>
            <div className="flex gap-8 text-sm text-on-surface/40 font-medium">
              <a href="#" className="hover:text-primary">Privacy Policy</a>
              <a href="#" className="hover:text-primary">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>

      {/* Cart Sidebar */}
      <AnimatePresence>
        {isCartOpen && (
          <>
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsCartOpen(false)}
              className="fixed inset-0 bg-on-surface/40 backdrop-blur-sm z-[60]"
            />
            <motion.aside 
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 w-full sm:w-[450px] h-full bg-white z-[70] shadow-2xl flex flex-col"
            >
              <div className="p-8 border-b border-primary/10 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="size-12 bg-primary/10 text-primary rounded-2xl flex items-center justify-center">
                    <ShoppingCart className="size-6" />
                  </div>
                  <h3 className="text-2xl font-black tracking-tight">Keranjang Belanja</h3>
                </div>
                <button 
                  onClick={() => setIsCartOpen(false)}
                  className="size-12 rounded-full hover:bg-surface-container transition-colors flex items-center justify-center group"
                >
                  <X className="size-6 text-on-surface/40 group-hover:text-primary" />
                </button>
              </div>

              <div className="flex-1 overflow-y-auto p-8 space-y-10">
                {cart.length === 0 ? (
                  <div className="h-full flex flex-col items-center justify-center text-center space-y-4">
                    <ShoppingBag className="size-20 text-primary/20" />
                    <p className="text-on-surface/40 font-bold text-xl">Keranjangmu masih kosong</p>
                    <button 
                      onClick={() => setIsCartOpen(false)}
                      className="text-primary font-black hover:underline"
                    >
                      Mulai Belanja
                    </button>
                  </div>
                ) : (
                  cart.map(item => (
                    <div key={item.id} className="flex gap-6 group">
                      <div className="size-28 bg-surface-container rounded-3xl overflow-hidden shrink-0 border border-primary/5 shadow-sm">
                        <img className="w-full h-full object-cover" src={item.image} alt={item.name} referrerPolicy="no-referrer" />
                      </div>
                      <div className="flex-1 flex flex-col justify-between py-1">
                        <div>
                          <div className="flex justify-between items-start">
                            <h4 className="font-extrabold text-on-surface leading-tight text-lg">{item.name}</h4>
                            <button 
                              onClick={() => removeFromCart(item.id)}
                              className="text-on-surface/20 hover:text-red-500 transition-colors"
                            >
                              <Trash2 className="size-5" />
                            </button>
                          </div>
                          <p className="text-sm text-on-surface/40 font-bold mt-1">Ukuran: {item.size}</p>
                        </div>
                        <div className="flex items-center justify-between">
                          <p className="font-black text-primary-dark text-xl">Rp {(item.price * item.quantity).toLocaleString('id-ID')}</p>
                          <div className="flex items-center gap-4 bg-surface-container rounded-2xl p-2 px-4">
                            <button 
                              onClick={() => updateQuantity(item.id, -1)}
                              className="text-on-surface/40 hover:text-primary font-black"
                            >
                              <Minus className="size-4" />
                            </button>
                            <span className="text-lg font-black w-6 text-center">{item.quantity}</span>
                            <button 
                              onClick={() => updateQuantity(item.id, 1)}
                              className="text-on-surface/40 hover:text-primary font-black"
                            >
                              <Plus className="size-4" />
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))
                )}
              </div>

              {cart.length > 0 && (
                <div className="p-8 bg-surface-container/30 border-t border-primary/10 space-y-6">
                  <div className="flex items-center justify-between">
                    <p className="text-on-surface/50 font-bold text-lg">Total Harga</p>
                    <p className="text-3xl font-black text-on-surface">Rp {totalPrice.toLocaleString('id-ID')}</p>
                  </div>
                  <button className="w-full bg-[#25D366] hover:bg-[#20bd5c] text-white py-5 rounded-[2rem] font-black text-xl flex items-center justify-center gap-4 shadow-2xl shadow-[#25D366]/20 transition-all hover:scale-[1.02] active:scale-95">
                    <MessageCircle className="size-7 fill-current" />
                    Kirim Pesanan via WhatsApp
                  </button>
                  <p className="text-xs text-center text-on-surface/30 font-bold uppercase tracking-widest">Total belanja belum termasuk ongkos kirim.</p>
                </div>
              )}
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}
