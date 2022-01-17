// POO (Programacion Orientada a Objetos)

const producto = {
    nombre: 'tablet',
    precio: 500
}


// Objert constructor

function Producto (nombre, precio) {
     this.nombre = nombre;
     this.precio = precio ; 
}
//prototype , crear funciones que solo se utilizan en un objeto en especifico.

Producto.prototype.formatearProducto =  function() {
    return `El producto ${this.nombre} tiene un precio de ${this.precio}`;
}
const producto2 = new Producto('Monitor Curvo de 50"', 800);
const producto3 = new Producto('Iphone 13 max"', 1300);

function formatearProducto (producto) {
    return `El producto ${producto.nombre} tiene un precio de ${producto.precio}`;
}


console.log (producto2.formatearProducto()) ;
console.log (producto3.formatearProducto()) ;



