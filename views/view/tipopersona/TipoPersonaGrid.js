
Ext.define('CULINARIA.view.tipopersona.TipoPersonaGrid', {
    extend: 'Ext.grid.Panel',
    xtype: 'persona-tipo-grid',

    width: '100%',
    border: false,
    selType: 'checkboxmodel',
    autoScroll: true,
    scrollable: 'vertical',

    initComponent: function ()
    {
        this.store = Ext.create('CULINARIA.store.TipoPersonaStore');
        this.modelName = 'TipoPersona';

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
            tooltip: 'Adicionar tipo de persona',
            iconCls: 'fa fa-plus',
            disabled: true
        },{
            text: 'Eliminar',
            tooltip: 'Eliminar tipo de persona',
            iconCls: 'fa fa-trash',
            disabled: true
        }];
        this.callParent();
    }
});