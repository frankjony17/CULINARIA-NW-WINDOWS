
Ext.define('CULINARIA.view.apagar.APagarGrid', {
    extend: 'Ext.grid.Panel',
    xtype: 'asociados-cuota-grid',

    width: '100%',
    border: false,
    selType: 'checkboxmodel',
    autoScroll: true,
    scrollable: 'vertical',

    initComponent: function ()
    {
        this.store = Ext.create('CULINARIA.store.APagarStore');
        this.modelName = 'APagar';

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
            text: 'Cuota',
            dataIndex: 'cuota',
            flex: 1
        }, {
            text: 'Período de Pago',
            dataIndex: 'periodo_pago',
            flex: 3
        }];
        this.callParent();
    }
});