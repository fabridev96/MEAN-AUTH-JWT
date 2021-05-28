const { Schema, model } = require('mongoose');

const usuarioSchema = new Schema({
    email: String,
    pass: String
}, {
    timestamps: true
});

module.exports = model('Usuario', usuarioSchema);