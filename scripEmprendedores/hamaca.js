
// ── 1. DATOS ─────────────────────────────────────────────────

const anuncios = [
  {
    img: "../img/anuncioHM1.png",
    titulo: "¡Nueva colección caribeña!",
    subtitulo: "Hamacas artesanales con diseños exclusivos de Cartagena",
    badge: "NUEVO",
  },
  {
    img: "../img/anuncioHM2.png",
    titulo: "Envíos a toda Colombia 🇨🇴",
    subtitulo: "Recibe tu hamaca en la puerta de tu casa",
    badge: "OFERTA",
  },
  {
    img: "../img/anuncioHM3.png",
    titulo: "Hecho a mano con amor",
    subtitulo: "Cada pieza es única, tejida por artesanos locales",
    badge: "ARTESANAL",
  },
];

const productos = [
  {
    id: 1,
    nombre: "Hamaca Caribeña Clásica",
    precio: 90000,
    img: "../img/HC.png",
    descripcion: "Tejida a mano, colores vivos, perfecta para exteriores.",
    whatsapp: "573042668475",
    stripe: "https://buy.stripe.com/test_00w3cu7gf7ui21119DbAs00",
  },
  {
    id: 2,
    nombre: "Hamaca Doble Familiar",
    precio: 140000,
    img: "../img/HC.png",
    descripcion: "Tamaño extra, ideal para dos personas. Alta resistencia.",
    whatsapp: "573042668475",
    stripe: "https://buy.stripe.com/test_00w3cu7gf7ui21119DbAs00",
  },
  {
    id: 3,
    nombre: "Hamaca Niño Pequeño",
    precio: 55000,
    img: "../img/HC.png",
    descripcion: "Suave y segura para los más pequeños de la casa.",
    whatsapp: "573042668475",
    stripe: "https://buy.stripe.com/test_00w3cu7gf7ui21119DbAs00",
  },
  {
    id: 4,
    nombre: "Hamaca Premium Luxury",
    precio: 200000,
    img: "../img/HC.png",
    descripcion: "Hilos de algodón premium, acabados en flecos dorados.",
    whatsapp: "573042668475",
    stripe: "https://buy.stripe.com/test_00w3cu7gf7ui21119DbAs00",
  },
  {
    id: 5,
    nombre: "Hamaca Franja Tricolor",
    precio: 95000,
    img: "../img/HC.png",
    descripcion: "Diseño en franjas inspirado en la bandera de Cartagena.",
    whatsapp: "573042668475",
    stripe: "https://buy.stripe.com/test_00w3cu7gf7ui21119DbAs00",
  },
  {
    id: 6,
    nombre: "Hamaca Macramé Bohemia",
    precio: 120000,
    img: "../img/HC.png",
    descripcion: "Estilo boho-chic, perfecta para decorar tu hogar.",
    whatsapp: "573042668475",
    stripe: "https://buy.stripe.com/test_00w3cu7gf7ui21119DbAs00",
  },
];

// ── 2. SLIDER DE ANUNCIOS ────────────────────────────────────

let sliderActual = 0;
let sliderInterval = null;

function renderSlider() {
  const wrapper = document.getElementById("slider-wrapper");
  if (!wrapper) return;

  wrapper.innerHTML = anuncios
    .map(
      (a, i) => `
    <div class="slide ${i === 0 ? "active" : ""}" data-index="${i}">
      <img src="${a.img}" alt="${a.titulo}" class="slide-img" />
    
    </div>
  `
    )
    .join("");

  renderDots();
  startSlider();
}

function renderDots() {
  const dotsEl = document.getElementById("slider-dots");
  if (!dotsEl) return;
  dotsEl.innerHTML = anuncios
    .map(
      (_, i) =>
        `<button class="dot ${i === 0 ? "active" : ""}" onclick="irASlide(${i})" aria-label="Anuncio ${i + 1}"></button>`
    )
    .join("");
}

function irASlide(index) {
  const slides = document.querySelectorAll(".slide");
  const dots = document.querySelectorAll(".dot");

  slides[sliderActual]?.classList.remove("active");
  dots[sliderActual]?.classList.remove("active");

  sliderActual = (index + anuncios.length) % anuncios.length;

  slides[sliderActual]?.classList.add("active");
  dots[sliderActual]?.classList.add("active");
}

function siguienteSlide() {
  irASlide(sliderActual + 1);
}

function anteriorSlide() {
  irASlide(sliderActual - 1);
}

function startSlider() {
  clearInterval(sliderInterval);
  sliderInterval = setInterval(siguienteSlide, 4000);
}

// ── 3. CATÁLOGO ───────────────────────────────────────────────

function formatPrecio(n) {
  return "COP $" + n.toLocaleString("es-CO");
}

function renderCatalogo(lista) {
  const grid = document.getElementById("catalogo-grid");
  if (!grid) return;

  if (lista.length === 0) {
    grid.innerHTML = `<p class="sin-resultados">No se encontraron productos.</p>`;
    return;
  }

  grid.innerHTML = lista
    .map(
      (p) => `
    <div class="hm-card" data-id="${p.id}">
      <div class="hm-card-img-wrap">
        <img src="${p.img}" alt="${p.nombre}" class="hm-card-img" loading="lazy" />
        <div class="hm-card-overlay">
          <a href="${p.stripe}" target="_blank" class="btn-comprar">
            <i class="fa-solid fa-bag-shopping"></i> Comprar
          </a>
          <a href="https://wa.me/${p.whatsapp}?text=Hola!%20Me%20interesa%20la%20${encodeURIComponent(p.nombre)}" target="_blank" class="btn-wsp">
            <i class="fa-brands fa-whatsapp"></i>
          </a>
        </div>
      </div>
      <div class="hm-card-info">
        <h3 class="hm-card-nombre">${p.nombre}</h3>
        <p class="hm-card-desc">${p.descripcion}</p>
        <span class="hm-card-precio">${formatPrecio(p.precio)}</span>
      </div>
    </div>
  `
    )
    .join("");
}

// ── 4. BUSCADOR Y FILTROS ─────────────────────────────────────

function filtrarProductos() {
  const q = (document.getElementById("buscador")?.value || "").toLowerCase();
  const orden = document.getElementById("orden")?.value || "default";

  let lista = productos.filter(
    (p) =>
      p.nombre.toLowerCase().includes(q) ||
      p.descripcion.toLowerCase().includes(q)
  );

  if (orden === "asc") lista.sort((a, b) => a.precio - b.precio);
  else if (orden === "desc") lista.sort((a, b) => b.precio - a.precio);

  renderCatalogo(lista);
}

// ── 5. INIT ───────────────────────────────────────────────────

document.addEventListener("DOMContentLoaded", () => {
  renderSlider();
  renderCatalogo(productos);

  document.getElementById("buscador")?.addEventListener("input", filtrarProductos);
  document.getElementById("orden")?.addEventListener("change", filtrarProductos);

  // Pausa slider al hover
  const sliderEl = document.getElementById("slider-wrapper");
  if (sliderEl) {
    sliderEl.addEventListener("mouseenter", () => clearInterval(sliderInterval));
    sliderEl.addEventListener("mouseleave", startSlider);
  }
});
