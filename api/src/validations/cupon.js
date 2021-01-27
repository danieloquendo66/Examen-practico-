const { check } = require("express-validator");

module.exports = cuponValidator = [
  check("vigencia")
    .isLength({ min: 10 })
    .withMessage("ingrese una fecha valida"),
  check("establecimiento")
    .isLength({ min: 3 })
    .withMessage("el establesimiento debe tener almenos 3 caracteres"),
  check("producto")
    .isLength({ min: 3 })
    .withMessage("el producto debe tener almenos 3 caracteres"),
];
