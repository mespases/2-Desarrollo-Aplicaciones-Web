var error = true
function validarDatos(formulario) {
    // Comprueba que formulario se ha actualizado
    let form = document.getElementById(formulario)
    let form1 = form.children[0]
    let form2 = form.children[1]

    comprobarForm1(form1)
    comprobarForm2(form2)
}

function comprobarForm1(form1) {
    // Comprueba que no haya errores en el formulario 1
    reinicia(form1)

    if (form1.children[2].value != "" && form1.children[6].value != "" &&
        !Number(form1.children[2].value) && !Number(form1.children[6].value)) {
        imprimirForm1(form1)
        error = false

    } else if (form1.children[2].value != "" && form1.children[6].value == "" ||
        form1.children[2].value != "" && Number(form1.children[6].value)) {
        form1.children[6].setAttribute('style', 'background-color: red;')
        error = false

    } else if (form1.children[2].value == "" && form1.children[6].value != "" ||
        Number(form1.children[2].value) && form1.children[6].value != "") {
        form1.children[2].setAttribute('style', 'background-color: red;')
        error = false

    } else {
        error = true
    }
}

function imprimirForm1(form1) {
    // Imprime la informacion por pantalla
    let texto1 = document.createTextNode(form1.children[2].value + ", ")
    let texto2 = document.createTextNode(form1.children[6].value)
    let node = document.createElement('p')

    node.append(texto1)
    node.append(texto2)
    form1.append(node)
}

function reinicia(form1) {
    // Elimina los estilos y el parrafo si existe
    form1.children[6].setAttribute('style', 'background-color: white;')
    form1.children[2].setAttribute('style', 'background-color: white;')

    if (form1.children.length == 11) {
        form1.children[10].remove()
    }
}

function comprobarForm2(form2) {
    // Borra el parrafo si existe y comprueba que no haya errores
    if (form2.children.length == 17) {
        form2.children[16].remove()
    }

    for (let element of form2.children) {
        if (element.checked) {
            imprimirForm2(form2, element.value)
        }
    }

    if (error) {
        form2.setAttribute('style', 'background-color: red;')
        let str = "Error no se ha insertado ningun rango de edad"
        let rango = document.createTextNode(str)
        let node = document.createElement('p')
        node.append(rango)
        form2.append(node)
    } else {
        form2.setAttribute('style', 'background-color: rgba(238, 130, 238, 0.192);')
    }
}

function imprimirForm2(form2, value) {
    // Imprime los dato del formulario 2 por pantalla
    let str = "Te encuentras en el rango de edad " + value
    let rango = document.createTextNode(str)
    let node = document.createElement('p')
    node.append(rango)
    form2.append(node)

    error = false
}