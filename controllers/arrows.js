const mongodb = require('../db/connect');
const ObjectId = require('mongodb').ObjectId;

const getAllArrowData = async (req, res) => {
  const result = await mongodb.getDb().db('valheim').collection('arrows').find();
  result.toArray().then((lists) => {
    res.setHeader('Content-Type', 'application/json');
    res.status(200).json(lists);
  });
};

const getArrowDataById = async (req, res) => {
  const userId = new ObjectId(req.params.id);
  const result = await mongodb.getDb().db('valheim').collection('arrows').find({ _id: userId });
  result.toArray().then((lists) => {
    res.setHeader('Content-Type', 'application/json');
    res.status(200).json(lists[0]);
  });
};

module.exports = { getAllArrowData, getArrowDataById };