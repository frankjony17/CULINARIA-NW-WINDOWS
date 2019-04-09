
Ext.define('CULINARIA.view.serviciostecnicosrealizados.ServiciosTecnicosRealizadosForm', {
    extend: 'Ext.window.Window',
    xtype: 'servicios-tecnicos-realizados-form',

    iconCls: 'fa fa-cutlery',
    layout: 'fit',
    width: 900,
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
                labelAlign: 'top',
                allowBlank: false
            },
            items: [{
                xtype: 'container',
                border: false,
                layout: 'hbox',
                items: [{
                    xtype: 'datefield',
                    fieldLabel: 'Fecha inicial',
                    emptyText: 'Fecha de inicio',
                    name: 'fecha_inicio',
                    format: 'Y-m-d',
                    margin: '0 5 0 0',
                    flex: 1,
                    editable: false,
                    afterLabelTextTpl: [
                        '<span style="color:red;font-weight:bold" data-qtip="Required">*</span>'
                    ]
                },{
                    xtype: 'numberfield',
                    fieldLabel: 'Asesorados',
                    name: 'asesorados',
                    emptyText: 'Asesorados',
                    value: 0,
                    minValue: 0,
                    flex: 1,
                    margin: '0 5 0 0'
                },{
                    xtype: 'numberfield',
                    fieldLabel: 'Beneficiados',
                    name: 'beneficiados',
                    emptyText: 'Beneficiados',
                    value: 0,
                    flex: 1,
                    minValue: 0
                }]
            },{
                xtype: 'container',
                border: false,
                layout: 'hbox',
                items: [{
                    xtype: 'numberfield',
                    fieldLabel: 'Tiempo del Servicio <b>(Días)</b>',
                    name: 'tiempo_servicio',
                    emptyText: 'Tiempo del Servicio',
                    value: 0,
                    minValue: 0,
                    flex: 1,
                    margin: '0 5 0 0'
                },{
                    xtype: 'numberfield',
                    fieldLabel: 'Cantidad de Servicios',
                    name: 'cantidad_servicios',
                    emptyText: 'Cantidad de Servicios',
                    value: 0,
                    flex: 1,
                    minValue: 0
                }]
            },{
                xtype: 'container',
                border: false,
                layout: 'anchor',
                defaultType: 'combobox',
                items: [{
                    fieldLabel: 'Instalación',
                    emptyText: 'Instalación',
                    name: 'instalacion_id',
                    store: Ext.create('CULINARIA.store.InstalacionStore'),
                    queryMode: 'local',
                    displayField: 'nombre',
                    valueField: 'id',
                    editable: true,
                    flex: 1,
                    afterLabelTextTpl: ['<span style="color:red; font-weight:bold" data-qtip="Required">*</span>'],
                    listeners: {select: function(combo){me.personaId=combo.getValue();}}
                },{
                    fieldLabel: 'Servicios Técnicos',
                    emptyText: 'Servicios Técnicos',
                    name: 'servicios_tecnico_id',
                    store: Ext.create('CULINARIA.store.ServiciosTecnicosStore'),
                    queryMode: 'local',
                    displayField: 'nombre',
                    valueField: 'id',
                    editable: true,
                    flex: 1,
                    afterLabelTextTpl: ['<span style="color:red; font-weight:bold" data-qtip="Required">*</span>'],
                    listeners: {select: function(combo){me.personaId=combo.getValue();}}
                },{
                    xtype: 'hiddenfield',
                    name: 'id'
                }]
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