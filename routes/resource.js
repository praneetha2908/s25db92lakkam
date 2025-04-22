var express = require('express');
var router = express.Router();
// Require controller modules.
var api_controller = require('../controllers/api');
var bicycles_controller = require('../controllers/bicycles');
/// API ROUTE ///
// GET resources base.
router.get('/', api_controller.api);
/// bicycles ROUTES ///
// POST request for creating a Costume.
router.post('/bicycles', bicycles_controller.bicycles_create_post);
// DELETE request to delete Costume.
router.delete('/bicycles/:id', bicycles_controller.bicycles_delete);
// PUT request to update Costume.
router.put('/bicycles/:id', bicycles_controller.bicycles_update_put);
// GET request for one Costume.
router.get('/bicycles/:id', bicycles_controller.bicycles_detail);
// GET request for list of all Costume items.
router.get('/bicycles', bicycles_controller.bicycles_list);

module.exports = router;