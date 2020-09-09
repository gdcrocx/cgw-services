var pool = require('./_mysql-client');

exports.getAwsQuestions = function(req, res) {
  
    pool.getConnection(function(err, connection){
        if (err) {
            //connection.release();
            //res.json({"code" : 503, "status" : "Error creating connection to database.. :("});
            //return;
            var error = { "code": 503, "status": "Error creating connection to database.. :(" + err};
            return error;
        } 

        console.log('Connected as Thread Id: ' + connection.threadId);

        connection.query("select * from tbl_cgw_aws_questions;", function(err, rows){          
            connection.release();            
            if(!err) {                                
                var response = JSON.stringify(rows); 
                return res(null,response); 
            }

        /*connection.query("CALL spGetAllUserDetails();", function(err, fields, rows){          
            connection.release();            
            if(!err) {                                
                var response = JSON.stringify(fields) + JSON.stringify(rows[0]); 
                console.log("Response res - " + " F: " + fields + " R: " + response);
                //return res(null, response);
                return response; 
            } */ 
        });

        connection.on('error', function(err) {      
                var error = {"code" : 503, "status" : "Error connecting to database.. :("};
                return error;     
        });
    });
};

exports.getAzQuestions = function(req, res) {
  
    pool.getConnection(function(err, connection){
        if (err) {
            //connection.release();
            //res.json({"code" : 503, "status" : "Error creating connection to database.. :("});
            //return;
            var error = { "code": 503, "status": "Error creating connection to database.. :(" + err};
            return error;
        } 

        console.log('Connected as Thread Id: ' + connection.threadId);

        connection.query("select * from tbl_cgw_az_questions;", function(err, rows){          
            connection.release();            
            if(!err) {                                
                var response = JSON.stringify(rows[0]); 
                return res(null,response); 
            }

        /*connection.query("CALL spGetAllUserDetails();", function(err, fields, rows){          
            connection.release();            
            if(!err) {                                
                var response = JSON.stringify(fields) + JSON.stringify(rows[0]); 
                console.log("Response res - " + " F: " + fields + " R: " + response);
                //return res(null, response);
                return response; 
            } */ 
        });

        connection.on('error', function(err) {      
                var error = {"code" : 503, "status" : "Error connecting to database.. :("};
                return error;     
        });
    });
};

exports.lockQuestion = function(req, res) {
  
    pool.getConnection(function (err, connection) {
        if (err) {
            if (connection) {
                connection.release();
            }
            // var error = { "code": 503, "status": "Error creating connection to database.. " + err };
            // return res(null, error.status);
            console.log("Error : " + err);
            return;
        }
        console.log('\nConnected as Thread Id: ' + connection.threadId);

        console.log('Attempting to lock question : ' + req.body.questionId + " " + req.body.teamUuid);

        connection.query("CALL spLockQuestion(" + connection.escape(req.body.questionId) + "," + connection.escape(req.body.teamUuid) + ");", function (err, rows) {
            connection.release();
            if (!err) {
                var response = JSON.stringify(rows[0]);
                return res(null, response);
            }
        });

        connection.on('error', function (err) {
            var error = { "code": 503, "status": "Error creating connection to database.. " + err };
            return res(null, error.status);
        });
    });
};

exports.unlockQuestion = function(req, res) {
  
    pool.getConnection(function (err, connection) {
        if (err) {
            if (connection) {
                connection.release();
            }
            // var error = { "code": 503, "status": "Error creating connection to database.. " + err };
            // return res(null, error.status);
            console.log("Error : " + err);
            return;
        }
        console.log('\nConnected as Thread Id: ' + connection.threadId);

        console.log('Attempting to unlock question : ' + req.body.questionId + " " + req.body.teamUuid);

        connection.query("CALL spUnlockQuestion(" + connection.escape(req.body.questionId) + "," + connection.escape(req.body.teamUuid) + ");", function (err, rows) {
            connection.release();
            if (!err) {
                var response = JSON.stringify(rows[0]);
                return res(null, response);
            }
        });

        connection.on('error', function (err) {
            var error = { "code": 503, "status": "Error creating connection to database.. " + err };
            return res(null, error.status);
        });
    });
};

