const routes = require("express").Router();
const { Cupon } = require("../models");
const { codigo } = require("../middlewares");
const { validationResult } = require("express-validator");
const cupónValidator = require("../validations/cupon");

const caracteres = "abcdefghijklmnñopqrstuvwxyz0123456789";

//traer todos los cupones
routes.get("/cupon", (req, res) => {
  Cupon.findAll().then((response) => {
    res.json(response);
  });
});

//traer un cupon especifico

routes.get("/cupon/:id", (req, res) => {
  const { id } = req.params;
  Cupon.findAll({
    where: {
      id: id,
    },
  }).then((response) => {
    res.json(response);
  });
});

//crear un nuevo cupon
routes.post("/cupon", cupónValidator, (req, res) => {
  const { vigencia, establecimiento, producto } = req.body;

  let errors = validationResult(req);
  if (errors.isEmpty()) {
    Cupon.create({
      cuponNumero: codigo(caracteres, 6),
      vigencia: vigencia,
      establecimiento: establecimiento,
      producto: producto,
    }).then((cupo) => {
      res.json(cupo);
    });
  } else {
    res.json(errors);
  }
});

//edita un cupon
routes.put("/cupon/:id", (req, res) => {
  const { vigencia, establecimiento, producto, canjeado } = req.body;
  const { id } = req.params;

  Cupon.update(
    {
      vigencia: vigencia,
      establecimiento: establecimiento,
      producto: producto,
      canjeado: canjeado,
    },
    {
      where: {
        id: id,
      },
    }
  ).then(() => {
    Cupon.findByPk(id).then((p) => res.json(p));
  });
});
//borrar un cupon
routes.delete("/cupon/:id", (req, res) => {
  const { id } = req.params;
  Cupon.destroy({
    where: {
      id: id,
    },
  }).then(() => {
    res.send(id);
  });
});
module.exports = routes;
