const express = require('express'),
morgan = require('morgan'),
uuid = require('uuid');

const app = express();

app.use(morgan('common'));

let topMovies = [
  {
    'title': 'Howl\'s Moving Castle',
    'director': 'Hayo Miyazaki',
    'genre': 'animation',
    'description': '...1',
    'img': 'www.image.com'
  },
  {
    'title': 'The Fifth Element',
    'director': 'Luc Besson',
    'genre': 'sci-fi',
    'description': '...2',
    'img': 'www.image.com'
  },
  {
    'title': 'Galaxy Quest',
    'director': 'Dean Parisot',
    'genre': 'sci-fi, comedy',
    'description': '...3',
    'img': 'www.image.com'
  },
  {
    'title': 'Star Wars: Return of the Jedi',
    'director': 'Richard Marquand',
    'genre': 'sci-fi',
    'description': '...4',
    'img': 'www.image.com'
  },
  {
    'title': 'Inglorious Basterds',
    'director': 'Quentin Tarantino',
    'genre': 'drama',
    'description': '...5',
    'img': 'www.image.com'
  },  
  {
    'title': 'Aliens',
    'director': 'Ridley Scott',
    'genre': 'sci-fi',
    'description': '...6',
    'img': 'www.image.com'
  },
  {
    'title': 'Heathers',
    'director': 'Michael Lehman',
    'genre': 'dark comedy',
    'description':'...7',
    'img': 'www.image.com'
  },  
  {
    'title': 'Interstellar',
    'director': 'Chistopher Nolan',
    'genre': 'dark comedy',
    'description':'...8',
    'img': 'www.image.com'
  },
  {
    'title': 'Kill Bill',
    'director': 'Quentin Tarantino',
    'genre': 'action',
    'description':'...9',
    'img': 'www.image.com'
  },  
  {
    'title': 'Gone With the Wind',
    'director': 'Victor Fleming',
    'genre': 'drama',
    'description':'...10',
    'img': 'www.image.com'
  }
];

// GET requests
app.get('/', (req, res) => {
  res.send('Welcome to my movie club!');
});

app.use(express.static('public'));


// GETs request movies
app.get('/movies', (req, res) => {
  res.send('Succesful GET request returning list of all movies');
});

app.get('/movies/:title', (req, res) => {
  res.send('Successful GET request returning description');
});

app.get('/movies/:title/genre', (req, res) => {
  res.send('Successful GET request returning genre');
});

app.get('/movies/:title/director', (req, res) => {
  res.send('Successful GET request returning director\'s name');
});

//POST request to add new users
app.post('/users', (req, res) =>{
  res.send('Succesful POST request new user was added');
}); 

//PUT request for users to update their username
app.put('/users', (req, res) => {
  res.send('Successful PUT request username updated');
});

//POST requests adds movie to favorites list
app.post('/movies', (req, res) =>{
  res.send('Successful POST request favorites list created');
});


//DELETE request to remove movies followed by user
app.delete('/movies', (req, res) => {
  res.send('Successful DELETE request movie was removed from favorites list')
});

app.delete('/users', (req, res) =>{
  res.send('Successful DELETE request user has been removed');
});




app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('what did you do now?');
});

// listen for requests
app.listen(8080, () => {
  console.log('Your app is listening on port 8080.');
});



// let newUser = req.body;
// if (!newUSer.username) {
//   const message = 'Missing username';
//   res.status(400).send(message);
// } else {
//   newUser = uuid.v4();
//   users.push(newUser);
//   res.status(201).send(newUser);
//   }
// });