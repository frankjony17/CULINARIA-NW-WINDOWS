/*
 CULINARIA 1.0.0
 Created on : 19-feb-2016, 10:15:32
 */
Ext.application({
    name: 'CULINARIA',
    appFolder: 'views',
    controllers: [
        "BaseController",
        "MatriculaController",
        "ViewportController",
        "AdminController",
        "AsociadosController"
    ],
    launch : function() {
        Ext.create('CULINARIA.view.login.Viewport');
    }
});

