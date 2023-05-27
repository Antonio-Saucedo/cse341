const mongodb = require('../db/connect');
const ObjectId = require('mongodb').ObjectId;

const getAllBowData = async (req, res) => {
  try {
    const result = await mongodb.getDb().db('valheim').collection('bows').find();
    result.toArray().then((lists) => {
      if (lists.message.length == 0) {
        res.status(404).json('Bow information was not found. Try again later.');
      } else {
        res.setHeader('Content-Type', 'application/json');
        res.status(200).json(lists);
      }
    });
  } catch (err) {
    res.status(500).json('Bow information was not found. Try again later.');
  }
};

const getBowDataById = async (req, res) => {
  try {
    if (!ObjectId.isValid(req.params.id)) {
      res.status(400).json('Id must be alphanumeric, 24 characters long.');
    } else {
      const userId = new ObjectId(req.params.id);
      const result = await mongodb.getDb().db('valheim').collection('bows').find({ _id: userId });
      result.toArray().then((lists) => {
        if (!lists[0]) {
          res.status(404).json(`Bow with id ${userId} was not found.`);
        } else {
          res.setHeader('Content-Type', 'application/json');
          res.status(200).json(lists[0]);
        }
      });
    }
  } catch (err) {
    res.status(500).json('Bow information was not found. Try again later.');
  }
};

