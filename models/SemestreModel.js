/**
 * Model Semestre.
 * @type {*|{}|Model}
 */
CULINARIA.Model.Semestre = CULINARIA.Sequelize.define('Semestre', {
    nombre: {
        type: CULINARIA.Lib.Sequelize.STRING(25),
        allowNull: false,
        unique: true
    },
    descripcion: {
        type: CULINARIA.Lib.Sequelize.STRING
    }
},{
    tableName: 'semestre',
    underscored: true
});