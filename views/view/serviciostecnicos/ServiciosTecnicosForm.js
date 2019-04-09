
Ext.define('CULINARIA.view.serviciostecnicos.ServiciosTecnicosForm', {
    extend: 'Ext.window.Window',
    xtype: 'servicios-tecnicos-form',

    iconCls: 'fa fa-cutlery',
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
                xtype: 'textfield',
                fieldLabel: 'Servicios Técnicos',
                name: 'nombre',
                labelAlign: 'top',
                maskRe: /[aA-zZ\ \áéíóúñÁÉÍÓÚÑ]/,
                regex: /[aA-zZ]/,
                maxLength: 23
            },{
                xtype: 'textfield',
                fieldLabel: 'Descripción',
                name: 'descripcion',
                emptyText: 'Descripción del semestre',
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