const express = require("express");
const router = express.Router();
const { submitPartInfo } = require("../controllers/partsInfoController");

router.post("/add-part-info", submitPartInfo);

module.exports = router;
