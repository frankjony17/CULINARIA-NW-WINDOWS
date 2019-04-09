
Ext.define('CULINARIA.view.organismo.OrganismoGrid', {
    extend: 'Ext.grid.Panel',
    xtype: 'organismo-grid',

    width: '100%',
    border: false,
    selType: 'checkboxmodel',
    autoScroll: true,
    scrollable: 'vertical',

    initComponent: function ()
    {
        this.store = Ext.create('CULINARIA.store.OrganismoStore');
        this.modelName = 'Organismo';

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
            dataIndex: 'nombre',
            flex: 3
        },{
            text: 'Descripción',
            dataIndex: 'descripcion',
            flex: 4
        }];
        this.tbar = [{
            text: 'Adicionar',
            tooltip: 'Adicionar organismo',
            iconCls: 'fa fa-plus',
            disabled: true
        },{
            text: 'Eliminar',
            tooltip: 'Eliminar organismo',
            iconCls: 'fa fa-trash',
            disabled: true
        }];
        this.callParent();
    }
});