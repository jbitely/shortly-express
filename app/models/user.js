//
var db = require('../config');
var bcrypt = require('bcrypt-nodejs');
var Promise = require('bluebird');

var User = db.Model.extend({
  tableName: 'users',
  password: '',
  initialize: function(){
    this.on('creating', function(model, attrs, op){
      bcrypt.hash(model.get('password'), null, null, function(err, hash){
        model.set('password', hash);

        console.log('model is ' + model.password);
        console.log('hash is ' + hash);
      });
    })
  },
});

module.exports = User;
