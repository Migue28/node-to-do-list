const argv = require("./config/yargs").argv;
const colors = require("colors");

const { crear, getListado, actualizarDB } = require("./por-hacer/por-hacer.js");

let comando = argv._[0];

switch (comando) {
  case "crear":
    const tarea = crear(argv.descripcion);
    console.log(tarea);
    break;
  case "listar":
    const listado = getListado();
    for (let tarea of listado) {
      console.log("============Por Hacer=========".blue);
      console.log(tarea.descripcion);
      console.log("Estado: ", tarea.completado);
      console.log("==============================".blue);
    }
    break;
  case "actualizar":
    console.log(argv)
    const actualizar = actualizarDB(argv.descripcion, argv.completado);
    console.log(actualizar);
    break;
  default:
    console.log("Comando no reconocido");
}
