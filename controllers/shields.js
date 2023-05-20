const mongodb = require('../db/connect');
const ObjectId = require('mongodb').ObjectId;

const getAllShieldData = async (req, res) => {
  const result = await mongodb.getDb().db('valheim').collection('shields').find();
  result.toArray().then((lists) => {
    res.setHeader('Content-Type', 'application/json');
    res.status(200).json(lists);
  });
};

const getShieldDataById = async (req, res) => {
  const userId = new ObjectId(req.params.id);
  const result = await mongodb.getDb().db('valheim').collection('shields').find({ _id: userId });
  result.toArray().then((lists) => {
    res.setHeader('Content-Type', 'application/json');
    res.status(200).json(lists[0]);
  });
};

const createShieldData = async (req, res) => {
  const shield = {
    name: req.body.name,
    description: req.body.description,
    quality1: {
      recipe: req.body.recipe,
      weight: req.body.weight,
      durability: req.body.durability,
      blockArmor: req.body.blockArmor,
      blockForce: req.body.blockForce,
      parryBonus: req.body.parryBonus,
      movement: req.body.movement
    },
    quality2: {
      recipe: req.body.recipe,
      weight: req.body.weight,
      durability: req.body.durability,
      blockArmor: req.body.blockArmor,
      blockForce: req.body.blockForce,
      parryBonus: req.body.parryBonus,
      movement: req.body.movement
    },
    quality3: {
      recipe: req.body.recipe,
      weight: req.body.weight,
      durability: req.body.durability,
      blockArmor: req.body.blockArmor,
      blockForce: req.body.blockForce,
      parryBonus: req.body.parryBonus,
      movement: req.body.movement
    },
    quality4: {
      recipe: req.body.recipe,
      weight: req.body.weight,
      durability: req.body.durability,
      blockArmor: req.body.blockArmor,
      blockForce: req.body.blockForce,
      parryBonus: req.body.parryBonus,
      movement: req.body.movement
    }
  };
  const responce = await mongodb.getDb().db('valheim').collection('shields').insertOne(shield);
  if (responce.acknowledged) {
    res.status(201).json(responce);
  } else {
    res
      .status(500)
      .json(
        responce.error || 'Something went wrong while creating the shield data. Try again later.'
      );
  }
};

const updateShieldData = async (req, res) => {
  const userId = new ObjectId(req.params.id);
  const shield = {
    name: req.body.name,
    description: req.body.description,
    quality1: {
      recipe: req.body.recipe,
      weight: req.body.weight,
      durability: req.body.durability,
      blockArmor: req.body.blockArmor,
      blockForce: req.body.blockForce,
      parryBonus: req.body.parryBonus,
      movement: req.body.movement
    },
    quality2: {
      recipe: req.body.recipe,
      weight: req.body.weight,
      durability: req.body.durability,
      blockArmor: req.body.blockArmor,
      blockForce: req.body.blockForce,
      parryBonus: req.body.parryBonus,
      movement: req.body.movement
    },
    quality3: {
      recipe: req.body.recipe,
      weight: req.body.weight,
      durability: req.body.durability,
      blockArmor: req.body.blockArmor,
      blockForce: req.body.blockForce,
      parryBonus: req.body.parryBonus,
      movement: req.body.movement
    },
    quality4: {
      recipe: req.body.recipe,
      weight: req.body.weight,
      durability: req.body.durability,
      blockArmor: req.body.blockArmor,
      blockForce: req.body.blockForce,
      parryBonus: req.body.parryBonus,
      movement: req.body.movement
    }
  };
  const responce = await mongodb
    .getDb()
    .db('valheim')
    .collection('shields')
    .updateOne(
      { _id: userId },
      {
        $set: {
          name: shield.name,
          description: shield.description,
          quality1: {
            recipe: shield.quality1.recipe,
            weight: shield.quality1.weight,
            durability: shield.quality1.durability,
            blockArmor: shield.quality1.blockArmor,
            blockForce: shield.quality1.blockForce,
            parryBonus: shield.quality1.parryBonus,
            movement: shield.quality1.movement
          },
          quality2: {
            recipe: shield.quality2.recipe,
            weight: shield.quality2.weight,
            durability: shield.quality2.durability,
            blockArmor: shield.quality2.blockArmor,
            blockForce: shield.quality2.blockForce,
            parryBonus: shield.quality2.parryBonus,
            movement: shield.quality2.movement
          },
          quality3: {
            recipe: shield.quality3.recipe,
            weight: shield.quality3.weight,
            durability: shield.quality3.durability,
            blockArmor: shield.quality3.blockArmor,
            blockForce: shield.quality3.blockForce,
            parryBonus: shield.quality3.parryBonus,
            movement: shield.quality3.movement
          },
          quality4: {
            recipe: shield.quality4.recipe,
            weight: shield.quality4.weight,
            durability: shield.quality4.durability,
            blockArmor: shield.quality4.blockArmor,
            blockForce: shield.quality4.blockForce,
            parryBonus: shield.quality4.parryBonus,
            movement: shield.quality4.movement
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
        responce.error || 'Something went wrong while updating the shield data. Try again later.'
      );
  }
};

const deleteShieldData = async (req, res) => {
  const userId = new ObjectId(req.params.id);
  const responce = await mongodb
    .getDb()
    .db('valheim')
    .collection('shields')
    .deleteOne({ _id: userId }, true);
  if (responce.deletedCount > 0) {
    res.status(200).send();
  } else {
    res
      .status(500)
      .json(
        responce.error || 'Something went wrong while deleting the shield data. Try again later.'
      );
  }
};

module.exports = {
  getAllShieldData,
  getShieldDataById,
  createShieldData,
  updateShieldData,
  deleteShieldData
};
