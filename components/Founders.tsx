"use client";

import Image from "next/image";
import { Heart, MapPin } from "lucide-react";
import { motion } from "framer-motion";

interface TeamMember {
  name: string;
  role: string;
  title?: string;
  statement: string;
  photo: string;
  objectPosition?: string;
  isFounder?: boolean;
}

const TEAM: TeamMember[] = [
  {
    name: "Samuel Njai Gikonyo",
    role: "Founder",
    statement:
      "We believe cancer can be stopped before it starts through awareness, lifestyle transformation and trusted systems that unify health data for collective action.",
    photo: "/team/samuel-njai.jpeg",
    objectPosition: "center 20%",
    isFounder: true,
  },
  {
    name: "Zennah Karingi",
    role: "Co-Founder",
    statement:
      "We believe one day the world will be cancer-free. We aim to bridge the gap in healthcare for those affected while prioritizing prevention and keeping people healthy.",
    photo: "/team/zennah-karingi.jpeg",
    objectPosition: "center 15%",
    isFounder: true,
  },
  {
    name: "Dr. Damaris Mukami Maina",
    role: "Director & Chief Medical Specialist",
    title: "Cancer Prevention & Health Knowledge",
    statement:
      "Evidence-based prevention is our strongest weapon. By combining medical expertise with accessible health education, we empower communities.",
    photo: "/team/damaris-maina.jpeg",
    objectPosition: "center 10%",
  },
  {
    name: "Ruth Ngima Biru",
    role: "Director of Oncology Support Services",
    statement:
      "Compassion must be systematic. We provide the structural support families need to navigate the complexities of oncology care and recovery.",
    photo: "/team/ruth-1.jpeg",
    objectPosition: "center",
  },
  {
    name: "Abdallah Juma",
    role: "Technical Support & Setup Team",
    statement:
      "Transparency is engineered. We build the technical infrastructure that ensures every donation and health record is immutable and verified.",
    photo: "/team/abdallah.jpeg",
    objectPosition: "center",
  },
];

function Initials({ name }: { name: string }) {
  const parts = name.split(" ").filter(Boolean);
  const initials = parts.length >= 2 ? parts[0][0] + parts[parts.length - 1][0] : parts[0]?.[0] ?? "?";
  return <span className="font-display text-2xl font-light text-pink-400 tracking-widest uppercase">{initials}</span>;
}

function MemberCard({ member }: { member: TeamMember }) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className={`
        group relative flex flex-col overflow-hidden transition-all duration-700
        bg-card border border-border rounded-sm
        ${member.isFounder ? "md:col-span-2 shadow-soft" : "col-span-1"}
      `}
    >
      {/* Top Accent Line */}
      <div className={`h-px w-full ${member.isFounder ? 'bg-gradient-to-r from-transparent via-gold/40 to-transparent' : 'bg-gradient-to-r from-transparent via-pink-400/20 to-transparent'}`} />

      <div className={`flex ${member.isFounder ? "md:flex-row flex-col" : "flex-col"}`}>
        
        {/* Photo Section */}

<div
  className={`
    relative flex-shrink-0 overflow-hidden bg-muted
    ${member.isFounder ? "md:w-80 w-full h-[350px]" : "w-full h-72"}
    border-b border-border md:border-b-0 ${member.isFounder ? 'md:border-r' : ''}
  `}
>
          {member.photo ? (
            <>
<Image
  src={member.photo}
  alt={member.name}
  fill
  priority={member.isFounder}
  quality={90}
  sizes={
    member.isFounder
      ? "(min-width: 1024px) 320px, (min-width: 768px) 320px, 100vw"
      : "(min-width: 1024px) 25vw, (min-width: 768px) 33vw, 100vw"
  }
  className="object-cover grayscale group-hover:grayscale-0 transition-transform duration-700 ease-out group-hover:scale-105"
  style={{ objectPosition: member.objectPosition }}
/>

              <div className="absolute inset-0 bg-gradient-to-t from-background/40 to-transparent opacity-60" />
            </>
          ) : (
            <div className="w-full h-full flex items-center justify-center bg-zinc-900">
              <Initials name={member.name} />
            </div>
          )}
        </div>

        {/* Text Content */}
        <div className="flex flex-col justify-center p-8 md:p-10 flex-1">
          <div className="flex items-center gap-3 mb-4">
            <div className={`h-px w-6 ${member.isFounder ? 'bg-gold' : 'bg-pink-400'}`} />
            <span className={`text-[10px] font-bold uppercase tracking-[0.2em] ${member.isFounder ? 'text-gold' : 'text-pink-soft'}`}>
              {member.role}
            </span>
          </div>

          <h3 className={`font-display font-medium text-foreground leading-tight mb-2 ${member.isFounder ? 'text-4xl' : 'text-2xl'}`}>
            {member.name}
          </h3>

          {member.title && (
            <p className="font-body text-pink-soft/80 font-medium text-[10px] uppercase tracking-widest mb-6">
              {member.title}
            </p>
          )}

          {member.statement && (
            <blockquote className={`
              font-display italic text-foreground/70 leading-relaxed pl-6 border-l 
              ${member.isFounder ? 'border-gold/30 text-lg' : 'border-pink-200/30 text-sm'}
            `}>
              &ldquo;{member.statement}&rdquo;
            </blockquote>
          )}
        </div>
      </div>
    </motion.div>
  );
}

export default function Founders() {
  return (
    <section className="bg-background py-32 px-6 relative overflow-hidden">
      
      {/* Editorial Vertical Line */}
      <div className="absolute left-6 lg:left-10 top-0 bottom-0 w-px bg-border/20 hidden md:block" />

      <div className="max-w-6xl mx-auto relative lg:pl-16">
        
        {/* Header Area */}
        <div className="mb-20">
          <div className="badge-pink mb-8 inline-flex items-center gap-2">
            <Heart size={10} className="fill-current" />
            Our Leadership
          </div>

          <h2 className="font-display text-5xl md:text-7xl font-light text-foreground tracking-tighter mb-6">
            The Minds Behind <span className="italic text-gradient-duo">the Mission.</span>
          </h2>

          <p className="font-body text-muted-foreground text-lg max-w-2xl leading-relaxed font-light">
            A collective of medical experts and technical architects united by one purpose — 
            a world where cancer is caught before it starts.
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {TEAM.map((member) => (
            <MemberCard key={member.name} member={member} />
          ))}
        </div>

        {/* Location / Footer */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 py-10 border-t border-border/40">
          <div className="flex items-center gap-4">
             <div className="p-2 rounded-full bg-pink-500/10 text-pink-500">
               <MapPin size={16} />
             </div>
             <p className="font-body text-sm text-muted-foreground">
               Zuhura Place Building, 4th Floor — Thika Town, Kenya
             </p>
          </div>
          
          <div className="flex items-center gap-2 text-[10px] uppercase tracking-[0.2em] text-gold font-bold">
            <div className="w-1.5 h-1.5 rounded-full bg-gold animate-pulse" />
            Verified Mission
          </div>
        </div>

      </div>
    </section>
  );
}
