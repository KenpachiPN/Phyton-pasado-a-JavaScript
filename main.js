
document.getElementById("sumar").onclick = textsuma;
function textsuma(){
    alert("Has decidido sumar");
}


Ejercicios.getElementById("result").onclick = sumar; 
function sumar(){
    var numero1 = document.getElementById("num1").value;
    var numero2 = document.getElementById("num2").value;
    var suma = parseInt(num1) + parseInt(num2);
    alert("La suma es: " +suma);
}