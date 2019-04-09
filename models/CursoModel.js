/**
 * Model Curso
 * @type {*|{}|Model}
 */
CULINARIA.Model.Curso = CULINARIA.Sequelize.define('Curso', {
    fechaInicial: {
        type: CULINARIA.Lib.Sequelize.STRING(15),
        field: 'fecha_inicial'
    },
    fechaFinal: {
        type: CULINARIA.Lib.Sequelize.STRING(15),
        field: 'fecha_final'
    }
},{
    tableName: 'curso',
    underscored: true
});

CULINARIA.Model.Curso.belongsTo(CULINARIA.Model.Costo);
CULINARIA.Model.Curso.belongsTo(CULINARIA.Model.Semestre);
CULINARIA.Model.Curso.belongsTo(CULINARIA.Model.CursoTipo);
CULINARIA.Model.Curso.belongsTo(CULINARIA.Model.Especialidad);

CULINARIA.Model.Costo.hasMany(CULINARIA.Model.Curso, { onUpdate: 'cascade', onDelete: 'cascade' });
CULINARIA.Model.Semestre.hasMany(CULINARIA.Model.Curso, { onUpdate: 'cascade', onDelete: 'cascade' });
CULINARIA.Model.CursoTipo.hasMany(CULINARIA.Model.Curso, { onUpdate: 'cascade', onDelete: 'cascade' });
CULINARIA.Model.Especialidad.hasMany(CULINARIA.Model.Curso, { onUpdate: 'cascade', onDelete: 'cascade' });
