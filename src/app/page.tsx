import { Button } from "@/components/ui/Button";
import { GlassCard } from "@/components/ui/Card";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ArrowRight, Target, Layout, Megaphone, Globe, Users, BarChart3, CheckCircle2, Search, Palette, PenTool, Mail, Phone, MapPin } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { AnimatedOrbit } from "@/components/AnimatedOrbit";

const testimonials = [
  { text: "Brand Panther turned our sarees into a visual story. Their AI-powered creatives made our collection look premium—and it directly impacted engagement and sales.", initial: "A", name: "Antara", role: "Saree & fashion label", gradient: "from-[#8b5cf6] to-[#d946ef]" },
  { text: "They didn't just generate leads—they filtered the noise. With Brand Panther Sales Team, they focused only on serious prospects, and conversions improved massively for Tekera.", initial: "T", name: "Tekera", role: "Tekera", gradient: "from-[#a855f7] to-[#ec4899]" },
  { text: "Brand Panther helped me show up with clarity and confidence. My personal brand finally feels aligned with who I am—and people started noticing.", initial: "S", name: "Sujitha", role: "Personal brand", gradient: "from-[#9333ea] to-[#d946ef]" },
  { text: "Their strategic approach completely transformed our digital presence. We're seeing unprecedented growth and ROI across all our paid channels.", initial: "M", name: "MintX", role: "SaaS Startup", gradient: "from-[#6366f1] to-[#a855f7]" }
];

