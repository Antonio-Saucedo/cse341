import { getDb } from '../db/connect';
const ObjectId = require('mongodb').ObjectId;

export const getAllKnifeData = async (req: any, res: any) => {
  try {
    const result = await getDb().db('valheim').collection('knifes').find();
    result.toArray().then((lists: any) => {
      if (!lists[0]) {
        res.status(404).json('Knife information was not found. Try again later.');
      } else {
        res.setHeader('Content-Type', 'application/json');
        res.status(200).json(lists);
      }
    });
  } catch (err) {
    res.status(500).json('Knife information was not found. Try again later.');
  }
};

export const getKnifeDataById = async (req: any, res: any) => {
  try {
    if (!ObjectId.isValid(req.params.id)) {
      res.status(400).json('ID must be alphanumeric, 24 characters long.');
    } else {
      const userId = new ObjectId(req.params.id);
      const result = await getDb().db('valheim').collection('knifes').find({ _id: userId });
      result.toArray().then((lists: any) => {
        if (!lists[0]) {
          res.status(404).json(`Knife with ID ${userId} was not found.`);
        } else {
          res.setHeader('Content-Type', 'application/json');
          res.status(200).json(lists[0]);
        }
      });
    }
  } catch (err) {
    res.status(500).json('Knife information was not found. Try again later.');
  }
};

