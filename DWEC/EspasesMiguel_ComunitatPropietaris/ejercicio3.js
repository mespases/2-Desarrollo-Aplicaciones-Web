function Edificio(tipoVia, nombreVia, numeroEdificio, codigoPostal) {  
    this.tipoVia = tipoVia
    this.nombreVia = nombreVia
    this.numeroEdificio = numeroEdificio
    this.codigoPostal = codigoPostal
    this.mapaPropietariosEdificio = new Map()

    // Comprueba que no exista el numero de planta e inserta
    this.agregarPlanta = function(numeroPlanta) {
        if (!this.mapaPropietariosEdificio.has(numeroPlanta)) {
            this.mapaPropietariosEdificio.set(numeroPlanta, new Map())
        }
    }

    // Comprueba que no exista el numero de puerta e inserta
    this.agregarPuerta = function(numeroPlanta, numeroPuerta) {
        let planta = this.mapaPropietariosEdificio.get(numeroPlanta)
        if (!planta.has(numeroPuerta)) {
            planta.set(numeroPuerta, [])
        }
    }

    // Inserta el propietario en la planta y el numero de puerta correspondiente, permite anadir mas de un propietario
    this.agregarPropietario = function(nombrePropietario, numeroPlanta, numeroPuerta) {  
        let planta = this.mapaPropietariosEdificio.get(numeroPlanta)
        let puerta = planta.get(numeroPuerta)
        puerta.push(nombrePropietario)
    }

    this.imprimirTodosPropietarios = function() {
        // Creamos una variable con las entidades de mapaPropietariosEdificio y preparamos str para ir guardando todos los resultados
        let entries = this.mapaPropietariosEdificio.entries()
        let str = ""

        // Recorremos el mapa 
        for (let i = 0; i < this.mapaPropietariosEdificio.size; i++) {
            // Guardamos en una variable e asignamos la key del mapa, por eso lo del value[0], el [1] es el valor
            let planta = entries.next().value[0]
            str += "<h2>Planta: " + planta + "\n</h2>"

            // Guardamos la key del "mapa2" Ej: 1->2->miguel, guardariamos 2
            let entries2 = this.mapaPropietariosEdificio.get(planta)
            let key = entries2.keys()

            // Recorremos las key del "mapa2" y las guardamos
            for (let j = 0; j < entries2.size; j++) {
                let puerta =  key.next().value
                str += "<h3>\tPuerta: " + puerta + "\n</h3>"
                
                // Recorremos la array de propietarios y la guardamos 
                entries2.get(puerta).forEach(propietario => {
                    str += "<p>\t\t" + propietario + "\n\n</p>"
                }); 
            }
        }

        return str
    }

    this.imprimirCodigoPostal = function() {
        return "Código Postal(CP): " + this.codigoPostal
    }

    this.imprimirNombreVia = function () {  
        return "Nombre de la vía: " + this.nombreVia
    }

    this.imprimirNumeroEdificio = function() {  
        return "Número del edificio: " + this.numeroEdificio
    }

    this.imprimirTipoVia = function() {  
        return "Tipo de via: " + this.tipoVia
    }

    this.modificarCodigoPostal = function(nuevoCodigoPostal) {  
        this.codigoPostal = nuevoCodigoPostal
    }

    this.modificarNombreVia = function(nuevoNombreVia) {  
        this.nombreVia = nuevoNombreVia
    }

    this.modificarNumeroEdificio = function(nuevoNumeroEdificio) {
        this.numeroEdificio = nuevoNumeroEdificio
    }

    this.modificarTipoVia = function(nuevoTipoVia) {
        this.tipoVia = nuevoTipoVia
    }
}

function pedirYasignar() {
    let correctInfo = false
    // Solo nos pedira esta informacion una vez poque puede introducir muchas variantes de datos aquí
    let tipoVia = prompt("Introduce un tipo de via")
    let nombreVia = prompt("Introduce un nombre de via")
    let numeroEdificio = prompt("Introduce un numero de edificio")

    // Pedimos código postal hasta que sea todo numerico
    do {
        let codigoPostal = prompt("Introduce un código postal")
        if (Number(codigoPostal)) {
            correctInfo = true
            var edificio3 = new Edificio(tipoVia, nombreVia, numeroEdificio, codigoPostal)
        } else {
            alert("No has introducido un código postal correcto")
        }
    } while (!correctInfo)

    // Mientras no cancele el prompt parar no sera true nunca, los === null son para parar el bucle y 3 = por si nos introduce un 0
    let parar = false
    do {
        let planta = prompt("Introduce una de planta")
        if (planta === null) {
            parar = true

        } else {
            let puerta = prompt("Introduce una puerta")

            if (puerta === null) {
                parar = true

            // Comprueba que el sea numerico y que no sea menor 0
            } else if (Number(puerta) && puerta >= 0) {
                let propietario = prompt("Introduce un propietario")

                if (propietario === null) {
                    parar = true

                // Agregamos todos los datos al edificio al final por si nos cancela la operacion y muestra que los datos se han insertado
                } else {
                    edificio3.agregarPlanta(planta)
                    edificio3.agregarPuerta(planta, puerta)
                    edificio3.agregarPropietario(propietario, planta, puerta)
                    alert("Los datos se han insertado correctamente")

                }
    
            } else {
                alert("Puerta mal introducida prueba de nuevo")
            }

        } 
        
    } while(!parar)

    return edificio3
}

// Recogemos el div e recibimos los datos de nuestra funcion
let div = document.getElementById("info");
let edificio3 = pedirYasignar()

// Cambiamos los \t por tabulacion con &nbsp
let tab = edificio3.imprimirTodosPropietarios().split("\t").join("&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;")
tab = tab.split("\n").join("<br>") // cambiamos los \n por br
tab = tab.split("<br>") // separamos el texto por los br


// Mostramos la informacion por pantalla
div.innerHTML += "<h3 class='sub'>" + edificio3.imprimirTipoVia() +", "+ edificio3.imprimirNombreVia() +", "+ edificio3.imprimirNumeroEdificio() +", "+ edificio3.imprimirCodigoPostal() + "</h3>"

// Imprimimos todo
for (i in tab) {
    if (tab[i].includes("Planta:")) { // si contiene planta sera h2
        div.innerHTML += "<h2>" + tab[i] + "</h2>"
    } else if (tab[i].includes("Puerta: ")) { // si contiene puerta sera h3
        div.innerHTML += "<h3>" + tab[i] +"</h3>"
    } else { // si no contiene nada de lo anterior sera un parrafo
        div.innerHTML += "<p>" + tab[i] + "</p>"
    }
}

for (i = 0; i < 2000; i++) {
    var x = Math.floor(Math.random() * 881);
    var z = Math.floor(Math.random() * 1000);

    var color = "#";

    for (j = 0; j < 6; j++) {
        color += Math.floor(Math.random() * 9);
    }
}

document.body.style.background = color; 