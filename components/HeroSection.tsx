"use client";

import { motion } from "framer-motion";
import heroBg from "@/assets/hero-bg.jpg";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen bg-background flex flex-col justify-center overflow-hidden">
      
      {/* ── Left-Side Vertical Branding ────────────────── */}
      <div className="absolute left-6 lg:left-10 top-0 bottom-0 w-px bg-border/40 hidden md:block z-20">
        <div className="sticky top-0 h-screen flex flex-col justify-end pb-12 items-center">
          <span className="rotate-180 [writing-mode:vertical-lr] text-[10px] tracking-[0.3em] uppercase text-muted-foreground/60 py-8">
            Est. 2024 — Kenya
          </span>
        </div>
      </div>

      {/* ── Background Elements ────────────────────────── */}
      <div className="absolute inset-0 z-0">
        <Image src={heroBg} alt="Background" fill className="object-cover opacity-10 grayscale brightness-50" />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-transparent" />
      </div>

      <div className="relative z-10 w-full">
        <div className="container-none px-6 md:pl-24 lg:pl-32">
          
          <div className="grid lg:grid-cols-12 gap-0">
            
            {/* Main Content Area */}
            <div className="lg:col-span-8 pt-20">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              >
                <div className="badge-pink mb-6 inline-flex">Blockchain Powered NGO</div>
                
                <h1 className="font-display font-light text-[clamp(3.5rem,10vw,8.5rem)] leading-[0.85] tracking-tighter text-foreground mb-12">
                  Prevention <br />
                  <span className="italic  text-gradient-pink ">is the New</span> <br />
                  <span className="ml-[0.5ch]">Cure.</span>
                </h1>

                <div className="flex flex-col md:flex-row items-start md:items-center gap-10">
                  <p className="font-body text-xl text-muted-foreground max-w-sm leading-relaxed font-light">
                    We’re using technology to bridge the gap between marginalized Kenyan families and life-saving prevention.
                  </p>
                  
                  <motion.button 
                    whileHover={{ scale: 1.05 }}
                    className="group flex items-center gap-4 bg-foreground text-background px-10 py-5 rounded-full"
                  >
                    <span className="font-body font-semibold uppercase tracking-widest text-xs">Start a Mission</span>
                    <ArrowUpRight size={20} className="group-hover:rotate-45 transition-transform duration-300" />
                  </motion.button>
                </div>
              </motion.div>
            </div>

            {/* Floating Visual/Stats Area */}
            <div className="lg:col-span-4 relative mt-20 lg:mt-0">
               <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5, duration: 1.2 }}
                className="relative aspect-[3/4] lg:aspect-auto lg:h-[600px] w-full bg-card border border-border overflow-hidden"
               >
                 <Image src={heroBg} alt="Kenya" fill className="object-cover opacity-40 hover:scale-105 transition-transform duration-[3s]" />
                 <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent" />
                 
                 <div className="absolute bottom-10 left-10 right-10 space-y-6">
                    <div>
                      <p className="text-pink-500 text-5xl font-display">2M+</p>
                      <p className="text-xs uppercase tracking-widest text-muted-foreground mt-2">Soursop Trees Seeded</p>
                    </div>
                    <div className="h-px w-full bg-border/50" />
                    <div className="flex justify-between items-center">
                      <span className="text-[10px] uppercase tracking-widest text-gold">Ledger Verified</span>
                      <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                    </div>
                 </div>
               </motion.div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
