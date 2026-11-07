const form = document.getElementById("leadForm");
const whatsappNumber = "5511996924703";

if (form) {
  form.addEventListener("submit", function (event) {
    event.preventDefault();
    const nome = document.getElementById("nome").value.trim();
    const telefone = document.getElementById("telefone").value.trim();
    const email = document.getElementById("email").value.trim();
    const interesses = Array.from(document.querySelectorAll('input[name="interesse"]:checked')).map((item) => item.value);
    if (!nome || !telefone || !email) {
      alert(translations[currentLanguage].validation);
      return;
    }
    const greeting = translations[currentLanguage].leadMessage;
    const message = [greeting, "", `Nome: ${nome}`, `Telefone: ${telefone}`, `E-mail: ${email}`, `Interesses: ${interesses.length ? interesses.join(", ") : "Gostaria de conhecer as oportunidades disponíveis."}`].join("\n");
    window.open(`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`, "_blank", "noopener,noreferrer");
  });
}

const translations = {
  pt: {
    validation:"Preencha seu nome, telefone e e-mail para continuar.",leadMessage:"Olá! Tenho interesse em ser um franqueado e gostaria de receber mais informações.",
    aboutKicker:"CONHEÇA A JSF",aboutTitle:"Quem somos",aboutP1:"A JSF transforma o ecossistema imobiliário e de negócios por meio da inovação, da acessibilidade e de oportunidades para quem deseja empreender.",aboutP2:"Pioneira no modelo de franchising imobiliário 100% gratuito, a JSF conecta pessoas a oportunidades e oferece suporte para quem busca independência financeira e crescimento profissional.",aboutP3:"Nossa estrutura reúne plataforma, e-books práticos, cursos EAD e apoio para mais de 200 modelos de negócios, criando caminhos para transformar ideias em resultados.",
    offerKicker:"SOLUÇÕES PARA SUA EMPRESA",offerTitle:"Nossos serviços",offerIntro:"Soluções para fortalecer sua marca, sua presença digital e a identidade do seu negócio.",webTitle:"Criação de sites",webText:"Sites profissionais para apresentar sua empresa, seus serviços e facilitar o contato com clientes.",webPrice:"Projetos a partir de R$ 1.500",uniformTitle:"Uniformes personalizados",uniformText:"Camisetas, polos, bonés e uniformes personalizados para valorizar a identidade da sua equipe.",giftsTitle:"Brindes e personalizados",giftsText:"Chaveiros, brindes corporativos e produtos personalizados para divulgar sua marca.",videoKicker:"CONHEÇA NOSSA HISTÓRIA",videoTitle:"JSF Imóveis em vídeo",videoIntro:"Assista à apresentação institucional e conheça melhor nossas oportunidades.",videoPlaceholder:"Espaço reservado para o vídeo institucional",videoLater:"O link será adicionado em breve.",pillarsKicker:"UM ECOSSISTEMA DE OPORTUNIDADES",pillarsTitle:"Os 7 pilares de negócios",pillarsIntro:"Conheça as frentes que compõem nosso ecossistema. Estes conteúdos são provisórios e serão atualizados.",pillar1:"Mercado imobiliário",pillar2:"Jurídico e documentação",pillar3:"Educação e capacitação",pillar4:"Franquias e negócios",pillar5:"Saúde e bem-estar",pillar6:"Tecnologia e inovação",pillar7:"Geração de negócios",locationShort:"São Paulo e região",nationalShort:"Atuação em todo o Brasil",sevenShort:"7 pilares de negócios",become:"Seja um",franchise:"FRANQUEADO",heroDescription:"Faça parte de um grupo sólido, com 7 pilares de negócios e benefícios para você e para o seu futuro.",whatWeDo:"O QUE FAZEMOS",servicesTitle:"Nossos serviços",servicesSummary:"Do imóvel ao jurídico e à saúde online. Tudo o que você precisa, em um só lugar.",seeServices:"Ver todos os serviços",formEyebrow:"FALE COM UM DOS NOSSOS CONSULTORES",formTitle:"E SEJA UM FRANQUEADO!",formIntro:"Preencha os seus dados e escolha como prefere falar com a gente.",namePlaceholder:"Nome completo",phonePlaceholder:"Número de telefone (com DDD)",emailPlaceholder:"E-mail",interestLegend:"Tenho interesse em",goWhatsapp:"Ir para o WhatsApp",talkConsultant:"Converse agora com um consultor",sendWhatsapp:"Enviar mensagem no WhatsApp",startChat:"Inicie a conversa sem preencher nada",privacy:"Seus dados serão usados para retorno sobre seu interesse.",representations:"Representações",viewProjects:"Ver projetos",difference:"Eu faço a diferença",pillarDesc:"Soluções e oportunidades para conectar pessoas e desenvolver negócios."
  },
  es: {
    validation:"Complete su nombre, teléfono y correo electrónico para continuar.",leadMessage:"¡Hola! Me interesa convertirme en franquiciado y quisiera recibir más información.",aboutKicker:"CONOZCA JSF",aboutTitle:"Quiénes somos",aboutP1:"JSF transforma el ecosistema inmobiliario y empresarial mediante la innovación, la accesibilidad y oportunidades para quienes desean emprender.",aboutP2:"Pionera en el modelo de franquicia inmobiliaria 100 % gratuita, JSF conecta personas con oportunidades y brinda apoyo a quienes buscan independencia financiera y crecimiento profesional.",aboutP3:"Nuestra estructura reúne una plataforma, libros electrónicos prácticos, cursos a distancia y apoyo para más de 200 modelos de negocio.",offerKicker:"SOLUCIONES PARA SU EMPRESA",offerTitle:"Nuestros servicios",offerIntro:"Soluciones para fortalecer su marca, su presencia digital y la identidad de su negocio.",webTitle:"Creación de sitios web",webText:"Sitios profesionales para presentar su empresa y facilitar el contacto con clientes.",webPrice:"Proyectos desde R$ 1.500",uniformTitle:"Uniformes personalizados",uniformText:"Camisetas, polos, gorras y uniformes personalizados para su equipo.",giftsTitle:"Regalos y artículos personalizados",giftsText:"Llaveros, regalos corporativos y productos personalizados para promocionar su marca.",videoKicker:"CONOZCA NUESTRA HISTORIA",videoTitle:"JSF Imóveis en video",videoIntro:"Vea nuestra presentación institucional y conozca nuestras oportunidades.",videoPlaceholder:"Espacio reservado para el video institucional",videoLater:"El enlace se añadirá próximamente.",pillarsKicker:"UN ECOSISTEMA DE OPORTUNIDADES",pillarsTitle:"Los 7 pilares de negocio",pillarsIntro:"Conozca las áreas de nuestro ecosistema. Estos contenidos son provisionales y se actualizarán.",pillar1:"Mercado inmobiliario",pillar2:"Servicios jurídicos y documentos",pillar3:"Educación y formación",pillar4:"Franquicias y negocios",pillar5:"Salud y bienestar",pillar6:"Tecnología e innovación",pillar7:"Desarrollo de negocios",locationShort:"São Paulo y región",nationalShort:"Presencia en todo Brasil",sevenShort:"7 pilares de negocio",become:"Conviértase en",franchise:"FRANQUICIADO",heroDescription:"Forme parte de un grupo sólido, con 7 pilares de negocio y beneficios para usted y su futuro.",whatWeDo:"LO QUE HACEMOS",servicesTitle:"Nuestros servicios",servicesSummary:"Desde el sector inmobiliario hasta los servicios jurídicos y la salud online. Todo en un solo lugar.",seeServices:"Ver todos los servicios",formEyebrow:"HABLE CON UNO DE NUESTROS ASESORES",formTitle:"¡Y CONVIÉRTASE EN FRANQUICIADO!",formIntro:"Complete sus datos y elija cómo prefiere hablar con nosotros.",namePlaceholder:"Nombre completo",phonePlaceholder:"Número de teléfono (con código de área)",emailPlaceholder:"Correo electrónico",interestLegend:"Me interesa",goWhatsapp:"Ir a WhatsApp",talkConsultant:"Hable ahora con un asesor",sendWhatsapp:"Enviar mensaje por WhatsApp",startChat:"Inicie la conversación sin completar el formulario",privacy:"Sus datos se utilizarán para responder a su consulta.",representations:"Representaciones",viewProjects:"Ver proyectos",difference:"Yo hago la diferencia",pillarDesc:"Soluciones y oportunidades para conectar personas y desarrollar negocios."
  },
  en: {
    validation:"Please enter your name, phone number, and email to continue.",leadMessage:"Hello! I'm interested in becoming a franchisee and would like more information.",aboutKicker:"GET TO KNOW JSF",aboutTitle:"Who we are",aboutP1:"JSF transforms the real estate and business ecosystem through innovation, accessibility, and opportunities for people who want to become entrepreneurs.",aboutP2:"A pioneer in the 100% free real estate franchising model, JSF connects people with opportunities and supports those seeking financial independence and professional growth.",aboutP3:"Our structure brings together a platform, practical e-books, online courses, and support for more than 200 business models.",offerKicker:"SOLUTIONS FOR YOUR BUSINESS",offerTitle:"Our services",offerIntro:"Solutions to strengthen your brand, digital presence, and business identity.",webTitle:"Website development",webText:"Professional websites to showcase your company and make it easier for customers to contact you.",webPrice:"Projects starting at R$ 1,500",uniformTitle:"Custom uniforms",uniformText:"Custom T-shirts, polo shirts, caps, and uniforms to enhance your team's identity.",giftsTitle:"Promotional and custom gifts",giftsText:"Keychains, corporate gifts, and custom products to promote your brand.",videoKicker:"OUR STORY",videoTitle:"JSF Imóveis video",videoIntro:"Watch our company presentation and learn more about our opportunities.",videoPlaceholder:"Institutional video placeholder",videoLater:"The link will be added soon.",pillarsKicker:"AN ECOSYSTEM OF OPPORTUNITIES",pillarsTitle:"The 7 business pillars",pillarsIntro:"Explore the areas that make up our ecosystem. This content is provisional and will be updated.",pillar1:"Real estate",pillar2:"Legal services and documentation",pillar3:"Education and training",pillar4:"Franchises and business",pillar5:"Health and wellness",pillar6:"Technology and innovation",pillar7:"Business development",locationShort:"São Paulo and region",nationalShort:"Operating throughout Brazil",sevenShort:"7 business pillars",become:"Become a",franchise:"FRANCHISEE",heroDescription:"Join a solid group with 7 business pillars and benefits for you and your future.",whatWeDo:"WHAT WE DO",servicesTitle:"Our services",servicesSummary:"From real estate to legal services and online healthcare. Everything you need in one place.",seeServices:"See all services",formEyebrow:"TALK TO ONE OF OUR CONSULTANTS",formTitle:"BECOME A FRANCHISEE!",formIntro:"Enter your details and choose how you would like to contact us.",namePlaceholder:"Full name",phonePlaceholder:"Phone number (with area code)",emailPlaceholder:"Email address",interestLegend:"I'm interested in",goWhatsapp:"Continue to WhatsApp",talkConsultant:"Chat with a consultant now",sendWhatsapp:"Send a WhatsApp message",startChat:"Start a conversation without filling out the form",privacy:"Your information will be used to respond to your inquiry.",representations:"Representations",viewProjects:"View projects",difference:"I make a difference",pillarDesc:"Solutions and opportunities to connect people and develop businesses."
  },
  zh: {
    validation:"请填写您的姓名、电话和电子邮箱以继续。",leadMessage:"您好！我有兴趣成为加盟商，希望了解更多信息。",aboutKicker:"了解 JSF",aboutTitle:"关于我们",aboutP1:"JSF 通过创新、便捷服务和创业机会，推动房地产与商业生态系统的发展。",aboutP2:"作为提供 100% 免费房地产加盟模式的先行者，JSF 将人们与机会连接起来，并为寻求财务独立和职业发展的伙伴提供支持。",aboutP3:"我们的体系包括平台、实用电子书、在线课程，并为 200 多种商业模式提供支持。",offerKicker:"企业解决方案",offerTitle:"我们的服务",offerIntro:"帮助提升品牌形象、数字化影响力和企业特色的解决方案。",webTitle:"网站开发",webText:"通过专业网站展示您的企业和服务，让客户更方便地联系您。",webPrice:"项目价格：1,500 巴西雷亚尔起",uniformTitle:"定制服装",uniformText:"定制 T 恤、Polo 衫、帽子和工作制服，展现团队形象。",giftsTitle:"企业礼品与定制产品",giftsText:"钥匙扣、企业礼品及定制产品，帮助推广您的品牌。",videoKicker:"了解我们的故事",videoTitle:"JSF Imóveis 视频介绍",videoIntro:"观看企业介绍，进一步了解我们的机会。",videoPlaceholder:"企业宣传视频预留位置",videoLater:"视频链接即将添加。",pillarsKicker:"机会生态系统",pillarsTitle:"七大业务支柱",pillarsIntro:"了解构成我们生态系统的业务领域。以下内容为临时示例，之后将更新。",pillar1:"房地产",pillar2:"法律服务与文件",pillar3:"教育与培训",pillar4:"加盟与商业",pillar5:"健康与福祉",pillar6:"科技与创新",pillar7:"商业发展",locationShort:"圣保罗及周边地区",nationalShort:"业务覆盖巴西全国",sevenShort:"七大业务支柱",become:"成为",franchise:"加盟合作伙伴",heroDescription:"加入实力雄厚的团队，探索七大业务领域，为您和未来创造更多机会。",whatWeDo:"我们的业务",servicesTitle:"我们的服务",servicesSummary:"从房地产到法律服务和在线健康服务，满足您的多种需求。",seeServices:"查看全部服务",formEyebrow:"联系我们的顾问",formTitle:"成为加盟合作伙伴！",formIntro:"请填写您的信息，并选择希望的联系方式。",namePlaceholder:"姓名",phonePlaceholder:"电话号码（含区号）",emailPlaceholder:"电子邮箱",interestLegend:"我感兴趣的领域",goWhatsapp:"前往 WhatsApp",talkConsultant:"立即与顾问交流",sendWhatsapp:"发送 WhatsApp 消息",startChat:"无需填写表格即可开始对话",privacy:"您的信息仅用于回复您的咨询。",representations:"项目展示",viewProjects:"查看项目",difference:"创造不同",pillarDesc:"连接人们并推动业务发展的解决方案与机会。"
  }
};


