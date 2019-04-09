
Ext.define('CULINARIA.view.persona.PersonaGrid', {
    extend: 'Ext.grid.Panel',
    xtype: 'persona-grid',

    width: '100%',
    border: false,
    selType: 'checkboxmodel',
    autoScroll: true,
    scrollable: 'vertical',
    features: [{
        groupHeaderTpl: [
            'Tipo: {name:this.upper}', {
                upper: function (name) {
                    return name.toUpperCase();
                }
            }
        ],
        ftype: 'groupingsummary',
        collapsible: true
    }],
    initComponent: function ()
    {
        this.store = Ext.create('CULINARIA.store.PersonaStore');
        this.modelName = 'Persona';

        this.columns = [{
            xtype: 'rownumberer',
            text: 'No',
            width: 45,
            align: 'center'
        },{
            text: 'Id',
            dataIndex: 'id',
            width: 35,
            hidden: true
        },{
            text: 'Nombre',
            dataIndex: 'nombre_apellidos',
            flex: 4
        },{
            text: 'CI',
            dataIndex: 'ci',
            flex: 1
        },{
            text: 'Teléfonos',
            dataIndex: 'telefonos',
            flex: 1
        },{
            text: 'Sexo',
            dataIndex: 'sexo',
            flex: 1,
            align: 'center',
            renderer : function(val) {
                if (val.trim() === 'm') {
                    return '<span style="color: #3e5188"><b>M</b></span>';
                } else if (val.trim() === 'f') {
                    return '<span style="color: #3e5188"><b>F</b></span>';
                }
            }
        },{
            text: 'Dirección',
            dataIndex: 'direccion',
            flex: 2
        },{
            text: 'persona_tipo',
            dataIndex: 'persona_tipo',
            hidden: true
        },{
            text: 'persona_tipo_id',
            dataIndex: 'persona_tipo_id',
            hidden: true
        },{
            text: 'nivel_escolar_id',
            dataIndex: 'nivel_escolar_id',
            hidden: true
        },{
            text: 'organismo_id',
            dataIndex: 'organismo_id',
            hidden: true
        }];
        this.tbar = [{
            text: 'Adicionar',
            tooltip: 'Adicionar persona',
            iconCls: 'fa fa-plus'
        },{
            text: 'Eliminar',
            tooltip: 'Eliminar persona',
            iconCls: 'fa fa-trash'
        }];
        this.callParent();
    }
});