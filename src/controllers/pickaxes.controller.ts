import { getDb } from '../db/connect';
const ObjectId = require('mongodb').ObjectId;

export const getAllPickaxeData = async (req: any, res: any) => {
  try {
    const result = await getDb().db('valheim').collection('pickaxe').find();
    result.toArray().then((lists: any) => {
      if (!lists[0]) {
        res.status(404).json('Pickaxe information was not found. Try again later.');
      } else {
        res.setHeader('Content-Type', 'application/json');
        res.status(200).json(lists);
      }
    });
  } catch (err) {
    res.status(500).json('Pickaxe information was not found. Try again later.');
  }
};

export const getPickaxeDataById = async (req: any, res: any) => {
  try {
    if (!ObjectId.isValid(req.params.id)) {
      res.status(400).json('ID must be alphanumeric, 24 characters long.');
    } else {
      const userId = new ObjectId(req.params.id);
      const result = await getDb().db('valheim').collection('pickaxe').find({ _id: userId });
      result.toArray().then((lists: any) => {
        if (!lists[0]) {
          res.status(404).json(`Pickaxe with ID ${userId} was not found.`);
        } else {
          res.setHeader('Content-Type', 'application/json');
          res.status(200).json(lists[0]);
        }
      });
    }
  } catch (err) {
    res.status(500).json('Pickaxe information was not found. Try again later.');
  }
};

export const getPickaxeDataByParameter = async (req: any, res: any) => {
  try {
    const valid = ['name', 'description', 'recipe'];
    const searchType = req.params.searchType;
    if (valid.includes(searchType)) {
      const searchTerm = req.params.searchTerm;
      let query = {};
      if (searchType != 'recipe') {
        query = { [searchType]: { $regex: searchTerm, $options: 'i' } };
      } else {
        query = {
          quality: { $elemMatch: { [searchType]: { $regex: searchTerm, $options: 'i' } } }
        };
      }
      const result = await getDb().db('valheim').collection('pickaxe').find(query);
      result.toArray().then((lists: any) => {
        if (!lists[0]) {
          res
            .status(404)
            .json(`Pickaxe with ${searchType} containing '${searchTerm}' was not found.`);
        } else {
          res.setHeader('Content-Type', 'application/json');
          res.status(200).json(lists);
        }
      });
    } else {
      res.status(400).json('Search types are name, description and recipe.');
    }
  } catch (err) {
    res.status(500).json('Pickaxe information was not found. Try again later.');
  }
};

