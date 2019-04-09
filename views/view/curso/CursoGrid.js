
Ext.define('CULINARIA.view.curso.CursoGrid', {
    extend: 'Ext.grid.Panel',
    xtype: 'curso-grid',

    width: '100%',
    border: false,
    selType: 'checkboxmodel',
    autoScroll: true,
    scrollable: 'vertical',
    features: [{
        groupHeaderTpl: [
            'Semestre: {name:this.upper}', {
                upper: function (name) {
                    return name.toUpperCase();
                }
            }
        ],
        ftype: 'groupingsummary',
        collapsible: true
    }],
    initComponent: function ()
    {
        this.store = Ext.create('CULINARIA.store.CursoStore');
        this.modelName = 'Curso';

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
            text: 'Fecha',
            columns: [{
                text: 'Inicial',
                dataIndex: 'fechaInicial',
                //formatter: 'date("Y-m-d")',
                width: 100
            },{
                text: 'Final',
                dataIndex: 'fechaFinal',
                //formatter: 'date("Y-m-d")',
                width: 100
            }]
        },{
            text: 'Costo',
            dataIndex: 'costo',
            flex: 1
        },{
            text: 'Semestre',
            dataIndex: 'semestre',
            hidden: true
        },{
            text: 'Tipo de Curso',
            dataIndex: 'curso_tipo',
            flex: 1
        },{
            text: 'Especialidad',
            dataIndex: 'especialidad',
            flex: 1
        },{
            text: 'costo_id',
            dataIndex: 'costo_id',
            hidden: true
        },{
            text: 'semestre_id',
            dataIndex: 'semestre_id',
            hidden: true
        },{
            text: 'curso_tipo_id',
            dataIndex: 'curso_tipo_id',
            hidden: true
        },{
            text: 'especialidad_id',
            dataIndex: 'especialidad_id',
            hidden: true
        }];
        this.tbar = [{
            text: 'Adicionar',
            tooltip: 'Adicionar curso',
            iconCls: 'fa fa-plus'
        },{
            text: 'Eliminar',
            tooltip: 'Eliminar curso',
            iconCls: 'fa fa-trash'
        }];
        this.callParent();
    }
});