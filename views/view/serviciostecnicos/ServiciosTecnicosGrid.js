
Ext.define('CULINARIA.view.serviciostecnicos.ServiciosTecnicosGrid', {
    extend: 'Ext.grid.Panel',
    xtype: 'servicios-tecnicos-grid',

    width: '100%',
    border: false,
    selType: 'checkboxmodel',
    autoScroll: true,
    scrollable: 'vertical',

    initComponent: function () {
        this.store = Ext.create('CULINARIA.store.ServiciosTecnicosStore');
        this.modelName = 'ServiciosTecnicos';

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
            text: 'Nombre',
            dataIndex: 'nombre',
            flex: 2
        }, {
            text: 'Descripción',
            dataIndex: 'descripcion',
            flex: 3
        }];
        this.tbar = [{
            text: 'Adicionar',
            tooltip: 'Adicionar Servicios Técnicos',
            iconCls: 'fa fa-plus'
        },{
            text: 'Eliminar',
            tooltip: 'Eliminar Servicios Técnicos',
            iconCls: 'fa fa-trash'
        }];
        this.callParent();
    }
});