
/*require mongoose*/
var mongoose = require('mongoose');
/*connect to mongoose*/
var connection =
mongoose.connect('mongodb://mongodb4702mr:ly1rat@danu7.it.nuigalway.ie:8717/mongodb4702', { useNewUrlParser: true });
exports.connection = connection;