export default function Home() {
  return (
    <div 
      className="min-h-screen flex flex-col font-sans selection:bg-[var(--primary)] selection:text-white bg-[#020617]"
      style={{
        backgroundImage: 'url(/hero-bg.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
        backgroundRepeat: 'no-repeat'
      }}
    >
      {/* Animated Navbar Component */}
      <Navbar />

      <main className="flex-1 relative overflow-hidden">
        {/* Global Hero Grid Background */}
        <div className="absolute inset-0 top-0 h-[100vh] -z-20 pointer-events-none">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#8b5cf615_1px,transparent_1px),linear-gradient(to_bottom,#8b5cf615_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_100%_100%_at_50%_0%,#000_60%,transparent_100%)]" />
        </div>
        
        <AnimatedOrbit />

        {/* Hero Section */}
        <section data-aos="fade-up" className="relative z-10 pt-40 pb-24 md:pt-48 md:pb-32 px-6 md:px-12 max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between min-h-[90vh] gap-12">
          
          {/* Left Content */}
          <div className="flex-1 w-full max-w-2xl flex flex-col items-start">
            {/* Tagline Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[var(--primary)]/20 bg-[var(--primary)]/10 text-xs font-semibold text-[var(--primary)] uppercase tracking-wider mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-[var(--primary)] animate-pulse" />
              Premium Marketing Studio
              <link rel="canonical" href="https://brandpanther-beta.vercel.app/" />
            </div>

            {/* Main Heading */}
            <h1 className="font-heading font-extrabold text-4xl md:text-5xl lg:text-7xl tracking-tighter leading-[1.05] text-left mb-6">
              <span className="text-white">Digital </span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[hsl(262,83%,56%)] to-[hsl(291,76%,60%)]">Marketing </span>
              <span className="text-white">Agency.</span>
            </h1>

            {/* Subheadline */}
            <p className="max-w-xl text-lg md:text-xl text-white/60 font-normal leading-relaxed text-left mb-10">
              From first click to final sale — we craft brands that hunt growth.
            </p>

            {/* Call to Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 mb-16">
              <Button size="lg" className="px-8 py-7 rounded-full bg-gradient-to-r from-[hsl(262,83%,56%)] to-[hsl(291,76%,60%)] text-white font-semibold hover:scale-105 active:scale-[0.98] transition-all duration-500 shadow-[0_8px_40px_hsl(262,83%,56%,0.28)] hover:shadow-[0_0_60px_hsl(262,83%,56%,0.42)] group text-base border-0">
                Let&apos;s Grow Together
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button size="lg" variant="glass" className="px-8 py-7 rounded-full text-white font-semibold transition-all hover:bg-white/10 text-base">
                View Services
              </Button>
            </div>
            
            {/* Stats Section embedded inside Hero */}
            <div className="grid grid-cols-3 gap-8 md:gap-12 border-t border-white/5 pt-10 w-full text-left">
              <div>
                <div className="font-extrabold text-3xl md:text-4xl text-transparent bg-clip-text bg-gradient-to-r from-white to-[hsl(284,92%,68%)] tracking-tight">200+</div>
                <div className="text-xs md:text-sm text-white/60 mt-1 uppercase tracking-wider">Brands Scaled</div>
              </div>
              <div>
                <div className="font-extrabold text-3xl md:text-4xl text-transparent bg-clip-text bg-gradient-to-r from-white to-[hsl(284,92%,68%)] tracking-tight">10x</div>
                <div className="text-xs md:text-sm text-white/60 mt-1 uppercase tracking-wider">Avg. ROI</div>
              </div>
              <div>
                <div className="font-extrabold text-3xl md:text-4xl text-transparent bg-clip-text bg-gradient-to-r from-white to-[hsl(284,92%,68%)] tracking-tight">98%</div>
                <div className="text-xs md:text-sm text-white/60 mt-1 uppercase tracking-wider">Retention</div>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="flex-1 w-full hidden lg:flex justify-center items-center relative w-full h-[600px]">
            {/* Background geometric shapes and glows */}
            {/* <div className="absolute inset-0 -z-10 pointer-events-none flex items-center justify-center">
              <div className="absolute w-[500px] h-[500px] border border-[hsl(262,83%,56%,0.2)] rounded-[3rem] rotate-45" />
              <div className="absolute w-[700px] h-[700px] border border-[hsl(262,83%,56%,0.1)] rounded-[4rem] rotate-45" />
              <div className="absolute w-[80%] h-[80%] bg-[hsl(262,83%,56%)] rounded-full blur-[130px] opacity-20" />
            </div> */}
            
            {/* Image Card (Exact Match) */}
            <div className="relative rounded-2xl border border-[hsl(262,83%,56%,0.4)] bg-[#0d0914] shadow-[0_0_60px_rgba(139,92,246,0.15)] overflow-hidden w-full max-w-[640px] aspect-[16/9] group z-10">
              {/* Hover overlay glow */}
              <div className="absolute inset-0 bg-gradient-to-tr from-[hsl(262,83%,56%,0.2)] to-transparent pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-700 z-20" />
              {/* Image filling the card completely */}
              <img src="/hero-panther.png" alt="Brand Panther" className="w-full h-full object-cover relative z-10 transition-transform duration-700 group-hover:scale-105" />
            </div>
          </div>
        </section>

        {/* About Us Section */}
        <section id="about" data-aos="fade-up" className="py-24 relative z-10">
          <div className="container mx-auto px-4 max-w-7xl">
            <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
              {/* Left Image */}
              <div className="flex-1 w-full max-w-2xl mx-auto">
                <div className="relative rounded-3xl overflow-hidden border border-white/10 bg-black/50 aspect-square group shadow-[0_0_50px_rgba(139,92,246,0.15)]">
                  <div className="absolute inset-0 bg-gradient-to-tr from-[hsl(262,83%,56%,0.2)] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10" />
                  <img src="/analytics_dashboard.png" alt="Analytics Dashboard" className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700" />
                </div>
              </div>
              
              {/* Right Content */}
              <div className="flex-1 space-y-6">
                <div>
                  <h4 className="text-[hsl(262,83%,56%)] text-xs font-bold tracking-[0.2em] uppercase mb-3">About Us</h4>
                  <h2 className="text-3xl md:text-4xl lg:text-5xl leading-[1.1] font-extrabold mb-5 text-white tracking-tight">
                    From conceptualization to implementation, Brand Panther partners with ambitious businesses
                  </h2>
                  <p className="text-white/60 text-base md:text-lg leading-relaxed max-w-xl">
                    We're not just another marketing agency. We're your growth partner, combining strategy, creativity, and technology to deliver results that matter.
                  </p>
                </div>
                
                <div className="grid sm:grid-cols-2 gap-4 pt-2 max-w-xl">
                  {[
                    { icon: Search, title: "Market Research", desc: "Decode your audience with data" },
                    { icon: Palette, title: "Branding", desc: "Identities people remember" },
                    { icon: PenTool, title: "Content Creation", desc: "Stories that convert" },
                    { icon: Target, title: "Lead Generation", desc: "Pipelines that pay" }
                  ].map((item, i) => (
                    <div key={i} className="p-5 rounded-2xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.05] transition-colors group cursor-default">
                      <div className="w-10 h-10 rounded-xl bg-[hsl(262,83%,56%)]/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                        <item.icon className="w-5 h-5 text-[hsl(284,92%,68%)]" />
                      </div>
                      <h3 className="text-base font-bold mb-1">{item.title}</h3>
                      <p className="text-xs text-white/50">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" data-aos="fade-up" className="py-24 relative">
          <div className="container mx-auto px-4">
            <SectionHeading subtitle="Comprehensive solutions to dominate your market and outpace the competition.">
              Our Core <span className="text-gradient">Capabilities</span>
            </SectionHeading>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-16">
              {[
                { icon: Target, title: "Performance Marketing", desc: "Data-driven campaigns across Meta, Google, and TikTok." },
                { icon: Layout, title: "Web Design & Dev", desc: "High-converting, beautiful websites that tell your story." },
                { icon: Megaphone, title: "Social Media Strategy", desc: "Engaging content that builds community and brand loyalty." },
                { icon: Globe, title: "SEO & Content", desc: "Rank higher and capture organic intent with precision." },
                { icon: Users, title: "Lead Generation", desc: "High-quality inbound leads for B2B and high-ticket B2C." },
                { icon: BarChart3, title: "Data & Analytics", desc: "Full funnel tracking to optimize every dollar spent." },
              ].map((service, i) => (
                <GlassCard key={i} className="p-6 group hover:border-[var(--primary)]/50 transition-colors">
                  <div className="w-12 h-12 rounded-lg bg-[var(--primary)]/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <service.icon className="w-6 h-6 text-[var(--primary)]" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                  <p className="text-white/60 leading-relaxed">{service.desc}</p>
                </GlassCard>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section id="pricing" data-aos="fade-up" className="py-24 border-y border-white/5 relative z-10">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <span className="text-[hsl(284,92%,68%)] text-xs font-bold tracking-widest uppercase mb-4 block">PACKAGES</span>
              <h2 className="text-4xl md:text-5xl font-extrabold mb-4">
                Plans built to <span className="text-transparent bg-clip-text bg-gradient-to-r from-[hsl(262,83%,56%)] to-[hsl(291,76%,60%)]">accelerate.</span>
              </h2>
              <p className="text-white/60">
                Transparent pricing. No hidden fees. Cancel anytime.
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8 mt-16 max-w-5xl mx-auto">
              {[
                { name: "Starter", price: "10,000", desc: "LAUNCH WITH MOMENTUM", features: ["Social media management (2 platforms)", "8 posts / month", "Basic analytics report", "Email support"] },
                { name: "Growth", price: "20,000", desc: "SCALE YOUR REACH", features: ["Everything in Starter", "4 platforms + 16 posts", "Paid ad campaign management", "Lead generation funnel", "Bi-weekly strategy calls"], popular: true },
                { name: "Elite", price: "40,000", desc: "DOMINATE YOUR MARKET", features: ["Everything in Growth", "Custom website design", "Full sales support", "Dedicated account manager", "Weekly performance reviews", "Priority creative production"] }
              ].map((tier, i) => (
                <GlassCard key={i} className={`p-8 relative flex flex-col bg-black/40 ${tier.popular ? 'border-[var(--primary)] scale-105 shadow-[0_0_40px_rgba(139,92,246,0.3)] z-10' : 'border-white/10'}`}>
                  {tier.popular && (
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[var(--primary)] text-white text-[10px] font-bold px-4 py-1.5 rounded-full uppercase tracking-wider flex items-center gap-1.5 shadow-[0_0_15px_rgba(139,92,246,0.5)]">
                      <span className="w-2 h-2 rounded-full bg-white/70 animate-pulse" /> MOST POPULAR
                    </div>
                  )}
                  <p className="text-white/50 text-[11px] font-semibold tracking-widest uppercase mb-2">{tier.desc}</p>
                  <h3 className="text-3xl font-extrabold mb-6">{tier.name}</h3>
                  <div className="mb-10 flex items-baseline gap-1">
                    <span className="text-xl text-white/50 font-bold">₹</span>
                    <span className="text-[2.75rem] leading-none font-extrabold">{tier.price}</span>
                    <span className="text-white/50 text-sm">/mo</span>
                  </div>
                  <ul className="space-y-4 mb-10 flex-1">
                    {tier.features.map((feature, j) => (
                      <li key={j} className="flex items-start gap-3 text-sm text-white/70">
                        <CheckCircle2 className="w-5 h-5 text-[hsl(284,92%,68%)] shrink-0 opacity-80" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button variant={tier.popular ? "default" : "outline"} className={`w-full rounded-2xl py-6 font-semibold text-sm ${tier.popular ? "bg-gradient-to-r from-[hsl(262,83%,56%)] to-[hsl(291,76%,60%)] border-0 text-white hover:scale-[1.02] shadow-[0_0_20px_rgba(139,92,246,0.4)] transition-all" : "border-white/10 text-white hover:bg-white/10"}`}>
                    Get Started
                  </Button>
                </GlassCard>
              ))}
            </div>
          </div>
        </section>

        {/* Workflow Section */}
        <section id="work" data-aos="fade-up" className="py-24 relative z-10">
          <div className="container mx-auto px-4">
            <div className="text-center mb-20">
              <h2 className="text-4xl md:text-5xl font-extrabold mb-4">
                How We <span className="text-transparent bg-clip-text bg-gradient-to-r from-[hsl(262,83%,56%)] to-[hsl(291,76%,60%)]">Work</span>
              </h2>
              <p className="text-white/60 text-lg">
                Our proven process from first touch to final sale.
              </p>
            </div>
            
            <div className="max-w-4xl mx-auto space-y-12 relative before:absolute before:inset-0 before:ml-5 md:before:mx-auto md:before:translate-x-0 before:h-full before:w-[1px] before:bg-gradient-to-b before:from-transparent before:via-[hsl(262,83%,56%,0.5)] before:to-transparent">
              {[
                { step: "01", title: "Discovery & Audit", desc: "We deep dive into your brand, current metrics, and market positioning." },
                { step: "02", title: "Strategy Formulation", desc: "We build a custom roadmap tailored to your specific growth goals." },
                { step: "03", title: "Execution & Launch", desc: "Our specialists deploy campaigns, creatives, and technical updates." },
                { step: "04", title: "Scale & Optimize", desc: "Continuous testing, iterating, and scaling what works best." }
              ].map((phase, i) => (
                <div key={i} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
                  <div className="flex items-center justify-center w-10 h-10 rounded-full bg-[#0a0510] border border-[hsl(262,83%,56%)] text-[hsl(262,83%,56%)] text-sm font-medium absolute left-0 md:left-1/2 md:-translate-x-1/2 shadow-[0_0_20px_rgba(139,92,246,0.3)] z-10 transition-all duration-300 group-hover:scale-110 group-hover:bg-[hsl(262,83%,56%)] group-hover:text-white">
                    {phase.step}
                  </div>
                  <div className="ml-16 md:ml-0 md:w-[calc(50%-4rem)] p-8 rounded-2xl bg-[#0d0914]/80 border border-white/5 shadow-xl transition-all duration-300 group-hover:border-[hsl(262,83%,56%,0.4)] group-hover:-translate-y-1">
                    <h3 className="text-xl font-bold mb-3 text-white">{phase.title}</h3>
                    <p className="text-white/60 leading-relaxed text-sm md:text-base">{phase.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Marquee */}
        <section data-aos="fade-up" className="py-24 relative z-10 overflow-hidden">
          <div className="text-center mb-16">
            <span className="text-[hsl(284,92%,68%)] text-xs font-bold tracking-widest uppercase mb-4 block">CLIENT LOVE</span>
            <h2 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight">
              Trusted by <span className="text-transparent bg-clip-text bg-gradient-to-r from-[hsl(262,83%,56%)] to-[hsl(291,76%,60%)]">bold brands.</span>
            </h2>
          </div>
          
          <div className="flex relative w-full border-y border-white/5 bg-black/20 py-10 overflow-hidden">
            {/* Left and Right Fade overlays */}
            <div className="absolute top-0 left-0 bottom-0 w-32 bg-gradient-to-r from-[#020617] to-transparent z-10 pointer-events-none" />
            <div className="absolute top-0 right-0 bottom-0 w-32 bg-gradient-to-l from-[#020617] to-transparent z-10 pointer-events-none" />
            
            <div className="flex gap-6 animate-marquee whitespace-nowrap px-6">
              {[...testimonials, ...testimonials].map((t, i) => (
                <div key={i} className="w-[400px] shrink-0 p-8 rounded-2xl bg-[#0a0510] border border-white/10 shadow-[0_0_30px_rgba(139,92,246,0.05)] hover:border-[hsl(262,83%,56%,0.4)] transition-colors group cursor-default">
                  <div className="text-[hsl(262,83%,56%)] text-4xl font-serif mb-4 leading-none opacity-50 group-hover:opacity-100 transition-opacity">"</div>
                  <p className="text-white/80 text-sm md:text-base leading-relaxed mb-8 whitespace-normal min-h-[100px]">
                    {t.text}
                  </p>
                  <div className="flex items-center gap-4">
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center text-white font-bold bg-gradient-to-br ${t.gradient}`}>
                      {t.initial}
                    </div>
                    <div>
                      <h4 className="font-bold text-white text-sm">{t.name}</h4>
                      <p className="text-xs text-white/50">{t.role}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section data-aos="zoom-in" className="py-24 md:py-32 relative z-10 overflow-hidden">
          {/* Background Glows */}
          <div className="absolute top-1/2 left-0 -translate-y-1/2 -translate-x-1/3 w-[500px] h-[500px] bg-[hsl(262,83%,56%)] rounded-full blur-[150px] opacity-20 pointer-events-none" />
          <div className="absolute top-1/2 right-0 -translate-y-1/2 translate-x-1/3 w-[500px] h-[500px] bg-[hsl(291,76%,60%)] rounded-full blur-[150px] opacity-20 pointer-events-none" />

          {/* Left Floating SVG */}
          <div className="absolute top-20 left-10 md:left-20 opacity-30 animate-[spin_30s_linear_infinite]">
            <svg width="120" height="120" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M50 10 L90 85 L10 85 Z" stroke="url(#paint0_linear)" strokeWidth="1" strokeDasharray="4 4"/>
              <circle cx="50" cy="50" r="20" stroke="url(#paint0_linear)" strokeWidth="1" />
              <defs>
                <linearGradient id="paint0_linear" x1="50" y1="10" x2="50" y2="85" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#8b5cf6" />
                  <stop offset="1" stopColor="#d946ef" stopOpacity="0" />
                </linearGradient>
              </defs>
            </svg>
          </div>

          {/* Right Floating SVG */}
          <div className="absolute bottom-10 right-10 md:right-20 opacity-30 animate-pulse">
            <svg width="150" height="150" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="50" cy="50" r="45" stroke="url(#paint1_linear)" strokeWidth="1" strokeDasharray="2 6"/>
              <circle cx="50" cy="50" r="30" stroke="url(#paint1_linear)" strokeWidth="1" strokeDasharray="8 4"/>
              <circle cx="50" cy="50" r="10" fill="#d946ef" opacity="0.5" filter="blur(4px)"/>
              <defs>
                <linearGradient id="paint1_linear" x1="5" y1="50" x2="95" y2="50" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#d946ef" />
                  <stop offset="1" stopColor="#8b5cf6" stopOpacity="0.2" />
                </linearGradient>
              </defs>
            </svg>
          </div>

          <div className="container mx-auto px-4 relative">
            <div className="relative text-center max-w-4xl mx-auto p-8 md:p-16 rounded-[2rem] border border-white/10 bg-white/5 backdrop-blur-xl shadow-[0_0_60px_rgba(0,0,0,0.5)]">
              {/* Inner subtle glow */}
              <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent rounded-[2rem] pointer-events-none" />
              
              <div className="relative z-10 max-w-2xl mx-auto">
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold mb-4 text-transparent bg-clip-text bg-gradient-to-b from-white to-white/70">Ready to dominate?</h2>
                <p className="text-base md:text-lg text-white/60 mb-8 font-medium leading-relaxed">
                  Join the top 1% of brands scaling predictably. Let's build a strategy tailored for your explosive growth.
                </p>
                <Button size="lg" className="rounded-full text-sm md:text-base px-8 py-6 bg-gradient-to-r from-[hsl(262,83%,56%)] to-[hsl(291,76%,60%)] border-0 text-white font-bold hover:scale-105 shadow-[0_0_30px_rgba(139,92,246,0.5)] hover:shadow-[0_0_50px_rgba(139,92,246,0.7)] transition-all">
                  Book Your Strategy Call
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Us Section */}
        <section data-aos="fade-up" className="py-24 relative z-10 border-t border-white/5">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="flex flex-col lg:flex-row gap-16">
              {/* Left Side: Contact Info */}
              <div className="flex-1 space-y-8">
                <div>
                  <h4 className="text-[hsl(262,83%,56%)] text-xs font-bold tracking-[0.2em] uppercase mb-4">GET IN TOUCH</h4>
                  <h2 className="text-4xl md:text-5xl lg:text-[3.5rem] leading-[1.1] font-extrabold mb-6 text-white tracking-tight">
                    Let's build <br/><span className="text-transparent bg-clip-text bg-gradient-to-r from-[hsl(262,83%,56%)] to-[hsl(291,76%,60%)]">something fierce.</span>
                  </h2>
                  <p className="text-white/60 text-lg">
                    Drop us a line — strategy calls are free, results are not.
                  </p>
                </div>
                
                <div className="space-y-4 pt-4">
                  {/* Contact Card 1 */}
                  <div className="flex items-center gap-4 p-5 rounded-2xl border border-white/5 bg-[#0d0914]/80 hover:border-white/10 transition-colors cursor-default">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[hsl(262,83%,56%)] to-[hsl(291,76%,60%)] flex items-center justify-center shrink-0">
                      <Mail className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <p className="text-[10px] text-white/50 font-semibold tracking-widest uppercase mb-1">EMAIL</p>
                      <p className="text-sm font-semibold text-white">brandpanther.ai@gmail.com</p>
                    </div>
                  </div>
                  
                  {/* Contact Card 2 */}
                  <div className="flex items-center gap-4 p-5 rounded-2xl border border-white/5 bg-[#0d0914]/80 hover:border-white/10 transition-colors cursor-default">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[hsl(262,83%,56%)] to-[hsl(291,76%,60%)] flex items-center justify-center shrink-0">
                      <Phone className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <p className="text-[10px] text-white/50 font-semibold tracking-widest uppercase mb-1">PHONE</p>
                      <p className="text-sm font-semibold text-white">+91 90254 30301</p>
                    </div>
                  </div>

                  {/* Contact Card 3 */}
                  <div className="flex items-center gap-4 p-5 rounded-2xl border border-white/5 bg-[#0d0914]/80 hover:border-white/10 transition-colors cursor-default">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[hsl(262,83%,56%)] to-[hsl(291,76%,60%)] flex items-center justify-center shrink-0">
                      <MapPin className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <p className="text-[10px] text-white/50 font-semibold tracking-widest uppercase mb-1">STUDIO</p>
                      <p className="text-sm font-semibold text-white">Chennai</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Side: Form */}
              <div className="flex-1">
                <div className="p-8 md:p-10 rounded-[2rem] border border-white/10 bg-white/5 backdrop-blur-xl shadow-[0_0_40px_rgba(0,0,0,0.3)]">
                  <form className="space-y-6">
                    <div>
                      <input 
                        type="text" 
                        placeholder="Your Name" 
                        className="w-full bg-[#0a0510]/50 border border-white/10 rounded-xl px-5 py-4 text-sm text-white placeholder:text-white/40 focus:outline-none focus:border-[hsl(262,83%,56%)] focus:ring-1 focus:ring-[hsl(262,83%,56%)] transition-all"
                      />
                    </div>
                    <div>
                      <input 
                        type="email" 
                        placeholder="Email Address" 
                        className="w-full bg-[#0a0510]/50 border border-white/10 rounded-xl px-5 py-4 text-sm text-white placeholder:text-white/40 focus:outline-none focus:border-[hsl(262,83%,56%)] focus:ring-1 focus:ring-[hsl(262,83%,56%)] transition-all"
                      />
                    </div>
                    <div>
                      <textarea 
                        placeholder="Tell us about your project" 
                        rows={5}
                        className="w-full bg-[#0a0510]/50 border border-white/10 rounded-xl px-5 py-4 text-sm text-white placeholder:text-white/40 focus:outline-none focus:border-[hsl(262,83%,56%)] focus:ring-1 focus:ring-[hsl(262,83%,56%)] transition-all resize-none"
                      />
                    </div>
                    <Button className="w-full rounded-xl py-6 bg-gradient-to-r from-[hsl(262,83%,56%)] to-[hsl(291,76%,60%)] border-0 text-white font-bold hover:scale-[1.02] shadow-[0_0_20px_rgba(139,92,246,0.3)] transition-all flex items-center justify-center gap-2">
                      Send Message
                      <ArrowRight className="w-4 h-4" />
                    </Button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-white/10 pt-16 pb-8 bg-[#0a0510] relative z-10">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
            <div className="md:col-span-2">
              <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
                <img src="/logo-mark.png" alt="Logo" className="w-8 h-8 object-contain" />
                <span>Brand<span className="text-[hsl(262,83%,56%)]">Panther</span></span>
              </h2>
              <p className="text-white/60 text-sm md:text-base max-w-sm mb-6 leading-relaxed">
                A premium digital marketing studio engineering growth for ambitious brands.
              </p>
              <a href="#" className="w-10 h-10 rounded-full border border-white/10 bg-[#150d1e] flex items-center justify-center hover:bg-[hsl(262,83%,56%)] hover:border-[hsl(262,83%,56%)] transition-all">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
                </svg>
              </a>
            </div>
            
            <div>
              <h3 className="font-bold mb-6 text-white text-sm tracking-wider">Navigate</h3>
              <ul className="space-y-4 text-sm text-white/60">
                <li><a href="#" className="hover:text-[hsl(262,83%,56%)] transition-colors">About</a></li>
                <li><a href="#services" className="hover:text-[hsl(262,83%,56%)] transition-colors">Services</a></li>
                <li><a href="#" className="hover:text-[hsl(262,83%,56%)] transition-colors">Packages</a></li>
                <li><a href="#" className="hover:text-[hsl(262,83%,56%)] transition-colors">Workflow</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-bold mb-6 text-white text-sm tracking-wider">Contact</h3>
              <ul className="space-y-4 text-sm text-white/60">
                <li><a href="mailto:brandpanther.ai@gmail.com" className="hover:text-[hsl(262,83%,56%)] transition-colors">brandpanther.ai@gmail.com</a></li>
                <li><a href="tel:+919025430301" className="hover:text-[hsl(262,83%,56%)] transition-colors">+91 90254 30301</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-white/40">
            <p>© {new Date().getFullYear()} Brand Panther. All rights reserved.</p>
            <p>
              Developed by
              Chandhirasekar
               {/* <span className="text-[hsl(291,76%,60%)] font-semibold">MintX Solutions</span> */}
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
