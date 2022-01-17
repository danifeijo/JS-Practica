//array methods
const meses = ['Enero', 'Febrero', 'marzo', 'abril', 'mayo'];

const carrito = [
    {nombre:'monitor 20 pulgadas', precio: 500},
    {nombre:'monitor 50 pulgadas', precio: 700},
    {nombre:'tablet', precio: 300},
    {nombre:'auriculares', precio: 200},
    {nombre:'teclado', precio: 150},
    {nombre:'celular', precio: 600}
]

//foreach

meses.forEach (function(mes){
    console.log(mes);
} )

//includes

let resultado = meses.includes('diciembre');


//some 

resultado = carrito.some(producto => producto.nombre === 'celular');        
    

// reduce

resultado = carrito.reduce(function(total, producto){
    return total + producto.precio
}, 0);

console.log(resultado);

//filter 

resultado = carrito.filter(function(producto){
    return producto.precio > 400
}) ;

resultado = carrito.filter(function(producto){
    return producto.nombre !== 'celular'
}) ;
console.log (resultado)