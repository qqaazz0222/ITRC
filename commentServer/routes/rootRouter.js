const express = require("express");
const router = express.Router();

router.get("/", (req, res, next) => {
    return res.json({ msg: "Server Is Working!!" });
});

module.exports = router;
