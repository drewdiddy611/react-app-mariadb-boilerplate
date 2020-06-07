const {Model, DataTypes} = require('sequelize');

class User extends Model {
}

module.exports = sequelize => {
    const options = {
        sequelize,
        modelName: 'user',
        timestamps: false
    };

    User.init({
        id: {
            primaryKey: true,
            type: DataTypes.STRING
        },
        username: DataTypes.STRING,
        password: DataTypes.STRING,
        firstName: DataTypes.STRING,
        lastName: DataTypes.STRING,
        email: DataTypes.STRING,
        creationTimestamp: DataTypes.NUMBER,
    }, options);

    return User;
};
