var express = require('express');
var router = express.Router();
var userController = require('../controllers/userController.js');

router.get('/', async function(req, res, next) {
  var users = await userController.getUsers();
  console.log(users)
  return res.send(users);
});

router.post('/', async function(req, res, next) {
  var response = await userController.createUser(req.body);
  if (response == "O email informado já existe!") {
    return res.status(400).send(response);
  }
  return res.send(response);
});


module.exports = router;
