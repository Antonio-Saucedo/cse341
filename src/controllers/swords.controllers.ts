import { getDb } from '../db/connect';
const ObjectId = require('mongodb').ObjectId;

export const getAllSwordData = async (req: any, res: any) => {
  try {
    const result = await getDb().db('valheim').collection('swords').find();
    result.toArray().then((lists: any) => {
      if (!lists[0]) {
        res.status(404).json('Sword information was not found. Try again later.');
      } else {
        res.setHeader('Content-Type', 'application/json');
        res.status(200).json(lists);
      }
    });
  } catch (err) {
    res.status(500).json('Sword information was not found. Try again later.');
  }
};

export const getSwordDataById = async (req: any, res: any) => {
  try {
    if (!ObjectId.isValid(req.params.id)) {
      res.status(400).json('ID must be alphanumeric, 24 characters long.');
    } else {
      const userId = new ObjectId(req.params.id);
      const result = await getDb().db('valheim').collection('swords').find({ _id: userId });
      result.toArray().then((lists: any) => {
        if (!lists[0]) {
          res.status(404).json(`Sword with ID ${userId} was not found.`);
        } else {
          res.setHeader('Content-Type', 'application/json');
          res.status(200).json(lists[0]);
        }
      });
    }
  } catch (err) {
    res.status(500).json('Sword information was not found. Try again later.');
  }
};

