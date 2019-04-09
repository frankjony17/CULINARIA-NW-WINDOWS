
Ext.define('CULINARIA.view.nivelescolar.NivelEscolarForm', {
    extend: 'Ext.window.Window',
    xtype: 'nivel-escolar-form',

    iconCls: 'fa fa fa-line-chart',
    layout: 'fit',
    width: 525,
    resizable: false,
    modal: true,

    initComponent: function ()
    {
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
                fieldLabel: 'Nivel Escolar',
                name: 'nombre',
                emptyText: 'Nombre del nivel escolar',
                labelAlign: 'top',
                maskRe: /[aA-zZ\ \áéíóúñÁÉÍÓÚÑ]/,
                regex: /[aA-zZ]/,
                maxLength: 23
            },{
                xtype: 'textfield',
                fieldLabel: 'Descripción',
                name: 'descripcion',
                emptyText: 'Descripción del nivel escolar',
                labelAlign: 'top',
                //maskRe: /[aA-zZ\ \áéíóúñÁÉÍÓÚÑ]/,
                //regex: /[aA-zZ]/,
                maxLength: 120
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