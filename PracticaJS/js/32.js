// async / await

function descargarNuevosClientes () {
    return new Promise ( resolve =>{
        console.log ('Descargando Clientes... espere...')

        setTimeout(() => {
            resolve ('los clientes fueron evaluados')
        }, 5000);


    })
}

function descargarUltimosPedidos () {
    return new Promise ( resolve =>{
        console.log ('Descargando Pedidos...')

        setTimeout(() => {
            resolve ('los Pedidos fueron descargados')
        }, 3000);


    })
}

async function app () {
    try {
    //  const resultado =  await descargarNuevosClientes ();
    //  const pedidos = await descargarUltimosPedidos ();
    //    console.log (resultado);
    //      console.log (resultado);
        
        const resultado = await Promise.all([descargarNuevosClientes(), descargarUltimosPedidos()]);
        console.log (resultado [0]);
        console.log (resultado [1]);
        
    } catch (error) {
        console.log(error);
        
    }
}

app();
