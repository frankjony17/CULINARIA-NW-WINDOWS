
Ext.define('CULINARIA.controller.AsociadosController', {
    extend: 'Ext.app.Controller',

    control: {
        'grid-asociados-pago': {
            afterrender: "afterRenderPago",
            edit: "editPagoPendiente",
            cuotaActionClick: "cuotaActionClick"
        },
        'grid-pagos-pendientes': {
            edit: "editPagoPendiente"
        },
        /* ASOCIADOS */
        'grid-asociados': {
            celldblclick: "celldblclick",
            afterrender: "afterRenderAsociados"
        },
        'grid-asociados [text=Adicionar]': { click: "showWindowAsociados" },
        'grid-asociados [text=Eliminar]': { click: "confirmAsociados" },
        'asociados-form': { afterrender: "afterRenderWindowAsociados" },
        'asociados-form [text=Salvar]': { click: "isValidAsociados" },
        'asociados-form [text=Editar]': { click: "isValidAsociados" },
        'asociados-edit-form [text=Editar]': { click: "isValidEditAsociados" },
    },
    afterRenderPago: function (grid) {
        this.grid = grid;
        this.store = grid.getStore();
    },
    cuotaActionClick: function (record) {
        this.record = record;
        if (record.get('pendientePago') > 0) {
            this.grid = Ext.create('CULINARIA.view.asociados.PagosPendientesGrid');
            this.loadStorePago(record);
            this.win = Ext.create('Ext.window.Window', {
                title: 'Pagos pendientes',
                items: this.grid,
                modal: true,
                height: 400
            });
            this.win.show();
        }
    },
    /* EDIT-PAGOS-PENDIENTES */
    editPagoPendiente: function (editor, context, eOpts) {
        var me = this, d = new Date(), record = context.record;
        CULINARIA.Model.AsociadosPago.update({
            fechaPago: d.getFullYear() +"-"+ d.getMonth() +"-"+ d.getDate()
        },{
            where: { id: record.get('id') }
        }).then(function () {
            me.store.reload();
            me.win.close();
        }).catch(function (error) {
            CULINARIA.ERROR(error);
        });
        Ext.toast('Operación realizada exitosamente.', 'Actualización OK');

    },
    loadStorePago: function (record) {
        var data = [], me = this;
        CULINARIA.Model.AsociadosPago.findAll({
            where: { asociado_id: record.get('id'), fechaPago: 0 },
            include: [{
                model: CULINARIA.Model.APagar
            }]
        }).then(function (pago) {
            pago.forEach(function(p){
                data.push({
                    id: p.id,
                    mes: me.getMonth(p.mes),
                    cuota: p.APagar.cuota,
                    talonario: p.talonario,
                    estado: true
                });
            });
            me.grid.getStore().loadData(data);
        });
    },
    /* ASOCIADOS */
    afterRenderAsociados: function (grid) {
        this.gridAsociados = grid;
        this.storeAsociados = grid.getStore();
    },
    afterRenderWindowAsociados: function (win) {
        this.winAsociados = win;
        this.formAsociados = win.down('form');
    },
    showWindowAsociados: function () {
        Ext.create('CULINARIA.view.asociados.AsociadosForm',{
            autoShow: true,
            btnText: 'Salvar',
            title: 'Adicionar Asociado'
        });
    },
    celldblclick: function (view, td, cellIndex, record) {
        var win = Ext.create('CULINARIA.view.asociados.AsociadosEditForm', {
                btnText: 'Editar',
                title: 'Editar asociado (Observación)'
            }),
            form = win.down('form');
        form.loadRecord(record);
        win.show();
    },
    isValidAsociados: function () {
        if (this.formAsociados.getForm().isValid()){
            this.add(this.formAsociados.getValues(), this.formAsociados.getForm(), this.storeAsociados);
        } else {
            CULINARIA.View.Msg.question('Atención', '<b><span style="color:red;">Formulario no válido</span></b>, verifique las casillas en <b><span style="color:red;">rojo</span></b>.');
        }
    },
    isValidEditAsociados: function (btn) {
        var win = btn.up('window'), form = win.down('form');
        if (form.getForm().isValid()){
            this.update(form.getForm().getValues(), win);
        } else {
            CULINARIA.View.Msg.question('Atención', '<b><span style="color:red;">Formulario no válido</span></b>, verifique las casillas en <b><span style="color:red;">rojo</span></b>.');
        }
    },
    add: function (record, form, store) {
        var d = new Date(), me = this;
        CULINARIA.Model.Asociados.findAll({
            where: { persona_id: record['nombre_apellidos'] }
        }).then(function (asociado) {
            if (asociado.length === 0) {
                CULINARIA.Model.Asociados.create({
                    fechaAsociacion: d.getFullYear() + "-" + (d.getMonth() + 1) + "-" + d.getDate(),
                    observaciones: record['observaciones'],
                    persona_id: record['nombre_apellidos']
                }).then(function (asociado) {
                    CULINARIA.Model.APagar.find().then(function (a_pagar) {
                        for (var i = (d.getMonth() + 1); i <= 12; i++) {
                            CULINARIA.Model.AsociadosPago.create({
                                mes: i,
                                fechaPago: 0,
                                asociado_id: asociado.id,
                                a_pagar_id: a_pagar.id
                            }).then(function () {
                                store.reload();
                            })
                        }
                    });
                    me.winAsociados.close();
                }).catch(function (error) {
                    CULINARIA.ERROR(error);
                });
            } else {
                CULINARIA.View.Msg.question('Atención', 'Esta persona ya está asociada!!!');
            }
        }).catch(function () {
            CULINARIA.View.Msg.question('Atención', 'Esta persona ya está asociada!!!');
        });
    },
    update: function (record, win) {
        var me = this;
        CULINARIA.Model.Asociados.update({
            observaciones: record['observaciones']
        },{
            where: { id: record['id'] }
        }).then(function () {
            me.storeAsociados.reload();
            win.close();
        }).catch(function (error) {
            CULINARIA.ERROR(error);
        });
    },
    confirmAsociados: function () {
        if (this.gridAsociados.selModel.getCount() >= 1) {
            Ext.MessageBox.confirm('Confirmación', 'Desea eliminar los registro seleccionado?', this.remove, this);
        } else {
            CULINARIA.View.Msg.question('Atención', 'Seleccione el o los registro que desea eliminar.');
        }
    },
    remove: function (confirm) {
        var me = this;
        if (confirm === 'yes') {
            Ext.Array.each(me.gridAsociados.selModel.getSelection(), function (row) {
                CULINARIA.Model.Asociados.destroy({
                    where: { id:row.get('id') }
                });
            });
            me.storeAsociados.load();
        }
    },
    getMonth: function (m) {
        var mes;
        switch (m) {
            case 1:
                mes = 'Enero';
                break;
            case 2:
                mes = 'Febrero';
                break;
            case 3:
                mes = 'Marzo';
                break;
            case 4:
                mes = 'Abril';
                break;
            case 5:
                mes = 'Mayo';
                break;
            case 6:
                mes = 'Junio';
                break;
            case 7:
                mes = 'Julio';
                break;
            case 8:
                mes = 'Agosto';
                break;
            case 9:
                mes = 'Septiembre';
                break;
            case 10:
                mes = 'Octubre';
                break;
            case 11:
                mes = 'Noviembre';
                break;
            case 12:
                mes = 'Diciembre';
                break;
        }
        return mes;
    }
});