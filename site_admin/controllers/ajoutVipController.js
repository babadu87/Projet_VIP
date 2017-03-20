var async = require("async");
var model = require("../models/vip.js");

// ///////////////////////// AJOUT D'UN VIP

module.exports.Repertoire = function(request, response){
	response.title = 'Ajouter un Vip';
	model.addVip(function(err, result){  // appel le module test qui exécute la requete SQL
    if (err) {
         console.log(err);
         return;
    }

	response.lettres = result;
	response.render('authVips', response);
});
}
