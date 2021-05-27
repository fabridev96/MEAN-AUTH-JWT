const express = require('express');
const app = express();

require('./bd');

app.use(require('./rutas/index'));

app.listen(3000);

console.log('Servidor en el puerto:', 3000);