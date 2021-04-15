const mongoose = require('mongoose');


let movieSchema = mongoose.Schema({
    Title: {type: String, required: true},
    Description: {type: String, required: true},
    Genre: Number,
    Director: Number,
    ImagePath: String,
    Featured: Boolean
});


let userSchema = mongoose.Schema({
    Username: {type: String, required: true},
    Password: {type: String, required: true},
    Email: {type: String, required: true},
    Birthday: Date,
    FavoriteMovies: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Movie' }]
  });


let directorSchema = mongoose.Schema({
    Name: {type: String, required: true},
    Bio: {type: String, required: true},
    Birthday: {type: String, required: true},
    Deathdate: String

});

let genreSchema = mongoose.Schema({
    Name: {type: String, required: true},
    Description: {type: String, required: true},
});



//export models in order to then import them into index.js
let Movie = mongoose.model('Movie', movieSchema);
let Director = mongoose.model('Director', directorSchema);
let Genre = mongoose.model('Genre', genreSchema);
let User = mongoose.model('User', userSchema);

//exposrt the modules
module.exports.Movie = Movie;
module.exports.Director = Director;
module.exports.Genre = Genre;
module.exports.User = User;