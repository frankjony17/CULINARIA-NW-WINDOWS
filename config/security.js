/* Load native UI library and declarations */
var CULINARIA=CULINARIA||{};if(!CULINARIA.lib){CULINARIA.Lib={};}CULINARIA.Lib.Os=require('os');CULINARIA.Lib.Fs=require('fs');CULINARIA.Lib.Gui=require('nw.gui');CULINARIA.Lib.Util=require('others');CULINARIA.Lib.Path=require('path');CULINARIA.Lib.Crypto=require('crypto');CULINARIA.Lib.Sequelize=require('sequelize');CULINARIA.Lib.Bcrypt=require('bcryptjs');
/* Declaraciones */
if(!CULINARIA.Security){CULINARIA.Security={}}; // Save many data.
if(!CULINARIA.Data){CULINARIA.Data={}}; // Save many data.
if(!CULINARIA.Util){CULINARIA.Util={}}; // Save methods utils.
CULINARIA.Data.error=0; // Use for count the ron intent on login.
if(!CULINARIA.Data.Model){CULINARIA.Data.Model={}}; // The Model for entities.
CULINARIA.Data.Path=CULINARIA.Lib.Path.resolve('.'); // Get absolute path from CULINARIA.
CULINARIA.Data.So=CULINARIA.Lib.Os.platform(); // Get  the operating system platform.
CULINARIA.Window=CULINARIA.Lib.Gui.Window.get(); // Get the current window.
/* Open connection from DB */
if(!CULINARIA.Sequelize) {
    var db_config = require('./config/parameters.json');
    CULINARIA.Sequelize = new CULINARIA.Lib.Sequelize(db_config.database, db_config.user, db_config.password, db_config.server);
}
/* Load JavaScript file by patch */
CULINARIA.loadScript=function(path){
    if(CULINARIA.Lib.Util.isArray(path)){
        path.forEach(function(p){
            load(p);
        });
    }else{
        load(path);
    }
    function load(p){
        var script=document.createElement('script');
        script.setAttribute("type","text/javascript");
        script.setAttribute("src", p);
        document.getElementsByTagName("head")[0].appendChild(script);
    }
};

CULINARIA.loadScript("views/app.js") ;