"use client"

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Heart } from "lucide-react";

const CTASection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="donate" className="py-28 relative">
      <div className="line-gold mb-28" />
      <div className="container mx-auto px-6 lg:px-10 text-center" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto"
        >
          <div className="w-14 h-14 rounded-sm bg-gold/10 flex items-center justify-center mx-auto mb-8">
            <Heart size={24} className="text-gold" />
          </div>
          <h2 className="font-display text-4xl md:text-6xl font-light text-foreground mb-8 tracking-tight">
            Join the <span className="italic text-gold">Movement</span>
          </h2>
          <p className="font-body text-base text-muted-foreground max-w-2xl mx-auto mb-12 leading-relaxed font-light">
            Every donation is blockchain-tracked. Every shilling is accounted for. Every family you support
            gets nutritious food, medication, shelter, and their children stay in school.
            <strong className="text-gold font-medium"> Be the change.</strong>
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:info@cancerfreeblockchain.org"
              className="inline-flex items-center gap-3 px-10 py-4 bg-gold text-gold-foreground font-body font-medium text-sm tracking-[0.1em] uppercase hover:bg-gold-glow transition-colors duration-500"
            >
              <Heart size={18} />
              Donate Now
            </a>
            <a
              href="mailto:info@cancerfreeblockchain.org"
              className="px-10 py-4 border border-foreground/20 text-foreground font-body font-medium text-sm tracking-[0.1em] uppercase hover:border-gold/40 transition-colors duration-500"
            >
              Partner With Us
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;

