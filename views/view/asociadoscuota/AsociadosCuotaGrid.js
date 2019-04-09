
Ext.define('CULINARIA.view.asociadoscuota.AsociadosCuotaGrid', {
    extend: 'Ext.grid.Panel',
    xtype: 'asociados-cuota-grid',

    width: '100%',
    border: false,
    selType: 'checkboxmodel',
    autoScroll: true,
    scrollable: 'vertical',

    initComponent: function ()
    {
        this.store = Ext.create('CULINARIA.store.AsociadosCuotaStore');
        this.modelName = 'AsociadosCuota';

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
            text: 'Periodo de Pago',
            dataIndex: 'periodo_pago',
            flex: 3
        }];
        this.tbar = [{
            text: 'Adicionar',
            tooltip: 'Adicionar Cuota',
            iconCls: 'fa fa-plus'
        },{
            text: 'Eliminar',
            tooltip: 'Eliminar Cuota',
            iconCls: 'fa fa-trash'
        }];
        this.callParent();
    }
});