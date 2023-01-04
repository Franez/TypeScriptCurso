
(() => { //funcion anonima autoinvocada

// Clase 1

const msg: string ='Hola Mundo';
const hero = {
    name: 'iron man',
    age: 45
}

hero.age = 50
console.log(hero.name, hero.age + 1)
console.log(msg);

// Clase 2

const a = 10; //constante , no cambia su valor
let b = 10; //let crea variable que puede cambiar su valor peor no su tipo
const c:number = 10; //lo ideal es declarar el tipo de dato, esto limita los valores que puede tener la variable o constante
let d:any; //como indica any puede ser cualquir tipo de dato por ejempo:


d = 3.14 //un double
d = true //un booleano
d = {} //un objeto
d = [] //un arreglo

function sayHello1(msg: number) {
    const e:string = 'Mi edad es: ';
    console.log(e, msg);
}

sayHello1(25);

})() //para correr este archivo invocar se desde el index




