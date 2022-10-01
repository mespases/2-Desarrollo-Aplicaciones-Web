const conteoLetras = new Map();

function mostrarEstadisticas(textareaId) {
    // INTRODUCIR CÓDIGO AQUÍ
    let textarea = document.getElementById(textareaId)
    let table = document.getElementsByTagName('table')[0]
    let arrayValores = crearDatosEstadisticas(contarLetras(textarea.value))
    let tbody = document.createElement('tbody')
    let tr
    let td
    let text

    // Recorremos los valores del mapa y los vmos introduciendo en la tabla
    for (let element of arrayValores) {
        tr = document.createElement('tr')

        for (let i of element) {
            td = document.createElement('td')
            text = document.createTextNode(i)

            td.append(text)
            tr.append(td)
        }
        tbody.append(tr)
    }

    // Si existe un tbdoy antes lo reemplazara, si no, simplemente lo añade
    let antiguoTbody = document.getElementsByTagName('tbody')[0]
    if (antiguoTbody == null) {
        table.append(tbody)
    } else {
        table.replaceChild(tbody, antiguoTbody)
    }
    conteoLetras.clear()
}

function contarLetras(texto) {
    let numLetrasTotal = 0;
    let patron = /^[a-zA-Z]$/

    for (let letra of texto.toLowerCase()) {
        if (patron.test(letra)) {
            if (!conteoLetras.has(letra)) {
                conteoLetras.set(letra, 1);
            } else {
                conteoLetras.set(letra, conteoLetras.get(letra) + 1);
            }
            numLetrasTotal++;
        }
    }

    return numLetrasTotal;
}

function crearDatosEstadisticas(numLetrasTotal) {
    let arrayDatos = new Array();
    for (let [letra, conteo] of conteoLetras) {
        arrayDatos.push([letra, conteo, (conteo / numLetrasTotal).toFixed(2)]);
    }

    return arrayDatos;
}
