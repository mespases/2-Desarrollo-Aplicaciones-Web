var p1 = document.getElementById('paragraf1')
var p2 = document.getElementById('paragraf2')
var p3 = document.getElementById('paragraf3')

var a1 = document.getElementById('enl1')
var a2 = document.getElementById('enl2')
var a3 = document.getElementById('enl3')

function ocultarMostra(numeroParrafo, numeroEnlace) {  
    if (numeroEnlace == "enl1" && numeroParrafo == "paragraf1") {
        if (a1.text == "Mostrar") {
            a1.text = "Ocultar"
            p1.style.display = "block"
        } else {
            a1.text = "Mostrar"
            p1.style.display = "none"
        }
    } else if (numeroEnlace == "enl2" && numeroParrafo == "paragraf2") {
        if (a2.text == "Mostrar") {
            a2.text = "Ocultar"
            p2.style.display = "block"
        } else {
            a2.text = "Mostrar"
            p2.style.display = "none"
        }

    } else if (numeroEnlace == "enl3" && numeroParrafo == "paragraf3") {
        if (a3.text == "Mostrar") {
            a3.text = "Ocultar"
            p3.style.display = "block"
        } else {
            a3.text = "Mostrar"
            p3.style.display = "none"
        }
        
    }
}