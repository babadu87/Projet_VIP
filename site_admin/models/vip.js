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

module.exports.getLogin = function(callback){
	db.getConnection(function(err,connexion){
		if (!err) {
			var sql = "SELECT LOGIN as login, PASSWD as pass FROM parametres;";
			console.log(sql);
			connexion.query(sql, callback);
			connexion.release();
		}
	});
};

module.exports.addVip = function(callback){
	db.getConnection(function(err,connexion){
		if (!err) {
			var sql = "INSERT INTO VIP (VIP_NUMERO,NATIONALITE_NUMERO,VIP_NOM,VIP_PRENOM,VIP_SEXE,VIP_NAISSANCE,VIP_TEXTE,VIP_DATE_INSERTION) VALUES();";
			console.log(sql);
			connexion.query(sql, callback);
			connexion.release();
		}
	});
};
