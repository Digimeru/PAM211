
function simularPeticionAPI(){
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve("Datos de la API");
        },5000);
    });
}

async function obtenerDatos(){
    const datos = await simularPeticionAPI();
    console.log(datos);
}

obtenerDatos();