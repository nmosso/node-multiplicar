//requires
const argv = require('./config/yargs.js').argv;
const colors = require('colors');
const {crearArchivo,listarTabla} = require('./mult/multiplicar.js');
//const fs = require('express');
//const fs = require('fs');
//console.log(process.argv);
//let argv = process.argv;

let comando = argv._[0];

switch (comando) {
    case 'listar':
        listarTabla(argv.base, argv.limite);
        break;
    case 'crear':
        crearArchivo(argv.base, argv.limite)
            .then(archivo => console.log(`Tabla base ${argv.base} creada \n`))
            .catch(e=> {console.log(e)});
        break;
    default:
        console.log('No se encontro el comando');
}
