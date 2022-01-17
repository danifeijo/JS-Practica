// Arrays

const  numeros = [10, 20, 30 , 40 , 50] ;
console.table (numeros);

const meses = ['Enero', 'Febrero', 'marzo', 'abril', 'mayo'];
console.table (meses);

// Acceder a los valores de un arreglo 

// console.log (numeros[4]);
// console.log (numeros[2]);


// // como saber la extencion de un arreglo

// console.log (meses.length);

// numeros.forEach (function(numeros) {
//     console.log(numeros);
// })

numeros.push(60, 70 , 80); // agrega al final de arreglo

numeros.unshift (-10,-20, -30);// agrega al inicio de arreglo

console.table(numeros);


// meses.pop(); // elimina el ultimo elemneto
// meses.shift (); //elimina el primer elemento

// meses.splice (2, 1);
// console.table(meses);

//Rest operator  o Spread operator

const nuevoArreglo = [...meses, 'junio']
console.log(nuevoArreglo)