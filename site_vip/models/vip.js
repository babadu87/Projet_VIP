var db = require('../configDb');



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
			var sql = "SELECT distinct v.VIP_NUMERO as id, VIP_NOM as nom,VIP_PRENOM as prenom, PHOTO_ADRESSE as image FROM vip v inner join photo p on p.VIP_NUMERO=v.VIP_NUMERO where VIP_NOM LIKE '"+lettre+"%' group by v.VIP_NUMERO;";
			console.log(sql);
			connexion.query(sql, callback);
			connexion.release();
		}
	});
};

module.exports.getNomVip = function(callback){
	db.getConnection(function(err,connexion){
		if (!err) {
			var sql = "SELECT DISTINCT  VIP_NOM as nom, VIP_PRENOM as prenom,VIP_NUMERO as idVIP FROM vip order by nom,idVIP ASC;";
			console.log(sql);
			connexion.query(sql, callback);
			connexion.release();
		}
	});
};


module.exports.getArticlesVip = function(idV,callback){
	db.getConnection(function(err,connexion){
		if (!err) {
      var sql = "SELECT distinct v.VIP_NUMERO as id, v.VIP_NOM as nom,v.VIP_PRENOM as prenom, aps.ARTICLE_NUMERO as num, a.ARTICLE_TITRE as titre, a.ARTICLE_RESUME as resume from VIP v join APOURSUJET aps on aps.VIP_NUMERO=v.VIP_NUMERO join ARTICLE a on a.ARTICLE_NUMERO = aps.ARTICLE_NUMERO where v.VIP_NUMERO = '"+idV+"' group by num,id;";
 			console.log(sql);
			connexion.query(sql, callback);
			connexion.release();
		}
	});
};

module.exports.getPhotoVip = function(callback){
	db.getConnection(function(err,connexion){
		if (!err) {
			var sql = "SELECT DISTINCT p.VIP_NUMERO as numV,p.PHOTO_NUMERO as num,p.PHOTO_ADRESSE as photo, v.VIP_NOM FROM PHOTO p JOIN VIP v on v.VIP_NUMERO = p.VIP_NUMERO where p.PHOTO_NUMERO =1 order by v.VIP_NOM,numV ASC;";
			console.log(sql);
			connexion.query(sql, callback);
			connexion.release();
		}
	});
};


module.exports.getPhotoVip0 = function(callback){
	db.getConnection(function(err,connexion){
		if (!err) {
			var sql = "SELECT DISTINCT p.VIP_NUMERO as numV,p.PHOTO_NUMERO as num,p.PHOTO_ADRESSE as photo, v.VIP_NOM FROM PHOTO p JOIN VIP v on v.VIP_NUMERO = p.VIP_NUMERO where p.PHOTO_NUMERO =1 order by v.VIP_NOM,numV ASC LIMIT 12;";
			console.log(sql);
			connexion.query(sql, callback);
			connexion.release();
		}
	});
};

module.exports.getPhotoVip12 = function(callback){
	db.getConnection(function(err,connexion){
		if (!err) {
			var sql = "SELECT DISTINCT p.VIP_NUMERO as numV,p.PHOTO_NUMERO as num,p.PHOTO_ADRESSE as photo, v.VIP_NOM FROM PHOTO p JOIN VIP v on v.VIP_NUMERO = p.VIP_NUMERO where p.PHOTO_NUMERO =1 order by v.VIP_NOM,numV ASC LIMIT 12 OFFSET 12;";
			console.log(sql);
			connexion.query(sql, callback);
			connexion.release();
		}
	});
};

module.exports.getPhotoVip24 = function(callback){
	db.getConnection(function(err,connexion){
		if (!err) {
			var sql = "SELECT DISTINCT p.VIP_NUMERO as numV,p.PHOTO_NUMERO as num,p.PHOTO_ADRESSE as photo, v.VIP_NOM FROM PHOTO p JOIN VIP v on v.VIP_NUMERO = p.VIP_NUMERO where p.PHOTO_NUMERO =1 order by v.VIP_NOM,numV ASC LIMIT 12 OFFSET 24;";
			console.log(sql);
			connexion.query(sql, callback);
			connexion.release();
		}
	});
};

