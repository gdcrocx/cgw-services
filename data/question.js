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