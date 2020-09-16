var usersRepo = require('../data/users');

exports.getUserDetails = function (req, res) {
    console.log("\nUser Service Contacted...");
    try {
        if(!req) {
            return res.status(400).end();
        }   
        console.log("Service Request Id : " + req);
        usersRepo.getUserDetails(req, function (err, result) {            
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
        console.log("getUserDetails Over and out..");
    }
};

exports.getUserDetailsById = function (req, res) {
    console.log("\nUser Service Contacted...");
    try {
        if(!req.body.id) {
            return res.status(400).end();
        }        
        console.log("Service Request Id : " + req.body.id);
        usersRepo.getUserDetailsById (req.body.id, function (err, result) {
            //console.log("Request returned some value. Res : " + res + " Result : " + result);
            if(err) {
                console.log("Error: 500, returned " + err);
                return res.status(500).end();                
            }
            if(!result) {
                console.log("Error: 404, returned " + result);
                return res.status(404).end();                
            }          
            console.log("Status: Success | Status Code: 200 | " + result);   
            return res.status(200).set('Content-Type', 'application/json').send(result).end();      
        });
    }
    catch(err) {
        console.log("Error 500 - Caught an exception - " + err);
        return res.status(500).end();
    }
    finally {
        console.log("getUserDetailsById Over and out..");
    }
};

exports.addUserDetails = function (req, res) {
    console.log("\nUser Service Contacted...");  
    try {
        if(typeof req.body.user_name == 'undefined' || typeof req.body.user_pass == 'undefined' || typeof req.body.user_team_uuid == 'undefined') {
            return res.status(400).end();
        }   
        console.log("Service Request Username : " + req.body.user_name + " User Team UUID# : " + req.body.user_team_uuid);

        usersRepo.addUserDetails(req, function (err, result) {            
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
        console.log("users Over and out..");
    }
};

exports.deleteUserDetails = function (req, res) {
    console.log("\nUser Service Contacted...");  
    try {
        if(typeof req.body.userid == 'undefined' || typeof req.body.uid == 'undefined' || typeof req.body.upass == 'undefined') {
            return res.status(400).end();
        }   
        console.log("Service Request User Id : " + req.body.userid + " User UID : " + req.body.uid);

        usersRepo.deleteUserDetails(req, function (err, result) {            
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
        console.log("users Over and out..");
    }
};

exports.updateUserDetails = function (req, res) {
    console.log("\nUser Service Contacted...");  
    try {
        if(typeof req.body.userid == 'undefined' || typeof req.body.username == 'undefined' || typeof req.body.phoneno == 'undefined' || typeof req.body.firstname == 'undefined' || typeof req.body.lastname == 'undefined' || typeof req.body.email == 'undefined' || typeof req.body.userpass == 'undefined' || typeof req.body.usertype == 'undefined') {
            return res.status(400).end();
        }   
        console.log("Service Request User Id : " + req.body.userid +" Username : " + req.body.username + " Phone# : " + req.body.phoneno + " Firstname : " + req.body.firstname + " Lastname : " + req.body.lastname + " Email Id : " + req.body.email + " User Type : " + req.body.usertype);

        usersRepo.updateUserDetails(req, function (err, result) {            
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
        console.log("users Over and out..");
    }
};

exports.verifyUser = function (req, res) {
    console.log("\nUser Service Contacted...");  
    try {
        if(typeof req.body.user_team_uuid == 'undefined' || typeof req.body.user_pass == 'undefined') {
            return res.status(400).end();
        }   
        console.log("Service Request User Id : " + req.body.user_team_uuid);

        usersRepo.verifyUser(req, function (err, result) {            
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
        console.log("users Over and out..");
    }
};

exports.getTotalScore = function (req, res) {
    console.log("\nUser Service Contacted...");  
    try {
        if(typeof req.body.user_team_uuid == 'undefined') {
            return res.status(400).end();
        }   
        console.log("Service Request User Id : " + req.body.user_team_uuid);

        usersRepo.getTotalScore(req, function (err, result) {            
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
        console.log("users Over and out..");
    }
};

exports.saveCurrentTimeSnapshot = function (req, res) {
    console.log("\nUser Service Contacted...");  
    try {
        if(typeof req.body.user_team_uuid == 'undefined') {
            return res.status(400).end();
        }   
        console.log("Service Request User Id : " + req.body.user_team_uuid + " " + req.body.user_time_snapshot);

        usersRepo.saveCurrentTimeSnapshot(req, function (err, result) {            
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
        console.log("users Over and out..");
    }
};

exports.getCurrentTimeSnapshot = function (req, res) {
    console.log("\nUser Service Contacted...");  
    try {
        if(typeof req.body.user_team_uuid == 'undefined') {
            return res.status(400).end();
        }   
        console.log("Service Request User Id : " + req.body.user_team_uuid);

        usersRepo.getCurrentTimeSnapshot(req, function (err, result) {            
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
        console.log("users Over and out..");
    }
};

// exports.getUserDetailsByUserType = function (req, res) {
//     console.log("\nUser Service Contacted...");  
//     try {
//         if(typeof req.body.usertype == 'undefined') {
//             return res.status(400).end();
//         }   
//         console.log("Service Request User Type : " + req.body.usertype);

//         usersRepo.getUserDetailsByUserType(req, function (err, result) {            
//             if(err) {
//                 console.log("Error: 500, returned " + err);
//                 return res.status(500).end();                
//             }
//             if(!result) {
//                 console.log("Error: 404, returned " + result);
//                 return res.status(404).end();
//             }
//             if(result) {
//                 console.log("Status: Success | Status Code: 200 | " + result);
//                 return res.status(200).set('Content-Type', 'application/json').send(result).end();
//             }
//         });
//     }
//     catch(err) {
//         console.log("Error 500 - Caught an exception - " + err);
//         return res.status(500).end();
//     }
//     finally {    
//         console.log("users Over and out..");
//     }
// };