var div = document.getElementById("div")
var myarray = []

for (let i = 0; i < 20; i++) {
    myarray[i] = parseInt((Math.random()*50))
}

for (let i = 0; i < myarray.length; i++) {
    for (let j = 0; j < myarray[i]; j++) {
        div.innerHTML += "*"
    }
    div.innerHTML += "<br>"
}