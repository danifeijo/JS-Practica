const usuarioAutenticado = new Promise ((resolve, reject)=> {
    const auth = false;
    if(auth) {
        resolve (' usuario autenticado');

    }
    else {
        reject(' No se pudo iniciar sesion');
    }
}
);

console.log (usuarioAutenticado);

usuarioAutenticado
.then(function(resultado){
    console.log(resultado)
}
)
.catch(function(error) {
    console.log(error);
}
)

//  en los promises extisten 3 valores

// pending: no se ah cumplido pero tampoco fue rechazado

//fulfielled : ya se cumplio

// rejected :  se ha rechazado o no se pudo cumplir