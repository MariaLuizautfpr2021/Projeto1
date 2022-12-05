var express = require('express');
var router = express.Router();
var { expressjwt: jwt } = require("express-jwt");
require("dotenv").config();
var movieController = require('../controllers/movieController.js');

router.get('/',  jwt({ secret: process.env.SECRET, algorithms: ["HS256"] }),async function (req, res, next) {
    var movies = await movieController.getMovies();
    console.log(movies)
    return res.send(movies);
});

router.post('/', jwt({ secret: process.env.SECRET, algorithms: ["HS256"] }), async function (req, res, next) {
    var response = await movieController.createMovie(req.body);

    if (response == null) {
        return res.status(400).send("Erro ao criar filme!");
    }
    return res.status(201).send(response);
});

module.exports = router;