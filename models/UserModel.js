/**
 * Model UserModel.
 * @type {*|{}|Model}
 */
CULINARIA.Model.User = CULINARIA.Sequelize.define('User', {
    username: {
        type: CULINARIA.Lib.Sequelize.STRING(25),
        allowNull: false,
        unique: true
    },
    password: {
        type: CULINARIA.Lib.Sequelize.STRING(120),
        allowNull: false
    },
    fullName: {
        type: CULINARIA.Lib.Sequelize.STRING(65),
        allowNull: false,
        field: 'full_name'
    }
},{
    tableName: 'user',
    underscored: true
});