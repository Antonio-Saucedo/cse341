const mongodb = require('../db/connect');
const ObjectId = require('mongodb').ObjectId;

const getAllPolearmData = async (req, res) => {
  const result = await mongodb.getDb().db('valheim').collection('polearms').find();
  result.toArray().then((lists) => {
    res.setHeader('Content-Type', 'application/json');
    res.status(200).json(lists);
  });
};

const getPolearmDataById = async (req, res) => {
  const userId = new ObjectId(req.params.id);
  const result = await mongodb.getDb().db('valheim').collection('polearms').find({ _id: userId });
  result.toArray().then((lists) => {
    res.setHeader('Content-Type', 'application/json');
    res.status(200).json(lists[0]);
  });
};

const createPolearmData = async (req, res) => {
  const polearm = {
    name: req.body.name,
    description: req.body.description,
    quality1: {
      recipe: req.body.recipe,
      weight: req.body.weight,
      durability: req.body.durability,
      pierce: req.body.pierce,
      lightning: req.body.lightning,
      backstab: req.body.backstab,
      stagger: req.body.stagger,
      knockback: req.body.knockback,
      blockForce: req.body.blockForce,
      parryBonus: req.body.parryBonus,
      movement: req.body.movement
    },
    quality2: {
      recipe: req.body.recipe,
      weight: req.body.weight,
      durability: req.body.durability,
      pierce: req.body.pierce,
      lightning: req.body.lightning,
      backstab: req.body.backstab,
      stagger: req.body.stagger,
      knockback: req.body.knockback,
      blockForce: req.body.blockForce,
      parryBonus: req.body.parryBonus,
      movement: req.body.movement
    },
    quality3: {
      recipe: req.body.recipe,
      weight: req.body.weight,
      durability: req.body.durability,
      pierce: req.body.pierce,
      lightning: req.body.lightning,
      backstab: req.body.backstab,
      stagger: req.body.stagger,
      knockback: req.body.knockback,
      blockForce: req.body.blockForce,
      parryBonus: req.body.parryBonus,
      movement: req.body.movement
    },
    quality4: {
      recipe: req.body.recipe,
      weight: req.body.weight,
      durability: req.body.durability,
      pierce: req.body.pierce,
      lightning: req.body.lightning,
      backstab: req.body.backstab,
      stagger: req.body.stagger,
      knockback: req.body.knockback,
      blockForce: req.body.blockForce,
      parryBonus: req.body.parryBonus,
      movement: req.body.movement
    }
  };
  const responce = await mongodb.getDb().db('valheim').collection('polearms').insertOne(polearm);
  if (responce.acknowledged) {
    res.status(201).json(responce);
  } else {
    res
      .status(500)
      .json(
        responce.error || 'Something went wrong while creating the polearm data. Try again later.'
      );
  }
};

