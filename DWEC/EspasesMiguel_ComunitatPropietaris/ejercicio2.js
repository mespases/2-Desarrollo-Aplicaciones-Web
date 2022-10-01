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
            str += "Planta: " + planta + "\n"

            // Guardamos la key del "mapa2" Ej: 1->2->miguel, guardariamos 2
            let entries2 = this.mapaPropietariosEdificio.get(planta)
            let key = entries2.keys()

            // Recorremos las key del "mapa2" y las guardamos
            for (let j = 0; j < entries2.size; j++) {
                let puerta =  key.next().value
                str += "\tPuerta: " + puerta + "\n"
                
                // Recorremos la array de propietarios y la guardamos 
                entries2.get(puerta).forEach(propietario => {
                    str += "\t\t" + propietario + "\n\n"
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

let edificio2 = `{
    "tipoVia":"Calle",
    "nombreVia":"García Prieto",
    "numeroEdificio": "58A",
    "codigoPostal": "07010",
    "mapaPropietariosEdificio": {
        "A": {
            "1A": ["José Antonio López"],
            "2A": ["Luisa Martínez"],
            "3A": ["Marta Castellón", "José Montero"]
        },
        "B": {
            "1B": [],
            "2B": ["Antonio Pereira"],
            "3B": []
        }
    }
}`;

// Pasamos el json a objeto y creamos un nuevo objeto Edificio
edificio2 = JSON.parse(edificio2)
let edificio404 = new Edificio(edificio2["tipoVia"], edificio2["nombreVia"], edificio2["numeroEdificio"], edificio2["codigoPostal"])

// Recorremos mapaPropietariosEdificio del "JSON" -> pasado a objeto y agregamos la planta
for (let i in edificio2["mapaPropietariosEdificio"]) {
    edificio404.agregarPlanta(i)

    // Recorremos las plantas del "JSON" y agregamos la planta y asignamos
    for (let j in edificio2["mapaPropietariosEdificio"][i]) {
        edificio404.agregarPuerta(i, j)

        // Recorremos los propietarios de cada planta y asignamos
        for (let k in edificio2["mapaPropietariosEdificio"][i][j]) {
            edificio404.agregarPropietario(edificio2["mapaPropietariosEdificio"][i][j][k], i, j)
            
        }
    }
}

// Recibimos el id info de html
let div = document.getElementById("info");

// Cambiamos el \t por &nbsp -> tabulaciones en html
let tab = edificio404.imprimirTodosPropietarios().split("\t").join("&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;")
tab = tab.split("\n").join("<br>") // cambiamos los \n por br
tab = tab.split("<br>") // separamos el texto por los br



// Mostramos la informacion por pantalla
div.innerHTML += "<h3 class='sub'>" + edificio404.imprimirTipoVia() +", "+ edificio404.imprimirNombreVia() +", "+ edificio404.imprimirNumeroEdificio() +", "+ edificio404.imprimirCodigoPostal() + "</h3>"

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