"use strict";
(() => {
    const cosas = [1, 2, 3, 4, 5, '6', 7, 8, 9, 10]; // usualmente no se hacen arreglos con varios tipos de datos pero se puede
    cosas.push('11', 12);
    console.log(cosas);
    const villians = ['Omega Rojo', 'Dormammu', 'Duende Verde'];
    villians.forEach(villano => console.log(villano.toUpperCase()));
})();
