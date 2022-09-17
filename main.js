let name = prompt("Ingrese su nombre");
let examen1 = Number(prompt("Ingrese la calificación del primer exámen"));
let examen2 = Number(prompt("Ingrese la calificación del segundo exámen"));
let examen3 = Number(prompt("Ingrese la calificación del tercer exámen"));
let examen4 = Number(prompt("Ingrese la calificación del cuarto exámen"));
let promedio = (examen1 + examen2 + examen3 + examen4) /4;
    alert("El promedio de " + name + " en sus 4 exámenes es de: " + promedio + " puntos");