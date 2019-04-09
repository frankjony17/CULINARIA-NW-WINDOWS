
Ext.define('CULINARIA.view.admin.UserEditForm', {
    extend: 'Ext.window.Window',
    xtype: 'user-edit-form',

    title: 'Editar usuario',
    iconCls: 'fa fa-users',
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
                xtype: 'textfield',
                fieldLabel: 'Usuario', name: 'username',
                emptyText: 'Alias del usuario',
                labelAlign: 'top',
                maskRe: /[a-z\.\ñ\á\é\í\ó\ú]/,
                regex: /[a-z]/
            },{
                xtype: 'textfield',
                fieldLabel: 'Nombre y apellidos',
                name: 'fullName',
                emptyText: 'Nombre y apellidos',
                labelAlign: 'top',
                maskRe: /[aA-zZ\ \áéíóúñÁÉÍÓÚÑ]/,
                regex: /[aA-zZ]/,
                maxLength: 48
            },{
                xtype: 'hiddenfield',
                name: 'id'
            }]
        }];

        me.buttons = [{
            text: 'Editar',
            iconCls: 'fa fa-file-text'
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