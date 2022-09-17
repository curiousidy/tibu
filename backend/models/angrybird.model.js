const { Sequelize } = require(".");

module.exports = (sequelize, Sequelize) =>{
    const Bird = sequelize.define("bird", {
        name: {
            type: Sequelize.STRING
        },
        power: {
            type: Sequelize.STRING
        },
        genre: {
            type: Sequelize.STRING
        },
        size: {
            type: Sequelize.STRING
        },
        scope: {
            type: Sequelize.STRING
        },
        color: {
            type: Sequelize.STRING
        }
    });

    return Bird;
}