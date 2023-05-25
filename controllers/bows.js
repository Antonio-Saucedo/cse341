const mongodb = require('../db/connect');
const ObjectId = require('mongodb').ObjectId;

const getAllBowData = async (req, res) => {
  const result = await mongodb.getDb().db('valheim').collection('bows').find();
  result.toArray().then((lists) => {
    res.setHeader('Content-Type', 'application/json');
    res.status(200).json(lists);
  });
};

const getBowDataById = async (req, res) => {
  const userId = new ObjectId(req.params.id);
  const result = await mongodb.getDb().db('valheim').collection('bows').find({ _id: userId });
  result.toArray().then((lists) => {
    res.setHeader('Content-Type', 'application/json');
    res.status(200).json(lists[0]);
  });
};

const createBowData = async (req, res) => {
  const bow = {
    name: req.body.name,
    description: req.body.description,
    quality1: {
      recipe: req.body.recipe,
      weight: req.body.weight,
      durability: req.body.durability,
      pierce: req.body.pierce,
      spirit: req.body.spirit,
      poison: req.body.poison,
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
      spirit: req.body.spirit,
      poison: req.body.poison,
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
      spirit: req.body.spirit,
      poison: req.body.poison,
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
      spirit: req.body.spirit,
      poison: req.body.poison,
      backstab: req.body.backstab,
      stagger: req.body.stagger,
      knockback: req.body.knockback,
      parryBonus: req.body.parryBonus,
      movement: req.body.movement
    }
  };
  const responce = await mongodb.getDb().db('valheim').collection('bows').insertOne(bow);
  if (responce.acknowledged) {
    res.status(201).json(responce);
  } else {
    res
      .status(500)
      .json(responce.error || 'Something went wrong while creating the bow data. Try again later.');
  }
};

const updateBowData = async (req, res) => {
  const userId = new ObjectId(req.params.id);
  const bow = {
    name: req.body.name,
    description: req.body.description,
    quality1: {
      recipe: req.body.recipe,
      weight: req.body.weight,
      durability: req.body.durability,
      pierce: req.body.pierce,
      spirit: req.body.spirit,
      poison: req.body.poison,
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
      spirit: req.body.spirit,
      poison: req.body.poison,
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
      spirit: req.body.spirit,
      poison: req.body.poison,
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
      spirit: req.body.spirit,
      poison: req.body.poison,
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
    .collection('bows')
    .updateOne(
      { _id: userId },
      {
        $set: {
          name: bow.name,
          description: bow.description,
          quality1: {
            recipe: bow.quality1.recipe,
            weight: bow.quality1.weight,
            durability: bow.quality1.durability,
            pierce: bow.quality1.pierce,
            spirit: bow.quality1.spirit,
            poison: bow.quality1.poison,
            backstab: bow.quality1.backstab,
            stagger: bow.quality1.stagger,
            knockback: bow.quality4.knockback,
            parryBonus: bow.quality1.parryBonus,
            movement: bow.quality1.movement
          },
          quality2: {
            recipe: bow.quality2.recipe,
            weight: bow.quality2.weight,
            durability: bow.quality2.durability,
            pierce: bow.quality2.pierce,
            spirit: bow.quality2.spirit,
            poison: bow.quality2.poison,
            backstab: bow.quality2.backstab,
            stagger: bow.quality2.stagger,
            knockback: bow.quality4.knockback,
            parryBonus: bow.quality2.parryBonus,
            movement: bow.quality2.movement
          },
          quality3: {
            recipe: bow.quality3.recipe,
            weight: bow.quality3.weight,
            durability: bow.quality3.durability,
            pierce: bow.quality3.pierce,
            spirit: bow.quality3.spirit,
            poison: bow.quality3.poison,
            backstab: bow.quality3.backstab,
            stagger: bow.quality3.stagger,
            knockback: bow.quality4.knockback,
            parryBonus: bow.quality3.parryBonus,
            movement: bow.quality3.movement
          },
          quality4: {
            recipe: bow.quality4.recipe,
            weight: bow.quality4.weight,
            durability: bow.quality4.durability,
            pierce: bow.quality4.pierce,
            spirit: bow.quality4.spirit,
            poison: bow.quality4.poison,
            backstab: bow.quality4.backstab,
            stagger: bow.quality4.stagger,
            knockback: bow.quality4.knockback,
            parryBonus: bow.quality4.parryBonus,
            movement: bow.quality4.movement
          }
        }
      }
    );
  if (responce.modifiedCount > 0) {
    res.status(204).send();
  } else {
    res
      .status(500)
      .json(responce.error || 'Something went wrong while updating the bow data. Try again later.');
  }
};

const deleteBowData = async (req, res) => {
  const userId = new ObjectId(req.params.id);
  const responce = await mongodb
    .getDb()
    .db('valheim')
    .collection('bows')
    .deleteOne({ _id: userId }, true);
  if (responce.deletedCount > 0) {
    res.status(200).send();
  } else {
    res
      .status(500)
      .json(responce.error || 'Something went wrong while deleting the bow data. Try again later.');
  }
};

module.exports = { getAllBowData, getBowDataById, createBowData, updateBowData, deleteBowData };
