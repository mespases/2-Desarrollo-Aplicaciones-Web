var numerosArr = Array()
function generarNumerosAleatorios() {
    let numero = parseInt(Math.random() * 9) + 1
    return numero
}

function generarDecimo(divContenedor) {
    let div = document.getElementById(divContenedor)
    let num
    let p

    for (let i = 0; i < 3; i++) {
        num = document.createTextNode(generarNumerosAleatorios())
        p = document.createElement('p')
        p.append(num)
        div.children[i].appendChild(p)
        numerosArr.push(num.textContent)
    }

    document.getElementById('generarDecimo').disabled = true
    document.getElementById('realizarSorteo').disabled = false
}


function realizarSorteo() {
    let div = document.getElementById('numeroSorteo')
    let antiguoP = div.children[0]
    let texto = document.createTextNode(generarNumerosAleatorios())

    let nuevoP = document.createElement('p')
    nuevoP.append(texto)

    if (numerosArr.includes(texto.textContent)) {
        nuevoP.style.color = 'green'
        //nuevoP.setAttribute('style', 'color: green')
    } else {
        nuevoP.style.color = 'blue'
    }

    div.replaceChild(nuevoP, antiguoP)
}

// document.getElementsByTagName('body')[0].insertAdjacentHTML('afterend', 'texto prueba') permite insertar detras y no antes
//<!-- beforebegin -->
//<p>
//  <!-- afterbegin -->
//  foo
//  <!-- beforeend -->
//</p>
//<!-- afterend -->