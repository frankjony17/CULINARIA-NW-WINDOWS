
if(!CULINARIA.Repository.Curso){CULINARIA.Repository.Curso={};}

CULINARIA.Repository.Curso.loadReporte=function(fecha1, fecha2, path){
        var query = "";
        query += "SELECT curso.fecha_inicial, curso.fecha_final, costo.costo, costo.moneda,";
        query += "semestre.nombre AS semestre, curso_tipo.nombre AS tipo, especialidad.nombre AS especialidad FROM curso ";
        query += "INNER JOIN costo ON costo.id = curso.costo_id ";
        query += "INNER JOIN semestre ON semestre.id = curso.semestre_id ";
        query += "INNER JOIN curso_tipo ON curso_tipo.id = curso.curso_tipo_id ";
        query += "INNER JOIN especialidad ON especialidad.id = curso.especialidad_id ";
        query += "WHERE curso.fecha_inicial >= '"+ fecha1 +"' AND curso.fecha_final <= '"+ fecha2 +"'";

    CULINARIA.Sequelize.query(query, {
        type: CULINARIA.Sequelize.QueryTypes.SELECT
    }).then(function(record){
        if (record.length > 0) {
            /* Code HTML */
            var tr = "", html = CULINARIA.writeHtml(path, 'string');

            html = html.replace('{{fecha1}}', fecha1);
            html = html.replace('{{fecha2}}', fecha2);

            record.forEach(function (rec) {
                tr += "<tr>";
                tr += "<td width=95 style='width:70.9pt;border:solid windowtext 1.0pt;border-top:none;padding:0cm 5.4pt 0cm 5.4pt'><p align=center style='margin-bottom:0cm;margin-bottom:.0001pt;text-align:center;line-height:normal'>"+ rec.fecha_inicial +"</p></td>";
                tr += "<td width=104 style='width:77.95pt;border-top:none;border-left:none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;padding:0cm 5.4pt 0cm 5.4pt'><p align=center style='margin-bottom:0cm;margin-bottom:.0001pt;text-align:center;line-height:normal'>"+ rec.fecha_final +"</p></td>";
                tr += "<td width=76 style='width:2.0cm;border-top:none;border-left:none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;padding:0cm 5.4pt 0cm 5.4pt'><p align=center style='margin-bottom:0cm;margin-bottom:.0001pt;text-align:center;line-height:normal'>"+ rec.costo +" "+ rec.moneda +"</p></td>";
                tr += "<td width=132 style='width:99.25pt;border-top:none;border-left:none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;padding:0cm 5.4pt 0cm 5.4pt'><p style='margin-bottom:0cm;margin-bottom:.0001pt;line-height:normal'>"+ rec.semestre +"</p></td>";
                tr += "<td width=161 style='width:120.5pt;border-top:none;border-left:none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;padding:0cm 5.4pt 0cm 5.4pt'><p style='margin-bottom:0cm;margin-bottom:.0001pt;line-height:normal'>"+ rec.tipo +"</p></td>";
                tr += "<td width=198 style='width:148.8pt;border-top:none;border-left:none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;padding:0cm 5.4pt 0cm 5.4pt'><p style='margin-bottom:0cm;margin-bottom:.0001pt;line-height:normal'>"+ rec.especialidad +"</p></td>";
                tr += "</tr>";
            });
            html = html.replace('{{tr}}', tr);
            /* Write HTML file */
            CULINARIA.Lib.Fs.writeFile(CULINARIA.Data.Path+'/reports/ReporteCurso.html', html);
            CULINARIA.pdf({
                orientation: "Portrait",
                pageSize: "Letter",
                title: "ReporteCurso"
            });
        } else {
            CULINARIA.View.Msg.question('Atención', 'No Hay datos que mostrar.');
        }
    });
};

