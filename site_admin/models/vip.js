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
