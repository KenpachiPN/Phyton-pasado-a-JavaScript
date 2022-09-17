let producto = Number(prompt("Ingrese el valor del producto"));
let iva = Number(prompt("Ingrese el iva del producto"));
let aumentoiva = producto * iva;
    alert("El precio que tendrá que pagar de más por el iva es de: $" + aumentoiva + " pesos ")
let preciofinal = aumentoiva + producto;
    alert("El precio total del producto es de: $" + preciofinal);