import {
  TrendingUp, Target, Camera, Film, Video,
  Palette, Briefcase, BarChart, Zap
} from 'lucide-react'

export const WHATSAPP_NUMBER = '971582774519'
export const EMAIL = 'nh2247181@gmail.com'
export const INSTAGRAM_CREATES = 'https://www.instagram.com/nadim.creates/'
export const INSTAGRAM_PH      = 'https://www.instagram.com/nadem.ph/'

// ─── Bilingual Content ─────────────────────────────────────────────────────

export const content = {
  en: {
    nav: {
      home: 'Home', about: 'About', experience: 'Experience',
      skills: 'Skills', services: 'Services', portfolio: 'Portfolio',
      brands: 'Brands', stats: 'Achievements', testimonials: 'Testimonials',
      contact: 'Contact',
    },

    hero: {
      label: 'Creative Visual Storytelling & Digital Branding',
      name: 'Nadeem Hussein',
      tagline: 'Turning Brands Into\nPremium Experiences',
      subtitle: 'Where Creativity Meets Marketing Performance',
      roles: ['Social Media Specialist', 'Media Buyer', 'Photographer', 'Video Editor', 'Visual Storyteller'],
      cta_portfolio: 'View Portfolio',
      cta_contact: 'Contact Me',
      cta_whatsapp: 'WhatsApp',
      scroll: 'Scroll to explore',
    },

    about: {
      label: 'Who I Am',
      title: 'About Me',
      p1: 'I am an Egyptian creative professional based in the UAE, passionate about visual storytelling and digital branding. My journey started with photography in 2014, and I have evolved into a multifaceted creative strategist who blends artistic vision with data‑driven marketing performance.',
      p2: 'With expertise spanning social media management, media buying, commercial photography, and cinematic video editing, I help premium brands craft compelling visual narratives that captivate audiences and drive real results.',
      values: [
        { icon: '🎨', title: 'Creative Vision',    desc: 'An artistic approach to every project' },
        { icon: '📈', title: 'Performance Driven', desc: 'Results that truly matter' },
        { icon: '✨', title: 'Premium Quality',    desc: 'Luxury embedded in every detail' },
      ],
    },

    timeline: {
      label: 'Career Path',
      title: 'Experience Timeline',
      subtitle: 'A Decade of Creative Excellence',
      events: [
        { year: '2014', icon: '📷', title: 'Photography Journey Begins',     desc: 'Started professional photography — product, portrait, and brand visuals.' },
        { year: '2016', icon: '📱', title: 'Social Media Deep Dive',         desc: 'Mastered platform algorithms, content strategy, and community growth.' },
        { year: '2018', icon: '🎯', title: 'Media Buying Mastery',           desc: 'Launched paid campaigns across Meta, TikTok, Snapchat & Google Ads.' },
        { year: '2020', icon: '🚀', title: 'Full‑Time Creative Professional', desc: 'Managing brands end‑to‑end: strategy, content, ads, and analytics.' },
        { year: 'Now',  icon: '⭐', title: 'Premium Brand Partner',          desc: 'Serving luxury medical, beauty, automotive, and lifestyle brands across UAE.' },
      ],
    },

    skills: {
      label: 'Expertise',
      title: 'Skills & Expertise',
      subtitle: 'What I Do Best',
      items: [
        { name: 'Video Editing',            level: 95 },
        { name: 'Reels Creation',           level: 98 },
        { name: 'Meta Ads',                 level: 92 },
        { name: 'Creative Direction',       level: 90 },
        { name: 'Branding',                 level: 88 },
        { name: 'AI Content Creation',      level: 85 },
        { name: 'Color Grading',            level: 93 },
        { name: 'Cinematic Editing',        level: 91 },
        { name: 'Content Strategy',         level: 94 },
        { name: 'Social Media Management',  level: 97 },
        { name: 'Paid Advertising',         level: 92 },
        { name: 'Photography',              level: 96 },
        { name: 'TikTok Ads',               level: 90 },
        { name: 'Google Ads',               level: 85 },
        { name: 'Snapchat Ads',             level: 88 },
      ],
    },

    services: {
      label: 'What I Offer',
      title: 'Services',
      subtitle: 'Premium Creative Solutions',
      items: [
        { Icon: TrendingUp, title: 'Social Media Management',       desc: 'Strategic content planning, scheduling, engagement, and growth.' },
        { Icon: Target,     title: 'Paid Advertising Campaigns',    desc: 'High‑ROI campaigns across Meta, TikTok, Snapchat & Google.' },
        { Icon: Camera,     title: 'Commercial Photography',        desc: 'Product, portrait, medical, automotive & luxury brand photography.' },
        { Icon: Film,       title: 'Cinematic Reels Editing',       desc: 'Engaging short‑form video with premium color grading & motion.' },
        { Icon: Video,      title: 'Video Production',              desc: 'End‑to‑end video — concept, shoot, edit, and delivery.' },
        { Icon: Palette,    title: 'Creative Content Creation',     desc: 'Unique visual storytelling tailored to your brand identity.' },
        { Icon: Briefcase,  title: 'Branding & Visual Identity',    desc: 'Complete brand development — logo, palette, typography, guidelines.' },
        { Icon: BarChart,   title: 'Marketing Strategy',            desc: 'Data‑driven marketing plans aligned with business objectives.' },
        { Icon: Zap,        title: 'AI Creative Production',        desc: 'Cutting‑edge AI‑powered imagery, video, and creative assets.' },
      ],
    },

    portfolio: {
      label: 'Selected Work',
      title: 'Portfolio',
      subtitle: 'Creative Work Showcase',
      categories: ['All', 'Photography', 'Reels', 'Medical', 'Beauty', 'Restaurants', 'Automotive', 'Fashion', 'Campaigns'],
      items: [
        { id: 1, category: 'Medical',      title: 'SkinDent Clinic Campaign',     type: 'Photography + Ads', emoji: '🏥' },
        { id: 2, category: 'Beauty',       title: 'Damas Beauty Center',          type: 'Branding + Content', emoji: '💄' },
        { id: 3, category: 'Automotive',   title: 'Car Rental Visual Campaign',   type: 'Photography + Reels', emoji: '🚗' },
        { id: 4, category: 'Restaurants',  title: 'Restaurant Content Series',    type: 'Photography + Video', emoji: '🍽️' },
        { id: 5, category: 'Fashion',      title: 'Fashion Brand Lookbook',       type: 'Fashion Photography', emoji: '👗' },
        { id: 6, category: 'Campaigns',    title: 'Meta Ads Performance Suite',   type: 'Paid Advertising', emoji: '📊' },
        { id: 7, category: 'Reels',        title: 'Cinematic Reels Series',       type: 'Video Editing', emoji: '🎬' },
        { id: 8, category: 'Photography',  title: 'Luxury Product Shoot',         type: 'Product Photography', emoji: '📸' },
        { id: 9, category: 'Medical',      title: 'Villanova Hospital Content',   type: 'Medical Photography', emoji: '🩺' },
      ],
    },

    beforeAfter: {
      label: 'Transformations',
      title: 'Before & After',
      subtitle: 'The Power of Creative Direction',
      items: [
        { title: 'Feed Redesign',        before: 'Inconsistent, low-engagement content', after: 'Cohesive luxury aesthetic, +240% engagement' },
        { title: 'Reels Transformation', before: 'Raw, unedited footage',                after: 'Cinematic edit with color grading & motion' },
        { title: 'Ad Campaign Overhaul', before: 'High spend, low ROAS (1.2×)',          after: 'Optimised creatives, ROAS lifted to 4.8×' },
      ],
    },

    brands: {
      label: 'Trusted By',
      title: "Brands I've Worked With",
      subtitle: 'Trusted by Premium Brands Across UAE',
      items: [
        { name: 'SkinDent Clinic',                   sector: 'Medical' },
        { name: 'Bluebell Clinic',                   sector: 'Medical' },
        { name: '515 Clinic',                        sector: 'Medical' },
        { name: 'MedClinic',                         sector: 'Medical' },
        { name: 'Villanova Hospital',                sector: 'Medical' },
        { name: 'Noor Al Mamzar Medical Center',     sector: 'Medical' },
        { name: 'Medfit Poly Clinic',                sector: 'Medical' },
        { name: 'Damas Orchid Clinic',               sector: 'Beauty' },
        { name: 'Damas Beauty Center',               sector: 'Beauty' },
      ],
    },

    stats: {
      label: 'By the Numbers',
      title: 'Achievements',
      items: [
        { number: '10+',   suffix: '', label: 'Years Experience' },
        { number: '100+',  suffix: '', label: 'Creative Projects' },
        { number: '10M+',  suffix: '', label: 'Ad Reach' },
        { number: '50+',   suffix: '', label: 'Brands Worked With' },
        { number: '1000+', suffix: '', label: 'Creative Assets Produced' },
      ],
    },

    testimonials: {
      label: 'Client Love',
      title: 'Testimonials',
      subtitle: 'What Premium Clients Say',
      items: [
        { name: 'Dr. Sarah Ahmed',    role: 'SkinDent Clinic',          text: 'Nadeem transformed our social media presence with stunning visual content and highly strategic campaigns. Truly exceptional.' },
        { name: 'Mohammed Al-Hassan', role: 'Bluebell Clinic',          text: 'Professional, creative, and results‑driven. Our engagement increased by 300% within three months!' },
        { name: 'Fatima Ali',         role: 'Damas Beauty Center',      text: 'Exceptional photography and branding work. Highly recommended for any luxury brand looking to elevate.' },
        { name: 'Ahmed Khalil',       role: 'Villanova Hospital',       text: 'His ability to combine artistic vision with marketing strategy is unmatched. Outstanding ROI on every campaign.' },
        { name: 'Layla Hassan',       role: 'Noor Al Mamzar Medical',   text: 'Creative, punctual, and always delivers beyond expectations. Nadeem is our go‑to content partner.' },
        { name: 'Omar Rashid',        role: 'Car Rental Client',        text: 'The automotive reels he created went viral organically. Simply breathtaking visuals and top‑tier execution.' },
      ],
    },

    instagram: {
      label: 'Follow Along',
      title: 'Follow My Work',
      subtitle: 'Daily creative content across two channels',
      handles: [
        { username: '@nadim.creates', desc: 'Creative content & campaigns', url: INSTAGRAM_CREATES },
        { username: '@nadem.ph',      desc: 'Photography portfolio',        url: INSTAGRAM_PH },
      ],
    },

    whatsapp: {
      title: "Ready to Collaborate?",
      subtitle: "Let's create something extraordinary together.",
      cta: 'Message on WhatsApp',
    },

    contact: {
      label: 'Get In Touch',
      title: 'Contact',
      subtitle: "Let's Work Together",
      form: {
        name: 'Your Full Name',
        email: 'Your Email Address',
        subject: 'Subject',
        message: 'Tell me about your project…',
        submit: 'Send Message',
        success: 'Message sent! I will get back to you shortly.',
      },
      info: [
        { icon: '✉️', label: 'Email',     value: EMAIL,                     href: `mailto:${EMAIL}` },
        { icon: '💬', label: 'WhatsApp',  value: '+971 58 277 4519',         href: `https://wa.me/${WHATSAPP_NUMBER}` },
        { icon: '📸', label: 'Instagram', value: '@nadim.creates',           href: INSTAGRAM_CREATES },
        { icon: '📷', label: 'Instagram', value: '@nadem.ph',                href: INSTAGRAM_PH },
      ],
    },

    footer: {
      copy: `© ${new Date().getFullYear()} NadeemCreative. All rights reserved.`,
      tagline: 'Designed & built with passion by Nadeem Hussein',
    },
  },

  // ─── Arabic ───────────────────────────────────────────────────────────────
  ar: {
    nav: {
      home: 'الرئيسية', about: 'من أنا', experience: 'الخبرات',
      skills: 'المهارات', services: 'الخدمات', portfolio: 'الأعمال',
      brands: 'العلامات التجارية', stats: 'الإنجازات', testimonials: 'آراء العملاء',
      contact: 'تواصل معي',
    },

    hero: {
      label: 'سرد القصص البصرية الإبداعية والعلامات التجارية الرقمية',
      name: 'نديم حسين',
      tagline: 'تحويل العلامات التجارية\nإلى تجارب فاخرة',
      subtitle: 'حيث يلتقي الإبداع بأداء التسويق',
      roles: ['أخصائي وسائل التواصل الاجتماعي', 'مشتري وسائط', 'مصور', 'محرر فيديو', 'راوي قصص بصري'],
      cta_portfolio: 'عرض الأعمال',
      cta_contact: 'تواصل معي',
      cta_whatsapp: 'واتساب',
      scroll: 'مرر للاستكشاف',
    },

    about: {
      label: 'من أنا',
      title: 'عني',
      p1: 'أنا محترف إبداعي مصري مقيم في الإمارات، شغوف بالسرد البصري والعلامات التجارية الرقمية. بدأت رحلتي مع التصوير عام ٢٠١٤، وتطورت لأصبح استراتيجي إبداعي متعدد الأوجه يجمع بين الرؤية الفنية والأداء التسويقي المدعوم بالبيانات.',
      p2: 'بخبرة تشمل إدارة وسائل التواصل الاجتماعي وشراء الوسائط والتصوير التجاري ومونتاج الفيديو السينمائي، أساعد العلامات التجارية الفاخرة في صياغة قصص مرئية مقنعة تأسر الجماهير وتحقق نتائج حقيقية.',
      values: [
        { icon: '🎨', title: 'رؤية إبداعية',      desc: 'نهج فني لكل مشروع' },
        { icon: '📈', title: 'موجه بالأداء',       desc: 'نتائج ذات أهمية حقيقية' },
        { icon: '✨', title: 'جودة فاخرة',         desc: 'رفاهية في كل تفصيلة' },
      ],
    },

    timeline: {
      label: 'المسار المهني',
      title: 'الخط الزمني للخبرات',
      subtitle: 'عقد من التميز الإبداعي',
      events: [
        { year: '٢٠١٤', icon: '📷', title: 'بداية رحلة التصوير',        desc: 'تصوير احترافي للمنتجات والبورتريه والعلامات التجارية.' },
        { year: '٢٠١٦', icon: '📱', title: 'التعمق في وسائل التواصل',   desc: 'إتقان خوارزميات المنصات واستراتيجية المحتوى ونمو المجتمع.' },
        { year: '٢٠١٨', icon: '🎯', title: 'إتقان شراء الوسائط',        desc: 'إطلاق حملات مدفوعة على ميتا وتيك توك وسناب شات وجوجل.' },
        { year: '٢٠٢٠', icon: '🚀', title: 'محترف إبداعي بدوام كامل',   desc: 'إدارة العلامات التجارية بالكامل: استراتيجية، محتوى، إعلانات، تحليلات.' },
        { year: 'الآن',  icon: '⭐', title: 'شريك العلامات التجارية الفاخرة', desc: 'خدمة العلامات الطبية والتجميلية والسياراتية وأسلوب الحياة في الإمارات.' },
      ],
    },

    skills: {
      label: 'الخبرات',
      title: 'المهارات والخبرات',
      subtitle: 'ما أتقنه بأفضل شكل',
      items: [
        { name: 'مونتاج الفيديو',                    level: 95 },
        { name: 'إنشاء الريلز',                      level: 98 },
        { name: 'إعلانات ميتا',                      level: 92 },
        { name: 'التوجيه الإبداعي',                  level: 90 },
        { name: 'العلامات التجارية',                  level: 88 },
        { name: 'إنشاء محتوى بالذكاء الاصطناعي',    level: 85 },
        { name: 'تدرج الألوان',                      level: 93 },
        { name: 'المونتاج السينمائي',                level: 91 },
        { name: 'استراتيجية المحتوى',                level: 94 },
        { name: 'إدارة وسائل التواصل',               level: 97 },
        { name: 'الإعلانات المدفوعة',                level: 92 },
        { name: 'التصوير الفوتوغرافي',               level: 96 },
        { name: 'إعلانات تيك توك',                   level: 90 },
        { name: 'إعلانات جوجل',                      level: 85 },
        { name: 'إعلانات سناب شات',                  level: 88 },
      ],
    },

    services: {
      label: 'ما أقدمه',
      title: 'الخدمات',
      subtitle: 'حلول إبداعية فاخرة',
      items: [
        { Icon: TrendingUp, title: 'إدارة وسائل التواصل الاجتماعي',  desc: 'تخطيط استراتيجي للمحتوى والجدولة والتفاعل والنمو.' },
        { Icon: Target,     title: 'حملات إعلانية مدفوعة',           desc: 'حملات عالية العائد على ميتا وتيك توك وسناب شات وجوجل.' },
        { Icon: Camera,     title: 'التصوير التجاري',                 desc: 'تصوير المنتجات والبورتريه والطبي والسيارات والعلامات الفاخرة.' },
        { Icon: Film,       title: 'مونتاج ريلز سينمائي',            desc: 'محتوى فيديو قصير جذاب مع تدرج ألوان فاخر وحركة احترافية.' },
        { Icon: Video,      title: 'إنتاج الفيديو',                  desc: 'إنشاء فيديو متكامل من الفكرة حتى التسليم.' },
        { Icon: Palette,    title: 'إنشاء محتوى إبداعي',             desc: 'سرد قصص بصري فريد مصمم لهوية علامتك التجارية.' },
        { Icon: Briefcase,  title: 'العلامة التجارية والهوية البصرية', desc: 'تطوير علامة تجارية كامل: شعار، لوحة ألوان، طباعة، دليل الهوية.' },
        { Icon: BarChart,   title: 'استراتيجية التسويق',             desc: 'خطط تسويقية مدعومة بالبيانات ومتوافقة مع أهداف العمل.' },
        { Icon: Zap,        title: 'إنتاج إبداعي بالذكاء الاصطناعي', desc: 'صور ومقاطع وأصول إبداعية متطورة بتقنية الذكاء الاصطناعي.' },
      ],
    },

    portfolio: {
      label: 'أعمال مختارة',
      title: 'معرض الأعمال',
      subtitle: 'عرض الأعمال الإبداعية',
      categories: ['الكل', 'التصوير', 'الريلز', 'طبي', 'تجميل', 'مطاعم', 'سيارات', 'أزياء', 'حملات'],
      items: [
        { id: 1, category: 'طبي',      title: 'حملة عيادة سكين دنت',         type: 'تصوير + إعلانات',    emoji: '🏥' },
        { id: 2, category: 'تجميل',    title: 'مركز داماس للتجميل',          type: 'هوية + محتوى',       emoji: '💄' },
        { id: 3, category: 'سيارات',   title: 'حملة تأجير السيارات البصرية', type: 'تصوير + ريلز',       emoji: '🚗' },
        { id: 4, category: 'مطاعم',    title: 'سلسلة محتوى مطعم',           type: 'تصوير + فيديو',       emoji: '🍽️' },
        { id: 5, category: 'أزياء',    title: 'لوك بوك علامة الأزياء',      type: 'تصوير أزياء',        emoji: '👗' },
        { id: 6, category: 'حملات',    title: 'مجموعة أداء إعلانات ميتا',   type: 'إعلانات مدفوعة',    emoji: '📊' },
        { id: 7, category: 'ريلز',     title: 'سلسلة ريلز سينمائية',        type: 'مونتاج فيديو',       emoji: '🎬' },
        { id: 8, category: 'تصوير',    title: 'جلسة تصوير منتجات فاخرة',    type: 'تصوير منتجات',       emoji: '📸' },
        { id: 9, category: 'طبي',      title: 'محتوى مستشفى فيلانوفا',      type: 'تصوير طبي',          emoji: '🩺' },
      ],
    },

    beforeAfter: {
      label: 'التحولات',
      title: 'قبل وبعد',
      subtitle: 'قوة التوجيه الإبداعي',
      items: [
        { title: 'إعادة تصميم الفيد',    before: 'محتوى غير متسق ومنخفض التفاعل',     after: 'جماليات فاخرة متماسكة، زيادة تفاعل ٢٤٠٪' },
        { title: 'تحويل الريلز',          before: 'لقطات خام وغير معدلة',               after: 'مونتاج سينمائي مع تدرج ألوان وحركة احترافية' },
        { title: 'إعادة هيكلة الحملة',    before: 'إنفاق مرتفع وعائد منخفض (١.٢×)',    after: 'إبداعات محسّنة رفعت العائد إلى ٤.٨×' },
      ],
    },

    brands: {
      label: 'يثقون بي',
      title: 'العلامات التجارية التي عملت معها',
      subtitle: 'موثوق به من قِبل علامات تجارية فاخرة في الإمارات',
      items: [
        { name: 'عيادة سكين دنت',               sector: 'طبي' },
        { name: 'عيادة بلوبيل',                  sector: 'طبي' },
        { name: 'عيادة ٥١٥',                     sector: 'طبي' },
        { name: 'ميد كلينك',                     sector: 'طبي' },
        { name: 'مستشفى فيلانوفا',               sector: 'طبي' },
        { name: 'مركز نور المنزر الطبي',         sector: 'طبي' },
        { name: 'عيادة ميدفيت بولي',             sector: 'طبي' },
        { name: 'عيادة داماس أوركيد',            sector: 'تجميل' },
        { name: 'مركز داماس للتجميل',            sector: 'تجميل' },
      ],
    },

    stats: {
      label: 'بالأرقام',
      title: 'الإنجازات',
      items: [
        { number: '+١٠',   suffix: '', label: 'سنوات خبرة' },
        { number: '+١٠٠',  suffix: '', label: 'مشروع إبداعي' },
        { number: '+١٠م',  suffix: '', label: 'وصول الإعلانات' },
        { number: '+٥٠',   suffix: '', label: 'علامة تجارية' },
        { number: '+١٠٠٠', suffix: '', label: 'أصول إبداعية' },
      ],
    },

    testimonials: {
      label: 'ثقة العملاء',
      title: 'آراء العملاء',
      subtitle: 'ماذا يقول عملاء فاخرون',
      items: [
        { name: 'د. سارة أحمد',    role: 'عيادة سكين دنت',         text: 'نديم حوّل تواجدنا على وسائل التواصل بمحتوى بصري مذهل وحملات استراتيجية عالية الاحترافية. استثنائي حقاً.' },
        { name: 'محمد الحسن',      role: 'عيادة بلوبيل',           text: 'محترف ومبدع وموجه بالنتائج. تفاعلنا زاد بنسبة ٣٠٠٪ خلال ثلاثة أشهر فقط!' },
        { name: 'فاطمة علي',       role: 'مركز داماس للتجميل',     text: 'عمل استثنائي في التصوير والعلامة التجارية. ننصح به بشدة لأي علامة تجارية تسعى للتميز.' },
        { name: 'أحمد خليل',      role: 'مستشفى فيلانوفا',         text: 'قدرته على الجمع بين الرؤية الفنية واستراتيجية التسويق لا مثيل لها. عائد استثمار رائع في كل حملة.' },
        { name: 'ليلى حسن',       role: 'مركز نور المنزر الطبي',   text: 'مبدع، ملتزم بالمواعيد، ويتجاوز التوقعات دائماً. نديم شريكنا الأول في المحتوى.' },
        { name: 'عمر راشد',       role: 'عميل تأجير سيارات',       text: 'الريلز التي أنشأها انتشرت عضوياً بشكل مذهل. مرئيات خلابة وتنفيذ في أعلى المستويات.' },
      ],
    },

    instagram: {
      label: 'تابعني',
      title: 'تابع أعمالي',
      subtitle: 'محتوى إبداعي يومي عبر قناتين',
      handles: [
        { username: '@nadim.creates', desc: 'محتوى إبداعي وحملات',  url: INSTAGRAM_CREATES },
        { username: '@nadem.ph',      desc: 'معرض التصوير الفوتوغرافي', url: INSTAGRAM_PH },
      ],
    },

    whatsapp: {
      title: 'مستعد للتعاون؟',
      subtitle: 'لنخلق معاً شيئاً استثنائياً.',
      cta: 'راسلني على واتساب',
    },

    contact: {
      label: 'تواصل',
      title: 'تواصل معي',
      subtitle: 'لنعمل معاً',
      form: {
        name: 'اسمك الكامل',
        email: 'بريدك الإلكتروني',
        subject: 'الموضوع',
        message: 'أخبرني عن مشروعك…',
        submit: 'إرسال الرسالة',
        success: 'تم الإرسال! سأرد عليك قريباً.',
      },
      info: [
        { icon: '✉️', label: 'البريد الإلكتروني', value: EMAIL,              href: `mailto:${EMAIL}` },
        { icon: '💬', label: 'واتساب',             value: '+971 58 277 4519', href: `https://wa.me/${WHATSAPP_NUMBER}` },
        { icon: '📸', label: 'إنستغرام',           value: '@nadim.creates',   href: INSTAGRAM_CREATES },
        { icon: '📷', label: 'إنستغرام',           value: '@nadem.ph',        href: INSTAGRAM_PH },
      ],
    },

    footer: {
      copy: `© ${new Date().getFullYear()} NadeemCreative. جميع الحقوق محفوظة.`,
      tagline: 'صُمم وبُني بشغف — نديم حسين',
    },
  },
}
