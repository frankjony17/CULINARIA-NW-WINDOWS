/**
 * Model Organismo
 * @type {*|{}|Model}
 */
CULINARIA.Model.Organismo = CULINARIA.Sequelize.define('Organismo', {
    nombre: {
        type: CULINARIA.Lib.Sequelize.STRING(25),
        allowNull: false,
        unique: true
    },
    descripcion: {
        type: CULINARIA.Lib.Sequelize.STRING
    }
},{
    tableName: 'organismo',
    underscored: true
});