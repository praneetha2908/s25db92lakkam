var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  let bicycles = [
    { brand: 'Trek', type: 'Mountain', price: 500 },
    { brand: 'Cannondale', type: 'Road', price: 800 },
    { brand: 'Specialized', type: 'Hybrid', price: 700 }
  ];
  res.render('bicycles', { title: "Search Results - Bicycles", bicycles });
});

module.exports = router;
