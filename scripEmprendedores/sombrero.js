const anuncios = [
  {
    img: "../img/anuncioSV1.png",
  },
  {
    img: "../img/anuncioSV2.png",
  },
  {
    img: "../img/anuncioSV3.png",
  },
];

const productos = [
  {
    id: 1,
    nombre: "Sombrero Vueltiao Clásico",
    precio: 120000,
    img: "../img/SV.png",
    tag: "TRADICIONAL",
    descripcion: "Tejido en caña flecha",
    whatsapp: "573042668475",
    stripe: "#",
  },
  {
    id: 2,
    nombre: "Sombrero Vueltiao 21 Vueltas",
    precio: 80000,
    img: "../img/SV.png",
    tag: "PREMIUM",
    descripcion: "Máxima expresión del tejido",
    whatsapp: "573042668475",
    stripe: "#",
  },
  {
    id: 3,
    nombre: "Sombrero Vueltiao 21 Vueltas",
    precio: 680000,
    img: "../img/SV.png",
    tag: "PREMIUM",
    descripcion: "Máxima expresión del tejido",
    whatsapp: "573042668475",
    stripe: "#",
  },
  {
    id: 4,
    nombre: "Sombrero Vueltiao 21 Vueltas",
    precio: 100000,
    img: "../img/SV.png",
    tag: "PREMIUM",
    descripcion: "Máxima expresión del tejido",
    whatsapp: "573042668475",
    stripe: "#",
  },
  {
    id: 5,
    nombre: "Sombrero Vueltiao 21 Vueltas",
    precio: 1000000,
    img: "../img/SV.png",
    tag: "PREMIUM",
    descripcion: "Máxima expresión del tejido",
    whatsapp: "573042668475",
    stripe: "#",
  },
  {
    id: 6,
    nombre: "Sombrero Vueltiao 21 Vueltas",
    precio: 2000000,
    img: "../img/SV.png",
    tag: "PREMIUM",
    descripcion: "Máxima expresión del tejido",
    whatsapp: "573042668475",
    stripe: "#",
  }
];

// ── SLIDER ─────────────────────────
let sliderActual = 0;
let sliderInterval = null;

function renderSlider() {
  const wrapper = document.getElementById("slider-wrapper");
  if (!wrapper) return;

  // Sin overlay — las imágenes ya traen su propio texto
  wrapper.innerHTML = anuncios.map((a, i) => `
    <div class="slide ${i === 0 ? "active" : ""}">
      <img src="${a.img}" class="slide-img" />
    </div>
  `).join("");

  startSlider();
}

function siguienteSlide() {
  const slides = document.querySelectorAll(".slide");
  slides[sliderActual].classList.remove("active");
  sliderActual = (sliderActual + 1) % slides.length;
  slides[sliderActual].classList.add("active");
}

function anteriorSlide() {
  const slides = document.querySelectorAll(".slide");
  slides[sliderActual].classList.remove("active");
  sliderActual = (sliderActual - 1 + slides.length) % slides.length;
  slides[sliderActual].classList.add("active");
}

function startSlider() {
  clearInterval(sliderInterval);
  sliderInterval = setInterval(siguienteSlide, 4000);
}

// ── CATÁLOGO ──────────────────────
function formatPrecio(n) {
  return "COP $" + n.toLocaleString("es-CO");
}

function renderCatalogo(lista) {
  const grid = document.getElementById("catalogo-grid");
  if (!grid) return;

  grid.innerHTML = lista.map(p => `
    <div class="sv-card">
      <div class="sv-card-img-wrap">
        <img src="${p.img}" class="sv-card-img"/>
        <span class="sv-card-tag">${p.tag}</span>
      </div>

      <div class="sv-card-info">
        <h3>${p.nombre}</h3>
        <p>${p.descripcion}</p>

        <div class="sv-card-footer">
          <span>${formatPrecio(p.precio)}</span>

          <div class="sv-card-btns">
            <button class="btn-comprar" onclick="agregarAlCarrito(${p.id})">
              🛒 Añadir
            </button>

            <a href="https://wa.me/${p.whatsapp}" target="_blank" class="btn-wsp">
              <i class="fa-brands fa-whatsapp"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  `).join("");
}

// ── FILTRO ────────────────────────
function filtrarProductos() {
  const q = document.getElementById("buscador").value.toLowerCase();
  const filtrados = productos.filter(p =>
    p.nombre.toLowerCase().includes(q)
  );
  renderCatalogo(filtrados);
}

// ── CARRITO ───────────────────────
let carrito = [];

function toggleCart() {
  document.getElementById("cartPanel").classList.toggle("active");
}

function agregarAlCarrito(id) {
  const producto = productos.find(p => p.id === id);
  if (!producto) return;
  carrito.push(producto);
  actualizarCarrito();
}

function eliminarDelCarrito(index) {
  carrito.splice(index, 1);
  actualizarCarrito();
}

function actualizarCarrito() {
  const contenedor = document.getElementById("cartItems");
  const totalEl = document.getElementById("cartTotal");
  const countEl = document.getElementById("cart-count");

  contenedor.innerHTML = "";
  let total = 0;

  carrito.forEach((p, i) => {
    total += p.precio;
    contenedor.innerHTML += `
      <div class="cart-item">
        <span>${p.nombre}</span>
        <span>${formatPrecio(p.precio)}</span>
        <button onclick="eliminarDelCarrito(${i})">❌</button>
      </div>
    `;
  });

  totalEl.innerText = total.toLocaleString("es-CO");
  countEl.innerText = carrito.length;
}

function checkout() {
  if (carrito.length === 0) {
    alert("El carrito está vacío");
    return;
  }
  alert("Compra simulada 🧾");
}

// ── MENÚ MÓVIL ───────────────────
const menuToggle = document.getElementById("menuToggle");
const navMenu = document.getElementById("navMenu");
const closeMenu = document.getElementById("closeMenu");

menuToggle?.addEventListener("click", () => navMenu.classList.add("active"));
closeMenu?.addEventListener("click", () => navMenu.classList.remove("active"));

// ── INIT ─────────────────────────
document.addEventListener("DOMContentLoaded", () => {
  renderSlider();
  renderCatalogo(productos);

  document
    .getElementById("buscador")
    ?.addEventListener("input", filtrarProductos);
});