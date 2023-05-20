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

// GET all axe data
router.get('/axes', axeController.getAllAxeData);

// GET axe data by id
router.get('/axes/:id', axeController.getAxeDataById);

// GET all bow data
router.get('/bows', bowController.getAllBowData);

// GET bow data by id
router.get('/bows/:id', bowController.getBowDataById);

// GET all club data
router.get('/clubs', clubController.getAllClubData);

// GET club data by id
router.get('/clubs/:id', clubController.getClubDataById);

// GET all fist data
router.get('/fists', fistController.getAllFistData);

// GET fist data by id
router.get('/fists/:id', fistController.getFistDataById);

// GET all food data
router.get('/food', foodController.getAllFoodData);

// GET food data by id
router.get('/food/:id', foodController.getFoodDataById);

// GET all knife data
router.get('/knifes', knifeController.getAllKnifeData);

// GET knife data by id
router.get('/knifes/:id', knifeController.getKnifeDataById);

// GET all pickaxe data
router.get('/pickaxes', pickaxeController.getAllPickaxeData);

// GET pickaxe data by id
router.get('/pickaxes/:id', pickaxeController.getPickaxeDataById);

// GET all polearm data
router.get('/polearms', polearmController.getAllPolearmData);

// GET polearm data by id
router.get('/polearms/:id', polearmController.getPolearmDataById);

// GET all shield data
router.get('/shields', shieldController.getAllShieldData);

// GET shield data by id
router.get('/shields/:id', shieldController.getShieldDataById);

// GET all spear data
router.get('/spears', spearController.getAllSpearData);

// GET spear data by id
router.get('/spears/:id', spearController.getSpearDataById);

// GET all sword data
router.get('/swords', swordController.getAllSwordData);

// GET all sword data
router.get('/swords/:id', swordController.getSwordDataById);

// localhost:8080/
module.exports = router;
