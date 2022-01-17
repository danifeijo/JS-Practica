const menotodoPago = 'cheque' ;

switch (menotodoPago) {
case 'Tarjeta':
    console.log ('Pagaste con Tarjeta');
    break ;
    case 'Tarjeta':
    console.log ('Pagaste con Tarjeta');
    break ;
case 'cheque':
    console.log ('El usuario pagara con Cheque, revisaremos los fondos primero');
    break ;
 case 'Efectivo':
    console.log ('El usuario pagara en efectivo, revisaremos los fondos primero');
    break ;
    default:
        console.log ('Aun no has pagado') ; 
     break; 
}