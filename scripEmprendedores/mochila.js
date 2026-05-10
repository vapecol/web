

// ── DATOS: ANUNCIOS SLIDER ────────────────────
const anuncios = [
  {
    img: "../img/MW.png",
    titulo: "Mochilas Wayuu auténticas",
    subtitulo: "Tejidas a mano por artesanas de La Guajira",
    badge: "COLECCIÓN",
  },
  {
    img: "../img/MW.png",
    titulo: "Arte y color en cada puntada",
    subtitulo: "Cada mochila cuenta una historia única",
    badge: "DESTACADO",
  },
  {
    img: "../img/MW.png",
    titulo: "Envíos a todo el país 🇨🇴",
    subtitulo: "Recibe tu mochila directo en tu puerta",
    badge: "OFERTA",
  },
];

// ── DATOS: PRODUCTOS ──────────────────────────
const productos = [
  { id: 1,  nombre: "Mochila Susurritos",     categoria: "pequeña",  color: "multicolor", precio: 65000,  img: "../img/MW.png",  desc: "Pequeña y vibrante, perfecta para el día a día." },
  { id: 2,  nombre: "Mochila Wayuu Grande",   categoria: "grande",   color: "rojo",       precio: 180000, img: "../img/MW.png",  desc: "Amplia y resistente, hecha con hilos gruesos de calidad." },
  { id: 3,  nombre: "Bolso Mediano Palma",    categoria: "mediana",  color: "verde",      precio: 120000, img: "../img/MW.png",  desc: "Diseño vegetal inspirado en la selva tropical." },
  { id: 4,  nombre: "Clutch Fiesta",          categoria: "clutch",   color: "amarillo",   precio: 55000,  img: "../img/MW.png",  desc: "Clutch elegante para ocasiones especiales." },
  { id: 5,  nombre: "Mochila Océano",         categoria: "grande",   color: "azul",       precio: 195000, img: "../img/MW.png",  desc: "Tonos del mar en cada uno de sus hilos." },
  { id: 6,  nombre: "Bolso Tucán",            categoria: "mediana",  color: "multicolor", precio: 135000, img: "../img/MW.png",  desc: "Colores vivos que evocan la selva colombiana." },
  { id: 7,  nombre: "Mochila Llanos",         categoria: "grande",   color: "naranja",    precio: 170000, img: "../img/MW.png",  desc: "Cálida y acogedora como los llanos orientales." },
  { id: 8,  nombre: "Bolso Amanecer",         categoria: "mediana",  color: "rojo",       precio: 110000, img: "../img/MW.png",  desc: "Rojo intenso que irradia energía y pasión." },
  { id: 9,  nombre: "Clutch Noche",           categoria: "clutch",   color: "morado",     precio: 60000,  img: "../img/MW.png",  desc: "Elegante clutch en tonos profundos." },
  { id: 10, nombre: "Mochila Selva",          categoria: "grande",   color: "verde",      precio: 185000, img: "../img/MW.png", desc: "Verde profundo, homenaje a nuestra naturaleza." },
  { id: 11, nombre: "Bolso Paraíso",          categoria: "mediana",  color: "amarillo",   precio: 125000, img: "../img/MW.png", desc: "Tonos solares con detalles intrincados." },
  { id: 12, nombre: "Mochila Festival",       categoria: "grande",   color: "multicolor", precio: 200000, img: "../img/MW.png", desc: "La más festiva de la colección, un arcoíris en tus manos." },
  { id: 13, nombre: "Bolso Coral",            categoria: "mediana",  color: "naranja",    precio: 115000, img: "../img/MW.png", desc: "Naranja coral que no pasa desapercibido." },
  { id: 14, nombre: "Clutch Verano",          categoria: "clutch",   color: "azul",       precio: 58000,  img: "../img/MW.png", desc: "Fresco y luminoso, ideal para la playa." },
  { id: 15, nombre: "Mochila Violeta",        categoria: "pequeña",  color: "morado",     precio: 72000,  img: "../img/MW.png", desc: "Pequeña y misteriosa en tonos violeta." },
  { id: 16, nombre: "Bolso Sahara",           categoria: "grande",   color: "amarillo",   precio: 175000, img: "../img/MW.png", desc: "Colores cálidos y arena, toque desertico." },
  { id: 17, nombre: "Mochila Brisa",          categoria: "pequeña",  color: "azul",       precio: 68000,  img: "../img/MW.png", desc: "Liviana como la brisa del caribe." },
  { id: 18, nombre: "Bolso Fuego",            categoria: "mediana",  color: "rojo",       precio: 130000, img: "../img/MW.png", desc: "Intensidad y pasión en cada punto." },
  { id: 19, nombre: "Clutch Tribu",           categoria: "clutch",   color: "multicolor", precio: 62000,  img: "../img/MW.png", desc: "Motivos tribales que celebran la cultura Wayuu." },
  { id: 20, nombre: "Mochila Esmeralda",      categoria: "grande",   color: "verde",      precio: 190000, img: "../img/MW.png", desc: "Verde esmeralda, la joya de la colección." },
  { id: 21, nombre: "Bolso Atardecer",        categoria: "mediana",  color: "naranja",    precio: 118000, img: "../img/MW.png", desc: "Naranja que captura la magia del atardecer." },
  { id: 22, nombre: "Mochila Arcoíris",       categoria: "grande",   color: "multicolor", precio: 205000, img: "../img/MW.png", desc: "La más colorida, un festín para los ojos." },
];

