'use strict';
const { 
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Comments extends Model {
    
    static associate(models) {
      Comment.belongsTo(models.User,{
        foreignKey:'userId',
      })
      Comment.belongsTo(models.Post,{
        foreignKey:'postId',
      })
    }
  }
  Comments.init({
    content: DataTypes.TEXT,
    userId: {
      type:DataTypes.INTEGER,
      allowNull: false,
      field: 'userId',
      onDelete:'CASCADE',
      references:{
        model:'users',
        key:'id'
      }
    },
    postId: {
      type:DataTypes.INTEGER,
      allowNull:false,
      onDelete:'CASCADE',
      references:{
        model:'posts',
        key:'id'
      }
     },
    likeCount: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Comments',
  });
  return Comments;
};