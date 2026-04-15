"use client"


import logo from "@/assets/logo.png";

const Footer = () => (
  <footer className="border-t border-glass py-16">
    <div className="container mx-auto px-6 lg:px-10">
      <div className="grid md:grid-cols-3 gap-12 mb-12">
        <div>
          <div className="flex items-center gap-3 mb-4">
            <img src={logo} alt="Logo" width={28} height={28} loading="lazy" />
            <span className="font-display text-lg text-foreground tracking-tight">CFBF.</span>
          </div>
          <p className="font-body text-sm text-muted-foreground leading-relaxed font-light">
            A registered NGO in Kenya fighting cancer through prevention, powered by blockchain
            transparency and community empowerment.
          </p>
        </div>

        <div>
          <h4 className="font-body text-xs font-medium tracking-[0.15em] uppercase text-gold mb-6">Quick Links</h4>
          <div className="flex flex-col gap-3 font-body text-sm text-muted-foreground font-light">
            <a href="#about" className="hover:text-gold transition-colors duration-500">About Us</a>
            <a href="#pillars" className="hover:text-gold transition-colors duration-500">Our Pillars</a>
            <a href="#soursop" className="hover:text-gold transition-colors duration-500">Soursop Initiative</a>
            <a href="#blockchain" className="hover:text-gold transition-colors duration-500">Blockchain</a>
            <a href="#donate" className="hover:text-gold transition-colors duration-500">Donate</a>
          </div>
        </div>

        <div>
          <h4 className="font-body text-xs font-medium tracking-[0.15em] uppercase text-gold mb-6">Contact</h4>
          <div className="flex flex-col gap-3 font-body text-sm text-muted-foreground font-light">
            <span>info@cancerfreeblockchain.org</span>
            <span>Nairobi, Kenya</span>
          </div>
        </div>
      </div>

      <div className="line-gold" />
      <div className="pt-8 text-center font-body text-xs text-muted-foreground tracking-wide">
        © {new Date().getFullYear()} Cancer Free Blockchain Powered Foundation. All rights reserved.
      </div>
    </div>
  </footer>
);

export default Footer;

