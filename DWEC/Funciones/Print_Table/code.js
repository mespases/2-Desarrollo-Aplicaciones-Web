var div = document.getElementById("div")

function tabla(filas=10, columnas=4, color="black") {
    document.write('<table style="border-collapse: collapse; >')

    for(let i = 0; i < filas; i++) {
        document.write('<tr>')
        for (let j = 0; j < columnas; j++) {
            document.write('<td></td>')
        }
        document.write('</tr>')
    }
    document.write('</table>')
}


tabla()