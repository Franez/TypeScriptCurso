"use strict";
(() => {
    const hero = 'Batman';
    //funcion tradiciona
    function returnName() {
        return hero;
    }
    // funcion de flecha
    const activateBatiSignal = () => {
        return 'Activamos la batiseñal';
    };
    const heroName = returnName();
    const accion = activateBatiSignal();
    console.log(typeof activateBatiSignal);
    console.log('el heroe es: ', heroName);
    console.log('Si necesitamos ayuda entonces :', accion);
})();
