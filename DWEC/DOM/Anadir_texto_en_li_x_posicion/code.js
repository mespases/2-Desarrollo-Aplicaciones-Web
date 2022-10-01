document.addEventListener("DOMContentLoaded", function(event) {
    let li = document.getElementsByTagName('li')
    let ol = document.getElementsByTagName('ol')[0]
    let texto
    let numero 

    do {
        texto = prompt("Introduce un nuevo texto")
        numero = prompt("Introduce en que posicion quieres el texto")
    } while (texto == "" || numero > 10 || numero < 0 || !Number(numero))

    let nuevoElemento = document.createElement('li')
    let strong = document.createElement("strong")
    let nodoTxt = document.createTextNode(texto)
    
    strong.appendChild(nodoTxt)
    nuevoElemento.appendChild(strong)

    ol.insertBefore(nuevoElemento, li[numero-1])

})    

