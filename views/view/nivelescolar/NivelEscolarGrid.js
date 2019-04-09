
Ext.define('CULINARIA.view.nivelescolar.NivelEscolarGrid', {
    extend: 'Ext.grid.Panel',
    xtype: 'nivel-escolar-grid',

    width: '100%',
    border: false,
    selType: 'checkboxmodel',
    autoScroll: true,
    scrollable: 'vertical',

    initComponent: function ()
    {
        this.store = Ext.create('CULINARIA.store.NivelEscolarStore');
        this.modelName = 'NivelEscolar';

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
            tooltip: 'Adicionar nivel escolar',
            iconCls: 'fa fa-plus'
        },{
            text: 'Eliminar',
            tooltip: 'Eliminar nivel escolar',
            iconCls: 'fa fa-trash'
        }];
        this.callParent();
    }
});