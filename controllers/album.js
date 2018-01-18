const Sequelize   = require('sequelize'),
      // Op          = Sequelize.Op,
      Artist      = require('../models/artist'),
      Album       = require('../models/album');
      
      // Artist.belongsTo(Album, {targetKey:'ArtistId',foreignKey: 'ArtistId'});

// Album.Artist = Album.belongsTo(Artist);
Album.Artist = Album.hasMany(Artist);


const getAll = (req, res) => {
  Album.findAll().then(albums => {
    res.json(albums);
  });
}

module.exports = {getAll};