import { getDb } from '../db/connect';
const ObjectId = require('mongodb').ObjectId;

export const getAllSpearData = async (req: any, res: any) => {
  try {
    const result = await getDb().db('valheim').collection('spears').find();
    result.toArray().then((lists: any) => {
      if (!lists[0]) {
        res.status(404).json('Spear information was not found. Try again later.');
      } else {
        res.setHeader('Content-Type', 'application/json');
        res.status(200).json(lists);
      }
    });
  } catch (err) {
    res.status(500).json('Spear information was not found. Try again later.');
  }
};

export const getSpearDataById = async (req: any, res: any) => {
  try {
    if (!ObjectId.isValid(req.params.id)) {
      res.status(400).json('ID must be alphanumeric, 24 characters long.');
    } else {
      const userId = new ObjectId(req.params.id);
      const result = await getDb().db('valheim').collection('spears').find({ _id: userId });
      result.toArray().then((lists: any) => {
        if (!lists[0]) {
          res.status(404).json(`Spear with ID ${userId} was not found.`);
        } else {
          res.setHeader('Content-Type', 'application/json');
          res.status(200).json(lists[0]);
        }
      });
    }
  } catch (err) {
    res.status(500).json('Spear information was not found. Try again later.');
  }
};

export const getSpearDataByParameter = async (req: any, res: any) => {
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
      const result = await getDb().db('valheim').collection('spears').find(query);
      result.toArray().then((lists: any) => {
        if (!lists[0]) {
          res
            .status(404)
            .json(`Spear with ${searchType} containing '${searchTerm}' was not found.`);
        } else {
          res.setHeader('Content-Type', 'application/json');
          res.status(200).json(lists);
        }
      });
    } else {
      res.status(400).json('Search types are name, description and recipe.');
    }
  } catch (err) {
    res.status(500).json('Spear information was not found. Try again later.');
  }
};

