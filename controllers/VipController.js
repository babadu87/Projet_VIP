
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
var async = require('async');
module.exports.RepertoireLettre = function(request, response){
	var data = request.params.lettre;
	response.title = 'Répertoire des stars';
	response.data = data;
	async.parallel([
		function(callback){
			model.getPremiereLettre(function(err, result){  // appel le module test qui exécute la requete SQL
				if (err) {
					 console.log(err);
					 return;
				}
				callback(null,result);
			});
		},
		function(callback){
			model.getStars(data,function(errE, resultE){  // appel le module test qui exécute la requete SQL
				if (errE) {
					 console.log(errE);
					 return;
				}
				callback(null,resultE);
		});
		},],function(err, result){  
			if (err) {
				 console.log(err);
				 return;
			}
			response.lettres = result[0];
			response.res = result[1];
			response.render('repertoireVips', response);
		}
	);
	
}
