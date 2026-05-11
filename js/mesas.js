//BOTÓN VER PEDIDOS DE LA MESA

let bVerPedidosMesa = document.getElementById("bVerPedidosMesa");

bVerPedidosMesa.onclick = function () {
    window.location.href = 'pedidoDeLaMesa.html';
}

//BOTÓN VOLVER
let bVolver = document.getElementById("bVolver");

bVolver.onclick = function () {
    window.location.href = '../../HTML/RESTAURANTE/introducirCarta.html';
}