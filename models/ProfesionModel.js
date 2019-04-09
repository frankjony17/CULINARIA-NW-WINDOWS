/**
 * Model Profesion.
 * @type {*|{}|Model}
 */
CULINARIA.Model.Profesion = CULINARIA.Sequelize.define('Profesion', {
    nombre: {
        type: CULINARIA.Lib.Sequelize.STRING(25),
        allowNull: false,
        unique: true
    },
    descripcion: {
        type: CULINARIA.Lib.Sequelize.STRING
    }
},{
    tableName: 'profesion',
    underscored: true
});