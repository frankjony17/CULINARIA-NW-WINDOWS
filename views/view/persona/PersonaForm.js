
Ext.define('CULINARIA.view.persona.PersonaForm', {
    extend: 'Ext.window.Window',
    xtype: 'persona-form',

    iconCls: 'fa fa-male',
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
                defaultType: 'textfield',
                items: [{
                    fieldLabel: 'Nombre',
                    name: 'nombre_apellidos',
                    emptyText: 'Nombre de la Persona',
                    maskRe: /[A-Za-z-áéíóú\s]/,
                    regex: /^[A-Z][a-zá-ú]+\s[A-Z][a-zá-ú]+\s[A-Z][a-zá-ú]+$/,
                    regexText: 'El formato para este campo es el siguiente: <b>Nnnn Nnnn Nnnn</b><br>Ej: <b>Maylin Casals Herrera</b>',
                    maxLength: 120,
                    margin: '0 5 5 0',
                    flex: 1,
                    afterLabelTextTpl: [
                        '<span style="color:red;font-weight:bold" data-qtip="Required">*</span>'
                    ]
                },{
                    fieldLabel: 'CI',
                    name: 'ci',
                    emptyText: 'Carne de Identidad',
                    maskRe: /[0-9]/,
                    margin: '0 0 0 0',
                    allowBlank: true,
                    flex: 1,
                    validator: function(val){var date=new Date(),date=date.getFullYear();if(val.length>11||val.length<11){if(val.length===0){return true;}else{return "El tamaño máximo para el <b>CI</b> es de <b>11</b> caracteres.";}}else{if(val.length===11){var year=date-val.slice(0,2),month=parseInt(val.slice(2,4)),day=parseInt(val.slice(4,6)),edad=String(year).slice(2,4);if(edad<18||edad>85){return "La edad de la persona debe estar ente los <b>18</b> y <b>85</b> años.<br>El año del <b>CI</b> debe estar entre 19<b>30</b> y 19<b>97</b><br><br>";}if(month<1||month>12){return "El mes de nacimiento es incorreco, <b>NO EXISTE!!!</b>.";}if (day < 1 || day > 31) {return "El día de nacimiento es incorreco, <b>NO EXISTE!!!</b>.";}return true;}return true;}}
                }]
            },{
                xtype: 'fieldset',
                layout: 'hbox',
                defaultType: 'textfield',
                items: [{
                    xtype: 'container',
                    layout: 'hbox',
                    defaultType: 'textfield',
                    flex: 3,
                    items: [{
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
                }]
            },{
                xtype: 'fieldset',
                layout: 'hbox',
                items: [{
                    xtype: 'combobox',
                    fieldLabel: 'Organismo',
                    emptyText: 'Organismo',
                    name: 'organismo_id',
                    store: Ext.create('CULINARIA.store.OrganismoStore'),
                    queryMode: 'local',
                    displayField: 'nombre',
                    valueField: 'id',
                    editable: false,
                    listConfig: {itemTpl: ['<div data-qtip="{descripcion}">{nombre}</div>']},
                    margin: '0 5 0 0',
                    flex: 1,
                    listeners: {
                        select: function (combo) {
                            me.organismoId = combo.getValue();
                        }
                    },
                    afterLabelTextTpl: ['<span style="color:red;font-weight:bold" data-qtip="Required">*</span>']
                },{
                    xtype: 'combobox',
                    fieldLabel: 'Tipo',
                    emptyText: 'Tipo de Persona',
                    name: 'persona_tipo_id',
                    store: Ext.create('CULINARIA.store.TipoPersonaStore'),
                    queryMode: 'local',
                    displayField: 'nombre',
                    valueField: 'id',
                    editable: false,
                    listConfig: {itemTpl: ['<div data-qtip="{descripcion}">{nombre}</div>']},
                    margin: '0 5 0 0',
                    flex: 1,
                    listeners: {select: function(combo){me.persona_tipoId=combo.getValue();}},
                    afterLabelTextTpl: ['<span style="color:red;font-weight:bold" data-qtip="Required">*</span>']
                },{
                    xtype: 'combobox',
                    fieldLabel: 'Nivel Escolar',
                    emptyText: 'Nivel Escolar',
                    name: 'nivel_escolar_id',
                    store: Ext.create('CULINARIA.store.NivelEscolarStore'),
                    queryMode: 'local',
                    displayField: 'nombre',
                    valueField: 'id',
                    editable: false,
                    listConfig: {itemTpl: ['<div data-qtip="{descripcion}">{nombre}</div>']},
                    margin: '0 5 0 0',
                    flex: 1,
                    listeners: {select: function(combo){me.nivel_escolarId=combo.getValue();}},
                    afterLabelTextTpl: ['<span style="color:red;font-weight:bold" data-qtip="Required">*</span>']
                }]
            },{
                xtype: 'fieldset',
                layout: 'anchor',
                items: [{
                    xtype: 'combobox',
                    fieldLabel: 'Sexo',
                    emptyText: 'Sexo',
                    name: 'sexo',
                    store: Ext.create('Ext.data.ArrayStore', {
                        fields: ['id', 'sexo'],
                        data: [
                            ['f', 'Femenino'],
                            ['m', 'Masculino']
                        ]
                    }),
                    queryMode: 'local',
                    displayField: 'sexo',
                    valueField: 'id',
                    editable: false,
                    afterLabelTextTpl: ['<span style="color:red; font-weight:bold" data-qtip="Required">*</span>'],
                    flex: 1,
                    margin: '0 5 0 0'
                },{
                    xtype: 'textfield',
                    fieldLabel: 'Dirección',
                    name: 'direccion',
                    emptyText: 'Dirección',
                    //maskRe: /[aA-zZ\ \áéíóúñÁÉÍÓÚÑ]/,
                    //regex: /[aA-zZ]/,
                    maxLength: 120,
                    flex: 8,
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