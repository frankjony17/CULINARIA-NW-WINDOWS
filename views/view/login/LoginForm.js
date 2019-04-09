/**
 * A simple login form.
 */
Ext.define('CULINARIA.view.login.LoginForm', {
    extend: 'Ext.window.Window',
    xtype: 'form-login',

    title: '<b>Control de ACCESO!!!</b>',
    titleAlign: 'center',
    iconCls: 'fa fa-lock',
    layout: 'fit',
    resizable: false,
    autoShow: true,
    closable: false,
    draggable: false,
    modal: true,
    width: 420,

    items: [{
        xtype: 'form',
        bodyPadding: 15,
        fieldDefaults: {
            labelStyle: 'font-weight:bold; font-size:14px; text-shadow: 0 1px 0 #fff;',
            fieldStyle: 'font-size:14px;',
            height: 35,
            anchor: '100%',
            allowBlank: false
        },
        defaultType: 'textfield',
        items: [{
            allowBlank: false,
            fieldLabel: 'Usuario',
            emptyText: 'Alias del usuario',
            enableKeyEvents: true,
            selectOnFocus: true,
            maskRe: /[a-z\.\ñ\á\é\í\ó\ú]/,
            regex: /[a-z]/,
            id: 'login-textfield-usuario',
        },{
            allowBlank: false,
            fieldLabel: 'Contraseña',
            emptyText: 'Contraseña',
            inputType: 'password',
            id: 'login-textfield-password'
        }]
    }],
    buttons: [{ text:'Iniciar Sesión', iconCls: 'fa fa-key', width: 130, height: 35, name: 'login-button' }],
});