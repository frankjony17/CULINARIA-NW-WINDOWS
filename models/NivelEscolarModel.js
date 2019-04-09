/**
 * Model Organismo
 * @type {*|{}|Model}
 */
CULINARIA.Model.NivelEscolar = CULINARIA.Sequelize.define('NivelEscolar', {
    nombre: {
        type: CULINARIA.Lib.Sequelize.STRING(25),
        allowNull: false,
        unique: true
    },
    descripcion: {
        type: CULINARIA.Lib.Sequelize.STRING
    }
},{
    tableName: 'nivel_escolar',
    underscored: true
});