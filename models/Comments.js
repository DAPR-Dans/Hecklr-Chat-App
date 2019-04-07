
<!--variables to require mongoose and create mongoose schema-->
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
require('./util');

<!--variable which  creates new schema and stores values as string -->
var commentSchema = new Schema({
    Comment_val: {type: String}

}); 


module.exports = mongoose.model('Comment', commentSchema);