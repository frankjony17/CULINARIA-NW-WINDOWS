
Ext.define('CULINARIA.view.matricula.MatriculaGrid', {
    extend: 'Ext.grid.Panel',
    xtype: 'matricula-grid',

    width: '100%',
    border: false,
    selType: 'checkboxmodel',
    autoScroll: true,
    scrollable: 'vertical',
    features: [{
        groupHeaderTpl: [
            'Curso: {name:this.upper}', {
                upper: function (name) {
                    return name.toUpperCase();
                }
            }
        ],
        ftype: 'groupingsummary',
        collapsible: true
    }],
    viewConfig: {
        getRowClass: function(record) {
            if(record.get('evaluacion')) {
                if (record.get('evaluacion') > 2) {
                    return 'matricula-evaluacion evaluacion-success';
                } else {
                    return 'matricula-evaluacion evaluacion-failure';
                }
            }

        }
    },
    initComponent: function () {
        var me = this;
        this.store = Ext.create('CULINARIA.store.MatriculaStore');
        this.modelName = 'Matricula';

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
            text: 'Número',
            columns: [{
                text: 'Folio',
                dataIndex: 'folio',
                width: 80
            },{
                text: 'Tomo',
                dataIndex: 'tomo',
                width: 80
            },{
                text: 'Talonario',
                dataIndex: 'talonario',
                width: 80
            }]
        },{
            text: 'Persona',
            dataIndex: 'persona',
            flex: 3
        },{
            text: 'curso',
            dataIndex: 'curso',
            flex: 5
        },{
            text: 'Observaciones',
            dataIndex: 'observaciones',
            flex: 3,
            hidden: true
        },{
            text: 'Nota',
            dataIndex: 'evaluacion',
            align: 'center',
            tdCls: 'x-change-cell',
            flex: 1,
        },{
            text: 'curso_id',
            dataIndex: 'curso_id',
            hidden: true
        },{
            text: 'persona_id',
            dataIndex: 'persona_id',
            hidden: true
        }];
        this.tbar = [{
            text: 'Adicionar',
            tooltip: 'Adicionar matricula',
            iconCls: 'fa fa-plus'
        },{
            text: 'Eliminar',
            tooltip: 'Eliminar matricula',
            iconCls: 'fa fa-trash'
        }, '->',{
            xtype: 'combobox',
            emptyText: 'FILTRAR por CI...',
            store: Ext.create('CULINARIA.store.PersonaStore'),
            queryMode: 'local',
            displayField: 'ci',
            valueField: 'id',
            typeAhead: true,
            selectOnFocus: true,
            afterLabelTextTpl: ['<span style="color:red; font-weight:bold" data-qtip="Required">*</span>'],
            id: 'combobox-753159',
            listeners: {
                select: function (combo, record) {
                    var textfield = Ext.getCmp('persona-textfield-753159');

                    console.log("dddddddddddddddd");
                    console.log(record);

                    textfield.setValue(record.get('nombre_apellidos'));

                    me.store.clearFilter();

                    if (combo.value) {
                        me.store.filter({
                            property: 'persona',
                            value: textfield.getValue(),
                            anyMatch: true
                        });
                    };
                }
            },
            width: 250
        },{
            xtype: 'textfield',
            id: 'persona-textfield-753159',
            editable: false,
            width: 250
        },'-',{
            xtype: 'button',
            iconCls: 'delete-row',
            listeners: {
                click: function () {
                    me.store.clearFilter();
                    var combobox = Ext.getCmp('combobox-753159').setValue();
                    var textfield = Ext.getCmp('persona-textfield-753159').setValue();
                }
            }
        }];
        this.callParent();
    }
});