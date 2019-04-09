
Ext.define('CULINARIA.view.instalacion.InstalacionForm', {
    extend: 'Ext.window.Window',
    xtype: 'instalacion-form',

    iconCls: 'fa fa-birthday-cake',
    layout: 'fit',
    width: 770,
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
                allowBlank: false,
                labelAlign: 'top'
            },
            items: [{
                xtype: 'fieldset',
                layout: 'hbox',
                items: [{
                    xtype: 'textfield',
                    fieldLabel: 'Nombre',
                    name: 'nombre',
                    emptyText: 'Nombre de la Instalación',
                    maxLength: 120,
                    margin: '0 5 5 0',
                    flex: 1,
                    afterLabelTextTpl: [
                        '<span style="color:red;font-weight:bold" data-qtip="Required">*</span>'
                    ]
                },{
                    xtype: 'textfield',
                    fieldLabel: 'Teléfonos',
                    name: 'telefonos',
                    emptyText: 'xxx-xx-xxxx',
                    maskRe: /[\d\-]/,
                    regex: /^\d{3}-\d{2}-\d{4}$/,
                    regexText: 'Los números deben de estar en el formato: <b>xxx-xx-xxxx</b><br>Ej: <b>046-32-0000</b>',
                    margin: '0 5 5 0',
                    flex: 1,
                    allowBlank: true
                }]
            },{
                xtype: 'fieldset',
                layout: 'anchor',
                items: [{
                    xtype: 'textareafield',
                    fieldLabel: 'Dirección',
                    name: 'direccion',
                    grow: true,
                    flex: 1,
                    afterLabelTextTpl: ['<span style="color:red; font-weight:bold" data-qtip="Required">*</span>']
                },{
                    xtype: 'textareafield',
                    fieldLabel: 'Descripción',
                    name: 'descripcion',
                    grow: true,
                    flex: 1,
                    afterLabelTextTpl: ['<span style="color:red; font-weight:bold" data-qtip="Required">*</span>']
                }]
            },{
                xtype: 'fieldset',
                layout: 'anchor',
                items: [{
                    xtype: 'combobox',
                    fieldLabel: 'Organismo',
                    emptyText: 'Nombre del Organismo.',
                    name: 'organismo_id',
                    store: Ext.create('CULINARIA.store.OrganismoStore'),
                    queryMode: 'local',
                    displayField: 'nombre',
                    valueField: 'id',
                    editable: false,
                    afterLabelTextTpl: ['<span style="color:red; font-weight:bold" data-qtip="Required">*</span>'],
                    listeners: {select:function(combo){me.organismoId=combo.getValue();}}
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