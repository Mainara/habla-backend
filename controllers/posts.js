const express = require("express");

router = express.Router();

router.get("/", (req, res) => {
    res.send([]);
});

module.exports = router;