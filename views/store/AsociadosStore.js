
Ext.define('CULINARIA.store.AsociadosStore', {
    extend: 'Ext.data.ArrayStore',
    autoLoad: true,
    fields: [ 'id', 'persona', 'ci', 'fecha_asociacion', 'observaciones', 'persona_id' ],
    sorters: 'fechaAsociacion',
    groupField: 'fechaAsociacion',
    listeners: {
        load: function () {
            var me = this, data = [];
            CULINARIA.Model.Asociados.findAll({
                include: [{ model: CULINARIA.Model.Persona }]
            }).then(function(record){
                record.forEach(function(a) {
                    data.push({
                        id: a.id,
                        persona: a.Persona.nombre_apellidos,
                        ci: a.Persona.ci,
                        fecha_asociacion: a.fechaAsociacion,
                        observaciones: a.observaciones,
                        persona_id: a.persona_id
                    });
                });
                me.loadData(data);
            }).catch(function(error){
                console.log(error);
            });
        }
    }
});