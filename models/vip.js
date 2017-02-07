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

module.exports.getStars = function(lettre,callback){
	db.getConnection(function(err,connexion){
		if (!err) {
			var sql = "SELECT distinct VIP_NOM as nom,VIP_PRENOM as prenom, PHOTO_ADRESSE as image FROM vip v inner join photo p on p.VIP_NUMERO=v.VIP_NUMERO where VIP_NOM LIKE '"+lettre+"%';";
			console.log(sql);
			connexion.query(sql, callback);
			connexion.release();
		}
	});
};


