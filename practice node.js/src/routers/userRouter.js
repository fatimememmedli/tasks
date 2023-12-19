const userController = require("./../controllers/userControllers");
const router = require("express").Router();
router.get("/products", userController.getAllProducts);
module.exports = router;
