import { getDb } from '../db/connect';
const ObjectId = require('mongodb').ObjectId;

export const getAllShieldData = async (req: any, res: any) => {
  try {
    const result = await getDb().db('valheim').collection('shields').find();
    result.toArray().then((lists: any) => {
      if (!lists[0]) {
        res.status(404).json('Shield information was not found. Try again later.');
      } else {
        res.setHeader('Content-Type', 'application/json');
        res.status(200).json(lists);
      }
    });
  } catch (err) {
    res.status(500).json('Shield information was not found. Try again later.');
  }
};

export const getShieldDataById = async (req: any, res: any) => {
  try {
    if (!ObjectId.isValid(req.params.id)) {
      res.status(400).json('ID must be alphanumeric, 24 characters long.');
    } else {
      const userId = new ObjectId(req.params.id);
      const result = await getDb().db('valheim').collection('shields').find({ _id: userId });
      result.toArray().then((lists: any) => {
        if (!lists[0]) {
          res.status(404).json(`Shield with ID ${userId} was not found.`);
        } else {
          res.setHeader('Content-Type', 'application/json');
          res.status(200).json(lists[0]);
        }
      });
    }
  } catch (err) {
    res.status(500).json('Shield information was not found. Try again later.');
  }
};

export const getShieldDataByParameter = async (req: any, res: any) => {
  try {
    const valid = ['name', 'description', 'recipe'];
    const searchType = req.params.searchType;
    if (valid.includes(searchType)) {
      const searchTerm = req.params.searchTerm;
      if (searchType == 'name') {
        const result = await getDb()
          .db('valheim')
          .collection('shields')
          .find({ name: { $regex: searchTerm, $options: 'i' } });
        result.toArray().then((lists: any) => {
          if (!lists[0]) {
            res
              .status(404)
              .json(`Shield with ${searchType} containing '${searchTerm}' was not found.`);
          } else {
            res.setHeader('Content-Type', 'application/json');
            res.status(200).json(lists);
          }
        });
      } else if (searchType == 'description') {
        const result = await getDb()
          .db('valheim')
          .collection('shields')
          .find({ description: { $regex: searchTerm, $options: 'i' } });
        result.toArray().then((lists: any) => {
          if (!lists[0]) {
            res
              .status(404)
              .json(`Shield with ${searchType} containing '${searchTerm}' was not found.`);
          } else {
            res.setHeader('Content-Type', 'application/json');
            res.status(200).json(lists);
          }
        });
      } else if (searchType == 'recipe') {
        const result = await getDb()
          .db('valheim')
          .collection('shields')
          .find({ recipe: { $regex: searchTerm, $options: 'i' } });
        result.toArray().then((lists: any) => {
          if (!lists[0]) {
            res
              .status(404)
              .json(`Shield with ${searchType} containing '${searchTerm}' was not found.`);
          } else {
            res.setHeader('Content-Type', 'application/json');
            res.status(200).json(lists);
          }
        });
      } else {
        res.status(400).json('Search types are name, description and recipe.');
      }
    }
  } catch (err) {
    res.status(500).json('Shield information was not found. Try again later.');
  }
};

