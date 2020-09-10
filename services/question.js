var questionsRepo = require('../data/question');

exports.getAwsQuestions = function (req, res) {
    console.log("\nQuestion Service Contacted...");
    try {
        if(!req) {
            return res.status(400).end();
        }   
        console.log("Service Request Id : " + req);
        questionsRepo.getAwsQuestions(req, function (err, result) {            
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
        console.log("questions Over and out..");
    }
};

exports.getAzQuestions = function (req, res) {
    console.log("\nQuestion Service Contacted...");
    try {
        if(!req) {
            return res.status(400).end();
        }   
        console.log("Service Request Id : " + req);
        questionsRepo.getAzQuestions(req, function (err, result) {            
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
        console.log("questions Over and out..");
    }
};

exports.lockQuestion = function (req, res) {
    console.log("\nQuestion Service Contacted...");    
    try {
        console.log(req.body);
        if(!req.body.questionId || !req.body.teamUuid) {
            return res.status(400).end();
        }   
        console.log("Service Request Question Id : " + req.body.questionId + " teamUUID : " + req.body.teamUuid);
        questionsRepo.lockQuestion(req, function (err, result) {            
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
        console.log("questions Over and out..");
    }
};

exports.unlockQuestion = function (req, res) {
    console.log("\nQuestion Service Contacted...");    
    try {
        if(!req.body.questionId || !req.body.teamUuid) {
            return res.status(400).end();
        }   
        console.log("Service Request Question Id : " + req.body.questionId + " teamUUID : " + req.body.teamUuid);
        questionsRepo.unlockQuestion(req, function (err, result) {            
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
        console.log("questions Over and out..");
    }
};

exports.nextQuestion = function (req, res) {
    console.log("\nQuestion Service Contacted...");
    try {
        if(!req) {
            return res.status(400).end();
        }   
        console.log("Service Request Id : " + req);
        questionsRepo.nextQuestion(req, function (err, result) {            
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
        console.log("questions Over and out..");
    }
}

exports.getQuestionsRemainingCount = function (req, res) {
    console.log("\nQuestion Service Contacted...");
    try {
        if(!req) {
            return res.status(400).end();
        }   
        console.log("Service Request Id : " + req);
        questionsRepo.getQuestionsRemainingCount(req, function (err, result) {            
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
        console.log("questions Over and out..");
    }
}

exports.getQuestionsTotalCount = function (req, res) {
    console.log("\nQuestion Service Contacted...");
    try {
        if(!req) {
            return res.status(400).end();
        }   
        console.log("Service Request Id : " + req);
        questionsRepo.getQuestionsTotalCount(req, function (err, result) {            
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
        console.log("questions Over and out..");
    }
}

exports.checkAnswer = function (req, res) {
    console.log("\nQuestion Service Contacted...");
    try {
        if(!req) {
            return res.status(400).end();
        }   
        console.log("Service Request Id : " + req);
        questionsRepo.checkAnswer(req, function (err, result) {            
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
        console.log("questions Over and out..");
    }
}