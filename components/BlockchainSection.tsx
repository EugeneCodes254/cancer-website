"use client"

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Shield, Eye, FileCheck, Link, Fingerprint } from "lucide-react";

const features = [
  { 
    icon: Eye, 
    title: "Real-Time Tracking", 
    desc: "Every donation tracked from the moment it's made to the family it reaches in the field." 
  },
  { 
    icon: FileCheck, 
    title: "Verifiable Impact", 
    desc: "Donors receive blockchain-verified certificates, ensuring your contribution is recorded forever." 
  },
  { 
    icon: Shield, 
    title: "Tamper-Proof Records", 
    desc: "All assistance records are immutable and permanently auditable by any global partner." 
  },
  { 
    icon: Link, 
    title: "Full Traceability", 
    desc: "From soursop seedlings to education sponsorships — every shilling is mapped on-chain." 
  },
];

export default function BlockchainSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="blockchain" className="py-28 relative bg-background overflow-hidden">
      {/* Decorative Branding Watermark */}
      <div className="absolute -right-20 top-20 opacity-[0.03] rotate-12 pointer-events-none">
        <Fingerprint size={400} strokeWidth={0.5} className="text-pink-600" />
      </div>

      <div className="line-duo mb-28 opacity-40" />

      <div className="container mx-auto px-6 lg:px-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-24"
        >
          <div className="badge-pink mb-6 mx-auto w-fit">
            <Shield size={10} className="fill-current" />
            Technology for Trust
          </div>

          <h2 className="font-display text-5xl md:text-7xl font-light text-foreground mt-4 mb-8 tracking-tight">
            Blockchain-Powered <span className="italic text-gradient-pink font-medium">Transparency</span>
          </h2>

          <p className="font-body text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            We use decentralized technology to create an unbreakable chain of trust between 
            donors and the families they support, ensuring total accountability.
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.15 * i }}
              className="group bg-card border border-border rounded-sm p-10 hover:border-pink-200 transition-all duration-700 shadow-soft hover:shadow-glow-pink relative"
            >
              {/* Top Accent line */}
              <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-pink-400/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

              <div className="w-14 h-14 rounded-full bg-pink-50 border border-pink-100 flex items-center justify-center mb-8 group-hover:bg-pink-500 group-hover:border-pink-500 transition-all duration-500">
                <f.icon size={24} className="text-pink-500 group-hover:text-white transition-colors duration-500" />
              </div>

              <h3 className="font-display text-2xl text-foreground mb-4 group-hover:text-pink-900 transition-colors">
                {f.title}
              </h3>

              <p className="font-body text-base text-muted-foreground leading-relaxed font-light">
                {f.desc}
              </p>

              {/* Decorative Number/Index Background */}
              <span className="absolute bottom-4 right-6 font-display text-4xl italic text-pink-50/50 -z-0 pointer-events-none group-hover:text-pink-100 transition-colors">
                0{i + 1}
              </span>
            </motion.div>
          ))}
        </div>

        {/* Verification Note */}
        <motion.div 
           initial={{ opacity: 0 }}
           animate={inView ? { opacity: 1 } : {}}
           transition={{ delay: 1 }}
           className="mt-20 flex flex-col items-center"
        >
          <div className="h-12 w-px bg-gradient-to-b from-pink-200 to-transparent " />
          <p className="font-body text-xs uppercase tracking-[0.3em] text-pink-soft font-bold">
            Powered by Public Ledger
          </p>
        </motion.div>
      </div>
    </section>
  );
}
