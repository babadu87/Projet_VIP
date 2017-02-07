
var model = require("../models/vip.js");

// ///////////////////////// R E P E R T O I R E    D E S     S T A R S

module.exports.Repertoire = function(request, response){
	response.title = 'Répertoire des stars';
	model.getPremiereLettre(function(err, result){  // appel le module test qui exécute la requete SQL
    if (err) {
         console.log(err);
         return;
    }
	
	response.lettres = result;
	response.render('repertoireVips', response);
} );
} 

module.exports.RepertoireLettre = function(request, response){
	var data = request.params.lettre;
	response.title = 'Répertoire des stars';
	response.data = data;
	model.getStars(data,function(err, result){  // appel le module test qui exécute la requete SQL
    if (err) {
         console.log(err);
         return;
    }
	response.res = result;
	response.render('repertoireVips', response);
	} );
}
