
Ext.define('CULINARIA.store.InstalacionStore', {
    extend: 'Ext.data.ArrayStore',

    autoLoad: true,
    fields: ['id', 'nombre', 'direccion', 'telefonos', 'descripcion', 'organismo', 'organismo_id'],
    sorters: 'nombre',
    groupField: 'organismo',
    listeners: {
        load: function () {
            var me = this, data = [];
            CULINARIA.Model.Instalacion.findAll({
                include: [{
                    model: CULINARIA.Model.Organismo
                }]
            }).then(function(array){
                array.forEach(function(i){
                    data.push({
                        id: i.id,
                        nombre: i.nombre,
                        direccion: i.direccion,
                        telefonos: i.telefonos,
                        descripcion: i.descripcion,
                        organismo: i.Organismo.nombre,
                        organismo_id: i.Organismo.id
                    });
                });
                me.loadData(data);
            }).catch(function(error){
                console.log(error);
            });
        }
    }
});