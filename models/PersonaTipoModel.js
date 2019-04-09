/**
 * Model TipoPersona.
 * @type {*|{}|Model}
 */
CULINARIA.Model.PersonaTipo = CULINARIA.Sequelize.define('PersonaTipo', {
    nombre: {
        type: CULINARIA.Lib.Sequelize.STRING(25),
        allowNull: false,
        unique: true
    },
    descripcion: {
        type: CULINARIA.Lib.Sequelize.STRING
    }
},{
    tableName: 'persona_tipo',
    underscored: true
});