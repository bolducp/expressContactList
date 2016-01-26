var express = require('express');
var router = express.Router();

var fs = require('fs');

/* GET users listing. */
router.get('/', function(req, res, next) {
  fs.readFile('./contacts.json', function(err, data){
    if (err) return res.status(400).send(err);
    var contactArr = JSON.parse(data);
    res.render('contacts', {contactArr : contactArr});
  });
});


router.get('/addContactForm', function(req, res, next) {
    res.render('addContactForm');
  });


router.post('/add', function(req, res, next){
    fs.readFile('./contacts.json', function(err, data){
      if (err) return res.status(400).send(err);

      var contactArr = JSON.parse(data);
      var newContact = req.body;
      contactArr.push(newContact);

      fs.writeFile('./contacts.json', JSON.stringify(contactArr), function(err){
        if (err) return res.status(400).send(err);
        res.send();
      });
    });
});


module.exports = router;
