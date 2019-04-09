
Ext.define('CULINARIA.controller.MatriculaController', {
    extend: 'Ext.app.Controller',

    control: {
        'matricula-grid': {
            afterrender: "afterRender",
            itemcontextmenu: "itemcontextmenu"
        },
        '#viewport-reporte-modelo-1-a': {
            click: "pdfWin"
        },
        '#viewport-reporte-curso': {
            click: "pdfWinCurso"
        },
        '#viewport-reporte-matricula': {
            click: "pdfWinMatricula"
        },
        '#viewport-reporte-servicios-tecnicos': {
            click: "pdfWinServiciosTecnicos"
        },
        '#pdf-win-1': {
            click: "pdf"
        },
        '#pdf-win-2': {
            click: "pdfCurso"
        },
        '#pdf-win-3': {
            click: "pdfMatricula"
        },
        '#pdf-win-4': {
            click: "pdfServiciosTecnicos"
        },
        '#viewport-reporte-graduados-o-no': {
            click: "winGraduados"
        },
        '#pdf-win-10': {
            click: "pdfGraduadosONo"
        }
    },
    afterRender: function (grid) {
        this.store = grid.getStore();
    },
    itemcontextmenu: function (view, record, item, index, e) {
        this.record = record;
        var me = this, menu = Ext.create('Ext.menu.Menu', {
            width: 300,
            closeAction: 'destroy',
            items: [{
                text: 'Asignar <b>(Nota)</b>)',
                iconCls: 'nota',
                menu: [{
                    text: '1 punto.',
                    punto: 1,
                    me: me,
                    handler: me.addNota
                },{
                    text: '2 punto.',
                    punto: 2,
                    me: me,
                    handler: me.addNota
                },{
                    text: '3 punto.',
                    punto: 3,
                    me: me,
                    handler: me.addNota
                },{
                    text: '4 punto.',
                    punto: 4,
                    me: me,
                    handler: me.addNota
                },{
                    text: '5 punto.',
                    punto: 5,
                    me: me,
                    handler: me.addNota
                }]
            }]
        });
        menu.showAt(e.getXY());
        e.stopEvent();
    },
    addNota: function (item) {
        var me = item.me;
        CULINARIA.Model.Matricula.update({
            evaluacion: item.punto
        },{
            where: { id: me.record.get('id') }
        }).then(function () {
            me.store.load();
        }).catch(function (error) {
            CULINARIA.ERROR(error);
        });
    },
    /* PDF */
    pdfWin: function () {
        Ext.create('CULINARIA.view.matricula.ReporteForm');
    },
    pdfWinCurso: function () {
        Ext.create('CULINARIA.view.curso.ReporteForm');
    },
    pdfWinMatricula: function () {
        Ext.create('CULINARIA.view.curso.ReporteForm2');
    },
    pdfWinServiciosTecnicos: function () {
        Ext.create('CULINARIA.view.serviciostecnicosrealizados.ReporteForm3');
    },
    pdf: function () {
        var sem = Ext.getCmp('combo-semestre-id').getValue(),
            dat = Ext.getCmp('date-year-id').getValue(),
            date = new Date(dat);

        if (sem && dat) {
            CULINARIA.Repository.Matricula.loadReporte1(sem, date.getFullYear(), 'reports/BASE/ReporteMatriculaBase.html');
        } else {
            CULINARIA.View.Msg.question('Atención', 'Seleccione fecha y semestre.');
        }
    },
    pdfCurso: function () {
        var desde = Ext.getCmp('date-year-1').getValue(),
            hasta = Ext.getCmp('date-year-2').getValue();

        if (desde && hasta) {
            if (desde.getMonth() < 10) {
                var m1 = "0"+ (desde.getMonth() +1);
            } else {
                m1 = (desde.getMonth() + 1);
            }
            if (hasta.getMonth() < 10) {
                var m2 = "0"+ (hasta.getMonth() + 1);
            } else {
                m2 = (hasta.getMonth() + 1);
            }
            if (desde.getDate() < 10) {
                var d1 = "0"+ desde.getDate();
            } else {
                d1 = desde.getDate();
            }
            if (hasta.getDate() < 10) {
                var d2 = "0"+ hasta.getDate();
            } else {
                d2 = hasta.getDate();
            }
            desde = desde.getFullYear() +"-"+ m1 +"-"+ d1;
            hasta = hasta.getFullYear() +"-"+ m2 +"-"+ d2;
            CULINARIA.Repository.Curso.loadReporte(desde, hasta, 'reports/BASE/ReporteCursoBase.html');
        } else {
            CULINARIA.View.Msg.question('Atención', 'Seleccione un periodo de tiempo.');
        }
    },
    pdfMatricula: function () {
        var desde = Ext.getCmp('date-year-1').getValue(),
            hasta = Ext.getCmp('date-year-2').getValue();

        if (desde && hasta) {
            if (desde.getMonth() < 10) {
                var m1 = "0"+ (desde.getMonth() +1);
            } else {
                m1 = (desde.getMonth() + 1);
            }
            if (hasta.getMonth() < 10) {
                var m2 = "0"+ (hasta.getMonth() + 1);
            } else {
                m2 = (hasta.getMonth() + 1);
            }
            if (desde.getDate() < 10) {
                var d1 = "0"+ desde.getDate();
            } else {
                d1 = desde.getDate();
            }
            if (hasta.getDate() < 10) {
                var d2 = "0"+ hasta.getDate();
            } else {
                d2 = hasta.getDate();
            }
            desde = desde.getFullYear() +"-"+ m1 +"-"+ d1;
            hasta = hasta.getFullYear() +"-"+ m2 +"-"+ d2;
            CULINARIA.Repository.Curso.loadReporteMatricula(desde, hasta, 'reports/BASE/ReporteCursoMatriculadosBase.html');
        } else {
            CULINARIA.View.Msg.question('Atención', 'Seleccione un periodo de tiempo.');
        }
    },
    pdfServiciosTecnicos: function () {
        var desde = Ext.getCmp('date-year-1').getValue(),
            hasta = Ext.getCmp('date-year-2').getValue();

        if (desde && hasta) {
            if (desde.getMonth() < 10) {
                var m1 = "0"+ (desde.getMonth() +1);
            } else {
                m1 = (desde.getMonth() + 1);
            }
            if (hasta.getMonth() < 10) {
                var m2 = "0"+ (hasta.getMonth() + 1);
            } else {
                m2 = (hasta.getMonth() + 1);
            }
            if (desde.getDate() < 10) {
                var d1 = "0"+ desde.getDate();
            } else {
                d1 = desde.getDate();
            }
            if (hasta.getDate() < 10) {
                var d2 = "0"+ hasta.getDate();
            } else {
                d2 = hasta.getDate();
            }
            desde = desde.getFullYear() +"-"+ m1 +"-"+ d1;
            hasta = hasta.getFullYear() +"-"+ m2 +"-"+ d2;
            CULINARIA.Repository.Curso.loadReporteServiciosTecnicos(desde, hasta, 'reports/BASE/ReporteServiciosTecnicosBase.html');
        } else {
            CULINARIA.View.Msg.question('Atención', 'Seleccione un periodo de tiempo.');
        }
    },

    winGraduados: function () {
        Ext.create('CULINARIA.view.curso.ReporteForm3');
    },
    pdfGraduadosONo: function () {
        var desde = Ext.getCmp('graduados-date-year-1').getValue(),
            hasta = Ext.getCmp('graduados-date-year-2').getValue();

        if (desde && hasta) {
            if (desde.getMonth() < 10) {
                var m1 = "0"+ (desde.getMonth() +1);
            } else {
                m1 = (desde.getMonth() + 1);
            }
            if (hasta.getMonth() < 10) {
                var m2 = "0"+ (hasta.getMonth() + 1);
            } else {
                m2 = (hasta.getMonth() + 1);
            }
            if (desde.getDate() < 10) {
                var d1 = "0"+ desde.getDate();
            } else {
                d1 = desde.getDate();
            }
            if (hasta.getDate() < 10) {
                var d2 = "0"+ hasta.getDate();
            } else {
                d2 = hasta.getDate();
            }
            desde = desde.getFullYear() +"-"+ m1 +"-"+ d1;
            hasta = hasta.getFullYear() +"-"+ m2 +"-"+ d2;
            CULINARIA.Repository.Matricula.loadReporte2(desde, hasta, 'reports/BASE/GraduadosBase.html');
        } else {
            CULINARIA.View.Msg.question('Atención', 'Seleccione un periodo de tiempo.');
        }
    }
});