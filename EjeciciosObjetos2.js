function ejer1() {

    function persona(nom, ape, edad) {
        //Intentarlo pero con: class persona y metodos necesarios
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

function ejer3() {
    //Ejemplo de como funciona una clase y sus metodos en javascript
    class Conversor{
        constructor(cantidadYTipo){
            this.cant = cantidadYTipo;
        }

        convertir(){
            
            let monedaACambiar = prompt("Dime el tipo de moneda a cambiar: €,$,£")
            //Si no va probar a quitar this y si no substring
            let tipoMoneda = this.cant.charAt(this.cant.length - 1)
            let cantidad = this.cant.substring(0,this.cant.length -1)
            cantidad = parseInt(cantidad);

            
            let resultado;
            if(tipoMoneda === "€" && monedaACambiar === "$"){
                resultado = cantidad*1.11
                return resultado+"$"
            }

            if(tipoMoneda === "$" && monedaACambiar === "€"){
                resultado = cantidad*0.9
                return resultado+"€"
            }

            if(tipoMoneda === "€" && monedaACambiar === "£"){
                resultado = cantidad*0.84
                return resultado+"£"
            }

            if(tipoMoneda === "£" && monedaACambiar === "€"){
                resultado = cantidad*1.19
                return resultado+"€"
            }

            if(tipoMoneda === "$" && monedaACambiar === "£"){
                resultado = cantidad*0.76
                return resultado+"£"
            }

            if(tipoMoneda === "£" && monedaACambiar === "$"){
                resultado = cantidad*1.32
                return resultado+"$"
            }
        }

    }

    let monedas = prompt("Dime la cantidad y las monedas")
    const convertidor = new Conversor(monedas);

    let result = convertidor.convertir();
    document.write("El total a cambiar es: "+result)
}

function ejer4() {
    let cadena = prompt("Dime una cadena: ")

    let numCaracteres = parseInt(cadena.length)
    cadena = cadena.toUpperCase();

    let arrayCadenas = []
    arrayCadenas.push(cadena)

    let continuar = confirm("¿Desea continuar con el programa?")

    if(continuar){
        while(continuar){
            cadena = prompt("Dime una cadena: ")
            arrayCadenas.push(cadena)
            continuar = confirm("¿Desea continuar con el programa o finalizar?")
        }

        document.write("Todos los caracteres introducidos: ")
        for(i = 0 ; i < arrayCadenas.length;i++){
            document.write(arrayCadenas[i]+", ")
        }

    }else{
        document.write("El numero de caracteres de la primera cadena es: "+numCaracteres+"<br>Cadena a mayuscula: "+cadena)
    }
}

function ejer5() {
    palabra = prompt("Dime una palabra")

    palabraArray = palabra.split("")
    
    var esPalindromo;
    for(i = 0; i < palabraArray.length / 2;i++){
        if(palabraArray[i] === palabraArray[palabraArray.length -i -1]){
            esPalindromo = true;
        }else{
            esPalindromo = false;
            break;
        }
    }

    if(esPalindromo){
        document.write("La palabra "+palabra+" es palindromo");
    }else{
        document.write("La palabra "+palabra+" no es un palindromo")
    }
}