const express = require("express");
const router = express.Router();
const {getAll,addNewItem,deleteItem,updateItem} = require("../controllers/user");

router.get("/",getAll);
router.post("/", addNewItem);
router.delete("/:id",deleteItem);
router.put("/:id", updateItem);

module.exports = router;