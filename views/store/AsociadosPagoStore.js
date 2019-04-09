
Ext.define('CULINARIA.store.AsociadosPagoStore', {
    extend: 'Ext.data.ArrayStore',

    autoLoad: true,
    fields: [ 'id', 'nombreApellidos', 'ci', 'fechaAsociacion', 'pendientePago', 'data' ],
    sorters: 'fechaAsociacion',
    groupField: 'fechaAsociacion',
    listeners: {
        load: function () {
            var me = this, data = [], query = "";
            query +="SELECT asociados.id AS id, persona.nombre_apellidos, persona.ci, persona.direccion, organismo.nombre AS organismo, asociados.fecha_asociacion, nivel_escolar.nombre AS nivel_escolar, asociados.observaciones,";
            query +="(SELECT sum(a_pagar.cuota) FROM asociados_pago INNER JOIN a_pagar ON a_pagar.id = asociados_pago.a_pagar_id WHERE asociados_pago.asociado_id = asociados.id AND asociados_pago.fecha_pago = 0) AS cuota_pendiente ";
            query +="FROM asociados INNER JOIN persona ON persona.id = asociados.persona_id INNER JOIN organismo ON organismo.id = persona.organismo_id INNER JOIN nivel_escolar ON nivel_escolar.id = persona.nivel_escolar_id;";
            CULINARIA.Sequelize.query(query, {
                type: CULINARIA.Sequelize.QueryTypes.SELECT
            }).then(function (record) {
                record.forEach(function(a){
                    var html = "<table><tr><th>Dirección</th><th>"+ a.direccion +"</th></tr></table>";
                    html +="<table><tr><th>Organismo</th><th>"+ a.organismo +"</th></tr></table>";
                    html +="<table><tr><th>Nivel Escolar</th><th>"+ a.nivel_escolar +"</th></tr></table>";
                    html +="<table><tr><th>Observación</th><th>"+ a.observaciones +"</th></tr></table>";
                    data.push({
                        id: a.id,
                        nombreApellidos: a.nombre_apellidos,
                        ci: a.ci,
                        fechaAsociacion: a.fecha_asociacion,
                        pendientePago: a.cuota_pendiente,
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