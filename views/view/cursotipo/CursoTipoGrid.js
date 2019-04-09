
Ext.define('CULINARIA.view.cursotipo.CursoTipoGrid', {
    extend: 'Ext.grid.Panel',
    xtype: 'tipo-curso-grid',

    width: '100%',
    border: false,
    selType: 'checkboxmodel',
    autoScroll: true,
    scrollable: 'vertical',

    initComponent: function ()
    {
        this.store = Ext.create('CULINARIA.store.CursoTipoStore');
        this.modelName = 'CursoTipo';

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
            tooltip: 'Adicionar tipo de curso',
            iconCls: 'fa fa-plus'
        },{
            text: 'Eliminar',
            tooltip: 'Eliminar tipo de curso',
            iconCls: 'fa fa-trash'
        }];
        this.callParent();
    }
});