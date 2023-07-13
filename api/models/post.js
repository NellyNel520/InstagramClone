'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Post extends Model {
   
    static associate(models) {
      Post.belongsTo(models.User,{
        foreignKey:'userId',

      })
      Post.hasMany(models.Comment,{
        foreignKey:'postId',
      })
    }
  }
  Post.init({
    userId: DataTypes.INTEGER,
    caption: DataTypes.STRING,
    likeCount: DataTypes.INTEGER,
    image: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Post',
    tableName: 'posts',
  });
  return Post;
};