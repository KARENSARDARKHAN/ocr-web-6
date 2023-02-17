const express = require("express");
const router = express.Router();

const auth = require("../middleware/auth");

const multer = require("../middleware/multer-config");

const sauceCtrl = require("../controllers/sauce");

router.get("/", auth, sauceCtrl.getAllsauces);
router.get("/:id", auth, sauceCtrl.getOnesauce);

router.post("/", auth, multer, sauceCtrl.createSauce);
router.put("/:id", auth, multer, sauceCtrl.modifysauce);
router.delete("/:id", auth, sauceCtrl.deletesauce);
router.post("/:id/like", auth, sauceCtrl.likeSauce);

module.exports = router;
