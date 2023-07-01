const Sequelize = require('sequelize');
const database = require('../db');
 
const Movimento = database.define('movimento', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    contacorrente_id: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    tipo: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
    },
    data_movimento: {
        type: Sequelize.DATE,
        allowNull: false
    },
    valor: {
        type: Sequelize.DOUBLE,
        allowNull: false
    },
    contacorrente_origem: {
        type: Sequelize.INTEGER,

    },
    contacorrente_destino: {
        type: Sequelize.INTEGER,
 
    },
    observacao: {
        type: Sequelize.STRING,
 
    },

})
 
module.exports = Movimento;