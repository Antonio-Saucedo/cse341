const mongodb = require('../db/connect');
const ObjectId = require('mongodb').ObjectId;

const getAllKnifeData = async (req, res) => {
  const result = await mongodb.getDb().db('valheim').collection('knifes').find();
  result.toArray().then((lists) => {
    res.setHeader('Content-Type', 'application/json');
    res.status(200).json(lists);
  });
};

const getKnifeDataById = async (req, res) => {
  const userId = new ObjectId(req.params.id);
  const result = await mongodb.getDb().db('valheim').collection('knifes').find({ _id: userId });
  result.toArray().then((lists) => {
    res.setHeader('Content-Type', 'application/json');
    res.status(200).json(lists[0]);
  });
};

const createKnifeData = async (req, res) => {
  const knife = {
    name: req.body.name,
    description: req.body.description,
    quality1: {
      recipe: req.body.recipe,
      weight: req.body.weight,
      durability: req.body.durability,
      pierce: req.body.pierce,
      slash: req.body.slash,
      spirit: req.body.spirit,
      backstab: req.body.backstab,
      stagger: req.body.stagger,
      knockback: req.body.knockback,
      blockForce: req.body.blockForce,
      parryBonus: req.body.parryBonus
    },
    quality2: {
      recipe: req.body.recipe,
      weight: req.body.weight,
      durability: req.body.durability,
      pierce: req.body.pierce,
      slash: req.body.slash,
      spirit: req.body.spirit,
      backstab: req.body.backstab,
      stagger: req.body.stagger,
      knockback: req.body.knockback,
      blockForce: req.body.blockForce,
      parryBonus: req.body.parryBonus
    },
    quality3: {
      recipe: req.body.recipe,
      weight: req.body.weight,
      durability: req.body.durability,
      pierce: req.body.pierce,
      slash: req.body.slash,
      spirit: req.body.spirit,
      backstab: req.body.backstab,
      stagger: req.body.stagger,
      knockback: req.body.knockback,
      blockForce: req.body.blockForce,
      parryBonus: req.body.parryBonus
    },
    quality4: {
      recipe: req.body.recipe,
      weight: req.body.weight,
      durability: req.body.durability,
      pierce: req.body.pierce,
      slash: req.body.slash,
      spirit: req.body.spirit,
      backstab: req.body.backstab,
      stagger: req.body.stagger,
      knockback: req.body.knockback,
      blockForce: req.body.blockForce,
      parryBonus: req.body.parryBonus
    }
  };
  const responce = await mongodb.getDb().db('valheim').collection('knifes').insertOne(knife);
  if (responce.acknowledged) {
    res.status(201).json(responce);
  } else {
    res
      .status(500)
      .json(
        responce.error || 'Something went wrong while creating the knife data. Try again later.'
      );
  }
};

const updateKnifeData = async (req, res) => {
  const userId = new ObjectId(req.params.id);
  const knife = {
    name: req.body.name,
    description: req.body.description,
    quality1: {
      recipe: req.body.recipe,
      weight: req.body.weight,
      durability: req.body.durability,
      pierce: req.body.pierce,
      slash: req.body.slash,
      spirit: req.body.spirit,
      backstab: req.body.backstab,
      stagger: req.body.stagger,
      knockback: req.body.knockback,
      blockForce: req.body.blockForce,
      parryBonus: req.body.parryBonus
    },
    quality2: {
      recipe: req.body.recipe,
      weight: req.body.weight,
      durability: req.body.durability,
      pierce: req.body.pierce,
      slash: req.body.slash,
      spirit: req.body.spirit,
      backstab: req.body.backstab,
      stagger: req.body.stagger,
      knockback: req.body.knockback,
      blockForce: req.body.blockForce,
      parryBonus: req.body.parryBonus
    },
    quality3: {
      recipe: req.body.recipe,
      weight: req.body.weight,
      durability: req.body.durability,
      pierce: req.body.pierce,
      slash: req.body.slash,
      spirit: req.body.spirit,
      backstab: req.body.backstab,
      stagger: req.body.stagger,
      knockback: req.body.knockback,
      blockForce: req.body.blockForce,
      parryBonus: req.body.parryBonus
    },
    quality4: {
      recipe: req.body.recipe,
      weight: req.body.weight,
      durability: req.body.durability,
      pierce: req.body.pierce,
      slash: req.body.slash,
      spirit: req.body.spirit,
      backstab: req.body.backstab,
      stagger: req.body.stagger,
      knockback: req.body.knockback,
      blockForce: req.body.blockForce,
      parryBonus: req.body.parryBonus
    }
  };
  const responce = await mongodb
    .getDb()
    .db('valheim')
    .collection('knifes')
    .updateOne(
      { _id: userId },
      {
        $set: {
          name: knife.name,
          description: knife.description,
          quality1: {
            recipe: knife.quality1.recipe,
            weight: knife.quality1.weight,
            durability: knife.quality1.durability,
            pierce: knife.quality1.pierce,
            slash: knife.quality1.slash,
            spirit: knife.quality1.spirit,
            backstab: knife.quality1.backstab,
            stagger: knife.quality1.stagger,
            knockback: knife.quality1.knockback,
            blockForce: knife.quality1.blockForce,
            parryBonus: knife.quality1.parryBonus
          },
          quality2: {
            recipe: knife.quality2.recipe,
            weight: knife.quality2.weight,
            durability: knife.quality2.durability,
            pierce: knife.quality2.pierce,
            slash: knife.quality2.slash,
            spirit: knife.quality2.spirit,
            backstab: knife.quality2.backstab,
            stagger: knife.quality2.stagger,
            knockback: knife.quality2.knockback,
            blockForce: knife.quality2.blockForce,
            parryBonus: knife.quality2.parryBonus
          },
          quality3: {
            recipe: knife.quality3.recipe,
            weight: knife.quality3.weight,
            durability: knife.quality3.durability,
            pierce: knife.quality3.pierce,
            slash: knife.quality3.slash,
            spirit: knife.quality3.spirit,
            backstab: knife.quality3.backstab,
            stagger: knife.quality3.stagger,
            knockback: knife.quality3.knockback,
            blockForce: knife.quality3.blockForce,
            parryBonus: knife.quality3.parryBonus
          },
          quality4: {
            recipe: knife.quality4.recipe,
            weight: knife.quality4.weight,
            durability: knife.quality4.durability,
            pierce: knife.quality4.pierce,
            slash: knife.quality4.slash,
            spirit: knife.quality4.spirit,
            backstab: knife.quality4.backstab,
            stagger: knife.quality4.stagger,
            knockback: knife.quality4.knockback,
            blockForce: knife.quality4.blockForce,
            parryBonus: knife.quality4.parryBonus
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
        responce.error || 'Something went wrong while updating the knife data. Try again later.'
      );
  }
};

const deleteKnifeData = async (req, res) => {
  const userId = new ObjectId(req.params.id);
  const responce = await mongodb
    .getDb()
    .db('valheim')
    .collection('knifes')
    .deleteOne({ _id: userId }, true);
  if (responce.deletedCount > 0) {
    res.status(200).send();
  } else {
    res
      .status(500)
      .json(
        responce.error || 'Something went wrong while deleting the knife data. Try again later.'
      );
  }
};

module.exports = {
  getAllKnifeData,
  getKnifeDataById,
  createKnifeData,
  updateKnifeData,
  deleteKnifeData
};
