var awsRepo = require('../data/aws');

exports.getAwsStatus = function (req, res) {
    console.log("\nAWS Service Contacted...");
    try {
        if(!req) {
            return res.status(400).end();
        }   
        console.log("Service Request Id : " + req);
        awsRepo.getAwsStatus(req, function (err, result) {            
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
        console.log("aws Over and out..");
    }
};

exports.checkInstanceId = function (req, res) {
    console.log("\nAWS Service Contacted...");  
    try {        
        if(!req.body.instanceId) {
            return res.status(400).end();
        }   
        console.log("Service Request Instance Id : " + req.body.instanceId);
        awsRepo.checkInstanceId(req, function (err, result) {            
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
        console.log("aws Over and out..");
    }
};

exports.checkPublicIp = function (req, res) {
    console.log("\nAWS Service Contacted...");  
    try {
        if(!req.body.user_id || !req.body.user_pass) {
            return res.status(400).end();
        }   
        console.log("Service Request User Id : " + req.body.user_id + " Password : " + req.body.user_pass);
        awsRepo.checkPublicIp(req, function (err, result) {            
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
        console.log("aws Over and out..");
    }
};

exports.checkVolumeId = function (req, res) {
    console.log("\nAWS Service Contacted...");  
    try {
        if(!req.body.user_id || !req.body.user_pass) {
            return res.status(400).end();
        }   
        console.log("Service Request User Id : " + req.body.user_id + " Password : " + req.body.user_pass);
        awsRepo.checkVolumeId(req, function (err, result) {            
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
        console.log("aws Over and out..");
    }
};

exports.checkS3BucketName = function (req, res) {
    console.log("\nAWS Service Contacted...");  
    try {
        if(!req.body.user_id || !req.body.user_pass) {
            return res.status(400).end();
        }   
        console.log("Service Request User Id : " + req.body.user_id + " Password : " + req.body.user_pass);
        awsRepo.checkS3BucketName(req, function (err, result) {            
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
        console.log("aws Over and out..");
    }
};

exports.checkIamUser = function (req, res) {
    console.log("\nAWS Service Contacted...");  
    try {
        if(!req.body.user_id || !req.body.user_pass) {
            return res.status(400).end();
        }   
        console.log("Service Request User Id : " + req.body.user_id + " Password : " + req.body.user_pass);
        awsRepo.checkIamUser(req, function (err, result) {            
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
        console.log("aws Over and out..");
    }
};

exports.checkIamUserPassword = function (req, res) {
    console.log("\nAWS Service Contacted...");  
    try {
        if(!req.body.user_id || !req.body.user_pass) {
            return res.status(400).end();
        }   
        console.log("Service Request User Id : " + req.body.user_id + " Password : " + req.body.user_pass);
        awsRepo.checkIamUserPassword(req, function (err, result) {            
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
        console.log("aws Over and out..");
    }
};

exports.checkIamRole = function (req, res) {
    console.log("\nAWS Service Contacted...");  
    try {
        if(!req.body.user_id || !req.body.user_pass) {
            return res.status(400).end();
        }   
        console.log("Service Request User Id : " + req.body.user_id + " Password : " + req.body.user_pass);
        awsRepo.checkIamRole(req, function (err, result) {            
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
        console.log("aws Over and out..");
    }
};

exports.checkIamInstanceProfile = function (req, res) {
    console.log("\nAWS Service Contacted...");  
    try {
        if(!req.body.user_id || !req.body.user_pass) {
            return res.status(400).end();
        }   
        console.log("Service Request User Id : " + req.body.user_id + " Password : " + req.body.user_pass);
        awsRepo.checkIamInstanceProfile(req, function (err, result) {            
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
        console.log("aws Over and out..");
    }
};

exports.checkIamPolicy = function (req, res) {
    console.log("\nAWS Service Contacted...");  
    try {
        if(!req.body.user_id || !req.body.user_pass) {
            return res.status(400).end();
        }   
        console.log("Service Request User Id : " + req.body.user_id + " Password : " + req.body.user_pass);
        awsRepo.checkIamPolicy(req, function (err, result) {            
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
        console.log("aws Over and out..");
    }
};

exports.checkSshSg = function (req, res) {
    console.log("\nAWS Service Contacted...");  
    try {
        if(!req.body.user_id || !req.body.user_pass) {
            return res.status(400).end();
        }   
        console.log("Service Request User Id : " + req.body.user_id + " Password : " + req.body.user_pass);
        awsRepo.checkSshSg(req, function (err, result) {            
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
        console.log("aws Over and out..");
    }
};