
Ext.define('CULINARIA.controller.ViewportController', {
    extend: 'Ext.app.Controller',

    control: {
        'view-viewport-desktop': { /*resize: "onResize",*/ afterrender: "onAfterRender" },
        'view-viewport-desktop [iconCls=fa fa-power-off]': { click: "onLogout" },
        '#nomencladores-tab': { activate: "onActivate", deactivate: "onDeactivate" },
        '#matricula-tab': { activate: "onActivate", deactivate: "onDeactivate" },
        '#asociados-servicios-tecnicos-tab': { activate: "onActivate", deactivate: "onDeactivate" },
        '#viewport-costo-items': { click: "onClickCostoItem" },
        '#viewport-especialidad-items': { click: "onClickEspecialidadItem" },
        '#viewport-semestre-items': { click: "onClickSemestreItem" },
        '#viewport-curso-tipo-items': { click: "onClickCursoTipoItem" },
        '#viewport-organismo-items': { click: "onClickOrganismoItem" },
        '#viewport-nivel-items': { click: "onClickNivelEscolarItem" },
        '#viewport-tipo-items': { click: "onClickTipoPersonaItem" },
        '#viewport-persona-items': { click: "onClickPersonaItem" },
        '#viewport-profesion-items': { click: "onClickProfesionItem" },
        '#viewport-cuota-items': { click: "onClickAPagarItem" },
        '#viewport-curso-items': { click: "onClickCursoItem" },
        '#viewport-matricula-items': { click: "onClickMatriculaItem" },
        '#viewport-asociados-items': { click: "onClickAsociadoItem" },
        '#viewport-pago-items': { click: "onClickPagoItem" },
        '#viewport-servicios-tecnicos-items': { click: "onClickServiciosTecnicosItem" },
        '#viewport-instalacion-items': { click: "onClickInstalacionItem" },
        '#viewport-asociados-servicios-tecnicos-items': { click: "onClickServiciosTecnicosRealizadosItem" },
        '#save-db': { click: "onClickSaveItem" },
        '#save-as-db': { click: "onClickSaveAsItem" },
        '#help1': { click: "help" },
        '#help2': { click: "help" },
        '#help3': { click: "help" },
        '#help4': { click: "help" }
    },
    onAfterRender: function () {
        CULINARIA.Sequelize.sync({force:false});//{force:true}
    },
    onActivate: function (tab)
    {
        CULINARIA.View.expandPanel(tab.id + '-panel');
    },
    onDeactivate: function (tab)
    {
        CULINARIA.View.setTitlePanel(tab.id +'-panel', '');
        // Eliminar component.
        CULINARIA.View.remove();
        CULINARIA.View.add([{
            xtype: 'image',
            src: 'resources/images/6.jpg',
            width: '25%'
        },{
            xtype: 'image',
            src: 'resources/images/4.jpg',
            width: '25%'
        },{
            xtype: 'image',
            src: 'resources/images/7.jpg',
            width: '25%'
        },{
            xtype: 'image',
            src: 'resources/images/8.jpg',
            width: '25%'
        }]);
        // Update StatusBar.
        CULINARIA.View.updateStatusBar('');
    },
    onLogout: function ()
    {
        CULINARIA.Window.reload();
    },
    // On Costo Click.
    onClickCostoItem: function ()
    {   // Add component to center panel.
        CULINARIA.View.add(Ext.create('CULINARIA.view.costo.CostoGrid'));
        // Add title to center panel.
        CULINARIA.View.setTitlePanel('nomencladores-tab-panel', '<b>Gestionar > Nomencladores > Costo</b>');
        // Collapse panel by ID.
        CULINARIA.View.collapsePanel('nomencladores-tab-panel');
        // Update StatusBar.
        CULINARIA.View.updateStatusBar('Gestionar > Costo');
    },
    // On Especialidad Click.
    onClickEspecialidadItem: function ()
    {   // Add component to center panel.
        CULINARIA.View.add(Ext.create('CULINARIA.view.especialidad.EspecialidadGrid'));
        // Add title to center panel.
        CULINARIA.View.setTitlePanel('nomencladores-tab-panel', '<b>Gestionar > Nomencladores > Especialidad</b>');
        // Collapse panel by ID.
        CULINARIA.View.collapsePanel('nomencladores-tab-panel');
        // Update StatusBar.
        CULINARIA.View.updateStatusBar('Gestionar > Especialidad');
    },
    // On Semestre Click.
    onClickSemestreItem: function ()
    {   // Add component to center panel.
        CULINARIA.View.add(Ext.create('CULINARIA.view.semestre.SemestreGrid'));
        // Add title to center panel.
        CULINARIA.View.setTitlePanel('nomencladores-tab-panel', '<b>Gestionar > Nomencladores > Semestre</b>');
        // Collapse panel by ID.
        CULINARIA.View.collapsePanel('nomencladores-tab-panel');
        // Update StatusBar.
        CULINARIA.View.updateStatusBar('Gestionar > Semestre');
    },
    // On CursoTipo Click.
    onClickCursoTipoItem: function ()
    {   // Add component to center panel.
        CULINARIA.View.add(Ext.create('CULINARIA.view.cursotipo.CursoTipoGrid'));
        // Add title to center panel.
        CULINARIA.View.setTitlePanel('nomencladores-tab-panel', '<b>Gestionar > Nomencladores > Tipo de Curso</b>');
        // Collapse panel by ID.
        CULINARIA.View.collapsePanel('nomencladores-tab-panel');
        // Update StatusBar.
        CULINARIA.View.updateStatusBar('Gestionar > Tipo de Curso ');
    },
    // On Organismo Click.
    onClickOrganismoItem: function ()
    {   // Add component to center panel.
        CULINARIA.View.add(Ext.create('CULINARIA.view.organismo.OrganismoGrid'));
        // Add title to center panel.
        CULINARIA.View.setTitlePanel('nomencladores-tab-panel', '<b>Gestionar > Nomencladores > Organismo</b>');
        // Collapse panel by ID.
        CULINARIA.View.collapsePanel('nomencladores-tab-panel');
        // Update StatusBar.
        CULINARIA.View.updateStatusBar('Gestionar > Organismo ');
    },
    // On NivelEscolar Click.
    onClickNivelEscolarItem: function ()
    {   // Add component to center panel.
        CULINARIA.View.add(Ext.create('CULINARIA.view.nivelescolar.NivelEscolarGrid'));
        // Add title to center panel.
        CULINARIA.View.setTitlePanel('nomencladores-tab-panel', '<b>Gestionar > Nomencladores > Nivel Escolar</b>');
        // Collapse panel by ID.
        CULINARIA.View.collapsePanel('nomencladores-tab-panel');
        // Update StatusBar.
        CULINARIA.View.updateStatusBar('Gestionar > Nivel Escolar');
    },
    // On TipoPersona Click.
    onClickTipoPersonaItem: function ()
    {   // Add component to center panel.
        CULINARIA.View.add(Ext.create('CULINARIA.view.tipopersona.TipoPersonaGrid'));
        // Add title to center panel.
        CULINARIA.View.setTitlePanel('nomencladores-tab-panel', '<b>Gestionar > Nomencladores > Tipo de Persona</b>');
        // Collapse panel by ID.
        CULINARIA.View.collapsePanel('nomencladores-tab-panel');
        // Update StatusBar.
        CULINARIA.View.updateStatusBar('Gestionar > Tipo de Persona');
    },
    // On Persona Click.
    onClickPersonaItem: function ()
    {   // Add component to center panel.
        CULINARIA.View.add(Ext.create('CULINARIA.view.persona.PersonaGrid'));
        // Add title to center panel.
        CULINARIA.View.setTitlePanel('nomencladores-tab-panel', '<b>Gestionar > Nomencladores > Persona</b>');
        // Collapse panel by ID.
        CULINARIA.View.collapsePanel('nomencladores-tab-panel');
        // Update StatusBar.
        CULINARIA.View.updateStatusBar('Gestionar > Persona');
    },
    // On Profesion Click.
    onClickProfesionItem: function ()
    {   // Add component to center panel.
        CULINARIA.View.add(Ext.create('CULINARIA.view.profesion.ProfesionGrid'));
        // Add title to center panel.
        CULINARIA.View.setTitlePanel('nomencladores-tab-panel', '<b>Gestionar > Nomencladores > Profesión</b>');
        // Collapse panel by ID.
        CULINARIA.View.collapsePanel('nomencladores-tab-panel');
        // Update StatusBar.
        CULINARIA.View.updateStatusBar('Gestionar > Profesión');
    },
    // On Asociados-Cuota Click.
    onClickAPagarItem: function ()
    {   // Add component to center panel.
        CULINARIA.View.add(Ext.create('CULINARIA.view.apagar.APagarGrid'));
        // Add title to center panel.
        CULINARIA.View.setTitlePanel('nomencladores-tab-panel', '<b>Gestionar > Nomencladores > Cuota</b>');
        // Collapse panel by ID.
        CULINARIA.View.collapsePanel('nomencladores-tab-panel');
        // Update StatusBar.
        CULINARIA.View.updateStatusBar('Gestionar > Cuota');
    },
    // On Curso Click.
    onClickCursoItem: function ()
    {   // Add component to center panel.
        CULINARIA.View.add(Ext.create('CULINARIA.view.curso.CursoGrid'));
        // Add title to center panel.
        CULINARIA.View.setTitlePanel('matricula-tab-panel', '<b>Gestionar > Cursos</b>');
        // Collapse panel by ID.
        CULINARIA.View.collapsePanel('matricula-tab-panel');
        // Update StatusBar.
        CULINARIA.View.updateStatusBar('Gestionar > Cursos');
    },
    // On Matricula Click.
    onClickMatriculaItem: function ()
    {   // Add component to center panel.
        CULINARIA.View.add(Ext.create('CULINARIA.view.matricula.MatriculaGrid'));
        // Add title to center panel.
        CULINARIA.View.setTitlePanel('matricula-tab-panel', '<b>Gestionar > Matrícula</b>');
        // Collapse panel by ID.
        CULINARIA.View.collapsePanel('matricula-tab-panel');
        // Update StatusBar.
        CULINARIA.View.updateStatusBar('Gestionar > Matrícula');
    },
    // On Asociado Click.
    onClickAsociadoItem: function ()
    {   // Add component to center panel.
        CULINARIA.View.add(Ext.create('CULINARIA.view.asociados.AsociadosGrid'));
        // Add title to center panel.
        CULINARIA.View.setTitlePanel('asociados-servicios-tecnicos-tab-panel', '<b>Gestionar > Asociado</b>');
        // Collapse panel by ID.
        CULINARIA.View.collapsePanel('asociados-servicios-tecnicos-tab-panel');
        // Update StatusBar.
        CULINARIA.View.updateStatusBar('Gestionar > Asociado');
    },
    // On Pago Click.
    onClickPagoItem: function ()
    {   // Add component to center panel.
        CULINARIA.View.add(Ext.create('CULINARIA.view.asociados.AsociadosPagoGrid'));
        // Add title to center panel.
        CULINARIA.View.setTitlePanel('asociados-servicios-tecnicos-tab-panel', '<b>Gestionar > Pago</b>');
        // Collapse panel by ID.
        CULINARIA.View.collapsePanel('asociados-servicios-tecnicos-tab-panel');
        // Update StatusBar.
        CULINARIA.View.updateStatusBar('Gestionar > Pago');
    },
    // On ServiciosTecnicos Click.
    onClickServiciosTecnicosItem: function ()
    {   // Add component to center panel.
        CULINARIA.View.add(Ext.create('CULINARIA.view.serviciostecnicos.ServiciosTecnicosGrid'));
        // Add title to center panel.
        CULINARIA.View.setTitlePanel('nomencladores-tab-panel', '<b>Gestionar > Servicios Técnicos</b>');
        // Collapse panel by ID.
        CULINARIA.View.collapsePanel('nomencladores-tab-panel');
        // Update StatusBar.
        CULINARIA.View.updateStatusBar('Gestionar > Servicios Técnicos');
    },
    // On Instalacion Click.
    onClickInstalacionItem: function ()
    {   // Add component to center panel.
        CULINARIA.View.add(Ext.create('CULINARIA.view.instalacion.InstalacionGrid'));
        // Add title to center panel.
        CULINARIA.View.setTitlePanel('nomencladores-tab-panel', '<b>Gestionar > Instalación</b>');
        // Collapse panel by ID.
        CULINARIA.View.collapsePanel('nomencladores-tab-panel');
        // Update StatusBar.
        CULINARIA.View.updateStatusBar('Gestionar > Instalación');
    },
    onClickServiciosTecnicosRealizadosItem: function ()
    {   // Add component to center panel.
        CULINARIA.View.add(Ext.create('CULINARIA.view.serviciostecnicosrealizados.ServiciosTecnicosRealizadosGrid'));
        // Add title to center panel.
        CULINARIA.View.setTitlePanel('asociados-servicios-tecnicos-tab-panel', '<b>Gestionar > Servicios Técnicos Realizados</b>');
        // Collapse panel by ID.
        CULINARIA.View.collapsePanel('asociados-servicios-tecnicos-tab-panel');
        // Update StatusBar.
        CULINARIA.View.updateStatusBar('Gestionar > Gestionar > Servicios Técnicos Realizados');
    },
    onClickSaveItem: function () {
        var date = new Date(); date = date.getFullYear() +"-"+ date.getMonth() +"-"+ date.getDate() +"_"+ date.getHours() +""+ date.getMinutes() +""+ date.getSeconds();
        var source = CULINARIA.Lib.Fs.createReadStream(require('path').resolve('./resources/sqlite/culinaria.db'));
        var destiny = CULINARIA.Lib.Fs.createWriteStream(require('path').resolve('./database_save/'+ date +'.db'));
        source.pipe(destiny);
        source.on('end', function() {
            CULINARIA.View.Msg.info('Fichero Salvado Correctamente', require('path').resolve('./database_save/'+ date +'.db'));
        });
        source.on('error', function(err) { console.log(err) });
    },
    onClickSaveAsItem: function () {
        function FileDialog(inputId, callback) {
            var fd = this;
            fd.chooser = document.querySelector(inputId);
            fd.chooser.addEventListener("change", function() {
                var path = this.value;
                callback(path);
                fd.chooser.value = '';
            });
            fd.open = function () {
                fd.chooser.click();
            };
            return fd;
        }
        var myFileDialog = new FileDialog('#fileDialog', function (path) {
            //var date = new Date(); date = date.getFullYear() +"-"+ date.getMonth() +"-"+ date.getDate() +"_"+ date.getHours() +""+ date.getMinutes() +""+ date.getSeconds();
            var source = CULINARIA.Lib.Fs.createReadStream(require('path').resolve('./resources/sqlite/culinaria.db'));
            var destiny = CULINARIA.Lib.Fs.createWriteStream(path);

            source.pipe(destiny);
            source.on('end', function() {
                CULINARIA.View.Msg.info('Fichero Salvado Correctamente', path);
            });
            source.on('error', function(err) { console.log(err) });
        });
        myFileDialog.open();
    },
    help: function () {
        Ext.create('Ext.window.Window', {
            title: 'Revisión Escrita (PDF)',
            width: 900,
            height: 600,
            maximizable: true,
            plain: true,
            autoShow: true,
            items: {
                xtype: 'component',
                autoEl: {
                    tag: 'iframe',
                    style: 'height: 100%; width: 100%; border: none',
                    src: "AYUDA.pdf"
                }
            }
        });
    }
});