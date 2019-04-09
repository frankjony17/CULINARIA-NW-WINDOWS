/**
 * Model APagar.
 * @type {*|{}|Model}
 */
CULINARIA.Model.APagar = CULINARIA.Sequelize.define('APagar', {
    cuota: {
        type: CULINARIA.Lib.Sequelize.STRING(10),
        allowNull: false
    },
    periodo_pago: {
        type: CULINARIA.Lib.Sequelize.STRING,
        field: 'periodo_pago'
    }
},{
    tableName: 'a_pagar',
    underscored: true
});