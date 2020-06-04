const argv = require('yargs').argv;

let comando = argv._[0];

console.log(argv)

switch(comando) {
    case 'crear':
        console.log('Crear por hacer');
        break;
    case 'listar':
        console.log('Mostrar todas las tareas por hacer');
        break;
    case 'actualizar':
        console.log('Actualizar una tarea por hacer');
        break;
    default:
        console.log('Comando no reconocido');

}