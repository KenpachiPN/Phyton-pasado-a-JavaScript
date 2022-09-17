let distancia = Number(prompt("Ingrese la distancia que recorre el automovil, KM"));
let tiempo = Number(prompt("Ingrese el tiempo que se demora recorriendo esa distancia, KM/H"))
let velocidad = (distancia * 1000) / (tiempo * 60);
    alert("La velocidad del automovil es de: " + velocidad + " M/S" );