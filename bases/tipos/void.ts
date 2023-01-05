(() => {

    function callBatman():void{ //void significa vacio y si hacemos un metodo con void se supone que no debemos retornar nada
        return; //en este momento nos retorna undefined
    }

    const callSuperman = ():void =>{
        return; //ojito que undefined es distinto de null
    }
    
    const a = callBatman();
    const b = callSuperman();
    console.log(a);
    console.log(b);

})()