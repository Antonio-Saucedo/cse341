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

module.exports = { getAllFoodData, getFoodDataById };