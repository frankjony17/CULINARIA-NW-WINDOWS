
Ext.define('CULINARIA.view.costo.CostoForm', {
    extend: 'Ext.window.Window',
    xtype: 'costo-form',

    iconCls: 'fa fa-usd',
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
                xtype: 'numberfield',
                fieldLabel: 'Costo',
                name: 'costo',
                emptyText: 'Costo',
                labelAlign: 'top',
                value: 0.00,
                maxValue: 25000.00,
                minValue: 0
            },{
                xtype: 'combobox',
                fieldLabel: 'Moneda',
                labelAlign: 'top',
                emptyText: 'Moneda',
                name: 'moneda',
                store: ['CUP', 'CUC'],
                queryMode: 'local',
                editable: false,
                flex: 1
            },{
                xtype: 'textarea',
                fieldLabel: 'Observación',
                name: 'observacion',
                emptyText: 'Observación',
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