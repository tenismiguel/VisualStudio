function ejer1() {
    alert("Hola")
    num1 = parseInt(prompt("Dime el primer numero"))
    num2 = parseInt(prompt("Dime el segundo numero"))
    num3 = parseInt(prompt("Dime el tercer numero"))

    if(num1 > num2 && num1 > num3){
        document.write("El numero mas alto es: "+num1)//No se si es +
    }else if(num2 > num1 && num2 > num3){
        document.write("El numero mas alto es: "+num2)
    }else{
        document.write("El numero mas alto es: "+num3)
    }
    
}

function ejer2() {
    num1 = parseInt(prompt("Dime un numero: "))

    if(num1 % 2 == 0){
        alert("El numero "+num1+" es un numero par")
    }else{
        alert("El numero "+num1+" es impar")
    }
}

function ejer3() {
    sumatorio = 0;
    for(i = 1; i <= 100; i++){
        sumatorio = sumatorio + i;
    }
    alert("El resultado de sumar los 100 primeros numeros es: "+sumatorio)
}

function ejer4() {
    sumatorio = 0;
    num = parseInt(prompt("Dime un numero: "));
    for(i = num; i <= num+100; i++){
        sumatorio = sumatorio + i;
    }
    alert("El resultado de sumar los 100 siguientes numeros es: "+sumatorio)
}

function ejer5() {
    num1 = parseInt(prompt("Dime un numero: "));
    num2 = parseInt(prompt("Dime otro numero: "));
    num3 = parseInt(prompt("Dime el ultimo numero: "));

    var max;
    var min;

    if(num1 > num2 && num1 > num3){
        max = num1;
    }else if(num2 > num1 && num2 > num3){
        max = num2;
    }else{
        max = num3;
    }

    if(num1 < num2 && num1 < num3){
        min = num1
    }else if(num2 < num1 && num2 < num3){
        min = num2;
    }else{
        min = num3;
    }

    alert("El numero mayor es: "+max+"\nY el numero menor es "+min)
}

function ejer6() {
    num = prompt("Dime un numero: ")
    var listaNumeros = new Array();
    listaNumeros += num;
    while(num >= 0){
        num = prompt("Dime un numero: ")
        if(num < 0){
            break;
        }
        listaNumeros += num;
    }

    document.write("Numeros introducidos: ")
    for(i = 0; i < listaNumeros.length;i++){
        document.write(listaNumeros[i])
    }

    var min = 99999999999999 
    for(i = 0; i < listaNumeros.length;i++){
        if(listaNumeros[i] < min){
            min = listaNumeros[i]
        }
    }

    document.write("<br>El numero mas pequeño de los introducidos es: "+min)
}

function ejer7() {
    gradosFarenheit = prompt("Dime los grados Farenheit: ")
    gradosCelcius = 5/9*(gradosFarenheit-32);

    document.write("La temperatura pasada a celcius da: "+gradosCelcius)
}

function ejer8() {
    velocidad = prompt("Dime la velocidad en km/h")
    tiempo = prompt("Dime el tiempo en segundos")

    velocidadEnSegundos = velocidad / 3600
    distancia = velocidad * tiempo

    document.write("La distancia recorrida total es: "+distancia)


}

function ejer9() {
    monedaUsuario = prompt("Dime un tipo de moneda: €, $, £")
    monedaACambiar = prompt("Dime una moneda a cambiar: €, $, £")
    cantidad = prompt("Dime la cantidad: ")

    if(monedaUsuario == "€" && monedaACambiar == "$"){
        cantidad = cantidad*1.11
    }

    if(monedaUsuario == "$" && monedaACambiar == "€"){
        cantidad = cantidad*0.9
    }

    if(monedaUsuario == "€" && monedaACambiar == "£"){
        cantidad = cantidad*0.84
    }

    if(monedaUsuario == "£" && monedaACambiar == "€"){
        cantidad = cantidad*1.19
    }

    if(monedaUsuario == "$" && monedaACambiar == "£"){
        cantidad = cantidad*0.76
    }

    if(monedaUsuario == "£" && monedaACambiar == "$"){
        cantidad = cantidad*1.32
    }

    document.write("Total de cantidad convertida: "+cantidad)

}

function ejer10() {
    a = parseInt(prompt("Dime un numero A:"))
    b = parseInt(prompt("Dime un numero B:"))

    opcion = confirm("Quieres que sea descendente?")
    if(opcion){
        for(i = b; i >= a;i--){
            document.write(i+",")
        }
    }else{
        for(i = a; i <= b;i++){
            document.write(i+",")
        }
    }
    
}

function ejer11() {
    document.write("Todos los divisibles entre 5 entre el 50 y 100<br>")
    for(i = 50; i <= 100;i++){
        if(i %5 == 0){
            document.write(i+",")
        }
    }
}

function ejer12() {
    multi = prompt("Dime el multiplo: ")
    a = prompt("Dime el primer numero: ")
    b = prompt("Dime el ultimo numero")

    document.write("Todos los multiplos entre "+a+" y "+b+"<br>")
    for(i = a; i < b; i++){
        if(i % multi == 0){
            document.write(i,",")
        }
    }

}