module.exports = {
	port: 5050,
	name: 'tracking_system',
	dbHost: 'localhost',
	dbUserName: 'root',
	dbPassword: '',
	dbName: 'tracking_system',
	saltRounds: 2,
	jwtSecret: 'tracking_system@159*',
	domain: 'http://localhost:5050',
	getServerUrl(req) {
		var serverURL = 'http://localhost:5050/';
		return serverURL;
	}
}