let radio = Number(prompt("Ingrese el radio del cilindro "));
let altura = Number(prompt("Ingrese la altura del cilindro")); 
let area = (2 * Math.PI * Math.pow(radio,2)) + ((2 * Math.PI * radio) * altura);
let volumen = (Math.PI * Math.pow(radio,2) * altura)
    alert("El área del cilindro es de: " + area + "\n" + 
          "El volumen del cilindro es de: " + volumen  );

