const express = require('express');
const routes = express.Router();

const LoginController = require('./controllers/LoginController');

// Rotas
// routes.get('/login/:id&:login&:senha', LoginController.auth);

routes.post('/createUser', LoginController.create);

routes.get('/show', LoginController.show);

routes.get ('/auth/:id/:login/:senha', LoginController.auth);


module.exports = routes;