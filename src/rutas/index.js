const { Router } = require('express');
const router = Router();

const Usuario = require('../modelos/Usuario');

const jwt = require('jsonwebtoken');

router.get('/', (req, res) => res.send('Hola mundo dsafsaf'));

router.post('/registro', async (req, res) => {

    const { email, pass } = req.body;

    const nuevoUsuario = new Usuario({
        email: email,
        pass: pass
    });

    await nuevoUsuario.save();

    const token = jwt.sign({ _id: nuevoUsuario._id }, 'llaveSecreta');

    return res.status(200).json({token});

});

router.post('/ingresar', async (req, res) => {

    const { email, pass } = req.body;

    const usuario = await Usuario.findOne({email});

    if(!usuario){
        return res.status(401).send('Datos incorrectos.');
    }

    if(usuario.pass !== pass) {
        return res.status(401).send('Datos incorrectos. 9');
    }

    const token = jwt.sign({_id: usuario._id}, 'llaveSecreta');

    return res.status(200).json({token});

});

module.exports = router;