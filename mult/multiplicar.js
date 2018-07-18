//requires
const fs = require('fs');
const colors = require('colors');
//const fs = require('express');
//const fs = require('fs');

let listarTabla = async(base, limite = 10) => {
    for (let i = 1; i <= limite ; i++) {
        console.log(`${base} * ${i} = ${base*i} `.blue);
    }
}

let crearArchivo = async(base, limite = 10) => {
    if (!Number(base)) {
        throw new Error('Error : No es un numero');
    }
    let data = '';
    for (let i = 1; i <= limite ; i++) {
        data +=  `${base} * ${i} = ${base*i} \n`;
    }
    let file = `tablas/tabla-${base}.txt`;
    fs.writeFile(file, data, (err) => {
        if (err) throw new Error('Error guardando archivo');
        return 'The file has been saved!';
    });
}

module.exports = {
    crearArchivo, listarTabla
}
