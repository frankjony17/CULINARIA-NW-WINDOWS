
Ext.define('CULINARIA.view.login.Viewport', {
    extend: 'Ext.container.Viewport',
    id: 'viewport-login-desktop',

    layout: { type: 'border', padding: 4 },

    items: [{
        region: 'center',
        xtype: 'panel',
        border: true,
        bodyStyle: 'background-image:url(resources/images/square.gif);',
        items: Ext.create('CULINARIA.view.login.LoginForm'),
        id: 'login-viewport-center-panel'
    }]
});