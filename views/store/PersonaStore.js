
Ext.define('CULINARIA.store.PersonaStore', {
    extend: 'Ext.data.ArrayStore',

    autoLoad: true,
    fields: ['id', 'nombre_apellidos', 'ci', 'telefonos', 'sexo', 'direccion', 'persona_tipo', 'persona_tipo_id', 'nivel_escolar', 'nivel_escolar_id', 'organismo', 'organismo_id'],
    sorters: 'nombre_apellidos',
    groupField: 'persona_tipo',
    listeners: {
        load: function () {
            var me = this, data = [];
            CULINARIA.Model.Persona.findAll({
                include: [{
                    model: CULINARIA.Model.Organismo
                },{
                    model: CULINARIA.Model.PersonaTipo
                },{
                    model: CULINARIA.Model.NivelEscolar
                }]
            }).then(function(array){
                array.forEach(function(obj){
                    data.push({
                        id: obj.id,
                        nombre_apellidos: obj.nombre_apellidos,
                        ci: obj.ci,
                        telefonos: obj.telefonos,
                        sexo: obj.sexo,
                        direccion: obj.direccion,
                        persona_tipo: obj.PersonaTipo.nombre,
                        persona_tipo_id: obj.PersonaTipo.id,
                        nivel_escolar: obj.NivelEscolar.nombre,
                        organismo: obj.Organismo.nombre,
                        nivel_escolar_id: obj.NivelEscolar.id,
                        organismo_id: obj.Organismo.id
                    });
                });
                me.loadData(data);
            }).catch(function(error){
                console.log(error);
            });
        }
    }
});