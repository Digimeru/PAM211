
async function verificarUsuario(usuario){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(usuario === "admin"){
                resolve("Usuario verificado");
            } else {
                reject("Usuario no reconocido");
            }
        }, 2000);
    });
}

verificarUsuario("admin")
    .then(res => console.log(res))
    .catch(err => console.error(err));


verificarUsuario("Ivan")
    .then(res => console.log(res))
    .catch(err => console.error(err));