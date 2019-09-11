const express = require('express');
const mongoose = require('mongoose');
const requireDir = require('require-dir')


// inicia a api
const app = express();
app.use(express.json()); //Permite o envio de dados formato json


//Inicia a database
mongoose.connect ('mongodb+srv://Admin_user:Admin123@nodetest-muesh.mongodb.net/User?retryWrites=true&w=majority',
 { useNewUrlParser: true })

requireDir('./src/models/');


// Rotas
app.use('/api', require('./src/routes'));



app.listen(3001);