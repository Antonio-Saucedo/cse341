const mongodb = require('../db/connect');
const ObjectId = require('mongodb').ObjectId;

const getAllClubData = async (req, res) => {
  const result = await mongodb.getDb().db('valheim').collection('clubs').find();
  result.toArray().then((lists) => {
    res.setHeader('Content-Type', 'application/json');
    res.status(200).json(lists);
  });
};

const getClubDataById = async (req, res) => {
  const userId = new ObjectId(req.params.id);
  const result = await mongodb.getDb().db('valheim').collection('clubs').find({ _id: userId });
  result.toArray().then((lists) => {
    res.setHeader('Content-Type', 'application/json');
    res.status(200).json(lists[0]);
  });
};

const createClubData = async (req, res) => {
  const club = {
    name: req.body.name,
    description: req.body.description,
    quality1: {
      recipe: req.body.recipe,
      weight: req.body.weight,
      durability: req.body.durability,
      blunt: req.body.blunt,
      pierce: req.body.pierce,
      fire: req.body.fire,
      spirit: req.body.spirit,
      frost: req.body.frost,
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
      blunt: req.body.blunt,
      pierce: req.body.pierce,
      fire: req.body.fire,
      spirit: req.body.spirit,
      frost: req.body.frost,
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
      blunt: req.body.blunt,
      pierce: req.body.pierce,
      fire: req.body.fire,
      spirit: req.body.spirit,
      frost: req.body.frost,
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
      blunt: req.body.blunt,
      pierce: req.body.pierce,
      fire: req.body.fire,
      spirit: req.body.spirit,
      frost: req.body.frost,
      backstab: req.body.backstab,
      stagger: req.body.stagger,
      knockback: req.body.knockback,
      blockForce: req.body.blockForce,
      parryBonus: req.body.parryBonus,
      movement: req.body.movement
    }
  };
  const responce = await mongodb.getDb().db('valheim').collection('clubs').insertOne(club);
  if (responce.acknowledged) {
    res.status(201).json(responce);
  } else {
    res
      .status(500)
      .json(
        responce.error || 'Something went wrong while creating the club data. Try again later.'
      );
  }
};

const updateClubData = async (req, res) => {
  const userId = new ObjectId(req.params.id);
  const club = {
    name: req.body.name,
    description: req.body.description,
    quality1: {
      recipe: req.body.recipe,
      weight: req.body.weight,
      durability: req.body.durability,
      blunt: req.body.blunt,
      pierce: req.body.pierce,
      fire: req.body.fire,
      spirit: req.body.spirit,
      frost: req.body.frost,
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
      blunt: req.body.blunt,
      pierce: req.body.pierce,
      fire: req.body.fire,
      spirit: req.body.spirit,
      frost: req.body.frost,
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
      blunt: req.body.blunt,
      pierce: req.body.pierce,
      fire: req.body.fire,
      spirit: req.body.spirit,
      frost: req.body.frost,
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
      blunt: req.body.blunt,
      pierce: req.body.pierce,
      fire: req.body.fire,
      spirit: req.body.spirit,
      frost: req.body.frost,
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
    .collection('clubs')
    .updateOne(
      { _id: userId },
      {
        $set: {
          name: club.name,
          description: club.description,
          quality1: {
            recipe: club.quality1.recipe,
            weight: club.quality1.weight,
            durability: club.quality1.durability,
            blunt: club.quality1.blunt,
            pierce: club.quality1.pierce,
            fire: club.quality1.fire,
            spirit: club.quality1.spirit,
            frost: club.quality1.frost,
            backstab: club.quality1.backstab,
            stagger: club.quality1.stagger,
            knockback: club.quality1.knockback,
            blockForce: club.quality1.blockForce,
            parryBonus: club.quality1.parryBonus,
            movement: club.quality1.movement
          },
          quality2: {
            recipe: club.quality2.recipe,
            weight: club.quality2.weight,
            durability: club.quality2.durability,
            blunt: club.quality2.blunt,
            pierce: club.quality2.pierce,
            fire: club.quality2.fire,
            spirit: club.quality2.spirit,
            frost: club.quality2.frost,
            backstab: club.quality2.backstab,
            stagger: club.quality2.stagger,
            knockback: club.quality2.knockback,
            blockForce: club.quality2.blockForce,
            parryBonus: club.quality2.parryBonus,
            movement: club.quality2.movement
          },
          quality3: {
            recipe: club.quality3.recipe,
            weight: club.quality3.weight,
            durability: club.quality3.durability,
            blunt: club.quality3.blunt,
            pierce: club.quality3.pierce,
            fire: club.quality3.fire,
            spirit: club.quality3.spirit,
            frost: club.quality3.frost,
            backstab: club.quality3.backstab,
            stagger: club.quality3.stagger,
            knockback: club.quality3.knockback,
            blockForce: club.quality3.blockForce,
            parryBonus: club.quality3.parryBonus,
            movement: club.quality3.movement
          },
          quality4: {
            recipe: club.quality4.recipe,
            weight: club.quality4.weight,
            durability: club.quality4.durability,
            blunt: club.quality4.blunt,
            pierce: club.quality4.pierce,
            fire: club.quality4.fire,
            spirit: club.quality4.spirit,
            frost: club.quality4.frost,
            backstab: club.quality4.backstab,
            stagger: club.quality4.stagger,
            knockback: club.quality4.knockback,
            blockForce: club.quality4.blockForce,
            parryBonus: club.quality4.parryBonus,
            movement: club.quality4.movement
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
        responce.error || 'Something went wrong while updating the club data. Try again later.'
      );
  }
};

const deleteClubData = async (req, res) => {
  const userId = new ObjectId(req.params.id);
  const responce = await mongodb
    .getDb()
    .db('valheim')
    .collection('clubs')
    .deleteOne({ _id: userId }, true);
  if (responce.deletedCount > 0) {
    res.status(200).send();
  } else {
    res
      .status(500)
      .json(
        responce.error || 'Something went wrong while deleting the club data. Try again later.'
      );
  }
};

module.exports = {
  getAllClubData,
  getClubDataById,
  createClubData,
  updateClubData,
  deleteClubData
};
