const Sequelize   = require('sequelize'),
      Op          = Sequelize.Op,
      Artist      = require('../models/artist');

const getAll = (req, res) => {
  Artist.findAll({}).then( artists => {
    res.render('artist', {artists});
  });
};

const getOne = (req, res) => {
  Artist.find({
    where: {ArtistId: req.params.id}
  }).then( artist => {
    res.render('artist', {artists: artist});
  });
}

module.exports = {
  getAll,
  getOne
};