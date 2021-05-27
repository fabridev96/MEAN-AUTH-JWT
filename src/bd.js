const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/angular-auth', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(db => console.log('Base de datos conectada'))
.catch(err => console.log(err));

