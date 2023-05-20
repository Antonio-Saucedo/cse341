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
      .json(
        responce.error || 'Something went wrong while creating the food data. Try again later.'
      );
  }
};

const updateFoodData = async (req, res) => {
  const userId = new ObjectId(req.params.id);
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
  const responce = await mongodb
    .getDb()
    .db('valheim')
    .collection('food')
    .updateOne(
      { _id: userId },
      {
        $set: {
          name: food.name,
          description: food.description,
          recipe: food.recipe,
          weight: food.weight,
          stack: food.stack,
          maxHealth: food.maxHealth,
          maxStamina: food.maxStamina,
          maxEitr: food.maxEitr,
          duration: food.duration,
          healing: food.healing
        }
      }
    );
  if (responce.modifiedCount > 0) {
    res.status(204).send();
  } else {
    res
      .status(500)
      .json(
        responce.error || 'Something went wrong while updating the food data. Try again later.'
      );
  }
};

const deleteFoodData = async (req, res) => {
  const userId = new ObjectId(req.params.id);
  const responce = await mongodb
    .getDb()
    .db('valheim')
    .collection('food')
    .deleteOne({ _id: userId }, true);
  if (responce.deletedCount > 0) {
    res.status(200).send();
  } else {
    res
      .status(500)
      .json(
        responce.error || 'Something went wrong while deleting the food data. Try again later.'
      );
  }
};

module.exports = {
  getAllFoodData,
  getFoodDataById,
  createFoodData,
  updateFoodData,
  deleteFoodData
};
