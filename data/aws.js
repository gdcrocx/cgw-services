var pool = require('./_mysql-client');

exports.getAwsStatus = function(req, res) {  
    return res(null, "Howdy AWS!");
};

exports.checkInstanceId = function (req, res) {
    console.log("Data : " + req.body.instanceId);
    //console.log("Data : " + JSON.stringify(req)); 
    var mode = 0;
    try {
        var instanceId = req.body.instanceId;
        console.log("Instance ID : " + instanceId);
        
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
    
            console.log('Attempting to verify instanceId : ' + req.body.instanceId);
    
            connection.query("CALL spCheckInstanceId(" + connection.escape(req.body.instanceId) + "," + connection.escape(req.body.teamUuid) +");", function (err, rows) {
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
    }
    catch (err) {
        console.log("Invalid request!");
    }    
};

exports.checkPublicIp = function (req, res) {
    console.log("Data : " + req.body.user_id + " " + req.body.user_pass);
    //console.log("Data : " + JSON.stringify(req)); 
    var mode = 0;
    try {
        var user_id = req.body.user_id;
        console.log("User ID : " + user_id);
        if (isNaN(user_id)) {
            mode = 1;
        }
        else if (user_id / 1) {
            mode = 2;
        }
    }
    catch (err) {
        console.log("Invalid: Login mode not supported!");
    }
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

        console.log('Attempting to verify login : ' + mode + " " + req.body.user_id + " " + req.body.user_pass);

        connection.query("CALL spGetLoginVerified(" + connection.escape(mode) + "," + connection.escape(req.body.user_id) + "," + connection.escape(req.body.user_pass) + ");", function (err, rows) {
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

exports.checkVolumeId = function (req, res) {
    console.log("Data : " + req.body.user_id + " " + req.body.user_pass);
    //console.log("Data : " + JSON.stringify(req)); 
    var mode = 0;
    try {
        var user_id = req.body.user_id;
        console.log("User ID : " + user_id);
        if (isNaN(user_id)) {
            mode = 1;
        }
        else if (user_id / 1) {
            mode = 2;
        }
    }
    catch (err) {
        console.log("Invalid: Login mode not supported!");
    }
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

        console.log('Attempting to verify login : ' + mode + " " + req.body.user_id + " " + req.body.user_pass);

        connection.query("CALL spGetLoginVerified(" + connection.escape(mode) + "," + connection.escape(req.body.user_id) + "," + connection.escape(req.body.user_pass) + ");", function (err, rows) {
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

exports.checkS3BucketName = function (req, res) {
    console.log("Data : " + req.body.user_id + " " + req.body.user_pass);
    //console.log("Data : " + JSON.stringify(req)); 
    var mode = 0;
    try {
        var user_id = req.body.user_id;
        console.log("User ID : " + user_id);
        if (isNaN(user_id)) {
            mode = 1;
        }
        else if (user_id / 1) {
            mode = 2;
        }
    }
    catch (err) {
        console.log("Invalid: Login mode not supported!");
    }
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

        console.log('Attempting to verify login : ' + mode + " " + req.body.user_id + " " + req.body.user_pass);

        connection.query("CALL spGetLoginVerified(" + connection.escape(mode) + "," + connection.escape(req.body.user_id) + "," + connection.escape(req.body.user_pass) + ");", function (err, rows) {
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

exports.checkIamUser = function (req, res) {
    console.log("Data : " + req.body.user_id + " " + req.body.user_pass);
    //console.log("Data : " + JSON.stringify(req)); 
    var mode = 0;
    try {
        var user_id = req.body.user_id;
        console.log("User ID : " + user_id);
        if (isNaN(user_id)) {
            mode = 1;
        }
        else if (user_id / 1) {
            mode = 2;
        }
    }
    catch (err) {
        console.log("Invalid: Login mode not supported!");
    }
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

        console.log('Attempting to verify login : ' + mode + " " + req.body.user_id + " " + req.body.user_pass);

        connection.query("CALL spGetLoginVerified(" + connection.escape(mode) + "," + connection.escape(req.body.user_id) + "," + connection.escape(req.body.user_pass) + ");", function (err, rows) {
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

exports.checkIamUserPassword = function (req, res) {
    console.log("Data : " + req.body.user_id + " " + req.body.user_pass);
    //console.log("Data : " + JSON.stringify(req)); 
    var mode = 0;
    try {
        var user_id = req.body.user_id;
        console.log("User ID : " + user_id);
        if (isNaN(user_id)) {
            mode = 1;
        }
        else if (user_id / 1) {
            mode = 2;
        }
    }
    catch (err) {
        console.log("Invalid: Login mode not supported!");
    }
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

        console.log('Attempting to verify login : ' + mode + " " + req.body.user_id + " " + req.body.user_pass);

        connection.query("CALL spGetLoginVerified(" + connection.escape(mode) + "," + connection.escape(req.body.user_id) + "," + connection.escape(req.body.user_pass) + ");", function (err, rows) {
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

exports.checkIamRole = function (req, res) {
    console.log("Data : " + req.body.user_id + " " + req.body.user_pass);
    //console.log("Data : " + JSON.stringify(req)); 
    var mode = 0;
    try {
        var user_id = req.body.user_id;
        console.log("User ID : " + user_id);
        if (isNaN(user_id)) {
            mode = 1;
        }
        else if (user_id / 1) {
            mode = 2;
        }
    }
    catch (err) {
        console.log("Invalid: Login mode not supported!");
    }
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

        console.log('Attempting to verify login : ' + mode + " " + req.body.user_id + " " + req.body.user_pass);

        connection.query("CALL spGetLoginVerified(" + connection.escape(mode) + "," + connection.escape(req.body.user_id) + "," + connection.escape(req.body.user_pass) + ");", function (err, rows) {
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

exports.checkIamInstanceProfile = function (req, res) {
    console.log("Data : " + req.body.user_id + " " + req.body.user_pass);
    //console.log("Data : " + JSON.stringify(req)); 
    var mode = 0;
    try {
        var user_id = req.body.user_id;
        console.log("User ID : " + user_id);
        if (isNaN(user_id)) {
            mode = 1;
        }
        else if (user_id / 1) {
            mode = 2;
        }
    }
    catch (err) {
        console.log("Invalid: Login mode not supported!");
    }
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

        console.log('Attempting to verify login : ' + mode + " " + req.body.user_id + " " + req.body.user_pass);

        connection.query("CALL spGetLoginVerified(" + connection.escape(mode) + "," + connection.escape(req.body.user_id) + "," + connection.escape(req.body.user_pass) + ");", function (err, rows) {
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

exports.checkIamPolicy = function (req, res) {
    console.log("Data : " + req.body.user_id + " " + req.body.user_pass);
    //console.log("Data : " + JSON.stringify(req)); 
    var mode = 0;
    try {
        var user_id = req.body.user_id;
        console.log("User ID : " + user_id);
        if (isNaN(user_id)) {
            mode = 1;
        }
        else if (user_id / 1) {
            mode = 2;
        }
    }
    catch (err) {
        console.log("Invalid: Login mode not supported!");
    }
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

        console.log('Attempting to verify login : ' + mode + " " + req.body.user_id + " " + req.body.user_pass);

        connection.query("CALL spGetLoginVerified(" + connection.escape(mode) + "," + connection.escape(req.body.user_id) + "," + connection.escape(req.body.user_pass) + ");", function (err, rows) {
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

exports.checkSshSg = function (req, res) {
    console.log("Data : " + req.body.user_id + " " + req.body.user_pass);
    //console.log("Data : " + JSON.stringify(req)); 
    var mode = 0;
    try {
        var user_id = req.body.user_id;
        console.log("User ID : " + user_id);
        if (isNaN(user_id)) {
            mode = 1;
        }
        else if (user_id / 1) {
            mode = 2;
        }
    }
    catch (err) {
        console.log("Invalid: Login mode not supported!");
    }
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

        console.log('Attempting to verify login : ' + mode + " " + req.body.user_id + " " + req.body.user_pass);

        connection.query("CALL spGetLoginVerified(" + connection.escape(mode) + "," + connection.escape(req.body.user_id) + "," + connection.escape(req.body.user_pass) + ");", function (err, rows) {
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