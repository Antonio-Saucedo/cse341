const mongodb = require('../db/connect');
const ObjectId = require('mongodb').ObjectId;

const getAllFistData = async (req, res) => {
  const result = await mongodb.getDb().db('valheim').collection('fists').find();
  result.toArray().then((lists) => {
    res.setHeader('Content-Type', 'application/json');
    res.status(200).json(lists);
  });
};

const getFistDataById = async (req, res) => {
  const userId = new ObjectId(req.params.id);
  const result = await mongodb.getDb().db('valheim').collection('fists').find({ _id: userId });
  result.toArray().then((lists) => {
    res.setHeader('Content-Type', 'application/json');
    res.status(200).json(lists[0]);
  });
};

const createFistData = async (req, res) => {
  const fist = {
    name: req.body.name,
    description: req.body.description,
    quality1: {
      recipe: req.body.recipe,
      weight: req.body.weight,
      durability: req.body.durability,
      slash: req.body.slash,
      backstab: req.body.backstab,
      stagger: req.body.stagger,
      blockForce: req.body.blockForce,
      parryBonus: req.body.parryBonus
    },
    quality2: {
      recipe: req.body.recipe,
      weight: req.body.weight,
      durability: req.body.durability,
      slash: req.body.slash,
      backstab: req.body.backstab,
      stagger: req.body.stagger,
      blockForce: req.body.blockForce,
      parryBonus: req.body.parryBonus
    },
    quality3: {
      recipe: req.body.recipe,
      weight: req.body.weight,
      durability: req.body.durability,
      slash: req.body.slash,
      backstab: req.body.backstab,
      stagger: req.body.stagger,
      blockForce: req.body.blockForce,
      parryBonus: req.body.parryBonus
    },
    quality4: {
      recipe: req.body.recipe,
      weight: req.body.weight,
      durability: req.body.durability,
      slash: req.body.slash,
      backstab: req.body.backstab,
      stagger: req.body.stagger,
      blockForce: req.body.blockForce,
      parryBonus: req.body.parryBonus
    }
  };
  const responce = await mongodb.getDb().db('valheim').collection('fists').insertOne(fist);
  if (responce.acknowledged) {
    res.status(201).json(responce);
  } else {
    res
      .status(500)
      .json(
        responce.error || 'Something went wrong while creating the fist data. Try again later.'
      );
  }
};

const updateFistData = async (req, res) => {
  const userId = new ObjectId(req.params.id);
  const fist = {
    name: req.body.name,
    description: req.body.description,
    quality1: {
      recipe: req.body.recipe,
      weight: req.body.weight,
      durability: req.body.durability,
      slash: req.body.slash,
      backstab: req.body.backstab,
      stagger: req.body.stagger,
      blockForce: req.body.blockForce,
      parryBonus: req.body.parryBonus
    },
    quality2: {
      recipe: req.body.recipe,
      weight: req.body.weight,
      durability: req.body.durability,
      slash: req.body.slash,
      backstab: req.body.backstab,
      stagger: req.body.stagger,
      blockForce: req.body.blockForce,
      parryBonus: req.body.parryBonus
    },
    quality3: {
      recipe: req.body.recipe,
      weight: req.body.weight,
      durability: req.body.durability,
      slash: req.body.slash,
      backstab: req.body.backstab,
      stagger: req.body.stagger,
      blockForce: req.body.blockForce,
      parryBonus: req.body.parryBonus
    },
    quality4: {
      recipe: req.body.recipe,
      weight: req.body.weight,
      durability: req.body.durability,
      slash: req.body.slash,
      backstab: req.body.backstab,
      stagger: req.body.stagger,
      blockForce: req.body.blockForce,
      parryBonus: req.body.parryBonus
    }
  };
  const responce = await mongodb
    .getDb()
    .db('valheim')
    .collection('fists')
    .updateOne(
      { _id: userId },
      {
        $set: {
          name: fist.name,
          description: fist.description,
          quality1: {
            recipe: fist.quality1.recipe,
            weight: fist.quality1.weight,
            durability: fist.quality1.durability,
            slash: fist.quality1.slash,
            backstab: fist.quality1.backstab,
            stagger: fist.quality1.stagger,
            blockForce: fist.quality1.blockForce,
            parryBonus: fist.quality1.parryBonus
          },
          quality2: {
            recipe: fist.quality2.recipe,
            weight: fist.quality2.weight,
            durability: fist.quality2.durability,
            slash: fist.quality2.slash,
            backstab: fist.quality2.backstab,
            stagger: fist.quality2.stagger,
            blockForce: fist.quality2.blockForce,
            parryBonus: fist.quality2.parryBonus
          },
          quality3: {
            recipe: fist.quality3.recipe,
            weight: fist.quality3.weight,
            durability: fist.quality3.durability,
            slash: fist.quality3.slash,
            backstab: fist.quality3.backstab,
            stagger: fist.quality3.stagger,
            blockForce: fist.quality3.blockForce,
            parryBonus: fist.quality3.parryBonus
          },
          quality4: {
            recipe: fist.quality4.recipe,
            weight: fist.quality4.weight,
            durability: fist.quality4.durability,
            slash: fist.quality4.slash,
            backstab: fist.quality4.backstab,
            stagger: fist.quality4.stagger,
            blockForce: fist.quality4.blockForce,
            parryBonus: fist.quality4.parryBonus
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
        responce.error || 'Something went wrong while updating the fist data. Try again later.'
      );
  }
};

const deleteFistData = async (req, res) => {
  const userId = new ObjectId(req.params.id);
  const responce = await mongodb
    .getDb()
    .db('valheim')
    .collection('fists')
    .deleteOne({ _id: userId }, true);
  if (responce.deletedCount > 0) {
    res.status(200).send();
  } else {
    res
      .status(500)
      .json(
        responce.error || 'Something went wrong while deleting the fist data. Try again later.'
      );
  }
};

module.exports = {
  getAllFistData,
  getFistDataById,
  createFistData,
  updateFistData,
  deleteFistData
};
