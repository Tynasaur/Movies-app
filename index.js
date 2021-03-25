const express = require('express'),
morgan = require('morgan');

const app = express();

app.use(morgan('common'));

let topMovies = [
  {
    title: 'How\'s Moving Castle',
    director: 'Hayo Miyazaki'
  },
  {
    title: 'Fifth Element',
    director: 'Luc Besson'
  },
  {
    title: 'Galaxy Quest',
    director: 'Dean Parisot'
  },
  {
    title: 'Star Wars: Return of the Jedi',
    director: 'Richard Marquand'
  },
  {
    title: 'Inglorious Basterds',
    director: 'Quentin Tarantino'
  },  
  {
    title: 'Aliens',
    director: 'Ridley Scott'
  },
  {
    title: 'Heathers',
    director: 'Michael Lehman'
  },  
  {
    title: 'Interstellar',
    director: 'Chistopher Nolan'
  },
  {
    title: 'Kill Bill',
    director: 'Quentin Tarantino'
  },  {
    title: 'Gone With the Wind',
    director: 'Victor Fleming'
  }
];

// GET requests
app.get('/', (req, res) => {
  res.send('Welcome to my movie club!');
});

app.use('/documentation.html', express.static('public'));

app.get('/movies', (req, res) => {
  res.json(topMovies);
});

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('What did you do now?');
});


// listen for requests
app.listen(8080, () => {
  console.log('Your app is listening on port 8080.');
});
