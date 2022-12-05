var Movie = require('../models/movie');

exports.getMovies = async function () {
    try {
        return await Movie.find();

    } catch (err) {
        console.log(err);
    }
}

exports.createMovie = async function (movie) {
    try {
        var validation;
            
        if (validation) {
            return validation;
        }

        return await Movie.create(movie);
    }
    catch (err) {
        console.log(err);
        return null;
    }
};