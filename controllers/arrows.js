const mongodb = require('../db/connect');
const ObjectId = require('mongodb').ObjectId;

const getAllArrowData = async (req, res) => {
  try {
    await mongodb
      .getDb()
      .db('valheim')
      .collection('arrows')
      .find()
      .toArray((err, result) => {
        if (err) {
          res.status(400).json({ message: err });
        }
        res.setHeader('Content-Type', 'application/json');
        res.status(200).json(result);
      });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
};

const getArrowDataById = async (req, res) => {
  try {
    const userId = new ObjectId(req.params.id);
    await mongodb
      .getDb()
      .db('valheim')
      .collection('arrows')
      .find({ _id: userId })
      .toArray((err, result) => {
        if (err) {
          res.status(400).json({ message: err });
        }
        res.setHeader('Content-Type', 'application/json');
        res.status(200).json(result[0]);
      });
  } catch (err) {
    res.status(500).json(err);
  }
};

const createArrowData = async (req, res) => {
  try {
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
        .json(
          responce.error || 'Something went wrong while creating the arrow data. Try again later.'
        );
    }
  } catch (err) {
    res.status(500).json(err);
  }
};

const updateArrowData = async (req, res) => {
  try {
    const userId = new ObjectId(req.params.id);
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
    const responce = await mongodb
      .getDb()
      .db('valheim')
      .collection('arrows')
      .updateOne(
        { _id: userId },
        {
          $set: {
            name: arrow.name,
            description: arrow.description,
            recipe: arrow.recipe,
            quantity: arrow.quantity,
            weight: arrow.weight,
            pierce: arrow.pierce,
            fire: arrow.fire,
            spirit: arrow.spirit,
            poison: arrow.poison,
            frost: arrow.frost,
            stagger: arrow.stagger,
            knockback: arrow.knockback
          }
        }
      );
    if (responce.modifiedCount > 0) {
      res.status(204).send();
    } else {
      res
        .status(500)
        .json(
          responce.error || 'Something went wrong while updating the arrow data. Try again later.'
        );
    }
  } catch (err) {
    res.status(500).json(err);
  }
};

const deleteArrowData = async (req, res) => {
  try {
    const userId = new ObjectId(req.params.id);
    const responce = await mongodb
      .getDb()
      .db('valheim')
      .collection('arrows')
      .deleteOne({ _id: userId }, true);
    if (responce.deletedCount > 0) {
      res.status(200).send();
    } else {
      res
        .status(500)
        .json(
          responce.error || 'Something went wrong while deleting the arrow data. Try again later.'
        );
    }
  } catch (err) {
    res.status(500).json(err);
  }
};

module.exports = {
  getAllArrowData,
  getArrowDataById,
  createArrowData,
  updateArrowData,
  deleteArrowData
};
