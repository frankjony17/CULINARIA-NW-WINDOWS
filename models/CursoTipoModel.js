/**
 * Model CursoTipo.
 * @type {*|{}|Model}
 */
CULINARIA.Model.CursoTipo = CULINARIA.Sequelize.define('CursoTipo', {
    nombre: {
        type: CULINARIA.Lib.Sequelize.STRING(25),
        allowNull: false,
        unique: true
    },
    descripcion: {
        type: CULINARIA.Lib.Sequelize.STRING
    }
},{
    tableName: 'curso_tipo',
    underscored: true
});