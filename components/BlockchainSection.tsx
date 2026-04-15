"use client"


import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Shield, Eye, FileCheck, Link } from "lucide-react";

const features = [
  { icon: Eye, title: "Real-Time Tracking", desc: "Every donation tracked from the moment it's made to the family it reaches." },
  { icon: FileCheck, title: "Verifiable Impact", desc: "Donors receive blockchain-verified certificates of impact." },
  { icon: Shield, title: "Tamper-Proof Records", desc: "All assistance records are immutable and permanently auditable." },
  { icon: Link, title: "Full Traceability", desc: "From soursop seedlings to education sponsorships — everything is on-chain." },
];

const BlockchainSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="blockchain" className="py-28 relative">
      <div className="line-gold mb-28" />
      <div className="container mx-auto px-6 lg:px-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <span className="font-body text-xs font-medium tracking-[0.2em] uppercase text-gold">
            Technology for Trust
          </span>
          <h2 className="font-display text-4xl md:text-6xl font-light text-foreground mt-4 mb-6 tracking-tight">
            Blockchain-Powered <span className="italic text-gold">Transparency</span>
          </h2>
          <p className="font-body text-base text-muted-foreground max-w-2xl mx-auto font-light leading-relaxed">
            We use blockchain to create an unbreakable chain of trust between donors and the families they support.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.15 * i }}
              className="group bg-glass border border-glass rounded-sm p-8 hover:border-gold/20 transition-all duration-700 relative overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              <div className="w-12 h-12 rounded-sm bg-gold/10 flex items-center justify-center mb-6 group-hover:bg-gold/20 transition-colors duration-500">
                <f.icon size={22} className="text-gold" />
              </div>
              <h3 className="font-display text-lg text-foreground mb-3">{f.title}</h3>
              <p className="font-body text-sm text-muted-foreground leading-relaxed font-light">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlockchainSection;

