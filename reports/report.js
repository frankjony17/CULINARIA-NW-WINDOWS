/**
 * Create PDF from file html
 */
CULINARIA.pdf=function(pageConfig){
    var exec = CULINARIA.Lib.Process.exec,
        command = CULINARIA.Data.Path +'/node_modules/wkhtmltopdf/bin/wkhtmltopdf.exe';

    command += ' --orientation '+ pageConfig.orientation; // Landscape
    command += ' --page-size '+ pageConfig.pageSize; // Letter
    command += ' --title '+ pageConfig.title;
    command += ' --encoding UTF-8';
    command += ' '+ CULINARIA.Data.Path + '/reports/'+ pageConfig.title +'.html'; //'/reports/*.html';
    command += ' '+ CULINARIA.Data.Path + '/reports/'+ pageConfig.title +'.pdf';
    /* command execute in shell */
    exec(command, function (error, stdout, stderr) {
        if (error !== null) {
            console.log('exec error: ' + error);
            console.log(stderr);
        } else {
            console.log(stdout);
            CULINARIA.GUI.Shell.openExternal(CULINARIA.Data.Path + '/reports/'+ pageConfig.title +'.pdf');
        }
    });
};