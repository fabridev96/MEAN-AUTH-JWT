const { Schema, model } = require('mongoose');

const usuarioSchema = new Schema({
    email: String,
    pass: String
});

module.exports = model('Usuario', usuarioSchema);