// =============================================
// TRADUÇÕES DAS NOVAS SEÇÕES
// =============================================

const extraTranslations = {
  pt: {
    aboutKickerNew: "CONHEÇA A JSF",
    aboutTitleNew: "Quem somos",
    aboutSubtitleNew: "Conectando pessoas, oportunidades e novos caminhos para empreender.",
    aboutMainLabel: "NOSSA EMPRESA",
    aboutMainTitle: "Muito mais que uma imobiliária.",
    aboutMainP1: "A JSF transforma o ecossistema imobiliário e de negócios por meio da inovação, da acessibilidade e de oportunidades para quem deseja empreender.",
    aboutMainP2: "Nossa proposta é conectar pessoas a possibilidades reais de crescimento, oferecendo estrutura, conhecimento e apoio para desenvolver novos negócios.",
    aboutFooter: "Imóveis, negócios e oportunidades.",
    feature1Label: "MODELO DE FRANQUIA",
    feature1Title: "100% gratuita",
    feature1Text: "Um modelo de franchising imobiliário sem cobrança de taxa de franquia.",
    feature2Label: "POSSIBILIDADES",
    feature2Title: "Mais de 200 modelos",
    feature2Text: "Apoio para diferentes modelos de negócios e oportunidades em vários segmentos.",
    feature3Label: "DESENVOLVIMENTO",
    feature3Title: "Conhecimento e suporte",
    feature3Text: "Plataforma, e-books práticos, cursos EAD e apoio para desenvolver ideias e negócios.",

    servicesEyebrowNew: "SOLUÇÕES E OPORTUNIDADES",
    servicesTitleNew: "Nossos serviços",
    servicesIntroNew: "Um ecossistema de soluções que conecta pessoas, empresas e oportunidades em diferentes segmentos.",
    servicesCountNew: "10 frentes de atuação",

    service1Title: "Compra e venda de imóveis",
    service1Text: "Soluções e oportunidades no mercado imobiliário.",
    service2Title: "Avaliação mercadológica",
    service2Text: "Análise de imóveis e de seu posicionamento no mercado.",
    service3Title: "Assessoria para inventário",
    service3Text: "Apoio em demandas relacionadas a inventários.",
    service4Title: "Assessoria e consultoria",
    service4Text: "Orientação e suporte para diferentes necessidades.",
    service5Title: "Advocacia online",
    service5Text: "Serviços e atendimento jurídico em formato digital.",
    service6Title: "Cursos IAD",
    service6Text: "Capacitação e conhecimento para desenvolver habilidades.",
    service7Title: "Franquias de negócios",
    service7Text: "Oportunidades para empreender e desenvolver negócios.",
    service8Title: "Saúde online",
    service8Text: "Soluções e serviços de saúde em formato digital.",
    service9Title: "Geração de negócios e emprego",
    service9Text: "Conexões para impulsionar oportunidades e trabalho.",
    service10Title: "E muito mais para você!",
    service10Text: "Conheça outras possibilidades do ecossistema JSF."
  },

  es: {
    aboutKickerNew: "CONOZCA JSF",
    aboutTitleNew: "Quiénes somos",
    aboutSubtitleNew: "Conectamos personas, oportunidades y nuevos caminos para emprender.",
    aboutMainLabel: "NUESTRA EMPRESA",
    aboutMainTitle: "Mucho más que una inmobiliaria.",
    aboutMainP1: "JSF transforma el ecosistema inmobiliario y empresarial mediante la innovación, la accesibilidad y oportunidades para quienes desean emprender.",
    aboutMainP2: "Nuestra propuesta es conectar personas con posibilidades reales de crecimiento, ofreciendo estructura, conocimiento y apoyo para desarrollar nuevos negocios.",
    aboutFooter: "Inmuebles, negocios y oportunidades.",
    feature1Label: "MODELO DE FRANQUICIA",
    feature1Title: "100 % gratuita",
    feature1Text: "Un modelo de franquicia inmobiliaria sin cobrar una tarifa de franquicia.",
    feature2Label: "POSIBILIDADES",
    feature2Title: "Más de 200 modelos",
    feature2Text: "Apoyo para diferentes modelos de negocio y oportunidades en varios sectores.",
    feature3Label: "DESARROLLO",
    feature3Title: "Conocimiento y apoyo",
    feature3Text: "Plataforma, libros electrónicos prácticos, cursos online y apoyo para desarrollar ideas y negocios.",

    servicesEyebrowNew: "SOLUCIONES Y OPORTUNIDADES",
    servicesTitleNew: "Nuestros servicios",
    servicesIntroNew: "Un ecosistema de soluciones que conecta personas, empresas y oportunidades en diferentes sectores.",
    servicesCountNew: "10 áreas de actuación",

    service1Title: "Compra y venta de inmuebles",
    service1Text: "Soluciones y oportunidades en el mercado inmobiliario.",
    service2Title: "Valoración inmobiliaria",
    service2Text: "Análisis de inmuebles y de su posición en el mercado.",
    service3Title: "Asesoría para inventarios",
    service3Text: "Apoyo en asuntos relacionados con inventarios.",
    service4Title: "Asesoría y consultoría",
    service4Text: "Orientación y apoyo para diferentes necesidades.",
    service5Title: "Servicios jurídicos online",
    service5Text: "Servicios y atención jurídica en formato digital.",
    service6Title: "Cursos IAD",
    service6Text: "Formación y conocimientos para desarrollar habilidades.",
    service7Title: "Franquicias y negocios",
    service7Text: "Oportunidades para emprender y desarrollar negocios.",
    service8Title: "Salud online",
    service8Text: "Soluciones y servicios de salud en formato digital.",
    service9Title: "Generación de negocios y empleo",
    service9Text: "Conexiones para impulsar oportunidades y empleo.",
    service10Title: "¡Y mucho más para usted!",
    service10Text: "Conozca otras posibilidades del ecosistema JSF."
  },

  en: {
    aboutKickerNew: "GET TO KNOW JSF",
    aboutTitleNew: "Who we are",
    aboutSubtitleNew: "Connecting people, opportunities, and new paths to entrepreneurship.",
    aboutMainLabel: "OUR COMPANY",
    aboutMainTitle: "Much more than a real estate agency.",
    aboutMainP1: "JSF transforms the real estate and business ecosystem through innovation, accessibility, and opportunities for people who want to become entrepreneurs.",
    aboutMainP2: "Our goal is to connect people with real opportunities for growth, offering structure, knowledge, and support to develop new businesses.",
    aboutFooter: "Real estate, business, and opportunities.",
    feature1Label: "FRANCHISE MODEL",
    feature1Title: "100% free",
    feature1Text: "A real estate franchising model with no franchise fee.",
    feature2Label: "POSSIBILITIES",
    feature2Title: "More than 200 models",
    feature2Text: "Support for different business models and opportunities across various industries.",
    feature3Label: "DEVELOPMENT",
    feature3Title: "Knowledge and support",
    feature3Text: "A platform, practical e-books, online courses, and support to develop ideas and businesses.",

    servicesEyebrowNew: "SOLUTIONS AND OPPORTUNITIES",
    servicesTitleNew: "Our services",
    servicesIntroNew: "A solutions ecosystem connecting people, companies, and opportunities across different industries.",
    servicesCountNew: "10 areas of activity",

    service1Title: "Buying and selling real estate",
    service1Text: "Solutions and opportunities in the real estate market.",
    service2Title: "Real estate valuation",
    service2Text: "Property analysis and market positioning.",
    service3Title: "Estate inventory assistance",
    service3Text: "Support with matters related to estate inventories.",
    service4Title: "Advisory and consulting",
    service4Text: "Guidance and support for different needs.",
    service5Title: "Online legal services",
    service5Text: "Legal services and assistance in digital format.",
    service6Title: "IAD courses",
    service6Text: "Training and knowledge to develop new skills.",
    service7Title: "Business franchises",
    service7Text: "Opportunities to start and develop businesses.",
    service8Title: "Online healthcare",
    service8Text: "Digital healthcare solutions and services.",
    service9Title: "Business and job creation",
    service9Text: "Connections that help create opportunities and jobs.",
    service10Title: "And much more for you!",
    service10Text: "Discover other possibilities within the JSF ecosystem."
  },

  zh: {
    aboutKickerNew: "了解 JSF",
    aboutTitleNew: "关于我们",
    aboutSubtitleNew: "连接人们、机遇与创业发展的新道路。",
    aboutMainLabel: "我们的公司",
    aboutMainTitle: "不仅仅是一家房地产公司。",
    aboutMainP1: "JSF 通过创新、便捷服务和创业机会，推动房地产与商业生态系统的发展。",
    aboutMainP2: "我们的目标是将人们与真正的成长机会连接起来，并提供结构、知识和支持，帮助发展新业务。",
    aboutFooter: "房地产、商业与机遇。",
    feature1Label: "加盟模式",
    feature1Title: "100% 免费",
    feature1Text: "房地产加盟模式，不收取加盟费。",
    feature2Label: "多种可能",
    feature2Title: "200 多种模式",
    feature2Text: "为不同行业的商业模式和机会提供支持。",
    feature3Label: "发展与成长",
    feature3Title: "知识与支持",
    feature3Text: "平台、实用电子书、在线课程，以及发展创意和业务的支持。",

    servicesEyebrowNew: "解决方案与机遇",
    servicesTitleNew: "我们的服务",
    servicesIntroNew: "连接人们、企业与机会，为不同领域提供多样化解决方案。",
    servicesCountNew: "10 个业务领域",

    service1Title: "房地产买卖",
    service1Text: "房地产市场的解决方案与机会。",
    service2Title: "房地产市场评估",
    service2Text: "分析房地产及其市场定位。",
    service3Title: "遗产清单协助",
    service3Text: "提供与遗产清单相关的支持。",
    service4Title: "咨询与顾问服务",
    service4Text: "为不同需求提供指导与支持。",
    service5Title: "在线法律服务",
    service5Text: "以数字形式提供法律服务与协助。",
    service6Title: "IAD 课程",
    service6Text: "通过培训和知识学习发展技能。",
    service7Title: "商业加盟",
    service7Text: "创业与业务发展的机会。",
    service8Title: "在线健康服务",
    service8Text: "数字化健康解决方案与服务。",
    service9Title: "创造商业与就业机会",
    service9Text: "建立联系，推动机会和就业发展。",
    service10Title: "还有更多精彩内容！",
    service10Text: "探索 JSF 生态系统中的其他可能性。"
  }
};


