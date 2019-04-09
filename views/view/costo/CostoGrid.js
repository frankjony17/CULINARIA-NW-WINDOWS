
Ext.define('CULINARIA.view.costo.CostoGrid', {
    extend: 'Ext.grid.Panel',
    xtype: 'costo-grid',

    width: '100%',
    border: false,
    selType: 'checkboxmodel',
    autoScroll: true,
    scrollable: 'vertical',

    initComponent: function ()
    {
        this.store = Ext.create('CULINARIA.store.CostoStore');
        this.modelName = 'Costo';

        this.columns = [{
            xtype: 'rownumberer',
            text: 'No',
            width: 45,
            align: 'center'
        }, {
            text: 'Id',
            dataIndex: 'id',
            width: 35,
            hidden: true
        }, {
            text: 'Costo',
            dataIndex: 'costo',
            flex: 1
        }, {
            text: 'Moneda',
            dataIndex: 'moneda',
            flex: 1
        }, {
            text: 'Observación',
            dataIndex: 'observacion',
            flex: 3
        }];
        this.tbar = [{
            text: 'Adicionar',
            tooltip: 'Adicionar costo',
            iconCls: 'fa fa-plus'
        },{
            text: 'Eliminar',
            tooltip: 'Eliminar costo',
            iconCls: 'fa fa-trash'
        }];
        this.callParent();
    }
});