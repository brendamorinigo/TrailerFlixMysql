async function authenticate() {
    try{
        await sequelize.authenticate();
        console.log('Conectado a la bbdd correctamente');
    }catch(error){
        console.log('Error al conectarse a la bbdd', error);
    }
}

async function closeConnection() {
    try{
        await sequelize.close();
        console.log('Desconexion desconexion');
    }catch(error){
        console.log('Error en la desconexion', error);
    }
}