const createBowData = async (req, res) => {
  try {
    let failMessage = '';
    const bow = {
      name: req.body.name,
      description: req.body.description,
      quality1: {
        recipe: req.body.recipe,
        weight: req.body.weight,
        durability: req.body.durability,
        pierce: req.body.pierce,
        spirit: req.body.spirit,
        poison: req.body.poison,
        backstab: req.body.backstab,
        stagger: req.body.stagger,
        knockback: req.body.knockback,
        parryBonus: req.body.parryBonus,
        movement: req.body.movement
      },
      quality2: {
        recipe: req.body.recipe,
        weight: req.body.weight,
        durability: req.body.durability,
        pierce: req.body.pierce,
        spirit: req.body.spirit,
        poison: req.body.poison,
        backstab: req.body.backstab,
        stagger: req.body.stagger,
        knockback: req.body.knockback,
        parryBonus: req.body.parryBonus,
        movement: req.body.movement
      },
      quality3: {
        recipe: req.body.recipe,
        weight: req.body.weight,
        durability: req.body.durability,
        pierce: req.body.pierce,
        spirit: req.body.spirit,
        poison: req.body.poison,
        backstab: req.body.backstab,
        stagger: req.body.stagger,
        knockback: req.body.knockback,
        parryBonus: req.body.parryBonus,
        movement: req.body.movement
      },
      quality4: {
        recipe: req.body.recipe,
        weight: req.body.weight,
        durability: req.body.durability,
        pierce: req.body.pierce,
        spirit: req.body.spirit,
        poison: req.body.poison,
        backstab: req.body.backstab,
        stagger: req.body.stagger,
        knockback: req.body.knockback,
        parryBonus: req.body.parryBonus,
        movement: req.body.movement
      }
    };
    if (typeof bow.name != 'string') {
      failMessage += 'To create Bow data, enter a name string.\n';
    }
    if (typeof bow.description != 'string') {
      failMessage += 'To create Bow data, enter a description string.\n';
    }
    if (typeof bow.quality1.recipe != 'string') {
      failMessage += 'To create Bow data, enter a quality1 recipe string.\n';
    }
    if (typeof bow.quality1.weight != 'number') {
      failMessage += 'To create Bow data, enter a quality1 numeric weight amount.\n';
    }
    if (typeof bow.quality1.durability != 'number') {
      failMessage += 'To create Bow data, enter a quality1 numeric durability amount.\n';
    }
    if (typeof bow.quality1.pierce != 'number') {
      failMessage += 'To create Bow data, enter a quality1 numeric pierce amount.\n';
    }
    if (typeof bow.quality1.spirit != 'number') {
      failMessage += 'To create Bow data, enter a quality1 numeric spirit amount.\n';
    }
    if (typeof bow.quality1.poison != 'number') {
      failMessage += 'To create Bow data, enter a quality1 numeric poison amount.\n';
    }
    if (typeof bow.quality1.backstab != 'string') {
      failMessage += 'To create Bow data, enter a quality1 backstab string.\n';
    }
    if (typeof bow.quality1.stagger != 'number') {
      failMessage += 'To create Bow data, enter a quality1 numeric stagger amount.\n';
    }
    if (typeof bow.quality1.knockback != 'number') {
      failMessage += 'To create Bow data, enter a quality1 numeric knockback amount.\n';
    }
    if (typeof bow.quality1.parryBonus != 'string') {
      failMessage += 'To create Bow data, enter a quality1 parryBonus string.\n';
    }
    if (typeof bow.quality1.movement != 'string') {
      failMessage += 'To create Bow data, enter a quality1 movement string.\n';
    }
    if (typeof bow.quality2.recipe != 'string') {
      failMessage += 'To create Bow data, enter a quality2 recipe string.\n';
    }
    if (typeof bow.quality2.weight != 'number') {
      failMessage += 'To create Bow data, enter a quality2 numeric weight amount.\n';
    }
    if (typeof bow.quality2.durability != 'number') {
      failMessage += 'To create Bow data, enter a quality2 numeric durability amount.\n';
    }
    if (typeof bow.quality2.pierce != 'number') {
      failMessage += 'To create Bow data, enter a quality2 numeric pierce amount.\n';
    }
    if (typeof bow.quality2.spirit != 'number') {
      failMessage += 'To create Bow data, enter a quality2 numeric spirit amount.\n';
    }
    if (typeof bow.quality2.poison != 'number') {
      failMessage += 'To create Bow data, enter a quality2 numeric poison amount.\n';
    }
    if (typeof bow.quality2.backstab != 'string') {
      failMessage += 'To create Bow data, enter a quality2 backstab string.\n';
    }
    if (typeof bow.quality2.stagger != 'number') {
      failMessage += 'To create Bow data, enter a quality2 numeric stagger amount.\n';
    }
    if (typeof bow.quality2.knockback != 'number') {
      failMessage += 'To create Bow data, enter a quality2 numeric knockback amount.\n';
    }
    if (typeof bow.quality2.parryBonus != 'string') {
      failMessage += 'To create Bow data, enter a quality2 parryBonus string.\n';
    }
    if (typeof bow.quality2.movement != 'string') {
      failMessage += 'To create Bow data, enter a quality2 movement string.\n';
    }
    if (typeof bow.quality3.recipe != 'string') {
      failMessage += 'To create Bow data, enter a quality3 recipe string.\n';
    }
    if (typeof bow.quality3.weight != 'number') {
      failMessage += 'To create Bow data, enter a quality3 numeric weight amount.\n';
    }
    if (typeof bow.quality3.durability != 'number') {
      failMessage += 'To create Bow data, enter a quality3 numeric durability amount.\n';
    }
    if (typeof bow.quality3.pierce != 'number') {
      failMessage += 'To create Bow data, enter a quality3 numeric pierce amount.\n';
    }
    if (typeof bow.quality3.spirit != 'number') {
      failMessage += 'To create Bow data, enter a quality3 numeric spirit amount.\n';
    }
    if (typeof bow.quality3.poison != 'number') {
      failMessage += 'To create Bow data, enter a quality3 numeric poison amount.\n';
    }
    if (typeof bow.quality3.backstab != 'string') {
      failMessage += 'To create Bow data, enter a quality3 backstab string.\n';
    }
    if (typeof bow.quality3.stagger != 'number') {
      failMessage += 'To create Bow data, enter a quality3 numeric stagger amount.\n';
    }
    if (typeof bow.quality3.knockback != 'number') {
      failMessage += 'To create Bow data, enter a quality3 numeric knockback amount.\n';
    }
    if (typeof bow.quality3.parryBonus != 'string') {
      failMessage += 'To create Bow data, enter a quality3 parryBonus string.\n';
    }
    if (typeof bow.quality3.movement != 'string') {
      failMessage += 'To create Bow data, enter a quality3 movement string.';
    }
    if (failMessage != '') {
      res.status(400);
      res.send(failMessage);
    } else {
      const responce = await mongodb.getDb().db('valheim').collection('bows').insertOne(bow);
      if (responce.acknowledged) {
        res.status(201).json(responce);
      } else {
        res
          .status(500)
          .json(
            responce.error || 'Something went wrong while creating the bow data. Try again later.'
          );
      }
    }
  } catch (err) {
    res.status(500).json('Something went wrong while creating the bow data. Try again later.');
  }
};

