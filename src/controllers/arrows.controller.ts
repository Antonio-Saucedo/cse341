import { getDb } from '../db/connect';
const ObjectId = require('mongodb').ObjectId;

export const getAllArrowData = async (req: any, res: any) => {
  try {
    const result = await getDb().db('valheim').collection('arrows').find();
    result.toArray().then((lists: any) => {
      if (!lists[0]) {
        res.status(404).json('Arrow information was not found. Try again later.');
      } else {
        res.setHeader('Content-Type', 'application/json');
        res.status(200).json(lists);
      }
    });
  } catch (err) {
    res.status(500).json('Arrow information was not found. Try again later.');
  }
};

export const getArrowDataById = async (req: any, res: any) => {
  try {
    if (!ObjectId.isValid(req.params.id)) {
      res.status(400).json('ID must be alphanumeric, 24 characters long.');
    } else {
      const userId = new ObjectId(req.params.id);
      const result = await getDb().db('valheim').collection('arrows').find({ _id: userId });
      result.toArray().then((lists: any) => {
        if (!lists[0]) {
          res.status(404).json(`Arrow with ID ${userId} was not found.`);
        } else {
          res.setHeader('Content-Type', 'application/json');
          res.status(200).json(lists[0]);
        }
      });
    }
  } catch (err) {
    res.status(500).json('Arrow information was not found. Try again later.');
  }
};

export const getArrowDataByParameter = async (req: any, res: any) => {
  try {
    const valid = ['name', 'description', 'recipe'];
    const searchType = req.params.searchType;
    if (valid.includes(searchType)) {
      const searchTerm = req.params.searchTerm;
      let query = { [searchType]: { $regex: searchTerm, $options: 'i' } };
      const result = await getDb().db('valheim').collection('arrows').find(query);
      result.toArray().then((lists: any) => {
        if (!lists[0]) {
          res
            .status(404)
            .json(`Arrow with ${searchType} containing '${searchTerm}' was not found.`);
        } else {
          res.setHeader('Content-Type', 'application/json');
          res.status(200).json(lists);
        }
      });
    } else {
      res.status(400).json('Available search types are name, description and recipe.');
    }
  } catch (err) {
    res.status(500).json('Arrow information was not found. Try again later.');
  }
};

export const createArrowData = async (req: any, res: any) => {
  try {
    if (req.oidc.isAuthenticated()) {
      let failMessage = '';
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
      if (typeof arrow.name != 'string') {
        failMessage += 'To create Arrow data, enter a name string.\n';
      }
      if (typeof arrow.description != 'string') {
        failMessage += 'To create Arrow data, enter a description string.\n';
      }
      if (typeof arrow.recipe != 'string') {
        failMessage += 'To create Arrow data, enter a recipe string.\n';
      }
      if (typeof arrow.quantity != 'number') {
        failMessage += 'To create Arrow data, enter a numeric quantity amount.\n';
      }
      if (typeof arrow.weight != 'number') {
        failMessage += 'To create Arrow data, enter a numeric weight amount.\n';
      }
      if (typeof arrow.pierce != 'number') {
        failMessage += 'To create Arrow data, enter a numeric pierce amount.\n';
      }
      if (typeof arrow.fire != 'number') {
        failMessage += 'To create Arrow data, enter a numeric fire amount.\n';
      }
      if (typeof arrow.spirit != 'number') {
        failMessage += 'To create Arrow data, enter a numeric spirit amount.\n';
      }
      if (typeof arrow.poison != 'number') {
        failMessage += 'To create Arrow data, enter a numeric poison amount.\n';
      }
      if (typeof arrow.frost != 'number') {
        failMessage += 'To create Arrow data, enter a numeric frost amount.\n';
      }
      if (typeof arrow.stagger != 'number') {
        failMessage += 'To create Arrow data, enter a numeric stagger amount.\n';
      }
      if (typeof arrow.knockback != 'number') {
        failMessage += 'To create Arrow data, enter a numeric knockback amount.';
      }
      if (failMessage != '') {
        res.status(400);
        res.send(failMessage);
      } else {
        const response = await getDb().db('valheim').collection('arrows').insertOne(arrow);
        if (response.acknowledged) {
          res.status(201).json(response);
        } else {
          res
            .status(500)
            .json(
              response.error ||
                'Something went wrong while creating the arrow data. Try again later.'
            );
        }
      }
    } else {
      res.status(401).json('You must login to run this request.');
    }
  } catch (err) {
    res.status(500).json('Something went wrong while creating the arrow data. Try again later.');
  }
};

