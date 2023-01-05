(() => {

    const error = (message: string):never => { //a abc le estamos asignando una funcion de flecha
        throw new Error(message)
    } // never es una funcion que debe terminar en error

    error('Auxilio');
    console.log('Hola Mundo');

})()