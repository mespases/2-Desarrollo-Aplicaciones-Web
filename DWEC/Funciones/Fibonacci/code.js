function fibonacci(num) {
    let result = [0, 1]
    let tot

    for (let i = 0; i+2 < num; i++) {

        if (result[i+1] != null) {
            tot = result[i] + result[i+1]
        }
        result[i+2] = tot
    }

    return result
}

let num

do {
    num = prompt("Introduce un numero: ")
} while (!Number(num))

document.write(fibonacci(num))