export const createPickaxeData = async (req: any, res: any) => {
  try {
    if (req.oidc.isAuthenticated()) {
      let failMessage = '';
      const pickaxe = {
        name: req.body.name,
        description: req.body.description,
        quality1: {
          recipe: req.body.quality1.recipe,
          weight: req.body.quality1.weight,
          durability: req.body.quality1.durability,
          pierce: req.body.quality1.pierce,
          mining: req.body.quality1.mining,
          backstab: req.body.quality1.backstab,
          stagger: req.body.quality1.stagger,
          knockback: req.body.quality1.knockback,
          blockForce: req.body.quality1.blockForce,
          parryBonus: req.body.quality1.parryBonus,
          movement: req.body.quality1.movement
        },
        quality2: {
          recipe: req.body.quality2.recipe,
          weight: req.body.quality2.weight,
          durability: req.body.quality2.durability,
          pierce: req.body.quality2.pierce,
          mining: req.body.quality2.mining,
          backstab: req.body.quality2.backstab,
          stagger: req.body.quality2.stagger,
          knockback: req.body.quality2.knockback,
          blockForce: req.body.quality2.blockForce,
          parryBonus: req.body.quality2.parryBonus,
          movement: req.body.quality2.movement
        },
        quality3: {
          recipe: req.body.quality3.recipe,
          weight: req.body.quality3.weight,
          durability: req.body.quality3.durability,
          pierce: req.body.quality3.pierce,
          mining: req.body.quality3.mining,
          backstab: req.body.quality3.backstab,
          stagger: req.body.quality3.stagger,
          knockback: req.body.quality3.knockback,
          blockForce: req.body.quality3.blockForce,
          parryBonus: req.body.quality3.parryBonus,
          movement: req.body.quality3.movement
        },
        quality4: {
          recipe: req.body.quality4.recipe,
          weight: req.body.quality4.weight,
          durability: req.body.quality4.durability,
          pierce: req.body.quality4.pierce,
          mining: req.body.quality4.mining,
          backstab: req.body.quality4.backstab,
          stagger: req.body.quality4.stagger,
          knockback: req.body.quality4.knockback,
          blockForce: req.body.quality4.blockForce,
          parryBonus: req.body.quality4.parryBonus,
          movement: req.body.quality4.movement
        }
      };
      if (typeof pickaxe.name != 'string') {
        failMessage += 'To create Pickaxe data, enter a name string.\n';
      }
      if (typeof pickaxe.description != 'string') {
        failMessage += 'To create Pickaxe data, enter a description string.\n';
      }
      if (typeof pickaxe.quality1.recipe != 'string') {
        failMessage += 'To create Pickaxe data, enter a quality1 recipe string.\n';
      }
      if (typeof pickaxe.quality1.weight != 'number') {
        failMessage += 'To create Pickaxe data, enter a quality1 numeric weight amount.\n';
      }
      if (typeof pickaxe.quality1.durability != 'number') {
        failMessage += 'To create Pickaxe data, enter a quality1 numeric durability amount.\n';
      }
      if (typeof pickaxe.quality1.pierce != 'number') {
        failMessage += 'To create Pickaxe data, enter a quality1 numeric pierce amount.\n';
      }
      if (typeof pickaxe.quality1.mining != 'number') {
        failMessage += 'To create Pickaxe data, enter a quality1 numeric mining amount.\n';
      }
      if (typeof pickaxe.quality1.backstab != 'string') {
        failMessage += 'To create Pickaxe data, enter a quality1 backstab string.\n';
      }
      if (typeof pickaxe.quality1.stagger != 'number') {
        failMessage += 'To create Pickaxe data, enter a quality1 numeric stagger amount.\n';
      }
      if (typeof pickaxe.quality1.knockback != 'number') {
        failMessage += 'To create Pickaxe data, enter a quality1 numeric knockback amount.\n';
      }
      if (typeof pickaxe.quality1.blockForce != 'number') {
        failMessage += 'To create Pickaxe data, enter a quality1 numeric blockForce amount.\n';
      }
      if (typeof pickaxe.quality1.parryBonus != 'string') {
        failMessage += 'To create Pickaxe data, enter a quality1 parryBonus string.\n';
      }
      if (typeof pickaxe.quality1.movement != 'string') {
        failMessage += 'To create Pickaxe data, enter a quality1 movement string.\n';
      }
      if (typeof pickaxe.quality2.recipe != 'string') {
        failMessage += 'To create Pickaxe data, enter a quality2 recipe string.\n';
      }
      if (typeof pickaxe.quality2.weight != 'number') {
        failMessage += 'To create Pickaxe data, enter a quality2 numeric weight amount.\n';
      }
      if (typeof pickaxe.quality2.durability != 'number') {
        failMessage += 'To create Pickaxe data, enter a quality2 numeric durability amount.\n';
      }
      if (typeof pickaxe.quality2.pierce != 'number') {
        failMessage += 'To create Pickaxe data, enter a quality2 numeric pierce amount.\n';
      }
      if (typeof pickaxe.quality2.mining != 'number') {
        failMessage += 'To create Pickaxe data, enter a quality2 numeric mining amount.\n';
      }
      if (typeof pickaxe.quality2.backstab != 'string') {
        failMessage += 'To create Pickaxe data, enter a quality2 backstab string.\n';
      }
      if (typeof pickaxe.quality2.stagger != 'number') {
        failMessage += 'To create Pickaxe data, enter a quality2 numeric stagger amount.\n';
      }
      if (typeof pickaxe.quality2.knockback != 'number') {
        failMessage += 'To create Pickaxe data, enter a quality2 numeric knockback amount.\n';
      }
      if (typeof pickaxe.quality2.blockForce != 'number') {
        failMessage += 'To create Pickaxe data, enter a quality2 numeric blockForce amount.\n';
      }
      if (typeof pickaxe.quality2.parryBonus != 'string') {
        failMessage += 'To create Pickaxe data, enter a quality2 parryBonus string.\n';
      }
      if (typeof pickaxe.quality2.movement != 'string') {
        failMessage += 'To create Pickaxe data, enter a quality2 movement string.\n';
      }
      if (typeof pickaxe.quality3.recipe != 'string') {
        failMessage += 'To create Pickaxe data, enter a quality3 recipe string.\n';
      }
      if (typeof pickaxe.quality3.weight != 'number') {
        failMessage += 'To create Pickaxe data, enter a quality3 numeric weight amount.\n';
      }
      if (typeof pickaxe.quality3.durability != 'number') {
        failMessage += 'To create Pickaxe data, enter a quality3 numeric durability amount.\n';
      }
      if (typeof pickaxe.quality3.pierce != 'number') {
        failMessage += 'To create Pickaxe data, enter a quality3 numeric pierce amount.\n';
      }
      if (typeof pickaxe.quality3.mining != 'number') {
        failMessage += 'To create Pickaxe data, enter a quality3 numeric mining amount.\n';
      }
      if (typeof pickaxe.quality3.backstab != 'string') {
        failMessage += 'To create Pickaxe data, enter a quality3 backstab string.\n';
      }
      if (typeof pickaxe.quality3.stagger != 'number') {
        failMessage += 'To create Pickaxe data, enter a quality3 numeric stagger amount.\n';
      }
      if (typeof pickaxe.quality3.knockback != 'number') {
        failMessage += 'To create Pickaxe data, enter a quality3 numeric knockback amount.\n';
      }
      if (typeof pickaxe.quality3.blockForce != 'number') {
        failMessage += 'To create Pickaxe data, enter a quality3 numeric blockForce amount.\n';
      }
      if (typeof pickaxe.quality3.parryBonus != 'string') {
        failMessage += 'To create Pickaxe data, enter a quality3 parryBonus string.\n';
      }
      if (typeof pickaxe.quality3.movement != 'string') {
        failMessage += 'To create Pickaxe data, enter a quality3 movement string.';
      }
      if (failMessage != '') {
        res.status(400);
        res.send(failMessage);
      } else {
        const response = await getDb().db('valheim').collection('pickaxe').insertOne(pickaxe);
        if (response.acknowledged) {
          res.status(201).json(response);
        } else {
          res
            .status(500)
            .json(
              response.error ||
                'Something went wrong while creating the pickaxe data. Try again later.'
            );
        }
      }
    } else {
      res.status(401).json('You must login to run this request.');
    }
  } catch (err) {
    res.status(500).json('Something went wrong while creating the pickaxe data. Try again later.');
  }
};

