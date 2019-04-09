
Ext.define('CULINARIA.store.APagarStore', {
    extend: 'Ext.data.ArrayStore',

    autoLoad: true,
    fields: ['id', 'cuota', 'periodo_pago'],
    listeners: {
        load: function () {
            var me = this, data = [];
            CULINARIA.Model.APagar.findAll().then(function(record){
                if (record.length > 0) {
                    record.forEach(function(row){
                        data.push(row.dataValues);
                    });
                    me.loadData(data);
                } else {
                    CULINARIA.Repository.Base.addUser(me);
                }
            });
        }
    }
});