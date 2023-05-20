const mongodb = require('../db/connect');
const ObjectId = require('mongodb').ObjectId;

const getAllPickaxeData = async (req, res) => {
  const result = await mongodb.getDb().db('valheim').collection('pickaxe').find();
  result.toArray().then((lists) => {
    res.setHeader('Content-Type', 'application/json');
    res.status(200).json(lists);
  });
};

const getPickaxeDataById = async (req, res) => {
  const userId = new ObjectId(req.params.id);
  const result = await mongodb.getDb().db('valheim').collection('pickaxe').find({ _id: userId });
  result.toArray().then((lists) => {
    res.setHeader('Content-Type', 'application/json');
    res.status(200).json(lists[0]);
  });
};

module.exports = { getAllPickaxeData, getPickaxeDataById };