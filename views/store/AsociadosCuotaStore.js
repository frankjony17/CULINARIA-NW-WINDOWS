
Ext.define('CULINARIA.store.AsociadosCuotaStore', {
    extend: 'Ext.data.ArrayStore',

    autoLoad: true,
    fields: ['id', 'cuota', 'periodo_pago'],
    listeners: {
        load: function () {
            var me = this, data = [];
            CULINARIA.Model.AsociadosCuota.findAll().then(function(record){
                record.forEach(function(row){
                    data.push(row.dataValues);
                });
                me.loadData(data);
            });
        }
    }
});