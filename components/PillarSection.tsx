"use client"

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Apple, Pill, Home, GraduationCap, Heart } from "lucide-react";

const pillars = [
  {
    icon: Apple,
    num: "01",
    title: "Nutrition & Food",
    description:
      "Providing Cancer-Free Food Baskets, cooking demonstrations, and kitchen garden kits using locally available Kenyan superfoods.",
  },
  {
    icon: Pill,
    num: "02",
    title: "Medication Support",
    description:
      "Ensuring access to essential medications for families, reducing the devastating financial burden of cancer treatment costs.",
  },
  {
    icon: Home,
    num: "03",
    title: "Shelter Assistance",
    description:
      "Providing safe housing for families whose finances have been drained by illness, ensuring basic dignity during crisis.",
  },
  {
    icon: GraduationCap,
    num: "04",
    title: "Education Sponsorship",
    description:
      "Covering school fees so no child drops out because of a family diagnosis. Protecting futures from financial devastation.",
  },
];

export default function PillarSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="pillars" className="py-28 relative bg-background">
      {/* Subtle background texture for the "Awareness" vibe */}
      <div className="absolute inset-0 ribbon-stripe opacity-[0.03] pointer-events-none" />
      
      <div className="line-duo mb-28 opacity-40" />

      <div className="container mx-auto px-6 lg:px-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-center text-center mb-24"
        >
          <div className="badge-pink mb-6">
            <Heart size={10} className="fill-current" />
            Holistic Support
          </div>
          
          <h2 className="font-display text-5xl md:text-7xl font-light text-foreground mt-4 tracking-tight">
            Four Pillars of <span className="italic text-gradient-pink font-medium">Impact</span>
          </h2>
          <p className="font-body text-muted-foreground mt-6 max-w-2xl text-lg">
            Beyond agroforestry, we provide a safety net for families navigating the 
            complex challenges of a cancer diagnosis.
          </p>
        </motion.div>

        {/* The Grid: Using a soft border and card layout */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-border/40 max-w-6xl mx-auto border border-border/50 shadow-soft">
          {pillars.map((pillar, i) => (
            <motion.div
              key={pillar.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 * i }}
              className="group bg-card p-10 hover:bg-pink-50/50 transition-all duration-700 flex flex-col relative overflow-hidden"
            >
              {/* Top Row: Number and Icon */}
              <div className="flex items-center justify-between mb-12">
                <span className="font-display text-2xl text-pink-200 group-hover:text-pink-400 transition-colors duration-500 italic">
                  {pillar.num}
                </span>
                <div className="w-12 h-12 rounded-full bg-background border border-border flex items-center justify-center group-hover:border-pink-200 group-hover:shadow-glow-pink transition-all duration-500">
                  <pillar.icon size={22} className="text-gold group-hover:text-pink-500 transition-colors duration-500" />
                </div>
              </div>

              <h3 className="font-display text-2xl md:text-3xl text-foreground mb-4 group-hover:text-pink-900 transition-colors">
                {pillar.title}
              </h3>
              
              <p className="font-body text-base text-muted-foreground leading-relaxed font-light flex-1">
                {pillar.description}
              </p>

              {/* Interactive Bottom Line */}
              <div className="mt-10 relative h-px w-full bg-border overflow-hidden">
                <div className="absolute top-0 left-0 h-full w-0 bg-gradient-to-r from-pink-400 to-gold group-hover:w-full transition-all duration-1000 ease-in-out" />
              </div>

              {/* Subtle hover glow effect */}
              <div className="absolute -bottom-10 -right-10 w-24 h-24 bg-pink-100/30 blur-3xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
