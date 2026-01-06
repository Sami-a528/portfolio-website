const express = require("express");
const { sendEmailController } = require("../controllers/portfolioController.js");

const router = express.Router();
router.post("/sendmail", sendEmailController);
module.exports = router;