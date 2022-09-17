let name = prompt("Ingrese su nombre");
let parcial1 = Number(prompt("Ingrese la calificación del primer parcial"));
let parcial2 = Number(prompt("Ingrese la calificación del segundo parcial"));
let parcial3 = Number(prompt("Ingrese la calificación del tercer parcial"));
let examenfin = Number(prompt("Ingrese la calificación del exámen final"));
let trabajofin = Number(prompt("Ingrese la calificación del trabajo final"));
let result = (((parcial1 + parcial2 + parcial3) /3) * 0.55) + (examenfin * 0.30) + (trabajofin * 0.15);
    alert("El promedio final que tuvo " + name + " en la materia de algoritmos es de: " + result);