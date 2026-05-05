const productos = [
  {
    nombre: "Mochila Wayuu",
    precio: "COP $90.000",
    img: "../img/MW.png",
    desc: "Tejido artesanal tradicional"
  },
  {
    nombre: "Sombrero Vueltiao",
    precio: "COP $95.000",
    img: "../img/SV.png",
    desc: "Símbolo cultural colombiano"
  }
];

const contenedor = document.getElementById("catalogo");

productos.forEach(p => {
  contenedor.innerHTML += `
    <div class="card">
      <img src="${p.img}">
      <h3>${p.nombre}</h3>
      <p class="price">${p.precio}</p>
      <p class="desc">${p.desc}</p>
      <button class="btn comprar">Comprar</button>
    </div>
  `;
});