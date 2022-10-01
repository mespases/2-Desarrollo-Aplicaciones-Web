var numero
var arrNumeros = []
var cont = 0
var media = 0
var exit = false

do {
    numero = prompt("Introduce un numero: ")

    if (numero === null) {
        exit = true
    } else if (Number(numero)) {
        arrNumeros[cont] = numero
        cont++
    } else {
        alert("El valor que se ha introducido por pantalla no es un numero")
    }

} while(numero != 0 && !exit)

if (!exit) {
    for (let i = 0; i < arrNumeros.length; i++) {
        media += parseInt(arrNumeros[i])
    }
    
    media = media/cont
    
    document.write("La media de los " + cont + " numeros es: " + media)
}