export const updatePickaxeData = async (req: any, res: any) => {
  try {
    if (req.oidc.isAuthenticated()) {
      if (!ObjectId.isValid(req.params.id)) {
        res.status(400).json('ID must be alphanumeric, 24 characters long.');
      } else {
        let failMessage = '';
        const pickaxe = {
          name: req.body.name,
          description: req.body.description,
          quality1: {
            recipe: req.body.quality1.recipe,
            weight: req.body.quality1.weight,
            durability: req.body.quality1.durability,
            pierce: req.body.quality1.pierce,
            mining: req.body.quality1.mining,
            backstab: req.body.quality1.backstab,
            stagger: req.body.quality1.stagger,
            knockback: req.body.quality1.knockback,
            blockForce: req.body.quality1.blockForce,
            parryBonus: req.body.quality1.parryBonus,
            movement: req.body.quality1.movement
          },
          quality2: {
            recipe: req.body.quality2.recipe,
            weight: req.body.quality2.weight,
            durability: req.body.quality2.durability,
            pierce: req.body.quality2.pierce,
            mining: req.body.quality2.mining,
            backstab: req.body.quality2.backstab,
            stagger: req.body.quality2.stagger,
            knockback: req.body.quality2.knockback,
            blockForce: req.body.quality2.blockForce,
            parryBonus: req.body.quality2.parryBonus,
            movement: req.body.quality2.movement
          },
          quality3: {
            recipe: req.body.quality3.recipe,
            weight: req.body.quality3.weight,
            durability: req.body.quality3.durability,
            pierce: req.body.quality3.pierce,
            mining: req.body.quality3.mining,
            backstab: req.body.quality3.backstab,
            stagger: req.body.quality3.stagger,
            knockback: req.body.quality3.knockback,
            blockForce: req.body.quality3.blockForce,
            parryBonus: req.body.quality3.parryBonus,
            movement: req.body.quality3.movement
          },
          quality4: {
            recipe: req.body.quality4.recipe,
            weight: req.body.quality4.weight,
            durability: req.body.quality4.durability,
            pierce: req.body.quality4.pierce,
            mining: req.body.quality4.mining,
            backstab: req.body.quality4.backstab,
            stagger: req.body.quality4.stagger,
            knockback: req.body.quality4.knockback,
            blockForce: req.body.quality4.blockForce,
            parryBonus: req.body.quality4.parryBonus,
            movement: req.body.quality4.movement
          }
        };
        if (typeof pickaxe.name != 'string') {
          failMessage += 'To update Pickaxe data, enter a name string.\n';
        }
        if (typeof pickaxe.description != 'string') {
          failMessage += 'To update Pickaxe data, enter a description string.\n';
        }
        if (typeof pickaxe.quality1.recipe != 'string') {
          failMessage += 'To update Pickaxe data, enter a quality1 recipe string.\n';
        }
        if (typeof pickaxe.quality1.weight != 'number') {
          failMessage += 'To update Pickaxe data, enter a quality1 numeric weight amount.\n';
        }
        if (typeof pickaxe.quality1.durability != 'number') {
          failMessage += 'To update Pickaxe data, enter a quality1 numeric durability amount.\n';
        }
        if (typeof pickaxe.quality1.pierce != 'number') {
          failMessage += 'To update Pickaxe data, enter a quality1 numeric pierce amount.\n';
        }
        if (typeof pickaxe.quality1.mining != 'number') {
          failMessage += 'To update Pickaxe data, enter a quality1 numeric mining amount.\n';
        }
        if (typeof pickaxe.quality1.backstab != 'string') {
          failMessage += 'To update Pickaxe data, enter a quality1 backstab string.\n';
        }
        if (typeof pickaxe.quality1.stagger != 'number') {
          failMessage += 'To update Pickaxe data, enter a quality1 numeric stagger amount.\n';
        }
        if (typeof pickaxe.quality1.knockback != 'number') {
          failMessage += 'To update Pickaxe data, enter a quality1 numeric knockback amount.\n';
        }
        if (typeof pickaxe.quality1.blockForce != 'number') {
          failMessage += 'To update Pickaxe data, enter a quality1 numeric blockForce amount.\n';
        }
        if (typeof pickaxe.quality1.parryBonus != 'string') {
          failMessage += 'To update Pickaxe data, enter a quality1 parryBonus string.\n';
        }
        if (typeof pickaxe.quality1.movement != 'string') {
          failMessage += 'To update Pickaxe data, enter a quality1 movement string.\n';
        }
        if (typeof pickaxe.quality2.recipe != 'string') {
          failMessage += 'To update Pickaxe data, enter a quality2 recipe string.\n';
        }
        if (typeof pickaxe.quality2.weight != 'number') {
          failMessage += 'To update Pickaxe data, enter a quality2 numeric weight amount.\n';
        }
        if (typeof pickaxe.quality2.durability != 'number') {
          failMessage += 'To update Pickaxe data, enter a quality2 numeric durability amount.\n';
        }
        if (typeof pickaxe.quality2.pierce != 'number') {
          failMessage += 'To update Pickaxe data, enter a quality2 numeric pierce amount.\n';
        }
        if (typeof pickaxe.quality2.mining != 'number') {
          failMessage += 'To update Pickaxe data, enter a quality2 numeric mining amount.\n';
        }
        if (typeof pickaxe.quality2.backstab != 'string') {
          failMessage += 'To update Pickaxe data, enter a quality2 backstab string.\n';
        }
        if (typeof pickaxe.quality2.stagger != 'number') {
          failMessage += 'To update Pickaxe data, enter a quality2 numeric stagger amount.\n';
        }
        if (typeof pickaxe.quality2.knockback != 'number') {
          failMessage += 'To update Pickaxe data, enter a quality2 numeric knockback amount.\n';
        }
        if (typeof pickaxe.quality2.blockForce != 'number') {
          failMessage += 'To update Pickaxe data, enter a quality2 numeric blockForce amount.\n';
        }
        if (typeof pickaxe.quality2.parryBonus != 'string') {
          failMessage += 'To update Pickaxe data, enter a quality2 parryBonus string.\n';
        }
        if (typeof pickaxe.quality2.movement != 'string') {
          failMessage += 'To update Pickaxe data, enter a quality2 movement string.\n';
        }
        if (typeof pickaxe.quality3.recipe != 'string') {
          failMessage += 'To update Pickaxe data, enter a quality3 recipe string.\n';
        }
        if (typeof pickaxe.quality3.weight != 'number') {
          failMessage += 'To update Pickaxe data, enter a quality3 numeric weight amount.\n';
        }
        if (typeof pickaxe.quality3.durability != 'number') {
          failMessage += 'To update Pickaxe data, enter a quality3 numeric durability amount.\n';
        }
        if (typeof pickaxe.quality3.pierce != 'number') {
          failMessage += 'To update Pickaxe data, enter a quality3 numeric pierce amount.\n';
        }
        if (typeof pickaxe.quality3.mining != 'number') {
          failMessage += 'To update Pickaxe data, enter a quality3 numeric mining amount.\n';
        }
        if (typeof pickaxe.quality3.backstab != 'string') {
          failMessage += 'To update Pickaxe data, enter a quality3 backstab string.\n';
        }
        if (typeof pickaxe.quality3.stagger != 'number') {
          failMessage += 'To update Pickaxe data, enter a quality3 numeric stagger amount.\n';
        }
        if (typeof pickaxe.quality3.knockback != 'number') {
          failMessage += 'To update Pickaxe data, enter a quality3 numeric knockback amount.\n';
        }
        if (typeof pickaxe.quality3.blockForce != 'number') {
          failMessage += 'To update Pickaxe data, enter a quality3 numeric blockForce amount.\n';
        }
        if (typeof pickaxe.quality3.parryBonus != 'string') {
          failMessage += 'To update Pickaxe data, enter a quality3 parryBonus string.\n';
        }
        if (typeof pickaxe.quality3.movement != 'string') {
          failMessage += 'To update Pickaxe data, enter a quality3 movement string.';
        }
        if (failMessage != '') {
          res.status(400);
          res.send(failMessage);
        } else {
          const userId = new ObjectId(req.params.id);
          const response = await getDb()
            .db('valheim')
            .collection('pickaxe')
            .updateOne(
              { _id: userId },
              {
                $set: {
                  name: pickaxe.name,
                  description: pickaxe.description,
                  quality1: {
                    recipe: pickaxe.quality1.recipe,
                    weight: pickaxe.quality1.weight,
                    durability: pickaxe.quality1.durability,
                    pierce: pickaxe.quality1.pierce,
                    mining: pickaxe.quality1.mining,
                    backstab: pickaxe.quality1.backstab,
                    stagger: pickaxe.quality1.stagger,
                    knockback: pickaxe.quality1.knockback,
                    blockForce: pickaxe.quality1.blockForce,
                    parryBonus: pickaxe.quality1.parryBonus,
                    movement: pickaxe.quality1.movement
                  },
                  quality2: {
                    recipe: pickaxe.quality2.recipe,
                    weight: pickaxe.quality2.weight,
                    durability: pickaxe.quality2.durability,
                    pierce: pickaxe.quality2.pierce,
                    mining: pickaxe.quality2.mining,
                    backstab: pickaxe.quality2.backstab,
                    stagger: pickaxe.quality2.stagger,
                    knockback: pickaxe.quality2.knockback,
                    blockForce: pickaxe.quality2.blockForce,
                    parryBonus: pickaxe.quality2.parryBonus,
                    movement: pickaxe.quality2.movement
                  },
                  quality3: {
                    recipe: pickaxe.quality3.recipe,
                    weight: pickaxe.quality3.weight,
                    durability: pickaxe.quality3.durability,
                    pierce: pickaxe.quality3.pierce,
                    mining: pickaxe.quality3.mining,
                    backstab: pickaxe.quality3.backstab,
                    stagger: pickaxe.quality3.stagger,
                    knockback: pickaxe.quality3.knockback,
                    blockForce: pickaxe.quality3.blockForce,
                    parryBonus: pickaxe.quality3.parryBonus,
                    movement: pickaxe.quality3.movement
                  },
                  quality4: {
                    recipe: pickaxe.quality4.recipe,
                    weight: pickaxe.quality4.weight,
                    durability: pickaxe.quality4.durability,
                    pierce: pickaxe.quality4.pierce,
                    mining: pickaxe.quality4.mining,
                    backstab: pickaxe.quality4.backstab,
                    stagger: pickaxe.quality4.stagger,
                    knockback: pickaxe.quality4.knockback,
                    blockForce: pickaxe.quality4.blockForce,
                    parryBonus: pickaxe.quality4.parryBonus,
                    movement: pickaxe.quality4.movement
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
                  'Something went wrong while updating the pickaxe data. Try again later.'
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

export const deletePickaxeData = async (req: any, res: any) => {
  try {
    if (req.oidc.isAuthenticated()) {
      if (!ObjectId.isValid(req.params.id)) {
        res.status(400).json('ID must be alphanumeric, 24 characters long.');
      } else {
        const userId = new ObjectId(req.params.id);
        const response = await getDb()
          .db('valheim')
          .collection('pickaxe')
          .deleteOne({ _id: userId }, true);
        if (response.deletedCount > 0) {
          res.status(200).send(`Pickaxe data with ID ${userId} was deleted sucessfully.`);
        } else {
          res
            .status(500)
            .json(
              response.error ||
                'Something went wrong while deleting the pickaxe data. Try again later.'
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
