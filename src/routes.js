const express = require("express");
const router = express.Router();
const multer = require("multer");

const boxController = require("./controllers/boxController");
const fileController = require("./controllers/fileController");
const multerConfig = require("./config/multer");

router.get("/", (req, res) => {
  return res.send("Api ativa");
});

router.post("/boxes", boxController.store);
router.get("/boxes/:id", boxController.show);
router.post(
  "/boxes/:id/files",
  multer(multerConfig).single("file"),
  fileController.store
);

module.exports = router;
