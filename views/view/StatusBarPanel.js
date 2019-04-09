
Ext.define('CULINARIA.view.StatusBarPanel', {
    extend: 'Ext.toolbar.Toolbar',

    style: {
        backgroundColor: '#60A3DD'
    },
    height: 32,

    initComponent: function () {
        var me = this;
        me.usuario = Ext.create('Ext.toolbar.TextItem');
        me.detalle = Ext.create('Ext.toolbar.TextItem',{ id: 'status-bar-detalles' });
        me.clock = Ext.create('Ext.toolbar.TextItem', {
            text : '<b><span style="color:#000;">'+Ext.Date.format(new Date(), 'g:i:s A')+'</span></b>'
        });
        me.fecha = Ext.create('Ext.toolbar.TextItem', {
            text : '<b><span style="color:#000;">'+Ext.Date.format(new Date(), 'd/m/Y')+'</span></b>',
            id: 'fecha-item-toolbar-status-bar-0000'
        }); 
        me.items = [
            me.usuario, '-', me.detalle, '->', '-', me.clock, '-', me.fecha
        ];
        me.listeners = {
            render: {
                fn: function() {
                    Ext.TaskManager.start({
                        run: function(){
                            me.clock.update('<b><span style="color:#000;">'+Ext.Date.format(new Date(), 'H:i:s')+'</span></b>');
                        },
                        interval: 1000
                    });
                    me.usuario.update('<b><span style="color:#000;">'+ CULINARIA.Data.TEMP.userName.toUpperCase() +'</span></b>');
                    me.detalle.update('<b><span style="color:#000;"></span></b>');
                },
                delay: 100
            }
        };        
       // Carga nuestra configuaración y se la pasa al componente del que heredamos. 
        me.callParent(arguments);
    }
});