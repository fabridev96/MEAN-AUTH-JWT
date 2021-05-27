const { Router } = require('express');
const router = Router();

const Usuario = require('../modelos/Usuario');

router.get('/', (req, res) => res.send('Hola mundo dsafsaf'));

router.post('/registro', (req, res) => {

    console.log(req.body);
    res.send('testing registro 2');

});

module.exports = router;