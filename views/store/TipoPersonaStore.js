
Ext.define('CULINARIA.store.TipoPersonaStore', {
    extend: 'Ext.data.ArrayStore',

    autoLoad: true,
    fields: ['id', 'nombre', 'descripcion'],
    listeners: {
        load: function () {
            var me = this, data = [];
            CULINARIA.Model.PersonaTipo.findAll().then(function(record){
                if (record.length > 0) {
                    record.forEach(function(row){
                        data.push(row.dataValues);
                    });
                    me.loadData(data);
                } else {
                    CULINARIA.Repository.Base.addTipoPersona(me);
                }
            });
        }
    }
});