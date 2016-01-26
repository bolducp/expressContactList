var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  fs.readFile('./contacts.json', function(err, data){
    if (err) return res.status(400).send(err);
    var contactArr = JSON.parse(data);
    res.render('contacts', {});

  });
});

router.post('/add', function(req, res, next){
    fs.readFile('./contacts.json', function(err, data){
      if (err) return res.status(400).send(err);

      var contactArr = JSON.parse(data);
      var newContact = req.body;
      contactArr.push(newContact);

      fs.writeFile('./contacts.json', JSON.stringify(contactArr), function(err){
        if (err) return res.status(400).send(err);
        res.render('contacts', {});
      });
    });
});

module.exports = router;
