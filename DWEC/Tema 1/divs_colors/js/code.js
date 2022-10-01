
for (i = 0; i < 2000; i++) {
    var x = Math.floor(Math.random() * 881);
    var z = Math.floor(Math.random() * 1000);

    color = "#";

    for (j = 0; j < 6; j++) {
        color += Math.floor(Math.random() * 9);
    }


    document.write("<div style='background: " + color + "; margin-top: " + x + "px; margin-left: " + z + "px;'></div>");
}