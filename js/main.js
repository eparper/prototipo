let bEscanearQR = document.getElementById("bEscanearQR");

if (bEscanearQR) {
    bEscanearQR.onclick = function () {
        window.location.href = 'HTML/CLIENTE/cartaMenus.html';
    }
}

let bRegistraResta = document.getElementById("bRegistraResta");

if (bRegistraResta) {
    bRegistraResta.onclick = function () {
        window.location.href = 'HTML/RESTAURANTE/introducirCarta.html';
    }
}

let bAtras3 = document.getElementById("bAtras3");

if (bAtras3) {
    bAtras3.onclick = function () {
        window.location.href = 'finPedidoConExito.html';
    }
}

let bVolver = document.getElementById("bVolver");

if (bVolver) {
    bVolver.onclick = function () {
        window.location.href = 'mesas.html';
    }
}

let bVolver2 = document.getElementById("bVolver2");

if (bVolver2) {
    bVolver2.onclick = function () {
        window.location.href = 'RESTAURANTE/introducirCarta.html';
    }
}