const mongodb = require('../db/connect');
const ObjectId = require('mongodb').ObjectId;

const getAllSwordData = async (req, res) => {
  const result = await mongodb.getDb().db('valheim').collection('swords').find();
  result.toArray().then((lists) => {
    res.setHeader('Content-Type', 'application/json');
    res.status(200).json(lists);
  });
};

const getSwordDataById = async (req, res) => {
  const userId = new ObjectId(req.params.id);
  const result = await mongodb.getDb().db('valheim').collection('swords').find({ _id: userId });
  result.toArray().then((lists) => {
    res.setHeader('Content-Type', 'application/json');
    res.status(200).json(lists[0]);
  });
};

const createSwordData = async (req, res) => {
  const sword = {
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
  const responce = await mongodb.getDb().db('valheim').collection('swords').insertOne(sword);
  if (responce.acknowledged) {
    res.status(201).json(responce);
  } else {
    res
      .status(500)
      .json(
        responce.error || 'Something went wrong while creating the sword data. Try again later.'
      );
  }
};

const updateSwordData = async (req, res) => {
  const userId = new ObjectId(req.params.id);
  const sword = {
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
    .collection('swords')
    .updateOne(
      { _id: userId },
      {
        $set: {
          name: sword.name,
          description: sword.description,
          quality1: {
            recipe: sword.quality1.recipe,
            weight: sword.quality1.weight,
            durability: sword.quality1.durability,
            pierce: sword.quality1.pierce,
            backstab: sword.quality1.backstab,
            stagger: sword.quality1.stagger,
            knockback: sword.quality1.knockback,
            parryBonus: sword.quality1.parryBonus,
            movement: sword.quality1.movement
          },
          quality2: {
            recipe: sword.quality2.recipe,
            weight: sword.quality2.weight,
            durability: sword.quality2.durability,
            pierce: sword.quality2.pierce,
            backstab: sword.quality2.backstab,
            stagger: sword.quality2.stagger,
            knockback: sword.quality2.knockback,
            parryBonus: sword.quality2.parryBonus,
            movement: sword.quality2.movement
          },
          quality3: {
            recipe: sword.quality3.recipe,
            weight: sword.quality3.weight,
            durability: sword.quality3.durability,
            pierce: sword.quality3.pierce,
            backstab: sword.quality3.backstab,
            stagger: sword.quality3.stagger,
            knockback: sword.quality3.knockback,
            parryBonus: sword.quality3.parryBonus,
            movement: sword.quality3.movement
          },
          quality4: {
            recipe: sword.quality4.recipe,
            weight: sword.quality4.weight,
            durability: sword.quality4.durability,
            pierce: sword.quality4.pierce,
            backstab: sword.quality4.backstab,
            stagger: sword.quality4.stagger,
            knockback: sword.quality4.knockback,
            parryBonus: sword.quality4.parryBonus,
            movement: sword.quality4.movement
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
        responce.error || 'Something went wrong while updating the sword data. Try again later.'
      );
  }
};

const deleteSwordData = async (req, res) => {
  const userId = new ObjectId(req.params.id);
  const responce = await mongodb
    .getDb()
    .db('valheim')
    .collection('swords')
    .deleteOne({ _id: userId }, true);
  if (responce.deletedCount > 0) {
    res.status(200).send();
  } else {
    res
      .status(500)
      .json(
        responce.error || 'Something went wrong while deleting the sword data. Try again later.'
      );
  }
};

module.exports = {
  getAllSwordData,
  getSwordDataById,
  createSwordData,
  updateSwordData,
  deleteSwordData
};
