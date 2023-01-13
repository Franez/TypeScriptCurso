"use strict";
(() => {
    /* al crear una funcion así, los parametros que va a recivir
    la funcion deben ser string como estan definidos,
    de lo contrario lanzaran error */
    const fullName = (lastName, firstName) => {
        if (!firstName) {
            throw new Error('Nombre requerido');
        }
        return `${firstName} ${lastName} `;
    };
    //
    const name = fullName('Tony', 'Stark');
    console.log({ name });
})();
