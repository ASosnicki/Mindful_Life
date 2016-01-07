
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var KidSchema = new mongoose.Schema({
  first_name: String,
  last_name : String,
  description : String,
  father : String,
  mother : String,
  father_occupation : String,
  mother_occupation : String,
  father_income : Number,
  mother_income : Number,
  total_income : Number,
  age : Number,
  tenth_grade_score : Number,
  twelfth_grade_score : Number,
  address : String,
  city : String,
  state : String,
  country : String,
  zipcode : Number,
  image : String,
  course : String,
  contact_number : Number,
  college_name : String,
  proposed_expense : Number,
  fees_paid : Number,
  accomodation : Boolean,
  organisations: [{type: mongoose.Schema.Types.ObjectId, ref: 'Organisations'}],
  created: {type: Date, default: Date.now }
 
});

mongoose.model('Kid', KidSchema);


