
Ext.define('CULINARIA.view.curso.ReporteForm', {
    extend: 'Ext.window.Window',
    xtype: 'reporte-form',

    layout: 'fit',
    width: 600,
    resizable: false,
    modal: true,
    autoShow: true,

    initComponent: function () {
        var me = this;

        me.items = [{
            xtype: 'form',
            padding: '10 10 10 10',
            frame: false,
            fieldDefaults: {
                anchor: '100%',
                labelAlign: 'top',
                allowBlank: false
            },
            items: [{
                xtype: 'fieldset',
                layout: 'hbox',
                items: [{
                    xtype: 'datefield',
                    fieldLabel: 'Desde',
                    value: new Date(),
                    format: 'Y-m-d',
                    margin: '0 5 5 0',
                    flex: 1,
                    editable: false,
                    afterLabelTextTpl: [
                        '<span style="color:red;font-weight:bold" data-qtip="Required">*</span>'
                    ],
                    id: 'date-year-1'
                }, {
                    xtype: 'datefield',
                    fieldLabel: 'Hasta',
                    value: new Date(),
                    format: 'Y-m-d',
                    flex: 1,
                    editable: false,
                    afterLabelTextTpl: [
                        '<span style="color:red;font-weight:bold" data-qtip="Required">*</span>'
                    ],
                    id: 'date-year-2'
                }]
            }]
        }];
        me.buttons = [{
            text: 'Generar',
            id: 'pdf-win-2',
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