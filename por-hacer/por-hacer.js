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
 *
 * @param {*Description made by user on the terminal} descripcion
 * First load data from database, then push new data to
 * the existing array
 * return new task
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

module.exports = {
  crear,
};
