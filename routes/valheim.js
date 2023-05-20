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
router.post('/', arrowController.createArrowData);

// GET all axe data
router.get('/axes', axeController.getAllAxeData);

// GET axe data by id
router.get('/axes/:id', axeController.getAxeDataById);

// POST/Create axe data
router.post('/', axeController.createAxeData);

// GET all bow data
router.get('/bows', bowController.getAllBowData);

// GET bow data by id
router.get('/bows/:id', bowController.getBowDataById);

// POST/Create bow data
router.post('/', bowController.createBowData);

// GET all club data
router.get('/clubs', clubController.getAllClubData);

// GET club data by id
router.get('/clubs/:id', clubController.getClubDataById);

// POST/Create club data
router.post('/', clubController.createClubData);

// GET all fist data
router.get('/fists', fistController.getAllFistData);

// GET fist data by id
router.get('/fists/:id', fistController.getFistDataById);

// POST/Create fist data
router.post('/', fistController.createFistData);

// GET all food data
router.get('/food', foodController.getAllFoodData);

// GET food data by id
router.get('/food/:id', foodController.getFoodDataById);

// POST/Create food data
router.post('/', foodController.createFoodData);

// GET all knife data
router.get('/knifes', knifeController.getAllKnifeData);

// GET knife data by id
router.get('/knifes/:id', knifeController.getKnifeDataById);

// POST/Create knife data
router.post('/', knifeController.createKnifeData);

// GET all pickaxe data
router.get('/pickaxes', pickaxeController.getAllPickaxeData);

// GET pickaxe data by id
router.get('/pickaxes/:id', pickaxeController.getPickaxeDataById);

// POST/Create pickaxe data
router.post('/', pickaxeController.createPickaxeData);

// GET all polearm data
router.get('/polearms', polearmController.getAllPolearmData);

// GET polearm data by id
router.get('/polearms/:id', polearmController.getPolearmDataById);

// POST/Create polearm data
router.post('/', polearmController.createPolearmData);

// GET all shield data
router.get('/shields', shieldController.getAllShieldData);

// GET shield data by id
router.get('/shields/:id', shieldController.getShieldDataById);

// POST/Create shield data
router.post('/', shieldController.createShieldData);

// GET all spear data
router.get('/spears', spearController.getAllSpearData);

// GET spear data by id
router.get('/spears/:id', spearController.getSpearDataById);

// POST/Create spear data
router.post('/', spearController.createSpearData);

// GET all sword data
router.get('/swords', swordController.getAllSwordData);

// GET all sword data
router.get('/swords/:id', swordController.getSwordDataById);

// POST/Create sword data
router.post('/', swordController.createSwordData);

// localhost:8080/
module.exports = router;
