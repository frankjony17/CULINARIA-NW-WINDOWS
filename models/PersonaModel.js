/**
 * Model Persona
 * @type {*|{}|Model}
 */
CULINARIA.Model.Persona = CULINARIA.Sequelize.define('Persona', {
    nombre_apellidos: {
        type: CULINARIA.Lib.Sequelize.STRING(32),
        allowNull: false
    },
    ci: {
        type: CULINARIA.Lib.Sequelize.BIGINT(11)
    },
    telefonos: {
        type: CULINARIA.Lib.Sequelize.STRING(25)
    },
    sexo: {
        type: CULINARIA.Lib.Sequelize.STRING(4)
    },
    direccion: {
        type: CULINARIA.Lib.Sequelize.STRING
    }
},{
    tableName: 'persona',
    underscored: true
});

CULINARIA.Model.Persona.belongsTo(CULINARIA.Model.Organismo);
CULINARIA.Model.Persona.belongsTo(CULINARIA.Model.PersonaTipo);
CULINARIA.Model.Persona.belongsTo(CULINARIA.Model.NivelEscolar);

CULINARIA.Model.Organismo.hasMany(CULINARIA.Model.Persona, { onUpdate: 'cascade', onDelete: 'cascade' });
CULINARIA.Model.PersonaTipo.hasMany(CULINARIA.Model.Persona, { onUpdate: 'cascade', onDelete: 'cascade' });
CULINARIA.Model.NivelEscolar.hasMany(CULINARIA.Model.Persona, { onUpdate: 'cascade', onDelete: 'cascade' });