/**
 * Model AsociadosPago.
 * @type {*|{}|Model}
 */
CULINARIA.Model.AsociadosPago = CULINARIA.Sequelize.define('AsociadosPago', {
    mes: {
        type: CULINARIA.Lib.Sequelize.INTEGER
    },
    talonario: {
        type: CULINARIA.Lib.Sequelize.STRING(25)
    },
    fechaPago: {
        type: CULINARIA.Lib.Sequelize.STRING(15),
        field: 'fecha_pago'
    }
},{
    tableName: 'asociados_pago',
    underscored: true
});

CULINARIA.Model.AsociadosPago.belongsTo(CULINARIA.Model.Asociados);
CULINARIA.Model.AsociadosPago.belongsTo(CULINARIA.Model.APagar);

CULINARIA.Model.Asociados.hasMany(CULINARIA.Model.AsociadosPago, { onUpdate: 'cascade', onDelete: 'cascade' });
CULINARIA.Model.APagar.hasMany(CULINARIA.Model.AsociadosPago, { onUpdate: 'cascade', onDelete: 'cascade' });

//CULINARIA.Model.AsociadosPago.sync({force:true});