// ── ESTADO: CARRITO ───────────────────────────
let carrito = [];

// ── INICIALIZACIÓN ────────────────────────────
document.addEventListener("DOMContentLoaded", () => {
  initSlider();
  initAnunciosLaterales();
  renderProductos(productos);
  initFiltros();
  initCarrito();
  initNav();
});

// ════════════════════════════════════════════
//  SLIDER
// ════════════════════════════════════════════
let slideActual = 0;
let sliderInterval;

function initSlider() {
  const wrapper = document.getElementById("slidesWrapper");
  const dotsContainer = document.getElementById("sliderDots");

  anuncios.forEach((a, i) => {
    // Slide
    const slide = document.createElement("div");
    slide.className = "slide";
    slide.innerHTML = `
      <img class="slide-img" src="${a.img}" alt="${a.titulo}" onerror="this.src='https://placehold.co/900x280/2c3e50/white?text=Wayuu'">
      <div class="slide-overlay">
        <span class="slide-badge">${a.badge}</span>
        <h2 class="slide-titulo">${a.titulo}</h2>
        <p class="slide-subtitulo">${a.subtitulo}</p>
      </div>
    `;
    wrapper.appendChild(slide);

    // Dot
    const dot = document.createElement("div");
    dot.className = "dot" + (i === 0 ? " active" : "");
    dot.addEventListener("click", () => goToSlide(i));
    dotsContainer.appendChild(dot);
  });

  document.getElementById("prevBtn").addEventListener("click", () => {
    goToSlide((slideActual - 1 + anuncios.length) % anuncios.length);
  });

  document.getElementById("nextBtn").addEventListener("click", () => {
    goToSlide((slideActual + 1) % anuncios.length);
  });

  startAutoSlide();
}

function goToSlide(index) {
  slideActual = index;
  const wrapper = document.getElementById("slidesWrapper");
  wrapper.style.transform = `translateX(-${index * 100}%)`;

  document.querySelectorAll(".dot").forEach((d, i) => {
    d.classList.toggle("active", i === index);
  });

  resetAutoSlide();
}

function startAutoSlide() {
  sliderInterval = setInterval(() => {
    goToSlide((slideActual + 1) % anuncios.length);
  }, 4000);
}

function resetAutoSlide() {
  clearInterval(sliderInterval);
  startAutoSlide();
}

// ════════════════════════════════════════════
//  ANUNCIOS LATERALES
// ════════════════════════════════════════════
function initAnunciosLaterales() {
  const container = document.getElementById("anunciosLaterales");
  anuncios.forEach(a => {
    const card = document.createElement("div");
    card.className = "anuncio-card";
    card.innerHTML = `
      <img src="${a.img}" alt="${a.titulo}" onerror="this.src='https://placehold.co/280x140/2c3e50/white?text=Wayuu'">
      <div class="anuncio-info">
        <span class="anuncio-badge">${a.badge}</span>
        <p class="anuncio-titulo">${a.titulo}</p>
        <p class="anuncio-subtitulo">${a.subtitulo}</p>
      </div>
    `;
    container.appendChild(card);
  });
}

