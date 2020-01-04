'use strict';
module.exports = (sequelize, DataTypes) => {
  const post = sequelize.define('post', {
    date: DataTypes.DATE,
    title: DataTypes.TEXT,
    body: DataTypes.TEXT,
    user_id: DataTypes.INTEGER
  }, {});
  post.associate = function(models) {
    // associations can be defined here
  };
  return post;
};