const express = require('express');
const router = express.Router();

const arrowController = require('../controllers/arrows');
const axeController = require('../controllers/axes');
const bowController = require('../controllers/bows');
const clubController = require('../controllers/clubs');
const fistController = require('../controllers/fists');
const foodController = require('../controllers/food');
const knifeController = require('../controllers/knifes');
const pickaxeController = require('../controllers/pickaxes');
const polearmController = require('../controllers/polearms');
const shieldController = require('../controllers/shields');
const spearController = require('../controllers/spears');
const swordController = require('../controllers/swords');

// GET all arrow data
router.get('/arrows', arrowController.getAllArrowData);

// GET arrow data by id
router.get('/arrows/:id', arrowController.getArrowDataById);

// POST/Create arrow data
router.post('/arrows/', arrowController.createArrowData);

// PUT/Update arrow data by id
router.put('/arrows/:id', arrowController.updateArrowData);

// DELETE arrow data by id
router.delete('/arrows/:id', arrowController.deleteArrowData);

// GET all axe data
router.get('/axes', axeController.getAllAxeData);

// GET axe data by id
router.get('/axes/:id', axeController.getAxeDataById);

// POST/Create axe data
router.post('/axes/', axeController.createAxeData);

// PUT/Update axe data by id
router.put('/axes/:id', axeController.updateAxeData);

// DELETE axe data by id
router.delete('/axes/:id', axeController.deleteAxeData);

// GET all bow data
router.get('/bows', bowController.getAllBowData);

// GET bow data by id
router.get('/bows/:id', bowController.getBowDataById);

// POST/Create bow data
router.post('/bows/', bowController.createBowData);

// PUT/Update bow data by id
router.put('/bows/:id', bowController.updateBowData);

// DELETE bow data by id
router.delete('/bows/:id', bowController.deleteBowData);

// GET all club data
router.get('/clubs', clubController.getAllClubData);

// GET club data by id
router.get('/clubs/:id', clubController.getClubDataById);

// POST/Create club data
router.post('/clubs/', clubController.createClubData);

// PUT/Update club data by id
router.put('/clubs/:id', clubController.updateClubData);

// DELETE axe club by id
router.delete('/clubs/:id', clubController.deleteClubData);

// GET all fist data
router.get('/fists', fistController.getAllFistData);

// GET fist data by id
router.get('/fists/:id', fistController.getFistDataById);

// POST/Create fist data
router.post('/fists/', fistController.createFistData);

// PUT/Update fist data by id
router.put('/fists/:id', fistController.updateFistData);

// DELETE fist data by id
router.delete('/fists/:id', fistController.deleteFistData);

// GET all food data
router.get('/food', foodController.getAllFoodData);

// GET food data by id
router.get('/food/:id', foodController.getFoodDataById);

// POST/Create food data
router.post('/food/', foodController.createFoodData);

// PUT/Update food data by id
router.put('/food/:id', foodController.updateFoodData);

// DELETE food data by id
router.delete('/food/:id', foodController.deleteFoodData);

// GET all knife data
router.get('/knifes', knifeController.getAllKnifeData);

// GET knife data by id
router.get('/knifes/:id', knifeController.getKnifeDataById);

// POST/Create knife data
router.post('/knifes/', knifeController.createKnifeData);

// PUT/Update knife data by id
router.put('/knifes/:id', knifeController.updateKnifeData);

// DELETE knife data by id
router.delete('/knifes/:id', knifeController.deleteKnifeData);

// GET all pickaxe data
router.get('/pickaxes', pickaxeController.getAllPickaxeData);

// GET pickaxe data by id
router.get('/pickaxes/:id', pickaxeController.getPickaxeDataById);

// POST/Create pickaxe data
router.post('/pickaxes/', pickaxeController.createPickaxeData);

// PUT/Update pickaxe data by id
router.put('/pickaxes/:id', pickaxeController.updatePickaxeData);

// DELETE axe data by id
router.delete('/pickaxes/:id', pickaxeController.deletePickaxeData);

// GET all polearm data
router.get('/polearms', polearmController.getAllPolearmData);

// GET polearm data by id
router.get('/polearms/:id', polearmController.getPolearmDataById);

// POST/Create polearm data
router.post('/polearms/', polearmController.createPolearmData);

// PUT/Update polearms data by id
router.put('/polearms/:id', polearmController.updatePolearmData);

// DELETE polearms data by id
router.delete('/polearms/:id', polearmController.deletePolearmData);

// GET all shield data
router.get('/shields', shieldController.getAllShieldData);

// GET shield data by id
router.get('/shields/:id', shieldController.getShieldDataById);

// POST/Create shield data
router.post('/shields/', shieldController.createShieldData);

// PUT/Update shield data by id
router.put('/shields/:id', shieldController.updateShieldData);

// DELETE axe data by id
router.delete('/shields/:id', shieldController.deleteShieldData);

// GET all spear data
router.get('/spears', spearController.getAllSpearData);

// GET spear data by id
router.get('/spears/:id', spearController.getSpearDataById);

// POST/Create spear data
router.post('/spears/', spearController.createSpearData);

// PUT/Update spear data by id
router.put('/spears/:id', spearController.updateSpearData);

// DELETE spear data by id
router.delete('/spears/:id', spearController.deleteSpearData);

// GET all sword data
router.get('/swords', swordController.getAllSwordData);

// GET all sword data
router.get('/swords/:id', swordController.getSwordDataById);

// POST/Create sword data
router.post('/swords/', swordController.createSwordData);

// PUT/Update sword data by id
router.put('/swords/:id', swordController.updateSwordData);

// DELETE sword data by id
router.delete('/swords/:id', swordController.deleteSwordData);

// localhost:8080/
module.exports = router;
