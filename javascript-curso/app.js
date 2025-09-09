var usuario = "Jose";
let edad = 30;

console.log("Mucho gusto " + usuario);
console.log(`Mucho gusto ${usuario}, tienes ${edad} años`);

let n1 = 10;
let n2 = 20;
let suma = n1 + n2;
console.log(`La suma es: ${suma}`);

let resultado = n1 > n2;
console.log(resultado);

if (!resultado){
    console.log("n2 es mayor que n1");
}

var pais = "Mexico";
switch(pais){
    case "Mexico":
        console.log("Pais: Mexico");
        break;
    case "Colombia":
        console.log("Pais: Colombia");
        break;
    default:
        console.log("No es Mexico ni Colombia");
}

while(n1 < n2){
    console.log(n1);
    n1++;
}
console.log("Fin del ciclo");

let nombres = ["Juan", "Ana", "Pedro"];

for(let i = 0; i < nombres.length; i++){
    console.log(nombres[i]);
}

function saludar(nombre){
    console.log(`Hola ${nombre}`);
}

saludar("Maria");
saludar(usuario);