var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
 res.render('index', { title: 'Contact Me', description: 'This is a new demo' });
});

module.exports = router;
