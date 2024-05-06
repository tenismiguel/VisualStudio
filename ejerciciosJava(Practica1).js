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