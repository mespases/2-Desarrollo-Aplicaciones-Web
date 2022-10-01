var myGamePiece
var myObstacles = []
var score = 0
var p_score = document.getElementById("score")
var btn = document.getElementById("restart")
var death = document.getElementById("death")
var end = false

// Empieza el juego, creando una figura 
function startGame() {
    myGamePiece = new component(50, 50, "img/ch.png", 20, 75, "image")
    myGameArea.start()
}

// Crea la area del juego con un canvas
var myGameArea = {
    canvas : document.createElement("canvas"),

    // Empieza el juego
    start : function() {
        this.canvas.width = 728
        this.canvas.height = 410
        this.context = this.canvas.getContext("2d")
        document.body.insertBefore(this.canvas, document.body.childNodes[0])
        this.interval = setInterval(updateGameArea, 20)
        this.frameNo = 0;
    },

    // Para el juego
    stop : function() {
        clearInterval(this.interval)
    },    
    clear : function() {
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height)
    }
}

// Componente que se usara para los obstaculos y el personaje
function component(width, height, color, x, y, type) {
    this.type = type
    this.width = width
    this.height = height
    this.x = x
    this.y = y  
    this.speedX = 0
    this.speedY = 0
    this.gravity = 0.4
    this.gravitySpeed = 0
    this.bounce = 0.3

    if (type == "image") {
        this.image = new Image();
        this.image.src = color;
    }

    // Actualiza la imagen moviendo el componente
    this.update = function() {
        if (type == "image") {
            ctx.drawImage(this.image,
            this.x,
            this.y,
            this.width, this.height);
        } else {
            ctx = myGameArea.context
            ctx.fillStyle = color
            ctx.fillRect(this.x, this.y, this.width, this.height) 
        }
    }

    // Actualiza la posicion del personaje/obstaculo
    this.newPos = function() {
        this.gravitySpeed += this.gravity
        this.x += this.speedX
        this.y += this.speedY + this.gravitySpeed
        this.hitBottom()
        this.hitTop()
        this.hitLeft()
        this.hitRight()
    }

    // Limit map
    this.hitBottom = function() {
        var rockbottom = myGameArea.canvas.height - this.height;
        if (this.y > rockbottom) {
            this.y = rockbottom;
            this.gravitySpeed = -(this.gravitySpeed * this.bounce);
        }
    }

    // Limit map
    this.hitTop = function() {
        if (this.y < 0) {
            this.y = 0
        }
    }

    // Limit map
    this.hitLeft = function () { 
        if (this.x < 0) {
            this.x = 0
        }
    }

    // Limit map
    this.hitRight = function () {  
        if (this.x > myGameArea.canvas.width - this.width) {
            this.x = myGameArea.canvas.width - this.width
        }
    }

    // Colision del personaje con los objetos
    this.crashWith = function(otherobj) {
        var myleft = this.x
        var myright = this.x + (this.width)
        var mytop = this.y
        var mybottom = this.y + (this.height)
        var otherleft = otherobj.x
        var otherright = otherobj.x + (otherobj.width)
        var othertop = otherobj.y
        var otherbottom = otherobj.y + (otherobj.height)
        var crash = true

        if ((mybottom < othertop) || (mytop > otherbottom) || (myright < otherleft) || (myleft > otherright)) {
            crash = false
        }
        return crash
    }
}


function everyinterval(n) {
    if ((myGameArea.frameNo / n) % 1 == 0) {return true;}
    return false;
}


// Actualiza el area comprobando si ha muerto y adecuando la velocidad de los objetos 
function updateGameArea() {
    var x
    var minSpace

    // Si colisiona fin del juego
    for (i = 0; i < myObstacles.length; i += 1) {
        if (myGamePiece.crashWith(myObstacles[i])) {
            myGameArea.stop();
            death.style.display = "block"
            end = true
            return;
        }
    }

    myGameArea.clear()
    myGameArea.frameNo += 1

    // Crea nuevos obstaculos indefinidamente
    if (myGameArea.frameNo == 1 || everyinterval(120)) {
        x = myGameArea.canvas.width
        minSpace = Math.floor(Math.random()*500)+60
        myObstacles.push(new component(10, 1000, "#0d708d", x, minSpace));
    }

    // Velocidad de los objetos segun el score
    for (i = 0; i < myObstacles.length; i += 1) {
        if (score < 1000) {
            myObstacles[i].x += -1;
        } else if (score < 1500) {
            myObstacles[i].x += -2;
        } else if (score < 2000) {
            myObstacles[i].x += -3; 
        } else if (score < 2500) {
            myObstacles[i].x += -4;
        } else if (score < 3000) {
            myObstacles[i].x += -5;
        } else if (score < 3500) {
            myObstacles[i].x += -7;
        } else if (score < 4000) {
            myObstacles[i].x += -9;
        } else if (score < 4500) {
            myObstacles[i].x += -11;
        } else if (score < 5000) {
            myObstacles[i].x += -13;
        } else {
            myObstacles[i].x += -20;
        }
        myObstacles[i].update();
    }

    score++
    p_score.innerHTML = "Your Score: " + score

    myGamePiece.newPos();
    myGamePiece.update();
}

// Movimiento del personaje con la flechas y el espacio
document.addEventListener('keydown', (event) => {
    let code = event.keyCode

    if (code == 37) {
        myGamePiece.speedX = -5
    } else if (code == 39) {
        myGamePiece.speedX = 5
    } else if (code == 38 || code == 32) {
        myGamePiece.speedY = -10
    } else if (code == 40) {
        myGamePiece.speedY = 5
    }


    // Cuando acabe el juego pulsa el enter para reiniciar
    if (code == 13 && end) {
        window.location.href = window.location.href
    }
})

// Finaliza el movimiento del personaje cuando dejen de pulsar las flechas
document.addEventListener('keyup', (event) => {
    let code = event.keyCode

    if (code == 37) {
        myGamePiece.speedX = 0
    } else if (code == 39) {
        myGamePiece.speedX = 0
    } else if (code == 38 || code == 32) {
        myGamePiece.speedY = 0
    } else if (code == 40) {
        myGamePiece.speedY = 0
    }
})

// Reinicia la pagina cuando pulsen el boton de restart
btn.addEventListener('click', function () {  
    window.location.href = window.location.href
})