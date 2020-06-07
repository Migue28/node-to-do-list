const fs = require("fs");

let listadoPorHacer = [];

/**
 * Convert user data to json y save it on data.json
 */
const guardarDB = () => {
  let data = JSON.stringify(listadoPorHacer);
  fs.writeFile("./db/data.json", data, (err) => {
    if (err) throw new Error("No se pudo grabar", err);
  });
};

/**
 * Load data from data.json
 */
const cargarDB = () => {
  try {
    listadoPorHacer = require("../db/data.json");
  } catch (error) {
    listadoPorHacer = [];
  }
};

/**
 * First load data from database, then push new data to
 * the existing array
 * return new task
 * @param {*Description made by user on the terminal} descripcion
 */
const crear = (descripcion) => {
  cargarDB();
  let porHacer = {
    descripcion,
    completado: false,
  };
  listadoPorHacer.push(porHacer);
  guardarDB();
  return porHacer;
};

/**
 * Get data from database
 */
const getListado = () => {
  cargarDB();
  return listadoPorHacer;
};

/**
 * Update database completion value
 * return true if changes are made
 * if there is no task with that name
 * return false
 * @param {*Description made by user} descripcion
 * @param {*Task value, true by default} completado
 */
const actualizarDB = (descripcion, completado = true) => {
  cargarDB();
  const index = listadoPorHacer.findIndex((tarea) => {
    return tarea.descripcion === descripcion;
  });
  if (index >= 0) {
    listadoPorHacer[index].completado = completado;
    guardarDB();
    return true;
  }
  return false;
};

module.exports = {
  crear,
  getListado,
  actualizarDB,
};
