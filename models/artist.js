const Sequelize   = require('sequelize'),
      sequelize   = require('./index');

const Artist = sequelize.define("Artist", {
    ArtistId: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      // set relationship (hasOne) with `Series`
      associate: (model) => {
        Artist.hasMany(model.Album, {
          foreignKey: 'ArtistId'
        });
      }
    },
    Name: Sequelize.STRING,
    
  },
  {
    freezeTableName: true,
    timestamps: false
  }
);

module.exports = Artist;
