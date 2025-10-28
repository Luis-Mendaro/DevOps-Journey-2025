const express = require("express");
const router = express.Router();
const { registrarEntrada } = require("../controllers/registroController");

router.post("/", registrarEntrada);

module.exports = router;
