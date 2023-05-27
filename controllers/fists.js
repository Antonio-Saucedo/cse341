const mongodb = require('../db/connect');
const ObjectId = require('mongodb').ObjectId;

const getAllFistData = async (req, res) => {
  try {
    const result = await mongodb.getDb().db('valheim').collection('fists').find();
    result.toArray().then((lists) => {
      if (lists.message.length == 0) {
        res.status(404).json('Fist information was not found. Try again later.');
      } else {
        res.setHeader('Content-Type', 'application/json');
        res.status(200).json(lists);
      }
    });
  } catch (err) {
    res.status(500).json('Fist information was not found. Try again later.');
  }
};

const getFistDataById = async (req, res) => {
  try {
    if (!ObjectId.isValid(req.params.id)) {
      res.status(400).json('Id must be alphanumeric, 24 characters long.');
    } else {
      const userId = new ObjectId(req.params.id);
      const result = await mongodb.getDb().db('valheim').collection('fists').find({ _id: userId });
      result.toArray().then((lists) => {
        if (!lists[0]) {
          res.status(404).json(`Fist with id ${userId} was not found.`);
        } else {
          res.setHeader('Content-Type', 'application/json');
          res.status(200).json(lists[0]);
        }
      });
    }
  } catch (err) {
    res.status(500).json('Fist information was not found. Try again later.');
  }
};

const createFistData = async (req, res) => {
  try {
    let failMessage = '';
    const fist = {
      name: req.body.name,
      description: req.body.description,
      quality1: {
        recipe: req.body.recipe,
        weight: req.body.weight,
        durability: req.body.durability,
        slash: req.body.slash,
        backstab: req.body.backstab,
        stagger: req.body.stagger,
        blockForce: req.body.blockForce,
        parryBonus: req.body.parryBonus
      },
      quality2: {
        recipe: req.body.recipe,
        weight: req.body.weight,
        durability: req.body.durability,
        slash: req.body.slash,
        backstab: req.body.backstab,
        stagger: req.body.stagger,
        blockForce: req.body.blockForce,
        parryBonus: req.body.parryBonus
      },
      quality3: {
        recipe: req.body.recipe,
        weight: req.body.weight,
        durability: req.body.durability,
        slash: req.body.slash,
        backstab: req.body.backstab,
        stagger: req.body.stagger,
        blockForce: req.body.blockForce,
        parryBonus: req.body.parryBonus
      },
      quality4: {
        recipe: req.body.recipe,
        weight: req.body.weight,
        durability: req.body.durability,
        slash: req.body.slash,
        backstab: req.body.backstab,
        stagger: req.body.stagger,
        blockForce: req.body.blockForce,
        parryBonus: req.body.parryBonus
      }
    };
    if (typeof fist.name != 'string') {
      failMessage += 'To create Fist data, enter a name string.\n';
    }
    if (typeof fist.description != 'string') {
      failMessage += 'To create Fist data, enter a description string.\n';
    }
    if (typeof fist.quality1.recipe != 'string') {
      failMessage += 'To create Fist data, enter a quality1 recipe string.\n';
    }
    if (typeof fist.quality1.weight != 'number') {
      failMessage += 'To create Fist data, enter a quality1 numeric weight amount.\n';
    }
    if (typeof fist.quality1.durability != 'number') {
      failMessage += 'To create Fist data, enter a quality1 numeric durability amount.\n';
    }
    if (typeof fist.quality1.slash != 'number') {
      failMessage += 'To create Fist data, enter a quality1 numeric slash amount.\n';
    }
    if (typeof fist.quality1.backstab != 'string') {
      failMessage += 'To create Fist data, enter a quality1 backstab string.\n';
    }
    if (typeof fist.quality1.stagger != 'number') {
      failMessage += 'To create Fist data, enter a quality1 numeric stagger amount.\n';
    }
    if (typeof fist.quality1.blockForce != 'number') {
      failMessage += 'To create Fist data, enter a quality1 numeric blockForce amount.\n';
    }
    if (typeof fist.quality1.parryBonus != 'string') {
      failMessage += 'To create Fist data, enter a quality1 parryBonus string.\n';
    }
    if (typeof fist.quality2.recipe != 'string') {
      failMessage += 'To create Fist data, enter a quality2 recipe string.\n';
    }
    if (typeof fist.quality2.weight != 'number') {
      failMessage += 'To create Fist data, enter a quality2 numeric weight amount.\n';
    }
    if (typeof fist.quality2.durability != 'number') {
      failMessage += 'To create Fist data, enter a quality2 numeric durability amount.\n';
    }
    if (typeof fist.quality2.slash != 'number') {
      failMessage += 'To create Fist data, enter a quality2 numeric slash amount.\n';
    }
    if (typeof fist.quality2.backstab != 'string') {
      failMessage += 'To create Fist data, enter a quality2 backstab string.\n';
    }
    if (typeof fist.quality2.stagger != 'number') {
      failMessage += 'To create Fist data, enter a quality2 numeric stagger amount.\n';
    }
    if (typeof fist.quality2.blockForce != 'number') {
      failMessage += 'To create Fist data, enter a quality2 numeric blockForce amount.\n';
    }
    if (typeof fist.quality2.parryBonus != 'string') {
      failMessage += 'To create Fist data, enter a quality2 parryBonus string.\n';
    }
    if (typeof fist.quality3.recipe != 'string') {
      failMessage += 'To create Fist data, enter a quality3 recipe string.\n';
    }
    if (typeof fist.quality3.weight != 'number') {
      failMessage += 'To create Fist data, enter a quality3 numeric weight amount.\n';
    }
    if (typeof fist.quality3.durability != 'number') {
      failMessage += 'To create Fist data, enter a quality3 numeric durability amount.\n';
    }
    if (typeof fist.quality3.slash != 'number') {
      failMessage += 'To create Fist data, enter a quality3 numeric slash amount.\n';
    }
    if (typeof fist.quality3.backstab != 'string') {
      failMessage += 'To create Fist data, enter a quality3 backstab string.\n';
    }
    if (typeof fist.quality3.stagger != 'number') {
      failMessage += 'To create Fist data, enter a quality3 numeric stagger amount.\n';
    }
    if (typeof fist.quality3.blockForce != 'number') {
      failMessage += 'To create Fist data, enter a quality3 numeric blockForce amount.\n';
    }
    if (typeof fist.quality3.parryBonus != 'string') {
      failMessage += 'To create Fist data, enter a quality3 parryBonus string.';
    }
    if (failMessage != '') {
      res.status(400);
      res.send(failMessage);
    } else {
      const responce = await mongodb.getDb().db('valheim').collection('fists').insertOne(fist);
      if (responce.acknowledged) {
        res.status(201).json(responce);
      } else {
        res
          .status(500)
          .json(
            responce.error || 'Something went wrong while creating the fist data. Try again later.'
          );
      }
    }
  } catch (err) {
    res.status(500).json('Something went wrong while creating the fist data. Try again later.');
  }
};

