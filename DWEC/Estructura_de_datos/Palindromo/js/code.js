var txt = prompt("Introduce un texto para ver si es palindromo")

txt = txt.replace(/[\u0300-\u036f]/g, "")
txt = txt.toLowerCase()
txt = txt.replace(/[^a-zA-Z]/g, "")

console.log(txt.split())
console.log(txt.split().reverse())


if (txt == txt.split().reverse()) {
    document.write("Es un palindromo")
}