const Sequelize   = require('sequelize'),
      sequelize   = require('./index');

const Album = sequelize.define("Album", {
    AlbumId: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      
      associate: (model) => {
        Album.hasMany(model.Artist, {
          foreignKey: 'ArtistId'
        });
      }
    },
    // Name: Sequelize.STRING,
    ArtistId: Sequelize.INTEGER,
    Title: Sequelize.STRING
  },
  {
    freezeTableName: true,
    timestamps: false
  }
);

// Album.Artist = Album.belongsTo(Artist);
// User.Addresses = User.hasMany(Address);

module.exports = Album;
