const providersController = require('../controllers/providers.controller');
const router = require('express').Router();


router.get("/", providersController.getProvider);
router.post("/", providersController.createProvider);
router.put("/:id", providersController.editProvider);
router.delete("/:id", providersController.deleteProvider);

module.exports = router;