
Ext.define('CULINARIA.view.asociados.AsociadosGrid', {
    extend: 'Ext.grid.Panel',
    xtype: 'grid-asociados',
    /* Config options */
    width: '100%',
    border: true,
    selType: 'checkboxmodel',
    autoScroll: true,
    scrollable: 'vertical',
    store: Ext.create('CULINARIA.store.AsociadosStore'),
    features: [{
        groupHeaderTpl: 'Fecha asociación: {name}',
        ftype: 'groupingsummary',
        collapsible: true
    }],
    initComponent: function () {
        this.modelName = 'Asociados';
        this.columns = [{
            "xtype":"rownumberer","text":"No","width":45,"align":"center"
        },{
            "text":"Id","dataIndex":"id","flex":2,"hidden":true
        },{
            text: 'Asociado',
            columns: [{
                text: 'Nombre',
                dataIndex: 'persona',
                width: 300
            },{
                text: 'CI',
                dataIndex: 'ci',
                width: 170
            }]
        },{
            "text":"Fecha", "dataIndex":"fecha_asociacion", "flex":1
        },{
            text: "Observaciones",
            dataIndex: "observaciones",
            flex: 2
        },{
            "text":"PersonaId","dataIndex":"persona_id","flex":1,"hidden":true
        }];
        this.tbar = [{
            text: 'Adicionar',
            tooltip: 'Adicionar Asociado',
            iconCls: 'fa fa-plus'
        },{
            text: 'Eliminar',
            tooltip: 'Eliminar Asociado',
            iconCls: 'fa fa-trash'
        }];
        this.callParent(arguments);
    }
});