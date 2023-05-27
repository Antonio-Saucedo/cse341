const mongodb = require('../db/connect');
const ObjectId = require('mongodb').ObjectId;

const getAllFoodData = async (req, res) => {
  try {
    const result = await mongodb.getDb().db('valheim').collection('food').find();
    result.toArray().then((lists) => {
      if (lists.message.length == 0) {
        res.status(404).json('Food information was not found. Try again later.');
      } else {
        res.setHeader('Content-Type', 'application/json');
        res.status(200).json(lists);
      }
    });
  } catch (err) {
    res.status(500).json('Food information was not found. Try again later.');
  }
};

const getFoodDataById = async (req, res) => {
  try {
    if (!ObjectId.isValid(req.params.id)) {
      res.status(400).json('Id must be alphanumeric, 24 characters long.');
    } else {
      const userId = new ObjectId(req.params.id);
      const result = await mongodb.getDb().db('valheim').collection('food').find({ _id: userId });
      result.toArray().then((lists) => {
        if (!lists[0]) {
          res.status(404).json(`Food with id ${userId} was not found.`);
        } else {
          res.setHeader('Content-Type', 'application/json');
          res.status(200).json(lists[0]);
        }
      });
    }
  } catch (err) {
    res.status(500).json('Food information was not found. Try again later.');
  }
};

const createFoodData = async (req, res) => {
  try {
    let failMessage = '';
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
    if (typeof food.name != 'string') {
      failMessage += 'To create Food data, enter a name string.\n';
    }
    if (typeof food.description != 'string') {
      failMessage += 'To create Food data, enter a description string.\n';
    }
    if (typeof food.recipe != 'string') {
      failMessage += 'To create Food data, enter a recipe string.\n';
    }
    if (typeof food.weight != 'number') {
      failMessage += 'To create Food data, enter a numeric weight amount.\n';
    }
    if (typeof food.stack != 'number') {
      failMessage += 'To create Food data, enter a numeric stack amount.\n';
    }
    if (typeof food.maxHealth != 'number') {
      failMessage += 'To create Food data, enter a numeric maxHealth amount.\n';
    }
    if (typeof food.maxStamina != 'number') {
      failMessage += 'To create Food data, enter a numeric maxStamina amount.\n';
    }
    if (typeof food.maxEitr != 'number') {
      failMessage += 'To create Food data, enter a numeric maxEitr amount.\n';
    }
    if (typeof food.duration != 'string') {
      failMessage += 'To create Food data, enter a duration string.\n';
    }
    if (typeof food.healing != 'string') {
      failMessage += 'To create Food data, enter a healing string.';
    }
    if (failMessage != '') {
      res.status(400);
      res.send(failMessage);
    } else {
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
    }
  } catch (err) {
    res.status(500).json('Something went wrong while creating the food data. Try again later.');
  }
};

const updateFoodData = async (req, res) => {
  try {
    if (!ObjectId.isValid(req.params.id)) {
      res.status(400).json('Id must be alphanumeric, 24 characters long.');
    } else {
      let failMessage = '';
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
      if (typeof food.name != 'string') {
        failMessage += 'To update Food data, enter a name string.\n';
      }
      if (typeof food.description != 'string') {
        failMessage += 'To update Food data, enter a description string.\n';
      }
      if (typeof food.recipe != 'string') {
        failMessage += 'To update Food data, enter a recipe string.\n';
      }
      if (typeof food.weight != 'number') {
        failMessage += 'To update Food data, enter a numeric weight amount.\n';
      }
      if (typeof food.stack != 'number') {
        failMessage += 'To update Food data, enter a numeric stack amount.\n';
      }
      if (typeof food.maxHealth != 'number') {
        failMessage += 'To update Food data, enter a numeric maxHealth amount.\n';
      }
      if (typeof food.maxStamina != 'number') {
        failMessage += 'To update Food data, enter a numeric maxStamina amount.\n';
      }
      if (typeof food.maxEitr != 'number') {
        failMessage += 'To update Food data, enter a numeric maxEitr amount.\n';
      }
      if (typeof food.duration != 'string') {
        failMessage += 'To update Food data, enter a duration string.\n';
      }
      if (typeof food.healing != 'string') {
        failMessage += 'To update Food data, enter a healing string.';
      }
      if (failMessage != '') {
        res.status(400);
        res.send(failMessage);
      } else {
        const userId = new ObjectId(req.params.id);
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
              responce.error ||
                'Something went wrong while updating the food data. Try again later.'
            );
        }
      }
    }
  } catch (err) {
    res.status(500).json(err);
  }
};

const deleteFoodData = async (req, res) => {
  try {
    if (!ObjectId.isValid(req.params.id)) {
      res.status(400).json('Id must be alphanumeric, 24 characters long.');
    } else {
      const userId = new ObjectId(req.params.id);
      const responce = await mongodb
        .getDb()
        .db('valheim')
        .collection('food')
        .deleteOne({ _id: userId }, true);
      if (responce.deletedCount > 0) {
        res.status(200).send(`Food data with id ${userId} was deleted sucessfully.`);
      } else {
        res
          .status(500)
          .json(
            responce.error || 'Something went wrong while deleting the food data. Try again later.'
          );
      }
    }
  } catch (err) {
    res.status(500).json(err);
  }
};

module.exports = {
  getAllFoodData,
  getFoodDataById,
  createFoodData,
  updateFoodData,
  deleteFoodData
};
