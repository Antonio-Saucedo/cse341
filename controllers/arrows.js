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

const createArrowData = async (req, res) => {
  const arrow = {
    name: req.body.name,
    description: req.body.description,
    recipe: req.body.recipe,
    quantity: req.body.quantity,
    weight: req.body.weight,
    pierce: req.body.pierce,
    fire: req.body.fire,
    spirit: req.body.spirit,
    poison: req.body.poison,
    frost: req.body.frost,
    stagger: req.body.stagger,
    knockback: req.body.knockback
  };
  const responce = await mongodb.getDb().db('valheim').collection('arrows').insertOne(arrow);
  if (responce.acknowledged) {
    res.status(201).json(responce);
  } else {
    res
      .status(500)
      .json(responce.error || 'Something went wrong while creating the contact. Try again later.');
  }
};

module.exports = { getAllArrowData, getArrowDataById, createArrowData };