/**
 * Model Asociados.
 * @type {*|{}|Model}
 */
CULINARIA.Model.Asociados = CULINARIA.Sequelize.define('Asociados', {
    fechaAsociacion: {
        type: CULINARIA.Lib.Sequelize.STRING(15),
        field: 'fecha_asociacion'
    },
    observaciones: {
        type: CULINARIA.Lib.Sequelize.STRING
    }
},{
    tableName: 'asociados',
    underscored: true
});

CULINARIA.Model.Asociados.belongsTo(CULINARIA.Model.Persona);
CULINARIA.Model.Persona.hasMany(CULINARIA.Model.Asociados, { onUpdate: 'cascade', onDelete: 'cascade' });