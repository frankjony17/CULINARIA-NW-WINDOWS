/**
 * Model ServiciosTecnicos.
 * @type {*|{}|Model}
 */
CULINARIA.Model.ServiciosTecnicos = CULINARIA.Sequelize.define('ServiciosTecnicos', {
    nombre: {
        type: CULINARIA.Lib.Sequelize.STRING(25),
        allowNull: false,
        unique: true
    },
    descripcion: {
        type: CULINARIA.Lib.Sequelize.STRING
    }
},{
    tableName: 'servicios_tecnicos',
    underscored: true
});