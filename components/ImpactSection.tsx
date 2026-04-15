"use client"


import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const objectives = [
  { num: "01", title: "Cancer Awareness", target: "100,000+ Kenyans educated yearly on prevention & early detection" },
  { num: "02", title: "Nutrition Support", target: "10,000+ families supported annually with anti-cancer diets" },
  { num: "03", title: "Soursop Planting", target: "2 million soursop trees across mapped Kenyan counties" },
  { num: "04", title: "Education Sponsorship", target: "School fees covered so no child drops out due to cancer" },
  { num: "05", title: "Community Leaders", target: "Local health ambassadors trained in prevention & blockchain literacy" },
  { num: "06", title: "Systemic Change", target: "Collaborating with government to integrate blockchain-enabled cancer prevention" },
];

const ImpactSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="impact" className="py-28 relative">
      <div className="line-gold mb-28" />
      <div className="container mx-auto px-6 lg:px-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <span className="font-body text-xs font-medium tracking-[0.2em] uppercase text-gold">
            Core Objectives
          </span>
          <h2 className="font-display text-4xl md:text-6xl font-light text-foreground mt-4 tracking-tight">
            Our Roadmap to <span className="italic text-gold">Impact</span>
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-border max-w-5xl mx-auto border border-glass">
          {objectives.map((obj, i) => (
            <motion.div
              key={obj.num}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 * i }}
              className="group bg-background p-8 hover:bg-accent/30 transition-colors duration-700 relative"
            >
              <span className="font-body text-gold-dim text-sm tabular-nums tracking-widest mb-6 block">
                {obj.num}
              </span>
              <h3 className="font-display text-xl text-foreground mb-3">{obj.title}</h3>
              <p className="font-body text-sm text-muted-foreground leading-relaxed font-light">{obj.target}</p>
              <div className="mt-6 h-px w-8 bg-gold-dim/50 group-hover:w-full group-hover:bg-gold transition-all duration-1000 ease-in-out" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ImpactSection;

