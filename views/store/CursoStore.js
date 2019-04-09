
Ext.define('CULINARIA.store.CursoStore', {
    extend: 'Ext.data.ArrayStore',

    autoLoad: true,
    fields: ['id', 'fechaInicial', 'fechaFinal', 'costo', 'costo_id', 'semestre', 'semestre_id', 'curso_tipo', 'curso_tipo_id', 'especialidad', 'especialidad_id'],
    sorters: 'especialidad',
    groupField: 'semestre',
    listeners: {
        load: function () {
            var me = this, data = [];
            CULINARIA.Model.Curso.findAll({
                include: [{
                    model: CULINARIA.Model.Costo,
                    where: { id: CULINARIA.Lib.Sequelize.col('curso.costo_id')}
                },{
                    model: CULINARIA.Model.Semestre,
                    where: { id: CULINARIA.Lib.Sequelize.col('curso.semestre_id')}
                },{
                    model: CULINARIA.Model.CursoTipo,
                    where: { id: CULINARIA.Lib.Sequelize.col('curso.curso_tipo_id')}
                },{
                    model: CULINARIA.Model.Especialidad,
                    where: { id: CULINARIA.Lib.Sequelize.col('curso.especialidad_id')}
                }]
            }).then(function(array){
                array.forEach(function(obj){
                    data.push({
                        id: obj.id,
                        fechaInicial: obj.fechaInicial,
                        fechaFinal: obj.fechaFinal,
                        costo: obj.Costo.costo,
                        costo_id: obj.costo_id,
                        semestre: obj.Semestre.nombre,
                        semestre_id: obj.semestre_id,
                        curso_tipo: obj.CursoTipo.nombre,
                        curso_tipo_id: obj.curso_tipo_id,
                        especialidad: obj.Especialidad.nombre,
                        especialidad_id: obj.especialidad_id
                    });
                });
                console.log(data);
                me.loadData(data);
            }).catch(function(error){
                console.log(error);
            });
        }
    }
});