// ════════════════════════════════════════════
//  CATÁLOGO Y FILTROS
// ════════════════════════════════════════════
function renderProductos(lista) {
  const grid = document.getElementById("grid");
  const info = document.getElementById("resultadoInfo");
  const noRes = document.getElementById("noResultados");

  grid.innerHTML = "";

  if (lista.length === 0) {
    noRes.style.display = "block";
    info.textContent = "";
    return;
  }

  noRes.style.display = "none";
  info.textContent = `${lista.length} producto${lista.length !== 1 ? "s" : ""} encontrado${lista.length !== 1 ? "s" : ""}`;

  lista.forEach(p => {
    const card = document.createElement("div");
    card.className = "sv-card";
    card.innerHTML = `
      <div class="sv-card-img-wrap">
        <img class="sv-card-img" src="${p.img}" alt="${p.nombre}" onerror="this.src='https://placehold.co/300x200/2c3e50/white?text=Mochila'">
        <span class="sv-card-badge">${p.categoria.toUpperCase()}</span>
      </div>
      <div class="sv-card-info">
        <div class="sv-card-nombre">${p.nombre}</div>
        <div class="sv-card-meta">
          <span class="meta-tag"><i class="fa-solid fa-palette"></i> ${p.color}</span>
          <span class="meta-tag"><i class="fa-solid fa-bag-shopping"></i> ${p.categoria}</span>
        </div>
        <p class="sv-card-desc">${p.desc}</p>
        <div class="sv-card-footer">
          <span class="sv-card-precio">$${p.precio.toLocaleString("es-CO")}</span>
          <button class="btn-agregar" onclick="agregarAlCarrito(${p.id})">
            <i class="fa-solid fa-cart-plus"></i> Agregar
          </button>
        </div>
      </div>
    `;
    grid.appendChild(card);
  });
}

function initFiltros() {
  const searchInput    = document.getElementById("searchInput");
  const filtroCategoria = document.getElementById("filtroCategoria");
  const filtroColor    = document.getElementById("filtroColor");
  const filtroPrecio   = document.getElementById("filtroPrecio");
  const btnLimpiar     = document.getElementById("btnLimpiar");

  [searchInput, filtroCategoria, filtroColor, filtroPrecio].forEach(el => {
    el.addEventListener("input", aplicarFiltros);
    el.addEventListener("change", aplicarFiltros);
  });

  btnLimpiar.addEventListener("click", limpiarFiltros);
}

function aplicarFiltros() {
  const texto    = document.getElementById("searchInput").value.toLowerCase().trim();
  const categoria = document.getElementById("filtroCategoria").value;
  const color    = document.getElementById("filtroColor").value;
  const precio   = document.getElementById("filtroPrecio").value;

  let resultado = productos.filter(p => {
    const matchTexto    = !texto    || p.nombre.toLowerCase().includes(texto) || p.desc.toLowerCase().includes(texto);
    const matchCategoria = !categoria || p.categoria === categoria;
    const matchColor    = !color    || p.color === color;
    let   matchPrecio   = true;

    if (precio) {
      const [min, max] = precio.split("-").map(Number);
      matchPrecio = p.precio >= min && p.precio <= max;
    }

    return matchTexto && matchCategoria && matchColor && matchPrecio;
  });

  renderProductos(resultado);
}

function limpiarFiltros() {
  document.getElementById("searchInput").value = "";
  document.getElementById("filtroCategoria").value = "";
  document.getElementById("filtroColor").value = "";
  document.getElementById("filtroPrecio").value = "";
  renderProductos(productos);
}

// ════════════════════════════════════════════
//  CARRITO
// ════════════════════════════════════════════
function initCarrito() {
  document.getElementById("cartBtn").addEventListener("click", abrirCarrito);
  document.getElementById("closeCart").addEventListener("click", cerrarCarrito);
  document.getElementById("cartOverlay").addEventListener("click", cerrarCarrito);
}