// =============================================
// SISTEMA DE IDIOMAS
// =============================================

let currentLanguage = localStorage.getItem("jsf-language") || "pt";

function getTranslation(key) {
  return (
    extraTranslations[currentLanguage]?.[key] ??
    translations[currentLanguage]?.[key] ??
    translations.pt[key] ??
    extraTranslations.pt[key] ??
    null
  );
}

function applyLanguage(language) {
  currentLanguage = translations[language] ? language : "pt";

  // Traduz textos sem apagar ícones ou elementos internos.
  document.querySelectorAll("[data-i18n]").forEach((element) => {
    const key = element.dataset.i18n;
    const translatedText = getTranslation(key);

    if (translatedText !== null) {
      element.textContent = translatedText;
    }
  });

  // Traduz placeholders dos campos.
  document.querySelectorAll("[data-i18n-placeholder]").forEach((element) => {
    const key = element.dataset.i18nPlaceholder;
    const translatedText = getTranslation(key);

    if (translatedText !== null) {
      element.setAttribute("placeholder", translatedText);
    }
  });

  // Opcional: traduz também valores dos campos, se configurados no HTML.
  document.querySelectorAll("[data-i18n-value]").forEach((element) => {
    const key = element.dataset.i18nValue;
    const translatedText = getTranslation(key);

    if (translatedText !== null) {
      element.value = translatedText;
    }
  });

  // Atualiza o idioma do documento.
  const languageCodes = {
    pt: "pt-BR",
    es: "es",
    en: "en",
    zh: "zh-CN"
  };

  document.documentElement.lang = languageCodes[currentLanguage];

  // Atualiza o seletor.
  const selector = document.getElementById("languageSelect");

  if (selector) {
    selector.value = currentLanguage;
  }

  // Guarda a escolha do visitante.
  localStorage.setItem("jsf-language", currentLanguage);
}

