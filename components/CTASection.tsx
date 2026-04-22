"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Heart, ShieldCheck, ArrowRight, Mail } from "lucide-react";
import Link from "next/link";

export default function CTASection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="donate" className="py-32 bg-background relative overflow-hidden">
      
      {/* Decorative vertical line */}
      <div className="absolute left-6 lg:left-10 top-0 bottom-0 w-px bg-border/20 hidden md:block" />

      <div className="container mx-auto px-6 lg:pl-32" ref={ref}>
        <div className="grid lg:grid-cols-12 gap-16 items-center">
          
          {/* Left: The "Proof" Column */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5 relative"
          >
            <div className="absolute -top-10 -left-10 w-24 h-24 bg-gold/5 rounded-full blur-xl" />
            <h2 className="font-display text-5xl md:text-7xl font-light text-foreground leading-[0.9] tracking-tighter mb-8">
              Join the <br />
              <span className="italic text-gradient-gold">Movement.</span>
            </h2>
            
            <div className="flex items-start gap-4 mb-8">
              <ShieldCheck className="text-gold mt-1 flex-shrink-0" size={24} />
              <div>
                <p className="text-foreground font-display text-sm tracking-widest uppercase">Verified Transparency</p>
                <p className="text-muted-foreground text-sm leading-relaxed mt-1">
                  Every transaction is hashed, recorded, and viewable on-chain. Your support is guaranteed to reach the mission.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Right: The Conversion Column */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-7 bg-card border border-border p-12 md:p-16 relative group"
          >
            <div className="absolute top-0 right-0 w-32 h-32 border-t-2 border-r-2 border-gold/30" />
            
            <p className="font-body text-xl text-muted-foreground leading-relaxed mb-12">
              Every shilling empowers a family. We aren't just an NGO; we are a 
              <span className="text-foreground font-semibold"> decentralized health protocol</span> 
              focused on life, shelter, and educational equity.
            </p>

            <div className="flex flex-col sm:flex-row gap-6">
              <Link
                href="/donate"
                className="group/btn flex-1 flex items-center justify-center gap-3 px-8 py-5 bg-foreground text-background font-body font-semibold tracking-widest text-xs uppercase transition-all duration-500"
              >
                Donate Now
                <ArrowRight size={16} className="group-hover/btn:translate-x-2 transition-transform" />
              </Link>
              
              <a
                href="mailto:info@cancerfreeblockchain.org"
                className="flex-1 flex items-center justify-center gap-3 px-8 py-5 border border-border text-foreground font-body font-semibold tracking-widest text-xs uppercase hover:border-gold/50 transition-all duration-500"
              >
                <Mail size={16} className="text-gold" />
                Partner With Us
              </a>
            </div>

            {/* Micro-label */}
            <div className="mt-10 flex items-center gap-2 justify-center lg:justify-start">
              <div className="w-1.5 h-1.5 rounded-full bg-gold animate-pulse" />
              <span className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                Currently Supporting 400+ Families
              </span>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
