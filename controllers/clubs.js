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
      .json(responce.error || 'Something went wrong while creating the contact. Try again later.');
  }
};

module.exports = { getAllClubData, getClubDataById, createClubData };