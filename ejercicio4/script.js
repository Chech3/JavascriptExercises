/* Hacer una funcion que filtre los numeros que sean 
multiplos del 3 de un arreglo que contenga los numeros del 1 al 100 */

let array = [];
function filtrar() {
    for (let i = 1; i <= 100; i++) {
        if (i % 3 == 0) {
            array.push(i)
        }
        
    }
    console.log(array);
}
filtrar();