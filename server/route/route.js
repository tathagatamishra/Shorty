const express = require("express");

const router = express.Router();

const { generate, redirectUrl } = require("../controller/controller");

router.post("/generate", generate);

router.get("/gg/:urlCode", redirectUrl);

module.exports = router;
