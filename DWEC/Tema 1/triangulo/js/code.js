var numero = prompt("Introduce un numero para hacer un triangulo: ");

if (Number(numero)) {
    for (i = 0; i < numero; i++) {
        document.write('<br>');
        for (j = 0; j < i; j++) {
            document.write('*');
        }
    }
}