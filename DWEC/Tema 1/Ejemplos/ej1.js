var txt = "Oso";
var txt2 = "gato";

console.log(txt.localeCompare(txt2)); // Compara dos textos

var txt3 = "supercalifagilisticoespialidoso";
console.log(txt3.length); // Longitud

var txt4 = "Hola";
console.log(txt4.charAt(2)); // los da la posicion 2, empezando por la 0

console.log(txt4.charCodeAt(2)); // nos convierte a unicode

console.log(txt3.toUpperCase()) // Mayuscula

console.log(txt4.indexOf("a")); // Posicion donde se encuentra la a

console.log(txt3.lastIndexOf("s")); // Posicion donde se encuentra la ultima s

console.log(txt3.endsWith("idoso")); // Nos devuelve true si el final es igual

console.log(txt3.startsWith("per")) // Nos devuelve true si empieza igual

console.log(txt3.replace("percali", "ilacrep")); // Nos reemplaza el primer parametro por el segundo

var a = " amigo  "
console.log(a.trim()) // Elimina los espacios de la derecha y de la izquierda, si hay dos palabras no las va a juntar

var t = "Hola-tengo-hambre"
console.log(t.slice(3, 9)); // Separa el texto desde la posicion 3 hasta la 9

console.log(t.substring(3, 9))
console.log(t.substr(3, 9))

console.log(t.split("-")) // Separa segun lo que le insertemos 

// Array, maneras de crearla
let a = []
let a = ["Miguel", "Juanjo"]
let a = new Array()

a[0] = "Miguel"
a[1] = "Juanjo"