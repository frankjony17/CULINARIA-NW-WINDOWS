
Ext.define('CULINARIA.view.admin.AdminViewport', {
    extend: 'Ext.container.Viewport',
    xtype: 'admin-viewport-desktop',

    layout: { type: 'border', padding: 4 },
    style: { backgroundColor: '#60A3DD' },

    initComponent: function() {
        var me = this;

        me.items = [{
            region: 'north',
            xtype: 'panel',
            id: 'north-panel',
            border: false,
            defaults: {
                bodyPadding: 5,
                border: false
            },
            items: [{
                title: '<b>Administrador CULINARIA</b>',
                iconCls: 'fa fa-users',
                xtype: 'panel',
                id: 'admin-tab-panel',
                border: false,
                collapsible: true,
                titleCollapse: true,
                tools: [{
                    type: 'close',
                    handler: function () {
                        CULINARIA.View.remove();
                        CULINARIA.View.setTitlePanel('admin-tab-panel', '<b>Administrador CULINARIA</b>');
                        CULINARIA.View.expandPanel('admin-tab-panel', this);
                    }
                }],
                items: [{
                    xtype: 'toolbar',
                    items: [{
                        xtype: 'buttongroup',
                        title: 'Seguridad (Usuarios)',
                        padding: 5,
                        items: [{
                            text: 'Usuarios',
                            iconCls: 'fa fa-users',
                            iconAlign: 'top'
                        }, {
                            text: 'Contraseña',
                            iconCls: 'fa fa-key',
                            iconAlign: 'top'

                        }]
                    }, '->', {
                        xtype: 'buttongroup',
                        title: 'Sistema',
                        padding: 5,
                        items: [{
                            text: 'Ayuda',
                            tooltip: 'Ayuda general.',
                            iconCls: 'fa fa-question',
                            iconAlign: 'top'
                        }, {
                            text: 'Salir',
                            tooltip: 'Salir del sistema. (Logout)',
                            iconCls: 'fa fa-power-off',
                            iconAlign: 'top'
                        }]
                    }]
                }]
            }]
        },{
            region: 'center',
            xtype: 'panel',
            border: false,
            bodyStyle: 'background-image:url(resources/images/square.gif);',
            id: 'center-panel-id'
        },{
            region: 'south',
            id: 'south-panel-id',
            items: Ext.create('CULINARIA.view.StatusBarPanel')
        }];
        me.callParent(arguments);
    }
});