var HomeController = require('./../controllers/HomeController');
var authController = require('./../controllers/authController');
// Routes
module.exports = function(app){


// Main Routes
    app.get('/home', HomeController.Index);

// Connexion
	app.get('/', authController.connexion);

// Connexion/Auth
	app.post('/auth', authController.auth);
	
// tout le reste
  app.get('*', HomeController.Index);
  app.post('*', HomeController.Index);

};
