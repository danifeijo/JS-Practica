// this


const reservacion = {
    nombre: 'Daniel',
    apellido: 'Feijo',
    Total: 5500,
    pagado: false,
    informacion: function() {
        console.log (`El Cliente ${this.nombre} reservo y su cantidad a pagar es de ${this.Total}`)
    }
}

const reservacion2 = {
    nombre: 'Lionel Andres',
    apellido: 'Messi',
    Total: 5500,
    pagado: false,
    informacion: function() {
        console.log (`El Cliente ${this.nombre} reservo y su cantidad a pagar es de ${this.Total}`)
    }
}



reservacion.informacion();
reservacion2.informacion();