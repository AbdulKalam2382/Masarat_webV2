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
        who_we_are: { title: "Who We Are", brief: "Our legacy and commitment to excellence." },
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
        positions: { title: "Open Positions", brief: "Join our elite team." }
      }
    }
  },
  hero: {
    label: "Enterprise IT Partner",
    line1: "WE ARCHITECT",
    line2: "DIGITAL TRUST.",
    line3: "INTELLIGENTLY.",
    sub: "AI · Enterprise Intelligence · Cybersecurity · Infrastructure",
    btn1: "Explore Solutions",
    btn2: "Contact Us",
    scroll: "Scroll"
  },
  home: {
    vision_eyebrow: "Our Vision",
    vision_text: "To be the most trusted architect of digital intelligence and critical infrastructure.",
    mission_eyebrow: "Our Mission",
    mission_text: "To deliver mission-critical technology solutions with single-point accountability and proven execution excellence.",
    power_quote: "Technology creates capability. Trust creates resilience",
    power_sub: "We don't just deploy systems; we architect institutional resilience.",
    power_btn: "Our Approach",
    learn_more: "Learn More",
    cta_title: "Ready to transform your organisation?",
    cta_sub: "Partner with Masarat Technologies for integrated, mission-critical technology delivery.",
    cta_btn2: "View Our Capabilities →"
  },
  about_page: {
    kicker: "About Masarat",
    title: "Partners in Success.",
    body: "Masarat Technologies is a leading enterprise IT solutions provider. \n\nWe specialize in architecting the mission-critical pillars of digital transformation — from critical cybersecurity to intelligent infrastructure.",
    quality_title: "Enterprise Excellence & Compliance",
    quality_body: "Our solutions are governed by international standards and local regulatory frameworks, ensuring your institution remains compliant, secure, and resilient.",
    quality_footer: "ISO 27001 · SOC2 · NCA Compliant · CITRA Certified",
    quality_iso1: "ISO 27001 Certified",
    quality_iso2: "SOC2 Type II Compliant",
    quality_iso3: "NCA & CITRA Certified",
    challenges_title: "Solving Complex Enterprise Tech Challenges.",
    challenge1_title: "Data Sovereignty",
    challenge1_desc: "Architecting systems that ensure data sovereignty and secure localized storage.",
    challenge2_title: "Legacy Modernization",
    challenge2_desc: "Transforming aging infrastructure into high-performance digital platforms without operational downtime.",
    challenge3_title: "Cyber Resilience",
    challenge3_desc: "Building proactive defense systems against evolving global and regional cyber threats.",
    challenges_callout: "We don't just solve problems; we architect long-term institutional stability."
  },
  about: {
    kicker: "Who We Are",
    title: "Built for Complex Enterprise Environments",
    body: "We deliver mission-critical technology solutions for the region's most demanding enterprise environments, where reliability and security are non-negotiable.",
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
    page_sub: "Architecting the mission-critical pillars of digital transformation — from intelligent infrastructure to strategic cybersecurity.",
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
    },
    capability1: {
      title: "Resilient Digital Infrastructure",
      p: "In an era of constant connectivity, your digital foundation must be more than just functional; it must be resilient. We architect secure, scalable, and mission-critical infrastructure solutions that form the backbone of modern enterprise operations. Our approach ensures continuity across distributed networks and complex cloud environments, minimizing downtime and maximizing performance.",
      points: ["High-Availability Cloud", "Scalable Networking", "Disaster Recovery", "Performance Monitoring"]
    },
    capability2: {
      title: "Cybersecurity & Digital Trust",
      p: "Digital trust is the fulcrum upon which modern enterprise innovation rests. Our integrated cybersecurity solutions are designed to protect complex enterprise, industrial, and critical infrastructure environments against an ever-evolving landscape of cyber risks.",
      points: ["Zero Trust Architecture", "ICS/SCADA Security", "Managed Detection (MDR)", "Regulatory Compliance"]
    },
    capability3: {
      title: "AI, Data & Enterprise Intelligence",
      p: "Data is the raw material of the digital economy, but its true value is only realized through intelligent processing. We deploy advanced AI and data platforms that transform vast amounts of disparate information into actionable strategic intelligence.",
      points: ["Predictive Analytics", "Data Lakehouse", "NLP Workflows", "Real-time BI Dashboards"]
    },
    capability4: {
      title: "Enterprise Applications & Automation",
      p: "Operational efficiency is driven by the seamless integration of modern platforms and intelligent workflows. We deliver enterprise applications and automation solutions that streamline complex business processes and improve organizational governance.",
      points: ["ERP Integration", "RPA Deployment", "Low-code Workflow", "System Integration"]
    },
    capability5: {
      title: "Critical Infrastructure & Integrated Systems",
      p: "The physical environment of a modern enterprise is increasingly inseparable from its digital twin. We provide end-to-end delivery of mission-critical facilities, including data centers, command-and-control centers, and smart operational infrastructure.",
      points: ["Tier III/IV Data Centers", "Integrated BMS/ELV", "Next-Gen SOC/NOC", "Smart City/IoT"]
    },
    capability6: {
      title: "Managed Services & Operational Support",
      p: "Technology is an ongoing commitment that requires constant vigilance and expert optimization. Our managed services provide continuous support, monitoring, and lifecycle management designed to ensure the long-term resilience of your technology stack.",
      points: ["24/7 Monitoring", "Lifecycle Management", "Dedicated Support", "Security Assessments"]
    },
  },
  sectors: {
    kicker: "Sectors We Serve",
    title: "Trusted across the region's most demanding industries.",
    desc: "From government and banking to oil & gas and enterprise infrastructure — our solutions are designed for environments where performance, security, and reliability are non-negotiable.",
    s1t: "Government & Regulatory",
    s1d: "Central Banks and government institutions",
    s2t: "Banking & Financial Services",
    s2d: "Leading regional banks and financial institutions",
    s3t: "Oil & Gas",
    s3d: "Leading energy sector infrastructure",
    s4t: "Enterprise & Private Sector",
    s4d: "Regional enterprises, healthcare & telecoms"
  },
  footer: {
    copy: "© 2023 Masarat Technologies",
    tagline: "Architecting Digital Trust & Enterprise Intelligence",
    insights: "Knowledge Hub",
    privacy: "Privacy Policy",
    terms: "Terms of Service",
    nav_label: "Navigation",
    connect_label: "Connectivity",
    support_label: "Support Inquiry",
    partners_label: "Technology Partner Ecosystem",
    solutions_label: "Solutions"
  },
  insights_page: {
    kicker: "Knowledge Hub",
    title: "Insights.",
    body: "Strategic intelligence on cybersecurity, AI, and the future of enterprise technology.",
    home_title: "Latest Insights.",
    home_link: "View Knowledge Hub",
    read_article: "Read Article",
    read_time: "min read"
  },
  career_page: {
    kicker: "Why work at Masarat?",
    title: "Trust. Transform. Together.",
    hero_title: "Trust. Transform. Together.",
    hero_sub: "Be part of the team architecting the digital future.",
    hero_cta: "View Openings",
    why_title: "Why Masarat?",
    why_statement: "We foster a culture of excellence, innovation, and local impact.",
    benefits_title: "Perks & Benefits",
    culture_title: "Our Culture",
    culture_quote: "Building the future together.",
    positions_title: "Current Openings",
    no_positions_title: "No current openings",
    no_positions_desc: "We are always looking for exceptional talent. Send us your CV for future opportunities.",
    send_cv: "Send Your CV",
    email: "careers@masaratkwt.com",
    v1t: "Integrity", "v1d": "We uphold the highest standards of professional trust.",
    v2t: "Innovation", "v2d": "Driving the next wave of intelligent systems.",
    v3t: "Impact", "v3d": "Creating real value for the digital landscape.",
    b1t: "Premium Healthcare", "b1d": "Comprehensive coverage for you and your family.",
    b2t: "Continuous Learning", "b2d": "Access to global certifications and training.",
    b3t: "Flexible Work", "b3d": "Dynamic environment with hybrid work options.",
    b4t: "Performance Bonus", "b4d": "Rewarding excellence and strategic contributions.",
    b5t: "Modern Workspace", "b5d": "State-of-the-art facilities designed for collaboration.",
    b6t: "Wellness Program", "b6d": "Monthly activities focused on mental and physical health.",
    p1t: "Trust & Accountability", "p1d": "We take full ownership of our commitments and results.",
    p2t: "Strategic Vision", "p2d": "Contributing to regional excellence and institutional transformation through digital innovation.",
    p3t: "Elite Talent", "p3d": "Work alongside the best engineers and consultants in the region."
  },
  contact_page: {
    kicker: "Contact Us",
    title: "Change starts here.",
    title_accent: "",
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
        who_we_are: { title: "من نحن", brief: "تراثنا والتزامنا تجاه التميز." },
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
        positions: { title: "الوظائف الشاغرة", brief: "انضم إلى فريق النخبة." }
      }
    }
  },
  hero: {
    label: "شريك تقنية المعلومات الرائد في الصناعة",
    line1: "نحن نبني",
    line2: "الثقة الرقمية.",
    line3: "على نطاق واسع.",
    sub: "الذكاء الاصطناعي · الذكاء المؤسسي · الأمن السيبراني · البنية التحتية",
    btn1: "استكشف الحلول",
    btn2: "تواصل معنا",
    scroll: "اسحب لأسفل"
  },
  home: {
    vision_eyebrow: "رؤيتنا",
    vision_text: "أن نكون الشريك الأكثر ثقة في بناء الذكاء الرقمي والبنية التحتية الحيوية.",
    mission_eyebrow: "رؤيتنا",
    mission_text: "تقديم حلول تقنية حيوية مع مسؤولية نقطة واحدة وتميز مشهود في التنفيذ.",
    power_quote: "التقنية تخلق القدرة. والثقة تخلق المرونة.",
    power_sub: "نحن لا نقوم فقط بنشر الأنظمة؛ نحن نبني المرونة المؤسسية.",
    power_btn: "نهجنا",
    learn_more: "اعرف المزيد",
    cta_title: "هل أنت مستعد لتحويل مؤسستك؟",
    cta_sub: "كن شريكاً مع مسارات تكنولوجيز لتقديم تقنية متكاملة ومهمة عبر المنطقة.",
    cta_btn2: "عرض قدراتنا ←"
  },
  about_page: {
    kicker: "عن مسارات",
    title: "شركاء في النجاح.",
    body: "مسارات تكنولوجيز هي شركة رائدة في تقديم حلول تقنية المعلومات للمؤسسات. \n\nنحن متخصصون في بناء الركائز الحيوية للتحول الرقمي — من الأمن السيبراني المؤسسي إلى البنية التحتية الذكية.",
    quality_title: "التميز المؤسسي والامتثال",
    quality_body: "تخضع حلولنا للمعايير الدولية والأطر التنظيمية المحلية، مما يضمن بقاء مؤسستك ممتثلة وآمنة ومرنة.",
    quality_footer: "ISO 27001 · SOC2 · NCA Compliant · CITRA Certified",
    quality_iso1: "شهادة ISO 27001",
    quality_iso2: "امتثال SOC2 Type II",
    quality_iso3: "اعتماد NCA و CITRA",
    challenges_title: "حل أصعب التحديات التقنية المؤسسية.",
    challenge1_title: "سيادة البيانات",
    challenge1_desc: "هندسة الأنظمة التي تحافظ على سلامة البيانات وتوطينها داخل الحدود الآمنة.",
    challenge2_title: "تحديث الأنظمة القديمة",
    challenge2_desc: "تحويل البنية التحتية المتهالكة إلى منصات رقمية عالية الأداء دون توقف العمليات.",
    challenge3_title: "المرونة السيبرانية",
    challenge3_desc: "بناء أنظمة دفاع استباقية ضد التهديدات السيبرانية العالمية والإقليمية المتطورة.",
    challenges_callout: "نحن لا نحل المشاكل فحسب؛ بل نبني استقراراً مؤسسياً طويل الأمد."
  },
  about: {
    kicker: "من نحن",
    title: "مصمم لبيئات المؤسسات المعقدة",
    body: "نقدم حلول تقنية حيوية للبيئات المؤسسية الأكثر تطلباً في المنطقة، حيث الموثوقية والأمن غير قابلين للتفاوض.",
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
    page_sub: "تصميم الأركان الحيوية للتحول الرقمي - من البنية التحتية الذكية إلى الأمن السيبراني الاستراتيجي.",
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
    },
    capability1: {
      title: "البنية التحتية الرقمية المرنة",
      p: "في عصر الاتصال المستمر، يجب أن تكون مؤسستك الرقمية أكثر من مجرد وظيفية؛ يجب أن تكون مرنة. نحن نصمم حلول بنية تحتية آمنة وقابلة للتوسع وضرورية للمهمة تشكل العمود الفقري لعمليات المؤسسات الحديثة.",
      points: ["سحابة عالية التوفر", "شبكات قابلة للتوسع", "التعافي من الكوارث", "مراقبة الأداء"]
    },
    capability2: {
      title: "الأمن السيبراني والثقة الرقمية",
      p: "الثقة الرقمية هي المرتكز الذي يرتكز عليه ابتكار المؤسسات الحديثة. تم تصميم حلول الأمن السيبراني المتكاملة لدينا لحماية بيئات المؤسسات المعقدة والصناعية والبنية التحتية الحيوية.",
      points: ["بنية الثقة الصفرية", "أمن نظم التحكم الصناعي", "الكشف والاستجابة (MDR)", "الامتثال التنظيمي"]
    },
    capability3: {
      title: "الذكاء الاصطناعي والبيانات والذكاء المؤسسي",
      p: "البيانات هي المادة الخام للاقتصاد الرقمي، لكن قيمتها الحقيقية لا تتحقق إلا من خلال المعالجة الذكية. نحن ننشر منصات متطورة للذكاء الاصطناعي والبيانات تحول المعلومات إلى ذكاء استراتيجي.",
      points: ["التحليلات التنبؤية", "بنية Lakehouse", "سير عمل NLP", "لوحات معلومات BI"]
    },
    capability4: {
      title: "تطبيقات المؤسسات والأتمتة",
      p: "يتم دفع الكفاءة التشغيلية من خلال التكامل السلس للمنصات الحديثة وسير العمل الذكي. نحن نقدم تطبيقات المؤسسات وحلول الأتمتة التي تبسط العمليات التجارية المعقدة.",
      points: ["تكامل ERP", "أتمتة RPA", "سير عمل Low-code", "تكامل الأنظمة"]
    },
    capability5: {
      title: "البنية التحتية الحيوية والأنظمة المتكاملة",
      p: "أصبحت البيئة المادية للمؤسسة الحديثة لا تنفصل بشكل متزايد عن توأمها الرقمي. نحن نقدم تسليمًا شاملاً للمرافق الضرورية للمهمة، بما في ذلك مراكز البيانات ومراكز القيادة.",
      points: ["مراكز بيانات المستوى 3/4", "أنظمة BMS/ELV المتكاملة", "مراكز SOC/NOC", "المدن الذكية/IoT"]
    },
    capability6: {
      title: "الخدمات المدارة والدعم التشغيلي",
      p: "التكنولوجيا التزام مستمر يتطلب يقظة دائمة وتحسيناً خبيراً. توفر خدماتنا المدارة دعماً ومراقبة وإدارة دورة حياة مستمرة لضمان مرونة مجموعة التكنولوجيا الخاصة بك.",
      points: ["مراقبة 24/7", "إدارة دورة الحياة", "دعم فني مخصص", "تقييمات أمنية"]
    },
  },
  sectors: {
    kicker: "القطاعات التي نخدمها",
    title: "موثوقون في أهم الصناعات وأكثرها تطلباً.",
    desc: "من القطاع الحكومي والمصرفي إلى النفط والغاز والبنية التحتية للمؤسسات — صُممت حلولنا للبيئات التي لا تقبل المساومة على الأداء والأمن والموثوقية.",
    s1t: "الحكومة والجهات التنظيمية",
    s1d: "البنوك المركزية والمؤسسات الحكومية",
    s2t: "البنوك والخدمات المالية",
    s2d: "البنوك والمؤسسات المالية الكبرى",
    s3t: "النفط والغاز",
    s3d: "كبرى شركات الطاقة والبنية التحتية",
    s4t: "المؤسسات والقطاع الخاص",
    s4d: "الشركات الإقليمية والرعاية الصحية والاتصالات"
  },
  footer: {
    copy: "© ٢٠٢٣ مسارات تكنولوجيز",
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
    body: "أفكار حول التقنية والأمن والتحول الرقمي.",
    home_title: "أحدث المقالات",
    home_link: "← عرض جميع المقالات",
    read_article: "اقرأ المقال ←",
    read_time: "دقيقة قراءة"
  },
  career_page: {
    kicker: "لماذا مسارات؟",
    title: "ثقة. تحول. معاً.",
    hero_title: "ثقة. تحول. معاً.",
    hero_sub: "كن جزءاً من الفريق الذي يبني المستقبل الرقمي.",
    hero_cta: "عرض الوظائف الشاغرة",
    why_title: "لماذا مسارات؟",
    why_statement: "نحن نعزز ثقافة التميز والابتكار والتأثير المحلي.",
    benefits_title: "المزايا والفوائد",
    culture_title: "ثقافتنا",
    culture_quote: "نبني المستقبل معاً.",
    positions_title: "الفرص الحالية",
    no_positions_title: "لا توجد وظائف حالياً",
    no_positions_desc: "نحن نبحث دائماً عن المواهب الاستثنائية. أرسل لنا سيرتك الذاتية للفرص المستقبلية.",
    send_cv: "أرسل سيرتك الذاتية",
    email: "careers@masaratkwt.com",
    v1t: "النزاهة", "v1d": "نحن نلتزم بأعلى معايير الثقة المهنية.",
    v2t: "الابتكار", "v2d": "قيادة الموجة التالية من الأنظمة الذكية.",
    v3t: "التأثير", "v3d": "خلق قيمة حقيقية للمشهد الرقمي.",
    b1t: "رعاية صحية ممتازة", "b1d": "تغطية شاملة لك ولعائلتك.",
    b2t: "التعلم المستمر", "b2d": "الوصول إلى الشهادات والتدريبات العالمية.",
    b3t: "عمل مرن", "b3d": "بيئة ديناميكية مع خيارات العمل الهجين.",
    b4t: "مكافأة الأداء", "b4d": "مكافأة التميز والمساهمات الاستراتيجية.",
    b5t: "بيئة عمل حديثة", "b5d": "مرافق متطورة مصممة للتعاون والإبداع.",
    b6t: "برنامج الرفاهية", "b6d": "أنشطة شهرية تركز على الصحة النفسية والجسدية.",
    p1t: "الثقة والمسؤولية", "p1d": "نحن نتحمل المسؤولية الكاملة عن التزاماتنا ونتائجنا.",
    p2t: "رؤية استراتيجية", "p2d": "المساهمة في التميز الرقمي والتحول المؤسسي.",
    p3t: "مواهب النخبة", "p3d": "اعمل بجانب أفضل المهندسين والمستشارين في المنطقة."
  },
  contact_page: {
    kicker: "تواصل معنا",
    title: "التغيير يبدأ هنا.",
    title_accent: "",
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
  const t = (key: string, options?: { returnObjects?: boolean }): any => {
    try {
      const keys = key.split('.')
      const translations = language === 'ar' ? arTranslations : enTranslations
      let value: any = translations
      
      for (const k of keys) {
        if (value && typeof value === 'object') {
          value = value[k]
        } else {
          value = undefined
          break
        }
      }

      if (options?.returnObjects) {
        return value || []
      }

      if (typeof value === 'string' && value.length > 0) {
        return value
      }
      
      // Fallback
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
