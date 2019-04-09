
if(!CULINARIA.Repository.Base){CULINARIA.Repository.Base={};}

CULINARIA.Repository.Base.addTipoPersona=function(store){
    var tipopersona = ['Cliente', 'Trabajador'];
    var dataStore = [];
    tipopersona.forEach(function (tipo) {
        CULINARIA.Model.PersonaTipo.create({
            nombre: tipo,
            descripcion: tipo === 'Cliente' ? 'Usuario o Cliente' : 'Trabajador'
        });
        dataStore.push({nombre: tipo, descripcion: tipo})
    });
    store.loadData(dataStore);
};

CULINARIA.Repository.Base.addCursoTipo=function(store){
    var tipocurso = ['Coc Nivel I', 'Coc. Básica', 'Tecnologia de los sservicios', 'Capitan de salon', 'dulceria', 'Lunch', 'Dependiente elaborador', 'panaderia', 'Carniceria'];
    var dataStore = [];
    tipocurso.forEach(function (tipo) {
        CULINARIA.Model.CursoTipo.create({
            nombre: tipo,
            descripcion: tipo
        });
        dataStore.push({nombre: tipo, descripcion: tipo})
    });
    store.loadData(dataStore);
};

CULINARIA.Repository.Base.addOrganismo=function(store){
    var organismo = ['MINCIN', 'MINTUR', 'MINED', 'MININT', 'MINFAR', 'MINSAP', 'MICONS', 'MINCUL', 'OTROS'];
    var dataStore = [];
    organismo.forEach(function (nombre) {
        CULINARIA.Model.Organismo.create({
            nombre: nombre,
            descripcion: nombre
        });
        dataStore.push({nombre: nombre, descripcion: nombre})
    });
    store.loadData(dataStore);
};

CULINARIA.Repository.Base.addSemestre=function(store){
    var semestre = [{nombre: 'Primer Semestre', desc: 'Septiembre-Febrero'}, {nombre: 'Segundo Semestre', desc: 'Febrero-Julio'}];
    var dataStore = [];
    semestre.forEach(function (data) {
        CULINARIA.Model.Semestre.create({
            nombre: data.nombre,
            descripcion: data.desc
        });
        dataStore.push({nombre: data.nombre, descripcion: data.desc})
    });
    store.loadData(dataStore);
};

CULINARIA.Repository.Base.addUser=function(store){
    var user = ['admin', 'culinaria'];
    var dataStore = [];
    user.forEach(function (name) {
        CULINARIA.Model.User.create({
            username: name,
            password: CULINARIA.Lib.Bcrypt.hashSync('12345678', 8),
            fullName: name.toUpperCase()
        });
        dataStore.push({username: name, fullName: name.toUpperCase()})
    });
    store.loadData(dataStore);
};

CULINARIA.Repository.Base.addAPagar=function(store){
        CULINARIA.Model.APagar.create({
            cuota: 1,
            periodo_pago: 'Mensual'
        });
    store.loadData({cuota: 1, periodo_pago: 'Mensual'});
};