export const getKnifeDataByParameter = async (req: any, res: any) => {
  try {
    const valid = ['name', 'description', 'recipe'];
    const searchType = req.params.searchType;
    if (valid.includes(searchType)) {
      const searchTerm = req.params.searchTerm;
      if (searchType == 'name') {
        const result = await getDb()
          .db('valheim')
          .collection('knifes')
          .find({ name: { $regex: searchTerm, $options: 'i' } });
        result.toArray().then((lists: any) => {
          if (!lists[0]) {
            res
              .status(404)
              .json(`Knife with ${searchType} containing '${searchTerm}' was not found.`);
          } else {
            res.setHeader('Content-Type', 'application/json');
            res.status(200).json(lists);
          }
        });
      } else if (searchType == 'description') {
        const result = await getDb()
          .db('valheim')
          .collection('knifes')
          .find({ description: { $regex: searchTerm, $options: 'i' } });
        result.toArray().then((lists: any) => {
          if (!lists[0]) {
            res
              .status(404)
              .json(`Knife with ${searchType} containing '${searchTerm}' was not found.`);
          } else {
            res.setHeader('Content-Type', 'application/json');
            res.status(200).json(lists);
          }
        });
      } else if (searchType == 'recipe') {
        const result = await getDb()
          .db('valheim')
          .collection('knifes')
          .find({ recipe: { $regex: searchTerm, $options: 'i' } });
        result.toArray().then((lists: any) => {
          if (!lists[0]) {
            res
              .status(404)
              .json(`Knife with ${searchType} containing '${searchTerm}' was not found.`);
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
    res.status(500).json('Knife information was not found. Try again later.');
  }
};

export const createKnifeData = async (req: any, res: any) => {
  try {
    if (req.oidc.isAuthenticated()) {
      let failMessage = '';
      const knife = {
        name: req.body.name,
        description: req.body.description,
        quality1: {
          recipe: req.body.quality1.recipe,
          weight: req.body.quality1.weight,
          durability: req.body.quality1.durability,
          pierce: req.body.quality1.pierce,
          slash: req.body.quality1.slash,
          spirit: req.body.quality1.spirit,
          backstab: req.body.quality1.backstab,
          stagger: req.body.quality1.stagger,
          knockback: req.body.quality1.knockback,
          blockForce: req.body.quality1.blockForce,
          parryBonus: req.body.quality1.parryBonus
        },
        quality2: {
          recipe: req.body.quality2.recipe,
          weight: req.body.quality2.weight,
          durability: req.body.quality2.durability,
          pierce: req.body.quality2.pierce,
          slash: req.body.quality2.slash,
          spirit: req.body.quality2.spirit,
          backstab: req.body.quality2.backstab,
          stagger: req.body.quality2.stagger,
          knockback: req.body.quality2.knockback,
          blockForce: req.body.quality2.blockForce,
          parryBonus: req.body.quality2.parryBonus
        },
        quality3: {
          recipe: req.body.quality3.recipe,
          weight: req.body.quality3.weight,
          durability: req.body.quality3.durability,
          pierce: req.body.quality3.pierce,
          slash: req.body.quality3.slash,
          spirit: req.body.quality3.spirit,
          backstab: req.body.quality3.backstab,
          stagger: req.body.quality3.stagger,
          knockback: req.body.quality3.knockback,
          blockForce: req.body.quality3.blockForce,
          parryBonus: req.body.quality3.parryBonus
        },
        quality4: {
          recipe: req.body.quality4.recipe,
          weight: req.body.quality4.weight,
          durability: req.body.quality4.durability,
          pierce: req.body.quality4.pierce,
          slash: req.body.quality4.slash,
          spirit: req.body.quality4.spirit,
          backstab: req.body.quality4.backstab,
          stagger: req.body.quality4.stagger,
          knockback: req.body.quality4.knockback,
          blockForce: req.body.quality4.blockForce,
          parryBonus: req.body.quality4.parryBonus
        }
      };
      if (typeof knife.name != 'string') {
        failMessage += 'To create Knife data, enter a name string.\n';
      }
      if (typeof knife.description != 'string') {
        failMessage += 'To create Knife data, enter a description string.\n';
      }
      if (typeof knife.quality1.recipe != 'string') {
        failMessage += 'To create Knife data, enter a quality1 recipe string.\n';
      }
      if (typeof knife.quality1.weight != 'number') {
        failMessage += 'To create Knife data, enter a quality1 numeric weight amount.\n';
      }
      if (typeof knife.quality1.durability != 'number') {
        failMessage += 'To create Knife data, enter a quality1 numeric durability amount.\n';
      }
      if (typeof knife.quality1.pierce != 'number') {
        failMessage += 'To create Knife data, enter a quality1 numeric pierce amount.\n';
      }
      if (typeof knife.quality1.slash != 'number') {
        failMessage += 'To create Knife data, enter a quality1 numeric slash amount.\n';
      }
      if (typeof knife.quality1.spirit != 'number') {
        failMessage += 'To create Knife data, enter a quality1 numeric spirit amount.\n';
      }
      if (typeof knife.quality1.backstab != 'string') {
        failMessage += 'To create Knife data, enter a quality1 backstab string.\n';
      }
      if (typeof knife.quality1.stagger != 'number') {
        failMessage += 'To create Knife data, enter a quality1 numeric stagger amount.\n';
      }
      if (typeof knife.quality1.knockback != 'number') {
        failMessage += 'To create Knife data, enter a quality1 numeric knockback amount.\n';
      }
      if (typeof knife.quality1.blockForce != 'number') {
        failMessage += 'To create Knife data, enter a quality1 numeric blockForce amount.\n';
      }
      if (typeof knife.quality1.parryBonus != 'string') {
        failMessage += 'To create Knife data, enter a quality1 parryBonus string.\n';
      }
      if (typeof knife.quality2.recipe != 'string') {
        failMessage += 'To create Knife data, enter a quality2 recipe string.\n';
      }
      if (typeof knife.quality2.weight != 'number') {
        failMessage += 'To create Knife data, enter a quality2 numeric weight amount.\n';
      }
      if (typeof knife.quality2.durability != 'number') {
        failMessage += 'To create Knife data, enter a quality2 numeric durability amount.\n';
      }
      if (typeof knife.quality2.pierce != 'number') {
        failMessage += 'To create Knife data, enter a quality2 numeric pierce amount.\n';
      }
      if (typeof knife.quality2.slash != 'number') {
        failMessage += 'To create Knife data, enter a quality2 numeric slash amount.\n';
      }
      if (typeof knife.quality2.spirit != 'number') {
        failMessage += 'To create Knife data, enter a quality2 numeric spirit amount.\n';
      }
      if (typeof knife.quality2.backstab != 'string') {
        failMessage += 'To create Knife data, enter a quality2 backstab string.\n';
      }
      if (typeof knife.quality2.stagger != 'number') {
        failMessage += 'To create Knife data, enter a quality2 numeric stagger amount.\n';
      }
      if (typeof knife.quality2.knockback != 'number') {
        failMessage += 'To create Knife data, enter a quality2 numeric knockback amount.\n';
      }
      if (typeof knife.quality2.blockForce != 'number') {
        failMessage += 'To create Knife data, enter a quality2 numeric blockForce amount.\n';
      }
      if (typeof knife.quality2.parryBonus != 'string') {
        failMessage += 'To create Knife data, enter a quality2 parryBonus string.\n';
      }
      if (typeof knife.quality3.recipe != 'string') {
        failMessage += 'To create Knife data, enter a quality3 recipe string.\n';
      }
      if (typeof knife.quality3.weight != 'number') {
        failMessage += 'To create Knife data, enter a quality3 numeric weight amount.\n';
      }
      if (typeof knife.quality3.durability != 'number') {
        failMessage += 'To create Knife data, enter a quality3 numeric durability amount.\n';
      }
      if (typeof knife.quality3.pierce != 'number') {
        failMessage += 'To create Knife data, enter a quality3 numeric pierce amount.\n';
      }
      if (typeof knife.quality3.slash != 'number') {
        failMessage += 'To create Knife data, enter a quality3 numeric slash amount.\n';
      }
      if (typeof knife.quality3.spirit != 'number') {
        failMessage += 'To create Knife data, enter a quality3 numeric spirit amount.\n';
      }
      if (typeof knife.quality3.backstab != 'string') {
        failMessage += 'To create Knife data, enter a quality3 backstab string.\n';
      }
      if (typeof knife.quality3.stagger != 'number') {
        failMessage += 'To create Knife data, enter a quality3 numeric stagger amount.\n';
      }
      if (typeof knife.quality3.knockback != 'number') {
        failMessage += 'To create Knife data, enter a quality3 numeric knockback amount.\n';
      }
      if (typeof knife.quality3.blockForce != 'number') {
        failMessage += 'To create Knife data, enter a quality3 numeric blockForce amount.\n';
      }
      if (typeof knife.quality3.parryBonus != 'string') {
        failMessage += 'To create Knife data, enter a quality3 parryBonus string.';
      }
      if (failMessage != '') {
        res.status(400);
        res.send(failMessage);
      } else {
        const responce = await getDb().db('valheim').collection('knifes').insertOne(knife);
        if (responce.acknowledged) {
          res.status(201).json(responce);
        } else {
          res
            .status(500)
            .json(
              responce.error ||
                'Something went wrong while creating the knife data. Try again later.'
            );
        }
      }
    } else {
      res.status(401).json('You must login to run this request.');
    }
  } catch (err) {
    res.status(500).json('Something went wrong while creating the knife data. Try again later.');
  }
};

export const updateKnifeData = async (req: any, res: any) => {
  try {
    if (req.oidc.isAuthenticated()) {
      if (!ObjectId.isValid(req.params.id)) {
        res.status(400).json('ID must be alphanumeric, 24 characters long.');
      } else {
        let failMessage = '';
        const knife = {
          name: req.body.name,
          description: req.body.description,
          quality1: {
            recipe: req.body.quality1.recipe,
            weight: req.body.quality1.weight,
            durability: req.body.quality1.durability,
            pierce: req.body.quality1.pierce,
            slash: req.body.quality1.slash,
            spirit: req.body.quality1.spirit,
            backstab: req.body.quality1.backstab,
            stagger: req.body.quality1.stagger,
            knockback: req.body.quality1.knockback,
            blockForce: req.body.quality1.blockForce,
            parryBonus: req.body.quality1.parryBonus
          },
          quality2: {
            recipe: req.body.quality2.recipe,
            weight: req.body.quality2.weight,
            durability: req.body.quality2.durability,
            pierce: req.body.quality2.pierce,
            slash: req.body.quality2.slash,
            spirit: req.body.quality2.spirit,
            backstab: req.body.quality2.backstab,
            stagger: req.body.quality2.stagger,
            knockback: req.body.quality2.knockback,
            blockForce: req.body.quality2.blockForce,
            parryBonus: req.body.quality2.parryBonus
          },
          quality3: {
            recipe: req.body.quality3.recipe,
            weight: req.body.quality3.weight,
            durability: req.body.quality3.durability,
            pierce: req.body.quality3.pierce,
            slash: req.body.quality3.slash,
            spirit: req.body.quality3.spirit,
            backstab: req.body.quality3.backstab,
            stagger: req.body.quality3.stagger,
            knockback: req.body.quality3.knockback,
            blockForce: req.body.quality3.blockForce,
            parryBonus: req.body.quality3.parryBonus
          },
          quality4: {
            recipe: req.body.quality4.recipe,
            weight: req.body.quality4.weight,
            durability: req.body.quality4.durability,
            pierce: req.body.quality4.pierce,
            slash: req.body.quality4.slash,
            spirit: req.body.quality4.spirit,
            backstab: req.body.quality4.backstab,
            stagger: req.body.quality4.stagger,
            knockback: req.body.quality4.knockback,
            blockForce: req.body.quality4.blockForce,
            parryBonus: req.body.quality4.parryBonus
          }
        };
        if (typeof knife.name != 'string') {
          failMessage += 'To update Knife data, enter a name string.\n';
        }
        if (typeof knife.description != 'string') {
          failMessage += 'To update Knife data, enter a description string.\n';
        }
        if (typeof knife.quality1.recipe != 'string') {
          failMessage += 'To update Knife data, enter a quality1 recipe string.\n';
        }
        if (typeof knife.quality1.weight != 'number') {
          failMessage += 'To update Knife data, enter a quality1 numeric weight amount.\n';
        }
        if (typeof knife.quality1.durability != 'number') {
          failMessage += 'To update Knife data, enter a quality1 numeric durability amount.\n';
        }
        if (typeof knife.quality1.pierce != 'number') {
          failMessage += 'To update Knife data, enter a quality1 numeric pierce amount.\n';
        }
        if (typeof knife.quality1.slash != 'number') {
          failMessage += 'To update Knife data, enter a quality1 numeric slash amount.\n';
        }
        if (typeof knife.quality1.spirit != 'number') {
          failMessage += 'To update Knife data, enter a quality1 numeric spirit amount.\n';
        }
        if (typeof knife.quality1.backstab != 'string') {
          failMessage += 'To update Knife data, enter a quality1 backstab string.\n';
        }
        if (typeof knife.quality1.stagger != 'number') {
          failMessage += 'To update Knife data, enter a quality1 numeric stagger amount.\n';
        }
        if (typeof knife.quality1.knockback != 'number') {
          failMessage += 'To update Knife data, enter a quality1 numeric knockback amount.\n';
        }
        if (typeof knife.quality1.blockForce != 'number') {
          failMessage += 'To update Knife data, enter a quality1 numeric blockForce amount.\n';
        }
        if (typeof knife.quality1.parryBonus != 'string') {
          failMessage += 'To update Knife data, enter a quality1 parryBonus string.\n';
        }
        if (typeof knife.quality2.recipe != 'string') {
          failMessage += 'To update Knife data, enter a quality2 recipe string.\n';
        }
        if (typeof knife.quality2.weight != 'number') {
          failMessage += 'To update Knife data, enter a quality2 numeric weight amount.\n';
        }
        if (typeof knife.quality2.durability != 'number') {
          failMessage += 'To update Knife data, enter a quality2 numeric durability amount.\n';
        }
        if (typeof knife.quality2.pierce != 'number') {
          failMessage += 'To update Knife data, enter a quality2 numeric pierce amount.\n';
        }
        if (typeof knife.quality2.slash != 'number') {
          failMessage += 'To update Knife data, enter a quality2 numeric slash amount.\n';
        }
        if (typeof knife.quality2.spirit != 'number') {
          failMessage += 'To update Knife data, enter a quality2 numeric spirit amount.\n';
        }
        if (typeof knife.quality2.backstab != 'string') {
          failMessage += 'To update Knife data, enter a quality2 backstab string.\n';
        }
        if (typeof knife.quality2.stagger != 'number') {
          failMessage += 'To update Knife data, enter a quality2 numeric stagger amount.\n';
        }
        if (typeof knife.quality2.knockback != 'number') {
          failMessage += 'To update Knife data, enter a quality2 numeric knockback amount.\n';
        }
        if (typeof knife.quality2.blockForce != 'number') {
          failMessage += 'To update Knife data, enter a quality2 numeric blockForce amount.\n';
        }
        if (typeof knife.quality2.parryBonus != 'string') {
          failMessage += 'To update Knife data, enter a quality2 parryBonus string.\n';
        }
        if (typeof knife.quality3.recipe != 'string') {
          failMessage += 'To update Knife data, enter a quality3 recipe string.\n';
        }
        if (typeof knife.quality3.weight != 'number') {
          failMessage += 'To update Knife data, enter a quality3 numeric weight amount.\n';
        }
        if (typeof knife.quality3.durability != 'number') {
          failMessage += 'To update Knife data, enter a quality3 numeric durability amount.\n';
        }
        if (typeof knife.quality3.pierce != 'number') {
          failMessage += 'To update Knife data, enter a quality3 numeric pierce amount.\n';
        }
        if (typeof knife.quality3.slash != 'number') {
          failMessage += 'To update Knife data, enter a quality3 numeric slash amount.\n';
        }
        if (typeof knife.quality3.spirit != 'number') {
          failMessage += 'To update Knife data, enter a quality3 numeric spirit amount.\n';
        }
        if (typeof knife.quality3.backstab != 'string') {
          failMessage += 'To update Knife data, enter a quality3 backstab string.\n';
        }
        if (typeof knife.quality3.stagger != 'number') {
          failMessage += 'To update Knife data, enter a quality3 numeric stagger amount.\n';
        }
        if (typeof knife.quality3.knockback != 'number') {
          failMessage += 'To update Knife data, enter a quality3 numeric knockback amount.\n';
        }
        if (typeof knife.quality3.blockForce != 'number') {
          failMessage += 'To update Knife data, enter a quality3 numeric blockForce amount.\n';
        }
        if (typeof knife.quality3.parryBonus != 'string') {
          failMessage += 'To update Knife data, enter a quality3 parryBonus string.';
        }
        if (failMessage != '') {
          res.status(400);
          res.send(failMessage);
        } else {
          const userId = new ObjectId(req.params.id);
          const responce = await getDb()
            .db('valheim')
            .collection('knifes')
            .updateOne(
              { _id: userId },
              {
                $set: {
                  name: knife.name,
                  description: knife.description,
                  quality1: {
                    recipe: knife.quality1.recipe,
                    weight: knife.quality1.weight,
                    durability: knife.quality1.durability,
                    pierce: knife.quality1.pierce,
                    slash: knife.quality1.slash,
                    spirit: knife.quality1.spirit,
                    backstab: knife.quality1.backstab,
                    stagger: knife.quality1.stagger,
                    knockback: knife.quality1.knockback,
                    blockForce: knife.quality1.blockForce,
                    parryBonus: knife.quality1.parryBonus
                  },
                  quality2: {
                    recipe: knife.quality2.recipe,
                    weight: knife.quality2.weight,
                    durability: knife.quality2.durability,
                    pierce: knife.quality2.pierce,
                    slash: knife.quality2.slash,
                    spirit: knife.quality2.spirit,
                    backstab: knife.quality2.backstab,
                    stagger: knife.quality2.stagger,
                    knockback: knife.quality2.knockback,
                    blockForce: knife.quality2.blockForce,
                    parryBonus: knife.quality2.parryBonus
                  },
                  quality3: {
                    recipe: knife.quality3.recipe,
                    weight: knife.quality3.weight,
                    durability: knife.quality3.durability,
                    pierce: knife.quality3.pierce,
                    slash: knife.quality3.slash,
                    spirit: knife.quality3.spirit,
                    backstab: knife.quality3.backstab,
                    stagger: knife.quality3.stagger,
                    knockback: knife.quality3.knockback,
                    blockForce: knife.quality3.blockForce,
                    parryBonus: knife.quality3.parryBonus
                  },
                  quality4: {
                    recipe: knife.quality4.recipe,
                    weight: knife.quality4.weight,
                    durability: knife.quality4.durability,
                    pierce: knife.quality4.pierce,
                    slash: knife.quality4.slash,
                    spirit: knife.quality4.spirit,
                    backstab: knife.quality4.backstab,
                    stagger: knife.quality4.stagger,
                    knockback: knife.quality4.knockback,
                    blockForce: knife.quality4.blockForce,
                    parryBonus: knife.quality4.parryBonus
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
                  'Something went wrong while updating the knife data. Try again later.'
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

export const deleteKnifeData = async (req: any, res: any) => {
  try {
    if (req.oidc.isAuthenticated()) {
      if (!ObjectId.isValid(req.params.id)) {
        res.status(400).json('ID must be alphanumeric, 24 characters long.');
      } else {
        const userId = new ObjectId(req.params.id);
        const responce = await getDb()
          .db('valheim')
          .collection('knifes')
          .deleteOne({ _id: userId }, true);
        if (responce.deletedCount > 0) {
          res.status(200).send(`Knife data with ID ${userId} was deleted sucessfully.`);
        } else {
          res
            .status(500)
            .json(
              responce.error ||
                'Something went wrong while deleting the knife data. Try again later.'
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
