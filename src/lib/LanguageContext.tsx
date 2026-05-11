'use client'
import React, { 
  createContext, 
  useContext, 
  useState, 
  useEffect,
  ReactNode 
} from 'react'

type Language = 'en' | 'ar'

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  isRTL: boolean
  t: (key: string) => string
}

const enTranslations = {
  nav: {
    solutions: "Solutions",
    about: "About",
    career: "Career",
    resources: "Resources",
    contact: "Contact",
    cta: "Schedule a Consultation",
    dropdowns: {
      about: {
        who_we_are: { title: "Who We Are", brief: "Our legacy and commitment to Kuwait." },
        vision_mission: { title: "Vision & Mission", brief: "The pillars of our corporate strategy." },
        delivery_model: { title: "Delivery Model", brief: "How we ensure mission-critical success." },
        tech_partners: { title: "Tech Partners", brief: "Collaborating with global leaders." }
      },
      solutions: {
        enterprise: { title: "Enterprise Transformation & Digital Platforms", brief: "Enterprise transformation & automation." },
        ai_data: { title: "AI Data & Intelligent Systems", brief: "Intelligent systems & advanced analytics." },
        cybersecurity: { title: "Cybersecurity & Digital Trust", brief: "Digital trust & infrastructure protection." },
        elv: { title: "ELV & Smart Systems", brief: "Integrated building & security solutions." },
        infrastructure: { title: "Mission-Critical Infrastructure & Data Centers", brief: "Data centers & mission-critical systems." }
      },
      resources: {
        knowledge: { title: "Knowledge Hub", brief: "Insights on emerging technologies." },
        case_studies: { title: "Case Studies", brief: "Our proven track record in action." },
        downloads: { title: "Downloads", brief: "Whitepapers and corporate profiles." }
      },
      career: {
        why_masarat: { title: "Why Masarat", brief: "Our values and work culture." },
        benefits: { title: "Perks & Benefits", brief: "How we take care of our people." },
        positions: { title: "Open Positions", brief: "Join the elite team in Kuwait." }
      }
    }
  },
  hero: {
    label: "Industry's Leading IT Partner",
    line1: "WE ARCHITECT",
    line2: "DIGITAL TRUST.",
    line3: "INTELLIGENTLY.",
    sub: "AI Ops · Enterprise Intelligence · Cybersecurity · Infrastructure",
    btn1: "Explore Solutions",
    btn2: "Contact Us",
    scroll: "Scroll"
  },
  home: {
    vision_eyebrow: "Our Vision",
    vision_text: "To be the most trusted architect of digital intelligence and national infrastructure in Kuwait.",
    mission_eyebrow: "Our Mission",
    mission_text: "To deliver mission-critical technology solutions with single-point accountability and proven execution excellence.",
    power_quote: "Technology is the lever. Trust is the fulcrum.",
    power_sub: "We don't just deploy systems; we architect institutional resilience.",
    power_btn: "Our Approach",
    learn_more: "Learn More",
    cta_title: "Ready to transform your organisation?",
    cta_sub: "Partner with Masarat Technologies for integrated, mission-critical technology delivery across Kuwait.",
    cta_btn2: "View Our Capabilities →"
  },
  about_page: {
    kicker: "About Masarat",
    title: "Partners in Success.",
    body: "Masarat Technologies is a leading enterprise IT solutions provider based in Kuwait. \n\nWe specialize in architecting the mission-critical pillars of digital transformation — from national cybersecurity to intelligent infrastructure.",
    quality_title: "Enterprise Excellence & Compliance",
    quality_body: "Our solutions are governed by international standards and local regulatory frameworks, ensuring your institution remains compliant, secure, and resilient.",
    quality_footer: "ISO 27001 · SOC2 · NCA Compliant · CITRA Certified",
    quality_iso1: "ISO 27001 Certified",
    quality_iso2: "SOC2 Type II Compliant",
    quality_iso3: "NCA & CITRA Certified",
    challenges_title: "Solving Kuwait's Toughest Tech Challenges.",
    challenge1_title: "Data Sovereignty",
    challenge1_desc: "Architecting systems that keep Kuwait's data safe and localized within national borders.",
    challenge2_title: "Legacy Modernization",
    challenge2_desc: "Transforming aging infrastructure into high-performance digital platforms without operational downtime.",
    challenge3_title: "Cyber Resilience",
    challenge3_desc: "Building proactive defense systems against evolving global and regional cyber threats.",
    challenges_callout: "We don't just solve problems; we architect long-term institutional stability."
  },
  about: {
    kicker: "Who We Are",
    title: "Architecting Digital Trust since 2026.",
    body: "Based in the heart of Kuwait, Masarat Technologies was founded to bridge the gap between complex global technologies and local institutional needs. We are more than an IT provider; we are strategic architects of the digital future.",
    metrics: {
      m1t: "Mission-Critical",
      m1d: "Environments we operate in",
      m2t: "End-to-End",
      m2d: "Ownership & accountability"
    }
  },
  solutions: {
    kicker: "Our Capabilities",
    page_kicker: "Integrated Solutions",
    page_title: "Integrated Solutions.",
    page_sub: "Five capabilities. One accountable partner.",
    what_we_solve_kicker: "What We Solve",
    what_we_solve_title: "What We Solve",
    what_we_solve_desc: "Our capabilities span the full enterprise stack — from digital platforms and AI to physical infrastructure and data centers.",
    title: "Integrated Solutions.",
    link: "Know More",
    cta_title: "Ready to get started?",
    cta_sub: "Talk to our solutions team about your specific requirements.",
    cta_btn1: "Schedule a Consultation",
    domain_intelligence_en: "Intelligence",
    domain_intelligence_ar: "ذكاء",
    domain_security_en: "Security",
    domain_security_ar: "أمن",
    domain_infrastructure_en: "Infrastructure",
    domain_infrastructure_ar: "بنية تحتية",
    domain_critical_en: "Mission-Critical",
    domain_critical_ar: "حيوي",
    domain_enterprise_en: "Enterprise",
    domain_enterprise_ar: "مؤسسي",
    s1title: "Enterprise Transformation & Digital Platforms",
    s1desc: "Enabling organisations to redesign, automate, and scale their core operations.",
    s2title: "AI, Data & Intelligent Systems",
    s2desc: "Building the data and AI foundation for intelligent decision-making.",
    s3title: "Cybersecurity & Digital Trust",
    s3desc: "Protecting critical environments through enterprise-grade security frameworks.",
    s4title: "ELV & Smart Systems",
    s4desc: "Designing and implementing integrated physical and smart environments.",
    s5title: "Mission-Critical Infrastructure",
    s5desc: "Specialized data center and critical environment lifecycle management.",
    detail: {
      overview: "Overview",
      process: "Methodology",
      approach: "Our Approach",
      why: "The Advantage",
      deliver_title: "What We Deliver",
      deliver_desc: "Our proven delivery model in practice.",
      how_deliver: "How We Deliver",
      download: "Download Overview",
      ctabanner: "Delivered with single-point accountability and proven execution capability.",
      cta: "Schedule a Consultation",
      btn1: "Get Started",
      timeline: {
        s1t: "Assessment & Planning", "s1d": "Understanding requirements",
        s2t: "Architecture & Design", "s2d": "Building the blueprint",
        s3t: "Implementation & Integration", "s3d": "Actual deployment",
        s4t: "Testing & Deployment", "s4d": "Ensuring quality",
        s5t: "Operations & Optimization", "s5d": "Ongoing support"
      }
    }
  },
  sectors: {
    kicker: "Sectors We Serve",
    title: "Trusted across Kuwait's most demanding industries.",
    desc: "From government and banking to oil & gas and enterprise infrastructure — our solutions are designed for environments where performance, security, and reliability are non-negotiable.",
    s1t: "Government & Regulatory",
    s1d: "Central Bank of Kuwait and government institutions",
    s2t: "Banking & Financial Services",
    s2d: "Kuwait's leading banks and financial institutions",
    s3t: "Oil & Gas",
    s3d: "KOC, KGOC and energy sector infrastructure",
    s4t: "Enterprise & Private Sector",
    s4d: "Regional enterprises, healthcare & telecoms"
  },
  footer: {
    copy: "© 2026 Masarat Technologies · Kuwait",
    tagline: "Architecting Digital Trust & Enterprise Intelligence",
    insights: "Knowledge Hub",
    privacy: "Privacy Policy",
    terms: "Terms of Service",
    nav_label: "Navigation",
    connect_label: "Technology Partners",
    support_label: "Support Inquiry"
  },
  insights_page: {
    kicker: "Knowledge Hub",
    title: "Insights.",
    body: "Strategic intelligence on cybersecurity, AI, and the future of enterprise technology in Kuwait.",
    home_title: "Latest Insights.",
    home_link: "View Knowledge Hub",
    read_article: "Read Article",
    read_time: "min read"
  },
  career_page: {
    kicker: "Why work at Masarat?",
    hero_title: "Let's Build Together",
    hero_sub: "Be part of the team architecting the digital future of Kuwait.",
    hero_cta: "View Openings",
    why_title: "Why Masarat?",
    why_statement: "We foster a culture of excellence, innovation, and local impact.",
    benefits_title: "Perks & Benefits",
    culture_title: "Our Culture",
    culture_quote: "Building the future of Kuwait, together.",
    positions_title: "Current Openings",
    no_positions_title: "No current openings",
    no_positions_desc: "We are always looking for exceptional talent. Send us your CV for future opportunities.",
    send_cv: "Send Your CV",
    email: "careers@masaratkwt.com",
    v1t: "Integrity", "v1d": "We uphold the highest standards of professional trust.",
    v2t: "Innovation", "v2d": "Driving the next wave of intelligent systems.",
    v3t: "Impact", "v3d": "Creating real value for Kuwait's digital landscape.",
    b1t: "Premium Healthcare", "b1d": "Comprehensive coverage for you and your family.",
    b2t: "Continuous Learning", "b2d": "Access to global certifications and training.",
    b3t: "Flexible Work", "b3d": "Dynamic environment with hybrid work options.",
    b4t: "Performance Bonus", "b4d": "Rewarding excellence and strategic contributions.",
    b5t: "Modern Workspace", "b5d": "State-of-the-art facilities designed for collaboration.",
    b6t: "Wellness Program", "b6d": "Monthly activities focused on mental and physical health.",
    p1t: "Trust & Accountability", "p1d": "We take full ownership of our commitments and results.",
    p2t: "National Vision", "p2d": "Contributing to Kuwait's 2035 vision through digital excellence.",
    p3t: "Elite Talent", "p3d": "Work alongside the best engineers and consultants in the region."
  },
  contact_page: {
    kicker: "Contact Us",
    title: "Advisory.",
    title_accent: "great.",
    body: "Connect with our strategic consultants to architect your institution's digital future.",
    website_label: "Website",
    email_label: "Email",
    phone_label: "Phone",
    form_firstname: "First name",
    form_lastname: "Last name",
    form_email: "Work email",
    form_company: "Company name",
    form_message: "Tell us about your project...",
    form_submit: "Send Message",
    form_sending: "Sending...",
    form_sent: "Message Sent ✓",
    form_success: "We will be in touch soon.",
    form_error: "Something went wrong. Try again."
  },
  services: {
    kicker: "Core Capabilities",
    link: "Explore All Solutions",
    learnmore: "Know More →",
    sectors_kicker: "Sectors We Serve",
    sectors_title: "Industry expertise.",
    s1title: "Strategic Advisory",
    s1desc: "Consulting on digital roadmaps and readiness.",
    s2title: "System Integration",
    s2desc: "Seamlessly connecting complex enterprise environments.",
    s3title: "Managed Services",
    s3desc: "24/7 mission-critical operations and support.",
    s4title: "Cloud Excellence",
    s4desc: "Hybrid and multi-cloud architecture and migration.",
    s5title: "Security Operations",
    s5desc: "Continuous monitoring and threat intelligence."
  },
  process: {
    kicker: "The Methodology",
    title: "Delivered with Precision.",
    p1t: "Discovery & Advisory",
    p1d: "Strategic alignment with your institutional goals. We deep-dive into your existing infrastructure, security posture, and data maturity to define a clear transformation roadmap.",
    p2t: "Architecture & Design",
    p2d: "Engineering the blueprint for success. We design high-availability, high-performance systems that are resilient, scalable, and built on zero-trust principles.",
    p3t: "Implementation & Integration",
    p3d: "Zero-downtime execution with full accountability. Our engineering teams handle system integration across all layers — network, application, data, and security.",
    p4t: "Testing & Deployment",
    p4d: "Rigorous multi-phase validation before any go-live. Every deployment is governed by a formal Method of Procedure (MOP) with full rollback capability.",
    callouts: {
      c1t: "MOP-Governed Execution",
      c1d: "Every deployment follows a formal Method of Procedure with step-by-step validation gates and rollback plans.",
      c2t: "Zero-Downtime Transitions",
      c2d: "Live environment upgrades and migrations executed with minimal disruption to ongoing operations.",
      c3t: "Post-Deployment Stabilisation",
      c3d: "Dedicated hypercare period after go-live with intensive monitoring, rapid response, tuning support."
    }
  },
  common: {
    loading: "Loading...",
    error: "Something went wrong",
    back_home: "Back to Home",
    page_not_found: "Page not found",
    offline: "You are offline",
    check_connection: "Please check your connection",
    skip: "Click to skip"
  }
}

