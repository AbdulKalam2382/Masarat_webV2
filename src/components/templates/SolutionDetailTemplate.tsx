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
      // 1. STANDARD CINEMATIC ENTRANCES
      gsap.utils.toArray<Element>("h1, h2, h3").forEach((heading) => {
        gsap.from(heading, {
          clipPath: "inset(100% 0% 0% 0%)",
          y: 50,
          opacity: 0,
          duration: 1,
          scrollTrigger: {
            trigger: heading,
            start: "top 90%",
            end: "top 60%",
            scrub: 0.3,
          }
        });
      });

      gsap.utils.toArray<Element>(".solution-card, .deliverable-item").forEach((card) => {
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

      // 3. HERO PINNING & SEQUENCING
      const heroTl = gsap.timeline({
        scrollTrigger: {
          trigger: ".hero-section-trigger",
          start: "top top",
          end: "+=150%", // Pin for 1.5x the screen height
          pin: true,
          scrub: 1,
        }
      });

      // Text reveals as animation dismantles
      heroTl.fromTo(".hero-text-content", 
        { opacity: 0, y: 50 }, 
        { opacity: 1, y: 0, duration: 1, ease: "power2.out" }
      );

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
        <section ref={heroRef} className="hero-section-trigger relative min-h-screen flex items-center overflow-hidden bg-[#0D1B2A]">
          <SceneWrapper scene={heroScene} />

          <div className="hero-text-content container max-w-7xl mx-auto px-6 relative z-10 pt-20 opacity-0">
            {/* Breadcrumb */}
            <div 
              className={cn("flex items-center gap-2 text-white/40 text-[10px] font-black uppercase tracking-[0.3em] mb-12", isRTL && "flex-row-reverse")}
            >
              <Link href="/solutions" className="hover:text-brand-blue-soft transition-colors">{t("nav.solutions")}</Link>
              {isRTL ? <ChevronLeft size={10} /> : <ChevronRight size={10} />}
              <span className="text-white/80">{name}</span>
            </div>

            <div className={cn("max-w-4xl", isRTL ? "text-right" : "text-left")}>
              <span
                className="inline-block px-5 py-2 rounded-full bg-brand-blue/20 border border-brand-blue/30 text-brand-blue-soft text-[10px] font-black uppercase tracking-[0.3em] mb-8"
              >
                {category}
              </span>
              
              <h1
                className="text-5xl md:text-8xl font-bold tracking-tighter text-white mb-8 font-outfit leading-[0.95]"
              >
                {name}
              </h1>

              <p
                className="text-lg md:text-xl text-white/60 font-light mb-12 max-w-xl leading-relaxed"
              >
                {description}
              </p>
              
              <div
                className={cn("flex flex-wrap gap-4", isRTL && "flex-row-reverse")}
              >
                <Link 
                  href="/contact" 
                  className="bg-brand-blue text-white px-10 py-5 rounded-full font-bold hover:bg-brand-blue-soft transition-all hover:scale-105 shadow-xl shadow-brand-blue/20 uppercase tracking-widest text-xs"
                >
                  {t("nav.cta")}
                </Link>
                <Link
                  href="/contact"
                  className="bg-white/10 text-white border border-white/20 px-10 py-5 rounded-full font-bold hover:bg-white/20 transition-all uppercase tracking-widest text-xs backdrop-blur-md"
                >
                  {t("solutions.detail.download")}
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Gradient transition: dark → light */}
        <div className="h-24 w-full bg-gradient-to-b from-[#0D1B2A] to-[#F8FAFF] pointer-events-none" />

        {/* SECTION 2: Overview */}
        <section className="animate-section py-32 bg-white dark:bg-brand-navy">
          <div className="container max-w-7xl mx-auto px-6">
            <div className="mb-20">
              <span className="text-[10px] font-black tracking-[0.3em] text-brand-blue uppercase mb-4 block">
                {category}
              </span>
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight font-outfit text-brand-navy dark:text-white">
                {t("solutions.detail.deliver_title")}
              </h2>
            </div>
 
            <div className="deliverables-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
              {deliverables.map((item, i) => (
                <div
                  key={i}
                  className={cn(
                    "deliverable-item flex flex-col gap-6",
                    isRTL ? "items-end text-right" : "items-start text-left"
                  )}
                >
                  <div className="deliverable-icon-box w-14 h-14 rounded-full bg-brand-blue text-white flex items-center justify-center shadow-lg shadow-brand-blue/20">
                    {item.icon}
                  </div>
                  <div className="space-y-3 overflow-hidden">
                    <h4 className="text-lg font-bold text-brand-navy dark:text-white tracking-tight whitespace-nowrap overflow-hidden origin-left">{item.title}</h4>
                    <p className="text-sm text-brand-muted dark:text-white/40 leading-relaxed font-medium">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION 3: Approach */}
        <section className="animate-section py-32 bg-brand-surface dark:bg-white/[0.02]">
          <div className="container max-w-7xl mx-auto px-6">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight font-outfit text-brand-navy dark:text-white mb-20">
              {t("solutions.detail.approach")}
            </h2>

            <div className="space-y-24">
              {approach.map((item, i) => (
                <div
                  key={i}
                  className="approach-item relative group max-w-3xl"
                >
                  <div className={cn(
                    "absolute -top-16 text-[100px] md:text-[140px] font-black text-brand-blue/[0.06] dark:text-white/[0.04] leading-none pointer-events-none select-none z-0 transition-all group-hover:scale-110",
                    isRTL ? "-right-8" : "-left-8"
                  )}>
                    0{i + 1}
                  </div>
                  <div className="relative z-10 pt-4">
                    <h3 className="text-2xl md:text-3xl font-bold text-brand-navy dark:text-white mb-4 tracking-tight">
                      {item.title}
                    </h3>
                    <p className="text-base md:text-lg text-brand-muted dark:text-white/40 leading-relaxed font-light">
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
          <Image
            src={bannerImage}
            alt="Single-point accountability"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-brand-navy/60 backdrop-blur-[2px] flex items-center justify-center p-6">
            <h3 className="text-xl md:text-3xl font-light text-white text-center max-w-3xl leading-relaxed">
              {t("solutions.detail.ctabanner")}
            </h3>
          </div>
        </section>

        {children && (
          <div className="bg-white dark:bg-brand-navy">
            {children}
          </div>
        )}

        {/* Gradient transition: light → dark */}
        <div className="h-24 w-full bg-gradient-to-b from-[#F8FAFF] to-[#0D1B2A] pointer-events-none" />

        {/* SECTION 6: CTA */}
        <section className="animate-section py-32 bg-brand-navy text-center">
          <div className="container max-w-4xl mx-auto px-6">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight font-outfit text-white mb-8">
              {t("solutions.cta_title")}
            </h2>
            <p className="text-xl text-white/50 mb-12 font-light">
              {t("solutions.cta_sub")}
            </p>
            <Link
              href="/contact"
              className="inline-block px-12 py-5 bg-brand-blue text-white rounded-full font-bold text-sm uppercase tracking-widest hover:bg-brand-blue-soft hover:shadow-2xl hover:shadow-brand-blue-soft/20 transition-all"
            >
              {t("nav.cta")}
            </Link>
          </div>
        </section>

      </main>
      <Footer />
    </div>
  );
}
