"use client";

import { Link } from "@/i18n/routing";
import { ChevronRight, ChevronLeft } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { cn } from "@/lib/utils";
import { useLanguage } from "@/lib/LanguageContext";
import Image from "next/image";
import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SceneWrapper from "@/components/three/SceneWrapper";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

interface SolutionDetailTemplateProps {
  slug: string;
  name: string;
  category: string;
  description: string;
  heroImage: string;
  bannerImage: string;
  deliverables: {
    title: string;
    description: string;
    icon: React.ReactNode;
  }[];
  approach: {
    title: string;
    description: string;
  }[];
  children?: React.ReactNode;
}

export default function SolutionDetailTemplate({
  slug,
  name,
  category,
  description,
  bannerImage,
  deliverables,
  approach,
  children
}: SolutionDetailTemplateProps) {
  const { t, isRTL } = useLanguage();
  const heroRef = useRef(null);

  const timelineSteps = [
    { title: t("solutions.detail.timeline.s1t"), brief: t("solutions.detail.timeline.s1d") },
    { title: t("solutions.detail.timeline.s2t"), brief: t("solutions.detail.timeline.s2d") },
    { title: t("solutions.detail.timeline.s3t"), brief: t("solutions.detail.timeline.s3d") },
    { title: t("solutions.detail.timeline.s4t"), brief: t("solutions.detail.timeline.s4d") },
    { title: t("solutions.detail.timeline.s5t"), brief: t("solutions.detail.timeline.s5d") }
  ];

  const mainRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // 1. STANDARD CINEMATIC ENTRANCES — fade in only, no clipPath
      gsap.utils.toArray<Element>("h1, h2, h3").forEach((heading) => {
        gsap.from(heading, {
          y: 30,
          opacity: 0,
          duration: 0.7,
          scrollTrigger: {
            trigger: heading,
            start: "top 90%",
            toggleActions: "play none none none",
          }
        });
      });

      gsap.utils.toArray<Element>(".solution-card").forEach((card) => {
        gsap.from(card, {
          scale: 0.92,
          opacity: 0,
          y: 30,
          scrollTrigger: {
            trigger: card,
            start: "top 95%",
            end: "top 70%",
            scrub: 0.3,
          }
        });
      });

      // Default animation for deliverables if not specialized
      if (!["digital-transformation", "mission-critical"].includes(slug)) {
        gsap.utils.toArray<Element>(".deliverable-item").forEach((item) => {
          gsap.from(item, {
            opacity: 0,
            y: 30,
            scrollTrigger: {
              trigger: item,
              start: "top 90%",
              end: "top 70%",
              scrub: 0.3,
            }
          });
        });
      }

      // 2. DOMAIN SPECIFIC SCROLL ANIMATIONS
      
      // Digital Transformation: Alternating Side Slides
      if (slug === "digital-transformation") {
        gsap.utils.toArray<Element>(".deliverable-item").forEach((item, i) => {
          gsap.from(item, {
            x: i % 2 === 0 ? -100 : 100,
            opacity: 0,
            duration: 1,
            scrollTrigger: {
              trigger: item,
              start: "top 90%",
              end: "top 60%",
              scrub: 0.3,
            }
          });
        });
      }

      // AI & Data: Typewriter + Connection Lines
      if (slug === "ai-data") {
        gsap.utils.toArray<Element>(".deliverable-item").forEach((item) => {
          const title = item.querySelector("h4");
          if (title) {
            gsap.from(title, {
              width: 0,
              duration: 1,
              scrollTrigger: {
                trigger: item,
                start: "top 90%",
                scrub: 0.3,
              }
            });
          }
        });
      }

      // Cybersecurity: Scanning Beam
      if (slug === "cybersecurity") {
        gsap.utils.toArray<HTMLElement>("section").forEach((section) => {
          const beam = document.createElement("div");
          beam.className = "absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-brand-blue-soft/30 to-transparent pointer-events-none z-50";
          section.style.position = "relative";
          section.appendChild(beam);
          
          gsap.fromTo(beam, 
            { top: "0%" }, 
            { 
              top: "100%", 
              duration: 0.6,
              scrollTrigger: {
                trigger: section,
                start: "top bottom",
                end: "bottom top",
                scrub: 0.3
              }
            }
          );
        });
      }

      // ELV & Smart Systems: Scaling Icons + Hub Connections
      if (slug === "elv-smart-systems") {
        gsap.utils.toArray<Element>(".deliverable-icon-box").forEach((icon) => {
          gsap.from(icon, {
            scale: 0,
            duration: 0.5,
            scrollTrigger: {
              trigger: icon,
              start: "top 95%",
              scrub: 0.3,
            }
          });
        });
      }

      // Mission Critical: 3D Perspective Tilt
      if (slug === "mission-critical") {
        gsap.from(".deliverable-item", {
          y: 80,
          rotateX: 15,
          opacity: 0,
          stagger: 0.1,
          transformPerspective: 800,
          ease: "power2.out",
          scrollTrigger: {
            trigger: ".deliverables-grid",
            start: "top 75%",
            end: "bottom 25%",
            scrub: 0.3
          }
        });
      }

      // 3. HERO ENTRANCE (Simple)
      gsap.from(".hero-text-content", {
        opacity: 0,
        y: 30,
        duration: 1,
        delay: 0.5,
        ease: "power2.out"
      });

      // 4. REFRESH
      ScrollTrigger.refresh();
    }, mainRef);

    return () => ctx.revert();
  }, [slug, isRTL]);

  type ValidScene = 'digital' | 'ai' | 'cyber' | 'elv' | 'dataCenter' | 'solutions';
  const slugToScene: Record<string, ValidScene> = {
    'digital-transformation': 'digital',
    'ai-data': 'ai',
    'cybersecurity': 'cyber',
    'elv-smart-systems': 'elv',
    'mission-critical': 'dataCenter',
  };
  const heroScene: ValidScene = slugToScene[slug] ?? 'solutions';

  return (
    <div className={cn(isRTL ? "font-cairo" : "font-inter")}>
      <Navbar />
      <main ref={mainRef} className="bg-white dark:bg-brand-navy overflow-hidden">
        
        {/* SECTION 1: Hero */}
        <section ref={heroRef} className="hero-section-trigger relative min-h-screen flex items-center overflow-hidden">
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0" style={{ background: "linear-gradient(135deg, #0D1B2A 0%, #0F2A4A 25%, #1A3A6B 60%, #1A56DB 100%)" }} />
            <div className="absolute pointer-events-none" style={{ top: "-20%", left: "-10%", width: "60%", height: "140%", background: "linear-gradient(135deg, rgba(255,255,255,0.04) 0%, transparent 50%)", transform: "rotate(-15deg)" }} />
            <div className="absolute pointer-events-none" style={{ top: "-30%", right: "-5%", width: "50%", height: "130%", background: "linear-gradient(225deg, rgba(26,86,219,0.15) 0%, transparent 60%)", transform: "rotate(10deg)" }} />
            <div className="relative z-[1]"><SceneWrapper scene={heroScene} /></div>
          </div>

          <div className="hero-text-content container max-w-7xl mx-auto px-6 relative z-10 pt-20">
            {/* Breadcrumb */}
            <div className={cn("flex items-center gap-2 text-white/50 text-[13px] font-medium mb-4", isRTL && "flex-row-reverse")}>
              <Link href="/solutions" className="hover:text-white transition-colors">{t("nav.solutions")}</Link>
              {isRTL ? <ChevronLeft size={12} /> : <ChevronRight size={12} />}
              <span className="text-white/80">{name}</span>
            </div>

            <div className={cn("max-w-2xl", isRTL ? "text-right" : "text-left")}>
              <span className="inline-flex px-4 py-1.5 rounded-full bg-white/10 border border-white/20 text-white/80 text-[11px] font-bold uppercase tracking-[0.25em] mb-4">
                {category}
              </span>

              <h1 className="text-5xl md:text-6xl font-bold tracking-tight text-white mb-4 font-outfit leading-tight">
                {name}
              </h1>

              <p className="text-[17px] text-white/65 font-light mt-4 max-w-xl leading-relaxed">
                {description}
              </p>

              <div className={cn("flex flex-wrap gap-4 mt-8", isRTL && "flex-row-reverse")}>
                <Link href="/contact"
                  className="px-7 py-3.5 rounded-full bg-white text-[#0D1B2A] text-[14px] font-bold tracking-tight hover:bg-[#F8FAFF] hover:scale-[1.02] transition-all duration-200">
                  Schedule a Consultation
                </Link>
                <Link href="/contact"
                  className="px-7 py-3.5 rounded-full border-2 border-white/30 text-white text-[14px] font-semibold hover:border-white/60 hover:bg-white/10 transition-all duration-200">
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Reduced Girth & Opacity Transition */}
        <div className="h-12 w-full bg-gradient-to-b from-[#0D1B2A]/30 to-transparent pointer-events-none -mt-px" />

        {/* SECTION 2: Overview */}
        <section className="py-20 bg-white dark:bg-brand-navy">
          <div className="container max-w-7xl mx-auto px-6">
            <div className="mb-14">
              <span className="text-[14px] font-bold tracking-[0.2em] text-[#1A56DB] uppercase mb-5 flex items-center gap-3">
                <span className="w-7 h-[2px] bg-[#1A56DB] rounded-full" />{category}
              </span>
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight font-outfit text-brand-navy dark:text-white">
                {t("solutions.detail.deliver_title")}
              </h2>
            </div>

            <div className="deliverables-grid grid grid-cols-1 md:grid-cols-3 gap-8">
              {deliverables.map((item, i) => (
                <div key={i}
                  className={cn("deliverable-item p-6 rounded-xl border border-[#E2EAF8] bg-[#F8FAFF] dark:bg-white/5 dark:border-white/10",
                    isRTL ? "text-right" : "text-left")}>
                  <div className="deliverable-icon-box w-12 h-12 rounded-xl bg-[#EEF4FF] border border-[#DBEAFE] flex items-center justify-center mb-4 text-[#1A56DB]">
                    {item.icon}
                  </div>
                  <h4 className="text-[17px] font-bold text-[#0D1B2A] dark:text-white mb-2 tracking-tight">{item.title}</h4>
                  <p className="text-[15px] text-[#64748B] dark:text-white/55 leading-relaxed">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION 3: Approach */}
        <section className="py-20 bg-[#F8FAFF] dark:bg-white/[0.02]">
          <div className="container max-w-7xl mx-auto px-6">
            <h2 className="text-4xl font-bold tracking-tight font-outfit text-brand-navy dark:text-white mb-14">
              {t("solutions.detail.approach")}
            </h2>

            <div className="space-y-8">
              {approach.map((item, i) => (
                <div key={i} className={cn("approach-item flex items-start gap-6", isRTL && "flex-row-reverse")}>
                  <div className="text-[56px] font-black text-[#1A56DB]/10 leading-none w-20 flex-shrink-0 select-none">
                    0{i + 1}
                  </div>
                  <div className="flex-1 pt-2">
                    <h3 className="text-[20px] font-bold text-[#0D1B2A] dark:text-white tracking-tight mb-2">
                      {item.title}
                    </h3>
                    <p className="text-[15px] text-[#64748B] dark:text-white/55 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION 4: How We Deliver */}
        <section className="animate-section py-32 bg-white dark:bg-brand-navy overflow-hidden">
          <div className="container max-w-7xl mx-auto px-6">
            <div className="mb-20 text-center">
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight font-outfit text-brand-navy dark:text-white mb-6">
                {t("solutions.detail.how_deliver")}
              </h2>
              <p className="text-brand-muted dark:text-white/40 max-w-xl mx-auto">
                {t("solutions.detail.deliver_desc")}
              </p>
            </div>

            {/* Timeline - Horizontal on Desktop, Vertical on Mobile */}
            <div className="relative">
              {/* Desktop Line */}
              <div className="hidden lg:block absolute top-12 left-0 right-0 h-[2px] bg-brand-surface dark:bg-white/10 z-0" />
              
              <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-6">
                {timelineSteps.map((step, i) => (
                  <div
                    key={i}
                    className="timeline-item flex flex-col items-center text-center relative z-10"
                  >
                    <div className="w-12 h-12 rounded-full bg-brand-blue text-white flex items-center justify-center font-bold mb-6 shadow-lg shadow-brand-blue/30 border-4 border-white dark:border-brand-navy group-hover:scale-110 transition-transform">
                      {i + 1}
                    </div>
                    <h4 className="text-sm font-black text-brand-navy dark:text-white mb-2 uppercase tracking-tighter">
                      {step.title}
                    </h4>
                    <p className="text-[11px] text-brand-muted dark:text-white/40 font-medium">
                      {step.brief}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 5: Image Banner */}
        <section className="relative h-[280px] w-full overflow-hidden">
          <Image src={bannerImage} alt="Single-point accountability" fill className="object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0D1B2A]/80 via-[#0D1B2A]/40 to-transparent" />
          <div className="absolute bottom-8 left-8">
            <p className="text-[18px] italic text-white/80 max-w-xl leading-relaxed">
              {t("solutions.detail.ctabanner")}
            </p>
          </div>
        </section>

        {children && (
          <div className="bg-white dark:bg-brand-navy">
            {children}
          </div>
        )}

        {/* Reduced Girth & Opacity Transition */}
        <div className="h-12 w-full bg-gradient-to-b from-transparent to-[#0D1B2A]/20 pointer-events-none" />

        {/* SECTION 6: CTA */}
        <section className="relative py-24 overflow-hidden text-center">
          <div className="absolute inset-0" style={{ background: "linear-gradient(135deg, #0D1B2A 0%, #0F2A4A 30%, #1A3A6B 65%, #1A56DB 100%)" }} />
          <div className="absolute inset-0 pointer-events-none overflow-hidden">
            <div className="absolute" style={{ top: "-20%", left: "-10%", width: "60%", height: "140%", background: "linear-gradient(135deg, rgba(255,255,255,0.04) 0%, transparent 50%)", transform: "rotate(-15deg)" }} />
            <div className="absolute" style={{ top: "-30%", right: "-5%", width: "50%", height: "130%", background: "linear-gradient(225deg, rgba(26,86,219,0.15) 0%, transparent 60%)", transform: "rotate(10deg)" }} />
          </div>
          <div className="relative z-10 container max-w-3xl mx-auto px-6">
            <h2 className="text-4xl font-bold tracking-tight font-outfit text-white mb-4">
              {t("solutions.cta_title")}
            </h2>
            <p className="text-[17px] text-white/60 mb-10 leading-relaxed">
              {t("solutions.cta_sub")}
            </p>
            <div className="flex items-center justify-center gap-4 flex-wrap">
              <Link href="/contact"
                className="px-7 py-3.5 rounded-full bg-white text-[#0D1B2A] text-[14px] font-bold tracking-tight hover:bg-[#F8FAFF] hover:scale-[1.02] transition-all duration-200">
                Schedule a Consultation
              </Link>
              <Link href="/solutions"
                className="px-7 py-3.5 rounded-full border-2 border-white/30 text-white text-[14px] font-semibold hover:border-white/60 hover:bg-white/10 transition-all duration-200">
                View All Solutions
              </Link>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </div>
  );
}
