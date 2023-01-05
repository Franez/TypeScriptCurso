"use strict";
(() => {
    // Tipos
    const batman = 'Bruce';
    const superman = 'Clark';
    const existe = false;
    // Tuplas
    const parejaHeroes = [batman, superman];
    const villano = ['Lex Lutor', 5, true];
    // Arreglos
    const aliados = ['Mujer Maravilla', 'Acuaman', 'Shazam', 'Flash'];
    const villanos = ['duende verde', 100];
    //Enumeraciones
    let fuerzaHero;
    (function (fuerzaHero) {
        fuerzaHero[fuerzaHero["Flash"] = 1] = "Flash";
        fuerzaHero[fuerzaHero["Superman"] = 2] = "Superman";
        fuerzaHero[fuerzaHero["Batman"] = 3] = "Batman";
        fuerzaHero[fuerzaHero["Acuaman"] = 4] = "Acuaman";
    })(fuerzaHero || (fuerzaHero = {}));
    const fuerzaFlash = fuerzaHero.Flash;
    const fuerzaSuperman = fuerzaHero.Superman;
    const fuerzaBatman = fuerzaHero.Batman;
    const fuerzaAcuaman = fuerzaHero.Acuaman;
    // Retorno de funciones
    function activar_batiseñal() {
        return 'activada';
    }
    function pedir_ayuda() {
        console.log('Auxilio!!!');
    }
    // Aserciones de Tipo
    const poder = '100';
    const largoDelPoder = poder.length;
    console.log(largoDelPoder);
    //notas
    //se pueden declarar arrays de estas 3 formas
    let arr = [1, 2, 3, 4];
    let arr1 = [1, 2, 3, 4];
    let arr2 = [1, 2, 3, 4];
})();
