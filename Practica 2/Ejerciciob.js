
const productos = [
    { nombre: "Laptop", precio: 12000},
    { nombre: "Mouse", precio: 250},
    { nombre: "Teclado", precio: 750},
    { nombre: "Monitor", precio: 3000}
];

const mayor1000 = productos.filter(mayora => mayora.precio > 1000);

const nombres = mayor1000.map(n => n.nombre);
console.log(nombres);