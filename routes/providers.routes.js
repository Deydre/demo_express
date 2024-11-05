const providersController = require('../controllers/providers.controller');
const router = require('express').Router();

// [GET] TODOS http://localhost:3000/api/providers 
router.get("/", providersController.getProvider);
// POST http://localhost:3000/api/providers + body con {companyName, website, image}
router.post("/", providersController.createProvider);
router.put("/:id", providersController.editProvider);
router.delete("/:id", providersController.deleteProvider);

module.exports = router;