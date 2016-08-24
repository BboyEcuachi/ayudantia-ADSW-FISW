/**
 * Created by famancil on 17-08-16.
 */
'use strict'

module.exports = function(sequelize, DataTypes) {
    var Usuario = sequelize.define("Usuario", {
        username: DataTypes.STRING,
        password: DataTypes.STRING,
        email: DataTypes.STRING
    }, {
        classMethods: {
            associate: function(models) {
                Usuario.hasMany(models.Rol)
            }
        }
    });
    return Usuario;
};