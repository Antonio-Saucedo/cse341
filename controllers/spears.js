const mongodb = require('../db/connect');
const ObjectId = require('mongodb').ObjectId;

const getAllSpearData = async (req, res) => {
  const result = await mongodb.getDb().db('valheim').collection('spears').find();
  result.toArray().then((lists) => {
    res.setHeader('Content-Type', 'application/json');
    res.status(200).json(lists);
  });
};

const getSpearDataById = async (req, res) => {
  const userId = new ObjectId(req.params.id);
  const result = await mongodb.getDb().db('valheim').collection('spears').find({ _id: userId });
  result.toArray().then((lists) => {
    res.setHeader('Content-Type', 'application/json');
    res.status(200).json(lists[0]);
  });
};

const createSpearData = async (req, res) => {
  const spear = {
    name: req.body.name,
    description: req.body.description,
    quality1: {
      recipe: req.body.recipe,
      weight: req.body.weight,
      durability: req.body.durability,
      pierce: req.body.pierce,
      backstab: req.body.backstab,
      stagger: req.body.stagger,
      knockback: req.body.knockback,
      parryBonus: req.body.parryBonus,
      movement: req.body.movement
    },
    quality2: {
      recipe: req.body.recipe,
      weight: req.body.weight,
      durability: req.body.durability,
      pierce: req.body.pierce,
      backstab: req.body.backstab,
      stagger: req.body.stagger,
      knockback: req.body.knockback,
      parryBonus: req.body.parryBonus,
      movement: req.body.movement
    },
    quality3: {
      recipe: req.body.recipe,
      weight: req.body.weight,
      durability: req.body.durability,
      pierce: req.body.pierce,
      backstab: req.body.backstab,
      stagger: req.body.stagger,
      knockback: req.body.knockback,
      parryBonus: req.body.parryBonus,
      movement: req.body.movement
    },
    quality4: {
      recipe: req.body.recipe,
      weight: req.body.weight,
      durability: req.body.durability,
      pierce: req.body.pierce,
      backstab: req.body.backstab,
      stagger: req.body.stagger,
      knockback: req.body.knockback,
      parryBonus: req.body.parryBonus,
      movement: req.body.movement
    }
  };
  const responce = await mongodb.getDb().db('valheim').collection('spears').insertOne(spear);
  if (responce.acknowledged) {
    res.status(201).json(responce);
  } else {
    res
      .status(500)
      .json(
        responce.error || 'Something went wrong while creating the spear data. Try again later.'
      );
  }
};

const updateSpearData = async (req, res) => {
  const userId = new ObjectId(req.params.id);
  const spear = {
    name: req.body.name,
    description: req.body.description,
    quality1: {
      recipe: req.body.recipe,
      weight: req.body.weight,
      durability: req.body.durability,
      pierce: req.body.pierce,
      backstab: req.body.backstab,
      stagger: req.body.stagger,
      knockback: req.body.knockback,
      parryBonus: req.body.parryBonus,
      movement: req.body.movement
    },
    quality2: {
      recipe: req.body.recipe,
      weight: req.body.weight,
      durability: req.body.durability,
      pierce: req.body.pierce,
      backstab: req.body.backstab,
      stagger: req.body.stagger,
      knockback: req.body.knockback,
      parryBonus: req.body.parryBonus,
      movement: req.body.movement
    },
    quality3: {
      recipe: req.body.recipe,
      weight: req.body.weight,
      durability: req.body.durability,
      pierce: req.body.pierce,
      backstab: req.body.backstab,
      stagger: req.body.stagger,
      knockback: req.body.knockback,
      parryBonus: req.body.parryBonus,
      movement: req.body.movement
    },
    quality4: {
      recipe: req.body.recipe,
      weight: req.body.weight,
      durability: req.body.durability,
      pierce: req.body.pierce,
      backstab: req.body.backstab,
      stagger: req.body.stagger,
      knockback: req.body.knockback,
      parryBonus: req.body.parryBonus,
      movement: req.body.movement
    }
  };
  const responce = await mongodb
    .getDb()
    .db('valheim')
    .collection('spears')
    .updateOne(
      { _id: userId },
      {
        $set: {
          name: spear.name,
          description: spear.description,
          quality1: {
            recipe: spear.quality1.recipe,
            weight: spear.quality1.weight,
            durability: spear.quality1.durability,
            pierce: spear.quality1.pierce,
            backstab: spear.quality1.backstab,
            stagger: spear.quality1.stagger,
            knockback: spear.quality1.knockback,
            parryBonus: spear.quality1.parryBonus,
            movement: spear.quality1.movement
          },
          quality2: {
            recipe: spear.quality2.recipe,
            weight: spear.quality2.weight,
            durability: spear.quality2.durability,
            pierce: spear.quality2.pierce,
            backstab: spear.quality2.backstab,
            stagger: spear.quality2.stagger,
            knockback: spear.quality2.knockback,
            parryBonus: spear.quality2.parryBonus,
            movement: spear.quality2.movement
          },
          quality3: {
            recipe: spear.quality3.recipe,
            weight: spear.quality3.weight,
            durability: spear.quality3.durability,
            pierce: spear.quality3.pierce,
            backstab: spear.quality3.backstab,
            stagger: spear.quality3.stagger,
            knockback: spear.quality3.knockback,
            parryBonus: spear.quality3.parryBonus,
            movement: spear.quality3.movement
          },
          quality4: {
            recipe: spear.quality4.recipe,
            weight: spear.quality4.weight,
            durability: spear.quality4.durability,
            pierce: spear.quality4.pierce,
            backstab: spear.quality4.backstab,
            stagger: spear.quality4.stagger,
            knockback: spear.quality4.knockback,
            parryBonus: spear.quality4.parryBonus,
            movement: spear.quality4.movement
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
        responce.error || 'Something went wrong while updating the spear data. Try again later.'
      );
  }
};

const deleteSpearData = async (req, res) => {
  const userId = new ObjectId(req.params.id);
  const responce = await mongodb
    .getDb()
    .db('valheim')
    .collection('spears')
    .deleteOne({ _id: userId }, true);
  if (responce.deletedCount > 0) {
    res.status(200).send();
  } else {
    res
      .status(500)
      .json(
        responce.error || 'Something went wrong while deleting the spear data. Try again later.'
      );
  }
};

module.exports = {
  getAllSpearData,
  getSpearDataById,
  createSpearData,
  updateSpearData,
  deleteSpearData
};
