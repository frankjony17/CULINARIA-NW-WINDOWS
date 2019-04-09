
Ext.define('CULINARIA.store.MatriculaStore', {
    extend: 'Ext.data.ArrayStore',

    autoLoad: true,
    fields: ['id', 'folio', 'tomo', 'talonario', 'observaciones', 'evaluacion', 'curso', 'curso_id', 'persona', 'persona_id'],
    sorters: 'talonario',
    groupField: 'curso',
    listeners: {
        load: function () {
            var me = this, data = [];
            CULINARIA.Model.Matricula.findAll({
                include: [{
                    model: CULINARIA.Model.Curso,
                    where: { id: CULINARIA.Lib.Sequelize.col('matricula.curso_id')},
                    include: [{
                        model: CULINARIA.Model.CursoTipo,
                        where: { id: CULINARIA.Lib.Sequelize.col('curso.curso_tipo_id')}
                    }]
                },{
                    model: CULINARIA.Model.Persona,
                    where: { id: CULINARIA.Lib.Sequelize.col('matricula.persona_id')}
                }]
            }).then(function(array){
                array.forEach(function(obj){
                    data.push({
                        id: obj.id,
                        folio: obj.folio,
                        tomo: obj.tomo,
                        talonario: obj.talonario,
                        observaciones: obj.observaciones,
                        evaluacion: obj.evaluacion,
                        curso: "("+ obj.Curso.fechaInicial +" <=> "+ obj.Curso.fechaFinal +") "+ obj.Curso.CursoTipo.nombre,
                        curso_id: obj.curso_id,
                        persona: obj.Persona.nombre_apellidos,
                        persona_id: obj.persona_id
                    });
                });
                me.loadData(data);
            }).catch(function(error){
                console.log(error);
            });
        }
    }
});