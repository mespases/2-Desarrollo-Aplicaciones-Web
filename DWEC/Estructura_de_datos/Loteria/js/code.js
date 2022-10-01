var div = document.getElementById("numerosloterias")

var numerosLoteria = []
var numeroRandom;
var numero = "";

for (i = 0; i < 50; i++) {

    j = 0
    while (j != 6) {
        numeroRandom = parseInt(Math.random()*49)+1;
        numero += numeroRandom

        if (!numerosLoteria.includes(numero)) {
            j++
        } else {
            numero = ""
        }
    }

    numerosLoteria[i] = numero
    numero = ""
    
    div.innerHTML += "<b>Numero: </b>" + numerosLoteria[i] + "<br>";
}