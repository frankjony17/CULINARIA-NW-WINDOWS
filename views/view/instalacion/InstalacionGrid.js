
Ext.define('CULINARIA.view.instalacion.InstalacionGrid', {
    extend: 'Ext.grid.Panel',
    xtype: 'instalacion-grid',

    width: '100%',
    border: false,
    selType: 'checkboxmodel',
    autoScroll: true,
    scrollable: 'vertical',
    features: [{
        groupHeaderTpl: [
            'Organismo: {name:this.upper}', {
                upper: function (name) {
                    return name.toUpperCase();
                }
            }
        ],
        ftype: 'groupingsummary',
        collapsible: true
    }],
    initComponent: function () {
        this.store = Ext.create('CULINARIA.store.InstalacionStore');
        this.modelName = 'Instalacion';

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
            text: 'Dirección',
            dataIndex: 'direccion',
            flex: 2
        },{
            text: 'Teléfonos',
            dataIndex: 'telefonos',
            flex: 1
        },{
            text: 'Descripción',
            dataIndex: 'descripcion',
            flex: 2
        },{
            text: 'organismo',
            dataIndex: 'organismo',
            hidden: true
        },{
            text: 'organismo_id',
            dataIndex: 'organismo_id',
            hidden: true
        }];
        this.tbar = [{
            text: 'Adicionar',
            tooltip: 'Adicionar Instalación',
            iconCls: 'fa fa-plus'
        },{
            text: 'Eliminar',
            tooltip: 'Eliminar Instalación',
            iconCls: 'fa fa-trash'
        }];
        this.callParent();
    }
});