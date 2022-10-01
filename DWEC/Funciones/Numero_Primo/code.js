function primo(numero) {
    for (let i = 2; i < numero; i++) {
        if (numero%2 !== 0) {
            return true
        } else {
            return false
        }
    }
}

document.write("<h1>Los numeros primos son: </h1>")
for (let i = 0; i < 1000; i++) {
    if (primo(i)) {
        document.write("<p>"+i+"</p>")
    }
}