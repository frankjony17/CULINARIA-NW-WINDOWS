
Ext.define('CULINARIA.view.serviciostecnicosrealizados.ServiciosTecnicosRealizadosGrid', {
    extend: 'Ext.grid.Panel',
    xtype: 'servicios-tecnicos-realizados-grid',

    width: '100%',
    border: false,
    selType: 'checkboxmodel',
    autoScroll: true,
    scrollable: 'vertical',
    features: [{
        groupHeaderTpl: [
            'Servicio Técnicos: {name:this.upper}', {
                upper: function (name) {
                    return name.toUpperCase();
                }
            }
        ],
        ftype: 'groupingsummary',
        collapsible: true
    }],
    plugins: [{
        ptype: 'rowexpander',
        rowBodyTpl: ['{data}']
    }],
    initComponent: function () {
        this.store = Ext.create('CULINARIA.store.ServiciosTecnicosRealizadosStore');
        this.modelName = 'ServiciosTecnicosRealizados';

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
            text: 'Fecha Inicio',
            dataIndex: 'fecha_inicio',
            flex: 1
        },{
            text: 'Asesorados',
            dataIndex: 'asesorados',
            flex: 1
        },{
            text: 'Beneficiados',
            dataIndex: 'beneficiados',
            flex: 1
        },{
            text: 'Servicio',
            columns: [{
                text: 'Tiempo',
                dataIndex: 'tiempo_servicio',
                width: 80
            }, {
                text: 'Cantidad',
                dataIndex: 'cantidad_servicios',
                width: 80
            }]
        },{
            text: 'instalacion',
            dataIndex: 'instalacion',
            hidden: true
        },{
            text: 'instalacion_id',
            dataIndex: 'instalacion_id',
            hidden: true
        },{
            text: 'servicios_tecnico',
            dataIndex: 'servicios_tecnico',
            hidden: true
        },{
            text: 'servicios_tecnico_id',
            dataIndex: 'servicios_tecnico_id',
            hidden: true
        },{
            text: 'organismo',
            dataIndex: 'organismo',
            hidden: true
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