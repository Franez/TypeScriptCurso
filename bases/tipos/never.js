"use strict";
(() => {
    const error = (message) => {
        throw new Error(message);
    }; // never es una funcion que debe terminar en error
    error('Auxilio');
    console.log('Hola Mundo');
})();
