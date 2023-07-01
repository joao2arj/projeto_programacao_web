const Sequelize = require('sequelize');
const database = require('../db');
 
const Pessoa = database.define('pessoa', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        // allowNull: false,
        primaryKey: true
    },
    nome: {
        type: Sequelize.STRING,
        // allowNull: false
    },
    cpf: {
        type: Sequelize.STRING,
        // allowNull: false,
        unique: true
    },
    data_nascimento: {
        type: Sequelize.DATE,
        // allowNull: false
    },
    telefone: {
        type: Sequelize.INTEGER
    },
    endereco: {
        type: Sequelize.STRING,
        // allowNull: false
    },
    cep: {
        type: Sequelize.INTEGER,
        // allowNull: false
    },
})
 
module.exports = Pessoa;