module.exports.getPhotoVip36 = function(callback){
	db.getConnection(function(err,connexion){
		if (!err) {
			var sql = "SELECT DISTINCT p.VIP_NUMERO as numV,p.PHOTO_NUMERO as num,p.PHOTO_ADRESSE as photo, v.VIP_NOM FROM PHOTO p JOIN VIP v on v.VIP_NUMERO = p.VIP_NUMERO where p.PHOTO_NUMERO =1 order by v.VIP_NOM,numV ASC LIMIT 12 OFFSET 36;";
			console.log(sql);
			connexion.query(sql, callback);
			connexion.release();
		}
	});
};

module.exports.getPhotoVip48 = function(callback){
	db.getConnection(function(err,connexion){
		if (!err) {
			var sql = "SELECT DISTINCT p.VIP_NUMERO as numV,p.PHOTO_NUMERO as num,p.PHOTO_ADRESSE as photo, v.VIP_NOM FROM PHOTO p JOIN VIP v on v.VIP_NUMERO = p.VIP_NUMERO where p.PHOTO_NUMERO =1 order by v.VIP_NOM,numV ASC LIMIT 12 OFFSET 48;";
			console.log(sql);
			connexion.query(sql, callback);
			connexion.release();
		}
	});
};
/*
module.exports.getCommentairesPhotos = function(numV,callback){
	db.getConnection(function(err,connexion){
		if (!err) {
			var sql = "SELECT distinct v.VIP_NUMERO as numV, v.VIP_NOM as nom,v.VIP_PRENOM as prenom, p.PHOTO_NUMERO as num , p.PHOTO_SUJET as sujet, p.PHOTO_ADRESSE as photo, p.PHOTO_COMMENTAIRE as com from VIP v join PHOTO p on p.VIP_NUMERO=v.VIP_NUMERO where v.VIP_NUMERO = '"+numV+"' group by num,numV;";
			console.log(sql);
			connexion.query(sql, callback);
			connexion.release();
		}
	});
};*/

module.exports.getCommentairesPhotos1 = function(numV,callback){
	db.getConnection(function(err,connexion){
		if (!err) {
			var sql = "SELECT distinct v.VIP_NUMERO as numV, SUBSTRING(v.VIP_NOM,1,1) as lettre ,v.VIP_NOM as nom,v.VIP_PRENOM as prenom, p.PHOTO_NUMERO as num , p.PHOTO_SUJET as sujet, p.PHOTO_ADRESSE as photo, p.PHOTO_COMMENTAIRE as com from VIP v join PHOTO p on p.VIP_NUMERO=v.VIP_NUMERO where v.VIP_NUMERO = '"+numV+"' and p.PHOTO_NUMERO=1 group by num,numV;";
			console.log(sql);
			connexion.query(sql, callback);
			connexion.release();
		}
	});
};

module.exports.getCommentairesPhotos2 = function(numV,callback){
	db.getConnection(function(err,connexion){
		if (!err) {
			var sql = "SELECT distinct v.VIP_NUMERO as numV, SUBSTRING(v.VIP_NOM,1,1) as lettre , v.VIP_NOM as nom,v.VIP_PRENOM as prenom, p.PHOTO_NUMERO as num , p.PHOTO_SUJET as sujet, p.PHOTO_ADRESSE as photo, p.PHOTO_COMMENTAIRE as com from VIP v join PHOTO p on p.VIP_NUMERO=v.VIP_NUMERO where v.VIP_NUMERO = '"+numV+"' and p.PHOTO_NUMERO=2 group by num,numV;";
			console.log(sql);
			connexion.query(sql, callback);
			connexion.release();
		}
	});
};

