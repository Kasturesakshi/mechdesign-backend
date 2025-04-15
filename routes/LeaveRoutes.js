const express = require("express");
const router = express.Router();
const { fetchLeaves, changeApproval } = require("../Controller/LeaveController");

router.get("/", fetchLeaves);
router.put("/:id", changeApproval);

module.exports = router;
