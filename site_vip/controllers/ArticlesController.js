var async = require("async");
var model = require("../models/vip.js");

////////// Article //////////////////////////

module.exports.listeNom = function(request, response){
	response.title = 'Liste des VIPs';
	model.getNomVip(function(err, result){  // appel le module test qui exécute la requete SQL
    if (err) {
         console.log(err);
         return;
    }

	response.idVIP = result;
	response.render('articles', response);
} );
}

module.exports.articles = function(request, response){
	var data = request.params.idV;
	response.title = 'Articles';
	response.data = data;
	async.parallel([
		function(callback){
			model.getNomVip(function(err,resultL){callback(null,resultL)});
		},
		function(callback){
			model.getArticlesVip(data,(function(errL,result){callback(null,result)}));
		},
	],
	function(err,result){
		if (err) {
				 console.log(err);
				 return;
		}

	response.idV = result[0];
	response.res = result[1];
	response.render('articles', response);
	} );
}
