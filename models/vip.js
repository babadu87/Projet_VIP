var db = require('../configDb');


module.exports.test = function(callback) {
    db.getConnection(function(err, connexion) {
        if (!err) {
            var sql = "SELECT COUNT(*) AS NB FROM vip ;";
            connexion.query(sql, callback);
            connexion.release();
        }
    });
};

module.exports.getPremiereLettre = function(callback){
	db.getConnection(function(err,connexion){
		if (!err) {
			var sql = "SELECT DISTINCT SUBSTRING(VIP_NOM,1,1) as lettre FROM vip order by lettre ASC;";
			console.log(sql);
			connexion.query(sql, callback);
			connexion.release();
		}
	});
};

module.exports.getStars = function(callback){
	db.getConnection(function(err,connexion){
		if (!err) {
			var sql = "SELECT VIP_NOM,VIP_PRENOM, PHOTO_ADRESSE FROM vip v inner join photo p on p.VIP_NUMERO=v.VIP_NUMERO where VIP_NOM LIKE 'A%';";
			console.log(sql);
			connexion.query(sql, callback);
			connexion.release();
		}
	});
};


