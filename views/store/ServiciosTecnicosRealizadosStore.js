
Ext.define('CULINARIA.store.ServiciosTecnicosRealizadosStore', {
    extend: 'Ext.data.ArrayStore',

    autoLoad: true,
    fields: [
        'id', 'fecha_inicio', 'asesorados', 'beneficiados',
        'tiempo_servicio', 'cantidad_servicios', 'instalacion', 'instalacion_id',
        'servicios_tecnico', 'servicios_tecnico_id', 'organismo', 'data'
    ],
    sorters: 'organismo',
    groupField: 'servicios_tecnico',
    listeners: {
        load: function () {
            var me = this, data = [];
            CULINARIA.Model.ServiciosTecnicosRealizados.findAll({
                include: [{
                    model: CULINARIA.Model.Instalacion,
                    include: [{
                        model: CULINARIA.Model.Organismo
                    }]
                },{
                    model: CULINARIA.Model.ServiciosTecnicos
                }]
            }).then(function (record) {
                record.forEach(function(str){
                    var html = "<table><tr><th>Organismo</th><th>"+ str.Instalacion.Organismo.nombre +"</th></tr></table>";
                    html +="<table><tr><th>Instalación</th><th>"+ str.Instalacion.nombre +"</th></tr></table>";
                    data.push({
                        id: str.id,
                        fecha_inicio: str.fecha_inicio,
                        asesorados: str.asesorados,
                        beneficiados: str.beneficiados,
                        tiempo_servicio: str.tiempo_servicio,
                        cantidad_servicios: str.cantidad_servicios,
                        instalacion: str.Instalacion.nombre,
                        instalacion_id: str.Instalacion.id,
                        organismo: str.Instalacion.Organismo.nombre,
                        servicios_tecnico: str.ServiciosTecnico.nombre,
                        servicios_tecnico_id: str.ServiciosTecnico.id,
                        data: html
                    });
                });
                me.loadData(data);
            }).catch(function(error){
                console.log(error);
            });
        }
    }
});