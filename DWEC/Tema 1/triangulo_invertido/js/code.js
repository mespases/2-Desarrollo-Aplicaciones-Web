var numero = prompt("Introduce un numero para hacer un triangulo: ");
var invers = numero; 

if (Number(numero)) {
    for (i = 0; i < numero; i++) {
        document.write('<br>');
        for (j = 0; j < invers; j++) {
            document.write('*');
        }
        invers--;
    }
}