export const createSwordData = async (req: any, res: any) => {
  try {
    if (req.oidc.isAuthenticated()) {
      let failMessage = '';
      const sword = {
        name: req.body.name,
        description: req.body.description,
        quality1: {
          recipe: req.body.recipe,
          weight: req.body.weight,
          durability: req.body.durability,
          slash: req.body.slash,
          spirit: req.body.spirit,
          frost: req.body.frost,
          backstab: req.body.backstab,
          stagger: req.body.stagger,
          knockback: req.body.knockback,
          blockForce: req.body.blockForce,
          parryBonus: req.body.parryBonus,
          movement: req.body.movement
        },
        quality2: {
          recipe: req.body.recipe,
          weight: req.body.weight,
          durability: req.body.durability,
          slash: req.body.slash,
          spirit: req.body.spirit,
          frost: req.body.frost,
          backstab: req.body.backstab,
          stagger: req.body.stagger,
          knockback: req.body.knockback,
          blockForce: req.body.blockForce,
          parryBonus: req.body.parryBonus,
          movement: req.body.movement
        },
        quality3: {
          recipe: req.body.recipe,
          weight: req.body.weight,
          durability: req.body.durability,
          slash: req.body.slash,
          spirit: req.body.spirit,
          frost: req.body.frost,
          backstab: req.body.backstab,
          stagger: req.body.stagger,
          knockback: req.body.knockback,
          blockForce: req.body.blockForce,
          parryBonus: req.body.parryBonus,
          movement: req.body.movement
        },
        quality4: {
          recipe: req.body.recipe,
          weight: req.body.weight,
          durability: req.body.durability,
          slash: req.body.slash,
          spirit: req.body.spirit,
          frost: req.body.frost,
          backstab: req.body.backstab,
          stagger: req.body.stagger,
          knockback: req.body.knockback,
          blockForce: req.body.blockForce,
          parryBonus: req.body.parryBonus,
          movement: req.body.movement
        }
      };
      if (typeof sword.name != 'string') {
        failMessage += 'To create Sword data, enter a name string.\n';
      }
      if (typeof sword.description != 'string') {
        failMessage += 'To create Sword data, enter a description string.\n';
      }
      if (typeof sword.quality1.recipe != 'string') {
        failMessage += 'To create Sword data, enter a quality1 recipe string.\n';
      }
      if (typeof sword.quality1.weight != 'number') {
        failMessage += 'To create Sword data, enter a quality1 numeric weight amount.\n';
      }
      if (typeof sword.quality1.durability != 'number') {
        failMessage += 'To create Sword data, enter a quality1 numeric durability amount.\n';
      }
      if (typeof sword.quality1.slash != 'number') {
        failMessage += 'To create Sword data, enter a quality1 numeric slash amount.\n';
      }
      if (typeof sword.quality1.spirit != 'number') {
        failMessage += 'To create Sword data, enter a quality1 numeric spirit amount.\n';
      }
      if (typeof sword.quality1.frost != 'number') {
        failMessage += 'To create Sword data, enter a quality1 numeric frost amount.\n';
      }
      if (typeof sword.quality1.backstab != 'string') {
        failMessage += 'To create Sword data, enter a quality1 backstab string.\n';
      }
      if (typeof sword.quality1.stagger != 'number') {
        failMessage += 'To create Sword data, enter a quality1 numeric stagger amount.\n';
      }
      if (typeof sword.quality1.knockback != 'number') {
        failMessage += 'To create Sword data, enter a quality1 numeric knockback amount.\n';
      }
      if (typeof sword.quality1.blockForce != 'number') {
        failMessage += 'To create Sword data, enter a quality1 numeric blockForce amount.\n';
      }
      if (typeof sword.quality1.parryBonus != 'string') {
        failMessage += 'To create Sword data, enter a quality1 parryBonus string.\n';
      }
      if (typeof sword.quality1.movement != 'string') {
        failMessage += 'To create Sword data, enter a quality1 movement string.\n';
      }
      if (typeof sword.quality2.recipe != 'string') {
        failMessage += 'To create Sword data, enter a quality2 recipe string.\n';
      }
      if (typeof sword.quality2.weight != 'number') {
        failMessage += 'To create Sword data, enter a quality2 numeric weight amount.\n';
      }
      if (typeof sword.quality2.durability != 'number') {
        failMessage += 'To create Sword data, enter a quality2 numeric durability amount.\n';
      }
      if (typeof sword.quality2.slash != 'number') {
        failMessage += 'To create Sword data, enter a quality2 numeric slash amount.\n';
      }
      if (typeof sword.quality2.spirit != 'number') {
        failMessage += 'To create Sword data, enter a quality2 numeric spirit amount.\n';
      }
      if (typeof sword.quality2.frost != 'number') {
        failMessage += 'To create Sword data, enter a quality2 numeric frost amount.\n';
      }
      if (typeof sword.quality2.backstab != 'string') {
        failMessage += 'To create Sword data, enter a quality2 backstab string.\n';
      }
      if (typeof sword.quality2.stagger != 'number') {
        failMessage += 'To create Sword data, enter a quality2 numeric stagger amount.\n';
      }
      if (typeof sword.quality2.knockback != 'number') {
        failMessage += 'To create Sword data, enter a quality2 numeric knockback amount.\n';
      }
      if (typeof sword.quality2.blockForce != 'number') {
        failMessage += 'To create Sword data, enter a quality2 numeric blockForce amount.\n';
      }
      if (typeof sword.quality2.parryBonus != 'string') {
        failMessage += 'To create Sword data, enter a quality2 parryBonus string.\n';
      }
      if (typeof sword.quality2.movement != 'string') {
        failMessage += 'To create Sword data, enter a quality2 movement string.\n';
      }
      if (typeof sword.quality3.recipe != 'string') {
        failMessage += 'To create Sword data, enter a quality3 recipe string.\n';
      }
      if (typeof sword.quality3.weight != 'number') {
        failMessage += 'To create Sword data, enter a quality3 numeric weight amount.\n';
      }
      if (typeof sword.quality3.durability != 'number') {
        failMessage += 'To create Sword data, enter a quality3 numeric durability amount.\n';
      }
      if (typeof sword.quality3.slash != 'number') {
        failMessage += 'To create Sword data, enter a quality3 numeric slash amount.\n';
      }
      if (typeof sword.quality3.spirit != 'number') {
        failMessage += 'To create Sword data, enter a quality3 numeric spirit amount.\n';
      }
      if (typeof sword.quality3.frost != 'number') {
        failMessage += 'To create Sword data, enter a quality3 numeric frost amount.\n';
      }
      if (typeof sword.quality3.backstab != 'string') {
        failMessage += 'To create Sword data, enter a quality3 backstab string.\n';
      }
      if (typeof sword.quality3.stagger != 'number') {
        failMessage += 'To create Sword data, enter a quality3 numeric stagger amount.\n';
      }
      if (typeof sword.quality3.knockback != 'number') {
        failMessage += 'To create Sword data, enter a quality3 numeric knockback amount.\n';
      }
      if (typeof sword.quality3.blockForce != 'number') {
        failMessage += 'To create Sword data, enter a quality3 numeric blockForce amount.\n';
      }
      if (typeof sword.quality3.parryBonus != 'string') {
        failMessage += 'To create Sword data, enter a quality3 parryBonus string.\n';
      }
      if (typeof sword.quality3.movement != 'string') {
        failMessage += 'To create Sword data, enter a quality3 movement string.\n';
      }
      if (typeof sword.quality4.recipe != 'string') {
        failMessage += 'To create Sword data, enter a quality4 recipe string.\n';
      }
      if (typeof sword.quality4.weight != 'number') {
        failMessage += 'To create Sword data, enter a quality4 numeric weight amount.\n';
      }
      if (typeof sword.quality4.durability != 'number') {
        failMessage += 'To create Sword data, enter a quality4 numeric durability amount.\n';
      }
      if (typeof sword.quality4.slash != 'number') {
        failMessage += 'To create Sword data, enter a quality4 numeric slash amount.\n';
      }
      if (typeof sword.quality4.spirit != 'number') {
        failMessage += 'To create Sword data, enter a quality4 numeric spirit amount.\n';
      }
      if (typeof sword.quality4.frost != 'number') {
        failMessage += 'To create Sword data, enter a quality4 numeric frost amount.\n';
      }
      if (typeof sword.quality4.backstab != 'string') {
        failMessage += 'To create Sword data, enter a quality4 backstab string.\n';
      }
      if (typeof sword.quality4.stagger != 'number') {
        failMessage += 'To create Sword data, enter a quality4 numeric stagger amount.\n';
      }
      if (typeof sword.quality4.knockback != 'number') {
        failMessage += 'To create Sword data, enter a quality4 numeric knockback amount.\n';
      }
      if (typeof sword.quality4.blockForce != 'number') {
        failMessage += 'To create Sword data, enter a quality4 numeric blockForce amount.\n';
      }
      if (typeof sword.quality4.parryBonus != 'string') {
        failMessage += 'To create Sword data, enter a quality4 parryBonus string.\n';
      }
      if (typeof sword.quality4.movement != 'string') {
        failMessage += 'To create Sword data, enter a quality4 movement string.';
      }
      if (failMessage != '') {
        res.status(400);
        res.send(failMessage);
      } else {
        const responce = await getDb().db('valheim').collection('swords').insertOne(sword);
        if (responce.acknowledged) {
          res.status(201).json(responce);
        } else {
          res
            .status(500)
            .json(
              responce.error ||
                'Something went wrong while creating the sword data. Try again later.'
            );
        }
      }
    } else {
      res.status(401).json('You must login to run this request.');
    }
  } catch (err) {
    res.status(500).json('Something went wrong while creating the sword data. Try again later.');
  }
};

