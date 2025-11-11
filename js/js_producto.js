// componente mejorado

const productos = [
    { nombre: "Peloton", precio: 30, img: "https://pbs.twimg.com/media/Gs8UiZBXQAAirL0?format=jpg&name=4096x4096" },
    { nombre: "carro", precio: 5000000, img: "https://cdn.buttercms.com/avKprw8TRwaYFzQ2hxZK" },
    { nombre: "peloton", precio: 30, img: "https://pbs.twimg.com/media/Gs8UiZBXQAAirL0?format=jpg&name=4096x4096" },
    { nombre: "carro", precio: 5000000, img: "https://cdn.buttercms.com/avKprw8TRwaYFzQ2hxZK" }
];

const contenedor = document.getElementById("contenedor");

productos.forEach(prod => {
    const card = document.createElement("div");
    card.className = "card";

    card.innerHTML = `
    <img src="${prod.img}" alt=${prod.nombre}>
            <h3>${prod.nombre}</h3>
            <p>${prod.precio}</p>
            <button>Agregar</button>
    `;

    contenedor.appendChild(card);
});