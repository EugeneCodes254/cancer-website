"use client"


import { motion } from "framer-motion";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => (
  <section className="relative min-h-screen flex items-center overflow-hidden">
    {/* Atmospheric Background */}
    <div className="absolute inset-0">
      <img
        src={heroBg}
        alt="Kenyan community garden"
        width={1920}
        height={1080}
        className="w-full h-full object-cover opacity-30 mix-blend-luminosity"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/90 to-background" />
    </div>

    {/* Ambient Glow */}
    <div className="absolute top-[-10%] right-[-5%] w-[800px] h-[800px] rounded-full bg-[radial-gradient(circle,hsl(42_45%_65%/0.06),transparent_60%)] pointer-events-none" />
    <div className="absolute bottom-0 left-[10%] w-[600px] h-[600px] rounded-full bg-[radial-gradient(circle,hsl(150_35%_8%/0.4),transparent_70%)] pointer-events-none" />

    {/* Content */}
    <div className="relative z-10 container mx-auto px-6 lg:px-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center pt-32 pb-24">
      {/* Left: Typography */}
      <div className="lg:col-span-7">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <div className="inline-flex items-center gap-3 mb-8">
            <div className="w-2 h-2 rounded-full bg-gold animate-pulse" />
            <span className="text-xs tracking-[0.15em] uppercase text-gold/80 font-body">
              Blockchain-Powered Prevention
            </span>
          </div>

          <h1 className="font-display text-5xl sm:text-6xl lg:text-8xl leading-[0.9] tracking-tight text-foreground mb-8">
            Prevention is{" "}
            <span className="italic text-gold">the New</span>
            <br />
            Cure.
          </h1>

          <p className="text-lg text-muted-foreground font-body font-light max-w-[50ch] leading-relaxed mb-12">
            We empower marginalized Kenyan families to defeat cancer through prevention —
            with nutrition, education, shelter, and blockchain-verified accountability for every donation.
          </p>

          <div className="flex items-center gap-6">
            <a
              href="#donate"
              className="px-8 py-4 bg-foreground text-background text-sm font-body font-medium hover:bg-gold transition-colors duration-500"
            >
              Support a Family Today
            </a>
            <a
              href="#about"
              className="px-8 py-4 text-sm font-body font-medium text-foreground border-b border-foreground/20 hover:border-gold transition-colors duration-500"
            >
              Learn Our Mission
            </a>
          </div>
        </motion.div>
      </div>

      {/* Right: Glass Data Cards */}
      <div className="lg:col-span-5">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="grid grid-cols-2 gap-4"
        >
          {/* Main Image Card */}
          <div className="col-span-2 relative h-56 lg:h-64 bg-glass border border-glass-gold rounded-sm overflow-hidden shadow-elevated">
            <img
              src={heroBg}
              alt="Community impact"
              className="w-full h-full object-cover opacity-50 mix-blend-luminosity"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
            <div className="absolute bottom-4 left-5">
              <p className="text-xs text-gold font-body font-medium tracking-widest uppercase mb-1">Active Mission</p>
              <p className="text-lg text-foreground font-display">Cancer Prevention Kenya</p>
            </div>
          </div>

          {/* Stat Cards */}
          {[
            { label: "Soursop Trees Planned", value: "2M" },
            { label: "Kenyans Educated Yearly", value: "100K+" },
          ].map((stat) => (
            <div
              key={stat.label}
              className="p-5 bg-glass border border-glass rounded-sm group relative overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              <p className="text-[10px] font-body font-medium tracking-widest uppercase text-muted-foreground">
                {stat.label}
              </p>
              <div className="mt-4">
                <p className="text-3xl font-display text-gold tracking-tight group-hover:text-gold-glow transition-colors">
                  {stat.value}
                </p>
              </div>
            </div>
          ))}

          {/* Wide Stat */}
          <div className="col-span-2 p-5 bg-glass border border-glass rounded-sm flex items-center justify-between">
            <div>
              <p className="text-[10px] font-body font-medium tracking-widest uppercase text-muted-foreground">
                Blockchain Tracked
              </p>
              <p className="text-2xl font-display text-gold mt-2">100%</p>
            </div>
            <div className="flex items-center gap-2">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-gold opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-gold" />
              </span>
              <p className="text-[10px] text-muted-foreground tracking-wide font-body">
                Ledger synced
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

export default HeroSection;