export const updateSwordData = async (req: any, res: any) => {
  try {
    if (req.oidc.isAuthenticated()) {
      if (!ObjectId.isValid(req.params.id)) {
        res.status(400).json('ID must be alphanumeric, 24 characters long.');
      } else {
        let failMessage = '';
        const sword = {
          name: req.body.name,
          description: req.body.description,
          quality1: {
            recipe: req.body.recipe,
            weight: req.body.weight,
            durability: req.body.durability,
            slash: req.body.slash,
            spirit: req.body.spirit,
            frost: req.body.frost,
            backstab: req.body.backstab,
            stagger: req.body.stagger,
            knockback: req.body.knockback,
            blockForce: req.body.blockForce,
            parryBonus: req.body.parryBonus,
            movement: req.body.movement
          },
          quality2: {
            recipe: req.body.recipe,
            weight: req.body.weight,
            durability: req.body.durability,
            slash: req.body.slash,
            spirit: req.body.spirit,
            frost: req.body.frost,
            backstab: req.body.backstab,
            stagger: req.body.stagger,
            knockback: req.body.knockback,
            blockForce: req.body.blockForce,
            parryBonus: req.body.parryBonus,
            movement: req.body.movement
          },
          quality3: {
            recipe: req.body.recipe,
            weight: req.body.weight,
            durability: req.body.durability,
            slash: req.body.slash,
            spirit: req.body.spirit,
            frost: req.body.frost,
            backstab: req.body.backstab,
            stagger: req.body.stagger,
            knockback: req.body.knockback,
            blockForce: req.body.blockForce,
            parryBonus: req.body.parryBonus,
            movement: req.body.movement
          },
          quality4: {
            recipe: req.body.recipe,
            weight: req.body.weight,
            durability: req.body.durability,
            slash: req.body.slash,
            spirit: req.body.spirit,
            frost: req.body.frost,
            backstab: req.body.backstab,
            stagger: req.body.stagger,
            knockback: req.body.knockback,
            blockForce: req.body.blockForce,
            parryBonus: req.body.parryBonus,
            movement: req.body.movement
          }
        };
        if (typeof sword.name != 'string') {
          failMessage += 'To update Sword data, enter a name string.\n';
        }
        if (typeof sword.description != 'string') {
          failMessage += 'To update Sword data, enter a description string.\n';
        }
        if (typeof sword.quality1.recipe != 'string') {
          failMessage += 'To update Sword data, enter a quality1 recipe string.\n';
        }
        if (typeof sword.quality1.weight != 'number') {
          failMessage += 'To update Sword data, enter a quality1 numeric weight amount.\n';
        }
        if (typeof sword.quality1.durability != 'number') {
          failMessage += 'To update Sword data, enter a quality1 numeric durability amount.\n';
        }
        if (typeof sword.quality1.slash != 'number') {
          failMessage += 'To update Sword data, enter a quality1 numeric slash amount.\n';
        }
        if (typeof sword.quality1.spirit != 'number') {
          failMessage += 'To update Sword data, enter a quality1 numeric spirit amount.\n';
        }
        if (typeof sword.quality1.frost != 'number') {
          failMessage += 'To update Sword data, enter a quality1 numeric frost amount.\n';
        }
        if (typeof sword.quality1.backstab != 'string') {
          failMessage += 'To update Sword data, enter a quality1 backstab string.\n';
        }
        if (typeof sword.quality1.stagger != 'number') {
          failMessage += 'To update Sword data, enter a quality1 numeric stagger amount.\n';
        }
        if (typeof sword.quality1.knockback != 'number') {
          failMessage += 'To update Sword data, enter a quality1 numeric knockback amount.';
        }
        if (typeof sword.quality1.blockForce != 'number') {
          failMessage += 'To update Sword data, enter a quality1 numeric blockForce amount.';
        }
        if (typeof sword.quality1.parryBonus != 'string') {
          failMessage += 'To update Sword data, enter a quality1 parryBonus string.';
        }
        if (typeof sword.quality1.movement != 'string') {
          failMessage += 'To update Sword data, enter a quality1 movement string.';
        }
        if (typeof sword.quality2.recipe != 'string') {
          failMessage += 'To update Sword data, enter a quality2 recipe string.\n';
        }
        if (typeof sword.quality2.weight != 'number') {
          failMessage += 'To update Sword data, enter a quality2 numeric weight amount.\n';
        }
        if (typeof sword.quality2.durability != 'number') {
          failMessage += 'To update Sword data, enter a quality2 numeric durability amount.\n';
        }
        if (typeof sword.quality2.slash != 'number') {
          failMessage += 'To update Sword data, enter a quality2 numeric slash amount.\n';
        }
        if (typeof sword.quality2.spirit != 'number') {
          failMessage += 'To update Sword data, enter a quality2 numeric spirit amount.\n';
        }
        if (typeof sword.quality2.frost != 'number') {
          failMessage += 'To update Sword data, enter a quality2 numeric frost amount.\n';
        }
        if (typeof sword.quality2.backstab != 'string') {
          failMessage += 'To update Sword data, enter a quality2 backstab string.\n';
        }
        if (typeof sword.quality2.stagger != 'number') {
          failMessage += 'To update Sword data, enter a quality2 numeric stagger amount.\n';
        }
        if (typeof sword.quality2.knockback != 'number') {
          failMessage += 'To update Sword data, enter a quality2 numeric knockback amount.';
        }
        if (typeof sword.quality2.blockForce != 'number') {
          failMessage += 'To update Sword data, enter a quality2 numeric blockForce amount.';
        }
        if (typeof sword.quality2.parryBonus != 'string') {
          failMessage += 'To update Sword data, enter a quality2 parryBonus string.';
        }
        if (typeof sword.quality2.movement != 'string') {
          failMessage += 'To update Sword data, enter a quality2 movement string.';
        }
        if (typeof sword.quality3.recipe != 'string') {
          failMessage += 'To update Sword data, enter a quality3 recipe string.\n';
        }
        if (typeof sword.quality3.weight != 'number') {
          failMessage += 'To update Sword data, enter a quality3 numeric weight amount.\n';
        }
        if (typeof sword.quality3.durability != 'number') {
          failMessage += 'To update Sword data, enter a quality3 numeric durability amount.\n';
        }
        if (typeof sword.quality3.slash != 'number') {
          failMessage += 'To update Sword data, enter a quality3 numeric slash amount.\n';
        }
        if (typeof sword.quality3.spirit != 'number') {
          failMessage += 'To update Sword data, enter a quality3 numeric spirit amount.\n';
        }
        if (typeof sword.quality3.frost != 'number') {
          failMessage += 'To update Sword data, enter a quality3 numeric frost amount.\n';
        }
        if (typeof sword.quality3.backstab != 'string') {
          failMessage += 'To update Sword data, enter a quality3 backstab string.\n';
        }
        if (typeof sword.quality3.stagger != 'number') {
          failMessage += 'To update Sword data, enter a quality3 numeric stagger amount.\n';
        }
        if (typeof sword.quality3.knockback != 'number') {
          failMessage += 'To update Sword data, enter a quality3 numeric knockback amount.';
        }
        if (typeof sword.quality3.blockForce != 'number') {
          failMessage += 'To update Sword data, enter a quality3 numeric blockForce amount.';
        }
        if (typeof sword.quality3.parryBonus != 'string') {
          failMessage += 'To update Sword data, enter a quality3 parryBonus string.';
        }
        if (typeof sword.quality3.movement != 'string') {
          failMessage += 'To update Sword data, enter a quality3 movement string.';
        }
        if (typeof sword.quality4.recipe != 'string') {
          failMessage += 'To update Sword data, enter a quality4 recipe string.\n';
        }
        if (typeof sword.quality4.weight != 'number') {
          failMessage += 'To update Sword data, enter a quality4 numeric weight amount.\n';
        }
        if (typeof sword.quality4.durability != 'number') {
          failMessage += 'To update Sword data, enter a quality4 numeric durability amount.\n';
        }
        if (typeof sword.quality4.slash != 'number') {
          failMessage += 'To update Sword data, enter a quality4 numeric slash amount.\n';
        }
        if (typeof sword.quality4.spirit != 'number') {
          failMessage += 'To update Sword data, enter a quality4 numeric spirit amount.\n';
        }
        if (typeof sword.quality4.frost != 'number') {
          failMessage += 'To update Sword data, enter a quality4 numeric frost amount.\n';
        }
        if (typeof sword.quality4.backstab != 'string') {
          failMessage += 'To update Sword data, enter a quality4 backstab string.\n';
        }
        if (typeof sword.quality4.stagger != 'number') {
          failMessage += 'To update Sword data, enter a quality4 numeric stagger amount.\n';
        }
        if (typeof sword.quality4.knockback != 'number') {
          failMessage += 'To update Sword data, enter a quality4 numeric knockback amount.';
        }
        if (typeof sword.quality4.blockForce != 'number') {
          failMessage += 'To update Sword data, enter a quality4 numeric blockForce amount.';
        }
        if (typeof sword.quality4.parryBonus != 'string') {
          failMessage += 'To update Sword data, enter a quality4 parryBonus string.';
        }
        if (typeof sword.quality4.movement != 'string') {
          failMessage += 'To update Sword data, enter a quality4 movement string.';
        }
        if (failMessage != '') {
          res.status(400);
          res.send(failMessage);
        } else {
          const userId = new ObjectId(req.params.id);
          const responce = await getDb()
            .db('valheim')
            .collection('swords')
            .updateOne(
              { _id: userId },
              {
                $set: {
                  name: sword.name,
                  description: sword.description,
                  quality1: {
                    recipe: sword.quality1.recipe,
                    weight: sword.quality1.weight,
                    durability: sword.quality1.durability,
                    slash: sword.quality1.slash,
                    spirit: sword.quality1.spirit,
                    frost: sword.quality1.frost,
                    backstab: sword.quality1.backstab,
                    stagger: sword.quality1.stagger,
                    knockback: sword.quality1.knockback,
                    blockForce: sword.quality1.blockForce,
                    parryBonus: sword.quality1.parryBonus,
                    movement: sword.quality1.movement
                  },
                  quality2: {
                    recipe: sword.quality2.recipe,
                    weight: sword.quality2.weight,
                    durability: sword.quality2.durability,
                    slash: sword.quality2.slash,
                    spirit: sword.quality2.spirit,
                    frost: sword.quality2.frost,
                    backstab: sword.quality2.backstab,
                    stagger: sword.quality2.stagger,
                    knockback: sword.quality2.knockback,
                    blockForce: sword.quality2.blockForce,
                    parryBonus: sword.quality2.parryBonus,
                    movement: sword.quality2.movement
                  },
                  quality3: {
                    recipe: sword.quality3.recipe,
                    weight: sword.quality3.weight,
                    durability: sword.quality3.durability,
                    slash: sword.quality3.slash,
                    spirit: sword.quality3.spirit,
                    frost: sword.quality3.frost,
                    backstab: sword.quality3.backstab,
                    stagger: sword.quality3.stagger,
                    knockback: sword.quality3.knockback,
                    blockForce: sword.quality3.blockForce,
                    parryBonus: sword.quality3.parryBonus,
                    movement: sword.quality3.movement
                  },
                  quality4: {
                    recipe: sword.quality4.recipe,
                    weight: sword.quality4.weight,
                    durability: sword.quality4.durability,
                    slash: sword.quality4.slash,
                    spirit: sword.quality4.spirit,
                    frost: sword.quality4.frost,
                    backstab: sword.quality4.backstab,
                    stagger: sword.quality4.stagger,
                    knockback: sword.quality4.knockback,
                    blockForce: sword.quality4.blockForce,
                    parryBonus: sword.quality4.parryBonus,
                    movement: sword.quality4.movement
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
                  'Something went wrong while updating the sword data. Try again later.'
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

export const deleteSwordData = async (req: any, res: any) => {
  try {
    if (req.oidc.isAuthenticated()) {
      if (!ObjectId.isValid(req.params.id)) {
        res.status(400).json('ID must be alphanumeric, 24 characters long.');
      } else {
        const userId = new ObjectId(req.params.id);
        const responce = await getDb()
          .db('valheim')
          .collection('swords')
          .deleteOne({ _id: userId }, true);
        if (responce.deletedCount > 0) {
          res.status(200).send(`Sword data with ID ${userId} was deleted sucessfully.`);
        } else {
          res
            .status(500)
            .json(
              responce.error ||
                'Something went wrong while deleting the sword data. Try again later.'
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
