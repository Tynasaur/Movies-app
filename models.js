const mongoose = require('mongoose');
const bcrypt = require('bcrypt'); //to hash passwords

let movieSchema = mongoose.Schema({
    Title: {type: String, required: true},
    Description: {type: String, required: true},
    Genre: { type: mongoose.Schema.Types.ObjectId, ref: 'Genre' }, 
    Director: { type: mongoose.Schema.Types.ObjectId, ref: 'Director' }, //populate
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

userSchema.statics.hashPassword = (password) => {
    return bcrypt.hashSync(password, 10);
};

userSchema.methods.validatePassword = function(password) {
    return bcrypt.compareSync(password, this.Password);
};


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

//export the modules
module.exports.Movie = Movie;
module.exports.Director = Director;
module.exports.Genre = Genre;
module.exports.User = User;