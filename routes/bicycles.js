var express = require('express');
var router = express.Router();

/* GET hybrid cars page. */
router.get('/', function(req, res, next) {
  // Define the results array in the backend
  var results = [
    { brand: "Lady Bird", type: "Normal", price: 56  },
    { brand: "Hero", type: "Medium", price: 55 },
    { brand: "Atlas", type: "Hybrid", price: 42 }
  ];
  
  // Pass the results array to the view
  res.render('bicycles', { title: 'Search Results - Bicycles', results: results });
});
//var express = require('express');
const bicycles_controllers= require('../controllers/bicycles');
var router = express.Router();
// A little function to check if we have an authorized user and continue on
//or
// redirect to login.
const secured = (req, res, next) => {
if (req.user){
return next();
}
res.redirect("/login");
}
/* GET costumes */
router.get('/', bicycles_controllers.bicycles_view_all_Page );
/* GET detail costume page */
router.get('/detail', bicycles_controllers.bicycles_view_one_Page);

/* GET create costume page */
router.get('/create', bicycles_controllers.bicycles_create_Page);

/* GET create update page */
router.get('/update', secured, bicycles_controllers.bicycles_update_Page);

/* GET delete costume page */
router.get('/delete', bicycles_controllers.bicycles_delete_Page);


// GET request for one costume.
router.get('/bicycles/:id', bicycles_controllers.bicycles_detail);
router.get('/bicycles/:id', bicycles_controllers.bicycles_update_put);
module.exports = router;


