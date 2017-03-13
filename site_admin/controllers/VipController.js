var async = require("async");
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
	response.dataL = data;
	async.parallel([
		function(callback){
			model.getPremiereLettre(function(err,resultL){callback(null,resultL) });
		},
		function(callback){
			model.getStars(data,(function(errL,result){callback(null,result)}));
		},
	],
	function(err,result){
		if (err) {
				 console.log(err);
				 return;
		}

	response.lettres = result[0];
	response.res = result[1];
	response.render('repertoireVips', response);
	} );
}

module.exports.InformationVIP = function(request, response){
	var dataL = request.params.lettre;
	var dataI = request.params.id;
	response.title = 'Répertoire des stars';
	response.dataL = dataL;
	response.dataI = dataI;
	async.parallel([
		function(callback){
			model.getPremiereLettre(function(err,resultL){callback(null,resultL) });
		},
		function(callback){
			model.getInformation(dataI,(function(errL,result){callback(null,result)}));
		},
		function(callback){
			model.getInformationActeur(dataI,(function(errA,resultA){callback(null,resultA)}));
		},
		function(callback){
			model.getInformationChanteur(dataI,(function(errC,resultC){callback(null,resultC)}));
		},
		function(callback){
			model.getInformationMannequin(dataI,(function(errM,resultM){callback(null,resultM)}));
		},
		function(callback){
			model.getInformationCouturier(dataI,(function(errCO,resultCO){callback(null,resultCO)}));
		},
		function(callback){
			model.getInformationRealisateur(dataI,(function(errR,resultR){callback(null,resultR)}));
		},
		function(callback){
			model.getInformationMariage(dataI,(function(errMa,resultMa){callback(null,resultMa)}));
		},
		function(callback){
			model.getInformationLiason(dataI,(function(errL,resultL){callback(null,resultL)}));
		},
		function(callback){
			model.getInformationPhoto(dataI,(function(errP,resultP){callback(null,resultP)}));
		},
	],
	function(err,result){
		if (err) {
				 console.log(err);
				 return;
		}
	response.lettres = result[0];
	response.res = result[1];
	response.resA = result[2];
	response.resC = result[3];
	response.resM = result[4];
	response.resCO = result[5];
	response.resR = result[6];
	response.resMa = result[7];
	response.resL = result[8];
	response.resP = result[9];
	console.log(response.resP);
	response.render('repertoireVips', response);
	} );
}
