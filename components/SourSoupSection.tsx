"use client"

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { TreePine, Leaf, Heart, Sun, Activity } from "lucide-react";
import soursopImg from "@/assets/soursop.jpg";
import Image from "next/image";

const benefits = [
  { icon: Leaf, text: "Rich in acetogenins & antioxidants" },
  { icon: Heart, text: "Supports immune health" },
  { icon: Activity, text: "Natural vitality booster" }, // Replaced Sun with Activity for health vibe
  { icon: TreePine, text: "Sustainable community orchards" },
];

export default function SourSoupSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="soursop" className="py-28 relative bg-background overflow-hidden">
      {/* Dynamic Duo Divider */}
      <div className="line-duo mb-28 opacity-50" />

      <div className="container mx-auto px-6 lg:px-10" ref={ref}>
        <div className="grid lg:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">

          {/* IMAGE SIDE */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            {/* The Glass Container with Pink Shadow */}
            <div className="relative p-1.5 border border-pink-soft bg-glass-pink rounded-sm overflow-hidden shadow-glow-pink">
              <Image
                src={soursopImg}
                alt="Fresh soursop fruit on tree"
                width={800}
                height={800}
                loading="lazy"
                className="w-full aspect-[4/5] object-cover opacity-90 hover:opacity-100 transition-opacity duration-700 rounded-sm"
              />

              {/* Sophisticated Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />

              <div className="absolute bottom-8 left-8">
                <p className="text-xs text-pink-soft font-body font-bold tracking-[0.25em] uppercase mb-2">
                  Impact Goal
                </p>

                <p className="text-5xl font-display font-medium text-foreground">
                  2M <span className="text-xl text-muted-foreground font-normal italic">trees</span>
                </p>
              </div>
            </div>

            {/* Decorative Ribbon Stripe background element */}
            <div className="absolute -top-10 -left-10 w-40 h-40 ribbon-stripe -z-10 opacity-50" />
          </motion.div>

          {/* TEXT SIDE */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {/* Using your custom badge utility */}
            <div className="badge-pink mb-6">
              <Heart size={10} className="fill-current" />
              Agroforestry for Hope
            </div>

            <h2 className="font-display text-5xl md:text-7xl font-medium text-foreground mt-4 mb-8 tracking-tight">
              The Soursop <br />
              <span className="italic text-gradient-pink">Revolution</span>
            </h2>

            <p className="font-body text-lg text-muted-foreground leading-relaxed mb-6 max-w-xl">
              We are planting <strong className="text-foreground font-semibold">2 million soursop trees</strong> across
              strategically mapped counties in Kenya. This initiative bridges the gap between 
              <span className="text-pink-soft font-medium"> cancer awareness</span> and sustainable 
              nutrition, empowering families with health and income.
            </p>

            {/* Medical Note Callout */}
            <div className="bg-pink-subtle/40 border-l-2 border-pink-400 p-6 mb-10 max-w-xl">
              <p className="font-body text-sm md:text-base text-pink-soft/80 leading-relaxed italic">
                <strong>Health Note:</strong> While promising research exists regarding acetogenins, 
                we promote soursop as a powerhouse of nutrition within a medically supervised 
                oncology plan, never as a standalone cure.
              </p>
            </div>

            {/* BENEFITS GRID */}
            <div className="grid grid-cols-2 gap-x-8 gap-y-6">
              {benefits.map((b) => (
                <div key={b.text} className="flex items-start gap-4 group">
                  <div className="w-10 h-10 rounded-full bg-pink-50 flex items-center justify-center shrink-0 border border-pink-100 group-hover:bg-pink-100 group-hover:scale-110 transition-all duration-500">
                    <b.icon size={18} className="text-pink-400" />
                  </div>

                  <span className="font-body text-base text-muted-foreground font-medium leading-snug group-hover:text-foreground transition-colors">
                    {b.text}
                  </span>
                </div>
              ))}
            </div>

          </motion.div>
        </div>
      </div>
    </section>
  );
}
