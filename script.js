
// CONFIGURACIÓN DE DATOS
const rateCOPtoUSD = 0.00026; // 1 COP ≈ 0.00026 USD (ajustar según tasa diaria)
const toggle = document.getElementById("menuToggle");
const nav = document.getElementById("navMenu");

toggle.addEventListener("click", () => {
  nav.classList.toggle("active");
});
document.querySelectorAll("#navMenu a").forEach(link => {
  link.addEventListener("click", () => {
    nav.classList.remove("active");
  });
});
const closeBtn = document.getElementById("closeMenu");

closeBtn.addEventListener("click", () => {
  nav.classList.remove("active");
});

const data = {
  products: [
    {
      image: "img/HC.png",
      name: { es: "Hamaca Caribeña", en: "Caribbean Hammock" },
      price_cop: 160000,
      entrepreneur: 0,
      whatsapp: "573042668475",
      stripe:"https://buy.stripe.com/test_00w3cu7gf7ui21119DbAs00",
      pagina:"./negocio/hamaca.html"
    },
    {
      image: "img/SV.png",
      name: { es: "Sombrero Vueltiao", en: "Vueltiao Hat" },
      price_cop: 90000,
      entrepreneur: 1,
      whatsapp: "573042668475",
      stripe: "https://buy.stripe.com/test_00w3cu7gf7ui21119DbAs00",
      pagina:"./negocio/sombrero.html"
    },
    {
      image: "img/MW.png",
      name: { es: "Mochila Wayuu", en: "Wayuu Bag" },
      price_cop: 130000,
      entrepreneur: 2,
      whatsapp: "573042668475",
      stripe: "https://buy.stripe.com/test_00w3cu7gf7ui21119DbAs00",
      pagina:"./negocio/mochila.html"
    }
    //...agrega más productos aquí
  ],
  
  entrepreneurs: [
    {
      image: "img/Mauricio.jpg",
      name: { es: "Mauricio Martínez", en: "Mauricio Martínez" },
      craft: { es: "Tejedor de hamacas", en: "Hammock Weaver" },
      bio: {
        es: "20 años de experiencia creando hamacas coloridas, inspiradas en el Caribe.",
        en: "20 years weaving colorful hammocks inspired by the Caribbean."
      }
    },
    {
      image: "img/marcialmontalvo.jpg",
      name: { es: "Marcial Montalvo", en: "Marcial Montalvo" },
      craft: { es: "Sombrerero tradicional", en: "Traditional Hatter" },
      bio: {
        es: "Preservando la técnica ancestral del sombrero vueltiao para el mundo.",
        en: "Preserving the ancestral vueltiao hat technique for the world."
      }
    },
    {
      image: "img/tejedoraWayuu.jpg",
      name: { es: "Luz D. Epieyú", en: "Luz D. Epieyú" },
      craft: { es: "Tejedora Wayuu", en: "Wayuu Weaver" },
      bio: {
        es: "Cada mochila cuenta una historia de la cultura wayuu y colores del Caribe.",
        en: "Each bag tells a story of Wayuu culture and Caribbean colors."
      }
    }
    // ...más emprendedores
  ]
};



