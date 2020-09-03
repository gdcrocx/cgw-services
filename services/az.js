var azRepo = require('../data/az');

exports.getAzStatus = function (req, res) {
    console.log("\nAz Service Contacted...");
    try {
        if(!req) {
            return res.status(400).end();
        }   
        console.log("Service Request Id : " + req);
        azRepo.getAzStatus(req, function (err, result) {            
            if(err) {
                console.log("Error: 500, returned " + err);
                return res.status(500).end();                
            }
            if(!result) {
                console.log("Error: 404, returned " + result);
                return res.status(404).end();                
            }
            if(result) {
                console.log("Status: Success | Status Code: 200 | " + result);
                return res.status(200).set('Content-Type', 'application/json').send(result).end();
            }
        });
    }
    catch(err) {
        console.log("Error 500 - Caught an exception - " + err);
        return res.status(500).end();
    }
    finally {
        console.log("az Over and out..");
    }
};