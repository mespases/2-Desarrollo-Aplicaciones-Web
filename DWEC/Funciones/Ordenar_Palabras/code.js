let txt
let txt2 = ""

do {
    txt = prompt("Introduce una palabra")
} while (txt == "")



function ordenar(texto) { 
    texto = texto.split("")
    texto = texto.sort()
    texto = texto.reverse()

    for (let i = 0; i < texto.length; i++) {
        if (!txt2.includes(texto[i])) {
            txt2 += (texto[i])
        }
    }

    return txt2
}

document.write(ordenar(txt))