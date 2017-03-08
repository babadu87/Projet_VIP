var async = require("async");
var model = require("../models/vip.js");

// ////////////////////// L I S T E R     A L B U M S

module.exports.ListerAlbum = 	function(request, response){
   response.title = 'Album des stars';
   model.getPhotoVip0(function(err, result){  // appel le module test qui exécute la requete SQL
     if (err) {
          console.log(err);
          return;
     }

 	response.numV = result;
 	response.render('listerAlbum', response);
 } );
};

module.exports.ListerAlbum12 = 	function(request, response){
   response.title = 'Album des stars';
   model.getPhotoVip12(function(err, result){  // appel le module test qui exécute la requete SQL
     if (err) {
          console.log(err);
          return;
     }

 	response.numV = result;
 	response.render('listerAlbum12', response);
 } );
};

module.exports.ListerAlbum24 = 	function(request, response){
   response.title = 'Album des stars';
   model.getPhotoVip36(function(err, result){  // appel le module test qui exécute la requete SQL
     if (err) {
          console.log(err);
          return;
     }

 	response.numV = result;
 	response.render('listerAlbum24', response);
 } );
};
module.exports.ListerAlbum36 = 	function(request, response){
   response.title = 'Album des stars';
   model.getPhotoVip48(function(err, result){  // appel le module test qui exécute la requete SQL
     if (err) {
          console.log(err);
          return;
     }

 	response.numV = result;
 	response.render('listerAlbum36', response);
 } );
};


module.exports.ListerPhotos = function(request, response){
	var data = request.params.numV;
	response.title = 'Répertoire des stars';
	response.data = data;
	async.parallel([
		function(callback){
			model.getPhotoVip(function(err,resultL){callback(null,resultL) });
		},
		function(callback){
			model.getCommentairesPhotos(data,(function(errL,result){callback(null,result)}));
		},
	],
	function(err,result){
		if (err) {
				 console.log(err);
				 return;
		}

	response.numV = result[0];
	response.res = result[1];
	response.render('listerAlbum', response);
	} );
}
