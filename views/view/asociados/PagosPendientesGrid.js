
Ext.define('CULINARIA.view.asociados.PagosPendientesGrid', {
    extend: 'Ext.grid.Panel',
    xtype: 'grid-pagos-pendientes',
    /* Config options */
    width: 720,
    border: true,
    selType: 'checkboxmodel',
    autoScroll: true,
    scrollable: 'vertical',
    store: Ext.create('Ext.data.ArrayStore', {
        fields: ['id', 'mes', 'cuota', 'talonario', 'estado']
    }),
    initComponent: function () {
        this.viewConfig = {
            getRowClass: function() {
                return 'cuota-pendiente';
            }
        };
        this.plugins = new Ext.grid.plugin.CellEditing({
            clicksToEdit: 1
        });
        this.columns = [{
            "xtype":"rownumberer","text":"No","width":45,"align":"center"
        },{
            "text":"Id","dataIndex":"id","flex":1,"hidden":true
        },{
            "text": "Mes", "dataIndex": "mes", "flex":1
        },{
            "text": "Cuota", "dataIndex": "cuota", "width":65, tdCls: 'x-change-cell'
        },{
            text: 'Talonario',
            dataIndex: 'talonario',
            editor: {
                xtype: 'textfield',
                maxLength: 20
            },
            flex: 3
        },{
            text: 'Estado',
            xtype: 'checkcolumn',
            dataIndex: 'estado',
            align: 'center',
            editor: {
                xtype: 'checkbox'
            },
            flex: 1
        }];
        this.callParent(arguments);
    }
});