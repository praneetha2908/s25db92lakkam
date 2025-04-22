var bicycles = require('../models/bicycles');
// List of all Costumes
//exports.bicycles_list = function(req, res) {
//res.send('NOT IMPLEMENTED: bicycles list');
//};
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
// exports.bicycles_detail = function (req, res) {
//     res.send('NOT IMPLEMENTED: bicycles detail: ' + req.params.id);
// };
// Handle Costume create on POST.
//exports.bicycles_create_post = function(req, res) {
//res.send('NOT IMPLEMENTED: bicycles create POST');
//};
//Handle Costume create on POST.
exports.bicycles_create_post = async function (req, res) {
    console.log(req.body)
    let document = new bicycles();
    // We are looking for a body, since POST does not have query parameters.
    // Even though bodies can be in many different formats, we will be picky
    // and require that it be a json object
    // {"costume_price":"goat", "cost":12, "size":"large"}
    document.brand = req.body.brand;
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

// Handle Costume update form on PUT.
exports.bicycles_update_put = async function (req, res) {
    console.log(`update on id ${req.params.id} with body
${JSON.stringify(req.body)}`)
    try {
        let toUpdate = await bicycles.findById(req.params.id)
        // Do updates of properties
        if (req.body.brand)
            toUpdate.brand = req.body.brand;
        if (req.body.type) toUpdate.type = req.body.type;
        if (req.body.price) toUpdate.price = req.body.price;
        // if (req.body.checkboxsale) toUpdate.sale = true;
        // else toUpdate.same = false;
        let result = await toUpdate.save();
        console.log("Sucess " + result)
        res.send(result)
    } catch (err) {
        res.status(500)
        res.send(`{"error": ${err}: Update for id ${req.params.id}
failed`);
    }
};

// for a specific Costume.
exports.bicycles_detail = async function (req, res) {
    console.log("detail" + req.params.id)
    try {
        result = await bicycles.findById(req.params.id)
        res.send(result)
    } catch (error) {
        res.status(500)
        res.send(`{"error": document for id ${req.params.id} not found`);
    }
};
// Handle Costume delete on DELETE.

exports.bicycles_delete = async function (req, res) {
    console.log("delete test" + req.params.id)
    try {
        result = await bicycles.findByIdAndDelete(req.params.id)
        console.log("Removed " + result)
        res.send(result)
    } catch (err) {
        res.status(500)
        res.send(`{"error": Error deleting ${err}}`);
    }
};

// Handle a show one view with id specified by query
exports.bicycles_view_one_Page = async function (req, res) {
    console.log("single view for id " + req.query.id)
    try {
        result = await bicycles.findById(req.query.id)
        res.render('bicyclesdetail',
            { title: 'bicycles Detail', toShow: result });
    }
    catch (err) {
        res.status(500)
        res.send(`{'error': '${err}'}`);
    }
};

// Handle building the view for creating a costume.
// No body, no in path parameter, no query.
// Does not need to be async
exports.bicycles_create_Page = function (req, res) {
    console.log("create view")
    try {
        res.render('bicyclescreate', { title: 'bicycles Create' });
    }
    catch (err) {
        res.status(500)
        res.send(`{'error': '${err}'}`);
    }
};


// Handle building the view for updating a costume.
// query provides the id
exports.bicycles_update_Page = async function (req, res) {
    console.log("update view for item " + req.query.id)
    try {
        let result = await bicycles.findById(req.query.id)
        res.render('bicyclesupdate', { title: 'bicycles Update', toShow: result });
    }
    catch (err) {
        res.status(500)
        res.send(`{'error': '${err}'}`);
    }
};

// Handle a delete one view with id from query
exports.bicycles_delete_Page = async function (req, res) {
    console.log("Delete view for id " + req.query.id)
    try {
        result = await bicycles.findById(req.query.id)
        res.render('bicyclesdelete', {
            title: 'bicycles Delete Test', toShow:
                result
        });
    }
    catch (err) {
        res.status(500)
        res.send(`{'error': '${err}'}`);
    }
};


// Handle Costume delete from on DELETE.
//exports.bicycles_delete = function (req, res) {
//    res.send('NOT IMPLEMENTED: bicycles delete DELETE ' + req.params.id);
//};
// Handle Costume update form on PUT.
// exports.bicycles_update_put = function (req, res) {
//     res.send('NOT IMPLEMENTED: bicycles update PUT' + req.params.id);
// };
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