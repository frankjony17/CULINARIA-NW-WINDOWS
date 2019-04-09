/**
 * Model Especialidad.
 * @type {*|{}|Model}
 */
CULINARIA.Model.Especialidad = CULINARIA.Sequelize.define('Especialidad', {
    nombre: {
        type: CULINARIA.Lib.Sequelize.STRING(25),
        allowNull: false,
        unique: true
    },
    descripcion: {
        type: CULINARIA.Lib.Sequelize.STRING
    }
},{
    tableName: 'especialidad',
    underscored: true
});