
const persona = {
    nombre: "Ivan Isay",
    edad: 37,
    direccion: {
        ciudad: "Qro",
        pais: "mx"
    }
};

const {nombre,edad,direccion} = persona;
console.log("me llamo", persona.nombre, ", tengo", persona.edad, "años de edad y vivo en ", persona.direccion.ciudad);