// Requerir el módulo de Express
const express = require("express");

// Crear una instancia de la aplicación Express
const app = express();

// Definir el puerto en el que el servidor escuchará
const port = 3000;

// Definir una ruta para la raíz ('/') que responda con "Hola, Mundo"
app.get("/", (req, res) => {
  res.send("Hola, Mundo");
});

// Iniciar el servidor y hacer que escuche en el puerto definido
app.listen(port, () => {
  console.log(`Servidor escuchando en http://localhost:${port}`);
});
