/**
 * Generic Controller from all grid an form > Actions: Add, Update and Remove.
 */
Ext.define('CULINARIA.controller.BaseController', {
    extend: 'Ext.app.Controller',

    control: {
        /* Costo */
        'costo-grid': { resize: "resize", afterrender: "afterRender", celldblclick: "dblclick" },
        'costo-grid [text=Adicionar]': { click: "showWindows" },
        'costo-grid [text=Eliminar]': { click: "confirm" },
        'costo-form': { afterrender: "afterRenderWindows" },
        'costo-form [text=Salvar]':{ click: "isValid" },
        'costo-form [text=Editar]': { click: "isValid" },
        /* Especialidad */
        'especialidad-grid': { resize: "resize", afterrender: "afterRender", celldblclick: "dblclick" },
        'especialidad-grid [text=Adicionar]': { click: "showWindows" },
        'especialidad-grid [text=Eliminar]': { click: "confirm" },
        'especialidad-form': { afterrender: "afterRenderWindows" },
        'especialidad-form [text=Salvar]':{ click: "isValid" },
        'especialidad-form [text=Editar]': { click: "isValid" },
        /* Semestre */
        'semestre-grid': { resize: "resize", afterrender: "afterRender", celldblclick: "dblclick" },
        'semestre-grid [text=Adicionar]': { click: "showWindows" },
        'semestre-grid [text=Eliminar]': { click: "confirm" },
        'semestre-form': { afterrender: "afterRenderWindows" },
        'semestre-form [text=Salvar]':{ click: "isValid" },
        'semestre-form [text=Editar]': { click: "isValid" },
        /* Semestre */
        'tipo-curso-grid': { resize: "resize", afterrender: "afterRender", celldblclick: "dblclick" },
        'tipo-curso-grid [text=Adicionar]': { click: "showWindows" },
        'tipo-curso-grid [text=Eliminar]': { click: "confirm" },
        'tipo-curso-form': { afterrender: "afterRenderWindows" },
        'tipo-curso-form [text=Salvar]':{ click: "isValid" },
        'tipo-curso-form [text=Editar]': { click: "isValid" },
        /* Organismo */
        'organismo-grid': { resize: "resize", afterrender: "afterRender", celldblclick: "dblclick" },
        'organismo-grid [text=Adicionar]': { click: "showWindows" },
        'organismo-grid [text=Eliminar]': { click: "confirm" },
        'organismo-form': { afterrender: "afterRenderWindows" },
        'organismo-form [text=Salvar]':{ click: "isValid" },
        'organismo-form [text=Editar]': { click: "isValid" },
        /* TipoPersona */
        'nivel-escolar-grid': { resize: "resize", afterrender: "afterRender", celldblclick: "dblclick" },
        'nivel-escolar-grid [text=Adicionar]': { click: "showWindows" },
        'nivel-escolar-grid [text=Eliminar]': { click: "confirm" },
        'nivel-escolar-form': { afterrender: "afterRenderWindows" },
        'nivel-escolar-form [text=Salvar]':{ click: "isValid" },
        'nivel-escolar-form [text=Editar]': { click: "isValid" },
        /* TipoPersona */
        'persona-tipo-grid': { resize: "resize" },
        /* Persona */
        'persona-grid': { resize: "resize", afterrender: "afterRender", celldblclick: "dblclick" },
        'persona-grid [text=Adicionar]': { click: "showWindows" },
        'persona-grid [text=Eliminar]': { click: "confirm" },
        'persona-form': { afterrender: "afterRenderWindows" },
        'persona-form [text=Salvar]': { click: "isValid" },
        'persona-form [text=Editar]': { click: "isValid" },
        /* Profesion */
        'profesion-grid': { resize: "resize", afterrender: "afterRender", celldblclick: "dblclick" },
        'profesion-grid [text=Adicionar]': { click: "showWindows" },
        'profesion-grid [text=Eliminar]': { click: "confirm" },
        'profesion-form': { afterrender: "afterRenderWindows" },
        'profesion-form [text=Salvar]': { click: "isValid" },
        'profesion-form [text=Editar]': { click: "isValid" },
        /* Asociados-Cuota */
        'asociados-cuota-grid': { resize: "resize", afterrender: "afterRender", celldblclick: "dblclick" },
        'asociados-cuota-grid [text=Adicionar]': { click: "showWindows" },
        'asociados-cuota-grid [text=Eliminar]': { click: "confirm" },
        'asociados-cuota-form': { afterrender: "afterRenderWindows" },
        'asociados-cuota-form [text=Salvar]': { click: "isValid" },
        'asociados-cuota-form [text=Editar]': { click: "isValid" },
        /* Curso */
        'curso-grid': { resize: "resize", afterrender: "afterRender", celldblclick: "dblclick" },
        'curso-grid [text=Adicionar]': { click: "showWindows" },
        'curso-grid [text=Eliminar]': { click: "confirm" },
        'curso-form': { afterrender: "afterRenderWindows" },
        'curso-form [text=Salvar]': { click: "isValid" },
        'curso-form [text=Editar]': { click: "isValid" },
        /* Matricula */
        'matricula-grid': { resize: "resize", afterrender: "afterRender", celldblclick: "dblclick" },
        'matricula-grid [text=Adicionar]': { click: "showWindows" },
        'matricula-grid [text=Eliminar]': { click: "confirm" },
        'matricula-form': { afterrender: "afterRenderWindows" },
        'matricula-form [text=Salvar]': { click: "isValid" },
        'matricula-form [text=Editar]': { click: "isValid" },
        /* ServiciosTecnicos */
        'servicios-tecnicos-grid': { resize: "resize", afterrender: "afterRender", celldblclick: "dblclick" },
        'servicios-tecnicos-grid [text=Adicionar]': { click: "showWindows" },
        'servicios-tecnicos-grid [text=Eliminar]': { click: "confirm" },
        'servicios-tecnicos-form': { afterrender: "afterRenderWindows" },
        'servicios-tecnicos-form [text=Salvar]': { click: "isValid" },
        'servicios-tecnicos-form [text=Editar]': { click: "isValid" },
        /* Instalación */
        'instalacion-grid': { resize: "resize", afterrender: "afterRender", celldblclick: "dblclick" },
        'instalacion-grid [text=Adicionar]': { click: "showWindows" },
        'instalacion-grid [text=Eliminar]': { click: "confirm" },
        'instalacion-form': { afterrender: "afterRenderWindows" },
        'instalacion-form [text=Salvar]': { click: "isValid" },
        'instalacion-form [text=Editar]': { click: "isValid" },
        /* servicios-tecnicos-realizados */
        'servicios-tecnicos-realizados-grid': { resize: "resize", afterrender: "afterRender", celldblclick: "dblclick" },
        'servicios-tecnicos-realizados-grid [text=Adicionar]': { click: "showWindows" },
        'servicios-tecnicos-realizados-grid [text=Eliminar]': { click: "confirm" },
        'servicios-tecnicos-realizados-form': { afterrender: "afterRenderWindows" },
        'servicios-tecnicos-realizados-form [text=Salvar]': { click: "isValid" },
        'servicios-tecnicos-realizados-form [text=Editar]': { click: "isValid" },

        /* Asociados Pago */
        'grid-asociados-pago': { resize: "resize" },
        /**/
        'grid-pagos-pendientes': { resize: "resize" },
        /* Matricula */
        'grid-asociados': { resize: "resize" },
    },
    /* Methods */
    resize: function (grid)
    {
        grid.setHeight(CULINARIA.View.getHeight('south-panel-id', 102));
    },
    afterRender: function (grid)
    {
        this.grid = grid;
        this.store = grid.getStore();
        this.modelName = grid.modelName;
    },
    afterRenderWindows: function (win)
    {
        this.win = win;
        this.form = win.down('form');
    },
    /* Used in Add and Update > Is valid form? */
    isValid: function (btn) {
        if (this.form.getForm().isValid()){
            var record = this.form.getValues(true, true);
            /* On Add action */
            if (btn.text === "Salvar"){
                this.add(record, this.form.getForm(), this.store);
            } /* On Edit action */
            else {
                this.update(record, this.store, this.win);
            }
        } else {
            CULINARIA.View.Msg.question('Atención', '<b><span style="color:red;">Formulario no válido</span></b>, verifique las casillas en <b><span style="color:red;">rojo</span></b>.');
        }
    },
    /* Add */
    showWindows: function () {
        var title = this.modelName;

        if (this.modelName === "NivelEscolar") {
            title = "nivel escolar";
        } if (this.modelName === "ServiciosTecnicos") {
            title = "servicios técnicos";
        } if (this.modelName === "ServiciosTecnicosRealizados") {
            title = "servicios técnicos realizados";
        } if (this.modelName === "APagar") {
            title = "pago";
        } if (this.modelName === "Profesion") {
            title = "profesión";
        } if (this.modelName === "CursoTipo") {
            title = "tipo de curso";
        } if (this.modelName === "Instalacion") {
            title = "instalación";
        } if (this.modelName === "Matricula") {
            title = "matrícula";
        }
        Ext.create('CULINARIA.view.'+this.modelName.toLowerCase()+'.'+this.modelName+'Form',{autoShow:true,btnText:'Salvar',
            title:'Adicionar '+ title });
    },
    add: function (string, form, store) {
        /* string = "key=value&key=value&key=value....n" */
        var record = string.split('&');/* record = [key=value, key=value, key=value, ..., n] */
        /* object > String */
        var object = 'CULINARIA.Model.'+this.modelName+'.create({';
        /* Prepared key an value by Model.create > Ej: CULINARIA.Model.NAME.create({ key: 'value'}) */
        for (var i = 0; i < record.length; i++) {
            var array = record[i].split('='), split = array[1].split("%20"), value = '';
            /* Deleting "%20" > value from encoding */
            split.forEach(function(v){ value += v.concat(' '); });
            /* object += "key:'value'" */
            object += array[0] +':\''+ decodeURIComponent(value.trim()) +'\'';
            /* Add "," */
            if (record.length != i+1) {
                object += ',';
            }
        }
        object += '}).then(function(){CULINARIA.View.toast(\'Creación OK\',\'Operación realizada exitosamente.\');form.reset();store.load();}).';
        object += 'catch(function(error){console.log(error);console.log(error.message);if(error.message==="Validation error"){';
        object += 'CULINARIA.View.Msg.question(\'Atención\',\'Estos datos ya existen en la <b>Base de Datos</b>.\');}else{';
        object += 'CULINARIA.View.Msg.error(\'Error\',error.toString());console.log(error);}});';
        /* Write JS code from string */
        console.log(object);
        eval(object);
    },
    /* Update */
    dblclick: function (view, td, cellIndex, record, tr, rowIndex)
    {
        var title = this.modelName;

        if (this.modelName === "NivelEscolar") {
            title = "nivel escolar";
        } if (this.modelName === "ServiciosTecnicos") {
            title = "servicios técnicos";
        } if (this.modelName === "ServiciosTecnicosRealizados") {
            title = "servicios técnicos realizados";
        } if (this.modelName === "APagar") {
            title = "pago";
        } if (this.modelName === "Profesion") {
            title = "profesión";
        } if (this.modelName === "CursoTipo") {
            title = "tipo de curso";
        } if (this.modelName === "Instalacion") {
            title = "instalación";
        } if (this.modelName === "Matricula") {
            title = "matrícula";
        }
        var win = Ext.create('CULINARIA.view.'+this.modelName.toLowerCase()+'.'+this.modelName+'Form',{btnText:'Editar',title:'Editar '+ title });
        var form = win.down('form');
        var fields = record.getFields(), nameIds = [], string = '', me = this;
        /* Load data */
        form.loadRecord(record);
        /* Find combobox if exist and set value */
        fields.forEach(function(field){
            var fk = field.name.split('_id');
            if (fk.length === 2) {
                var combo = form.down('[name='+field.name+']');
                combo.setValue(me.findValue(field.name,record.get(field.name)));
                /* Get ids and save */
                nameIds.push([ fk[0]+'Id', record.get(field.name) ]);
            }
        });
        /* Save FK */
        nameIds.forEach(function(id){
            string += "win."+id[0]+"="+id[1]+";";
        });
        console.log(string);
        eval(string);
        /* Show Windows */
        win.show();
    },
    update: function (string, store, win)
    {   /* string = "key=value&key=value&key=value....n" */
        /* string.split('&') = [key=value, key=value, key=value, ..., n] */
        var record = string.split('&'), id;
        /* object > String */
        var object = 'CULINARIA.Model.'+this.modelName+'.update({';
        /* Prepared key an value by Model.create > Ej: CULINARIA.Model.NAME.update({ key: 'value'}) */
        for (var i = 0; i < record.length; i++) {
            var array = record[i].split('='), name = array[0].split('_id'), split = array[1].split("%20"), value = '';
            /* Deleting "%20" > value from encoding */
            split.forEach(function(v){ value += v.concat(' '); });
            /* object += "key:'value'" */
            if (array[0] !== 'id' && name.length === 1) {
                object += array[0] +':\''+ decodeURIComponent(value.trim()) +'\'';
            }
            else if (array[0] === 'id') {
                id = value;
            } else {
                object += array[0] +':\''+ eval("win."+name[0]+"Id") +'\'';
            }
            /* Add "," */
            if (record.length != i+2) {
                object += ',';
            }
        }
        object += '},{where:{id:'+id+'}}).then(function(){CULINARIA.View.toast(\'Actualización OK\',\'Operación realizada exitosamente.\');';
        object += 'store.load();win.close();}).catch(function(error){if(error.message==="Validation error"){';
        object += 'CULINARIA.View.Msg.question(\'Atención\',\'Estos datos ya existen en la <b>Base de Datos</b>.\');';
        object += '}else{CULINARIA.View.Msg.error(\'Error\',error.toString());console.log(error);}});';
        /* Write JS code from string */
        eval(object);
    },
    /* Remove */
    confirm: function ()
    {
        if (this.grid.selModel.getCount() >= 1) {
            Ext.MessageBox.confirm('Confirmación', 'Desea eliminar los registro seleccionado?', this.remove, this);
        } else {
            CULINARIA.View.Msg.question('Atención', 'Seleccione el o los registro que desea eliminar.');
        }
    },
    remove: function (confirm)
    {
        var me = this;

        if (confirm === 'yes')
        {
            Ext.Array.each(me.grid.selModel.getSelection(), function (row)
            {
                eval('CULINARIA.Model.'+me.modelName+'.destroy({where:{id:row.get(\'id\')}})');
            });
            me.grid.store.load();
        }
    },
    /* Find value in the grid by one value */
    findValue: function (key, id)
    {
        var record = this.store.findRecord(key, id), name = key.split('_id');
        return record.get(name[0]);
    }
});