const updateBowData = async (req, res) => {
  try {
    if (!ObjectId.isValid(req.params.id)) {
      res.status(400).json('Id must be alphanumeric, 24 characters long.');
    } else {
      let failMessage = '';
      const bow = {
        name: req.body.name,
        description: req.body.description,
        quality1: {
          recipe: req.body.recipe,
          weight: req.body.weight,
          durability: req.body.durability,
          pierce: req.body.pierce,
          spirit: req.body.spirit,
          poison: req.body.poison,
          backstab: req.body.backstab,
          stagger: req.body.stagger,
          knockback: req.body.knockback,
          parryBonus: req.body.parryBonus,
          movement: req.body.movement
        },
        quality2: {
          recipe: req.body.recipe,
          weight: req.body.weight,
          durability: req.body.durability,
          pierce: req.body.pierce,
          spirit: req.body.spirit,
          poison: req.body.poison,
          backstab: req.body.backstab,
          stagger: req.body.stagger,
          knockback: req.body.knockback,
          parryBonus: req.body.parryBonus,
          movement: req.body.movement
        },
        quality3: {
          recipe: req.body.recipe,
          weight: req.body.weight,
          durability: req.body.durability,
          pierce: req.body.pierce,
          spirit: req.body.spirit,
          poison: req.body.poison,
          backstab: req.body.backstab,
          stagger: req.body.stagger,
          knockback: req.body.knockback,
          parryBonus: req.body.parryBonus,
          movement: req.body.movement
        },
        quality4: {
          recipe: req.body.recipe,
          weight: req.body.weight,
          durability: req.body.durability,
          pierce: req.body.pierce,
          spirit: req.body.spirit,
          poison: req.body.poison,
          backstab: req.body.backstab,
          stagger: req.body.stagger,
          knockback: req.body.knockback,
          parryBonus: req.body.parryBonus,
          movement: req.body.movement
        }
      };
      if (typeof bow.name != 'string') {
        failMessage += 'To update Bow data, enter a name string.\n';
      }
      if (typeof bow.description != 'string') {
        failMessage += 'To update Bow data, enter a description string.\n';
      }
      if (typeof bow.quality1.recipe != 'string') {
        failMessage += 'To update Bow data, enter a quality1 recipe string.\n';
      }
      if (typeof bow.quality1.weight != 'number') {
        failMessage += 'To update Bow data, enter a quality1 numeric weight amount.\n';
      }
      if (typeof bow.quality1.durability != 'number') {
        failMessage += 'To update Bow data, enter a quality1 numeric durability amount.\n';
      }
      if (typeof bow.quality1.pierce != 'number') {
        failMessage += 'To update Bow data, enter a quality1 numeric pierce amount.\n';
      }
      if (typeof bow.quality1.spirit != 'number') {
        failMessage += 'To update Bow data, enter a quality1 numeric spirit amount.\n';
      }
      if (typeof bow.quality1.poison != 'number') {
        failMessage += 'To update Bow data, enter a quality1 numeric poison amount.\n';
      }
      if (typeof bow.quality1.backstab != 'string') {
        failMessage += 'To update Bow data, enter a quality1 backstab string.\n';
      }
      if (typeof bow.quality1.stagger != 'number') {
        failMessage += 'To update Bow data, enter a quality1 numeric stagger amount.\n';
      }
      if (typeof bow.quality1.knockback != 'number') {
        failMessage += 'To update Bow data, enter a quality1 numeric knockback amount.\n';
      }
      if (typeof bow.quality1.parryBonus != 'string') {
        failMessage += 'To update Bow data, enter a quality1 parryBonus string.\n';
      }
      if (typeof bow.quality1.movement != 'string') {
        failMessage += 'To update Bow data, enter a quality1 movement string.\n';
      }
      if (typeof bow.quality2.recipe != 'string') {
        failMessage += 'To update Bow data, enter a quality2 recipe string.\n';
      }
      if (typeof bow.quality2.weight != 'number') {
        failMessage += 'To update Bow data, enter a quality2 numeric weight amount.\n';
      }
      if (typeof bow.quality2.durability != 'number') {
        failMessage += 'To update Bow data, enter a quality2 numeric durability amount.\n';
      }
      if (typeof bow.quality2.pierce != 'number') {
        failMessage += 'To update Bow data, enter a quality2 numeric pierce amount.\n';
      }
      if (typeof bow.quality2.spirit != 'number') {
        failMessage += 'To update Bow data, enter a quality2 numeric spirit amount.\n';
      }
      if (typeof bow.quality2.poison != 'number') {
        failMessage += 'To update Bow data, enter a quality2 numeric poison amount.\n';
      }
      if (typeof bow.quality2.backstab != 'string') {
        failMessage += 'To update Bow data, enter a quality2 backstab string.\n';
      }
      if (typeof bow.quality2.stagger != 'number') {
        failMessage += 'To update Bow data, enter a quality2 numeric stagger amount.\n';
      }
      if (typeof bow.quality2.knockback != 'number') {
        failMessage += 'To update Bow data, enter a quality2 numeric knockback amount.\n';
      }
      if (typeof bow.quality2.parryBonus != 'string') {
        failMessage += 'To update Bow data, enter a quality2 parryBonus string.\n';
      }
      if (typeof bow.quality2.movement != 'string') {
        failMessage += 'To update Bow data, enter a quality2 movement string.\n';
      }
      if (typeof bow.quality3.recipe != 'string') {
        failMessage += 'To update Bow data, enter a quality3 recipe string.\n';
      }
      if (typeof bow.quality3.weight != 'number') {
        failMessage += 'To update Bow data, enter a quality3 numeric weight amount.\n';
      }
      if (typeof bow.quality3.durability != 'number') {
        failMessage += 'To update Bow data, enter a quality3 numeric durability amount.\n';
      }
      if (typeof bow.quality3.pierce != 'number') {
        failMessage += 'To update Bow data, enter a quality3 numeric pierce amount.\n';
      }
      if (typeof bow.quality3.spirit != 'number') {
        failMessage += 'To update Bow data, enter a quality3 numeric spirit amount.\n';
      }
      if (typeof bow.quality3.poison != 'number') {
        failMessage += 'To update Bow data, enter a quality3 numeric poison amount.\n';
      }
      if (typeof bow.quality3.backstab != 'string') {
        failMessage += 'To update Bow data, enter a quality3 backstab string.\n';
      }
      if (typeof bow.quality3.stagger != 'number') {
        failMessage += 'To update Bow data, enter a quality3 numeric stagger amount.\n';
      }
      if (typeof bow.quality3.knockback != 'number') {
        failMessage += 'To update Bow data, enter a quality3 numeric knockback amount.\n';
      }
      if (typeof bow.quality3.parryBonus != 'string') {
        failMessage += 'To update Bow data, enter a quality3 parryBonus string.\n';
      }
      if (typeof bow.quality3.movement != 'string') {
        failMessage += 'To update Bow data, enter a quality3 movement string.';
      }
      if (failMessage != '') {
        res.status(400);
        res.send(failMessage);
      } else {
        const userId = new ObjectId(req.params.id);
        const responce = await mongodb
          .getDb()
          .db('valheim')
          .collection('bows')
          .updateOne(
            { _id: userId },
            {
              $set: {
                name: bow.name,
                description: bow.description,
                quality1: {
                  recipe: bow.quality1.recipe,
                  weight: bow.quality1.weight,
                  durability: bow.quality1.durability,
                  pierce: bow.quality1.pierce,
                  spirit: bow.quality1.spirit,
                  poison: bow.quality1.poison,
                  backstab: bow.quality1.backstab,
                  stagger: bow.quality1.stagger,
                  knockback: bow.quality4.knockback,
                  parryBonus: bow.quality1.parryBonus,
                  movement: bow.quality1.movement
                },
                quality2: {
                  recipe: bow.quality2.recipe,
                  weight: bow.quality2.weight,
                  durability: bow.quality2.durability,
                  pierce: bow.quality2.pierce,
                  spirit: bow.quality2.spirit,
                  poison: bow.quality2.poison,
                  backstab: bow.quality2.backstab,
                  stagger: bow.quality2.stagger,
                  knockback: bow.quality4.knockback,
                  parryBonus: bow.quality2.parryBonus,
                  movement: bow.quality2.movement
                },
                quality3: {
                  recipe: bow.quality3.recipe,
                  weight: bow.quality3.weight,
                  durability: bow.quality3.durability,
                  pierce: bow.quality3.pierce,
                  spirit: bow.quality3.spirit,
                  poison: bow.quality3.poison,
                  backstab: bow.quality3.backstab,
                  stagger: bow.quality3.stagger,
                  knockback: bow.quality4.knockback,
                  parryBonus: bow.quality3.parryBonus,
                  movement: bow.quality3.movement
                },
                quality4: {
                  recipe: bow.quality4.recipe,
                  weight: bow.quality4.weight,
                  durability: bow.quality4.durability,
                  pierce: bow.quality4.pierce,
                  spirit: bow.quality4.spirit,
                  poison: bow.quality4.poison,
                  backstab: bow.quality4.backstab,
                  stagger: bow.quality4.stagger,
                  knockback: bow.quality4.knockback,
                  parryBonus: bow.quality4.parryBonus,
                  movement: bow.quality4.movement
                }
              }
            }
          );
        if (responce.modifiedCount > 0) {
          res.status(204).send();
        } else {
          res
            .status(500)
            .json(
              responce.error || 'Something went wrong while updating the bow data. Try again later.'
            );
        }
      }
    }
  } catch (err) {
    res.status(500).json(err);
  }
};

const deleteBowData = async (req, res) => {
  try {
    if (!ObjectId.isValid(req.params.id)) {
      res.status(400).json('Id must be alphanumeric, 24 characters long.');
    } else {
      const userId = new ObjectId(req.params.id);
      const responce = await mongodb
        .getDb()
        .db('valheim')
        .collection('bows')
        .deleteOne({ _id: userId }, true);
      if (responce.deletedCount > 0) {
        res.status(200).send(`Bow data with id ${userId} was deleted sucessfully.`);
      } else {
        res
          .status(500)
          .json(
            responce.error || 'Something went wrong while deleting the bow data. Try again later.'
          );
      }
    }
  } catch (err) {
    res.status(500).json(err);
  }
};

module.exports = { getAllBowData, getBowDataById, createBowData, updateBowData, deleteBowData };