CULINARIA.Repository.Curso.loadReporteMatricula=function(fecha1, fecha2, path){
        var query = "";
        query += "SELECT persona.ci, persona.nombre_apellidos, curso_tipo.nombre AS curso, ";
        query += "matricula.tomo, matricula.folio, matricula.talonario, matricula.evaluacion, matricula.observaciones ";
        query += "FROM matricula INNER JOIN curso ON curso.id = matricula.curso_id ";
        query += "INNER JOIN curso_tipo ON curso_tipo.id = curso.curso_tipo_id ";
        query += "INNER JOIN persona ON persona.id = matricula.persona_id ";
        query += "WHERE curso.fecha_inicial >= '"+ fecha1 +"' AND curso.fecha_final <= '"+ fecha2 +"'";

    CULINARIA.Sequelize.query(query, {
        type: CULINARIA.Sequelize.QueryTypes.SELECT
    }).then(function(record){
        if (record.length > 0) {
            /* Code HTML */
            var tr = "", html = CULINARIA.writeHtml(path, 'string');

            html = html.replace('{fecha1}', fecha1);
            html = html.replace('{fecha2}', fecha2);

            record.forEach(function (rec) {
                tr += "<tr>";
                tr += "<td width=85 style='width:63.55pt;border:solid windowtext 1.0pt;border-top:none;padding:0cm 5.4pt 0cm 5.4pt'><p align=center style='margin-bottom:0cm;margin-bottom:.0001pt;text-align:center;line-height:normal'>"+ rec.ci +"</p></td>";
                tr += "<td width=189 style='width:141.4pt;border-top:none;border-left:none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;padding:0cm 5.4pt 0cm 5.4pt'><p style='margin-bottom:0cm;margin-bottom:.0001pt;line-height:normal'>"+ rec.nombre_apellidos +"</p></td>";
                tr += "<td width=170 style='width:250.15pt;border-top:none;border-left:none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;padding:0cm 5.4pt 0cm 5.4pt'><p style='margin-bottom:0cm;margin-bottom:.0001pt;line-height:normal'>"+ rec.curso +"</p></td>";
                tr += "<td width=66 style='width:49.8pt;border-top:none;border-left:none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;padding:0cm 5.4pt 0cm 5.4pt'><p align=center style='margin-bottom:0cm;margin-bottom:.0001pt;text-align:center;line-height:normal'>"+ rec.tomo +"</p></td>";
                tr += "<td width=58 style='width:43.4pt;border-top:none;border-left:none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;padding:0cm 5.4pt 0cm 5.4pt'><p align=center style='margin-bottom:0cm;margin-bottom:.0001pt;text-align:center;line-height:normal'>"+ rec.folio +"</p></td>";
                tr += "<td width=84 style='width:62.65pt;border-top:none;border-left:none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;padding:0cm 5.4pt 0cm 5.4pt'><p align=center style='margin-bottom:0cm;margin-bottom:.0001pt;text-align:center;line-height:normal'>"+ rec.talonario +"</p></td>";
                tr += "<td width=78 style='width:58.75pt;border-top:none;border-left:none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;padding:0cm 5.4pt 0cm 5.4pt'><p align=center style='margin-bottom:0cm;margin-bottom:.0001pt;text-align:center;line-height:normal'>"+ rec.evaluacion +"</p></td>";
                tr += "<td width=273 valign=top style='width:150.65pt;border-top:none;border-left:none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;padding:0cm 5.4pt 0cm 5.4pt'><p style='margin-bottom:0cm;margin-bottom:.0001pt;line-height:normal'>"+ rec.observaciones +"</p></td>";
                tr += "</tr>";
            });
            html = html.replace('{tr}', tr);
            /* Write HTML file */
            CULINARIA.Lib.Fs.writeFile(CULINARIA.Data.Path+'/reports/ReporteCursoMatriculados.html', html);
            CULINARIA.pdf({
                orientation: "Landscape",
                pageSize: "Letter",
                title: "ReporteCursoMatriculados"
            });
        } else {
            CULINARIA.View.Msg.question('Atención', 'No Hay datos que mostrar.');
        }
    });
};

