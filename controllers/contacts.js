const mongodb = require('../db/connect');
const ObjectId = require('mongodb').ObjectId;

const getAllData = async (req, res) => {
  const result = await mongodb.getDb().db().collection('contacts').find();
  result.toArray().then((lists) => {
    res.setHeader('Content-Type', 'application/json');
    res.status(200).json(lists);
  });
};

const getDataById = async (req, res) => {
  const userId = new ObjectId(req.params.id);
  const result = await mongodb.getDb().db().collection('contacts').find({ _id: userId });
  result.toArray().then((lists) => {
    res.setHeader('Content-Type', 'application/json');
    res.status(200).json(lists[0]);
  });
};

const createContact = async (req, res) => {
  const contact = {
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email,
    favoriteColor: req.body.favoriteColor,
    birthday: req.body.birthday
  };
  const responce = await mongodb.getDb().db().collection('contacts').insertOne(contact);
  if (responce.acknowledged) {
    res.status(201).json(responce);
  } else {
    res
      .status(500)
      .json(responce.error || 'Something went wrong while creating the contact. Try again later.');
  }
};

const updateContact = async (req, res) => {
  const userId = new ObjectId(req.params.id);
  const contact = {
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email,
    favoriteColor: req.body.favoriteColor,
    birthday: req.body.birthday
  };
  const responce = await mongodb
    .getDb()
    .db()
    .collection('contacts')
    .updateOne(
      { _id: userId },
      {
        $set: {
          firstName: contact.firstName,
          lastName: contact.lastName,
          email: contact.email,
          favoriteColor: contact.favoriteColor,
          birthday: contact.birthday
        }
      }
    );
  if (responce.modifiedCount > 0) {
    res.status(204).send();
  } else {
    res
      .status(500)
      .json(responce.error || 'Something went wrong while updating the contact. Try again later.');
  }
};

const deleteContact = async (req, res) => {
  const userId = new ObjectId(req.params.id);
  const responce = await mongodb.getDb().db().collection('contacts').deleteOne({ _id: userId }, true);
  if (responce.deletedCount > 0) {
    res.status(200).send();
  } else {
    res
      .status(500)
      .json(responce.error || 'Something went wrong while deleting the contact. Try again later.');
  }
};

module.exports = { getAllData, getDataById, createContact, updateContact, deleteContact };
