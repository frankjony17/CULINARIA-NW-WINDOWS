
Ext.define('CULINARIA.view.asociadoscuota.AsociadosCuotaForm', {
    extend: 'Ext.window.Window',
    xtype: 'asociados-cuota-form',

    iconCls: 'fa fa-bullseye',
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
                xtype: 'numberfield',
                fieldLabel: 'cuota',
                name: 'cuota',
                emptyText: 'cuota',
                labelAlign: 'top',
                value: 0.00,
                maxValue: 25000.00,
                minValue: 0
            },{
                xtype: 'textarea',
                fieldLabel: 'Periodo de Pago',
                name: 'periodo_pago',
                emptyText: 'Periodo de Pago',
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