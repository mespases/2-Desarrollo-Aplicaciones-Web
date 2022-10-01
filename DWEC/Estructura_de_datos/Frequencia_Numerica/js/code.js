var div = document.getElementById("freq")
var repeticion = [0,0,0,0,0,0,0,0,0,0]
var numero

for (let i = 0; i < 10000; i++) {
    numero = parseInt(Math.random()*10)+1

    if (numero == 1) {
        repeticion[0] += 1
    } else if (numero == 2) {
        repeticion[1] += 1
    } else if (numero == 3) {
        repeticion[2] += 1
    } else if (numero == 4) {
        repeticion[3] += 1
    } else if (numero == 5) {
        repeticion[4] += 1
    } else if (numero == 6) {
        repeticion[5] += 1
    } else if (numero == 7) {
        repeticion[6] += 1
    } else if (numero == 8) {
        repeticion[7] += 1
    } else if (numero == 9) {
        repeticion[8] += 1
    } else if (numero == 10) {
        repeticion[9] += 1
    }
}

div.innerHTML = "<b>Numero 1: </b>" + repeticion[0] + "<br>"
div.innerHTML += "<b>Numero 2: </b>" + repeticion[1] + "<br>"
div.innerHTML += "<b>Numero 3: </b>" + repeticion[2] + "<br>"
div.innerHTML += "<b>Numero 4: </b>" + repeticion[3] + "<br>"
div.innerHTML += "<b>Numero 5: </b>" + repeticion[4] + "<br>"
div.innerHTML += "<b>Numero 6: </b>" + repeticion[5] + "<br>"
div.innerHTML += "<b>Numero 7: </b>" + repeticion[6] + "<br>"
div.innerHTML += "<b>Numero 8: </b>" + repeticion[7] + "<br>"
div.innerHTML += "<b>Numero 9: </b>" + repeticion[8] + "<br>"
div.innerHTML += "<b>Numero 10: </b>" + repeticion[9] + "<br>"