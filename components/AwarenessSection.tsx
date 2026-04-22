"use client"

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { AlertTriangle, Salad, Ban, Wheat, ArrowRight } from "lucide-react";

const tips = [
  { 
    id: "01", 
    icon: Salad, 
    title: "The Antioxidant Rule", 
    text: "Prioritize daily dark greens, orange produce, and seasonal fruits. These aren't just food; they are cellular defense.",
    accent: "pink" 
  },
  { 
    id: "02", 
    icon: Ban, 
    title: "Eliminate the Noise", 
    text: "Refined sugars and ultra-processed snacks fuel inflammation. We advocate for a return to clean, ancestral fuel.",
    accent: "gold" 
  },
  { 
    id: "03", 
    icon: Wheat, 
    title: "Whole-Grain Integrity", 
    text: "Millet, sorghum, and beans are the backbone of Kenyan health. Low-GI carbohydrates sustain long-term immunity.",
    accent: "pink" 
  },
  { 
    id: "04", 
    icon: AlertTriangle, 
    title: "Early Awareness", 
    text: "The CAUTION acronym is a life-saving protocol. Detection is the bridge between prevention and survival.",
    accent: "gold" 
  },
];

export default function AwarenessSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-32 relative bg-background overflow-hidden">
      
      {/* Decorative vertical line that links to the Hero section */}
      <div className="absolute left-6 lg:left-10 top-0 bottom-0 w-px bg-border/20 hidden md:block" />

      <div className="container mx-auto px-6 lg:pl-32" ref={ref}>
        
        <div className="grid lg:grid-cols-12 gap-16 items-end mb-24">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7"
          >
            <span className="font-body text-[10px] uppercase tracking-[0.3em] text-pink-500 mb-6 block">
              Nutrition Protocol
            </span>
            <h2 className="font-display text-5xl md:text-8xl font-light text-foreground leading-[0.85] tracking-tighter">
              Prevention <br />
              Starts in the <br />
              <span className="italic text-gradient-pink">Kitchen.</span>
            </h2>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-5 pb-4"
          >
            <p className="font-body text-lg text-muted-foreground leading-relaxed font-light border-l-2 border-pink-500/20 pl-8">
              Up to 40% of cancer cases are preventable. We treat food as code—optimizing the body's internal environment through practical, affordable nutrition.
            </p>
          </motion.div>
        </div>

        {/* Staggered Card Layout */}
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {tips.map((tip, i) => (
            <motion.div
              key={tip.id}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 * i }}
              className={`group relative p-10 bg-card border border-border rounded-sm hover:border-pink-500/30 transition-all duration-500 ${
                i % 2 !== 0 ? "md:mt-12" : "" // Staggers the second and fourth cards
              }`}
            >
              {/* Technical ID */}
              <div className="flex justify-between items-start mb-12">
                <div className={`p-3 rounded-full ${tip.accent === 'pink' ? 'bg-pink-500/10' : 'bg-gold/10'}`}>
                  <tip.icon size={24} className={tip.accent === 'pink' ? 'text-pink-500' : 'text-gold'} />
                </div>
                <span className="font-display text-4xl text-foreground/5 group-hover:text-pink-500/10 transition-colors">
                  {tip.id}
                </span>
              </div>

              <h3 className="font-display text-2xl text-foreground mb-4 group-hover:translate-x-2 transition-transform duration-500 flex items-center gap-3">
                {tip.title}
                <ArrowRight size={18} className="opacity-0 group-hover:opacity-100 -translate-x-4 group-hover:translate-x-0 transition-all text-pink-500" />
              </h3>

              <p className="font-body text-muted-foreground leading-relaxed font-light">
                {tip.text}
              </p>

              {/* Bottom Glow bar */}
              <div className="absolute bottom-0 left-0 w-0 h-[2px] bg-gradient-to-r from-pink-500 to-gold group-hover:w-full transition-all duration-700" />
            </motion.div>
          ))}
        </div>
      </div>

      {/* Decorative background element */}
      <div className="absolute -bottom-20 -right-20 w-96 h-96 bg-gold/5 rounded-full blur-[120px] pointer-events-none" />
    </section>
  );
}
