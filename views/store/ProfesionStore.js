
Ext.define('CULINARIA.store.ProfesionStore', {
    extend: 'Ext.data.ArrayStore',

    autoLoad: true,
    fields: ['id', 'nombre', 'descripcion'],
    listeners: {
        load: function () {
            var me = this, data = [];
            CULINARIA.Model.Profesion.findAll().then(function(record){
                record.forEach(function(row){
                    data.push(row.dataValues);
                });
                me.loadData(data);
            });
        }
    }
});