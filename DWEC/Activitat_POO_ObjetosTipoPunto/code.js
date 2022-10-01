function Punto(coordX, coordY) {
    this.x = coordX;
    this.y = coordY;

    this.cambiar = function (coordX, coordY) {
        this.x = coordX;
        this.y = coordY;
    }

    this.obetenerDistancia =  function (punto2) {  
        let result = Math.sqrt(Math.pow((punto2.x - this.x), 2) + Math.pow((punto2.y - this.y), 2))

        return result; 
    }

    this.suma = function (punto2) {
        let x = this.x + punto2.x;
        let y = this.y + punto2.y;
        
        return new Punto(x, y);
    }

    this.toString = function () {
        return ("Punto X: " + this.x + " Punto y:" + this.y);
    }

    this.copia = function () {  
        return new Punto(this.x, this.y);
    }
}


var p = new Punto(1,2); 
console.log("p: " + p.toString()) // Salida: (1,2)
var q = new Punto(6,-3);
console.log("q: " + q.toString()); //Salida: (6,-3)

p.cambiar(-5,2);

var r = p.copia();
console.log("r: " + r.toString()); //Salida (-5,2)
r.x = 9;

console.log("p: " + p.toString()); // Salida: (-5,2)
console.log("r: " + r.toString()); // Salida: (9,2)

var s = p.suma(r);
console.log("s: " + s.toString()); // Salida: (4,4)

console.log("Distancia entre p y q: " + p.obetenerDistancia(q)); // Salida: 12.08