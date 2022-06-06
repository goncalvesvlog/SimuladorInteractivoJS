//El proyecto consiste en una libreria de autor. Inspirado en ver que los autores que me gustan tienen paginas muy feas. xD

//Simulador de compra de libros
function calculoFinal (precioBooks, cantidadBooks, porcentajeDescuento, costoEnvio) {
    //descuento
    let descuento = (precioBooks * porcentajeDescuento) / 100;
    //libro - descuento
    let precioConDescuento = precioBooks - descuento;
    //agrego el costo de envio
    return (precioConDescuento * cantidadBooks) + costoEnvio;
}

const envio = 2990; //Precio de Envio en Chile

//Solicitudes al cliente con respecto a su compra
let books = parseFloat(prompt("Ingrese el precio del libro:"));
let cantidad = parseInt(prompt("Ingrese las unidades que desea comprar:"));
let descuento = parseInt(prompt("Ingrese porcentaje de descuento:"))

//llamamos a la funcion y luego mostramos el precio final por alert
let precioFinal = calculoFinal(books, cantidad, descuento, envio);
alert("El total a pagar es $" + precioFinal + ". (Incluye Envio por $2.990)");
alert("¡Qué buen precio! Disfruta tu libro...");