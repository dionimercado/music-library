
const 
      // express       = require('express'),
      Artist    = require('../controllers/artist')
//       albumCtrl     = require('../controllers/album')
//       // route         = express.Router()
      ;

module.exports = route => {

  // Artist CRUD
  route.get('/artist', Artist.getAll);
  route.get('/artist/:id', Artist.getOne);

  route.post('/artist', (req, res) => {
    Artist.create({
      Name: req.body.name
    });
    res.status(303).redirect('/artist');
  });

  route.put('/artist/:id', (req, res) => {
    Artist.update(
      {
        Name: req.body.name
      },
      {
        where: {
          ArtistId: req.params.id
        }
      }
    ).then( result => {
      res.redirect('/artist');
    })
  });

  route.delete('/artist/:id', (req, res) => {
    Artist.find({
      where: { ArtistId: req.params.id }
    }).then(artist => {
      artist.destroy();
      res.send({artist});
    });
  });

  route.get('/artist/delete/:id', (req, res) => {
    Artist.find({
      where: { ArtistId: req.params.id }
    }).then(artist => {
      artist.destroy();
      res.redirect('/artist');
    });
  });

  // return route;
}