const updatePolearmData = async (req, res) => {
  const userId = new ObjectId(req.params.id);
  const polearm = {
    name: req.body.name,
    description: req.body.description,
    quality1: {
      recipe: req.body.recipe,
      weight: req.body.weight,
      durability: req.body.durability,
      pierce: req.body.pierce,
      lightning: req.body.lightning,
      backstab: req.body.backstab,
      stagger: req.body.stagger,
      knockback: req.body.knockback,
      blockForce: req.body.blockForce,
      parryBonus: req.body.parryBonus,
      movement: req.body.movement
    },
    quality2: {
      recipe: req.body.recipe,
      weight: req.body.weight,
      durability: req.body.durability,
      pierce: req.body.pierce,
      lightning: req.body.lightning,
      backstab: req.body.backstab,
      stagger: req.body.stagger,
      knockback: req.body.knockback,
      blockForce: req.body.blockForce,
      parryBonus: req.body.parryBonus,
      movement: req.body.movement
    },
    quality3: {
      recipe: req.body.recipe,
      weight: req.body.weight,
      durability: req.body.durability,
      pierce: req.body.pierce,
      lightning: req.body.lightning,
      backstab: req.body.backstab,
      stagger: req.body.stagger,
      knockback: req.body.knockback,
      blockForce: req.body.blockForce,
      parryBonus: req.body.parryBonus,
      movement: req.body.movement
    },
    quality4: {
      recipe: req.body.recipe,
      weight: req.body.weight,
      durability: req.body.durability,
      pierce: req.body.pierce,
      lightning: req.body.lightning,
      backstab: req.body.backstab,
      stagger: req.body.stagger,
      knockback: req.body.knockback,
      blockForce: req.body.blockForce,
      parryBonus: req.body.parryBonus,
      movement: req.body.movement
    }
  };
  const responce = await mongodb
    .getDb()
    .db('valheim')
    .collection('polearms')
    .updateOne(
      { _id: userId },
      {
        $set: {
          name: polearm.name,
          description: polearm.description,
          quality1: {
            recipe: polearm.quality1.recipe,
            weight: polearm.quality1.weight,
            durability: polearm.quality1.durability,
            pierce: polearm.quality1.pierce,
            lightning: polearm.quality1.lightning,
            backstab: polearm.quality1.backstab,
            stagger: polearm.quality1.stagger,
            knockback: polearm.quality1.knockback,
            blockForce: polearm.quality1.blockForce,
            parryBonus: polearm.quality1.parryBonus,
            movement: polearm.quality1.movement
          },
          quality2: {
            recipe: polearm.quality2.recipe,
            weight: polearm.quality2.weight,
            durability: polearm.quality2.durability,
            pierce: polearm.quality2.pierce,
            lightning: polearm.quality2.lightning,
            backstab: polearm.quality2.backstab,
            stagger: polearm.quality2.stagger,
            knockback: polearm.quality2.knockback,
            blockForce: polearm.quality2.blockForce,
            parryBonus: polearm.quality2.parryBonus,
            movement: polearm.quality2.movement
          },
          quality3: {
            recipe: polearm.quality3.recipe,
            weight: polearm.quality3.weight,
            durability: polearm.quality3.durability,
            pierce: polearm.quality3.pierce,
            lightning: polearm.quality3.lightning,
            backstab: polearm.quality3.backstab,
            stagger: polearm.quality3.stagger,
            knockback: polearm.quality3.knockback,
            blockForce: polearm.quality3.blockForce,
            parryBonus: polearm.quality3.parryBonus,
            movement: polearm.quality3.movement
          },
          quality4: {
            recipe: polearm.quality4.recipe,
            weight: polearm.quality4.weight,
            durability: polearm.quality4.durability,
            pierce: polearm.quality4.pierce,
            lightning: polearm.quality4.lightning,
            backstab: polearm.quality4.backstab,
            stagger: polearm.quality4.stagger,
            knockback: polearm.quality4.knockback,
            blockForce: polearm.quality4.blockForce,
            parryBonus: polearm.quality4.parryBonus,
            movement: polearm.quality4.movement
          }
        }
      }
    );
  if (responce.modifiedCount > 0) {
    res.status(204).send();
  } else {
    res
      .status(500)
      .json(
        responce.error || 'Something went wrong while updating the polearm data. Try again later.'
      );
  }
};

const deletePolearmData = async (req, res) => {
  const userId = new ObjectId(req.params.id);
  const responce = await mongodb
    .getDb()
    .db('valheim')
    .collection('polearms')
    .deleteOne({ _id: userId }, true);
  if (responce.deletedCount > 0) {
    res.status(200).send();
  } else {
    res
      .status(500)
      .json(
        responce.error || 'Something went wrong while deleting the polearm data. Try again later.'
      );
  }
};

module.exports = {
  getAllPolearmData,
  getPolearmDataById,
  createPolearmData,
  updatePolearmData,
  deletePolearmData
};
