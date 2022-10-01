document.addEventListener("DOMContentLoaded", function (event) {

    let p = document.getElementsByTagName('p')
    let len = p.length
    let len_copy = p.length
    let copy_p = Array()

    for (let i = 0; i < len; i++) {
        copy_p.push(p[0])
        p[0].remove()
    }

    let body = document.getElementsByTagName('body')[0]

    for (let i = len_copy - 1; i >= 0; i--) {
        body.appendChild(copy_p[i])
    }

})