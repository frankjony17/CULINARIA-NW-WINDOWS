/**
 * Model Instalacion
 * @type {*|{}|Model}
 */
CULINARIA.Model.Instalacion = CULINARIA.Sequelize.define('Instalacion', {
    nombre: {
        type: CULINARIA.Lib.Sequelize.STRING,
        allowNull: false
    },
    direccion: {
        type: CULINARIA.Lib.Sequelize.STRING
    },
    telefonos: {
        type: CULINARIA.Lib.Sequelize.STRING(25)
    },
    descripcion: {
        type: CULINARIA.Lib.Sequelize.STRING
    }
},{
    tableName: 'instalacion',
    underscored: true
});
CULINARIA.Model.Instalacion.belongsTo(CULINARIA.Model.Organismo);
CULINARIA.Model.Organismo.hasMany(CULINARIA.Model.Instalacion, { onUpdate: 'cascade', onDelete: 'cascade' });