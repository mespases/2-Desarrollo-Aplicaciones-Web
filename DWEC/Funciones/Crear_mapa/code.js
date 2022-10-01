function map(array) {
    const mapa = new Map()
    let num

    array.forEach(element => {
        if (mapa.has(element)) {
           num = mapa.get(element) + 1
           mapa.set(element, num) 
        } else {
            mapa.set(element, 1)
        }
    });

    return mapa
}

let cont = 0
let arr = []
let size
let result

do {
    txt = prompt("Introduce una palabra")
    if (txt != "" && txt != null) {
        arr[cont] = txt
        cont++
    }

} while (txt != null)

size = map(arr).size;
result = map(arr).entries();

for (let i = 0; i < size; i++) {
    document.write("<p>" + result.next().value + "</p>")
}


//result.forEach(element => {
  //  document.write("<p>" + element + "</p>")
//})