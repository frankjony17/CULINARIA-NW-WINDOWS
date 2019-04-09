
Ext.define('CULINARIA.view.admin.PasswordForm', {
    extend: 'Ext.window.Window',
    xtype: 'password-form',

    title: 'Cambiar contraseña',
    icon: 'app/resources/images/pass.png',
    layout: 'fit',
    autoShow: true,
    width: 525,
    resizable: false,
    modal: true,

    initComponent: function () {
        var me = this;
        this.items = [{
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
                fieldLabel: 'Contraseña',
                name: 'password1',
                emptyText: 'Contraseña',
                inputType: 'password',
                minLength: 8,
                maxLength: 15
            }, {
                xtype: 'textfield',
                fieldLabel: 'Confirmar contraseña',
                name: 'password2',
                emptyText: 'Confirmar contraseña',
                inputType: 'password',
                minLength: 8,
                maxLength: 15
            }]
        }];
        this.buttons = [{
            text: 'Salvar',
            iconCls: 'fa fa-check'
        },{
            text: 'Cancelar',
            iconCls: 'fa fa-times',
            handler: function() {
                me.close();
            }
        }];
        this.callParent(arguments);
    }
});