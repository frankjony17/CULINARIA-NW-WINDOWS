
Ext.define('CULINARIA.store.UserStore', {
    extend: 'Ext.data.ArrayStore',

    autoLoad: true,
    fields: [ 'id', 'username', 'fullName' ],
    listeners: {
        load: function () {
            var me = this, data = [];
            CULINARIA.Model.User.findAll().then(function(record){
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