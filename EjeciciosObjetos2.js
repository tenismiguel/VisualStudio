function ejer2() {
    funcion = prompt("Dime la funcion: ")
    valores = prompt("Dime los valores separados por ;")

    arrayValoresY = valores.split(";");// -5;-4;-3;-2;-1;0;-1;-2;-3;-4;-5
    arrayValoresX = valores.split(";");//No sirve


    /*
    var matriz = [arrayValoresX,arrayValoresY]
    matriz[0][0] = " ";
    
    for(a = 1; a < arrayValoresX.length;a++){
        for(){

        }
        matriz[0][a] = arrayValoresX[m]
    }

    for(d = 0 ; d < arrayValoresX.length;d++){
        document.write(matriz[0][d])
    }
    */

    /*
        for(b = 1; b < arrayValoresY.length;b++){
            p = 0
            matriz[b][0] = arrayValoresY[p];
            p++;
        }
      
       
        document.write("<table border=2px>")
        
        for(i = 1; i < arrayValoresX.length;i++){
            
            document.write("<tr>")
            for(j = 1; j < arrayValoresY.length;j++){
    
                matriz[x][j] = matriz[j][0]*matriz[0][j]  
                document.write("<td>",matriz[i-1][j-1],"</td>")
                
            }
            document.write("</tr>")
        }
        document.write("</table>")
        */
    document.write("<table border=2px><tr><td></td>");// Excribir un elemento en blanco y los valores en la primera fila
    for (let j = 0; j < arrayValoresY.length; j++) {
        document.write("<td>", arrayValoresY[j], "</td>");
    }
    document.write("</tr>");

    for (let i = 0; i < arrayValoresY.length; i++) {
        document.write("<tr>");

        // Escribir el primer elemento de cada fila con los valores de arrayValoresX
        document.write("<td>", arrayValoresY[i], "</td>");

        for (let j = 0; j < arrayValoresY.length; j++) {
            const x = arrayValoresY[i];
            const y = arrayValoresY[j];
            const resultadoFuncion = x * y;
            document.write("<td>", resultadoFuncion, "</td>");
        }

        document.write("</tr>");
    }
    document.write("</table>")
}