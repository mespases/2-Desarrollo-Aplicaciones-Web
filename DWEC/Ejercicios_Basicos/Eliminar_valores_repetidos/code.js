var h4_1 = document.getElementById('num_bolas')
var h4_2 = document.getElementById('num_bolas_repetidas')
var div_1 = document.getElementById('bolas_uno')
var div_2 = document.getElementById('bolas_dos')

var bolas = []
var bolas_unicas = []
var numero_de_bolas = (Math.random()*10)+5


for (i = 0; i < numero_de_bolas; i++) {
    let bola = (Math.random()*9)+1
    bolas.push(bola.toFixed(0))
}

for (let b of bolas) {
    if (!bolas_unicas.includes(b)) {
        bolas_unicas.push(b)
    }
}

h4_1.innerHTML = "Entre estas " + numero_de_bolas.toFixed(0) + " bolas"
div_1.innerHTML = bolas
h4_2.innerHTML = ".. hay " + bolas_unicas.length + " bolas distintas"
div_2.innerHTML = bolas_unicas