CULINARIA.Repository.Curso.loadReporteServiciosTecnicos=function(fecha1, fecha2, path){
        var query = "";
        query += "SELECT str.fecha_inicio, str.beneficiados, str.cantidad_servicios, str.tiempo_servicio,";
        query += "organismo.nombre AS organismo, instalacion.nombre AS instalacion, servicios_tecnicos.nombre AS servicios_tecnicos ";
        query += "FROM servicios_tecnicos_realizados AS str INNER JOIN instalacion ON instalacion.id = str.instalacion_id ";
        query += "INNER JOIN organismo ON organismo.id = instalacion.organismo_id ";
        query += "INNER JOIN servicios_tecnicos ON servicios_tecnicos.id = str.servicios_tecnico_id ";
        query += "WHERE str.fecha_inicio >= '"+ fecha1 +"' AND str.fecha_inicio <= '"+ fecha2 +"'";

    CULINARIA.Sequelize.query(query, {
        type: CULINARIA.Sequelize.QueryTypes.SELECT
    }).then(function(record){
        if (record.length > 0) {
            /* Code HTML */
            var tr = "", html = CULINARIA.writeHtml(path, 'string');

            html = html.replace('{fecha1}', fecha1);
            html = html.replace('{fecha2}', fecha2);

            record.forEach(function (rec) {
                tr += "<tr>";
                tr += "<td width=94 style='width:70.2pt;border:solid windowtext 1.0pt;border-top:none;padding:0cm 5.4pt 0cm 5.4pt'><p align=center style='margin-bottom:0cm;margin-bottom:.0001pt;text-align:center;line-height:normal'>"+ rec.organismo +"</p></td>";
                tr += "<td width=354 style='width:265.2pt;border-top:none;border-left:none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;padding:0cm 5.4pt 0cm 5.4pt'><p style='margin-bottom:0cm;margin-bottom:.0001pt;line-height:normal'>"+ rec.instalacion +"</p></td>";
                tr += "<td width=110 style='width:82.8pt;border-top:none;border-left:none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;padding:0cm 5.4pt 0cm 5.4pt'><p align=center style='margin-bottom:0cm;margin-bottom:.0001pt;text-align:center;line-height:normal'>"+ rec.fecha_inicio +"</p></td>";
                tr += "<td width=113 style='width:3.0cm;border-top:none;border-left:none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;padding:0cm 5.4pt 0cm 5.4pt'><p align=center style='margin-bottom:0cm;margin-bottom:.0001pt;text-align:center;line-height:normal'>"+ rec.beneficiados +"</p></td>";
                tr += "<td width=113 style='width:3.0cm;border-top:none;border-left:none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;padding:0cm 0cm 0cm 0cm'><p align=center style='margin-bottom:0cm;margin-bottom:.0001pt;text-align:center;line-height:normal'>"+ rec.cantidad_servicios +"</p></td>";
                tr += "<td width=104 style='width:78.0pt;border-top:none;border-left:none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;padding:0cm 0cm 0cm 0cm'><p align=center style='margin-bottom:0cm;margin-bottom:.0001pt;text-align:center;line-height:normal'>"+ rec.tiempo_servicio +"</p></td>";
                tr += "<td width=104 style='width:77.95pt;border-top:none;border-left:none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;padding:0cm 0cm 0cm 0cm'><p align=center style='margin-bottom:0cm;margin-bottom:.0001pt;text-align:center;line-height:normal'>"+ rec.servicios_tecnicos +"</p></td>";
                tr += "</tr>";
            });
            html = html.replace('{tr}', tr);
            /* Write HTML file */
            CULINARIA.Lib.Fs.writeFile(CULINARIA.Data.Path+'/reports/ReporteServiciosTecnicos.html', html);
            CULINARIA.pdf({
                orientation: "Landscape",
                pageSize: "Letter",
                title: "ReporteServiciosTecnicos"
            });
        } else {
            CULINARIA.View.Msg.question('Atención', 'No Hay datos que mostrar.');
        }
    });
};
