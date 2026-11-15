function crearCard(producto) {
    const card = document.createElement("div");
    card.className = "card";

    const imagen = document.createElement("img");
    imagen.src = producto.image;
    imagen.alt = producto.title;
    imagen.width = 170;

    const nombre = document.createElement("h3");
    nombre.textContent = producto.title;

    const precio = document.createElement("p");
    precio.textContent = "$" + producto.price;

    const boton = document.createElement("button");
    boton.textContent = "Comprar";
    boton.classList.add("button");
    boton.addEventListener("click", () => {
        console.log("Producto seleccionado: " + producto.title);
    });

    card.appendChild(imagen);
    card.appendChild(nombre);
    card.appendChild(precio);
    card.appendChild(boton);

    return card;
}

const contenedor = document.getElementById("contenedor-productos");

fetch('https://fakestoreapi.com/products')
  .then(response => response.json())
  .then(productos => {
    productos.forEach(producto => {
      contenedor.appendChild(crearCard(producto));
    });
  });
