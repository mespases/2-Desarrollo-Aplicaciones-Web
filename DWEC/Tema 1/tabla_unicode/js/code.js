document.write('<table border><tr><th>Código</th><th>Simbolo</th>');

for (i = 0; i < 10000; i++) {
    document.write('<tr>');
    document.write('<td>' + i + '</td>');
    document.write('<td> ' + String.fromCharCode(i) + ' </td>'); 
    document.write('</tr>');
}

document.write('</table>');