module.exports.getCommentairesPhotos3 = function(numV,callback){
	db.getConnection(function(err,connexion){
		if (!err) {
			var sql = "SELECT distinct v.VIP_NUMERO as numV,SUBSTRING(v.VIP_NOM,1,1) as lettre , v.VIP_NOM as nom,v.VIP_PRENOM as prenom, p.PHOTO_NUMERO as num , p.PHOTO_SUJET as sujet, p.PHOTO_ADRESSE as photo, p.PHOTO_COMMENTAIRE as com from VIP v join PHOTO p on p.VIP_NUMERO=v.VIP_NUMERO where v.VIP_NUMERO = '"+numV+"' and p.PHOTO_NUMERO=3 group by num,numV;";
			console.log(sql);
			connexion.query(sql, callback);
			connexion.release();
		}
	});
};


module.exports.getInformation = function(id, callback){
	db.getConnection(function(err,connexion){
		if (!err) {
			var sql = "select v.VIP_NOM as nom,v.VIP_PRENOM as prenom,v.VIP_NAISSANCE as date,v.VIP_SEXE as sexe, v.VIP_TEXTE as texte, n.NATIONALITE_NOM as nationalite, p.PHOTO_ADRESSE as image, a.VIP_NUMERO as acteur, c.VIP_NUMERO as chanteur,c.CHANTEUR_SPECIALITE as cspecialite, co.VIP_NUMERO as couturier, m.VIP_NUMERO as mannequin, r.VIP_NUMERO as realisateur from vip v inner join nationalite n on n.NATIONALITE_NUMERO=v.NATIONALITE_NUMERO inner join photo p on p.VIP_NUMERO=v.VIP_NUMERO left join acteur a on a.VIP_NUMERO=v.VIP_NUMERO left join chanteur c on c.VIP_NUMERO=v.VIP_NUMERO LEFT join couturier co on co.VIP_NUMERO=v.VIP_NUMERO left join mannequin m on m.VIP_NUMERO=v.VIP_NUMERO left join realisateur r on r.VIP_NUMERO=v.VIP_NUMERO where p.PHOTO_NUMERO=1 and v.VIP_NUMERO="+id+";";
			console.log(sql);
			connexion.query(sql, callback);
			connexion.release();
		}
	});
};

module.exports.getInformationActeur = function(id, callback){
	db.getConnection(function(err,connexion){
		if (!err) {
			var sql = "select a.VIP_NUMERO as id, f.FILM_TITRE as titre, f.FILM_DATEREALISATION as date, j.ROLE_NOM, v.VIP_NOM as nom, v.VIP_PRENOM as prenom from acteur a inner JOIN joue j on j.VIP_NUMERO=a.VIP_NUMERO inner join film f on f.FILM_NUMERO=j.FILM_NUMERO inner join realisateur r on r.VIP_NUMERO=f.VIP_NUMERO inner join vip v on v.VIP_NUMERO=r.VIP_NUMERO where a.VIP_NUMERO="+id+";";
			console.log(sql);
			connexion.query(sql, callback);
			connexion.release();
		}
	});
};

module.exports.getInformationChanteur = function(id, callback){
	db.getConnection(function(err,connexion){
		if (!err) {
			var sql = "SELECT alb.ALBUM_TITRE as titre, alb.ALBUM_DATE as date, m.MAISONDISQUE_NOM as nom FROM `chanteur` c inner join composer co on co.VIP_NUMERO=c.VIP_NUMERO inner join album alb on alb.ALBUM_NUMERO=co.ALBUM_NUMERO inner join maisondisque m on m.MAISONDISQUE_NUMERO=alb.MAISONDISQUE_NUMERO where c.VIP_NUMERO="+id+";";
			console.log(sql);
			connexion.query(sql, callback);
			connexion.release();
		}
	});
};

module.exports.getInformationMannequin  = function(id, callback){
	db.getConnection(function(err,connexion){
		if (!err) {
			var sql = "select v.VIP_NOM as nom, v.VIP_PRENOM as prenom, d.DEFILE_LIEU as lieu, d.DEFILE_DATE as date from mannequin m inner join defiledans dd on dd.VIP_NUMERO=m.VIP_NUMERO inner join defile d on d.DEFILE_NUMERO=dd.DEFILE_NUMERO inner join vip v on v.VIP_NUMERO=d.VIP_NUMERO where m.VIP_NUMERO="+id+";";
			console.log(sql);
			connexion.query(sql, callback);
			connexion.release();
		}
	});
};

