const mongodb = require('../db/connect');
const ObjectId = require('mongodb').ObjectId;

const getAllFoodData = async (req, res) => {
  const result = await mongodb.getDb().db('valheim').collection('food').find();
  result.toArray().then((lists) => {
    res.setHeader('Content-Type', 'application/json');
    res.status(200).json(lists);
  });
};

const getFoodDataById = async (req, res) => {
  const userId = new ObjectId(req.params.id);
  const result = await mongodb.getDb().db('valheim').collection('food').find({ _id: userId });
  result.toArray().then((lists) => {
    res.setHeader('Content-Type', 'application/json');
    res.status(200).json(lists[0]);
  });
};

const createFoodData = async (req, res) => {
  const food = {
    name: req.body.name,
    description: req.body.description,
    recipe: req.body.recipe,
    weight: req.body.weight,
    stack: req.body.stack,
    maxHealth: req.body.maxHealth,
    maxStamina: req.body.maxStamina,
    maxEitr: req.body.maxEitr,
    duration: req.body.duration,
    healing: req.body.healing
  };
  const responce = await mongodb.getDb().db('valheim').collection('food').insertOne(food);
  if (responce.acknowledged) {
    res.status(201).json(responce);
  } else {
    res
      .status(500)
      .json(responce.error || 'Something went wrong while creating the contact. Try again later.');
  }
};

module.exports = { getAllFoodData, getFoodDataById, createFoodData };