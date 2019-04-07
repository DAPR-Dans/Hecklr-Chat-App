var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var bcrypt = require('bcrypt-nodejs');
require('./util');

/*variable which creates new shema and stores username,password, id values  and creates string acces token */
var usersSchema = new Schema({
    user_name: {type: String},
    password: String,
    fb_id: { type: String, default: null },
    access_token: String
});

 
/*function to generate hash*/
usersSchema.methods.generateHash = function(password) {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(8));
};

/*function to check if password is valid*/
usersSchema.methods.validPassword = function(password) {
    return bcrypt.compareSync(password, this.password);
};

module.exports = mongoose.model('User', usersSchema);

