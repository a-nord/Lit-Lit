const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Posts extends Model {}

Posts.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    books_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Books',
        key: 'id',
      },
    },
    text: {
        type: DataTypes.TEXT,
        allowNull: false,
    },
},
{
  sequelize,
  freezeTableName: true,
  underscored: true,
  modelName: 'Posts',
}
)

module.exports = Posts;