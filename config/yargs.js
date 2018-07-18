const opts = {
    base: {
        demand:true,
        alias: 'b'
    },
    limite:{
        alias:'l',
        default:10
    }
};
const argv = require('yargs')
    .command('listar','Imprime en consola',opts)
    .command('crear','Crea los archivos',opts)
    .help()
    .argv;

module.exports = {argv};