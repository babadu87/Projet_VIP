
// ////////////////////// L I S T E R     A L B U M S

module.exports.ListerAlbum = 	function(request, response){
   response.title = 'Album des stars';
   response.render('listerAlbum', response);
  } ;


module.exports.RepertoireLettre = function(request, response){
	var data = request.params.lettre;
	response.title = 'Répertoire des stars';
	response.data = data;
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
