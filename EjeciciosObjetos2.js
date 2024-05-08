function ejer1() {

    function persona(nom, ape, edad) {

        this.nombre = nom;
        this.apellido = ape;
        this.edad = edad;
        this.padre = null;
        this.madre = null;
        this.hermanos = [];

        this.set_padre = function(padre) {
            this.padre = padre;
        }
    
        this.set_madre = function(madre) {
            this.madre = madre;
        }
    
        this.add_hermano = function(hermano) {
            this.hermanos.push(hermano);
        }

    }

    

    const p1 = new persona("Ned", "Stark", 33);
    const p2 = new persona("Catelyn", "Tully", 32);
    const p3 = new persona("Rob", "Stark", 16);
    const p4 = new persona("Jon", "Star", 17);
    const p5 = new persona("Sansa", "Stark", 18);

    p3.set_padre(p1.nombre)
    p4.set_padre(p1.nombre)
    p5.set_padre(p1.nombre)

    p3.set_madre(p2.nombre)
    p4.set_madre(p2.nombre)
    p5.set_madre(p2.nombre)

    p3.add_hermano("Jon")
    p3.add_hermano("Sansa")

    p4.add_hermano("Rob")
    p4.add_hermano("Sansa")

    p5.add_hermano("Rob")
    p5.add_hermano("Jon")

    
    document.write("Hermanos de "+p3.nombre+"<br>")
    for (i = 0; i < p3.hermanos.length;i++) {
        document.write(p3.hermanos[i]+"<br>")
    }

}


function ejer2() {
    funcion = prompt("Dime la funcion: ")
    valores = prompt("Dime los valores separados por ;")

    arrayValores = valores.split(";");

    document.write("<table border=2px><tr><td></td>");// Excribir un elemento en blanco y los valores en la primera fila
    for (let j = 0; j < arrayValores.length; j++) {
        document.write("<td>", arrayValores[j], "</td>");
    }
    document.write("</tr>");

    for (let i = 0; i < arrayValores.length; i++) {
        document.write("<tr>");

        // Escribir el primer elemento de cada fila con los valores de arrayValoresX
        document.write("<td>", arrayValores[i], "</td>");

        for (let j = 0; j < arrayValores.length; j++) {
            const x = arrayValores[i];
            const y = arrayValores[j];
            document.write("<td>", eval(funcion), "</td>");
        }

        document.write("</tr>");
    }
    document.write("</table>")
}