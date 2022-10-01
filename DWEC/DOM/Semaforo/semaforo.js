function cambiarColor() {
    let semaforo = document.getElementsByClassName('exterior')[0].children

    if (semaforo[0].className == 'ences') {
        semaforo[0].className = 'apagat'
        semaforo[1].className = 'ences'

    } else if (semaforo[1].className == 'ences') {
        semaforo[1].className = 'apagat'
        semaforo[2].className = 'ences'

    } else if (semaforo[2].className == 'ences') {
        semaforo[2].className = 'apagat'
        semaforo[0].className = 'ences'
    }

}