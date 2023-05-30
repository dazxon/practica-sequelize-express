const express = require("express");
const librosRouter = express.Router(); // this is my router
const { Libros } = require("../models"); // this is the model
const { Op } = require("sequelize");
const { sync } = require("../models/libros");

// OBTENER LOS LIBROS (GET) - RUTA: http://localhost:3001/api/libros
librosRouter.get("/", function (req, res, next) {
  Libros.findAll()
    .then((libros) => res.send(libros))
    .catch(next);
});

// BUSCAR LIBROS POR SU INICIAL (GET) - RUTA: http://localhost:3001/api/libros/similares/:letra
librosRouter.get("/similares/:letra", function (req, res, next) {
  let { letra } = req.params;
  Libros.findAll({
    where: {
      titulo: {
        [Op.startsWith]: letra, // using Op object
      },
    },
  })
    .then((lib) => {
      res.send(lib);
    })
    .catch(() => {
      next;
    });
});

// BUSCAR LIBROS DE UN AUTOR (GET) - RUTA: http://localhost:3001/api/libros/autor/:id
librosRouter.get("/autor/:id", function (req, res, next) {
  let { id } = req.params;
  Libros.findAll({
    where: {
      id: id,
    },
  })
    .then((lib) => res.send(lib))
    .catch(next);
});

// CREAR UN LIBRO (POST) - RUTA: http://localhost:3001/api/libros
librosRouter.post("/", function (req, res, next) {
  const { titulo, autor, ventas } = req.body;
  Libros.create({
    titulo,
    autor,
    ventas,
  })
    .then((libro) => {
      res.send(libro);
    })
    .catch(next);
});

// EDITAR LIBRO (PUT) - RUTA: http://localhost:3001/api/libros/updateBook/:id
librosRouter.put("/updateBook/:id", function (req, res, next) {
  const { id } = req.params;
  const { titulo, autor, ventas } = req.body;
  Libros.update(
    {
      titulo,
      autor,
      ventas,
    },
    {
      where: { id: id },
      returning: true,
    }
  )
    .then(([rowsUpdated, [libro]]) => res.send(libro))
    .catch(next);
});

// ELIMINAR LIBRO (DELETE) - RUTA: http://localhost:3001/api/libros/delete/:id
librosRouter.delete("/delete/:id", function (req, res, next) {
  const { id } = req.params;

  Libros.destroy({
    where: {
      id: id,
    },
  })
    .then(() => res.sendStatus(200))
    .catch(next);
});

module.exports = librosRouter;
