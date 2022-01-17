const reproductor ={
    reproducir : function(id) {
        console.log ( `Repoduciendo Cancion: ${id}` )
    },
    pausar: function() {
        console.log('Pausando....')
    },
    crearPlaylist: function(nombre) {
        console.log (`Creando la Playlist: ${nombre}`)

    }, 
    ReproducirPlaylist: function(nombre) {
        console.log (`Reoroduciendo la Playlist: ${nombre}`)

    }
}
reproductor.borrarcancion = function(id){
    console.log(`Eliminando cancion: ${id}`)
}




reproductor.reproducir(3840)
reproductor.pausar(20)
reproductor.borrarcancion(233)
reproductor.crearPlaylist('Trap')
reproductor.ReproducirPlaylist('Trap')
