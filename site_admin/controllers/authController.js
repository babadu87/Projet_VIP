var async = require("async");
var model = require("../models/vip.js");

// ///////////////////////// R E P E R T O I R E    D E S     S T A R S

module.exports.connexion = function(request, response){
	response.title = 'Connexion';
	/**model.getPremiereLettre(function(err, result){  // appel le module test qui exécute la requete SQL
    if (err) {
         console.log(err);
         return;
    }

	response.lettres = result;**/
	response.render('authVips', response);
};

module.exports.auth = function(request, response){
	response.title = 'Connexion';
	model.getLogin(function(err, result){  // appel le module test qui exécute la requete SQL
    if (err) {
         console.log(err);
         return;
    }
	});
	
	response.loginAdmin = result[0];
	response.login = request.body.login;
	response.pass = request.body.pass;
	console.log(response.loginAdmin);
	console.log(response.login);
	console.log(response.pass);
	response.render('authVips', response);
};