// TRADUCCIONES
const translations = {
  es: {
    menu_home: "Inicio",
    menu_catalogue: "Catálogo",
    menu_entrepreneurs: "Emprendedores",
    menu_solution: "Problema/Solución",
    menu_benefits: "Beneficios",
    menu_technology: "Tecnología",
    menu_contact: "Contacto",

    hero_title: "Catálogo digital de artesanos de Cartagena",
    hero_subtitle: "Comercio justo, transparencia y crecimiento local de la cultura caribeña.",
    hero_cta: "Ver catálogo",

    catalogue_title: "Nuestro catálogo",

    entrepreneurs_title: "Conoce a nuestros emprendedores",

    problem_solution_title: "Problema & Solución",
    problem: "Problema",
    problem_text: "La visibilidad limitada y el acceso restringido impiden que los artesanos de Cartagena crezcan plenamente.",
    solution: "Solución",
    solution_text: "Un catálogo digital abierto a todos, impulsando ventas directas, comercio justo y transparencia.",

    benefits_title: "Beneficios",
    benefit_1: "Precios en COP y USD",
    benefit_2: "Contacto directo con artesanos",
    benefit_3: "Comercio justo y transparente",
    benefit_4: "Crecimiento y reconocimiento local",
    benefit_5: "Fácil de usar y compartir",

    tech_title: "Tecnología: QR Digital",
    tech_text: "Cada artesano cuenta con un código QR único que facilita el acceso rápido a su perfil, productos y contacto, tanto en el mercado local como para turistas.",

    contact_title: "Contacto directo",
    contact_send: "Enviar",
    contact_name: "Nombre",
    contact_email: "Email",
    contact_message: "Mensaje",

    footer_rights: "Todos los derechos reservados.",

    // Mensajes contacto:
    contact_success: "Mensaje enviado. ¡Gracias! Pronto te responderemos.",
    contact_error: "Por favor revisa el formulario.",
  },
  en: {
    menu_home: "Home",
    menu_catalogue: "Catalogue",
    menu_entrepreneurs: "Entrepreneurs",
    menu_solution: "Problem/Solution",
    menu_benefits: "Benefits",
    menu_technology: "Technology",
    menu_contact: "Contact",

    hero_title: "Digital catalogue of Cartagena's artisans",
    hero_subtitle: "Fair trade, transparency, and local growth of Caribbean culture.",
    hero_cta: "See catalogue",

    catalogue_title: "Our catalogue",

    entrepreneurs_title: "Meet our entrepreneurs",

    problem_solution_title: "Problem & Solution",
    problem: "Problem",
    problem_text: "Limited visibility and access prevent Cartagena's artisans from growing fully.",
    solution: "Solution",
    solution_text: "An open digital catalogue boosting direct sales, fair trade, and transparency.",

    benefits_title: "Benefits",
    benefit_1: "Prices in COP and USD",
    benefit_2: "Direct contact with artisans",
    benefit_3: "Fair and transparent commerce",
    benefit_4: "Local growth and recognition",
    benefit_5: "Easy to use and share",

    tech_title: "Technology: Digital QR",
    tech_text: "Each artisan has a unique QR code for fast access to their profile, products, and contact—ideal for locals and tourists.",

    contact_title: "Direct contact",
    contact_send: "Send",
    contact_name: "Name",
    contact_email: "Email",
    contact_message: "Message",

    footer_rights: "All rights reserved.",

    // Mensajes contacto:
    contact_success: "Message sent. Thank you! We'll get back to you soon.",
    contact_error: "Please check the form.",
  }
};

let currentLang = 'es';  // idioma por defecto
function generateQR() {
  const numero = "573042668475";

  const mensaje = currentLang === "es"
    ? "Hola quiero información sobre los productos"
    : "Hello I want information about the products";

  const url = `https://wa.me/${numero}?text=${encodeURIComponent(mensaje)}`;

  document.getElementById("qrWhatsapp").innerHTML = ""; // limpiar

  new QRCode(document.getElementById("qrWhatsapp"), {
    text: url,
    width: 160,
    height: 160
  });
}

// CAMBIO DE IDIOMA INSTANTÁNEO
function translatePage(lang) {
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    el.innerText = translations[lang][key] || '';
  });
  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    const key = el.getAttribute('data-i18n-placeholder');
    el.placeholder = translations[lang][key] || '';
  });
  currentLang = lang;
  // Actualiza los catálogos y emprendedores
  renderProducts();
  renderEntrepreneurs();
  // Botones idioma - visual
  document.getElementById('es').classList.toggle('active', lang === 'es');
  document.getElementById('en').classList.toggle('active', lang === 'en');

generateQR();
}

