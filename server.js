var config  = require('./config');
var app     = require('./app');

var api_url = config.get('service.url');
var api_port = config.get('service.port');
var db_url = config.get('db.host');

var server = app.listen(api_port, function () {

  console.log("CGW API Server listening at http://%s:%s", api_url, api_port);
  console.log("CGW DB Server listening at %s", db_url);

server.timeout = 300000;

});