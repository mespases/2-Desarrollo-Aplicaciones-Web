var num = prompt("Introduce un numero: ");
var result = 1;

if (Number(num) && num > 0) {
    for (i = 1; i <= num; i++) {
        result *= i;
        console.log(result)
    }
}

document.write(result);