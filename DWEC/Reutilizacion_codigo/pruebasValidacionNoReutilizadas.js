comprobarPatrones = function (elementoAComprobar, tipoComprobacion) {
    let patronNumeroRegistro = /^[0-9]{0,6}$/;
    let patronNombreCompleto = /^[A-ZÁÉÍÓÚÇ][a-záéíóúü]+ [A-ZÁÉÍÓÚÇ]{1,2}\.$/;
    let patronNumeroSS = /^[0-9]{1,9}$/;
    let patronDireccion = /^(C\/|Av\.)[A-ZÁÉÍÓÚÇ][a-záéíóúü]+ ?[a-záéíóúü ]*, [0-9]+$/;

    let patrones = new Map([
        ['numeroRegistro', patronNumeroRegistro],
        ['nombre', patronNombreCompleto],
        ['numeroSS', patronNumeroSS],
        ['direccion', patronDireccion]
    ]);
        
    return patrones.get(tipoComprobacion).test(elementoAComprobar);
}

function comprobar(tipo, elemento, resultadoCorrecto) {  
        console.log(`Tipo de comprobacion: ${tipo} - Elemento a comprobar: ${elemento}\n` + 
        `Resultado correcto: ${resultadoCorrecto} - Resultado obtenido: ${comprobarPatrones(elemento, tipo)} \n`);
}

const data = `
[
        {
            "elemento": "ACD123",
            "tipo": "numeroRegistro",
            "resultadoCorrecto": true
        },{
            "elemento": "AC123",
            "tipo": "numeroRegistro",
            "resultadoCorrecto": false
        },{
            "elemento": "ACGTHT123",
            "tipo": "numeroRegistro",
            "resultadoCorrecto": false
        },{
            "elemento": "145265",
            "tipo": "numeroRegistro",
            "resultadoCorrecto": false
        },{
            "elemento": "ACG124w",
            "tipo": "numeroRegistro",
            "resultadoCorrecto": false
        }, {
            "elemento": "Fernández J.",
            "tipo": "nombre",
            "resultadoCorrecto": true
        }, {
            "elemento": "López Ariadna M.",
            "tipo": "nombre",
            "resultadoCorrecto": false
        }, {
            "elemento": "López Ariadna M.",
            "tipo": "nombre",
            "resultadoCorrecto": true
        }, {
            "elemento": "Castillo JL.",
            "tipo": "nombre",
            "resultadoCorrecto": false
        }, {
            "elemento": "Castillo JSL.",
            "tipo": "nombre",
            "resultadoCorrecto": false
        }, {
            "elemento": "López M",
            "tipo": "nombre",
            "resultadoCorrecto": false
        }, {
            "elemento": "Martinez",
            "tipo": "nombre",
            "resultadoCorrecto": false
        }, {
            "elemento": "J.",
            "tipo": "nombre",
            "resultadoCorrecto": false
        }, {
            "elemento": "C/Federico lorca, 50",
            "tipo": "direccion",
            "resultadoCorrecto": true
        }, {
            "elemento": "Av.Argentina, 123",
            "tipo": "direccion",
            "resultadoCorrecto": true
        }, {
            "elemento": "C/lorenzo, 3",
            "tipo": "direccion",
            "resultadoCorrecto": false
        }, {
            "elemento": "Av.Gimenez Losantos, 40",
            "tipo": "direccion",
            "resultadoCorrecto":true
        }, {
            "elemento": "C/Almirante 45",
            "tipo": "direccion",
            "resultadoCorrecto": false
        }, {
            "elemento": "C/Almirante",
            "tipo": "direccion",
            "resultadoCorrecto":false
        }, {
            "elemento": "C/45, 45",
            "tipo": "direccion",
            "resultadoCorrecto": false
        }
    ]
`

const dataJson = JSON.parse(data)

for (element of dataJson) {
        comprobar(element["tipo"], element["elemento"], element["resultadoCorrecto"])
}