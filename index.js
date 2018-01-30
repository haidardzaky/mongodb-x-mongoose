var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test');
var Schema = mongoose.Schema;


var memberSchema = new Schema({
  name: String,
  address: String,
  truck: Boolean,
  datejoin: { type: Date, default: Date.now }
});

var member = mongoose.model('member', memberSchema);


//const cat = mongoose.model('cat', {name: String});

//const kitty = new cat({name:"Zildjian"});
//kitty.save().then(() => console.log('meow'));
