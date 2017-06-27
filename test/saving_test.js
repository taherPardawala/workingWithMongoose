const mocha = require('mocha');
const assert = require('assert');
const marioChar = require('../models/mariochar')

//Describe tests
describe('Saving records', function(){
    it('saves a record to the database', function(done){
        var char = new marioChar({
            name: 'Mario'
        });

        char.save().then(function(){
            asser(char.isNew() === false);
            done();
        });
    });
});