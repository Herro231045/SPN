/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { 
  Menu, 
  X, 
  ShoppingCart, 
  Star, 
  Truck, 
  RotateCcw, 
  Leaf, 
  ArrowRight,
  Instagram,
  Twitter,
  Facebook,
  Mail,
  CheckCircle2
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

// Product Data
const PRODUCTS = [
  {
    id: 1,
    name: "The Cloud Walker",
    price: 129,
    description: "Experience weightless comfort with our patented foam tech.",
    image: "https://images.unsplash.com/photo-1560769629-975ec94e6a86?auto=format&fit=crop&q=80&w=800",
    color: "bg-blue-50"
  },
  {
    id: 2,
    name: "The Street Phantom",
    price: 149,
    description: "Engineered for the urban jungle. Silent, sleek, superior.",
    image: "https://images.unsplash.com/photo-1549298916-b41d501d3772?auto=format&fit=crop&q=80&w=800",
    color: "bg-gray-100"
  },
  {
    id: 3,
    name: "The Neon Stride",
    price: 119,
    description: "Energy return like you've never felt before.",
    image: "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?auto=format&fit=crop&q=80&w=800",
    color: "bg-yellow-50"
  },
  {
    id: 4,
    name: "The Gravity Boot",
    price: 169,
    description: "Built for those who refuse to let gravity hold them back.",
    image: "https://images.unsplash.com/photo-1520639889313-7272170b1c31?auto=format&fit=crop&q=80&w=800",
    color: "bg-slate-100"
  }
];

// Testimonials
const REVIEWS = [
  {
    name: "Sarah M.",
    city: "New York",
    quote: "I've tried every brand out there, but nothing compares to the comfort of the Cloud Walkers. It literally feels like I'm floating.",
    rating: 5
  },
  {
    name: "Marcus J.",
    city: "Los Angeles",
    quote: "The design is bold and the quality is top-notch. I get compliments every time I wear my Street Phantoms.",
    rating: 5
  },
  {
    name: "David L.",
    city: "Chicago",
    quote: "Sustainable materials that actually last. Shoe-per-natural is the only brand I trust now.",
    rating: 5
  }
];

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setIsSubmitted(true);
      setEmail('');
      setTimeout(() => setIsSubmitted(false), 3000);
    }
  };

  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  };

  return (
    <div className="min-h-screen">
      {/* 1. NAVIGATION BAR */}
      <nav 
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          scrolled ? 'bg-brand-navy py-3 shadow-lg' : 'bg-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <a href="#" className="text-2xl font-display text-white tracking-widest">
            SHOE PER NATURAL (SPN)
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-10">
            {['Home', 'Shop', 'About', 'Reviews', 'Contact'].map((item) => (
              <a 
                key={item} 
                href={`#${item.toLowerCase()}`} 
                className="text-white hover:text-brand-yellow font-medium transition-colors text-sm uppercase tracking-wide"
              >
                {item}
              </a>
            ))}
            <button className="bg-brand-yellow text-brand-navy px-6 py-2.5 rounded-full font-display text-lg hover:bg-white transition-colors duration-300 shadow-lg shadow-brand-yellow/20">
              SHOP NOW
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={32} /> : <Menu size={32} />}
          </button>
        </div>

        {/* Mobile Nav Overlay */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div 
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-brand-navy border-t border-white/10"
            >
              <div className="flex flex-col p-8 space-y-6">
                {['Home', 'Shop', 'About', 'Reviews', 'Contact'].map((item) => (
                  <a 
                    key={item} 
                    href={`#${item.toLowerCase()}`} 
                    className="text-2xl font-display text-white"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item}
                  </a>
                ))}
                <button className="bg-brand-yellow text-brand-navy px-8 py-3 rounded-full font-display text-xl w-full">
                  SHOP NOW
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* 2. HERO SECTION */}
      <section id="home" className="relative min-h-screen flex items-center bg-brand-navy overflow-hidden">
        {/* Background Gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-brand-navy via-brand-navy to-brand-blue/30" />
        
        <div className="max-w-7xl mx-auto px-6 relative z-10 grid md:grid-cols-2 gap-12 items-center pt-20">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-7xl md:text-9xl text-white leading-tight mb-6">
              WALK INTO THE <br />
              <span className="text-brand-yellow">EXTRAORDINARY</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/80 mb-10 font-sans max-w-lg">
              Shoes so good, they defy gravity. Engineered for peak performance and unparalleled style.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-brand-blue text-white px-10 py-4 rounded-full font-display text-2xl hover:bg-brand-yellow hover:text-brand-navy transition-all duration-300 shadow-xl shadow-brand-blue/20">
                SHOP NOW
              </button>
              <button className="border-2 border-white/30 text-white px-10 py-4 rounded-full font-display text-2xl hover:bg-white hover:text-brand-navy transition-all duration-300">
                SEE OUR STORY
              </button>
            </div>
          </motion.div>

          <motion.div 
            className="relative"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            <motion.div
              animate={{ 
                y: [0, -30, 0],
                rotate: [-2, 2, -2]
              }}
              transition={{ 
                duration: 5, 
                repeat: Infinity, 
                ease: "easeInOut" 
              }}
              className="relative z-20"
            >
              <img 
                src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&q=80&w=800" 
                alt="Cloud Walker Sneaker" 
                className="w-full h-auto drop-shadow-[0_35px_35px_rgba(59,130,246,0.3)] filter brightness-110"
              />
            </motion.div>
            
            {/* Background elements */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-brand-blue/20 rounded-full blur-3xl" />
          </motion.div>
        </div>
      </section>

      {/* 3. TRUST BAR */}
      <div className="bg-white border-y border-gray-100 py-6">
        <div className="max-w-7xl mx-auto px-6 overflow-x-auto">
          <div className="flex justify-between items-center min-w-[800px] md:min-w-0">
            <div className="flex items-center space-x-3">
              <div className="flex -space-x-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={16} className="fill-brand-yellow text-brand-yellow" />
                ))}
              </div>
              <span className="font-semibold text-sm">10,000+ HAPPY CUSTOMERS</span>
            </div>
            <div className="h-4 w-px bg-gray-200" />
            <div className="flex items-center space-x-3">
              <Truck size={20} className="text-brand-blue" />
              <span className="font-semibold text-sm uppercase">Free Shipping Over $75</span>
            </div>
            <div className="h-4 w-px bg-gray-200" />
            <div className="flex items-center space-x-3">
              <RotateCcw size={20} className="text-brand-blue" />
              <span className="font-semibold text-sm uppercase">30-Day Returns</span>
            </div>
            <div className="h-4 w-px bg-gray-200" />
            <div className="flex items-center space-x-3">
              <Leaf size={20} className="text-green-600" />
              <span className="font-semibold text-sm uppercase">Sustainably Made</span>
            </div>
          </div>
        </div>
      </div>

      {/* 4. FEATURED PRODUCTS */}
      <section id="shop" className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div 
            className="text-center mb-16"
            {...fadeIn}
          >
            <h2 className="text-6xl text-brand-navy mb-4">OUR BEST SELLERS</h2>
            <div className="w-24 h-1.5 bg-brand-blue mx-auto rounded-full" />
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {PRODUCTS.map((product, idx) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                whileHover={{ y: -10 }}
                className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 group"
              >
                <div className={`relative h-72 ${product.color} flex items-center justify-center p-8 overflow-hidden`}>
                  <img 
                    src={product.image} 
                    alt={product.name} 
                    className="w-full h-full object-contain transform group-hover:scale-110 transition-transform duration-500"
                    onError={(e) => {
                      e.currentTarget.src = "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&q=80&w=400";
                    }}
                  />
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur px-3 py-1 rounded-full font-bold text-sm">
                    BEST SELLER
                  </div>
                </div>
                <div className="p-8">
                  <h3 className="text-2xl mb-2">{product.name}</h3>
                  <p className="text-sm text-gray-500 mb-6 line-clamp-2">
                    {product.description}
                  </p>
                  <div className="flex justify-between items-center">
                    <span className="text-2xl font-display text-brand-blue">${product.price}</span>
                    <button className="bg-brand-navy text-white px-5 py-2 rounded-full text-sm font-semibold hover:bg-brand-blue transition-colors flex items-center space-x-2">
                      <ShoppingCart size={16} />
                      <span>ADD TO CART</span>
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. BRAND STORY */}
      <section id="about" className="py-24 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            {...fadeIn}
          >
            <span className="text-brand-blue font-bold tracking-widest text-sm uppercase mb-4 block">Our Purpose</span>
            <h2 className="text-7xl text-brand-navy mb-8">BORN TO BREAK <br />THE MOLD</h2>
            <div className="space-y-6 text-gray-600 text-lg leading-relaxed mb-10">
              <p>
                At Shoe-per-natural, we don't just make footwear; we design tools for self-expression. Founded in 2023, our mission has always been clear: to merge cutting-edge gravity-defying technology with bold, unapologetic aesthetics.
              </p>
              <p>
                We believe that what you wear on your feet should elevate your entire being. That's why every pair is crafted with sustainable, high-performance materials built for people who refuse to blend in with the crowd.
              </p>
            </div>
            <button className="group flex items-center space-x-3 text-brand-navy font-bold text-xl hover:text-brand-blue transition-colors">
              <span>LEARN MORE ABOUT US</span>
              <ArrowRight className="group-hover:translate-x-2 transition-transform" />
            </button>
          </motion.div>

          <motion.div 
            className="relative"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="aspect-square bg-brand-blue rounded-3xl overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?auto=format&fit=crop&q=80&w=1000" 
                alt="Shoe Craftsmanship" 
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700 scale-110 hover:scale-100"
              />
            </div>
            {/* Accent Decor */}
            <div className="absolute -bottom-8 -left-8 w-48 h-48 border-8 border-brand-yellow rounded-3xl -z-10" />
          </motion.div>
        </div>
      </section>

      {/* 6. SOCIAL PROOF */}
      <section id="reviews" className="py-24 bg-brand-navy text-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div 
            className="text-center mb-16"
            {...fadeIn}
          >
            <h2 className="text-6xl mb-4">WHAT PEOPLE ARE SAYING</h2>
            <div className="w-24 h-1.5 bg-brand-yellow mx-auto rounded-full" />
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {REVIEWS.map((review, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bg-white/5 border border-white/10 p-10 rounded-3xl relative"
              >
                <div className="flex space-x-1 mb-6">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} size={20} className="fill-brand-yellow text-brand-yellow" />
                  ))}
                </div>
                <p className="text-xl italic mb-8 font-light leading-relaxed">
                  "{review.quote}"
                </p>
                <div>
                  <h4 className="font-bold text-lg">{review.name}</h4>
                  <p className="text-white/50 text-sm">{review.city}</p>
                </div>
                <div className="absolute top-10 right-10 text-white/10">
                  <svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M14.017 21L14.017 18C14.017 16.8954 14.9124 16 16.017 16H19.017C20.1216 16 21.017 16.8954 21.017 18V21C21.017 22.1046 20.1216 23 19.017 23H16.017C14.9124 23 14.017 22.1046 14.017 21ZM14.017 21C14.017 16.8954 11.517 11.233 11.517 7C11.517 2.767 15.1216 -1.259 18.017 0.999999C20.9124 3.259 19.017 7 19.017 7V13C19.017 14.1046 18.1216 15 17.017 15H14.017V21ZM3 21L3 18C3 16.8954 3.89543 16 5 16H8C9.10457 16 10 16.8954 10 18V21C10 22.1046 9.10457 23 8 23H5C3.89543 23 3 22.1046 3 21ZM3 21C3 16.8954 0.5 11.233 0.5 7C0.5 2.767 4.10457 -1.259 7 0.999999C9.89543 3.259 8 7 8 7V13C8 14.1046 7.10457 15 6 15H3V21Z" />
                  </svg>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. EMAIL CAPTURE */}
      <section id="contact" className="py-24 px-6">
        <div className="max-w-5xl mx-auto bg-brand-yellow rounded-[3rem] p-12 md:p-20 relative overflow-hidden">
          {/* Decor */}
          <div className="absolute -top-12 -right-12 w-48 h-48 bg-white/20 rounded-full blur-2xl" />
          <div className="absolute -bottom-12 -left-12 w-64 h-64 bg-brand-blue/10 rounded-full blur-3xl" />
          
          <div className="relative z-10 text-center max-w-2xl mx-auto">
            <motion.div {...fadeIn}>
              <h2 className="text-5xl md:text-7xl text-brand-navy mb-4">GET 15% OFF YOUR FIRST ORDER</h2>
              <p className="text-xl text-brand-navy/70 mb-10 font-medium">
                Join the SPN squad and never miss a drop.
              </p>

              <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-4">
                <input 
                  type="email" 
                  placeholder="Enter your email" 
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex-1 px-8 py-5 rounded-full bg-white text-brand-navy border-none focus:ring-4 focus:ring-brand-blue/20 text-lg"
                />
                <button 
                  type="submit"
                  className="bg-brand-navy text-white px-10 py-5 rounded-full font-display text-2xl hover:bg-brand-blue transition-all duration-300 shadow-xl"
                >
                  CLAIM MY DISCOUNT
                </button>
              </form>

              <AnimatePresence>
                {isSubmitted && (
                  <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    className="mt-6 flex items-center justify-center space-x-2 text-brand-navy font-bold"
                  >
                    <CheckCircle2 className="text-green-600" />
                    <span>SUCCESS! CHECK YOUR INBOX.</span>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 8. FOOTER */}
      <footer className="bg-gray-50 pt-24 pb-12 border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-12 mb-20">
          <div className="col-span-2 lg:col-span-2">
            <h2 className="text-3xl font-display tracking-widest text-brand-navy mb-6">SHOE PER NATURAL (SPN)</h2>
            <p className="text-gray-500 max-w-xs mb-8 text-lg">
              Redefining movement through design and innovation. Step into the future.
            </p>
            <div className="flex space-x-4">
              {[Instagram, Twitter, Facebook].map((Icon, i) => (
                <a key={i} href="#" className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-sm hover:shadow-md hover:text-brand-blue transition-all border border-gray-100">
                  <Icon size={20} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-bold text-sm uppercase tracking-widest mb-6">Shop</h4>
            <ul className="space-y-4 text-gray-500 font-medium">
              <li><a href="#" className="hover:text-brand-blue transition-colors">Best Sellers</a></li>
              <li><a href="#" className="hover:text-brand-blue transition-colors">New Arrivals</a></li>
              <li><a href="#" className="hover:text-brand-blue transition-colors">Sustainable Line</a></li>
              <li><a href="#" className="hover:text-brand-blue transition-colors">Accessories</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-sm uppercase tracking-widest mb-6">Company</h4>
            <ul className="space-y-4 text-gray-500 font-medium">
              <li><a href="#" className="hover:text-brand-blue transition-colors">Our Story</a></li>
              <li><a href="#" className="hover:text-brand-blue transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-brand-blue transition-colors">Sustainability</a></li>
              <li><a href="#" className="hover:text-brand-blue transition-colors">Store Locator</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-sm uppercase tracking-widest mb-6">Support</h4>
            <ul className="space-y-4 text-gray-500 font-medium">
              <li><a href="#" className="hover:text-brand-blue transition-colors">Order Tracking</a></li>
              <li><a href="#" className="hover:text-brand-blue transition-colors">Returns & Exchanges</a></li>
              <li><a href="#" className="hover:text-brand-blue transition-colors">FAQ</a></li>
              <li><a href="#" className="hover:text-brand-blue transition-colors">Contact Us</a></li>
            </ul>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-6 pt-12 border-t border-gray-200 flex flex-col md:row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-gray-400 text-sm">
            © 2025 Shoe-per-natural. All rights reserved. Built for the extraordinary.
          </p>
          <div className="flex space-x-8 text-xs font-bold text-gray-400 uppercase tracking-widest">
            <a href="#" className="hover:text-brand-navy transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-brand-navy transition-colors">Terms of Service</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
