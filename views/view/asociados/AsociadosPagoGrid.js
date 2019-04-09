
Ext.define('CULINARIA.view.asociados.AsociadosPagoGrid', {
    extend: 'Ext.grid.Panel',
    xtype: 'grid-asociados-pago',
    /* Config options */
    width: '100%',
    border: true,
    selType: 'checkboxmodel',
    autoScroll: true,
    scrollable: 'vertical',
    store: Ext.create('CULINARIA.store.AsociadosPagoStore'),
    plugins: [{
        ptype: 'rowexpander',
        rowBodyTpl: ['{data}']
    }],
    features: [{
        groupHeaderTpl: 'Fecha: {name}',
        ftype: 'groupingsummary',
        collapsible: true
    }],
    initComponent: function () {
        var me = this;
        this.stateEvents = 'cuotaActionClick';
        this.viewConfig = {
            getRowClass: function(record) {
                console.log(record);
                if (record.get('pendientePago') > 0) {
                    return 'cuota-pendiente';
                } else {
                    return 'cuota-ok';
                }
            }
        };
        this.columns = [{
            "xtype":"rownumberer","text":"No","width":45,"align":"center"
        },{
            "text":"Id","dataIndex":"id","flex":2,"hidden":true
        },{
            text: 'Asociado',
            columns: [{
                text: 'Nombre',
                dataIndex: 'nombreApellidos',
                width: 300
            },{
                text: 'CI',
                dataIndex: 'ci',
                width: 170
            }]
        },{
            "text":"Fecha", "dataIndex":"fechaAsociacion", "flex":1
        },{
            text: "Pendiente",
            dataIndex: "pendientePago",
            align: 'center',
            tdCls: 'x-change-cell',
            flex: 1
        },{
            xtype: 'actioncolumn',
            width: 25,
            items: [{
                iconCls: 'cuota-add',
                tooltip: 'Pagar cuotas pendientes.',
                handler: function(grid, rowIndex, colIndex){
                    me.fireEvent('cuotaActionClick', grid.getStore().getAt(rowIndex));
                }
            }]
        },{
            "text":"PersonaId","dataIndex":"persona_id","flex":1,"hidden":true
        },{
            "text":"AsociadoId","dataIndex":"asociado_id","flex":1,"hidden":true
        }];
        this.callParent(arguments);
    }
});