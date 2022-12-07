const mongoose = require("mongoose");

const movieSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true
    },
    genre: {
        type: String,
        required: true
    },
    imageURL: {
        type: String,
    },
});

module.exports = mongoose.model("Movie", movieSchema);