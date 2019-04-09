/**
 * Model Matricula
 * @type {*|{}|Model}
 */
CULINARIA.Model.Matricula = CULINARIA.Sequelize.define('Matricula', {
    folio: {
        type: CULINARIA.Lib.Sequelize.INTEGER
    },
    tomo: {
        type: CULINARIA.Lib.Sequelize.INTEGER
    },
    talonario: {
        type: CULINARIA.Lib.Sequelize.INTEGER
    },
    observaciones: {
        type: CULINARIA.Lib.Sequelize.STRING(128)
    },
    evaluacion: {
        type: CULINARIA.Lib.Sequelize.INTEGER
    }
},{
    tableName: 'matricula',
    underscored: true
});

CULINARIA.Model.Matricula.belongsTo(CULINARIA.Model.Curso);
CULINARIA.Model.Matricula.belongsTo(CULINARIA.Model.Persona);

CULINARIA.Model.Curso.hasMany(CULINARIA.Model.Matricula, { onUpdate: 'cascade', onDelete: 'cascade' });
CULINARIA.Model.Persona.hasMany(CULINARIA.Model.Matricula, { onUpdate: 'cascade', onDelete: 'cascade' });
