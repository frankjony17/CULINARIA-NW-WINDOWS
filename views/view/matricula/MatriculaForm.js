
Ext.define('CULINARIA.view.matricula.MatriculaForm', {
    extend: 'Ext.window.Window',
    xtype: 'curso-form',

    iconCls: 'fa fa-life-buoy',
    layout: 'fit',
    width: 770,
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
                defaultType: 'numberfield',
                items: [{
                    fieldLabel: 'Folio',
                    name: 'folio',
                    emptyText: 'Folio',
                    labelAlign: 'top',
                    allowBlank: true,
                    minValue: 1,
                    margin: '0 5 0 0',
                    flex: 1,
                    afterLabelTextTpl: [
                        '<span style="color:red;font-weight:bold" data-qtip="Required">*</span>'
                    ]
                },{
                    fieldLabel: 'Tomo',
                    name: 'tomo',
                    emptyText: 'Tomo',
                    allowBlank: true,
                    labelAlign: 'top',
                    minValue: 1,
                    margin: '0 5 0 0',
                    flex: 1,
                    afterLabelTextTpl: [
                        '<span style="color:red;font-weight:bold" data-qtip="Required">*</span>'
                    ]
                },{
                    fieldLabel: 'Talonario',
                    name: 'talonario',
                    emptyText: 'Talonario',
                    allowBlank: false,
                    labelAlign: 'top',
                    minValue: 1,
                    flex: 1,
                    afterLabelTextTpl: [
                        '<span style="color:red;font-weight:bold" data-qtip="Required">*</span>'
                    ]
                }]
            },{
                xtype: 'fieldset',
                layout: 'anchor',
                items: [{
                    xtype: 'textareafield',
                    fieldLabel: 'Observaciones',
                    name: 'observaciones',
                    allowBlank: true,
                    grow: true,
                    flex: 1,
                    afterLabelTextTpl: ['<span style="color:red; font-weight:bold" data-qtip="Required">*</span>']
                }]
            },{
                xtype: 'fieldset',
                layout: 'hbox',
                defaultType: 'combobox',
                items: [{
                    fieldLabel: 'Curso',
                    emptyText: 'Nombre del Curso.',
                    name: 'curso_id',
                    store: Ext.create('CULINARIA.store.CursoStore'),
                    queryMode: 'local',
                    displayField: 'curso_tipo',
                    valueField: 'id',
                    margin: '0 5 5 0',
                    typeAhead: true,
                    selectOnFocus: true,
                    afterLabelTextTpl: ['<span style="color:red; font-weight:bold" data-qtip="Required">*</span>'],
                    tpl: Ext.create('Ext.XTemplate',
                        '<ul class="x-list-plain"><tpl for=".">',
                        '<li role="option" class="x-boundlist-item">({fechaInicial} <> {fechaFinal}) {curso_tipo}</li>',
                        '</tpl></ul>'
                    ),
                    displayTpl: Ext.create('Ext.XTemplate',
                        '<tpl for=".">',
                        '({fechaInicial} <> {fechaFinal}) {curso_tipo}',
                        '</tpl>'
                    ),
                    flex: 1,
                    listeners: {select:function(combo){me.cursoId=combo.getValue();}}
                },{
                    fieldLabel: 'Persona',
                    emptyText: 'Persona',
                    name: 'persona_id',
                    store: Ext.create('CULINARIA.store.PersonaStore'),
                    queryMode: 'local',
                    displayField: 'nombre_apellidos',
                    valueField: 'id',
                    typeAhead: true,
                    selectOnFocus: true,
                    afterLabelTextTpl: ['<span style="color:red; font-weight:bold" data-qtip="Required">*</span>'],
                    tpl: Ext.create('Ext.XTemplate',
                        '<ul class="x-list-plain"><tpl for=".">',
                        '<li role="option" class="x-boundlist-item">({ci}) {nombre_apellidos}</li>',
                        '</tpl></ul>'
                    ),
                    displayTpl: Ext.create('Ext.XTemplate',
                        '<tpl for=".">',
                        '({ci}) {nombre_apellidos}',
                        '</tpl>'
                    ),
                    flex: 1,
                    listeners: {select: function(combo){me.personaId=combo.getValue();}}
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