export const createSpearData = async (req: any, res: any) => {
  try {
    if (req.oidc.isAuthenticated()) {
      let failMessage = '';
      const spear = {
        name: req.body.name,
        description: req.body.description,
        quality1: {
          recipe: req.body.quality1.recipe,
          weight: req.body.quality1.weight,
          durability: req.body.quality1.durability,
          pierce: req.body.quality1.pierce,
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
          backstab: req.body.quality4.backstab,
          stagger: req.body.quality4.stagger,
          knockback: req.body.quality4.knockback,
          blockForce: req.body.quality4.blockForce,
          parryBonus: req.body.quality4.parryBonus,
          movement: req.body.quality4.movement
        }
      };
      if (typeof spear.name != 'string') {
        failMessage += 'To create Spear data, enter a name string.\n';
      }
      if (typeof spear.description != 'string') {
        failMessage += 'To create Spear data, enter a description string.\n';
      }
      if (typeof spear.quality1.recipe != 'string') {
        failMessage += 'To create Spear data, enter a quality1 recipe string.\n';
      }
      if (typeof spear.quality1.weight != 'number') {
        failMessage += 'To create Spear data, enter a quality1 numeric weight amount.\n';
      }
      if (typeof spear.quality1.durability != 'number') {
        failMessage += 'To create Spear data, enter a quality1 numeric durability amount.\n';
      }
      if (typeof spear.quality1.pierce != 'number') {
        failMessage += 'To create Spear data, enter a quality1 numeric pierce amount.\n';
      }
      if (typeof spear.quality1.backstab != 'string') {
        failMessage += 'To create Spear data, enter a quality1 backstab string.\n';
      }
      if (typeof spear.quality1.stagger != 'number') {
        failMessage += 'To create Spear data, enter a quality1 numeric stagger amount.\n';
      }
      if (typeof spear.quality1.knockback != 'number') {
        failMessage += 'To create Spear data, enter a quality1 numeric knockback amount.\n';
      }
      if (typeof spear.quality1.blockForce != 'number') {
        failMessage += 'To create Spear data, enter a quality1 numeric blockForce amount.\n';
      }
      if (typeof spear.quality1.parryBonus != 'string') {
        failMessage += 'To create Spear data, enter a quality1 parryBonus string.\n';
      }
      if (typeof spear.quality1.movement != 'string') {
        failMessage += 'To create Spear data, enter a quality1 movement string.\n';
      }
      if (typeof spear.quality2.recipe != 'string') {
        failMessage += 'To create Spear data, enter a quality2 recipe string.\n';
      }
      if (typeof spear.quality2.weight != 'number') {
        failMessage += 'To create Spear data, enter a quality2 numeric weight amount.\n';
      }
      if (typeof spear.quality2.durability != 'number') {
        failMessage += 'To create Spear data, enter a quality2 numeric durability amount.\n';
      }
      if (typeof spear.quality2.pierce != 'number') {
        failMessage += 'To create Spear data, enter a quality2 numeric pierce amount.\n';
      }
      if (typeof spear.quality2.backstab != 'string') {
        failMessage += 'To create Spear data, enter a quality2 backstab string.\n';
      }
      if (typeof spear.quality2.stagger != 'number') {
        failMessage += 'To create Spear data, enter a quality2 numeric stagger amount.\n';
      }
      if (typeof spear.quality2.knockback != 'number') {
        failMessage += 'To create Spear data, enter a quality2 numeric knockback amount.\n';
      }
      if (typeof spear.quality2.blockForce != 'number') {
        failMessage += 'To create Spear data, enter a quality2 numeric blockForce amount.\n';
      }
      if (typeof spear.quality2.parryBonus != 'string') {
        failMessage += 'To create Spear data, enter a quality2 parryBonus string.\n';
      }
      if (typeof spear.quality2.movement != 'string') {
        failMessage += 'To create Spear data, enter a quality2 movement string.\n';
      }
      if (typeof spear.quality3.recipe != 'string') {
        failMessage += 'To create Spear data, enter a quality3 recipe string.\n';
      }
      if (typeof spear.quality3.weight != 'number') {
        failMessage += 'To create Spear data, enter a quality3 numeric weight amount.\n';
      }
      if (typeof spear.quality3.durability != 'number') {
        failMessage += 'To create Spear data, enter a quality3 numeric durability amount.\n';
      }
      if (typeof spear.quality3.pierce != 'number') {
        failMessage += 'To create Spear data, enter a quality3 numeric pierce amount.\n';
      }
      if (typeof spear.quality3.backstab != 'string') {
        failMessage += 'To create Spear data, enter a quality3 backstab string.\n';
      }
      if (typeof spear.quality3.stagger != 'number') {
        failMessage += 'To create Spear data, enter a quality3 numeric stagger amount.\n';
      }
      if (typeof spear.quality3.knockback != 'number') {
        failMessage += 'To create Spear data, enter a quality3 numeric knockback amount.\n';
      }
      if (typeof spear.quality3.blockForce != 'number') {
        failMessage += 'To create Spear data, enter a quality3 numeric blockForce amount.\n';
      }
      if (typeof spear.quality3.parryBonus != 'string') {
        failMessage += 'To create Spear data, enter a quality3 parryBonus string.\n';
      }
      if (typeof spear.quality3.movement != 'string') {
        failMessage += 'To create Spear data, enter a quality3 movement string.\n';
      }
      if (typeof spear.quality4.recipe != 'string') {
        failMessage += 'To create Spear data, enter a quality4 recipe string.\n';
      }
      if (typeof spear.quality4.weight != 'number') {
        failMessage += 'To create Spear data, enter a quality4 numeric weight amount.\n';
      }
      if (typeof spear.quality4.durability != 'number') {
        failMessage += 'To create Spear data, enter a quality4 numeric durability amount.\n';
      }
      if (typeof spear.quality4.pierce != 'number') {
        failMessage += 'To create Spear data, enter a quality4 numeric pierce amount.\n';
      }
      if (typeof spear.quality4.backstab != 'string') {
        failMessage += 'To create Spear data, enter a quality4 backstab string.\n';
      }
      if (typeof spear.quality4.stagger != 'number') {
        failMessage += 'To create Spear data, enter a quality4 numeric stagger amount.\n';
      }
      if (typeof spear.quality4.knockback != 'number') {
        failMessage += 'To create Spear data, enter a quality4 numeric knockback amount.\n';
      }
      if (typeof spear.quality4.blockForce != 'number') {
        failMessage += 'To create Spear data, enter a quality4 numeric blockForce amount.\n';
      }
      if (typeof spear.quality4.parryBonus != 'string') {
        failMessage += 'To create Spear data, enter a quality4 parryBonus string.\n';
      }
      if (typeof spear.quality4.movement != 'string') {
        failMessage += 'To create Spear data, enter a quality4 movement string.';
      }
      if (failMessage != '') {
        res.status(400);
        res.send(failMessage);
      } else {
        const response = await getDb().db('valheim').collection('spears').insertOne(spear);
        if (response.acknowledged) {
          res.status(201).json(response);
        } else {
          res
            .status(500)
            .json(
              response.error ||
                'Something went wrong while creating the spear data. Try again later.'
            );
        }
      }
    } else {
      res.status(401).json('You must login to run this request.');
    }
  } catch (err) {
    res.status(500).json('Something went wrong while creating the spear data. Try again later.');
  }
};

