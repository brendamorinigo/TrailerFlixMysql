const Sequelize = require('sequelize');
const express= require('express');

const sequelize= new sequelize('database','username','password',{
    host: 'localhost',
    dialect: 'mysql',
    dialectOptions:{options: {encrypt:true} },
    define:{timestamps:false}
});

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
        console.log('Desconectado correctamente');
    }catch(error){
        console.log('Error en la desconeccion', error);
    }
}