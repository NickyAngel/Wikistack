const express = require("express");
const router = express.Router();
const addPage = require("./../views/addPage");

router.get("/", (req, res, next) => {
  res.send("test123");
});
router.post(("/", (req, res, next) => {}));
router.get(
  "/add",
  (req, res, next) => {
    res.send(addPage());
  }
);

module.exports = router;