function agregarAlCarrito(id) {
  const producto = productos.find(p => p.id === id);
  if (!producto) return;

  const existente = carrito.find(item => item.id === id);
  if (existente) {
    existente.cantidad++;
  } else {
    carrito.push({ ...producto, cantidad: 1 });
  }

  actualizarCarritoUI();
  abrirCarrito();

  // Feedback visual
  const btn = event.currentTarget;
  btn.innerHTML = '<i class="fa-solid fa-check"></i> Agregado';
  btn.style.background = "#27ae60";
  setTimeout(() => {
    btn.innerHTML = '<i class="fa-solid fa-cart-plus"></i> Agregar';
    btn.style.background = "";
  }, 1200);
}

function cambiarCantidad(id, delta) {
  const item = carrito.find(i => i.id === id);
  if (!item) return;
  item.cantidad += delta;
  if (item.cantidad <= 0) {
    carrito = carrito.filter(i => i.id !== id);
  }
  actualizarCarritoUI();
}

function eliminarDelCarrito(id) {
  carrito = carrito.filter(i => i.id !== id);
  actualizarCarritoUI();
}

function actualizarCarritoUI() {
  const itemsContainer = document.getElementById("cartItems");
  const totalEl        = document.getElementById("total");
  const countEl        = document.getElementById("cart-count");

  const totalItems = carrito.reduce((acc, i) => acc + i.cantidad, 0);
  const totalPrecio = carrito.reduce((acc, i) => acc + i.precio * i.cantidad, 0);

  countEl.textContent = totalItems;
  totalEl.textContent = totalPrecio.toLocaleString("es-CO");

  if (carrito.length === 0) {
    itemsContainer.innerHTML = `
      <div class="cart-empty">
        <i class="fa-solid fa-cart-shopping"></i>
        <p>Tu carrito está vacío</p>
      </div>
    `;
    return;
  }

  itemsContainer.innerHTML = carrito.map(item => `
    <div class="cart-item">
      <img src="${item.img}" alt="${item.nombre}" onerror="this.src='https://placehold.co/55x55/2c3e50/white?text=MW'">
      <div class="cart-item-info">
        <div class="cart-item-name">${item.nombre}</div>
        <div class="cart-item-price">$${(item.precio * item.cantidad).toLocaleString("es-CO")}</div>
      </div>
      <div class="cart-item-qty">
        <button onclick="cambiarCantidad(${item.id}, -1)">−</button>
        <span>${item.cantidad}</span>
        <button onclick="cambiarCantidad(${item.id}, 1)">+</button>
      </div>
      <button class="btn-remove" onclick="eliminarDelCarrito(${item.id})">
        <i class="fa-solid fa-trash"></i>
      </button>
    </div>
  `).join("");
}

function abrirCarrito() {
  document.getElementById("cartPanel").classList.add("active");
  document.getElementById("cartOverlay").classList.add("active");
  document.body.style.overflow = "hidden";
}

function cerrarCarrito() {
  document.getElementById("cartPanel").classList.remove("active");
  document.getElementById("cartOverlay").classList.remove("active");
  document.body.style.overflow = "";
}

function checkout() {
  if (carrito.length === 0) {
    alert("Tu carrito está vacío.");
    return;
  }
  const total = carrito.reduce((acc, i) => acc + i.precio * i.cantidad, 0);
  alert(`✅ Pedido registrado\nTotal: $${total.toLocaleString("es-CO")}\n\nPronto nos comunicaremos contigo.`);
  carrito = [];
  actualizarCarritoUI();
  cerrarCarrito();
}

// ════════════════════════════════════════════
//  NAV MÓVIL
// ════════════════════════════════════════════
function initNav() {
  const nav       = document.getElementById("mainNav");
  const menuToggle = document.getElementById("menuToggle");
  const closeNav  = document.getElementById("closeNav");

  menuToggle && menuToggle.addEventListener("click", () => nav.classList.add("active"));
  closeNav   && closeNav.addEventListener("click",   () => nav.classList.remove("active"));
}