export const updateArrowData = async (req: any, res: any) => {
  try {
    if (req.oidc.isAuthenticated()) {
      if (!ObjectId.isValid(req.params.id)) {
        res.status(400).json('ID must be alphanumeric, 24 characters long.');
      } else {
        let failMessage = '';
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
        if (typeof arrow.name != 'string') {
          failMessage += 'To update Arrow data, enter a name string.\n';
        }
        if (typeof arrow.description != 'string') {
          failMessage += 'To update Arrow data, enter a description string.\n';
        }
        if (typeof arrow.recipe != 'string') {
          failMessage += 'To update Arrow data, enter a recipe string.\n';
        }
        if (typeof arrow.quantity != 'number') {
          failMessage += 'To update Arrow data, enter a numeric quantity amount.\n';
        }
        if (typeof arrow.weight != 'number') {
          failMessage += 'To update Arrow data, enter a numeric weight amount.\n';
        }
        if (typeof arrow.pierce != 'number') {
          failMessage += 'To update Arrow data, enter a numeric pierce amount.\n';
        }
        if (typeof arrow.fire != 'number') {
          failMessage += 'To update Arrow data, enter a numeric fire amount.\n';
        }
        if (typeof arrow.spirit != 'number') {
          failMessage += 'To update Arrow data, enter a numeric spirit amount.\n';
        }
        if (typeof arrow.poison != 'number') {
          failMessage += 'To update Arrow data, enter a numeric poison amount.\n';
        }
        if (typeof arrow.frost != 'number') {
          failMessage += 'To update Arrow data, enter a numeric frost amount.\n';
        }
        if (typeof arrow.stagger != 'number') {
          failMessage += 'To update Arrow data, enter a numeric stagger amount.\n';
        }
        if (typeof arrow.knockback != 'number') {
          failMessage += 'To update Arrow data, enter a numeric knockback amount.';
        }
        if (failMessage != '') {
          res.status(400);
          res.send(failMessage);
        } else {
          const userId = new ObjectId(req.params.id);
          const response = await getDb()
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
          if (response.modifiedCount > 0) {
            res.status(204).send();
          } else {
            res
              .status(500)
              .json(
                response.error ||
                  'Something went wrong while updating the arrow data. Try again later.'
              );
          }
        }
      }
    } else {
      res.status(401).json('You must login to run this request.');
    }
  } catch (err) {
    res.status(500).json(err);
  }
};

export const deleteArrowData = async (req: any, res: any) => {
  try {
    if (req.oidc.isAuthenticated()) {
      if (!ObjectId.isValid(req.params.id)) {
        res.status(400).json('ID must be alphanumeric, 24 characters long.');
      } else {
        const userId = new ObjectId(req.params.id);
        const response = await getDb()
          .db('valheim')
          .collection('arrows')
          .deleteOne({ _id: userId }, true);
        if (response.deletedCount > 0) {
          res.status(200).send(`Arrow data with ID ${userId} was deleted sucessfully.`);
        } else {
          res
            .status(500)
            .json(
              response.error ||
                'Something went wrong while deleting the arrow data. Try again later.'
            );
        }
      }
    } else {
      res.status(401).json('You must login to run this request.');
    }
  } catch (err) {
    res.status(500).json(err);
  }
};
