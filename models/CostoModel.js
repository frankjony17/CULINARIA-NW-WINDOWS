/**
 * Model Costo.
 * @type {*|{}|Model}
 */
CULINARIA.Model.Costo = CULINARIA.Sequelize.define('Costo', {
    costo: {
        type: CULINARIA.Lib.Sequelize.STRING(25),
        allowNull: false
    },
    moneda: {
        type: CULINARIA.Lib.Sequelize.STRING,
        allowNull: false,
    },
    observacion: {
        type: CULINARIA.Lib.Sequelize.STRING
    }
},{
    tableName: 'costo',
    underscored: true
});