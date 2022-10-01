function img(result) {
    if (result == 1) {
        return "piedra.png"
    } else if (result == 2) {
        return "papel.png"
    } else if (result == 3) {
        return "tijera.png"
    }
}

function resultado(result1, result2) {  
    if (result1 == result2) {
        return "Empate"
    } else if ((result1 == 1 && result2 == 3) ||
                (result1 == 2 && result2 == 1) ||
                (result1 == 3 && result2 == 2)) {
        return "Jugador 1 gana"
    } else if ((result1 == 1 && result2 == 2) || 
                (result1 == 2 && result2 == 3) || 
                (result1 == 3 && result2 == 1)) {
        return "Jugador 2 gana"
    }
}

let jugador_1 = document.getElementById('jugador_1')
let jugador_2 = document.getElementById('jugador_2')
let h3 = document.getElementById('resultado')

let result_p1 = ((Math.random()*2)+1).toFixed(0)
let result_p2 = ((Math.random()*2)+1).toFixed(0)

jugador_1.src = "./img/" + img(result_p1)
jugador_2.src = "./img/" + img(result_p2)
h3.innerHTML = resultado(result_p1, result_p2)