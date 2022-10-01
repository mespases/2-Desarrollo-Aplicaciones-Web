const par = function (x) {
    return (x%2 == 0) ? "par" : "impar";
}

const par2 = (x) => (x%2 == 0) ? "par" : "impar";

let test = par;
document.write(test(8))

let test2 = par2;
document.write("<br>"+test2(5))