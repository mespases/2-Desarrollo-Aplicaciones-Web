var nombre = prompt("Cual es tu nombre: ");
var apellidos = prompt("Cuales son tus apellidos: ");
var edad = parseInt(prompt("Cual es tu edad: "));
var salario = parseInt(prompt("Cual es tu salario: "));

if (salario > 1000 && salario < 2000) {
    if (edad > 45) {
        salario = ((salario*3)/100)+salario;
    } else if (edad <= 45) {
        salario = ((salario*10)/100)+salario;
    }
} else if (salario < 1000) {
    if (edad < 30) {
        salario = 1100;
    } else if (edad >= 30 && edad < 45) {
        salario = ((salario*3)/100)+salario;
    } else if (edad > 45) {
        salario = ((salario*15)/100)+salario;
    }
}

document.write("Nombre: " + nombre + " " + apellidos + "<br>Edad: " + edad + "<br>Tu salario es:  " + salario);