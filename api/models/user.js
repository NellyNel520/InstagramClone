'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
	class User extends Model {
	
		static associate(models) {
			User.hasMany(models.Post,{
        foreignKey:'userId',
      })
      User.hasMany(models.Comment,{
        foreignKey:'userId',
        as: 'owner'
      })
		}
	}
	User.init(
		{
			username: {
				type: DataTypes.STRING,
				allowNull: false,
			},
			fullName: {
				type: DataTypes.STRING,
				allowNull: false,
			},
			email: {
				type: DataTypes.STRING,
				allowNull: false,
			},
			passwordDigest: {
				type: DataTypes.STRING,
				allowNull: false,
			},
			birthDate: {
				type: DataTypes.DATE,
				allowNull: false,
			},
			profilePic: {
				type: DataTypes.STRING,
				allowNull: true,
			},
			city: {
				type: DataTypes.STRING,
			},
			state: {
				type: DataTypes.STRING,
			},
			country: {
				type: DataTypes.STRING,
			},
			bio: {
				type: DataTypes.TEXT,
			},
		},
		{
			sequelize,
			modelName: 'User',
			tableName: 'users',
		}
	)
	return User
}
