
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var OrganisationSchema = new mongoose.Schema({
  name: String,
  description : String,
  address : String,
  city : String,
  state : String,
  country : String,
  zipcode : String,
  contact_number : Number,
  email : String,
  password : String,
  _kids: [{type: mongoose.Schema.ObjectId, ref: 'Kids'}],
  created: {type: Date, default: Date.now }
 
});

mongoose.model('Organisation', OrganisationSchema);


