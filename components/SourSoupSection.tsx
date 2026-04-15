"use client"


import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { TreePine, Leaf, Heart, Sun } from "lucide-react";
import soursopImg from "@/assets/soursop.jpg";

const benefits = [
  { icon: Leaf, text: "Rich in acetogenins & antioxidants" },
  { icon: Heart, text: "Supports immune health" },
  { icon: Sun, text: "Vitamin C & essential minerals" },
  { icon: TreePine, text: "Sustainable community orchards" },
];

const SoursopSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="soursop" className="py-28 relative">
      <div className="line-gold mb-28" />
      <div className="container mx-auto px-6 lg:px-10" ref={ref}>
        <div className="grid lg:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative p-1 border border-glass-gold bg-glass rounded-sm overflow-hidden">
              <img
                src={soursopImg}
                alt="Fresh soursop fruit on tree"
                width={800}
                height={800}
                loading="lazy"
                className="w-full aspect-[4/5] object-cover mix-blend-luminosity opacity-70 hover:opacity-90 transition-opacity duration-700 rounded-sm"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6">
                <p className="text-xs text-gold font-body font-medium tracking-widest uppercase mb-1">Flagship Initiative</p>
                <p className="text-3xl font-display text-foreground">
                  2M <span className="text-lg text-muted-foreground">trees planned</span>
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="font-body text-xs font-medium tracking-[0.2em] uppercase text-gold">
              Agroforestry Project
            </span>
            <h2 className="font-display text-4xl md:text-5xl font-light text-foreground mt-4 mb-8 tracking-tight">
              The Soursop <span className="italic text-gold">Revolution</span>
            </h2>
            <p className="font-body text-base text-muted-foreground leading-relaxed font-light mb-6">
              We are planting <strong className="text-foreground font-medium">2 million soursop trees</strong> across
              strategically mapped counties in Kenya. This agroforestry project creates sustainable nutrition
              sources, generates family income, and increases access to a plant traditionally valued for its
              health benefits.
            </p>
            <p className="font-body text-sm text-muted-foreground leading-relaxed mb-10 italic border-l border-gold/30 pl-4">
              Note: While promising lab research exists, we promote soursop as a nutritious addition to a
              healthy, cancer-preventive lifestyle — not as a replacement for medical treatment.
            </p>

            <div className="grid grid-cols-2 gap-4">
              {benefits.map((b) => (
                <div key={b.text} className="flex items-start gap-3 group">
                  <div className="w-8 h-8 rounded-sm bg-gold/10 flex items-center justify-center shrink-0 group-hover:bg-gold/20 transition-colors duration-500">
                    <b.icon size={16} className="text-gold" />
                  </div>
                  <span className="font-body text-sm text-muted-foreground leading-snug font-light">{b.text}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default SoursopSection;

