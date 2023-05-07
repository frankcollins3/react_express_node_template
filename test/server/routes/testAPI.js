const express = require("express");
const router = express.Router();

router.get("/sandwich", (req, res) => {
    res.send("testAPI working hard!");
})
