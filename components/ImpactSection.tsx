"use client"

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Target, Trophy } from "lucide-react";

const objectives = [
  { num: "01", title: "Cancer Awareness", target: "100,000+ Kenyans educated yearly on prevention & early detection." },
  { num: "02", title: "Nutrition Support", target: "10,000+ families supported annually with anti-cancer diet baskets." },
  { num: "03", title: "Soursop Planting", target: "2 million soursop trees established across strategically mapped counties." },
  { num: "04", title: "Education Sponsorship", target: "School fees covered so no child drops out due to a family diagnosis." },
  { num: "05", title: "Community Leaders", target: "Local health ambassadors trained in prevention & blockchain literacy." },
  { num: "06", title: "Systemic Change", target: "Integrating blockchain-enabled prevention data with national health goals." },
];

export default function ImpactSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="impact" className="py-28 relative bg-background">
      {/* Decorative Branding */}
      <div className="line-duo mb-28 opacity-40" />

      <div className="container mx-auto px-6 lg:px-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-24"
        >
          <div className="badge-pink mb-6 mx-auto w-fit">
            <Target size={10} className="fill-current" />
            Strategic Roadmap
          </div>

          <h2 className="font-display text-5xl md:text-7xl font-light text-foreground mt-4 mb-8 tracking-tight">
            Our Roadmap to <span className="italic text-gradient-pink font-medium">Impact</span>
          </h2>

          <p className="font-body text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Measurable goals that bridge the gap between technological innovation 
            and community-wide health transformation.
          </p>
        </motion.div>

        {/* The Grid: Thin line aesthetic */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-border/40 max-w-6xl mx-auto border border-border/50 shadow-soft">
          {objectives.map((obj, i) => (
            <motion.div
              key={obj.num}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 * i }}
              className="group bg-card p-10 hover:bg-pink-50/30 transition-all duration-700 relative flex flex-col"
            >
              {/* Large Serif Number */}
              <span className="font-display text-4xl text-pink-200 group-hover:text-pink-400 transition-colors duration-500 italic mb-8">
                {obj.num}
              </span>

              <h3 className="font-display text-2xl text-foreground mb-4 group-hover:text-pink-900 transition-colors">
                {obj.title}
              </h3>

              <p className="font-body text-base text-muted-foreground leading-relaxed font-light flex-1">
                {obj.target}
              </p>

              {/* Interactive line: Pink to Gold transition */}
              <div className="mt-10 relative h-px w-8 bg-pink-200 overflow-hidden group-hover:w-full transition-all duration-1000 ease-in-out">
                <div className="absolute inset-0 bg-gradient-to-r from-pink-400 to-gold" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Final Vision Statement */}
        <motion.div 
           initial={{ opacity: 0 }}
           animate={inView ? { opacity: 1 } : {}}
           transition={{ delay: 1 }}
           className="mt-24 text-center"
        >
          <div className="flex items-center justify-center gap-3 text-pink-soft mb-4">
            <Trophy size={16} />
            <span className="font-body text-xs uppercase tracking-[0.3em] font-bold">
              2030 Vision
            </span>
          </div>
          <p className="font-display text-2xl md:text-3xl text-foreground italic opacity-70">
            &ldquo;Building a legacy of health that Kenyan families can trust.&rdquo;
          </p>
        </motion.div>
      </div>
    </section>
  );
}
