"use client"


import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { AlertTriangle, Salad, Ban, Wheat } from "lucide-react";

const tips = [
  { icon: Salad, title: "Eat Well", text: "Daily dark greens, orange produce, tomatoes, and seasonal fruits rich in antioxidants." },
  { icon: Ban, title: "Reduce Harmful Foods", text: "Minimize refined sugar, ultra-processed snacks, and excessive red or processed meats." },
  { icon: Wheat, title: "Choose Whole Foods", text: "Prioritize millet, sorghum, beans, avocados, and seeds over refined carbohydrates." },
  { icon: AlertTriangle, title: "Know the Signs", text: "Learn the CAUTION acronym — the seven warning signs of cancer for early detection." },
];

const AwarenessSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="py-28 relative">
      <div className="line-gold mb-28" />
      <div className="container mx-auto px-6 lg:px-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <span className="font-body text-xs font-medium tracking-[0.2em] uppercase text-gold">
            Cancer-Free Plate
          </span>
          <h2 className="font-display text-4xl md:text-6xl font-light text-foreground mt-4 mb-6 tracking-tight">
            Prevention Starts in the <span className="italic text-gradient-gold">Kitchen</span>
          </h2>
          <p className="font-body text-base text-muted-foreground max-w-2xl mx-auto font-light leading-relaxed">
            Up to 40% of cancer cases can be prevented through lifestyle choices. We equip families
            with practical, affordable nutrition knowledge.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-border max-w-6xl mx-auto border border-glass">
          {tips.map((tip, i) => (
            <motion.div
              key={tip.title}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 * i }}
              className="bg-background p-8 text-center group hover:bg-accent/30 transition-colors duration-700"
            >
              <div className="w-12 h-12 rounded-sm bg-gold/10 flex items-center justify-center mx-auto mb-5 group-hover:bg-gold/20 transition-colors duration-500">
                <tip.icon size={22} className="text-gold" />
              </div>
              <h3 className="font-display text-lg text-foreground mb-3">{tip.title}</h3>
              <p className="font-body text-sm text-muted-foreground leading-relaxed font-light">{tip.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AwarenessSection;

