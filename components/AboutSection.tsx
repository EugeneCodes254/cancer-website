"use client"
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const AboutSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-28 relative">
      <div className="line-gold mb-28" />
      <div className="container mx-auto px-6 lg:px-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto text-center mb-20"
        >
          <span className="font-body text-xs font-medium tracking-[0.2em] uppercase text-gold">Who We Are</span>
          <h2 className="font-display text-4xl md:text-6xl font-light text-foreground mt-4 mb-8 tracking-tight">
            Fighting Cancer with{" "}
            <span className="italic text-gold">Prevention</span> & Technology
          </h2>
          <p className="font-body text-base text-muted-foreground leading-relaxed font-light">
            The Cancer Free Blockchain Powered Foundation is a registered NGO in Kenya dedicated to
            defeating cancer through prevention. We believe cancer can be won in the kitchen as much as
            in the hospital — and we use blockchain to ensure every shilling is accounted for.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {[
            {
              num: "01",
              title: "Our Vision",
              text: "A Kenya and Africa where cancer is prevented before it starts, and every marginalized family enjoys access to nutritious food, quality healthcare, safe shelter, and education — all enabled by transparent, blockchain-powered systems that build lasting trust.",
            },
            {
              num: "02",
              title: "Our Mission",
              text: "We exist to defeat cancer through prevention by empowering marginalized families with integrated support in food, medication, shelter, and education. Using blockchain, we ensure every donation and impact is fully traceable and verifiable.",
            },
          ].map((item, i) => (
            <motion.div
              key={item.num}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + i * 0.15 }}
              className="group bg-glass border border-glass rounded-sm p-10 hover:border-gold/20 transition-all duration-700"
            >
              <span className="font-body text-gold-dim text-sm tabular-nums tracking-widest mb-8 block">
                {item.num}
              </span>
              <h3 className="font-display text-2xl text-foreground mb-4">{item.title}</h3>
              <p className="font-body text-sm text-muted-foreground leading-relaxed font-light">
                {item.text}
              </p>
              <div className="mt-8 h-px w-12 bg-gold-dim/50 group-hover:w-full group-hover:bg-gold transition-all duration-1000 ease-in-out" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

