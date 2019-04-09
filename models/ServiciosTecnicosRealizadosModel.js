/**
 * Model ServiciosTecnicosRealizados
 * @type {*|{}|Model}
 */
CULINARIA.Model.ServiciosTecnicosRealizados = CULINARIA.Sequelize.define('ServiciosTecnicosRealizados', {
    fecha_inicio: {
        type: CULINARIA.Lib.Sequelize.STRING(15)
    },
    asesorados: {
        type: CULINARIA.Lib.Sequelize.INTEGER
    },
    beneficiados: {
        type: CULINARIA.Lib.Sequelize.INTEGER
    },
    tiempo_servicio: {
        type: CULINARIA.Lib.Sequelize.INTEGER
    },
    cantidad_servicios: {
        type: CULINARIA.Lib.Sequelize.INTEGER
    }
},{
    tableName: 'servicios_tecnicos_realizados',
    underscored: true
});
CULINARIA.Model.ServiciosTecnicosRealizados.belongsTo(CULINARIA.Model.Instalacion);
CULINARIA.Model.ServiciosTecnicosRealizados.belongsTo(CULINARIA.Model.ServiciosTecnicos);
CULINARIA.Model.Instalacion.hasMany(CULINARIA.Model.ServiciosTecnicosRealizados, { onUpdate: 'cascade', onDelete: 'cascade' });
CULINARIA.Model.ServiciosTecnicos.hasMany(CULINARIA.Model.ServiciosTecnicosRealizados, { onUpdate: 'cascade', onDelete: 'cascade' });