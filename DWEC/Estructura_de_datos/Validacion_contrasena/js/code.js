function isUper(nombre) {
    nombre = nombre.split("")
    console.log(nombre)

    for (let i = 0; i < nombre.length; i++) {
        if (nombre[i] == nombre[i].toUpperCase()) {
            return true
        }
    }

    return false
}

function containsNumber(nombre) {
    nombre = nombre.split("")
    console.log(nombre)

    for (let i = 0; i < nombre.length; i++) {
        if (nombre[i] == Number(nombre[i])) {
            return true
        }
    }

    return false
}


var nombre
var password
var datos_correctos = false
exit = false

while (!datos_correctos && !exit) {
    nombre = prompt("Introduce tu usuario")
    
    if (nombre == null) {
        exit = true
        alert("Se ha cancelado el registro")
    } else if (isUper(nombre)) {
        alert("Tu nombre de usuario contiene una mayuscula")
    } else {
        datos_correctos = true
    }
}

datos_correctos = false
exit = false

while (!datos_correctos && !exit) {
    password = prompt("Introduce una contraseña")

    if (password == null) {
        exit = true
        alert("Se ha cancelado el registro")
    } else if (!isUper(password) && isUper(password) && containsNumber(pass) && !containsNumber(pass)) {
        datos_correctos = true
    } else {
        alert("La contraseña no es correcta")
    }
}
