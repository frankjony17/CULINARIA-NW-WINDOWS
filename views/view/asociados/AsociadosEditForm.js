
Ext.define('CULINARIA.view.asociados.AsociadosEditForm', {
    extend: 'Ext.window.Window',
    xtype: 'asociados-edit-form',

    iconCls: 'fa fa-street-view',
    layout: 'fit',
    width: 525,
    resizable: false,
    modal: true,

    initComponent: function () {
        var me = this;
        me.items = [{
            xtype: 'form',
            padding: '10 10 10 10',
            frame: false,
            fieldDefaults: {
                anchor: '100%',
                labelAlign: 'left',
                allowBlank: false
            },
            items: [{
                xtype: 'textareafield',
                fieldLabel: 'Observaciones',
                name: 'observaciones',
                allowBlank: true,
                grow: true,
                flex: 1
            },{
                xtype: 'hiddenfield',
                name: 'id'
            }]
        }];
        me.buttons = [{
            text: me.btnText,
            iconCls: 'fa fa-check'
        },{
            text: 'Cancelar',
            iconCls: 'fa fa-times',
            handler: function() {
                me.close();
            }
        }];
        me.callParent(arguments);
    }
});