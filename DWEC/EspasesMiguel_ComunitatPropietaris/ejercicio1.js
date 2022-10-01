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

const edificio1 = new Edificio('calle', 'marques de la fontsanta', 60, '07005');
edificio1.agregarPlanta('1A');
edificio1.agregarPlanta('1B');
edificio1.agregarPuerta('1A','3');
edificio1.agregarPuerta('1A','2');
edificio1.agregarPuerta('1B','1');
edificio1.agregarPropietario('Belén Laserna Belenguer','1A','3');
edificio1.agregarPropietario('Pedro Jimenez Vázquez','1A','3');
edificio1.agregarPropietario('Ana María Rodriguez Figuerola', '1A','2');
edificio1.agregarPropietario('Miguel López López','1B','1');
console.log(edificio1)
console.log(edificio1.imprimirTodosPropietarios());