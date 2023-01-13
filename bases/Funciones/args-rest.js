"use strict";
(() => {
    //resto de los argumentos
    //los rest o restos son parametrosd que se declaran con 3 puntitos y son de tipo coleccion 
    const fullName = (firstName, ...restoDelNombre) => {
        return `${firstName} ${restoDelNombre.join('')}`;
    };
    const superman = fullName('Clark', 'Joseph ', 'Lopez');
    console.log({ superman });
})();
