const mongodb = require('../db/connect');
// const ObjectId = require('mongodb').ObjectId;

const getAllShieldData = async (req, res) => {
  const result = await mongodb.getDb().db('valheim').collection('shields').find();
  result.toArray().then((lists) => {
    res.setHeader('Content-Type', 'application/json');
    res.status(200).json(lists);
  });
};

module.exports = { getAllShieldData };