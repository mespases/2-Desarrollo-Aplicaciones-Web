var num = prompt("Introduce un numero: ");

var espacios = num;
var asteriscos = 1;

if (Number(num)) {
    for (i = 0; i < num; i++) {
        document.write('<br>');
        for (j = 0; j < espacios; j++) {
            document.write('<a class="invi">*</a>');
        }
        for (k = 0; k < asteriscos; k++) {
            document.write('*');
        }
        for (l = 0; l < espacios; l++) {
            document.write('<a class="invi">*</a>');
        }

        espacios -= 1;
        asteriscos += 2;
    }
}