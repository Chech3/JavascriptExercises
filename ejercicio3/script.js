/* Realizar una tabla de multiplicacion de un numero (a) desde 0 hasta x
pero que no se muestre la multiplicacion de a * 5 */

let array = []
function tabla(x) {
    for (let i = 0; i <= x; i++) {
        if (i !== 5) {
            calculo = i * x
            array.push(calculo)
        }
        
    }
}
tabla(10);

console.log(array);