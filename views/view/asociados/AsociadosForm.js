
Ext.define('CULINARIA.view.asociados.AsociadosForm', {
    extend: 'Ext.window.Window',
    xtype: 'asociados-form',

    iconCls: 'fa fa-street-view',
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
                xtype: 'combobox',
                fieldLabel: 'Persona',
                emptyText: 'Persona',
                name: 'nombre_apellidos',
                store: Ext.create('CULINARIA.store.PersonaStore'),
                queryMode: 'local',
                displayField: 'persona',
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
            },{
                xtype: 'textareafield',
                fieldLabel: 'Observaciones',
                name: 'observaciones',
                allowBlank: true,
                grow: true,
                flex: 1
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