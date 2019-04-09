
Ext.define('CULINARIA.view.matricula.ReporteForm', {
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
                    fieldLabel: 'Fecha',
                    name: 'fechaFinal',
                    format: 'Y-m-d',
                    margin: '0 5 5 0',
                    flex: 1,
                    editable: false,
                    afterLabelTextTpl: [
                        '<span style="color:red;font-weight:bold" data-qtip="Required">*</span>'
                    ],
                    id: 'date-year-id'
                }, {
                    xtype: 'combobox',
                    fieldLabel: 'Semestre',
                    emptyText: 'Semestre del Curso.',
                    store: Ext.create('CULINARIA.store.SemestreStore'),
                    queryMode: 'local',
                    displayField: 'nombre',
                    valueField: 'nombre',
                    editable: false,
                    margin: '0 5 5 0',
                    flex: 1,
                    id: 'combo-semestre-id'
                }]
            }]
        }];
        me.buttons = [{
            text: 'Generar',
            id: 'pdf-win-1',
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