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

// GET all axe data
router.get('/axes', axeController.getAllAxeData);

// GET all bow data
router.get('/bows', bowController.getAllBowData);

// GET all club data
router.get('/clubs', clubController.getAllClubData);

// GET all fist data
router.get('/fists', fistController.getAllFistData);

// GET all food data
router.get('/food', foodController.getAllFoodData);

// GET all knife data
router.get('/knifes', knifeController.getAllKnifeData);

// GET all pickaxe data
router.get('/pickaxes', pickaxeController.getAllPickaxeData);

// GET all polearm data
router.get('/polearms', polearmController.getAllPolearmData);

// GET all shield data
router.get('/shields', shieldController.getAllShieldData);

// GET all spear data
router.get('/spears', spearController.getAllSpearData);

// GET all sword data
router.get('/swords', swordController.getAllSwordData);

// localhost:8080/
module.exports = router;
