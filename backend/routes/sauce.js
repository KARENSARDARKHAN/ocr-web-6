const express = require("express");
const router = express.Router();

const auth = require("../middleware/auth");

const multer = require("../middleware/multer-config");

const sauceCtrl = require("../controllers/sauce");

router.get("/", auth, sauceCtrl.getAllsauces);
router.get("/:id", auth, sauceCtrl.getOnesauce);

router.post("/sauces", auth, multer, sauceCtrl.createsauce);
router.put("/:id", auth, multer, sauceCtrl.modifysauce);
router.delete("/:id", auth, sauceCtrl.deletesauce);

module.exports = router;
