function Paciente(numeroRegistro, nombreCompleto, numeroSS, direccion) {  
    this.numeroRegistro = numeroRegistro
    this.nombreCompleto = nombreCompleto
    this.numeroSS = numeroSS
    this.direccion = direccion

    this.modificarNumeroRegistro = function (nuevoNumeroRegistro) {  
        this.numeroRegistro = nuevoNumeroRegistro
    }

    this.modificarNumeroSS = function (nuevoNumeroSS) {
        this.numeroSS = nuevoNumeroSS
    }

    this.modificarNombreCompleto = function (nuevoNombreCompleto) {  
        this.nombreCompleto = nuevoNombreCompleto
    }

    this.modificarDireccion = function (nuevaDireccion) {  
        this.direccion = nuevaDireccion
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

    this.comprobarPatrones = function(elementoAComprobar, tipoComprobacion) {
        return // falta return
    }
}

const registroPacientes = new Map([
    [`AAA024`, `Fernández M. (321790059) -> C/Recoletos, 50`],  
    [`BCD827`, `Ruíz P. (100973253) -> C/Esquerdo izquierdo, 103`],
    [`YUN835`,`Benítez E. (154811767) -> Av.Argentina, 5`]
]);

// Nos sirve para poder iterar dentro del Map
let registro = registroPacientes.entries()

// paciente 1
let registro1 = registro.next().value // Sacamos el primer valor

let numeroRegistro = registro1[0] // el numero de registro sera el value 0
let nombre = registro1[1].split(' (')[0] // Separamos por ' (' y tenemos el nombre en la posicion 0
let numeroSS = registro1[1].split(' (')[1].split(')')[0] // Separamos de nuevo pero vamos a la posicion 1 y volvemos a separar por ), entonces tenemos el numero de la ss en la posicion 0 ahora
let direccion = registro1[1].split(' (')[1].split(') -> ')[1] // separamos igual que antes y lo ultimo que hacemos es separar por ') -> ' de tal manera que eso quedara descartado y tenemos la direccion separada

let paciente1 = new Paciente(numeroRegistro, nombre, numeroSS, direccion)
console.log(paciente1)


// paciente 2
let registro2 = registro.next().value // Sacamos el segundo valor

numeroRegistro = registro2[0]
nombre = registro2[1].split(' (')[0]
numeroSS = registro2[1].split(' (')[1].split(')')[0]
direccion = registro2[1].split(' (')[1].split(') -> ')[1]

let paciente2 = new Paciente(numeroRegistro, nombre, numeroSS, direccion)
console.log(paciente2)

// paciente 3
let registro3 = registro.next().value // Sacamos el tercer valor

numeroRegistro = registro3[0]
nombre = registro3[1].split(' (')[0]
numeroSS = registro3[1].split(' (')[1].split(')')[0]
direccion = registro3[1].split(' (')[1].split(') -> ')[1]

let paciente3 = new Paciente(numeroRegistro, nombre, numeroSS, direccion)
console.log(paciente3)