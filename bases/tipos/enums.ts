(() => {

    enum AudioLevel{
        min = 1,
        midium , // en el caso de no asignar el valor toma el siguiente del anterior
        max = 10
    }

    let currentAudio = AudioLevel.max;

    console.log(currentAudio);
    console.log(AudioLevel);

    
})()