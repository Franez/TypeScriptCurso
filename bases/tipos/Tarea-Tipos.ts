(() => {

    // Tipos
    const batman:string = 'Bruce';
    const superman:string = 'Clark';
  
    const existe:boolean = false;
  
    // Tuplas

    const parejaHeroes:[string, string] =  [batman,superman];
    const villano:[string, number, boolean] = ['Lex Lutor',5,true];
  
    // Arreglos
    const aliados:(String)[] =['Mujer Maravilla','Acuaman','Shazam', 'Flash'];
    const villanos = ['duende verde', 100];
  
    //Enumeraciones
    enum fuerzaHero {

      Flash = 1,
      Superman = 2,
      Batman = 3,
      Acuaman = 4

    }

    const fuerzaFlash: fuerzaHero = fuerzaHero.Flash;
    const fuerzaSuperman: fuerzaHero = fuerzaHero.Superman; 
    const fuerzaBatman: fuerzaHero = fuerzaHero.Batman; 
    const fuerzaAcuaman: fuerzaHero = fuerzaHero.Acuaman;
      

    // Retorno de funciones
    function activar_batiseñal():string{
      return 'activada';
    }
  
    function pedir_ayuda():void{
      console.log('Auxilio!!!');
    }
  
    // Aserciones de Tipo
    const poder: any = '100';
    const largoDelPoder:number = (poder as string).length;
    console.log( largoDelPoder );
  
    //notas
    //se pueden declarar arrays de estas 3 formas
    let arr:number[] = [1,2, 3,4]; 
    let arr1 = [1,2,3,4];
    let arr2:any = [1,2, 3,4];
    


    
  })()