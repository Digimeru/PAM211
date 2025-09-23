const personas = [
    { nombre: "ana", edad: 22},
    { nombre: "Luis", edad: 35},
    { nombre: "Maria", edad: 38}
]

const EncontrarLuis = personas.find(persona => persona.nombre === "Luis");
console.log(EncontrarLuis);

personas.forEach(persona => {
    console.log(`Hola, mi nombre es ${persona.nombre} y tengo ${persona.edad} años`);
});

const SumaEdades = personas.reduce((acumulador, persona) => acumulador + persona.edad, 0);
console.log(`La suma de todas las edades es: ${SumaEdades}`);