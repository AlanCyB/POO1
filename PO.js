/*
let objeto = {
    nombre: "Alejandro",
    apellido: "Salcedo",
    edad: 24,
    valor: null,
    imp: function (){
        console.log(this.edad,this.nombre,this.apellido)
    },
    agregar: function (value){
        this.valor = value; 
    },
    
    estatura: 168
}

console.log(objeto.nombre,objeto.apellido,objeto.edad);
console.log(objeto.valor);
objeto.agregar("Hola");
console.log(objeto.valor);
objeto.imp();

Definan 2 objetos para modelar el proceso de compra de una plataforma de comercio electrónico:

Artículo: representa el producto que se está comprando y tiene los siguientes atributos:
nombre
descripción
precio
cantidad
fotografía URL


Venta: representa una instancia de venta y tiene los siguientes atributos
artículos (lista de artículos)
total
ID del cliente
correo electrónico del cliente

Implementen los objetos Artículo y Venta usando JavaScript.
 */

var articulo = {
    nombre: "Carro",
    descripción: "Tesla", 
    precio: "$1677.76261672",
    cantidad: 3,
    fotografía: null,
    valor: function (value){
        this.fotografía = value;
    }
}

var venta ={
    articulos: [articulo,articulo],
    total: 1.5,
    idCliente: 7812787831,
    email: "example@gmail.com"
}
var articulos = document.getElementsByClassName("contenedor")[0];
articulo.valor("https://www.elcarrocolombiano.com/wp-content/uploads/2020/05/20200524-TESLA-REPRESENTACION-OFICIAL-EN-COLOMBIA-01-1.jpg");

for(element of venta.articulos){
    articulos.innerHTML += `<ul>
        <li>${element.nombre}</li>
        <li>${element.descripción}</li>
        <li>${element.precio}</li>
        <li>${element.cantidad}</li>
        <img src="${element.fotografía}">
    </ul>
    `
}
console.log(articulo);
console.log(venta);