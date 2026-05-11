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