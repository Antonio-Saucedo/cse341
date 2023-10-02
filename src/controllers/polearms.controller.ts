import { getDb } from '../db/connect';
const ObjectId = require('mongodb').ObjectId;

export const getAllPolearmData = async (req: any, res: any) => {
  try {
    const result = await getDb().db('valheim').collection('polearms').find();
    result.toArray().then((lists: any) => {
      if (!lists[0]) {
        res.status(404).json('Polearms information was not found. Try again later.');
      } else {
        res.setHeader('Content-Type', 'application/json');
        res.status(200).json(lists);
      }
    });
  } catch (err) {
    res.status(500).json('Polearms information was not found. Try again later.');
  }
};

export const getPolearmDataById = async (req: any, res: any) => {
  try {
    if (!ObjectId.isValid(req.params.id)) {
      res.status(400).json('ID must be alphanumeric, 24 characters long.');
    } else {
      const userId = new ObjectId(req.params.id);
      const result = await getDb().db('valheim').collection('polearms').find({ _id: userId });
      result.toArray().then((lists: any) => {
        if (!lists[0]) {
          res.status(404).json(`Polearm with ID ${userId} was not found.`);
        } else {
          res.setHeader('Content-Type', 'application/json');
          res.status(200).json(lists[0]);
        }
      });
    }
  } catch (err) {
    res.status(500).json('Polearm information was not found. Try again later.');
  }
};

