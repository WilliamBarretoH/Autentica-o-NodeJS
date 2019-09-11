const mongoose = require('mongoose');


const LoginSchema = new mongoose.Schema({
    login:{
        type: String,
        required: true
    },
    senha:{
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now()
    },
});

mongoose.model('Login', LoginSchema);