var HomeController = require('./../controllers/HomeController');
var VipController = require('./../controllers/VipController');
var AlbumController = require('./../controllers/AlbumController');
var TestController = require('./../controllers/TestController');
var ArticlesController = require('./../controllers/ArticlesController');

// Routes
module.exports = function(app){

  // tests à supprimer
    app.get('/test', TestController.Test);

// Main Routes
    app.get('/', HomeController.Index);

// VIP
    app.get('/repertoire', VipController.Repertoire);

// VIP/lettre
	app.get('/repertoire/:lettre', VipController.RepertoireLettre)

// articles
	app.get('/articles', ArticlesController.listeNom)

// vip articles
	app.get('/articles/:idV/:nom', ArticlesController.articles)

// albums
 app.get('/album', AlbumController.ListerAlbum);
 app.get('/album:2', AlbumController.ListerAlbum12);
 app.get('/album:3', AlbumController.ListerAlbum24);
 app.get('/album:4', AlbumController.ListerAlbum36);

 //Vip album
 //app.get('/album/:numV', AlbumController.ListerPhotos);
//VIP photos
  app.get('/album/:numV/:num', AlbumController.ListerPhotos);

// tout le reste
  app.get('*', HomeController.Index);
  app.post('*', HomeController.Index);

};
