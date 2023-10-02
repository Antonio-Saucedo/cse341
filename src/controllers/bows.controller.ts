import { getDb } from '../db/connect';
const ObjectId = require('mongodb').ObjectId;

export const getAllBowData = async (req: any, res: any) => {
  try {
    const result = await getDb().db('valheim').collection('bows').find();
    result.toArray().then((lists: any) => {
      if (!lists[0]) {
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

export const getBowDataById = async (req: any, res: any) => {
  try {
    if (!ObjectId.isValid(req.params.id)) {
      res.status(400).json('ID must be alphanumeric, 24 characters long.');
    } else {
      const userId = new ObjectId(req.params.id);
      const result = await getDb().db('valheim').collection('bows').find({ _id: userId });
      result.toArray().then((lists: any) => {
        if (!lists[0]) {
          res.status(404).json(`Bow with ID ${userId} was not found.`);
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

export const getBowDataByParameter = async (req: any, res: any) => {
  try {
    const valid = ['name', 'description'];
    const searchType = req.params.searchType;
    if (valid.includes(searchType)) {
      const searchTerm = req.params.searchTerm;
      if (searchType == 'name') {
        const result = await getDb()
          .db('valheim')
          .collection('bows')
          .find({ name: { $regex: searchTerm, $options: 'i' } });
        result.toArray().then((lists: any) => {
          if (!lists[0]) {
            res
              .status(404)
              .json(`Bow with ${searchType} containing '${searchTerm}' was not found.`);
          } else {
            res.setHeader('Content-Type', 'application/json');
            res.status(200).json(lists);
          }
        });
      } else if (searchType == 'description') {
        const result = await getDb()
          .db('valheim')
          .collection('bows')
          .find({ description: { $regex: searchTerm, $options: 'i' } });
        result.toArray().then((lists: any) => {
          if (!lists[0]) {
            res
              .status(404)
              .json(`Bow with ${searchType} containing '${searchTerm}' was not found.`);
          } else {
            res.setHeader('Content-Type', 'application/json');
            res.status(200).json(lists);
          }
        });
      } else {
        res.status(400).json('Search types are name and description.');
      }
    }
  } catch (err) {
    res.status(500).json('Bow information was not found. Try again later.');
  }
};

export const createBowData = async (req: any, res: any) => {
  try {
    if (req.oidc.isAuthenticated()) {
      let failMessage = '';
      const bow = {
        name: req.body.name,
        description: req.body.description,
        quality1: {
          recipe: req.body.quality1.recipe,
          weight: req.body.quality1.weight,
          durability: req.body.quality1.durability,
          pierce: req.body.quality1.pierce,
          spirit: req.body.quality1.spirit,
          poison: req.body.quality1.poison,
          backstab: req.body.quality1.backstab,
          stagger: req.body.quality1.stagger,
          knockback: req.body.quality1.knockback,
          parryBonus: req.body.quality1.parryBonus,
          movement: req.body.quality1.movement
        },
        quality2: {
          recipe: req.body.quality2.recipe,
          weight: req.body.quality2.weight,
          durability: req.body.quality2.durability,
          pierce: req.body.quality2.pierce,
          spirit: req.body.quality2.spirit,
          poison: req.body.quality2.poison,
          backstab: req.body.quality2.backstab,
          stagger: req.body.quality2.stagger,
          knockback: req.body.quality2.knockback,
          parryBonus: req.body.quality2.parryBonus,
          movement: req.body.quality2.movement
        },
        quality3: {
          recipe: req.body.quality3.recipe,
          weight: req.body.quality3.weight,
          durability: req.body.quality3.durability,
          pierce: req.body.quality3.pierce,
          spirit: req.body.quality3.spirit,
          poison: req.body.quality3.poison,
          backstab: req.body.quality3.backstab,
          stagger: req.body.quality3.stagger,
          knockback: req.body.quality3.knockback,
          parryBonus: req.body.quality3.parryBonus,
          movement: req.body.quality3.movement
        },
        quality4: {
          recipe: req.body.quality4.recipe,
          weight: req.body.quality4.weight,
          durability: req.body.quality4.durability,
          pierce: req.body.quality4.pierce,
          spirit: req.body.quality4.spirit,
          poison: req.body.quality4.poison,
          backstab: req.body.quality4.backstab,
          stagger: req.body.quality4.stagger,
          knockback: req.body.quality4.knockback,
          parryBonus: req.body.quality4.parryBonus,
          movement: req.body.quality4.movement
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
        const responce = await getDb().db('valheim').collection('bows').insertOne(bow);
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
    } else {
      res.status(401).json('You must login to run this request.');
    }
  } catch (err) {
    res.status(500).json('Something went wrong while creating the bow data. Try again later.');
  }
};

export const updateBowData = async (req: any, res: any) => {
  try {
    if (req.oidc.isAuthenticated()) {
      if (!ObjectId.isValid(req.params.id)) {
        res.status(400).json('ID must be alphanumeric, 24 characters long.');
      } else {
        let failMessage = '';
        const bow = {
          name: req.body.name,
          description: req.body.description,
          quality1: {
            recipe: req.body.quality1.recipe,
            weight: req.body.quality1.weight,
            durability: req.body.quality1.durability,
            pierce: req.body.quality1.pierce,
            spirit: req.body.quality1.spirit,
            poison: req.body.quality1.poison,
            backstab: req.body.quality1.backstab,
            stagger: req.body.quality1.stagger,
            knockback: req.body.quality1.knockback,
            parryBonus: req.body.quality1.parryBonus,
            movement: req.body.quality1.movement
          },
          quality2: {
            recipe: req.body.quality2.recipe,
            weight: req.body.quality2.weight,
            durability: req.body.quality2.durability,
            pierce: req.body.quality2.pierce,
            spirit: req.body.quality2.spirit,
            poison: req.body.quality2.poison,
            backstab: req.body.quality2.backstab,
            stagger: req.body.quality2.stagger,
            knockback: req.body.quality2.knockback,
            parryBonus: req.body.quality2.parryBonus,
            movement: req.body.quality2.movement
          },
          quality3: {
            recipe: req.body.quality3.recipe,
            weight: req.body.quality3.weight,
            durability: req.body.quality3.durability,
            pierce: req.body.quality3.pierce,
            spirit: req.body.quality3.spirit,
            poison: req.body.quality3.poison,
            backstab: req.body.quality3.backstab,
            stagger: req.body.quality3.stagger,
            knockback: req.body.quality3.knockback,
            parryBonus: req.body.quality3.parryBonus,
            movement: req.body.quality3.movement
          },
          quality4: {
            recipe: req.body.quality4.recipe,
            weight: req.body.quality4.weight,
            durability: req.body.quality4.durability,
            pierce: req.body.quality4.pierce,
            spirit: req.body.quality4.spirit,
            poison: req.body.quality4.poison,
            backstab: req.body.quality4.backstab,
            stagger: req.body.quality4.stagger,
            knockback: req.body.quality4.knockback,
            parryBonus: req.body.quality4.parryBonus,
            movement: req.body.quality4.movement
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
          const responce = await getDb()
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
                responce.error ||
                  'Something went wrong while updating the bow data. Try again later.'
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

export const deleteBowData = async (req: any, res: any) => {
  try {
    if (req.oidc.isAuthenticated()) {
      if (!ObjectId.isValid(req.params.id)) {
        res.status(400).json('ID must be alphanumeric, 24 characters long.');
      } else {
        const userId = new ObjectId(req.params.id);
        const responce = await getDb()
          .db('valheim')
          .collection('bows')
          .deleteOne({ _id: userId }, true);
        if (responce.deletedCount > 0) {
          res.status(200).send(`Bow data with ID ${userId} was deleted sucessfully.`);
        } else {
          res
            .status(500)
            .json(
              responce.error || 'Something went wrong while deleting the bow data. Try again later.'
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
