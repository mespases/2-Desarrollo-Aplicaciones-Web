document.addEventListener("DOMContentLoaded", function (event) {
    let cabecera = ['LETRA', 'NºVECES', '%APARICIONES'];

    // INTRODUCIR CÓDIGO AQUÍ
    let div = document.getElementById('divTabla');
    // Creamos los elementos
    let table = document.createElement('table')
    let thead = document.createElement('thead')
    table.append(thead)
    let node
    let text

    // añadimos la cabezera a la tabla
    for (let i of cabecera) {
        node = document.createElement('th')
        text = document.createTextNode(i)
        node.append(text)
        node.setAttribute('style', 'width: 250px; text-align: center;')
        thead.append(node)
    }

    div.append(table)
});




