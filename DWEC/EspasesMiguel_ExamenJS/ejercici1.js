/**
 * Función que comprueba si se cumple un patrón de los que tiene almacenados. Es necesario indicar que patrón vamos a 
 * escoger para realizar la comprobación con las siguientes etiquetas: 
 *      1. Si es un número de registro: numeroRegistro
 *      2. Si es un nombre: nombre
 *      3. Si es un número de la seguridad social: numeroSS
 *      4. Si es una dirección: direccion
 * @param {*} elementoAComprobar - Elemento que debe cumplir el patrón que se indique.
 * @param {String} tipoComprobacion - Indica que tipo de elemento se quiere comprobar: numeroRegistro, nombre, numeroSS o direccion
 * @returns {boolean} - Devuelve true si se cumple el patrón y false si no se cumple.
 */
const comprobarPatrones = function (elementoAComprobar, tipoComprobacion) {
    let patronNumeroRegistro = new RegExp(`^[A-Z]{3}[0-9]{3}`); // Contiene el patrón para comprobar el número de registro
    let patronNombreCompleto = new RegExp(`^([A-Z]){1}([a-z])+`); // Contiene el patrón para comprobar el nombre
    let patronNumeroSS = new RegExp(`[0-9]`); // Contiene el patrón para comprobar el número de la seguridad social
    let patronDireccion = new RegExp(`^(C/|Av.)`); // Contiene el patrón para comprobar la dirección

    //console.log(patronNombreCompleto.test("AbA1"))
    console.log(patronNumeroSS.test("99"))

    let patrones = new Map([
        ['numeroRegistro', patronNumeroRegistro],
        ['nombre', patronNombreCompleto],
        ['numeroSS', patronNumeroSS],
        ['direccion', patronDireccion]
    ]);

    return patrones.get("numeroRegistro").test(tipoComprobacion)
}

comprobarPatrones("numeroRegistro", "AHD654")
//console.log(comprobarPatrones("numeroRegistro", "AHD654"))