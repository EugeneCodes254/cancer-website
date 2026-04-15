"use client"

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Apple, Pill, Home, GraduationCap } from "lucide-react";

const pillars = [
  {
    icon: Apple,
    num: "01",
    title: "Nutrition & Food",
    description:
      "Providing Cancer-Free Food Baskets, cooking demonstrations, kitchen garden seed kits, and anti-cancer diet education using locally available Kenyan superfoods.",
  },
  {
    icon: Pill,
    num: "02",
    title: "Medication Support",
    description:
      "Ensuring access to essential medications for families affected by cancer, reducing the devastating financial burden of treatment costs.",
  },
  {
    icon: Home,
    num: "03",
    title: "Shelter Assistance",
    description:
      "Providing safe shelter for families whose finances have been drained by cancer, ensuring basic dignity and stability during crisis.",
  },
  {
    icon: GraduationCap,
    num: "04",
    title: "Education Sponsorship",
    description:
      "Covering school fees so no child drops out because of a cancer diagnosis in the family. Protecting children's futures from the financial devastation of cancer.",
  },
];

const PillarsSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="pillars" className="py-28 relative">
      <div className="line-gold mb-28" />
      <div className="container mx-auto px-6 lg:px-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <span className="font-body text-xs font-medium tracking-[0.2em] uppercase text-gold">
            Holistic Support
          </span>
          <h2 className="font-display text-4xl md:text-6xl font-light text-foreground mt-4 tracking-tight">
            Four Pillars of <span className="italic text-gold">Impact</span>
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-border max-w-6xl mx-auto border border-glass">
          {pillars.map((pillar, i) => (
            <motion.div
              key={pillar.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.15 * i }}
              className="group bg-background p-8 hover:bg-accent/30 transition-colors duration-700 flex flex-col"
            >
              <div className="flex items-center justify-between mb-10">
                <span className="font-body text-gold-dim text-sm tabular-nums tracking-widest">
                  {pillar.num}
                </span>
                <div className="w-10 h-10 rounded-sm bg-gold/10 flex items-center justify-center group-hover:bg-gold/20 transition-colors duration-500">
                  <pillar.icon size={20} className="text-gold" />
                </div>
              </div>
              <h3 className="font-display text-xl text-foreground mb-3">{pillar.title}</h3>
              <p className="font-body text-sm text-muted-foreground leading-relaxed font-light flex-1">
                {pillar.description}
              </p>
              <div className="mt-8 h-px w-8 bg-gold-dim/50 group-hover:w-full group-hover:bg-gold transition-all duration-1000 ease-in-out" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PillarsSection;

