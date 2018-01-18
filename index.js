// const Sequelize   = require('sequelize'),
//       sequelize   = require('./models');


/*
app.get('/', (req, res) => {
  Artist.find({ where: { ArtistId: 75 } }).then(artists => {
    console.log(JSON.stringify(artists));
  });
  res.send('It works');
});

app.post('/artist', (req, res) => {
  console.log(req.body.name);
  Artist.create({
    Name: req.body.name
  });
  res.redirect('/artist');
});
*/

// Start our app!
const app = require('./app');
app.set('port', process.env.PORT || 7777);
const server = app.listen(app.get('port'), () => {
  console.log(`Express running → PORT ${server.address().port}`);
});