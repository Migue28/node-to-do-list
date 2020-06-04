const argv = require("yargs")
  .command("crear", "Agregar una actividad a la lista por hacer.", {
    description: {
      demand: true,
      alias: "d",
      desc: "Descripcion de la tarea por hacer.",
    },
  })
  .command("actualizar", "Actualizar el estado de una tarea", {
    description: {
      demand: true,
      alias: "d",
      desc: "Actualizar la descripcion de la tarea por hacer.",
    },
    completado: {
      alias: "c",
      default: true,
      desc: "Marca como completado o pendiente por hacer",
    },
  })
  .help().argv;

module.exports = {
  argv,
};
