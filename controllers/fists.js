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
  const responce = await mongodb.getDb().db('valheim').collection('clubs').insertOne(fist);
  if (responce.acknowledged) {
    res.status(201).json(responce);
  } else {
    res
      .status(500)
      .json(responce.error || 'Something went wrong while creating the contact. Try again later.');
  }
};

module.exports = { getAllFistData, getFistDataById, createFistData };