const arTranslations = {
  nav: {
    solutions: "الحلول",
    about: "من نحن",
    career: "الوظائف",
    resources: "الموارد",
    contact: "تواصل معنا",
    cta: "حجز استشارة",
    dropdowns: {
      about: {
        who_we_are: { title: "من نحن", brief: "تراثنا والتزامنا تجاه الكويت." },
        vision_mission: { title: "الرؤية والرسالة", brief: "ركائز استراتيجية شركتنا." },
        delivery_model: { title: "نموذج التسليم", brief: "كيف نضمن نجاح المشاريع الحيوية." },
        tech_partners: { title: "شركاء التقنية", brief: "التعاون مع القادة العالميين." }
      },
      solutions: {
        enterprise: { title: "التحول المؤسسي والمنصات الرقمية", brief: "التحول المؤسسي والأتمتة." },
        ai_data: { title: "الذكاء الاصطناعي والأنظمة الذكية", brief: "الأنظمة الذكية والتحليلات المتقدمة." },
        cybersecurity: { title: "الأمن السيبراني والثقة الرقمية", brief: "الثقة الرقمية وحماية البنية التحتية." },
        elv: { title: "أنظمة ELV والأنظمة الذكية", brief: "حلول المباني والأمن المتكاملة." },
        infrastructure: { title: "البنية التحتية الحيوية ومراكز البيانات", brief: "مراكز البيانات والأنظمة الحساسة." }
      },
      resources: {
        knowledge: { title: "مركز المعرفة", brief: "رؤى حول التقنيات الناشئة." },
        case_studies: { title: "دراسات الحالة", brief: "سجل إنجازاتنا المثبت في العمل." },
        downloads: { title: "التحميلات", brief: "الأوراق البيضاء وملفات الشركة." }
      },
      career: {
        why_masarat: { title: "لماذا مسارات", brief: "قيمنا وثقافة عملنا." },
        benefits: { title: "المزايا والفوائد", brief: "كيف نعتني بموظفينا." },
        positions: { title: "الوظائف الشاغرة", brief: "انضم إلى فريق النخبة في الكويت." }
      }
    }
  },
  hero: {
    label: "شريك تقنية المعلومات الرائد في الصناعة",
    line1: "نحن نبني",
    line2: "الثقة الرقمية.",
    line3: "على نطاق واسع.",
    sub: "عمليات الذكاء الاصطناعي · الذكاء المؤسسي · الأمن السيبراني · البنية التحتية",
    btn1: "استكشف الحلول",
    btn2: "تواصل معنا",
    scroll: "اسحب لأسفل"
  },
  home: {
    vision_eyebrow: "رؤيتنا",
    vision_text: "أن نكون الشريك الأكثر ثقة في بناء الذكاء الرقمي والبنية التحتية الوطنية في الكويت.",
    mission_eyebrow: "رؤيتنا",
    mission_text: "تقديم حلول تقنية حيوية مع مسؤولية نقطة واحدة وتميز مشهود في التنفيذ.",
    power_quote: "التقنية هي الرافعة. والثقة هي المرتكز.",
    power_sub: "نحن لا نقوم فقط بنشر الأنظمة؛ نحن نبني المرونة المؤسسية.",
    power_btn: "نهجنا",
    learn_more: "اعرف المزيد",
    cta_title: "هل أنت مستعد لتحويل مؤسستك؟",
    cta_sub: "كن شريكاً مع مسارات تكنولوجيز لتقديم تقنية متكاملة ومهمة عبر الكويت.",
    cta_btn2: "عرض قدراتنا ←"
  },
  about_page: {
    kicker: "عن مسارات",
    title: "شركاء في النجاح.",
    body: "مسارات تكنولوجيز هي شركة رائدة في تقديم حلول تقنية المعلومات للمؤسسات ومقرها الكويت. \n\nنحن متخصصون في بناء الركائز الحيوية للتحول الرقمي — من الأمن السيبراني الوطني إلى البنية التحتية الذكية.",
    quality_title: "التميز المؤسسي والامتثال",
    quality_body: "تخضع حلولنا للمعايير الدولية والأطر التنظيمية المحلية، مما يضمن بقاء مؤسستك ممتثلة وآمنة ومرنة.",
    quality_footer: "ISO 27001 · SOC2 · NCA Compliant · CITRA Certified",
    quality_iso1: "شهادة ISO 27001",
    quality_iso2: "امتثال SOC2 Type II",
    quality_iso3: "اعتماد NCA و CITRA",
    challenges_title: "حل أصعب التحديات التقنية في الكويت.",
    challenge1_title: "سيادة البيانات",
    challenge1_desc: "هندسة الأنظمة التي تحافظ على سلامة بيانات الكويت وتوطينها داخل الحدود الوطنية.",
    challenge2_title: "تحديث الأنظمة القديمة",
    challenge2_desc: "تحويل البنية التحتية المتهالكة إلى منصات رقمية عالية الأداء دون توقف العمليات.",
    challenge3_title: "المرونة السيبرانية",
    challenge3_desc: "بناء أنظمة دفاع استباقية ضد التهديدات السيبرانية العالمية والإقليمية المتطورة.",
    challenges_callout: "نحن لا نحل المشاكل فحسب؛ بل نبني استقراراً مؤسسياً طويل الأمد."
  },
  about: {
    kicker: "من نحن",
    title: "بناء الثقة الرقمية منذ عام ٢٠٢٦.",
    body: "تأسست مسارات تكنولوجيز في قلب الكويت لردم الفجوة بين التقنيات العالمية المعقدة والاحتياجات المؤسسية المحلية. نحن أكثر من مجرد مزود لخدمات تقنية المعلومات؛ نحن المعماريون الاستراتيجيون للمستقبل الرقمي.",
    metrics: {
      m1t: "بيئات حيوية",
      m1d: "البيئات التي نعمل فيها",
      m2t: "من البداية للنهاية",
      m2d: "الملكية والمسؤولية الكاملة"
    }
  },
  solutions: {
    kicker: "قدراتنا",
    page_kicker: "حلول متكاملة",
    page_title: "حلول متكاملة.",
    page_sub: "خمس قدرات أساسية. شريك واحد مسؤول.",
    what_we_solve_kicker: "ما نقوم بحله",
    what_we_solve_title: "ما نقوم بحله",
    what_we_solve_desc: "تغطي قدراتنا مجموعة المؤسسة الكاملة - من المنصات الرقمية والذكاء الاصطناعي إلى البنية التحتية المادية ومراكز البيانات.",
    title: "حلول متكاملة.",
    link: "اعرف المزيد",
    cta_title: "هل أنت مستعد للبدء؟",
    cta_sub: "تحدث مع فريق الحلول لدينا حول متطلباتك المحددة.",
    cta_btn1: "حجز استشارة",
    domain_intelligence_en: "Intelligence",
    domain_intelligence_ar: "ذكاء",
    domain_security_en: "Security",
    domain_security_ar: "أمن",
    domain_infrastructure_en: "Infrastructure",
    domain_infrastructure_ar: "بنية تحتية",
    domain_critical_en: "Mission-Critical",
    domain_critical_ar: "حيوي",
    domain_enterprise_en: "Enterprise",
    domain_enterprise_ar: "مؤسسي",
    s1title: "التحول المؤسسي والمنصات الرقمية",
    s1desc: "تمكين المؤسسات من إعادة تصميم وأتمتة وتوسيع عملياتها الأساسية.",
    s2title: "الذكاء الاصطناعي والبيانات والأنظمة الذكية",
    s2desc: "بناء أساس البيانات والذكاء الاصطناعي لاتخاذ قرارات ذكية.",
    s3title: "الأمن السيبراني والثقة الرقمية",
    s3desc: "حماية البيئات الحيوية من خلال أطر أمنية مؤسسية.",
    s4title: "أنظمة ELV والأنظمة الذكية",
    s4desc: "تصميم وتنفيذ البيئات المادية والذكية المتكاملة.",
    s5title: "البنية التحتية الحيوية",
    s5desc: "إدارة متخصصة لمراكز البيانات ودورة حياة البيئات الحيوية.",
    detail: {
      overview: "نظرة عامة",
      process: "المنهجية",
      approach: "نهجنا",
      why: "الميزة",
      deliver_title: "ما نقوم بتسليمه",
      deliver_desc: "نموذج التسليم المعتمد لدينا في الممارسة العملية.",
      how_deliver: "كيف نقوم بالتسليم",
      download: "تحميل الملف",
      ctabanner: "يتم التسليم مع مسؤولية نقطة واحدة وقدرة تنفيذ مثبتة.",
      cta: "حجز استشارة",
      btn1: "ابدأ الآن",
      timeline: {
        s1t: "التقييم والتخطيط", "s1d": "فهم المتطلبات",
        s2t: "الهندسة والتصميم", "s2d": "بناء المخطط",
        s3t: "التنفيذ والتكامل", "s3d": "النشر الفعلي",
        s4t: "الاختبار والنشر", "s4d": "ضمان الجودة",
        s5t: "العمليات والتحسين", "s5d": "الدعم المستمر"
      }
    }
  },
  sectors: {
    kicker: "القطاعات التي نخدمها",
    title: "موثوقون في أهم الصناعات وأكثرها تطلباً في الكويت.",
    desc: "من القطاع الحكومي والمصرفي إلى النفط والغاز والبنية التحتية للمؤسسات — صُممت حلولنا للبيئات التي لا تقبل المساومة على الأداء والأمن والموثوقية.",
    s1t: "الحكومة والجهات التنظيمية",
    s1d: "البنك المركزي الكويتي والمؤسسات الحكومية",
    s2t: "البنوك والخدمات المالية",
    s2d: "البنوك والمؤسسات المالية الكبرى في الكويت",
    s3t: "النفط والغاز",
    s3d: "شركة نفط الكويت والبنية التحتية للطاقة",
    s4t: "المؤسسات والقطاع الخاص",
    s4d: "الشركات الإقليمية والرعاية الصحية والاتصالات"
  },
  footer: {
    copy: "© ٢٠٢٦ مسارات تكنولوجيز · الكويت",
    tagline: "نبني الثقة الرقمية والذكاء المؤسسي",
    insights: "مركز المعرفة",
    privacy: "سياسة الخصوصية",
    terms: "شروط الخدمة",
    nav_label: "التنقل",
    connect_label: "التواصل",
    support_label: "استفسار الدعم"
  },
  insights_page: {
    kicker: "مركز المعرفة",
    title: "رؤى ووجهات نظر.",
    body: "أفكار حول التقنية والأمن والتحول الرقمي في الكويت.",
    home_title: "أحدث المقالات",
    home_link: "← عرض جميع المقالات",
    read_article: "اقرأ المقال ←",
    read_time: "دقيقة قراءة"
  },
  career_page: {
    kicker: "لماذا مسارات؟",
    hero_title: "لنبنِ المستقبل معاً",
    hero_sub: "كن جزءاً من الفريق الذي يبني المستقبل الرقمي للكويت.",
    hero_cta: "عرض الوظائف الشاغرة",
    why_title: "لماذا مسارات؟",
    why_statement: "نحن نعزز ثقافة التميز والابتكار والتأثير المحلي.",
    benefits_title: "المزايا والفوائد",
    culture_title: "ثقافتنا",
    culture_quote: "نبني مستقبل الكويت معاً.",
    positions_title: "الفرص الحالية",
    no_positions_title: "لا توجد وظائف حالياً",
    no_positions_desc: "نحن نبحث دائماً عن المواهب الاستثنائية. أرسل لنا سيرتك الذاتية للفرص المستقبلية.",
    send_cv: "أرسل سيرتك الذاتية",
    email: "careers@masaratkwt.com",
    v1t: "النزاهة", "v1d": "نحن نلتزم بأعلى معايير الثقة المهنية.",
    v2t: "الابتكار", "v2d": "قيادة الموجة التالية من الأنظمة الذكية.",
    v3t: "التأثير", "v3d": "خلق قيمة حقيقية للمشهد الرقمي في الكويت.",
    b1t: "رعاية صحية ممتازة", "b1d": "تغطية شاملة لك ولعائلتك.",
    b2t: "التعلم المستمر", "b2d": "الوصول إلى الشهادات والتدريبات العالمية.",
    b3t: "عمل مرن", "b3d": "بيئة ديناميكية مع خيارات العمل الهجين.",
    b4t: "مكافأة الأداء", "b4d": "مكافأة التميز والمساهمات الاستراتيجية.",
    b5t: "بيئة عمل حديثة", "b5d": "مرافق متطورة مصممة للتعاون والإبداع.",
    b6t: "برنامج الرفاهية", "b6d": "أنشطة شهرية تركز على الصحة النفسية والجسدية.",
    p1t: "الثقة والمسؤولية", "p1d": "نحن نتحمل المسؤولية الكاملة عن التزاماتنا ونتائجنا.",
    p2t: "رؤية وطنية", "p2d": "المساهمة في رؤية الكويت ٢٠٣٥ من خلال التميز الرقمي.",
    p3t: "مواهب النخبة", "p3d": "اعمل بجانب أفضل المهندسين والمستشارين في المنطقة."
  },
  contact_page: {
    kicker: "تواصل معنا",
    title: "استشارات.",
    title_accent: "رائعاً.",
    body: "تواصل مع مستشارينا الاستراتيجيين لبناء المستقبل الرقمي لمؤسستك.",
    website_label: "الموقع الإلكتروني",
    email_label: "البريد الإلكتروني",
    phone_label: "الهاتف",
    form_firstname: "الاسم الأول",
    form_lastname: "اسم العائلة",
    form_email: "البريد المهني",
    form_company: "اسم الشركة",
    form_message: "أخبرنا عن مشروعك...",
    form_submit: "إرسال الرسالة",
    form_sending: "جارٍ الإرسال...",
    form_sent: "تم إرسال الرسالة ✓",
    form_success: "سنتواصل معك قريباً.",
    form_error: "حدث خطأ. حاول مرة أخرى."
  },
  services: {
    kicker: "قدراتنا الأساسية",
    link: "استكشف جميع الحلول",
    learnmore: "اعرف المزيد ←",
    sectors_kicker: "القطاعات التي نخدمها",
    sectors_title: "خبرة صناعية.",
    s1title: "الاستشارات الاستراتيجية",
    s1desc: "استشارات حول خارطة الطريق الرقمية والجاهزية.",
    s2title: "تكامل الأنظمة",
    s2desc: "ربط بيئات المؤسسات المعقدة بسلاسة.",
    s3title: "الخدمات المدارة",
    s3desc: "عمليات ودعم حيوي على مدار الساعة طوال أيام الأسبوع.",
    s4title: "التميز السحابي",
    s4desc: "هندسة السحب الهجينة والمتعددة والنقل إليها.",
    s5title: "العمليات الأمنية",
    s5desc: "مراقبة مستمرة وذكاء التهديدات."
  },
  process: {
    kicker: "المنهجية",
    title: "تُنفذ بدقة متناهية.",
    p1t: "الاستكشاف والاستشارة",
    p1d: "المواءمة الاستراتيجية مع أهداف مؤسستك. نحن نتعمق في بنيتك التحتية الحالية، ووضعك الأمني، ونضج البيانات لتحديد خارطة طريق واضحة للتحول.",
    p2t: "الهندسة والتصميم",
    p2d: "هندسة مخطط النجاح. نصمم أنظمة عالية التوفر والأداء تتميز بالمرونة والقابلية للتوسع ومبنية على مبادئ الثقة الصفرية (Zero-trust).",
    p3t: "التنفيذ والتكامل",
    p3d: "تنفيذ بدون توقف مع مسؤولية كاملة. تتولى فرقنا الهندسية تكامل الأنظمة عبر جميع الطبقات — الشبكة والتطبيق والبيانات والأمن.",
    p4t: "الاختبار والنشر",
    p4d: "تحقق صارم متعدد المراحل قبل أي تشغيل فعلي. يخضع كل نشر لمنهجية إجراءات رسمية (MOP) مع إمكانية التراجع الكاملة.",
    callouts: {
      c1t: "تنفيذ محكوم بـ MOP",
      c1d: "كل نشر يتبع منهجية إجراءات رسمية مع بوابات تحقق خطوة بخطوة وخطط تراجع.",
      c2t: "تحولات بدون توقف",
      c2d: "ترقيات البيئة الحية وعمليات النقل المنفذة بأقل قدر من التعطيل للعمليات المستمرة.",
      c3t: "تثبيت ما بعد النشر",
      c3d: "فترة رعاية فائقة مخصصة بعد التشغيل الفعلي مع مراقبة مكثفة واستجابة سريعة ودعم ضبط الأنظمة."
    }
  },
  common: {
    loading: "جارٍ التحميل...",
    error: "حدث خطأ ما",
    back_home: "العودة للرئيسية",
    page_not_found: "الصفحة غير موجودة",
    offline: "أنت غير متصل بالإنترنت",
    check_connection: "يرجى التحقق من اتصالك",
    skip: "انقر للتخطي"
  }
}

