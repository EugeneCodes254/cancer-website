"use client"
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Quote } from "lucide-react";

export default function AboutSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-32 relative bg-background overflow-hidden">
      {/* Decorative Background Element */}
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-pink-500/5 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="line-duo mb-32 opacity-40" />

      <div className="container mx-auto px-6 lg:px-10" ref={ref}>
        <div className="grid lg:grid-cols-12 gap-16 items-start">
          
          {/* Left Side: The Narrative */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5 sticky lg:top-32"
          >
            <div className="badge-pink mb-8">
              Who We Are
            </div>
            
            <h2 className="font-display text-5xl md:text-7xl font-light text-foreground mb-8 tracking-tighter leading-[0.95]">
              Fighting Cancer with <br />
              <span className="italic text-gradient-pink font-medium">Prevention</span> <br />
              & Technology
            </h2>

            <div className="relative pl-8 border-l border-pink-100">
              <Quote className="absolute -left-3 -top-2 text-pink-200 fill-pink-200" size={24} />
              <p className="font-body text-lg text-muted-foreground leading-relaxed font-light">
                The Cancer Free Blockchain Powered Foundation is a registered NGO in Kenya 
                dedicated to defeating cancer through prevention. 
              </p>
              <p className="font-body text-lg text-muted-foreground leading-relaxed mt-6 font-light italic">
                &ldquo;We believe cancer can be won in the kitchen as much as in the hospital.&rdquo;
              </p>
            </div>

            <div className="mt-12 h-px w-24 bg-gradient-to-r from-pink-500 to-transparent" />
          </motion.div>

          {/* Right Side: Vision & Mission Cards */}
          <div className="lg:col-span-7 space-y-8">
            {[
              {
                num: "01",
                title: "Our Vision",
                text: "A Kenya and Africa where cancer is prevented before it starts, and every marginalized family enjoys access to nutritious food, quality healthcare, safe shelter, and education — all enabled by transparent, blockchain-powered systems that build lasting trust.",
                color: "pink"
              },
              {
                num: "02",
                title: "Our Mission",
                text: "We exist to defeat cancer through prevention by empowering marginalized families with integrated support in food, medication, shelter, and education. Using blockchain, we ensure every donation and impact is fully traceable and verifiable.",
                color: "gold"
              },
            ].map((item, i) => (
              <motion.div
                key={item.num}
                initial={{ opacity: 0, y: 40 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.4 + i * 0.2 }}
                className="group bg-card border border-border p-12 relative shadow-soft hover:shadow-glow-pink transition-all duration-700"
              >
                {/* Accent Number */}
                <span className="font-display text-5xl italic text-pink-50 absolute top-10 right-10 group-hover:text-pink-100 transition-colors duration-500">
                  {item.num}
                </span>

                <h3 className="font-display text-3xl text-foreground mb-6 group-hover:text-pink-900 transition-colors">
                  {item.title}
                </h3>
                
                <p className="font-body text-base text-muted-foreground leading-relaxed font-light max-w-prose">
                  {item.text}
                </p>

                {/* Animated Bottom Line */}
                <div className="mt-10 h-px w-12 bg-pink-200 group-hover:w-full group-hover:bg-gradient-to-r from-pink-400 to-gold transition-all duration-1000 ease-in-out" />
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
