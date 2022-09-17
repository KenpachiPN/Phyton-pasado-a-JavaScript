let tiempo = Number(prompt("Ingrese los minutos que duró en llamada"));
let valuemin = 355; 
let iva = 0.20;
let valuemin1 = tiempo * valuemin;
let ivamin = valuemin * 0.20;
let total = valuemin1 + ivamin; 
    alert("El valor de su llamada telefónica por " + tiempo +  " minutos, es de: " + total + "$ pesos");

