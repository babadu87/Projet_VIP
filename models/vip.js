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
			var sql = "SELECT distinct v.VIP_NUMERO, VIP_NOM as nom,VIP_PRENOM as prenom, PHOTO_ADRESSE as image FROM vip v inner join photo p on p.VIP_NUMERO=v.VIP_NUMERO where VIP_NOM LIKE '"+lettre+"%' group by v.VIP_NUMERO;";
			console.log(sql);
			connexion.query(sql, callback);
			connexion.release();
		}
	});
};

module.exports.getNomVip = function(callback){
	db.getConnection(function(err,connexion){
		if (!err) {
			var sql = "SELECT DISTINCT VIP_NOM as nom, VIP_PRENOM as prenom FROM vip order by nom ASC;";
			console.log(sql);
			connexion.query(sql, callback);
			connexion.release();
		}
	});
};

module.exports.getArticlesVip = function(nom,callback){
	db.getConnection(function(err,connexion){
		if (!err) {
			var sql = "SELECT distinct v.VIP_NUMERO, v.VIP_NOM as nom,v.VIP_PRENOM as prenom, aps.ARTICLE_NUMERO as num, a.ARTICLE_TITRE as titre, a.ARTICLE_RESUME as resume from VIP v join APOURSUJET aps on aps.VIP_NUMERO=v.VIP_NUMERO join ARTICLE a on a.ARTICLE_NUMERO = aps.ARTICLE_NUMERO where VIP_NOM = '"+nom+"' group by v.VIP_NUMERO, num;";
			console.log(sql);
			connexion.query(sql, callback);
			connexion.release();
		}
	});
};
