/* Load Models */
CULINARIA.loadScript([
    "models/CostoModel.js",
    "models/EspecialidadModel.js",
    "models/SemestreModel.js",
    "models/CursoTipoModel.js",
    "models/CursoModel.js",
    "models/OrganismoModel.js",
    "models/NivelEscolarModel.js",
    "models/BaseRepository.js",
    "models/PersonaTipoModel.js",
    "models/PersonaModel.js",
    "models/ProfesionModel.js",
    "models/MatriculaModel.js",
    "models/MatriculaRepository.js",
    "models/CursoRepository.js",
    "models/UserModel.js",
    "models/APagarModel.js",
    "models/AsociadosModel.js",
    "models/AsociadosPagoModel.js",
    "models/ServiciosTecnicosModel.js",
    "models/InstalacionModel.js",
    "models/ServiciosTecnicosRealizadosModel.js"
]);

CULINARIA.Sequelize.sync({force: true});

/* Load App */
CULINARIA.loadScript(["views/app.js", "views/util/util.js"]);

CULINARIA.loadScript("reports/report.js");