export const createShieldData = async (req: any, res: any) => {
  try {
    if (req.oidc.isAuthenticated()) {
      let failMessage = '';
      const shield = {
        name: req.body.name,
        description: req.body.description,
        quality1: {
          recipe: req.body.quality1.recipe,
          weight: req.body.quality1.weight,
          durability: req.body.quality1.durability,
          blockArmor: req.body.quality1.blockArmor,
          blockForce: req.body.quality1.blockForce,
          parryBonus: req.body.quality1.parryBonus,
          movement: req.body.quality1.movement
        },
        quality2: {
          recipe: req.body.quality2.recipe,
          weight: req.body.quality2.weight,
          durability: req.body.quality2.durability,
          blockArmor: req.body.quality2.blockArmor,
          blockForce: req.body.quality2.blockForce,
          parryBonus: req.body.quality2.parryBonus,
          movement: req.body.quality2.movement
        },
        quality3: {
          recipe: req.body.quality3.recipe,
          weight: req.body.quality3.weight,
          durability: req.body.quality3.durability,
          blockArmor: req.body.quality3.blockArmor,
          blockForce: req.body.quality3.blockForce,
          parryBonus: req.body.quality3.parryBonus,
          movement: req.body.quality3.movement
        },
        quality4: {
          recipe: req.body.quality4.recipe,
          weight: req.body.quality4.weight,
          durability: req.body.quality4.durability,
          blockArmor: req.body.quality4.blockArmor,
          blockForce: req.body.quality4.blockForce,
          parryBonus: req.body.quality4.parryBonus,
          movement: req.body.quality4.movement
        }
      };
      if (typeof shield.name != 'string') {
        failMessage += 'To create Shield data, enter a name string.\n';
      }
      if (typeof shield.description != 'string') {
        failMessage += 'To create Shield data, enter a description string.\n';
      }
      if (typeof shield.quality1.recipe != 'string') {
        failMessage += 'To create Shield data, enter a quality1 recipe string.\n';
      }
      if (typeof shield.quality1.weight != 'number') {
        failMessage += 'To create Shield data, enter a quality1 numeric weight amount.\n';
      }
      if (typeof shield.quality1.durability != 'number') {
        failMessage += 'To create Shield data, enter a quality1 numeric durability amount.\n';
      }
      if (typeof shield.quality1.blockArmor != 'number') {
        failMessage += 'To create Shield data, enter a quality1 numeric blockArmor amount.\n';
      }
      if (typeof shield.quality1.blockForce != 'number') {
        failMessage += 'To create Shield data, enter a quality1 numeric blockForce amount.\n';
      }
      if (typeof shield.quality1.parryBonus != 'string') {
        failMessage += 'To create Shield data, enter a quality1 parryBonus string.\n';
      }
      if (typeof shield.quality1.movement != 'string') {
        failMessage += 'To create Shield data, enter a quality1 movement string.\n';
      }
      if (typeof shield.quality2.recipe != 'string') {
        failMessage += 'To create Shield data, enter a quality2 recipe string.\n';
      }
      if (typeof shield.quality2.weight != 'number') {
        failMessage += 'To create Shield data, enter a quality2 numeric weight amount.\n';
      }
      if (typeof shield.quality2.durability != 'number') {
        failMessage += 'To create Shield data, enter a quality2 numeric durability amount.\n';
      }
      if (typeof shield.quality2.blockArmor != 'number') {
        failMessage += 'To create Shield data, enter a quality2 numeric blockArmor amount.\n';
      }
      if (typeof shield.quality2.blockForce != 'number') {
        failMessage += 'To create Shield data, enter a quality2 numeric blockForce amount.\n';
      }
      if (typeof shield.quality2.parryBonus != 'string') {
        failMessage += 'To create Shield data, enter a quality2 parryBonus string.\n';
      }
      if (typeof shield.quality2.movement != 'string') {
        failMessage += 'To create Shield data, enter a quality2 movement string.\n';
      }
      if (typeof shield.quality3.recipe != 'string') {
        failMessage += 'To create Shield data, enter a quality3 recipe string.\n';
      }
      if (typeof shield.quality3.weight != 'number') {
        failMessage += 'To create Shield data, enter a quality3 numeric weight amount.\n';
      }
      if (typeof shield.quality3.durability != 'number') {
        failMessage += 'To create Shield data, enter a quality3 numeric durability amount.\n';
      }
      if (typeof shield.quality3.blockArmor != 'number') {
        failMessage += 'To create Shield data, enter a quality3 numeric blockArmor amount.\n';
      }
      if (typeof shield.quality3.blockForce != 'number') {
        failMessage += 'To create Shield data, enter a quality3 numeric blockForce amount.\n';
      }
      if (typeof shield.quality3.parryBonus != 'string') {
        failMessage += 'To create Shield data, enter a quality3 parryBonus string.\n';
      }
      if (typeof shield.quality3.movement != 'string') {
        failMessage += 'To create Shield data, enter a quality3 movement string.';
      }
      if (failMessage != '') {
        res.status(400);
        res.send(failMessage);
      } else {
        const response = await getDb().db('valheim').collection('shields').insertOne(shield);
        if (response.acknowledged) {
          res.status(201).json(response);
        } else {
          res
            .status(500)
            .json(
              response.error ||
                'Something went wrong while creating the shield data. Try again later.'
            );
        }
      }
    } else {
      res.status(401).json('You must login to run this request.');
    }
  } catch (err) {
    res.status(500).json('Something went wrong while creating the shield data. Try again later.');
  }
};

