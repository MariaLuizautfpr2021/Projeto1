var express = require('express');
var router = express.Router();
var { expressjwt: jwt } = require("express-jwt");
require("dotenv").config();
var movieController = require('../controllers/movieController.js');
const multer = require("multer");
const uploadConfig = require("../multer_config/upload");
const upload = multer(uploadConfig.upload("./uploads/images"));

router.get('/', jwt({ secret: process.env.SECRET, algorithms: ["HS256"] }), async function (req, res, next) {
    var searchValue = req.query.search_value;
    if (searchValue) {
        var movies = await movieController.searchMovies(searchValue);
        return res.send(movies);
    }
    
    var movies = await movieController.getMovies();
    return res.send(movies);
});

router.post('/', jwt({ secret: process.env.SECRET, algorithms: ["HS256"] }), async function (req, res, next) {
    var response = await movieController.createMovie(req.body);

    if (response == null) {
        return res.status(400).send("Erro ao criar filme!");
    }
    return res.status(201).send(response);
});

router.patch("/:id/image", jwt({ secret: process.env.SECRET, algorithms: ["HS256"] }), upload.single("image"), async (req, res) => {

    const { id } = req.params;
    const { file } = req;
    const imageUrl = file.filename;

    if (!file) {
        return res.status(400).send("Erro ao atualizar imagem!");
    }

    const response = await movieController.createImage(id, imageUrl);
    return res.status(200).send(response);

});

module.exports = router;