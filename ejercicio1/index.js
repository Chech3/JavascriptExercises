//Arreglo que almacene todos los numeros pares desde A hasta B

let array = [];

function almacena(a,b) {
    for (let i = a; i <= b; i++) {
        if (i % 2 == 0 )
            array.push(i)
    }
    console.log(array);
}

almacena(1,10);
