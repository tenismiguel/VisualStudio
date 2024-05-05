function ejer1(params) {
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