var bicycles = require('../models/bicycles');
// List of all Costumes
//exports.bicycles_list = function(req, res) {
//res.send('NOT IMPLEMENTED: bicycles list');
//};
// List of all Costumes
exports.bicycles_list = async function (req, res) {
    try {
        thebicycles = await bicycles.find();
        res.send(thebicycles);
    }
    catch (err) {
        res.status(500);
        res.send(`{"error": ${err}}`);
    }
};

// for a specific Costume.
exports.bicycles_detail = function (req, res) {
    res.send('NOT IMPLEMENTED: bicycles detail: ' + req.params.id);
};
// Handle Costume create on POST.
//exports.bicycles_create_post = function (req, res) {
// res.send('NOT IMPLEMENTED: bicycles create POST');
//};
//Handle Costume create on POST.
exports.bicycles_create_post = async function (req, res) {
    console.log(req.body)
    let document = new bicycles();
    // We are looking for a body, since POST does not have query parameters.
    // Even though bodies can be in many different formats, we will be picky
    // and require that it be a json object
    // {"costume_type":"goat", "cost":12, "size":"large"}
    document.bicycles_brand = req.body.bicycles_brand;
    document.type = req.body.type;
    document.price = req.body.price;
    try {
        let result = await document.save();
        res.send(result);
    }
    catch (err) {
        res.status(500);
        res.send(`{"error": ${err}}`);
    }
};

// Handle Costume delete from on DELETE.
exports.bicycles_delete = function (req, res) {
    res.send('NOT IMPLEMENTED: bicycles delete DELETE ' + req.params.id);
};
// Handle Costume update form on PUT.
exports.bicycles_update_put = function (req, res) {
    res.send('NOT IMPLEMENTED: bicycles update PUT' + req.params.id);
};
// VIEWS
// Handle a show all view
exports.bicycles_view_all_Page = async function (req, res) {
    try {
        thebicycles = await bicycles.find();
        res.render('bicycles', { title: 'bicycles Search Results', results: thebicycles });
    }
    catch (err) {
        res.status(500);
        res.send(`{"error": ${err}}`);
    }
};