// RENDER CATÁLOGO
function renderProducts() {

  const grid = document.getElementById('catalogueGrid');
  grid.innerHTML = '';

  data.products.forEach(prod => {

    const usd = Math.round(prod.price_cop * rateCOPtoUSD);

    const card = document.createElement('div');
    card.className = 'product-card';
    card.style.cursor = 'pointer';

    card.onclick = () => {
      window.location.href = prod.pagina;
    };

    card.innerHTML = `
  <img src="${prod.image}" alt="${prod.name[currentLang]}">

  <h3>${prod.name[currentLang]}</h3>

  <div class="price">
    COP $${prod.price_cop.toLocaleString()}
    <span>/ USD $${usd.toLocaleString()}</span>
  </div>

  <div class="botones-compra">

    <a href="https://wa.me/${prod.whatsapp}" target="_blank">
      <button class="whatsapp" onclick="event.stopPropagation()">
        <i class="fab fa-whatsapp"></i>
      </button>
    </a>

    <a href="${prod.stripe}" target="_blank">
      <button class="comprar" onclick="event.stopPropagation()">
        <i class="fas fa-credit-card"></i> Comprar
      </button>
    </a>

  </div>

  <div class="qr" id="qr-${prod.name.es.replace(/\s/g, '')}"></div>
`;

    grid.appendChild(card);
    //  GENERAR QR AQUÍ
  const qrId = `qr-${prod.name.es.replace(/\s/g, '')}`;

  const url = `https://wa.me/${prod.whatsapp}?text=${encodeURIComponent("Hola quiero comprar " + prod.name.es)}`;

  new QRCode(document.getElementById(qrId), {
    text: url,
    width: 100,
    height: 100
  });


  });
  

}

// RENDER EMPRENDEDORES
function renderEntrepreneurs() {
  const grid = document.getElementById('entrepreneurGrid');
  grid.innerHTML = '';
  data.entrepreneurs.forEach(art => {
    const div = document.createElement('div');
    div.className = 'entrepreneur-card';
    div.innerHTML = `
      <img src="${art.image}" alt="${art.name[currentLang]}">
      <h4>${art.name[currentLang]}</h4>
      <div><strong>${art.craft[currentLang]}</strong></div>
      <p>${art.bio[currentLang]}</p>
    `;
    grid.appendChild(div);
  });
}

// MANEJO IDIOMA (botones)
document.getElementById('es').onclick = () => translatePage('es');
document.getElementById('en').onclick = () => translatePage('en');

// ANIMACIONES SUAVES AL SCROLLEAR
const revealElements = document.querySelectorAll('.catalogue-section, .emprendedores-section, .problema-section, .beneficios-section, .tech-section, .contact-section');
const showOnScroll = () => {
  const triggerBottom = window.innerHeight * 0.90;
  revealElements.forEach(section => {
    const boxTop = section.getBoundingClientRect().top;
    if (boxTop < triggerBottom) section.style.opacity = 1;
    else section.style.opacity = 0.5;
  });
};
window.addEventListener('scroll', showOnScroll);

// OCULTAR / MOSTRAR HEADER AL SCROLL
let lastScroll = 0;
const header = document.querySelector("header");

window.addEventListener("scroll", () => {
  let currentScroll = window.pageYOffset;

  if (currentScroll > lastScroll && currentScroll > 100) {
    header.classList.add("hide"); // baja - oculta
  } else {
    header.classList.remove("hide"); // sube - muestra
  }

  lastScroll = currentScroll;
});

// CONTACTO
document.getElementById('contactForm').onsubmit = (e) => {
  e.preventDefault();
  const form = e.target;
  const name = form.name.value.trim();
  const email = form.email.value.trim();
  const msg = form.message.value.trim();
  const msgDiv = document.getElementById('formMsg');
  // Validación simple
  if(!name || !email || !msg || !email.includes('@')) {
    msgDiv.textContent = translations[currentLang].contact_error;
    msgDiv.style.color = 'crimson';
    return false;
  }
  msgDiv.textContent = translations[currentLang].contact_success;
  msgDiv.style.color = 'green';
  //  conectar a un backend/email real
  form.reset();
  return false;
};

// INICIALIZA
translatePage(currentLang);
showOnScroll();
renderProducts();
renderEntrepreneurs();