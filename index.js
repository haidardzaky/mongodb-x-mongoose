const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test');

const cat = mongoose.model('cat', {name: String});

const kitty = new cat({name:"Zildjian"});
kitty.save().then(() => console.log('meow'));
