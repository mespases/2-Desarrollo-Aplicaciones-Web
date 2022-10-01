var numAleatorio = Math.floor(Math.random() * 100);
var numUsuario;
var intentos = 0;

var boton = document.querySelector('#boton');

function code() {
    do {
        numUsuario = prompt("Introduce un numero por pantalla: ");
        exit = false;
    
        if (numUsuario == null) {
            exit = true;
            alert("La mayoria de los jugadores han decidido cancelar el juego ○△□")
        } else if (!Number(numUsuario)) {
            alert("No has introducido un numero");
        } else if (numAleatorio < numUsuario) {
            alert("El numero es menor a " + numUsuario);
        } else if (numAleatorio > numUsuario) {
            alert("El numero es mayor a " + numUsuario);
        } 
    
        intentos++;
    } while ((!Number(numUsuario) || numAleatorio != numUsuario) || !exit);

}

code();

boton.addEventListener('click', function() {
    code();
});


document.write("<h3>Has realizado " + intentos + " intentos</h3>")

do {
    numUsuario = parseInt(prompt("Introduce un numero por pantalla: "));
    if (!Number(numUsuario)) {
        alert("No has introducido un numero");
    } else if (numAleatorio < numUsuario) {
        alert("El numero es menor a " + numUsuario);
    } else if (numAleatorio > numUsuario) {
        alert("El numero es mayor a " + numUsuario);
    }
} while (!Number(numUsuario) || numAleatorio != numUsuario);
