const mongoose = require('mongoose');

//connect to mongodb
mongoose.connect('mongodb://localhost/testaroo');

mongoose.connection.once('open', function(){
    console.log('connection has been made now make fireworks')
}).on('error', function(error){
    console.log(error);
});