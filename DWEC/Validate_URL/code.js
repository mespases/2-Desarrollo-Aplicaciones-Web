// Obtención de la URL a comprobar
// http://usuario:contrasena@jarroba.com:80/articulos/articulo/id=123&busqueda=java#comment-12345
var url = "http:\\\\anugi.anugi" //prompt('Indica la URL que quieres comprobar');

// Partes del patrón de la expresión regular
patronProtocolo = `^(ftp|http|https):\\/{0,3}`; // Protocol, seguit de dos punts i, segons el protocol, per fins a tres barres inclinades (/), però pot fins i tot no haver-hi cap.
patronUsuarioPassword = `(([A-Za-z0-9\\-_\\.]*:.+|[A-Za-z0-9\\-_\\.]*)@+)*`; // Pot haver-hi un nom d'usuari (no és obligatori) que constarà només de textos, números i/o guions. A més, es poden separar diverses paraules amb punts, tipus jorge.sanchez, per exemple. // Després del nom d'usuari (si n'hi ha) pot haver-hi dos punts seguits de la contrasenya. En la contrasenya val qualsevol serie de caràcters. Cal fer notar que si hi ha contrasenya ha d'haver-hi nom d'usuari seguit de dos punts, però pot haver-hi nom d'usuari i no haver-hi contrasenya (els dos punts no es posarien tampoc).
patronNombreMaquina = `([A-Za-z0-9\\-_]*\.[A-Za-z0-9\\-_]+(\.[A-Za-z0-9\\-_]+)*)`; //Si hi ha nom d'usuari i contrasenya es col·loca al final de la contrasenya un símbol d'arrova. Si no hi ha contrasenya es col·loca darrere del nom de l'usuari,
patronPuerto = `(:[0-9]{1,5})?` // Després el nom de la màquina, els caràcters de la qual són els mateixos que per al nom d'usuari. Almenys un nom de màquina consta de dues paraules separades per un punt, però pot haver-hi més paraules.
patronRuta = `(\\/([A-Za-z\\.]+\\/?)*)?` // Opcionalment, es poden posar dos punts seguits d'un número de port. El número de port és una sèrie de xifres numèriques.
patronBusqueda = `(\\?.+)?` 

// Patrón completo de la URL
var patronURL = new RegExp(patronProtocolo + 
    patronUsuarioPassword + 
    patronNombreMaquina + 
    patronPuerto + 
    patronRuta + 
    patronBusqueda); 
    

// Comprobación de la URL de entrada con el patrón indicado
console.log(patronURL.test(url))