export const updateSpearData = async (req: any, res: any) => {
  try {
    if (req.oidc.isAuthenticated()) {
      if (!ObjectId.isValid(req.params.id)) {
        res.status(400).json('ID must be alphanumeric, 24 characters long.');
      } else {
        let failMessage = '';
        const spear = {
          name: req.body.name,
          description: req.body.description,
          quality1: {
            recipe: req.body.quality1.recipe,
            weight: req.body.quality1.weight,
            durability: req.body.quality1.durability,
            pierce: req.body.quality1.pierce,
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
            backstab: req.body.quality4.backstab,
            stagger: req.body.quality4.stagger,
            knockback: req.body.quality4.knockback,
            blockForce: req.body.quality4.blockForce,
            parryBonus: req.body.quality4.parryBonus,
            movement: req.body.quality4.movement
          }
        };
        if (typeof spear.name != 'string') {
          failMessage += 'To update Spear data, enter a name string.\n';
        }
        if (typeof spear.description != 'string') {
          failMessage += 'To update Spear data, enter a description string.\n';
        }
        if (typeof spear.quality1.recipe != 'string') {
          failMessage += 'To update Spear data, enter a quality1 recipe string.\n';
        }
        if (typeof spear.quality1.weight != 'number') {
          failMessage += 'To update Spear data, enter a quality1 numeric weight amount.\n';
        }
        if (typeof spear.quality1.durability != 'number') {
          failMessage += 'To update Spear data, enter a quality1 numeric durability amount.\n';
        }
        if (typeof spear.quality1.pierce != 'number') {
          failMessage += 'To update Spear data, enter a quality1 numeric pierce amount.\n';
        }
        if (typeof spear.quality1.backstab != 'string') {
          failMessage += 'To update Spear data, enter a quality1 backstab string.\n';
        }
        if (typeof spear.quality1.stagger != 'number') {
          failMessage += 'To update Spear data, enter a quality1 numeric stagger amount.\n';
        }
        if (typeof spear.quality1.knockback != 'number') {
          failMessage += 'To update Spear data, enter a quality1 numeric knockback amount.';
        }
        if (typeof spear.quality1.blockForce != 'number') {
          failMessage += 'To update Spear data, enter a quality1 numeric blockForce amount.';
        }
        if (typeof spear.quality1.parryBonus != 'string') {
          failMessage += 'To update Spear data, enter a quality1 parryBonus string.';
        }
        if (typeof spear.quality1.movement != 'string') {
          failMessage += 'To update Spear data, enter a quality1 movement string.';
        }
        if (typeof spear.quality2.recipe != 'string') {
          failMessage += 'To update Spear data, enter a quality2 recipe string.\n';
        }
        if (typeof spear.quality2.weight != 'number') {
          failMessage += 'To update Spear data, enter a quality2 numeric weight amount.\n';
        }
        if (typeof spear.quality2.durability != 'number') {
          failMessage += 'To update Spear data, enter a quality2 numeric durability amount.\n';
        }
        if (typeof spear.quality2.pierce != 'number') {
          failMessage += 'To update Spear data, enter a quality2 numeric pierce amount.\n';
        }
        if (typeof spear.quality2.backstab != 'string') {
          failMessage += 'To update Spear data, enter a quality2 backstab string.\n';
        }
        if (typeof spear.quality2.stagger != 'number') {
          failMessage += 'To update Spear data, enter a quality2 numeric stagger amount.\n';
        }
        if (typeof spear.quality2.knockback != 'number') {
          failMessage += 'To update Spear data, enter a quality2 numeric knockback amount.';
        }
        if (typeof spear.quality2.blockForce != 'number') {
          failMessage += 'To update Spear data, enter a quality2 numeric blockForce amount.';
        }
        if (typeof spear.quality2.parryBonus != 'string') {
          failMessage += 'To update Spear data, enter a quality2 parryBonus string.';
        }
        if (typeof spear.quality2.movement != 'string') {
          failMessage += 'To update Spear data, enter a quality2 movement string.';
        }
        if (typeof spear.quality3.recipe != 'string') {
          failMessage += 'To update Spear data, enter a quality3 recipe string.\n';
        }
        if (typeof spear.quality3.weight != 'number') {
          failMessage += 'To update Spear data, enter a quality3 numeric weight amount.\n';
        }
        if (typeof spear.quality3.durability != 'number') {
          failMessage += 'To update Spear data, enter a quality3 numeric durability amount.\n';
        }
        if (typeof spear.quality3.pierce != 'number') {
          failMessage += 'To update Spear data, enter a quality3 numeric pierce amount.\n';
        }
        if (typeof spear.quality3.backstab != 'string') {
          failMessage += 'To update Spear data, enter a quality3 backstab string.\n';
        }
        if (typeof spear.quality3.stagger != 'number') {
          failMessage += 'To update Spear data, enter a quality3 numeric stagger amount.\n';
        }
        if (typeof spear.quality3.knockback != 'number') {
          failMessage += 'To update Spear data, enter a quality3 numeric knockback amount.';
        }
        if (typeof spear.quality3.blockForce != 'number') {
          failMessage += 'To update Spear data, enter a quality3 numeric blockForce amount.';
        }
        if (typeof spear.quality3.parryBonus != 'string') {
          failMessage += 'To update Spear data, enter a quality3 parryBonus string.';
        }
        if (typeof spear.quality3.movement != 'string') {
          failMessage += 'To update Spear data, enter a quality3 movement string.';
        }
        if (typeof spear.quality4.recipe != 'string') {
          failMessage += 'To update Spear data, enter a quality4 recipe string.\n';
        }
        if (typeof spear.quality4.weight != 'number') {
          failMessage += 'To update Spear data, enter a quality4 numeric weight amount.\n';
        }
        if (typeof spear.quality4.durability != 'number') {
          failMessage += 'To update Spear data, enter a quality4 numeric durability amount.\n';
        }
        if (typeof spear.quality4.pierce != 'number') {
          failMessage += 'To update Spear data, enter a quality4 numeric pierce amount.\n';
        }
        if (typeof spear.quality4.backstab != 'string') {
          failMessage += 'To update Spear data, enter a quality4 backstab string.\n';
        }
        if (typeof spear.quality4.stagger != 'number') {
          failMessage += 'To update Spear data, enter a quality4 numeric stagger amount.\n';
        }
        if (typeof spear.quality4.knockback != 'number') {
          failMessage += 'To update Spear data, enter a quality4 numeric knockback amount.';
        }
        if (typeof spear.quality4.blockForce != 'number') {
          failMessage += 'To update Spear data, enter a quality4 numeric blockForce amount.';
        }
        if (typeof spear.quality4.parryBonus != 'string') {
          failMessage += 'To update Spear data, enter a quality4 parryBonus string.';
        }
        if (typeof spear.quality4.movement != 'string') {
          failMessage += 'To update Spear data, enter a quality4 movement string.';
        }
        if (failMessage != '') {
          res.status(400);
          res.send(failMessage);
        } else {
          const userId = new ObjectId(req.params.id);
          const response = await getDb()
            .db('valheim')
            .collection('spears')
            .updateOne(
              { _id: userId },
              {
                $set: {
                  name: spear.name,
                  description: spear.description,
                  quality1: {
                    recipe: spear.quality1.recipe,
                    weight: spear.quality1.weight,
                    durability: spear.quality1.durability,
                    pierce: spear.quality1.pierce,
                    backstab: spear.quality1.backstab,
                    stagger: spear.quality1.stagger,
                    knockback: spear.quality1.knockback,
                    blockForce: spear.quality4.blockForce,
                    parryBonus: spear.quality1.parryBonus,
                    movement: spear.quality1.movement
                  },
                  quality2: {
                    recipe: spear.quality2.recipe,
                    weight: spear.quality2.weight,
                    durability: spear.quality2.durability,
                    pierce: spear.quality2.pierce,
                    backstab: spear.quality2.backstab,
                    stagger: spear.quality2.stagger,
                    knockback: spear.quality2.knockback,
                    blockForce: spear.quality4.blockForce,
                    parryBonus: spear.quality2.parryBonus,
                    movement: spear.quality2.movement
                  },
                  quality3: {
                    recipe: spear.quality3.recipe,
                    weight: spear.quality3.weight,
                    durability: spear.quality3.durability,
                    pierce: spear.quality3.pierce,
                    backstab: spear.quality3.backstab,
                    stagger: spear.quality3.stagger,
                    knockback: spear.quality3.knockback,
                    blockForce: spear.quality4.blockForce,
                    parryBonus: spear.quality3.parryBonus,
                    movement: spear.quality3.movement
                  },
                  quality4: {
                    recipe: spear.quality4.recipe,
                    weight: spear.quality4.weight,
                    durability: spear.quality4.durability,
                    pierce: spear.quality4.pierce,
                    backstab: spear.quality4.backstab,
                    stagger: spear.quality4.stagger,
                    knockback: spear.quality4.knockback,
                    blockForce: spear.quality4.blockForce,
                    parryBonus: spear.quality4.parryBonus,
                    movement: spear.quality4.movement
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
                  'Something went wrong while updating the spear data. Try again later.'
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

export const deleteSpearData = async (req: any, res: any) => {
  try {
    if (req.oidc.isAuthenticated()) {
      if (!ObjectId.isValid(req.params.id)) {
        res.status(400).json('ID must be alphanumeric, 24 characters long.');
      } else {
        const userId = new ObjectId(req.params.id);
        const response = await getDb()
          .db('valheim')
          .collection('spears')
          .deleteOne({ _id: userId }, true);
        if (response.deletedCount > 0) {
          res.status(200).send(`Spear data with ID ${userId} was deleted sucessfully.`);
        } else {
          res
            .status(500)
            .json(
              response.error ||
                'Something went wrong while deleting the spear data. Try again later.'
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
