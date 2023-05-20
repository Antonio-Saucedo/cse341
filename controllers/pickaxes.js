const mongodb = require('../db/connect');
const ObjectId = require('mongodb').ObjectId;

const getAllPickaxeData = async (req, res) => {
  const result = await mongodb.getDb().db('valheim').collection('pickaxe').find();
  result.toArray().then((lists) => {
    res.setHeader('Content-Type', 'application/json');
    res.status(200).json(lists);
  });
};

const getPickaxeDataById = async (req, res) => {
  const userId = new ObjectId(req.params.id);
  const result = await mongodb.getDb().db('valheim').collection('pickaxe').find({ _id: userId });
  result.toArray().then((lists) => {
    res.setHeader('Content-Type', 'application/json');
    res.status(200).json(lists[0]);
  });
};

const createPickaxeData = async (req, res) => {
  const pickaxe = {
    name: req.body.name,
    description: req.body.description,
    quality1: {
      recipe: req.body.recipe,
      weight: req.body.weight,
      durability: req.body.durability,
      pierce: req.body.pierce,
      mining: req.body.mining,
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
      mining: req.body.mining,
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
      mining: req.body.mining,
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
      mining: req.body.mining,
      backstab: req.body.backstab,
      stagger: req.body.stagger,
      knockback: req.body.knockback,
      blockForce: req.body.blockForce,
      parryBonus: req.body.parryBonus,
      movement: req.body.movement
    }
  };
  const responce = await mongodb.getDb().db('valheim').collection('pickaxe').insertOne(pickaxe);
  if (responce.acknowledged) {
    res.status(201).json(responce);
  } else {
    res
      .status(500)
      .json(
        responce.error || 'Something went wrong while creating the pickaxe data. Try again later.'
      );
  }
};

const updatePickaxeData = async (req, res) => {
  const userId = new ObjectId(req.params.id);
  const pickaxe = {
    name: req.body.name,
    description: req.body.description,
    quality1: {
      recipe: req.body.recipe,
      weight: req.body.weight,
      durability: req.body.durability,
      pierce: req.body.pierce,
      mining: req.body.mining,
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
      mining: req.body.mining,
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
      mining: req.body.mining,
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
      mining: req.body.mining,
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
    .collection('pickaxe')
    .updateOne(
      { _id: userId },
      {
        $set: {
          name: pickaxe.name,
          description: pickaxe.description,
          quality1: {
            recipe: pickaxe.quality1.recipe,
            weight: pickaxe.quality1.weight,
            durability: pickaxe.quality1.durability,
            pierce: pickaxe.quality1.pierce,
            mining: pickaxe.quality1.mining,
            backstab: pickaxe.quality1.backstab,
            stagger: pickaxe.quality1.stagger,
            knockback: pickaxe.quality1.knockback,
            blockForce: pickaxe.quality1.blockForce,
            parryBonus: pickaxe.quality1.parryBonus,
            movement: pickaxe.quality1.movement
          },
          quality2: {
            recipe: pickaxe.quality2.recipe,
            weight: pickaxe.quality2.weight,
            durability: pickaxe.quality2.durability,
            pierce: pickaxe.quality2.pierce,
            mining: pickaxe.quality2.mining,
            backstab: pickaxe.quality2.backstab,
            stagger: pickaxe.quality2.stagger,
            knockback: pickaxe.quality2.knockback,
            blockForce: pickaxe.quality2.blockForce,
            parryBonus: pickaxe.quality2.parryBonus,
            movement: pickaxe.quality2.movement
          },
          quality3: {
            recipe: pickaxe.quality3.recipe,
            weight: pickaxe.quality3.weight,
            durability: pickaxe.quality3.durability,
            pierce: pickaxe.quality3.pierce,
            mining: pickaxe.quality3.mining,
            backstab: pickaxe.quality3.backstab,
            stagger: pickaxe.quality3.stagger,
            knockback: pickaxe.quality3.knockback,
            blockForce: pickaxe.quality3.blockForce,
            parryBonus: pickaxe.quality3.parryBonus,
            movement: pickaxe.quality3.movement
          },
          quality4: {
            recipe: pickaxe.quality4.recipe,
            weight: pickaxe.quality4.weight,
            durability: pickaxe.quality4.durability,
            pierce: pickaxe.quality4.pierce,
            mining: pickaxe.quality4.mining,
            backstab: pickaxe.quality4.backstab,
            stagger: pickaxe.quality4.stagger,
            knockback: pickaxe.quality4.knockback,
            blockForce: pickaxe.quality4.blockForce,
            parryBonus: pickaxe.quality4.parryBonus,
            movement: pickaxe.quality4.movement
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
        responce.error || 'Something went wrong while updating the pickaxe data. Try again later.'
      );
  }
};

const deletePickaxeData = async (req, res) => {
  const userId = new ObjectId(req.params.id);
  const responce = await mongodb
    .getDb()
    .db('valheim')
    .collection('pickaxe')
    .deleteOne({ _id: userId }, true);
  if (responce.deletedCount > 0) {
    res.status(200).send();
  } else {
    res
      .status(500)
      .json(
        responce.error || 'Something went wrong while deleting the pickaxe data. Try again later.'
      );
  }
};

module.exports = {
  getAllPickaxeData,
  getPickaxeDataById,
  createPickaxeData,
  updatePickaxeData,
  deletePickaxeData
};
