var CULINARIA=CULINARIA||{};
if(!CULINARIA.Lib){CULINARIA.Lib={};}
if(!CULINARIA.Data){CULINARIA.Data={};}
if(!CULINARIA.Model){CULINARIA.Model={};}
if(!CULINARIA.Repository){CULINARIA.Repository={};}
/* Include */
CULINARIA.Lib.Fs=require('fs');
CULINARIA.Lib.Util=require('util');
CULINARIA.Lib.Process=require('child_process');
CULINARIA.Lib.Sequelize=require('sequelize');
CULINARIA.Lib.Bcrypt=require('bcryptjs');
CULINARIA.GUI=require('nw.gui');
CULINARIA.Window=CULINARIA.GUI.Window.get(); // Get the current window.
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
/* Write html file into the DOM */
CULINARIA.writeHtml=function(path, option){
    var xhr = new XMLHttpRequest();
    xhr.open("GET", path, false);
    xhr.send();

    if(option==='html'){
        document.write(xhr.responseText);
    } else {
        return xhr.responseText;
    }
};
/* Load script */
CULINARIA.loadScript("config/autoload.js");
/* Save Data */
if(!CULINARIA.Data.TEMP){
    CULINARIA.Data.TEMP = [];
}
CULINARIA.Data.Path=require('path').resolve('.');