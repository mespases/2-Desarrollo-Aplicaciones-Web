// Array donde guardaremos los numeros de los colores rgb
const colores = Array()

function getNumColumnas(table) {
    // Devuelve el total de las columnas que tenga la tabla
    return table.rows[0].cells.length
}

function generateColors() {
    // Genera un numero aleatorio
    return ((Math.random() * 255) + 1).toFixed(0)
}


function introducirDatosTabla(tabla, datos) {
    /* Si el dato es numerico, simplemente introduce en el td, 
     si contiene otra cosa asignalo de color de fondo */
    if (Number(datos)) {
        let text_node = document.createTextNode(datos)
        tabla.appendChild(text_node)
        colores.push(datos)
    } else {
        tabla.style.backgroundColor = datos
        colores.length = 0
    }
}

function crearTabla(numFila, numColumna) {
    /* Busca la tabla en el html y genera el cuerpo de la 
        tabla con las filas y columnas indicadas */
    let table = document.getElementsByTagName('table')[0]
    let color
    let tr

    for (let i = 0; i < numFila; i++) {
        tr = document.createElement('tr')

        for (let j = 0; j < numColumna; j++) {
            let td = document.createElement('td')
            color = generateColors()

            if (j != 3) {
                introducirDatosTabla(td, color)

            } else {
                // cadena de texto que contendra el rgb(x, x, x) en string
                let codigoColor = "rgb("

                for (let i in colores) {
                    if (i != 2) {
                        codigoColor += colores[i] + ","
                    } else {
                        codigoColor += colores[i] + ")"
                    }
                }
                introducirDatosTabla(td, codigoColor)
            }
            tr.appendChild(td)

        }
        table.appendChild(tr)
    }

    return tr
}


function crearTablaColores(tablaColores, numColores) {
    /* Evalua si la condicion para crear la tabla es correcta 
        y llama al metodo de crearTabla() */
    let table = document.getElementById(tablaColores)
    let input = document.getElementById(numColores)

    let numColumnas = getNumColumnas(table)

    if (input.value <= 0 || input.value > 20 || !Number(input.value)) {
        alert("El numero introducido no es correcto")

    } else {
        crearTabla(input.value, numColumnas)
    }

    input.value = ""
    input.disabled = true
}

function permutarFilas(tablaColores, fila1, fila2) {
    /* Recoge como parametro las tabla y el valor de los dos imput, 
        les sumamos 1 para evitar recoger la posicion 0, permutamos
        la primera fila a su posicion y luego en la segunda vez, volvemos
        a seleccionar las filas porque habran cambiado de posicion y las 
        permutamos */
    let tableNode = document.getElementById(tablaColores)
    let input1 = Number(document.getElementById(fila1).value) + 1
    let input2 = Number(document.getElementById(fila2).value) + 1

    if (input1 != 1 && input2 != 1) {
        if (input1 > input2) {
            let node1 = document.getElementById(tablaColores).children[input1]
            let node2 = document.getElementById(tablaColores).children[input2]
            tableNode.insertBefore(node1, node2)

            node1 = document.getElementById(tablaColores).children[input1 + 1]
            node2 = document.getElementById(tablaColores).children[input2 + 1]
            tableNode.insertBefore(node2, node1)

        } else {
            let node1 = document.getElementById(tablaColores).children[input1]
            let node2 = document.getElementById(tablaColores).children[input2]
            tableNode.insertBefore(node2, node1)

            node1 = document.getElementById(tablaColores).children[input1 + 1]
            node2 = document.getElementById(tablaColores).children[input2 + 1]
            tableNode.insertBefore(node1, node2)

        }
    }

    document.getElementById(fila1).value = ""
    document.getElementById(fila2).value = ""
}

function cambiarFondo(tablaColores, filaFondo) {
    // Cambia el color del fondo por la columna seleccionada
    let table = document.getElementById(tablaColores)
    let input = Number(document.getElementById(filaFondo).value)
    let backStyle = table.rows[input].cells[3].style.backgroundColor

    document.body.style.backgroundColor = backStyle
    document.getElementById(filaFondo).value = ""
}