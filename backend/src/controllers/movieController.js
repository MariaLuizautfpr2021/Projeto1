var Movie = require('../models/movie');

exports.getMovies = async function () {
    try {
        return await Movie.find();

    } catch (err) {
        console.log(err);
    }
}

exports.searchMovies = async function (searchValue) {
    try {
        return await Movie.find({title: new RegExp(searchValue, 'i') }).limit(20);

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

exports.createImage = async (id, imageUrl) => {
    try {
        return await Movie.findOneAndUpdate({ _id: id }, { imageURL: imageUrl }, { new: true });
    } catch (err) {
        console.log(err);
    }
};