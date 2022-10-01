function habilitarSelect(texto) {
    let select = document.getElementById(texto)

    if (select.disabled) {
        select.disabled = false
    } else {
        select.disabled = true
    }
}

function retornaValor(element) {

    if (element.tagName == "INPUT" && element.type == "text") {
        return element.value + ". "
    } else if (element.tagName == "TEXTAREA") {
        return element.value + ". "
    } else if (element.tagName == "INPUT" && element.type == "radio" && element.checked) {
        return element.value + ". "
    } else if (element.tagName == "SELECT" && !element.disabled) {
        return element.value + ". "
    } else {
        return ""
    }
}

function validarFormulario(texto) {
    let validate = document.getElementById(texto)
    let p = document.createElement("p")
    let texto_p = ""

    for (element of validate) {
        texto_p += (retornaValor(element))
    }

    let text_node = document.createTextNode(texto_p)
    p.appendChild(text_node)


    validate.appendChild(p)
}