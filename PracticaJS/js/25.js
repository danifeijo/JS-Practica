const carrito = [
    {nombre:'monitor 20 pulgadas', precio: 500},
    {nombre:'monitor 50 pulgadas', precio: 700},
    {nombre:'tablet', precio: 300},
    {nombre:'auriculares', precio: 200},
    {nombre:'teclado', precio: 150},
    {nombre:'celular', precio: 600}
]

// ForEach

carrito.forEach(producto=> console.log(producto.nombre));



// Map

const arreglo2 = carrito.map(producto=> `${producto.nombre } - ${producto.precio}`);

console.log (arreglo2) ;


// F 
