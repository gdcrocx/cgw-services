//config.js
var convict = require('convict'),
    check = require('validator').check;

var conf = convict({
	env: {
		doc: 'The Server Environment',
		format: ['development','production'],
		default: 'production',
		env: 'NODE_ENV'
	},
	db: {
		host: {
			doc: 'DB Host IP Address',
			default: '3.20.89.105'
		},
		user: {
			doc: 'DB User',
			default: 'tm_db_user'	
		},
		password: {
			doc: 'DB Password',
			default: 'tm_db_pass'
		},
		database: {
			doc: 'DB database',
			default: 'tm_cgw_db'
		},
		connectionLimit: {
			doc: 'DB Max. Connections',
			default: '100'
		}
	}
});

var env = conf.get('env');
var envConfigFile = './config/' + env + '.json';

try {
	var files = [ envConfigFile];

	conf.loadFile(files);
}
catch(e) {
	console.error('Could not load configuration: %s', e);
}

conf.validate();

module.exports = conf;