const LanguageContext = createContext<LanguageContextType>({
  language: 'en',
  setLanguage: () => {},
  isRTL: false,
  t: (key) => key
})

export function LanguageProvider({ 
  children 
}: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>('en')

  useEffect(() => {
    // Temporarily disabled Arabic support
    setLanguageState('en')
    document.documentElement.lang = 'en'
    document.documentElement.dir = 'ltr'
  }, [])

  const setLanguage = (lang: Language) => {
    // Temporarily disabled: only English is allowed
    setLanguageState('en')
    localStorage.setItem('masarat_language', 'en')
    document.documentElement.lang = 'en'
    document.documentElement.dir = 'ltr'
  }

  const isRTL = language === 'ar'

  // Translation function
  const t = (key: string): string => {
    try {
      const keys = key.split('.')
      const translations = language === 'ar' ? arTranslations : enTranslations
      let value: unknown = translations
      for (const k of keys) {
        if (value && typeof value === 'object') {
          value = (value as Record<string, unknown>)[k]
        } else {
          value = undefined
          break
        }
      }
      if (typeof value === 'string' && value.length > 0) {
        return value
      }
      // Fallback: convert key to readable text instead of showing raw key
      const lastPart = key.split('.').pop() || key
      return lastPart.replace(/_/g, ' ').replace(/\b\w/g, l => l.toUpperCase())
    } catch {
      return key
    }
  }

  return (
    <LanguageContext.Provider 
      value={{ language, setLanguage, isRTL, t }}
    >
      {children}
    </LanguageContext.Provider>
  )
}

export const useLanguage = () => useContext(LanguageContext)
