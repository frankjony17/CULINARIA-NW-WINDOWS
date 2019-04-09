/* Metodos relacionados con las vistas. */
if(!CULINARIA.View){CULINARIA.View={};}

CULINARIA.View.centerPanel=function(){
    return Ext.getCmp('center-panel-id')
};

CULINARIA.View.add=function(component){
    var cp=CULINARIA.View.centerPanel();
    cp.removeAll();
    cp.add(component);
};

CULINARIA.View.remove=function(){
    var cp=CULINARIA.View.centerPanel();
    cp.removeAll();
};

CULINARIA.View.setTitlePanel=function(id,title){
    var p=Ext.getCmp(id);
    p.setTitle(title);
};

CULINARIA.View.collapsePanel=function(id){
    var p=Ext.getCmp(id);
    p.collapse();
    p.down('[type=close]').show();
};

CULINARIA.View.expandPanel=function(id){
    var p=Ext.getCmp(id);
    p.expand();
    p.down('[type=close]').hide();
};

CULINARIA.View.getHeight=function(id,val){
    var p=Ext.getCmp(id).getPosition()[1];
    return p-val;
};

if(!CULINARIA.View.Msg){CULINARIA.View.Msg={}}

CULINARIA.View.Msg.info=function(title,message){
    Ext.MessageBox.show({title:title,msg:message,buttons:Ext.MessageBox.OK,icon:Ext.MessageBox.INFO});
};

CULINARIA.View.Msg.question=function(title,message){
    Ext.MessageBox.show({title:title,msg:message,buttons:Ext.MessageBox.OK,icon:Ext.MessageBox.QUESTION,alwaysOnTop:true});
};

CULINARIA.View.Msg.warning=function(title,message){
    Ext.MessageBox.show({title:title,msg:message,buttons:Ext.MessageBox.OK,icon:Ext.MessageBox.WARNING});
};

CULINARIA.View.Msg.error=function(title,message){
    Ext.MessageBox.show({title:title,msg:message,buttons:Ext.MessageBox.OK,icon:Ext.MessageBox.ERROR});
};

CULINARIA.View.toast=function(title,html){
    Ext.toast({title:title,html:html,align:'tr',iconCls:'fa fa-thumbs-up'});
};

CULINARIA.View.viewportDestroy=function(){
    var v=Ext.getCmp('viewport-login-desktop');v.destroy();
};

CULINARIA.View.updateStatusBar=function(texto){
    var sb=Ext.getCmp('status-bar-detalles');
    sb.update('<b><span style="color:#000;">'+texto+'</span></b>');
};

/* Catch Error from actions > Add, Update, Remove, findBy, findAll and others */
CULINARIA.ERROR=function(error){
    if(error.message==="Validation error"){
        CULINARIA.View.Msg.question('Atención', 'Estos datos ya existen en la <b>Base de Datos</b>, <b>VERIFÍQUELOS</b>.');
        console.log(error);
    } else {
        CULINARIA.View.Msg.error('Error', error.toString());
        console.log(error);
    }
};

/* then OK from actions > Add, Update, Remove, findBy, findAll and others */
CULINARIA.OK=function(win,store,action){
    if(store){
        store.reload();
    }
    if(action==='add'){
        CULINARIA.View.toast('Creación OK', 'Operación realizada exitosamente.');
        win.reset();
    }else if(action==='update'){
        CULINARIA.View.toast('Actualización OK', 'Operación realizada exitosamente.');
        win.close();
    }else{
        CULINARIA.View.toast('Creación OK', 'Operación realizada exitosamente.');
        win.close();
    }
};

CULINARIA.startTask=function(time, task){
    Ext.TaskManager.start({
        run: task,
        interval: 1000,
        duration: 1000 * (time - 1)
    });
};