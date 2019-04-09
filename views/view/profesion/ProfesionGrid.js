
Ext.define('CULINARIA.view.profesion.ProfesionGrid', {
    extend: 'Ext.grid.Panel',
    xtype: 'profesion-grid',

    width: '100%',
    border: false,
    selType: 'checkboxmodel',
    autoScroll: true,
    scrollable: 'vertical',

    initComponent: function () {
        this.store = Ext.create('CULINARIA.store.ProfesionStore');
        this.modelName = 'Profesion';

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
            tooltip: 'Adicionar profesion',
            iconCls: 'fa fa-plus'
        },{
            text: 'Eliminar',
            tooltip: 'Eliminar profesion',
            iconCls: 'fa fa-trash'
        }];
        this.callParent();
    }
});