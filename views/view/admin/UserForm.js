
Ext.define('CULINARIA.view.admin.UserForm', {
    extend: 'Ext.window.Window',
    xtype: 'user-form',

    title: 'Adicionar usuario',
    iconCls: 'fa fa-users',
    layout: 'fit',
    autoShow: true,
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
                xtype: 'textfield',
                fieldLabel: 'Contraseña', name: 'password1',
                emptyText: 'Contraseña',
                inputType: 'password',
                minLength: 8,
                maxLength: 15
            }, {
                xtype: 'textfield',
                fieldLabel: 'Confirmar', name: 'password2',
                emptyText: 'Confirmar contraseña',
                inputType: 'password',
                minLength: 8,
                maxLength: 15
            }]
        },{
            xtype: 'hiddenfield',
            name: 'id'
        }];
        me.buttons = [{
            text: 'Salvar',
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