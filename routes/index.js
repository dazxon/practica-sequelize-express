const express = require("express");
const router = express.Router();
const librosRouter = require("./libros");

router.use("/libros", librosRouter);

module.exports = router;
