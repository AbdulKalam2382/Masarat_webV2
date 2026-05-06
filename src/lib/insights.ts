export interface InsightSection {
  heading: string;
  body: string;
  subSections?: { heading: string; body: string }[];
}

export interface InsightLocale {
  title: string;
  excerpt: string;
  intro: string;
  sections: InsightSection[];
  conclusion: string;
}

export interface Insight {
  slug: string;
  category: "Cybersecurity" | "Cloud" | "AI";
  date: string;
  readTime: number; // minutes
  author: string;
  en: InsightLocale;
  ar: InsightLocale;
}

export const insights: Insight[] = [
  {
    slug: "cybersecurity-zero-trust",
    category: "Cybersecurity",
    date: "2026-04-01",
    readTime: 6,
    author: "Masarat Technologies Team",
    en: {
      title: "Zero Trust Architecture for Kuwait Enterprises",
      excerpt:
        "How Kuwait's financial and government sectors are adopting zero-trust models to protect critical infrastructure.",
      intro:
        "The traditional perimeter-based security model is no longer sufficient for modern enterprise environments. As Kuwait's institutions accelerate digital transformation, the attack surface grows — and with it, the need for a fundamentally different security paradigm: Zero Trust.",
      sections: [
        {
          heading: "What is Zero Trust?",
          body: "Zero Trust is a security framework built on the principle of 'never trust, always verify'. Unlike legacy approaches that assume everything inside the corporate network is safe, Zero Trust treats every request — from any user, device, or location — as a potential threat until proven otherwise.",
        },
        {
          heading: "Why Kuwait Enterprises Need It Now",
          body: "Kuwait's financial sector and government institutions handle extremely sensitive citizen and transactional data. Recent increases in nation-state cyberattacks targeting GCC infrastructure have accelerated the urgency for stronger identity-first security architectures.",
        },
        {
          heading: "The Five Pillars of Zero Trust",
          body: "A complete Zero Trust implementation spans five domains:",
          subSections: [
            {
              heading: "1. Identity Verification",
              body: "Multi-factor authentication, conditional access, and continuous identity risk scoring for every user and service account.",
            },
            {
              heading: "2. Device Health",
              body: "Endpoints must meet compliance standards before gaining network access — no exceptions for executives or legacy hardware.",
            },
            {
              heading: "3. Least-Privilege Access",
              body: "Users and systems access only what they need for a specific task. Permissions are time-bound and audited.",
            },
            {
              heading: "4. Network Micro-Segmentation",
              body: "Flat networks are eliminated. Traffic between segments is encrypted and inspected, even inside the data centre.",
            },
            {
              heading: "5. Continuous Monitoring",
              body: "SIEM and SOAR platforms aggregate telemetry and trigger automated responses to anomalous behaviour.",
            },
          ],
        },
        {
          heading: "Implementation Roadmap",
          body: "Masarat recommends a phased approach: begin with identity and MFA hardening, layer in device compliance policies, then progressively segment the network. Full Zero Trust is a 12-24 month journey, not a product purchase.",
        },
      ],
      conclusion:
        "Zero Trust is not a single product — it is an architectural philosophy. For Kuwait's most critical institutions, adopting it is no longer optional. Masarat Technologies provides end-to-end Zero Trust advisory and implementation services tailored to local regulatory requirements.",
    },
    ar: {
      title: "بنية الثقة الصفرية لمؤسسات الكويت",
      excerpt:
        "كيف يعتمد القطاع المالي والحكومي في الكويت نماذج الثقة الصفرية لحماية البنية التحتية الحيوية.",
      intro:
        "لم يعد نموذج الأمن التقليدي القائم على المحيط كافياً للبيئات المؤسسية الحديثة. مع تسارع المؤسسات الكويتية في مسيرة التحول الرقمي، يتوسع نطاق الهجوم — ومعه تزداد الحاجة إلى نموذج أمني مختلف جوهرياً: الثقة الصفرية.",
      sections: [
        {
          heading: "ما هي الثقة الصفرية؟",
          body: "الثقة الصفرية إطار أمني مبني على مبدأ 'لا تثق أبداً، تحقق دائماً'. على عكس الأساليب التقليدية التي تفترض أن كل ما هو داخل الشبكة المؤسسية آمن، تعامل الثقة الصفرية كل طلب — من أي مستخدم أو جهاز أو موقع — باعتباره تهديداً محتملاً حتى يثبت العكس.",
        },
        {
          heading: "لماذا تحتاجها المؤسسات الكويتية الآن",
          body: "يتعامل القطاع المالي والمؤسسات الحكومية في الكويت مع بيانات مواطنين وبيانات معاملات بالغة الحساسية. أدى تزايد الهجمات السيبرانية التي ترعاها الدول والتي تستهدف البنية التحتية لدول مجلس التعاون الخليجي إلى تسريع الحاجة إلى بنيات أمنية أكثر صرامة تعتمد على الهوية.",
        },
        {
          heading: "الركائز الخمس للثقة الصفرية",
          body: "يمتد تطبيق الثقة الصفرية الكامل عبر خمسة مجالات:",
          subSections: [
            {
              heading: "١. التحقق من الهوية",
              body: "المصادقة متعددة العوامل، والوصول المشروط، وتقييم مخاطر الهوية المستمر لكل مستخدم وحساب خدمة.",
            },
            {
              heading: "٢. سلامة الأجهزة",
              body: "يجب أن تستوفي نقاط النهاية معايير الامتثال قبل الحصول على وصول للشبكة — دون استثناءات للمديرين التنفيذيين أو الأجهزة القديمة.",
            },
            {
              heading: "٣. الوصول بأدنى امتياز",
              body: "يصل المستخدمون والأنظمة فقط إلى ما يحتاجونه لمهمة محددة. الأذونات محددة بوقت وخاضعة للتدقيق.",
            },
            {
              heading: "٤. التجزئة الدقيقة للشبكة",
              body: "يتم إلغاء الشبكات المسطحة. يتم تشفير حركة البيانات بين الأجزاء وفحصها، حتى داخل مركز البيانات.",
            },
            {
              heading: "٥. المراقبة المستمرة",
              body: "تجمع منصات SIEM وSOAR بيانات القياس عن بُعد وتُطلق استجابات آلية للسلوك الشاذ.",
            },
          ],
        },
        {
          heading: "خارطة طريق التنفيذ",
          body: "توصي مسارات باتباع نهج تدريجي: البدء بتعزيز الهوية والمصادقة متعددة العوامل، ثم إضافة سياسات امتثال الأجهزة، ثم التجزئة التدريجية للشبكة. الثقة الصفرية الكاملة رحلة مدتها ١٢ إلى ٢٤ شهراً، وليست مجرد شراء منتج.",
        },
      ],
      conclusion:
        "الثقة الصفرية ليست منتجاً واحداً — بل هي فلسفة معمارية. بالنسبة للمؤسسات الأكثر أهمية في الكويت، لم يعد اعتمادها خياراً. تقدم مسارات تكنولوجيز خدمات استشارية وتنفيذية شاملة للثقة الصفرية مصممة وفقاً للمتطلبات التنظيمية المحلية.",
    },
  },
  {
    slug: "cloud-hybrid-strategy",
    category: "Cloud",
    date: "2026-03-15",
    readTime: 5,
    author: "Masarat Technologies Team",
    en: {
      title: "Building a Hybrid Cloud Strategy That Lasts",
      excerpt:
        "Lessons learned from deploying hybrid cloud architectures across Kuwait's most demanding institutions.",
      intro:
        "Hybrid cloud — the combination of on-premises infrastructure with one or more public clouds — has become the dominant model for enterprise IT in Kuwait. Done right, it delivers agility without sacrificing control. Done poorly, it creates sprawl, security gaps, and runaway costs.",
      sections: [
        {
          heading: "Why Pure Cloud Is Not Always the Answer",
          body: "Many Kuwait government and financial institutions face data sovereignty mandates that require certain workloads to remain on local infrastructure. A pure public cloud strategy is therefore neither feasible nor compliant for these organisations.",
        },
        {
          heading: "The Four Design Principles",
          body: "Successful hybrid strategies are guided by four non-negotiable principles:",
          subSections: [
            {
              heading: "1. Workload Placement Logic",
              body: "Define clear criteria for what runs where: latency-sensitive, regulated, or legacy workloads on-prem; scalable, elastic, or development workloads in the cloud.",
            },
            {
              heading: "2. Unified Identity Plane",
              body: "A single identity authority — typically Azure AD or similar — must span both environments to prevent credential siloing.",
            },
            {
              heading: "3. Consistent Security Posture",
              body: "Security policies should be defined once and enforced everywhere, not separately configured per environment.",
            },
            {
              heading: "4. Cost Governance from Day One",
              body: "Tag every resource, set budgets, and use FinOps practices before cloud spend escapes control.",
            },
          ],
        },
        {
          heading: "Lessons from the Field",
          body: "After dozens of hybrid deployments across Kuwaiti institutions, our most consistent finding is that governance — not technology — is the primary failure point. Organisations that invest in cloud governance frameworks before migration succeed far more often than those that focus purely on migration speed.",
        },
      ],
      conclusion:
        "A hybrid cloud strategy is only as strong as the operating model behind it. Masarat Technologies helps Kuwait institutions design, deploy, and govern hybrid environments that perform reliably for years — not just at go-live.",
    },
    ar: {
      title: "بناء استراتيجية سحابة هجينة تدوم",
      excerpt:
        "دروس مستفادة من نشر بنيات السحابة الهجينة عبر أكثر المؤسسات الكويتية صرامةً.",
      intro:
        "أصبحت السحابة الهجينة — الجمع بين البنية التحتية المحلية وسحابة عامة واحدة أو أكثر — النموذج السائد لتقنية المعلومات المؤسسية في الكويت. عند تنفيذها بشكل صحيح، تُوفر المرونة دون التضحية بالتحكم. أما إذا نُفذت بشكل سيئ، فتُنتج انتشاراً فوضوياً وثغرات أمنية وتكاليف خارجة عن السيطرة.",
      sections: [
        {
          heading: "لماذا السحابة الخالصة ليست دائماً الحل",
          body: "تواجه كثير من المؤسسات الحكومية والمالية الكويتية تفويضات سيادة البيانات التي تُلزم ببقاء أعباء عمل معينة على البنية التحتية المحلية. لذا فإن استراتيجية السحابة العامة الخالصة ليست ممكنة التطبيق ولا متوافقة مع المتطلبات لهذه المؤسسات.",
        },
        {
          heading: "المبادئ التصميمية الأربعة",
          body: "تسترشد الاستراتيجيات الهجينة الناجحة بأربعة مبادئ غير قابلة للتفاوض:",
          subSections: [
            {
              heading: "١. منطق توزيع أعباء العمل",
              body: "حدد معايير واضحة لما يعمل أين: أعباء العمل الحساسة للكمون أو المنظمة أو الموروثة محلياً؛ وأعباء العمل القابلة للتوسع أو المرنة أو التطويرية في السحابة.",
            },
            {
              heading: "٢. مستوى هوية موحد",
              body: "يجب أن تمتد سلطة هوية واحدة — عادةً Azure AD أو ما شابهه — عبر البيئتين لمنع عزل بيانات الاعتماد.",
            },
            {
              heading: "٣. وضع أمني متسق",
              body: "يجب تحديد سياسات الأمان مرة واحدة وتطبيقها في كل مكان، لا تهيئتها بشكل منفصل لكل بيئة.",
            },
            {
              heading: "٤. حوكمة التكاليف منذ اليوم الأول",
              body: "ضع علامات على كل مورد، وحدد الميزانيات، واستخدم ممارسات FinOps قبل أن تخرج نفقات السحابة عن السيطرة.",
            },
          ],
        },
        {
          heading: "دروس من الميدان",
          body: "بعد عشرات عمليات النشر الهجينة عبر المؤسسات الكويتية، نجد باستمرار أن الحوكمة — لا التكنولوجيا — هي نقطة الفشل الرئيسية. المؤسسات التي تستثمر في أطر حوكمة السحابة قبل الهجرة تنجح في أغلب الأحيان أكثر بكثير من تلك التي تركز بشكل حصري على سرعة الهجرة.",
        },
      ],
      conclusion:
        "استراتيجية السحابة الهجينة لا تكون أقوى من نموذج التشغيل الذي يقف خلفها. تساعد مسارات تكنولوجيز المؤسسات الكويتية على تصميم ونشر وإدارة البيئات الهجينة التي تعمل بشكل موثوق لسنوات — لا فقط عند التشغيل.",
    },
  },
  {
    slug: "ai-enterprise-readiness",
    category: "AI",
    date: "2026-03-01",
    readTime: 7,
    author: "Masarat Technologies Team",
    en: {
      title: "Is Your Organisation AI-Ready?",
      excerpt:
        "A practical framework for assessing and accelerating AI adoption in Kuwait's enterprise landscape.",
      intro:
        "Artificial intelligence is rapidly moving from a strategic ambition to an operational necessity for Kuwait's leading enterprises. But deploying AI successfully requires more than a vendor contract. It demands data maturity, infrastructure readiness, governance frameworks, and talent — assessed honestly before committing to transformation.",
      sections: [
        {
          heading: "What is AI Readiness?",
          body: "AI readiness refers to an organisation's capability to adopt, deploy, and sustain artificial intelligence initiatives at scale. It is not a binary state — it is a spectrum across multiple dimensions that can be systematically assessed and improved.",
        },
        {
          heading: "The Five Pillars of AI Readiness",
          body: "A rigorous readiness assessment spans five interconnected pillars:",
          subSections: [
            {
              heading: "1. Data Foundation",
              body: "Your AI is only as good as your data. Quality, accessibility, and governance of enterprise data are prerequisites. Organisations with fragmented, inconsistent, or ungoverned data cannot deploy reliable AI — regardless of how sophisticated the model.",
            },
            {
              heading: "2. Infrastructure Maturity",
              body: "AI workloads demand scalable compute, storage, and networking infrastructure. GPU-accelerated compute, distributed training environments, and low-latency inference pipelines must be planned and costed before adoption.",
            },
            {
              heading: "3. Talent & Skills",
              body: "A combination of AI literacy at the executive level and technical capability at the delivery level is essential. Organisations that invest in upskilling alongside deployment achieve significantly higher ROI from AI initiatives.",
            },
            {
              heading: "4. Governance & Ethics",
              body: "Clear policies around data privacy, model accountability, bias auditing, and the ethical use of AI must be established early. In Kuwait's regulatory environment, this is not optional — it is a compliance requirement.",
            },
            {
              heading: "5. Strategy Alignment",
              body: "AI initiatives must be tied to measurable business outcomes — not deployed as technology for its own sake. Every AI project should have a clear problem statement, success metrics, and executive sponsorship.",
            },
          ],
        },
        {
          heading: "How Masarat Supports AI Readiness",
          body: "Masarat Technologies offers AI Readiness Audits that assess all five pillars and produce a prioritised roadmap tailored to your organisation's context. Our audits combine technology assessment with organisational change management — because the human side of AI adoption is just as important as the technical side.",
        },
      ],
      conclusion:
        "AI readiness is not a one-time assessment. It is a continuous process of maturation that evolves alongside your technology and business strategy. Masarat Technologies partners with Kuwait institutions at every stage of that journey — from first assessment to full-scale deployment.",
    },
    ar: {
      title: "هل مؤسستك مستعدة للذكاء الاصطناعي؟",
      excerpt:
        "إطار عملي لتقييم اعتماد الذكاء الاصطناعي وتسريعه في المشهد المؤسسي الكويتي.",
      intro:
        "ينتقل الذكاء الاصطناعي بسرعة من طموح استراتيجي إلى ضرورة تشغيلية للمؤسسات الكويتية الرائدة. لكن النشر الناجح للذكاء الاصطناعي يتطلب أكثر من مجرد عقد مع مورد. يستلزم نضج البيانات، وجاهزية البنية التحتية، وأطر الحوكمة، والكفاءات البشرية — كلها تُقيَّم بصدق قبل الالتزام بالتحول.",
      sections: [
        {
          heading: "ما المقصود بالجاهزية للذكاء الاصطناعي؟",
          body: "تشير الجاهزية للذكاء الاصطناعي إلى قدرة المؤسسة على اعتماد مبادرات الذكاء الاصطناعي ونشرها واستدامتها على نطاق واسع. إنها ليست حالة ثنائية — بل طيف عبر أبعاد متعددة يمكن تقييمها وتحسينها بشكل منهجي.",
        },
        {
          heading: "الركائز الخمس لجاهزية الذكاء الاصطناعي",
          body: "يشمل تقييم الجاهزية الدقيق خمس ركائز مترابطة:",
          subSections: [
            {
              heading: "١. أساس البيانات",
              body: "ذكاؤك الاصطناعي بجودة بياناتك فقط. الجودة وإمكانية الوصول وحوكمة البيانات المؤسسية متطلبات أساسية. المؤسسات ذات البيانات المجزأة أو غير المتسقة أو غير المُدارة لا يمكنها نشر ذكاء اصطناعي موثوق — بصرف النظر عن مدى تعقيد النموذج.",
            },
            {
              heading: "٢. نضج البنية التحتية",
              body: "تتطلب أعباء عمل الذكاء الاصطناعي بنية تحتية قابلة للتوسع من الحوسبة والتخزين والشبكات. يجب التخطيط والتسعير لحوسبة مُعززة بالـGPU وبيئات تدريب موزعة وخطوط استدلال منخفضة الكمون قبل الاعتماد.",
            },
            {
              heading: "٣. الكفاءات والمهارات",
              body: "مزيج من محو الأمية في الذكاء الاصطناعي على المستوى التنفيذي والقدرة التقنية على مستوى التنفيذ أمر ضروري. المؤسسات التي تستثمر في رفع المهارات جنباً إلى جنب مع النشر تحقق عائداً استثمارياً أعلى بكثير من مبادرات الذكاء الاصطناعي.",
            },
            {
              heading: "٤. الحوكمة والأخلاقيات",
              body: "يجب وضع سياسات واضحة حول خصوصية البيانات ومساءلة النماذج وتدقيق التحيز والاستخدام الأخلاقي للذكاء الاصطناعي في وقت مبكر. في البيئة التنظيمية الكويتية، هذا ليس اختيارياً — بل هو متطلب امتثال.",
            },
            {
              heading: "٥. التوافق الاستراتيجي",
              body: "يجب ربط مبادرات الذكاء الاصطناعي بنتائج أعمال قابلة للقياس — لا نشرها كتكنولوجيا لذاتها. يجب أن يكون لكل مشروع ذكاء اصطناعي بيان واضح للمشكلة ومقاييس نجاح ورعاية تنفيذية.",
            },
          ],
        },
        {
          heading: "كيف تدعم مسارات جاهزية الذكاء الاصطناعي",
          body: "تقدم مسارات تكنولوجيز عمليات تدقيق الجاهزية للذكاء الاصطناعي التي تُقيِّم الركائز الخمس وتنتج خارطة طريق ذات أولويات مصممة لسياق مؤسستك. تجمع عمليات التدقيق لدينا بين تقييم التكنولوجيا وإدارة التغيير المؤسسي — لأن الجانب الإنساني لاعتماد الذكاء الاصطناعي لا يقل أهمية عن الجانب التقني.",
        },
      ],
      conclusion:
        "الجاهزية للذكاء الاصطناعي ليست تقييماً لمرة واحدة. إنها عملية نضج مستمرة تتطور جنباً إلى جنب مع استراتيجيتك التقنية والتجارية. تُشارك مسارات تكنولوجيز المؤسسات الكويتية في كل مرحلة من مراحل تلك الرحلة — من التقييم الأول إلى النشر الكامل.",
    },
  },
];

export function getInsightBySlug(slug: string): Insight | undefined {
  return insights.find((a) => a.slug === slug);
}

export function getAllSlugs(): string[] {
  return insights.map((a) => a.slug);
}

/** Returns the locale-specific fields for an article */
export function getInsightLocale(
  article: Insight,
  language: string
): InsightLocale {
  return language === "ar" ? article.ar : article.en;
}

/** Translated category label */
export function getCategoryLabel(
  category: string,
  language: string
): string {
  if (language !== "ar") return category;
  const map: Record<string, string> = {
    Cybersecurity: "الأمن السيبراني",
    Cloud: "السحابة",
    AI: "الذكاء الاصطناعي",
  };
  return map[category] ?? category;
}
