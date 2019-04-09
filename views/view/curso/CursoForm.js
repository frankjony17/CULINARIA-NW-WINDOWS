
Ext.define('CULINARIA.view.curso.CursoForm', {
    extend: 'Ext.window.Window',
    xtype: 'curso-form',

    iconCls: 'fa fa-life-buoy',
    layout: 'fit',
    width: 900,
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
                allowBlank: false,
                labelAlign: 'top'
            },
            items: [{
                xtype: 'fieldset',
                layout: 'hbox',
                items: [{
                    xtype: 'datefield',
                    fieldLabel: 'Fecha inicial',
                    emptyText: 'Fecha de inicio',
                    name: 'fechaInicial',
                    format: 'Y-m-d',
                    margin: '0 5 5 0',
                    flex: 1,
                    editable: false,
                    afterLabelTextTpl: [
                        '<span style="color:red;font-weight:bold" data-qtip="Required">*</span>'
                    ],
                    id: 'fecha-inicial-date',
                    listeners: {
                        select: function (date) {
                            var date2 = Ext.getCmp('fecha-final-date');
                            if (date.getValue() > date2.getValue()) {
                                date2.setValue();
                            }
                        }
                    }
                },{
                    xtype: 'datefield',
                    fieldLabel: 'Fecha final',
                    emptyText: 'Fecha de culminación',
                    name: 'fechaFinal',
                    format: 'Y-m-d',
                    margin: '0 5 5 0',
                    flex: 1,
                    editable: false,
                    afterLabelTextTpl: [
                        '<span style="color:red;font-weight:bold" data-qtip="Required">*</span>'
                    ],
                    id: 'fecha-final-date',
                    listeners: {
                        select: function (date) {
                            var date1 = Ext.getCmp('fecha-inicial-date');
                            if (date.getValue() < date1.getValue()) {
                                date1.setValue();
                            }
                        }
                    }
                },{
                    xtype: 'combobox',
                    fieldLabel: 'Costo',
                    emptyText: 'Costo del Curso.',
                    name: 'costo_id',
                    store: Ext.create('CULINARIA.store.CostoStore'),
                    queryMode: 'local',
                    displayField: 'costo',
                    valueField: 'id',
                    editable: false,
                    allowBlank: false,
                    flex: 1,
                    tpl: Ext.create('Ext.XTemplate',
                        '<ul class="x-list-plain"><tpl for=".">',
                        '<li role="option" class="x-boundlist-item">{costo} ({moneda})</li>',
                        '</tpl></ul>'
                    ),
                    displayTpl: Ext.create('Ext.XTemplate',
                        '<tpl for=".">',
                        '{costo} ({moneda})',
                        '</tpl>'
                    ),
                    listeners: {select:function(combo){me.costoId=combo.getValue();}}
                }]
            },{
                xtype: 'fieldset',
                layout: 'hbox',
                defaultType: 'combobox',
                items: [{
                    fieldLabel: 'Semestre',
                    emptyText: 'Semestre del Curso.',
                    name: 'semestre_id',
                    store: Ext.create('CULINARIA.store.SemestreStore'),
                    queryMode: 'local',
                    displayField: 'nombre',
                    valueField: 'id',
                    editable: false,
                    margin: '0 5 5 0',
                    flex: 1,
                    listeners: {select:function(combo){me.semestreId=combo.getValue();}}
                },{
                    fieldLabel: 'Especialidad',
                    emptyText: 'Especialidad a la que pertenece.',
                    name: 'especialidad_id',
                    store: Ext.create('CULINARIA.store.EspecialidadStore'),
                    queryMode: 'local',
                    displayField: 'nombre',
                    valueField: 'id',
                    editable: false,
                    listConfig: {itemTpl:['<div data-qtip="{direccion}">{nombre}</div>']},
                    margin: '0 0 0 0',
                    flex: 1,
                    listeners: {select:function(combo){me.especialidadId=combo.getValue();}},
                    afterLabelTextTpl: ['<span style="color:red;font-weight:bold" data-qtip="Required">*</span>']
                }]
            },{
                xtype: 'fieldset',
                layout: 'anchor',
                defaultType: 'combobox',
                items: [{
                    fieldLabel: 'Tipo',
                    emptyText: 'Tipo de Curso',
                    name: 'curso_tipo_id',
                    store: Ext.create('CULINARIA.store.CursoTipoStore'),
                    queryMode: 'local',
                    displayField: 'nombre',
                    valueField: 'id',
                    margin: '0 5 0 0',
                    typeAhead: true,
                    selectOnFocus: true,
                    afterLabelTextTpl: ['<span style="color:red; font-weight:bold" data-qtip="Required">*</span>'],
                    tpl: Ext.create('Ext.XTemplate',
                        '<ul class="x-list-plain"><tpl for=".">',
                        '<li role="option" class="x-boundlist-item">{nombre} <> {descripcion}</li>',
                        '</tpl></ul>'
                    ),
                    displayTpl: Ext.create('Ext.XTemplate',
                        '<tpl for=".">',
                        '{nombre} <> {descripcion}',
                        '</tpl>'
                    ),
                    flex: 1,
                    listeners: {select: function(combo){me.curso_tipoId=combo.getValue();}}
                }]
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