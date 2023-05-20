const mongodb = require('../db/connect');
const ObjectId = require('mongodb').ObjectId;

const getAllAxeData = async (req, res) => {
  const result = await mongodb.getDb().db('valheim').collection('axes').find();
  result.toArray().then((lists) => {
    res.setHeader('Content-Type', 'application/json');
    res.status(200).json(lists);
  });
};

const getAxeDataById = async (req, res) => {
  const userId = new ObjectId(req.params.id);
  const result = await mongodb.getDb().db('valheim').collection('axes').find({ _id: userId });
  result.toArray().then((lists) => {
    res.setHeader('Content-Type', 'application/json');
    res.status(200).json(lists[0]);
  });
};

const createAxeData = async (req, res) => {
  const axe = {
    name: req.body.name,
    description: req.body.description,
    quality1: {
      recipe: req.body.recipe,
      weight: req.body.weight,
      durability: req.body.durability,
      slash: req.body.slash,
      spirit: req.body.spirit,
      poison: req.body.poison,
      chop: req.body.chop,
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
      slash: req.body.slash,
      spirit: req.body.spirit,
      poison: req.body.poison,
      chop: req.body.chop,
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
      slash: req.body.slash,
      spirit: req.body.spirit,
      poison: req.body.poison,
      chop: req.body.chop,
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
      slash: req.body.slash,
      spirit: req.body.spirit,
      poison: req.body.poison,
      chop: req.body.chop,
      backstab: req.body.backstab,
      stagger: req.body.stagger,
      knockback: req.body.knockback,
      blockForce: req.body.blockForce,
      parryBonus: req.body.parryBonus,
      movement: req.body.movement
    }
  };
  const responce = await mongodb.getDb().db('valheim').collection('axes').insertOne(axe);
  if (responce.acknowledged) {
    res.status(201).json(responce);
  } else {
    res
      .status(500)
      .json(responce.error || 'Something went wrong while creating the axe data. Try again later.');
  }
};

const updateAxeData = async (req, res) => {
  const userId = new ObjectId(req.params.id);
  const axe = {
    name: req.body.name,
    description: req.body.description,
    quality1: {
      recipe: req.body.recipe,
      weight: req.body.weight,
      durability: req.body.durability,
      slash: req.body.slash,
      spirit: req.body.spirit,
      poison: req.body.poison,
      chop: req.body.chop,
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
      slash: req.body.slash,
      spirit: req.body.spirit,
      poison: req.body.poison,
      chop: req.body.chop,
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
      slash: req.body.slash,
      spirit: req.body.spirit,
      poison: req.body.poison,
      chop: req.body.chop,
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
      slash: req.body.slash,
      spirit: req.body.spirit,
      poison: req.body.poison,
      chop: req.body.chop,
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
    .collection('axes')
    .updateOne(
      { _id: userId },
      {
        $set: {
          name: axe.name,
          description: axe.description,
          quality1: {
            recipe: axe.quality1.recipe,
            weight: axe.quality1.weight,
            durability: axe.quality1.durability,
            slash: axe.quality1.slash,
            spirit: axe.quality1.spirit,
            poison: axe.quality1.poison,
            chop: axe.quality1.chop,
            backstab: axe.quality1.backstab,
            stagger: axe.quality1.stagger,
            knockback: axe.quality1.knockback,
            blockForce: axe.quality1.blockForce,
            parryBonus: axe.quality1.parryBonus,
            movement: axe.quality1.movement
          },
          quality2: {
            recipe: axe.quality2.recipe,
            weight: axe.quality2.weight,
            durability: axe.quality2.durability,
            slash: axe.quality2.slash,
            spirit: axe.quality2.spirit,
            poison: axe.quality2.poison,
            chop: axe.quality2.chop,
            backstab: axe.quality2.backstab,
            stagger: axe.quality2.stagger,
            knockback: axe.quality2.knockback,
            blockForce: axe.quality2.blockForce,
            parryBonus: axe.quality2.parryBonus,
            movement: axe.quality2.movement
          },
          quality3: {
            recipe: axe.quality3.recipe,
            weight: axe.quality3.weight,
            durability: axe.quality3.durability,
            slash: axe.quality3.slash,
            spirit: axe.quality3.spirit,
            poison: axe.quality3.poison,
            chop: axe.quality3.chop,
            backstab: axe.quality3.backstab,
            stagger: axe.quality3.stagger,
            knockback: axe.quality3.knockback,
            blockForce: axe.quality3.blockForce,
            parryBonus: axe.quality3.parryBonus,
            movement: axe.quality3.movement
          },
          quality4: {
            recipe: axe.quality4.recipe,
            weight: axe.quality4.weight,
            durability: axe.quality4.durability,
            slash: axe.quality4.slash,
            spirit: axe.quality4.spirit,
            poison: axe.quality4.poison,
            chop: axe.quality4.chop,
            backstab: axe.quality4.backstab,
            stagger: axe.quality4.stagger,
            knockback: axe.quality4.knockback,
            blockForce: axe.quality4.blockForce,
            parryBonus: axe.quality4.parryBonus,
            movement: axe.quality4.movement
          }
        }
      }
    );
  if (responce.modifiedCount > 0) {
    res.status(204).send();
  } else {
    res
      .status(500)
      .json(responce.error || 'Something went wrong while updating the axe data. Try again later.');
  }
};

const deleteAxeData = async (req, res) => {
  const userId = new ObjectId(req.params.id);
  const responce = await mongodb
    .getDb()
    .db('valheim')
    .collection('axes')
    .deleteOne({ _id: userId }, true);
  if (responce.deletedCount > 0) {
    res.status(200).send();
  } else {
    res
      .status(500)
      .json(responce.error || 'Something went wrong while deleting the axe data. Try again later.');
  }
};

module.exports = { getAllAxeData, getAxeDataById, createAxeData, updateAxeData, deleteAxeData };
