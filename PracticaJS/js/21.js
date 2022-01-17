//Arrow Functions


const sumar2 =  (n1,n2) => console.log (n2 + n1) ;


sumar2(5,10) ;

const aprendiendo = tecnologia => console.log (`Aprendiendo ${tecnologia}`)
aprendiendo('JavaScript');



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

meses.forEach (mes => {
    if(mes == 'Marzo') {

    
console.log('Marzo si existe')}
    });
//some 

resultado = carrito.some(producto => producto.nombre === 'celular');        
    // console.log(resultado)
// reduce

resultado = carrito.reduce ((total, producto) => total + producto.precio
, 0);

// console.log(resultado);

//filter 

resultado = carrito.filter(producto => producto.precio > 400
) ;

resultado = carrito.filter( producto => producto.nombre !== 'celular'
) ;
// console.log (resultado)




