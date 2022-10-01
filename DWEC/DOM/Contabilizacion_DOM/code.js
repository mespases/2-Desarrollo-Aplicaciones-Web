var info = document.getElementById('info')
var numero_enlaces = document.getElementsByTagName('a').length
var numero_parrafos = document.getElementsByTagName('p').length
var enlace_penultimo_enlace = document.getElementsByTagName('a')[numero_enlaces-2].href
var enlace_ultimo_enlace = document.getElementsByTagName('a')[numero_enlaces-1].href
var numero_enlaces_prueba = () => {  
    let a = document.getElementsByTagName('a')
    let cont = 0

    for (element of a) {
        if (element.href == "http://prueba/") {
            cont++
        }
    }

    return cont
}
var enlaces_parrafos = () => {
    let p = document.getElementsByTagName('p')

    for (let i in p) {
        info.innerHTML += "<section>Nombre d'enllaços de tots els paràgraf = " + i + " = " + p[i].children.length + "</section>"
    }
}

info.innerHTML = "<section>Nombre d'enllaços de la pàgina. = " + numero_enlaces + "</section>"
info.innerHTML += "<section>Nombre de paràgrafs de la pàgina. = " + numero_parrafos + "</section>"
info.innerHTML += "<section>Adreça a la qual enllaça el penúltim enllaç. = " + enlace_penultimo_enlace + "</section>"
info.innerHTML += "<section>Adreça a la qual enllaça el darrer enllaç. = " + enlace_ultimo_enlace + "</section>"
info.innerHTML += "<section>Número d'enllaços que enllacen a http://prueba = " + numero_enlaces_prueba() + "</section>"
info.innerHTML += "<section>Nombre d'enllaços de tots els paràgrafs</section>"
enlaces_parrafos()