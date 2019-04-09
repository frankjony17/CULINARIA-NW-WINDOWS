
Ext.define('CULINARIA.controller.AdminController', {
    extend: 'Ext.app.Controller',

    control: {
        'admin-viewport-desktop': {
            afterrender: "onAfterRenderViewport"
        },
        'admin-viewport-desktop [text=Usuarios]': {
            click: "showUserGrid"
        },
        'admin-viewport-desktop [iconCls=fa fa-power-off]': {
            click: "onLogout"
        },
        // Grid.
        'user-grid': {
            resize: "onResize",
            afterrender: "onAfterRender",
            celldblclick: "celldblclick",
            itemcontextmenu: "contextMenu"
        },
        'user-grid [text=Adicionar]': {
            click: "showUserWindows"
        },
        'user-grid [text=Eliminar]': {
            click: "onRemoveUser"
        },
        // Form user.
        'user-form [text=Salvar]': {
            click: "onAddUser"
        },
        'user-edit-form [text=Editar]': {
            click: "editUser"
        },
        // Form Password.
        'password-form [text=Salvar]': {
            click: "changePassword"
        },
        // Login Viewport.
        '#login-viewport-center-panel': {
            resize: "onResizeLoginWindows"
        },
        'form-login': {
            afterrender: "onAfterRenderLoginForm"
        },
        'form-login [name=login-button]': {
            click: "onLoginClick"
        },
        '#login-textfield-usuario': {
            specialkey: "specialkeyUsuarioText"
        },
        '#login-textfield-password': {
            specialkey: "specialkeyPasswordText"
        }
    },
    onAfterRenderViewport: function () {
        CULINARIA.Sequelize.sync({ force: false });
    },
    onLogout: function () {
        CULINARIA.Window.reload();
    },
    showUserGrid: function ()
    {   // Add component to center panel.
        CULINARIA.View.add(Ext.create('CULINARIA.view.admin.UserGrid'));
        // Add title to center panel.
        CULINARIA.View.setTitlePanel('admin-tab-panel', '<b>Gestionar > Usuarios</b>');
        // Collapse panel by ID.
        CULINARIA.View.collapsePanel('admin-tab-panel');
        // Update StatusBar.
        CULINARIA.View.updateStatusBar('Gestionar > Usuarios');
    },
    onResize: function (grid) {
        grid.setHeight(CULINARIA.View.getHeight('south-panel-id', 49));
    },
    onAfterRender: function (grid) {
        this.grid = grid;
        this.store = grid.getStore();
    },
    loadStore: function () {
        this.store.load();
    },
    celldblclick: function (view, td, cellIndex, record, tr, rowIndex) {
        var win = Ext.create('CULINARIA.view.admin.UserEditForm'),
            form = win.down('form');
        form.loadRecord(record);
        win.show();
    },
    contextMenu: function (view, record, item, index, e, eOpts) {
        var me = this, menu = Ext.create('Ext.menu.Menu', {
            items: [{
                text: 'Cambiar <b>contraseña</b>',
                icon: 'app/resources/images/pass.png',
                userId: record.id,
                handler: me.onChangePassword
            }]
        });
        menu.showAt(e.getXY())
    },
    onChangePassword: function (item) {
        Ext.create('CULINARIA.view.admin.PasswordForm', { userId: item.userId });
    },
    changePassword: function (btn) {
        var me = this, win = btn.up('window'), form = win.down('form'), record = form.getValues();
        if (this.isValidUserForm(form, record)) {
            CULINARIA.Model.User.update({
                password: CULINARIA.Lib.Bcrypt.hashSync(record['password1'], 8)
            },{
                where: { id: win.userId }
            }).then(function () {
                me.loadStore();
            }).catch(function (error) {
                CULINARIA.ERROR(error);
            });
            win.close();
        }
    },
    editUser: function (btn) {
        var me = this, win = btn.up('window'), form = win.down('form'), record = form.getValues();
        if (form.getForm().isValid()) {
            CULINARIA.Model.User.update({
                username: record['username'],
                fullName: record['fullName']
            },{
                where: { id: record['id'] }
            }).then(function () {
                me.loadStore();
            }).catch(function (error) {
                CULINARIA.ERROR(error);
            });
            win.close();
        } else {
            CULINARIA.View.Msg.question('Atención', '<b><span style="color:red;">Formulario no válido</span></b>, verifique las casillas en <b><span style="color:red;">rojo</span></b>.');
        }
    },
    showUserWindows: function () {
        Ext.create('CULINARIA.view.admin.UserForm');
    },
    onAddUser: function (btn) {
        var me = this, win = btn.up('window'), form = win.down('form'), record = form.getValues();
        if (this.isValidUserForm(form, record)){
            CULINARIA.Model.User.create({
                username: record['username'],
                password: CULINARIA.Lib.Bcrypt.hashSync(record['password1'], 8),
                fullName: record['fullName']
            }).then(function () {
                me.loadStore();
            }).catch(function (error) {
                CULINARIA.ERROR(error);
            });
            win.close();
        }
    },
    isValidUserForm: function (form, record) {
        var pass1 = form.down('[name=password1]'), pass2 = form.down('[name=password2]');
        if (form.getForm().isValid()) {
            if (record['password1'] !==  record['password2']) {
                pass1.setValue();
                pass2.setValue();
                CULINARIA.View.Msg.error('Las contraseñas no coinciden', 'Vuelva a escribir las contraseñas en los dos cuadros de texto.');
            } else {
                return true;
            }
        } else {
            CULINARIA.View.Msg.question('Atención', '<b><span style="color:red;">Formulario no válido</span></b>, verifique las casillas en <b><span style="color:red;">rojo</span></b>.');
        }
    },
    onRemoveUser: function () {
        var me = this;
        if (me.grid.selModel.getCount() === 1) {
            Ext.MessageBox.confirm('Confirmación', 'Desea eliminar el registro seleccionado?', me.removeUser, me);
        } else if (me.grid.selModel.getCount() > 1) {
            Ext.MessageBox.confirm('Confirmación', 'Desea eliminar los registros seleccionados?', me.removeUser, me);
        } else {
            CULINARIA.View.Msg.question('Atención', 'Seleccione el o los registro que desea eliminar.');
        }
    },
    removeUser: function (confirm) {
        var me = this;
        if (confirm === 'yes') {
            Ext.Array.each(me.grid.selModel.getSelection(), function (row) {
                if (row.get('username') !== 'admin') {
                    CULINARIA.Model.User.destroy({ where:{ id: row.get('id') } });
                } else {
                    CULINARIA.View.Msg.question('Atención', 'El usuario <b>"admin" > (Administrador)</b> no puede ser eliminado por usted.<br>Consulte al administrador del sitema: <b>frank.ricardo@etecsa.cu</b>');
                }
            });
            me.loadStore();
        }
    },
    /* LOGIN */
    onAfterRenderLoginForm: function (win) {
        this.loginForm = win.down('form');
        this.loginWindow = win;
    },
    onResizeLoginWindows: function (centerPanel, width){
        this.loginWindow.setPosition((width/2)-(this.loginWindow.getWidth()/2), 200);
    },
    onLoginClick: function () {
        if (this.loginForm.isValid()) {
            var fieldUser = this.loginForm.down('[fieldLabel=Usuario]'),
                fieldPass = this.loginForm.down('[inputType=password]');
            this.check(fieldUser, fieldPass);
        } else {
            CULINARIA.View.Msg.error('Formulario no válido', 'Verifique las casillas en <b><span style="color:red;"><u>rojo</u>.</span></b>');
        }
    },
    specialkeyUsuarioText: function (field, e) {
        if (e.getKey() === e.ENTER) {
            var pass = Ext.getCmp('login-textfield-password');
            pass.focus(50, true);
        }
    },
    specialkeyPasswordText: function (field, e) {
        if (e.getKey() === e.ENTER) {
            this.onLoginClick();
        }
    },
    /* CHECK PASSWORD */
    check: function (username, password) {
        CULINARIA.Model.User.find({
            where: { username: username.getValue() }
        }).then(function(user) {
            CULINARIA.Lib.Bcrypt.compare(password.getValue(), user.dataValues.password, function (error, result) {
                if (result) {
                    CULINARIA.View.viewportDestroy();
                    CULINARIA.Data.TEMP.userName = username.getValue();
                    if (username.getValue() === 'admin') {
                        Ext.create('CULINARIA.view.admin.AdminViewport');
                    } else {
                        Ext.create('CULINARIA.view.Viewport');
                    }
                } else {
                    Ext.MessageBox.Msg.warning('Resultado de Autenticación', 'Credenciales Invalidas.');
                }
            });
        });
    }
});