module.exports.getInformationCouturier  = function(id, callback){
	db.getConnection(function(err,connexion){
		if (!err) {
			var sql = "select d.DEFILE_LIEU as lieu, d.DEFILE_DATE as date from couturier c inner join defile d on d.VIP_NUMERO=c.VIP_NUMERO where c.VIP_NUMERO="+id+";";
			console.log(sql);
			connexion.query(sql, callback);
			connexion.release();
		}
	});
};

module.exports.getInformationRealisateur  = function(id, callback){
	db.getConnection(function(err,connexion){
		if (!err) {
			var sql = "select f.FILM_TITRE as titre, f.FILM_DATEREALISATION as date from realisateur r inner join film f on f.VIP_NUMERO=r.VIP_NUMERO where r.VIP_NUMERO="+id+";";
			console.log(sql);
			connexion.query(sql, callback);
			connexion.release();
		}
	});
};

module.exports.getInformationMariage  = function(id, callback){
	db.getConnection(function(err,connexion){
		if (!err) {
			var sql = "select v.VIP_NOM as vnom, v.VIP_PRENOM as vprenom, m.DATE_EVENEMENT as date, m.MARIAGE_LIEU as lieu, m.MARIAGE_FIN as fin, m.MARIAGE_MOTIFFIN as motiffin from mariage m inner join vip v on v.VIP_NUMERO=m.VIP_VIP_NUMERO where m.VIP_NUMERO="+id+";";
			console.log(sql);
			connexion.query(sql, callback);
			connexion.release();
		}
	});
};

module.exports.getInformationLiason  = function(id, callback){
	db.getConnection(function(err,connexion){
		if (!err) {
			var sql = "select v.VIP_NOM as vnom, v.VIP_PRENOM as vprenom, l.DATE_EVENEMENT as date, l.LIAISON_MOTIFFIN as motiffin from liaison l inner join vip v on v.VIP_NUMERO=l.VIP_VIP_NUMERO where l.VIP_NUMERO="+id+";";
			console.log(sql);
			connexion.query(sql, callback);
			connexion.release();
		}
	});
};

module.exports.getInformationPhoto  = function(id, callback){
	db.getConnection(function(err,connexion){
		if (!err) {
			var sql = "SELECT PHOTO_COMMENTAIRE as commentaire, PHOTO_ADRESSE as address FROM `photo` where PHOTO_NUMERO != 1 and VIP_NUMERO="+id+";";
			console.log(sql);
			connexion.query(sql, callback);
			connexion.release();
		}
	});
};

module.exports.getArticlesVip = function(idV,callback){
	db.getConnection(function(err,connexion){
		if (!err) {
      var sql = "SELECT distinct v.VIP_NUMERO as id, v.VIP_NOM as nom,v.VIP_PRENOM as prenom, aps.ARTICLE_NUMERO as num, a.ARTICLE_TITRE as titre, a.ARTICLE_RESUME as resume from VIP v join APOURSUJET aps on aps.VIP_NUMERO=v.VIP_NUMERO join ARTICLE a on a.ARTICLE_NUMERO = aps.ARTICLE_NUMERO where v.VIP_NUMERO = '"+idV+"' group by num,id;";
 			console.log(sql);
			connexion.query(sql, callback);
			connexion.release();
		}
	});
};

module.exports.getPhotoVip = function(callback){
	db.getConnection(function(err,connexion){
		if (!err) {
			var sql = "SELECT DISTINCT p.VIP_NUMERO as numV,p.PHOTO_NUMERO,p.PHOTO_ADRESSE as photo, v.VIP_NOM FROM PHOTO p JOIN VIP v on v.VIP_NUMERO = p.VIP_NUMERO where p.PHOTO_NUMERO =1 order by v.VIP_NOM,numV ASC;";
			console.log(sql);
			connexion.query(sql, callback);
			connexion.release();
		}
	});
};