const updateFistData = async (req, res) => {
  try {
    if (!ObjectId.isValid(req.params.id)) {
      res.status(400).json('Id must be alphanumeric, 24 characters long.');
    } else {
      let failMessage = '';
      const fist = {
        name: req.body.name,
        description: req.body.description,
        quality1: {
          recipe: req.body.recipe,
          weight: req.body.weight,
          durability: req.body.durability,
          slash: req.body.slash,
          backstab: req.body.backstab,
          stagger: req.body.stagger,
          blockForce: req.body.blockForce,
          parryBonus: req.body.parryBonus
        },
        quality2: {
          recipe: req.body.recipe,
          weight: req.body.weight,
          durability: req.body.durability,
          slash: req.body.slash,
          backstab: req.body.backstab,
          stagger: req.body.stagger,
          blockForce: req.body.blockForce,
          parryBonus: req.body.parryBonus
        },
        quality3: {
          recipe: req.body.recipe,
          weight: req.body.weight,
          durability: req.body.durability,
          slash: req.body.slash,
          backstab: req.body.backstab,
          stagger: req.body.stagger,
          blockForce: req.body.blockForce,
          parryBonus: req.body.parryBonus
        },
        quality4: {
          recipe: req.body.recipe,
          weight: req.body.weight,
          durability: req.body.durability,
          slash: req.body.slash,
          backstab: req.body.backstab,
          stagger: req.body.stagger,
          blockForce: req.body.blockForce,
          parryBonus: req.body.parryBonus
        }
      };
      if (typeof fist.name != 'string') {
        failMessage += 'To update Fist data, enter a name string.\n';
      }
      if (typeof fist.description != 'string') {
        failMessage += 'To update Fist data, enter a description string.\n';
      }
      if (typeof fist.quality1.recipe != 'string') {
        failMessage += 'To update Fist data, enter a quality1 recipe string.\n';
      }
      if (typeof fist.quality1.weight != 'number') {
        failMessage += 'To update Fist data, enter a quality1 numeric weight amount.\n';
      }
      if (typeof fist.quality1.durability != 'number') {
        failMessage += 'To update Fist data, enter a quality1 numeric durability amount.\n';
      }
      if (typeof fist.quality1.slash != 'number') {
        failMessage += 'To update Fist data, enter a quality1 numeric slash amount.\n';
      }
      if (typeof fist.quality1.backstab != 'string') {
        failMessage += 'To update Fist data, enter a quality1 backstab string.\n';
      }
      if (typeof fist.quality1.stagger != 'number') {
        failMessage += 'To update Fist data, enter a quality1 numeric stagger amount.\n';
      }
      if (typeof fist.quality1.blockForce != 'number') {
        failMessage += 'To update Fist data, enter a quality1 numeric blockForce amount.\n';
      }
      if (typeof fist.quality1.parryBonus != 'string') {
        failMessage += 'To update Fist data, enter a quality1 parryBonus string.\n';
      }
      if (typeof fist.quality2.recipe != 'string') {
        failMessage += 'To update Fist data, enter a quality2 recipe string.\n';
      }
      if (typeof fist.quality2.weight != 'number') {
        failMessage += 'To update Fist data, enter a quality2 numeric weight amount.\n';
      }
      if (typeof fist.quality2.durability != 'number') {
        failMessage += 'To update Fist data, enter a quality2 numeric durability amount.\n';
      }
      if (typeof fist.quality2.slash != 'number') {
        failMessage += 'To update Fist data, enter a quality2 numeric slash amount.\n';
      }
      if (typeof fist.quality2.backstab != 'string') {
        failMessage += 'To update Fist data, enter a quality2 backstab string.\n';
      }
      if (typeof fist.quality2.stagger != 'number') {
        failMessage += 'To update Fist data, enter a quality2 numeric stagger amount.\n';
      }
      if (typeof fist.quality2.blockForce != 'number') {
        failMessage += 'To update Fist data, enter a quality2 numeric blockForce amount.\n';
      }
      if (typeof fist.quality2.parryBonus != 'string') {
        failMessage += 'To update Fist data, enter a quality2 parryBonus string.\n';
      }
      if (typeof fist.quality3.recipe != 'string') {
        failMessage += 'To update Fist data, enter a quality3 recipe string.\n';
      }
      if (typeof fist.quality3.weight != 'number') {
        failMessage += 'To update Fist data, enter a quality3 numeric weight amount.\n';
      }
      if (typeof fist.quality3.durability != 'number') {
        failMessage += 'To update Fist data, enter a quality3 numeric durability amount.\n';
      }
      if (typeof fist.quality3.slash != 'number') {
        failMessage += 'To update Fist data, enter a quality3 numeric slash amount.\n';
      }
      if (typeof fist.quality3.backstab != 'string') {
        failMessage += 'To update Fist data, enter a quality3 backstab string.\n';
      }
      if (typeof fist.quality3.stagger != 'number') {
        failMessage += 'To update Fist data, enter a quality3 numeric stagger amount.\n';
      }
      if (typeof fist.quality3.blockForce != 'number') {
        failMessage += 'To update Fist data, enter a quality3 numeric blockForce amount.\n';
      }
      if (typeof fist.quality3.parryBonus != 'string') {
        failMessage += 'To update Fist data, enter a quality3 parryBonus string.';
      }
      if (failMessage != '') {
        res.status(400);
        res.send(failMessage);
      } else {
        const userId = new ObjectId(req.params.id);
        const responce = await mongodb
          .getDb()
          .db('valheim')
          .collection('fists')
          .updateOne(
            { _id: userId },
            {
              $set: {
                name: fist.name,
                description: fist.description,
                quality1: {
                  recipe: fist.quality1.recipe,
                  weight: fist.quality1.weight,
                  durability: fist.quality1.durability,
                  slash: fist.quality1.slash,
                  backstab: fist.quality1.backstab,
                  stagger: fist.quality1.stagger,
                  blockForce: fist.quality1.blockForce,
                  parryBonus: fist.quality1.parryBonus
                },
                quality2: {
                  recipe: fist.quality2.recipe,
                  weight: fist.quality2.weight,
                  durability: fist.quality2.durability,
                  slash: fist.quality2.slash,
                  backstab: fist.quality2.backstab,
                  stagger: fist.quality2.stagger,
                  blockForce: fist.quality2.blockForce,
                  parryBonus: fist.quality2.parryBonus
                },
                quality3: {
                  recipe: fist.quality3.recipe,
                  weight: fist.quality3.weight,
                  durability: fist.quality3.durability,
                  slash: fist.quality3.slash,
                  backstab: fist.quality3.backstab,
                  stagger: fist.quality3.stagger,
                  blockForce: fist.quality3.blockForce,
                  parryBonus: fist.quality3.parryBonus
                },
                quality4: {
                  recipe: fist.quality4.recipe,
                  weight: fist.quality4.weight,
                  durability: fist.quality4.durability,
                  slash: fist.quality4.slash,
                  backstab: fist.quality4.backstab,
                  stagger: fist.quality4.stagger,
                  blockForce: fist.quality4.blockForce,
                  parryBonus: fist.quality4.parryBonus
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
              responce.error ||
                'Something went wrong while updating the fist data. Try again later.'
            );
        }
      }
    }
  } catch (err) {
    res.status(500).json(err);
  }
};

const deleteFistData = async (req, res) => {
  try {
    if (!ObjectId.isValid(req.params.id)) {
      res.status(400).json('Id must be alphanumeric, 24 characters long.');
    } else {
      const userId = new ObjectId(req.params.id);
      const responce = await mongodb
        .getDb()
        .db('valheim')
        .collection('fists')
        .deleteOne({ _id: userId }, true);
      if (responce.deletedCount > 0) {
        res.status(200).send(`Fist data with id ${userId} was deleted sucessfully.`);
      } else {
        res
          .status(500)
          .json(
            responce.error || 'Something went wrong while deleting the fist data. Try again later.'
          );
      }
    }
  } catch (err) {
    res.status(500).json(err);
  }
};

module.exports = {
  getAllFistData,
  getFistDataById,
  createFistData,
  updateFistData,
  deleteFistData
};
