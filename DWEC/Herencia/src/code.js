/**
 * Clase ordenador
 * @param {string} marca 
 * @param {string} modelo 
 * @param {Number} ram 
 * @param {Number} disco 
 * @param {Number} pulgadas 
 */

function Ordenador(marca, modelo, ram = 4, disco = 512, pulgadas = 17) {  
    this.marca = marca
    this.modelo = modelo
    this.ram = ram
    this.disco = disco
    this.pulgadas = pulgadas

    /**
     * 
     * @returns Devuelde los datos
     */
    this.toString = function() {  
        return `
        Marca: ${this.marca}
        Modelo: ${this.modelo}
        RAM: ${this.ram}
        Disco duro: ${this.disco}GB
        Pulgadas: ${this.pulgadas} pulgadas`;
    }
}
/**
 * 
 * @param {string} marca 
 * @param {string} modelo 
 * @param {Number} ram 
 * @param {Number} disco 
 * @param {Number} pulgadas 
 * @param {Number} autonomia 
 */
function Portatil(marca, modelo, ram = 4, disco = 256, pulgadas = 13, autonomia = 4) {
    this.__proto__ = new Ordenador(marca, modelo, ram, disco, pulgadas)
    this.autonomia = autonomia

    /**
     * 
     * @returns {string} Devuelve los datos 
     */
    this.toString = function() {
        return this.__proto__.toString() + `
        Autonomia: ${this.autonomia}`
    }
}

var o1 = new Ordenador("HP", "EliteDisplay",8,256,23);
var o2 = new Ordenador("Dell" , "Inspiron AIO");
var p1 = new Portatil("Apple","Macbook Air",8,128,13,12);
var p2 = new Portatil("Acer", "Aspire");

console.log(o1.toString());
/* Salida:
    Marca: HP
    Modelo: EliteDisplay
    RAM: 8
    Disco duro: 256GB
    Pulgadas: 23 pulgadas
*/
console.log(o2.toString());
/* Salida:
    Marca: Dell
    Modelo: Inspiron AIO
    RAM: 4
    Disco duro: 512GB
    Pulgadas: 17 pulgadas
*/
console.log(p1.toString());
/* Salida:
    Marca: Apple
    Modelo: Macbook Air
    RAM: 8
    Disco duro: 128GB
    Pulgadas: 13 pulgadas
    Autonomía: 12 horas
*/
console.log(p2.toString());
/* Salida:
    Marca: Acer
    Modelo: Aspire
    RAM: 4
    Disco duro: 256GB
    Pulgadas: 13 pulgadas
    Autonomía: 4 horas
*/