export const getPolearmDataByParameter = async (req: any, res: any) => {
  try {
    const valid = ['name', 'description'];
    const searchType = req.params.searchType;
    if (valid.includes(searchType)) {
      const searchTerm = req.params.searchTerm;
      if (searchType == 'name') {
        const result = await getDb()
          .db('valheim')
          .collection('polearms')
          .find({ name: { $regex: searchTerm, $options: 'i' } });
        result.toArray().then((lists: any) => {
          if (!lists[0]) {
            res
              .status(404)
              .json(`Polearm with ${searchType} containing '${searchTerm}' was not found.`);
          } else {
            res.setHeader('Content-Type', 'application/json');
            res.status(200).json(lists);
          }
        });
      } else if (searchType == 'description') {
        const result = await getDb()
          .db('valheim')
          .collection('polearms')
          .find({ description: { $regex: searchTerm, $options: 'i' } });
        result.toArray().then((lists: any) => {
          if (!lists[0]) {
            res
              .status(404)
              .json(`Polearm with ${searchType} containing '${searchTerm}' was not found.`);
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
    res.status(500).json('Polearm information was not found. Try again later.');
  }
};

export const createPolearmData = async (req: any, res: any) => {
  try {
    if (req.oidc.isAuthenticated()) {
      let failMessage = '';
      const polearm = {
        name: req.body.name,
        description: req.body.description,
        quality1: {
          recipe: req.body.quality1.recipe,
          weight: req.body.quality1.weight,
          durability: req.body.quality1.durability,
          pierce: req.body.quality1.pierce,
          lightning: req.body.quality1.lightning,
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
          lightning: req.body.quality2.lightning,
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
          lightning: req.body.quality3.lightning,
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
          lightning: req.body.quality4.lightning,
          backstab: req.body.quality4.backstab,
          stagger: req.body.quality4.stagger,
          knockback: req.body.quality4.knockback,
          blockForce: req.body.quality4.blockForce,
          parryBonus: req.body.quality4.parryBonus,
          movement: req.body.quality4.movement
        }
      };
      if (typeof polearm.name != 'string') {
        failMessage += 'To create Polearm data, enter a name string.\n';
      }
      if (typeof polearm.description != 'string') {
        failMessage += 'To create Polearm data, enter a description string.\n';
      }
      if (typeof polearm.quality1.recipe != 'string') {
        failMessage += 'To create Polearm data, enter a quality1 recipe string.\n';
      }
      if (typeof polearm.quality1.weight != 'number') {
        failMessage += 'To create Polearm data, enter a quality1 numeric weight amount.\n';
      }
      if (typeof polearm.quality1.durability != 'number') {
        failMessage += 'To create Polearm data, enter a quality1 numeric durability amount.\n';
      }
      if (typeof polearm.quality1.pierce != 'number') {
        failMessage += 'To create Polearm data, enter a quality1 numeric pierce amount.\n';
      }
      if (typeof polearm.quality1.lightning != 'number') {
        failMessage += 'To create Polearm data, enter a quality1 numeric lightning amount.\n';
      }
      if (typeof polearm.quality1.backstab != 'string') {
        failMessage += 'To create Polearm data, enter a quality1 backstab string.\n';
      }
      if (typeof polearm.quality1.stagger != 'number') {
        failMessage += 'To create Polearm data, enter a quality1 numeric stagger amount.\n';
      }
      if (typeof polearm.quality1.knockback != 'number') {
        failMessage += 'To create Polearm data, enter a quality1 numeric knockback amount.\n';
      }
      if (typeof polearm.quality1.blockForce != 'number') {
        failMessage += 'To create Polearm data, enter a quality1 numeric blockForce amount.\n';
      }
      if (typeof polearm.quality1.parryBonus != 'string') {
        failMessage += 'To create Polearm data, enter a quality1 parryBonus string.\n';
      }
      if (typeof polearm.quality1.movement != 'string') {
        failMessage += 'To create Polearm data, enter a quality1 movement string.\n';
      }
      if (typeof polearm.quality2.recipe != 'string') {
        failMessage += 'To create Polearm data, enter a quality2 recipe string.\n';
      }
      if (typeof polearm.quality2.weight != 'number') {
        failMessage += 'To create Polearm data, enter a quality2 numeric weight amount.\n';
      }
      if (typeof polearm.quality2.durability != 'number') {
        failMessage += 'To create Polearm data, enter a quality2 numeric durability amount.\n';
      }
      if (typeof polearm.quality2.pierce != 'number') {
        failMessage += 'To create Polearm data, enter a quality2 numeric pierce amount.\n';
      }
      if (typeof polearm.quality2.lightning != 'number') {
        failMessage += 'To create Polearm data, enter a quality2 numeric lightning amount.\n';
      }
      if (typeof polearm.quality2.backstab != 'string') {
        failMessage += 'To create Polearm data, enter a quality2 backstab string.\n';
      }
      if (typeof polearm.quality2.stagger != 'number') {
        failMessage += 'To create Polearm data, enter a quality2 numeric stagger amount.\n';
      }
      if (typeof polearm.quality2.knockback != 'number') {
        failMessage += 'To create Polearm data, enter a quality2 numeric knockback amount.\n';
      }
      if (typeof polearm.quality2.blockForce != 'number') {
        failMessage += 'To create Polearm data, enter a quality2 numeric blockForce amount.\n';
      }
      if (typeof polearm.quality2.parryBonus != 'string') {
        failMessage += 'To create Polearm data, enter a quality2 parryBonus string.\n';
      }
      if (typeof polearm.quality2.movement != 'string') {
        failMessage += 'To create Polearm data, enter a quality2 movement string.\n';
      }
      if (typeof polearm.quality3.recipe != 'string') {
        failMessage += 'To create Polearm data, enter a quality3 recipe string.\n';
      }
      if (typeof polearm.quality3.weight != 'number') {
        failMessage += 'To create Polearm data, enter a quality3 numeric weight amount.\n';
      }
      if (typeof polearm.quality3.durability != 'number') {
        failMessage += 'To create Polearm data, enter a quality3 numeric durability amount.\n';
      }
      if (typeof polearm.quality3.pierce != 'number') {
        failMessage += 'To create Polearm data, enter a quality3 numeric pierce amount.\n';
      }
      if (typeof polearm.quality3.lightning != 'number') {
        failMessage += 'To create Polearm data, enter a quality3 numeric lightning amount.\n';
      }
      if (typeof polearm.quality3.backstab != 'string') {
        failMessage += 'To create Polearm data, enter a quality3 backstab string.\n';
      }
      if (typeof polearm.quality3.stagger != 'number') {
        failMessage += 'To create Polearm data, enter a quality3 numeric stagger amount.\n';
      }
      if (typeof polearm.quality3.knockback != 'number') {
        failMessage += 'To create Polearm data, enter a quality3 numeric knockback amount.\n';
      }
      if (typeof polearm.quality3.blockForce != 'number') {
        failMessage += 'To create Polearm data, enter a quality3 numeric blockForce amount.\n';
      }
      if (typeof polearm.quality3.parryBonus != 'string') {
        failMessage += 'To create Polearm data, enter a quality3 parryBonus string.\n';
      }
      if (typeof polearm.quality3.movement != 'string') {
        failMessage += 'To create Polearm data, enter a quality3 movement string.';
      }
      if (failMessage != '') {
        res.status(400);
        res.send(failMessage);
      } else {
        const responce = await getDb().db('valheim').collection('polearms').insertOne(polearm);
        if (responce.acknowledged) {
          res.status(201).json(responce);
        } else {
          res
            .status(500)
            .json(
              responce.error ||
                'Something went wrong while creating the polearm data. Try again later.'
            );
        }
      }
    } else {
      res.status(401).json('You must login to run this request.');
    }
  } catch (err) {
    res.status(500).json('Something went wrong while creating the polearm data. Try again later.');
  }
};

export const updatePolearmData = async (req: any, res: any) => {
  try {
    if (req.oidc.isAuthenticated()) {
      if (!ObjectId.isValid(req.params.id)) {
        res.status(400).json('ID must be alphanumeric, 24 characters long.');
      } else {
        let failMessage = '';
        const polearm = {
          name: req.body.name,
          description: req.body.description,
          quality1: {
            recipe: req.body.quality1.recipe,
            weight: req.body.quality1.weight,
            durability: req.body.quality1.durability,
            pierce: req.body.quality1.pierce,
            lightning: req.body.quality1.lightning,
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
            lightning: req.body.quality2.lightning,
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
            lightning: req.body.quality3.lightning,
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
            lightning: req.body.quality4.lightning,
            backstab: req.body.quality4.backstab,
            stagger: req.body.quality4.stagger,
            knockback: req.body.quality4.knockback,
            blockForce: req.body.quality4.blockForce,
            parryBonus: req.body.quality4.parryBonus,
            movement: req.body.quality4.movement
          }
        };
        if (typeof polearm.name != 'string') {
          failMessage += 'To update Polearm data, enter a name string.\n';
        }
        if (typeof polearm.description != 'string') {
          failMessage += 'To update Polearm data, enter a description string.\n';
        }
        if (typeof polearm.quality1.recipe != 'string') {
          failMessage += 'To update Polearm data, enter a quality1 recipe string.\n';
        }
        if (typeof polearm.quality1.weight != 'number') {
          failMessage += 'To update Polearm data, enter a quality1 numeric weight amount.\n';
        }
        if (typeof polearm.quality1.durability != 'number') {
          failMessage += 'To update Polearm data, enter a quality1 numeric durability amount.\n';
        }
        if (typeof polearm.quality1.pierce != 'number') {
          failMessage += 'To update Polearm data, enter a quality1 numeric pierce amount.\n';
        }
        if (typeof polearm.quality1.lightning != 'number') {
          failMessage += 'To update Polearm data, enter a quality1 numeric lightning amount.\n';
        }
        if (typeof polearm.quality1.backstab != 'string') {
          failMessage += 'To update Polearm data, enter a quality1 backstab string.\n';
        }
        if (typeof polearm.quality1.stagger != 'number') {
          failMessage += 'To update Polearm data, enter a quality1 numeric stagger amount.\n';
        }
        if (typeof polearm.quality1.knockback != 'number') {
          failMessage += 'To update Polearm data, enter a quality1 numeric knockback amount.\n';
        }
        if (typeof polearm.quality1.blockForce != 'number') {
          failMessage += 'To update Polearm data, enter a quality1 numeric blockForce amount.\n';
        }
        if (typeof polearm.quality1.parryBonus != 'string') {
          failMessage += 'To update Polearm data, enter a quality1 parryBonus string.\n';
        }
        if (typeof polearm.quality1.movement != 'string') {
          failMessage += 'To update Polearm data, enter a quality1 movement string.\n';
        }
        if (typeof polearm.quality2.recipe != 'string') {
          failMessage += 'To update Polearm data, enter a quality2 recipe string.\n';
        }
        if (typeof polearm.quality2.weight != 'number') {
          failMessage += 'To update Polearm data, enter a quality2 numeric weight amount.\n';
        }
        if (typeof polearm.quality2.durability != 'number') {
          failMessage += 'To update Polearm data, enter a quality2 numeric durability amount.\n';
        }
        if (typeof polearm.quality2.pierce != 'number') {
          failMessage += 'To update Polearm data, enter a quality2 numeric pierce amount.\n';
        }
        if (typeof polearm.quality2.lightning != 'number') {
          failMessage += 'To update Polearm data, enter a quality2 numeric lightning amount.\n';
        }
        if (typeof polearm.quality2.backstab != 'string') {
          failMessage += 'To update Polearm data, enter a quality2 backstab string.\n';
        }
        if (typeof polearm.quality2.stagger != 'number') {
          failMessage += 'To update Polearm data, enter a quality2 numeric stagger amount.\n';
        }
        if (typeof polearm.quality2.knockback != 'number') {
          failMessage += 'To update Polearm data, enter a quality2 numeric knockback amount.\n';
        }
        if (typeof polearm.quality2.blockForce != 'number') {
          failMessage += 'To update Polearm data, enter a quality2 numeric blockForce amount.\n';
        }
        if (typeof polearm.quality2.parryBonus != 'string') {
          failMessage += 'To update Polearm data, enter a quality2 parryBonus string.\n';
        }
        if (typeof polearm.quality2.movement != 'string') {
          failMessage += 'To update Polearm data, enter a quality2 movement string.\n';
        }
        if (typeof polearm.quality3.recipe != 'string') {
          failMessage += 'To update Polearm data, enter a quality3 recipe string.\n';
        }
        if (typeof polearm.quality3.weight != 'number') {
          failMessage += 'To update Polearm data, enter a quality3 numeric weight amount.\n';
        }
        if (typeof polearm.quality3.durability != 'number') {
          failMessage += 'To update Polearm data, enter a quality3 numeric durability amount.\n';
        }
        if (typeof polearm.quality3.pierce != 'number') {
          failMessage += 'To update Polearm data, enter a quality3 numeric pierce amount.\n';
        }
        if (typeof polearm.quality3.lightning != 'number') {
          failMessage += 'To update Polearm data, enter a quality3 numeric lightning amount.\n';
        }
        if (typeof polearm.quality3.backstab != 'string') {
          failMessage += 'To update Polearm data, enter a quality3 backstab string.\n';
        }
        if (typeof polearm.quality3.stagger != 'number') {
          failMessage += 'To update Polearm data, enter a quality3 numeric stagger amount.\n';
        }
        if (typeof polearm.quality3.knockback != 'number') {
          failMessage += 'To update Polearm data, enter a quality3 numeric knockback amount.\n';
        }
        if (typeof polearm.quality3.blockForce != 'number') {
          failMessage += 'To update Polearm data, enter a quality3 numeric blockForce amount.\n';
        }
        if (typeof polearm.quality3.parryBonus != 'string') {
          failMessage += 'To update Polearm data, enter a quality3 parryBonus string.\n';
        }
        if (typeof polearm.quality3.movement != 'string') {
          failMessage += 'To update Polearm data, enter a quality3 movement string.';
        }
        if (failMessage != '') {
          res.status(400);
          res.send(failMessage);
        } else {
          const userId = new ObjectId(req.params.id);
          const responce = await getDb()
            .db('valheim')
            .collection('polearms')
            .updateOne(
              { _id: userId },
              {
                $set: {
                  name: polearm.name,
                  description: polearm.description,
                  quality1: {
                    recipe: polearm.quality1.recipe,
                    weight: polearm.quality1.weight,
                    durability: polearm.quality1.durability,
                    pierce: polearm.quality1.pierce,
                    lightning: polearm.quality1.lightning,
                    backstab: polearm.quality1.backstab,
                    stagger: polearm.quality1.stagger,
                    knockback: polearm.quality1.knockback,
                    blockForce: polearm.quality1.blockForce,
                    parryBonus: polearm.quality1.parryBonus,
                    movement: polearm.quality1.movement
                  },
                  quality2: {
                    recipe: polearm.quality2.recipe,
                    weight: polearm.quality2.weight,
                    durability: polearm.quality2.durability,
                    pierce: polearm.quality2.pierce,
                    lightning: polearm.quality2.lightning,
                    backstab: polearm.quality2.backstab,
                    stagger: polearm.quality2.stagger,
                    knockback: polearm.quality2.knockback,
                    blockForce: polearm.quality2.blockForce,
                    parryBonus: polearm.quality2.parryBonus,
                    movement: polearm.quality2.movement
                  },
                  quality3: {
                    recipe: polearm.quality3.recipe,
                    weight: polearm.quality3.weight,
                    durability: polearm.quality3.durability,
                    pierce: polearm.quality3.pierce,
                    lightning: polearm.quality3.lightning,
                    backstab: polearm.quality3.backstab,
                    stagger: polearm.quality3.stagger,
                    knockback: polearm.quality3.knockback,
                    blockForce: polearm.quality3.blockForce,
                    parryBonus: polearm.quality3.parryBonus,
                    movement: polearm.quality3.movement
                  },
                  quality4: {
                    recipe: polearm.quality4.recipe,
                    weight: polearm.quality4.weight,
                    durability: polearm.quality4.durability,
                    pierce: polearm.quality4.pierce,
                    lightning: polearm.quality4.lightning,
                    backstab: polearm.quality4.backstab,
                    stagger: polearm.quality4.stagger,
                    knockback: polearm.quality4.knockback,
                    blockForce: polearm.quality4.blockForce,
                    parryBonus: polearm.quality4.parryBonus,
                    movement: polearm.quality4.movement
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
                  'Something went wrong while updating the polearm data. Try again later.'
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

export const deletePolearmData = async (req: any, res: any) => {
  try {
    if (req.oidc.isAuthenticated()) {
      if (!ObjectId.isValid(req.params.id)) {
        res.status(400).json('ID must be alphanumeric, 24 characters long.');
      } else {
        const userId = new ObjectId(req.params.id);
        const responce = await getDb()
          .db('valheim')
          .collection('polearms')
          .deleteOne({ _id: userId }, true);
        if (responce.deletedCount > 0) {
          res.status(200).send(`Polearm data with ID ${userId} was deleted sucessfully.`);
        } else {
          res
            .status(500)
            .json(
              responce.error ||
                'Something went wrong while deleting the polearm data. Try again later.'
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
