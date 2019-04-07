var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    console.log('indexPage');
  res.render('index', { title: 'Express' });
});

/*get about us page*/

router.get('/about', function(req, res, next) {
res.render('aboutUs');
});

/*router.get('/reg', function(req, res, next) {
res.render('register');
});
*/
module.exports = router;
