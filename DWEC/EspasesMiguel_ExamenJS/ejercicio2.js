function Paciente(numeroRegistro, nombreCompleto, numeroSS, direccion) {  
    this.numeroRegistro = numeroRegistro
    this.nombreCompleto = nombreCompleto
    this.numeroSS = numeroSS
    this.direccion = direccion

    this.modificarNumeroRegistro = function (nuevoNumeroRegistro) { 
        if (this.comprobarPatrones('numeroRegistro', nuevoNumeroRegistro)) {
            this.numeroRegistro = nuevoNumeroRegistro
        } 
    }

    this.modificarNumeroSS = function (nuevoNumeroSS) {
        if (this.comprobarPatrones('numeroSS', nuevoNumeroSS)) {
            this.numeroSS = nuevoNumeroSS
        }
    }

    this.modificarNombreCompleto = function (nuevoNombreCompleto) {  
        if (this.comprobarPatrones('nombre', nuevoNombreCompleto)) {
            this.nombreCompleto = nuevoNombreCompleto
        }
    }

    this.modificarDireccion = function (nuevaDireccion) {  
        if (this.comprobarPatrones('direccion', direccion)) {
            this.direccion = nuevaDireccion
        }
    }

    this.imprimirNumeroRegistro = function() {
        return this.numeroRegistro
    }

    this.imprimirNombreCompleto = function() {
        return this.nombreCompleto
    }

    this.imprimirNumeroSS = function() {
        return this.numeroSS
    }

    this.imprimirDireccion = function() {
        return this.direccion
    }

    this.comprobarPatrones = function (elementoAComprobar, tipoComprobacion) {
        let patronNumeroRegistro = new RegExp(`^[A-Z]{3}[0-9]{3}`); // Contiene el patrón para comprobar el número de registro
        let patronNombreCompleto = new RegExp(`/./`); // Contiene el patrón para comprobar el nombre
        let patronNumeroSS = new RegExp(`/./`); // Contiene el patrón para comprobar el número de la seguridad social
        let patronDireccion = new RegExp(`/./`); // Contiene el patrón para comprobar la dirección
    
        let patrones = new Map([
            ['numeroRegistro', patronNumeroRegistro],
            ['nombre', patronNombreCompleto],
            ['numeroSS', patronNumeroSS],
            ['direccion', patronDireccion]
        ]);
    
        return patrones.get("numeroRegistro").test(tipoComprobacion)
    }
}

let paciente = new Paciente("AAA123", "Espases M.", "12345678", "C/ avenida")
paciente.modificarNumeroSS("123123")
console.log(paciente.imprimirNumeroRegistro())