export const updateShieldData = async (req: any, res: any) => {
  try {
    if (req.oidc.isAuthenticated()) {
      if (!ObjectId.isValid(req.params.id)) {
        res.status(400).json('ID must be alphanumeric, 24 characters long.');
      } else {
        let failMessage = '';
        const shield = {
          name: req.body.name,
          description: req.body.description,
          quality1: {
            recipe: req.body.quality1.recipe,
            weight: req.body.quality1.weight,
            durability: req.body.quality1.durability,
            blockArmor: req.body.quality1.blockArmor,
            blockForce: req.body.quality1.blockForce,
            parryBonus: req.body.quality1.parryBonus,
            movement: req.body.quality1.movement
          },
          quality2: {
            recipe: req.body.quality2.recipe,
            weight: req.body.quality2.weight,
            durability: req.body.quality2.durability,
            blockArmor: req.body.quality2.blockArmor,
            blockForce: req.body.quality2.blockForce,
            parryBonus: req.body.quality2.parryBonus,
            movement: req.body.quality2.movement
          },
          quality3: {
            recipe: req.body.quality3.recipe,
            weight: req.body.quality3.weight,
            durability: req.body.quality3.durability,
            blockArmor: req.body.quality3.blockArmor,
            blockForce: req.body.quality3.blockForce,
            parryBonus: req.body.quality3.parryBonus,
            movement: req.body.quality3.movement
          },
          quality4: {
            recipe: req.body.quality4.recipe,
            weight: req.body.quality4.weight,
            durability: req.body.quality4.durability,
            blockArmor: req.body.quality4.blockArmor,
            blockForce: req.body.quality4.blockForce,
            parryBonus: req.body.quality4.parryBonus,
            movement: req.body.quality4.movement
          }
        };
        if (typeof shield.name != 'string') {
          failMessage += 'To update Shield data, enter a name string.\n';
        }
        if (typeof shield.description != 'string') {
          failMessage += 'To update Shield data, enter a description string.\n';
        }
        if (typeof shield.quality1.recipe != 'string') {
          failMessage += 'To update Shield data, enter a quality1 recipe string.\n';
        }
        if (typeof shield.quality1.weight != 'number') {
          failMessage += 'To update Shield data, enter a quality1 numeric weight amount.\n';
        }
        if (typeof shield.quality1.durability != 'number') {
          failMessage += 'To update Shield data, enter a quality1 numeric durability amount.\n';
        }
        if (typeof shield.quality1.blockArmor != 'number') {
          failMessage += 'To update Shield data, enter a quality1 numeric blockArmor amount.\n';
        }
        if (typeof shield.quality1.blockForce != 'number') {
          failMessage += 'To update Shield data, enter a quality1 numeric blockForce amount.\n';
        }
        if (typeof shield.quality1.parryBonus != 'string') {
          failMessage += 'To update Shield data, enter a quality1 parryBonus string.\n';
        }
        if (typeof shield.quality1.movement != 'string') {
          failMessage += 'To update Shield data, enter a quality1 movement string.\n';
        }
        if (typeof shield.quality2.recipe != 'string') {
          failMessage += 'To update Shield data, enter a quality2 recipe string.\n';
        }
        if (typeof shield.quality2.weight != 'number') {
          failMessage += 'To update Shield data, enter a quality2 numeric weight amount.\n';
        }
        if (typeof shield.quality2.durability != 'number') {
          failMessage += 'To update Shield data, enter a quality2 numeric durability amount.\n';
        }
        if (typeof shield.quality2.blockArmor != 'number') {
          failMessage += 'To update Shield data, enter a quality2 numeric blockArmor amount.\n';
        }
        if (typeof shield.quality2.blockForce != 'number') {
          failMessage += 'To update Shield data, enter a quality2 numeric blockForce amount.\n';
        }
        if (typeof shield.quality2.parryBonus != 'string') {
          failMessage += 'To update Shield data, enter a quality2 parryBonus string.\n';
        }
        if (typeof shield.quality2.movement != 'string') {
          failMessage += 'To update Shield data, enter a quality2 movement string.\n';
        }
        if (typeof shield.quality3.recipe != 'string') {
          failMessage += 'To update Shield data, enter a quality3 recipe string.\n';
        }
        if (typeof shield.quality3.weight != 'number') {
          failMessage += 'To update Shield data, enter a quality3 numeric weight amount.\n';
        }
        if (typeof shield.quality3.durability != 'number') {
          failMessage += 'To update Shield data, enter a quality3 numeric durability amount.\n';
        }
        if (typeof shield.quality3.blockArmor != 'number') {
          failMessage += 'To update Shield data, enter a quality3 numeric blockArmor amount.\n';
        }
        if (typeof shield.quality3.blockForce != 'number') {
          failMessage += 'To update Shield data, enter a quality3 numeric blockForce amount.\n';
        }
        if (typeof shield.quality3.parryBonus != 'string') {
          failMessage += 'To update Shield data, enter a quality3 parryBonus string.\n';
        }
        if (typeof shield.quality3.movement != 'string') {
          failMessage += 'To update Shield data, enter a quality3 movement string.';
        }
        if (failMessage != '') {
          res.status(400);
          res.send(failMessage);
        } else {
          const userId = new ObjectId(req.params.id);
          const response = await getDb()
            .db('valheim')
            .collection('shields')
            .updateOne(
              { _id: userId },
              {
                $set: {
                  name: shield.name,
                  description: shield.description,
                  quality1: {
                    recipe: shield.quality1.recipe,
                    weight: shield.quality1.weight,
                    durability: shield.quality1.durability,
                    blockArmor: shield.quality1.blockArmor,
                    blockForce: shield.quality1.blockForce,
                    parryBonus: shield.quality1.parryBonus,
                    movement: shield.quality1.movement
                  },
                  quality2: {
                    recipe: shield.quality2.recipe,
                    weight: shield.quality2.weight,
                    durability: shield.quality2.durability,
                    blockArmor: shield.quality2.blockArmor,
                    blockForce: shield.quality2.blockForce,
                    parryBonus: shield.quality2.parryBonus,
                    movement: shield.quality2.movement
                  },
                  quality3: {
                    recipe: shield.quality3.recipe,
                    weight: shield.quality3.weight,
                    durability: shield.quality3.durability,
                    blockArmor: shield.quality3.blockArmor,
                    blockForce: shield.quality3.blockForce,
                    parryBonus: shield.quality3.parryBonus,
                    movement: shield.quality3.movement
                  },
                  quality4: {
                    recipe: shield.quality4.recipe,
                    weight: shield.quality4.weight,
                    durability: shield.quality4.durability,
                    blockArmor: shield.quality4.blockArmor,
                    blockForce: shield.quality4.blockForce,
                    parryBonus: shield.quality4.parryBonus,
                    movement: shield.quality4.movement
                  }
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
                  'Something went wrong while updating the shield data. Try again later.'
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

export const deleteShieldData = async (req: any, res: any) => {
  try {
    if (req.oidc.isAuthenticated()) {
      if (!ObjectId.isValid(req.params.id)) {
        res.status(400).json('ID must be alphanumeric, 24 characters long.');
      } else {
        const userId = new ObjectId(req.params.id);
        const response = await getDb()
          .db('valheim')
          .collection('shields')
          .deleteOne({ _id: userId }, true);
        if (response.deletedCount > 0) {
          res.status(200).send(`Shield data with ID ${userId} was deleted sucessfully.`);
        } else {
          res
            .status(500)
            .json(
              response.error ||
                'Something went wrong while deleting the shield data. Try again later.'
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