// Evento de troca de idioma.
const languageSelect = document.getElementById("languageSelect");

if (languageSelect) {
  languageSelect.addEventListener("change", (event) => {
    applyLanguage(event.target.value);
  });
}

// Aplica o idioma salvo ao abrir o site.
applyLanguage(currentLanguage);


// =============================================
// JSF - ANIMAÇÕES LATERAIS EM TODO O SITE
// =============================================

(function initScrollReveal() {

  // Elementos que entram pela esquerda.
  const leftElements = [
    ".topbar .brand",
    ".hero-copy",
    ".about-heading",
    ".about-main-card",
    ".services-heading",
    ".offerings-section .section-heading",
    ".video-section .section-heading",
    ".pillars-section .section-heading",
    ".contact-section .lead-card"
  ];

  // Elementos que entram pela direita.
  const rightElements = [
    ".hero-photo",
    ".hero-side-card",
    ".about-feature",
    ".services-intro",
    ".video-player",
    ".representations-section .projects-card"
  ];

  // Cards organizados em sequência.
  const gridElements = [
    ".service-item",
    ".offerings-section .offer-card",
    ".pillar-card"
  ];

  const allElements = [];

  // Adiciona elementos com direção e atraso.
  function addElements(selectors, direction) {

    selectors.forEach((selector) => {

      const elements = document.querySelectorAll(selector);

      elements.forEach((element, index) => {

        if (element.classList.contains("scroll-reveal")) {
          return;
        }

        element.classList.add("scroll-reveal");
        element.classList.add(`reveal-${direction}`);

        const isMobile = window.matchMedia("(max-width: 760px)").matches;
const delay = isMobile
    ? Math.min(index * 90, 360)
    : Math.min(index * 240, 1200);

        element.style.setProperty(
          "--reveal-delay",
          `${delay}ms`
        );

        allElements.push(element);

      });

    });

  }

  addElements(leftElements, "left");
  addElements(rightElements, "right");

  // Os cards da grade alternam os lados.
  gridElements.forEach((selector) => {

    const elements = document.querySelectorAll(selector);

    elements.forEach((element, index) => {

      element.classList.add("scroll-reveal");

      const direction = index % 2 === 0 ? "left" : "right";

      element.classList.add(`reveal-${direction}`);

      const isMobile = window.matchMedia("(max-width: 760px)").matches;
const delay = isMobile
    ? Math.min(index * 90, 360)
    : Math.min(index * 240, 1200);

      element.style.setProperty(
        "--reveal-delay",
        `${delay}ms`
      );

      allElements.push(element);

    });

  });

  // Respeita a preferência por menos movimento.
  const prefersReducedMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)"
  ).matches;

  if (prefersReducedMotion) {
    return;
  }

  if (!("IntersectionObserver" in window)) {
    return;
  }

  document.documentElement.classList.add("js-scroll");

  // Observa a entrada dos elementos na tela.
  const observer = new IntersectionObserver(

    (entries, currentObserver) => {

      entries.forEach((entry) => {

        if (entry.isIntersecting) {

          entry.target.classList.add("is-visible");

          // Não repete a animação ao subir e descer.
          currentObserver.unobserve(entry.target);

        }

      });

    },

    {
      threshold: 0.08,
      rootMargin: "0px 0px -45px 0px"
    }

  );

  allElements.forEach((element) => {
    observer.observe(element);
  });

})();



