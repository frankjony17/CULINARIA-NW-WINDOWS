
Ext.define('CULINARIA.store.CostoStore', {
    extend: 'Ext.data.ArrayStore',

    autoLoad: true,
    fields: ['id', 'costo', 'moneda', 'observacion'],
    listeners: {
        load: function () {
            var me = this, data = [];
            CULINARIA.Model.Costo.findAll().then(function(record){
                record.forEach(function(row){
                    data.push(row.dataValues);
                });
                me.loadData(data);
            });
        }
    }
});