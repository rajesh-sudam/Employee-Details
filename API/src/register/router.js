const {Router}=require("express");
const controller=require("./controller");

const router=Router();

router.get("/",controller.getreg)
router.post("/",controller.addreg);
router.get("/:id",controller.getById);
router.delete("/:id",controller.deleteId);
router.put("/:id",controller.updateId);


module.exports=router;