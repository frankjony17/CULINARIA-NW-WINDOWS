/**
 * Model AsociadosCuota.
 * @type {*|{}|Model}
 */
CULINARIA.Model.AsociadosCuota = CULINARIA.Sequelize.define('AsociadosCuota', {
    cuota: {
        type: CULINARIA.Lib.Sequelize.STRING(10),
        allowNull: false
    },
    periodo_pago: {
        type: CULINARIA.Lib.Sequelize.STRING,
        field: 'periodo_pago'
    }
},{
    tableName: 'asociados_cuota',
    underscored: true
});