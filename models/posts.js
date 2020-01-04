'use strict';
module.exports = (sequelize, DataTypes) => {
  const posts = sequelize.define('post', {
    title: DataTypes.STRING,

  }, {});
  
  return posts;
};