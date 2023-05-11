const express = require("express");

const router = express.Router();

const { generate, redirect } = require("../controller/controller");

router.post("/generate", generate);

router.get("/:urlCode", redirect);

module.exports = router;
