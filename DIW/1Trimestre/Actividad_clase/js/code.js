let div = document.getElementById("table")
let tabla = "<table class='tabla'>"

for (let i = 0; i < 100; i++) {
    tabla += "<tr>"
        for (let j = 0; j < 30; j++) {
            tabla += "<td>Celda " + j + "</td>"
        }
    tabla += "</tr>"
}


tabla += "</table>"
div.innerHTML += tabla