exports.nextQuestion = function(req, res) {
  
    pool.getConnection(function(err, connection){
        if (err) {
            //connection.release();
            //res.json({"code" : 503, "status" : "Error creating connection to database.. :("});
            //return;
            var error = { "code": 503, "status": "Error creating connection to database.. :(" + err};
            return error;
        } 

        console.log('Connected as Thread Id: ' + connection.threadId);

        console.log('Attempting to get next question : ' +  req.body.platform + " " + req.body.difficulty + " " + req.body.teamUuid);

        if (req.body.platform == "aws") {
            connection.query("CALL spGetNextAwsQuestion(" + connection.escape(req.body.difficulty) + "," + connection.escape(req.body.teamUuid) + ");", function (err, rows) {
                connection.release();
                if (!err) {
                    var response = JSON.stringify(rows[0]);
                    return res(null, response);
                }
            });
        } else if (req.body.platform == "az") {
            connection.query("CALL spGetNextAzQuestion(" + connection.escape(req.body.difficulty) + "," + connection.escape(req.body.teamUuid) + ");", function (err, rows) {
                connection.release();
                if (!err) {
                    var response = JSON.stringify(rows[0]);
                    return res(null, response);
                }
            });
        }

        connection.on('error', function(err) {      
                var error = {"code" : 503, "status" : "Error connecting to database.. :("};
                return error;     
        });
    });
};

exports.getQuestionsRemainingCount = function(req, res) {
  
    pool.getConnection(function(err, connection){
        if (err) {
            //connection.release();
            //res.json({"code" : 503, "status" : "Error creating connection to database.. :("});
            //return;
            var error = { "code": 503, "status": "Error creating connection to database.. :(" + err};
            return error;
        } 

        console.log('Connected as Thread Id: ' + connection.threadId);

        console.log('Attempting to get next question : ' +  req.body.platform + " " + req.body.difficulty + " " + req.body.teamUuid);

        if (req.body.platform == "aws") {
            connection.query("CALL spGetAwsQuestionsRemainingCount(" + connection.escape(req.body.teamUuid) + ");", function (err, rows) {
                connection.release();
                if (!err) {
                    var response = JSON.stringify(rows[0]);
                    return res(null, response);
                }
            });
        } else if (req.body.platform == "az") {
            connection.query("CALL spGetAzQuestionsRemainingCount(" + connection.escape(req.body.teamUuid) + ");", function (err, rows) {
                connection.release();
                if (!err) {
                    var response = JSON.stringify(rows[0]);
                    return res(null, response);
                }
            });
        }

        connection.on('error', function(err) {      
                var error = {"code" : 503, "status" : "Error connecting to database.. :("};
                return error;     
        });
    });
};

exports.getQuestionsTotalCount = function(req, res) {
  
    pool.getConnection(function(err, connection){
        if (err) {
            //connection.release();
            //res.json({"code" : 503, "status" : "Error creating connection to database.. :("});
            //return;
            var error = { "code": 503, "status": "Error creating connection to database.. :(" + err};
            return error;
        } 

        console.log('Connected as Thread Id: ' + connection.threadId);

        console.log('Attempting to get next question : ' +  req.body.platform);

        if (req.body.platform == "aws") {
            connection.query("CALL spGetAwsQuestionsTotalCount();", function (err, rows) {
                connection.release();
                if (!err) {
                    var response = JSON.stringify(rows[0]);
                    return res(null, response);
                }
            });
        } else if (req.body.platform == "az") {
            connection.query("CALL spGetAzQuestionsTotalCount();", function (err, rows) {
                connection.release();
                if (!err) {
                    var response = JSON.stringify(rows[0]);
                    return res(null, response);
                }
            });
        }
        
        connection.on('error', function(err) {      
                var error = {"code" : 503, "status" : "Error connecting to database.. :("};
                return error;     
        });
    });
};