/* =========================================
   NOVAS OPORTUNIDADES JSF
========================================= */

// Botões de interesse das novas oportunidades.
// Ao clicar, seleciona o interesse no formulário
// e direciona a pessoa para a área de contato.

document.querySelectorAll(
  ".opportunities-section [data-interest]"
).forEach((button) => {

  button.addEventListener("click", function () {

    const interest = this.dataset.interest;

    const contactForm = document.getElementById("leadForm");

    if (!contactForm || !interest) {
      return;
    }

    const interestInputs = contactForm.querySelectorAll(
      'input[name="interesse"]'
    );

    let matched = false;

    interestInputs.forEach((input) => {

      if (input.value.trim() === interest.trim()) {

        input.checked = true;
        matched = true;

      }

    });

    // Se o interesse ainda não existir entre as opções
    // do formulário, cria uma opção selecionada.
    if (!matched) {

      const interestGrid = contactForm.querySelector(
        ".interest-grid"
      );

      if (interestGrid) {

        const label = document.createElement("label");

        const input = document.createElement("input");

        input.type = "checkbox";
        input.name = "interesse";
        input.value = interest;
        input.checked = true;

        label.appendChild(input);
        label.appendChild(
          document.createTextNode(" " + interest)
        );

        interestGrid.appendChild(label);

      }

    }

  });

});


// WHATSAPP FIXO

(function () {

  const whatsappNumber = "5511996924703";

  const floatingButton = document.querySelector(
    ".whatsapp-floating"
  );

  if (!floatingButton) {
    return;
  }

  floatingButton.href =
    `https://wa.me/${whatsappNumber}`;

  floatingButton.target = "_blank";

  floatingButton.rel = "noopener noreferrer";

})();
