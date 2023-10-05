import { getDb } from '../db/connect';
const ObjectId = require('mongodb').ObjectId;

export const getAllAxeData = async (req: any, res: any) => {
  try {
    const result = await getDb().db('valheim').collection('axes').find();
    result.toArray().then((lists: any) => {
      if (!lists[0]) {
        res.status(404).json('Axe information was not found. Try again later.');
      } else {
        res.setHeader('Content-Type', 'application/json');
        res.status(200).json(lists);
      }
    });
  } catch (err) {
    res.status(500).json('Axe information was not found. Try again later.');
  }
};

export const getAxeDataById = async (req: any, res: any) => {
  try {
    if (!ObjectId.isValid(req.params.id)) {
      res.status(400).json('ID must be alphanumeric, 24 characters long.');
    } else {
      const userId = new ObjectId(req.params.id);
      const result = await getDb().db('valheim').collection('axes').find({ _id: userId });
      result.toArray().then((lists: any) => {
        if (!lists[0]) {
          res.status(404).json(`Axe with ID ${userId} was not found.`);
        } else {
          res.setHeader('Content-Type', 'application/json');
          res.status(200).json(lists[0]);
        }
      });
    }
  } catch (err) {
    res.status(500).json('Axe information was not found. Try again later.');
  }
};

export const getAxeDataByParameter = async (req: any, res: any) => {
  try {
    const valid = ['name', 'description', 'recipe'];
    const searchType = req.params.searchType;
    if (valid.includes(searchType)) {
      const searchTerm = req.params.searchTerm;
      if (searchType == 'name') {
        const result = await getDb()
          .db('valheim')
          .collection('axes')
          .find({ name: { $regex: searchTerm, $options: 'i' } });
        result.toArray().then((lists: any) => {
          if (!lists[0]) {
            res
              .status(404)
              .json(`Axe with ${searchType} containing '${searchTerm}' was not found.`);
          } else {
            res.setHeader('Content-Type', 'application/json');
            res.status(200).json(lists);
          }
        });
      } else if (searchType == 'description') {
        const result = await getDb()
          .db('valheim')
          .collection('axes')
          .find({ description: { $regex: searchTerm, $options: 'i' } });
        result.toArray().then((lists: any) => {
          if (!lists[0]) {
            res
              .status(404)
              .json(`Axe with ${searchType} containing '${searchTerm}' was not found.`);
          } else {
            res.setHeader('Content-Type', 'application/json');
            res.status(200).json(lists);
          }
        });
      } else if (searchType == 'recipe') {
        const result = await getDb()
          .db('valheim')
          .collection('axes')
          .find({
            quality: { $elemMatch: { recipe: { $regex: searchTerm, $options: 'i' } } }
          });
        result.toArray().then((lists: any) => {
          if (!lists[0]) {
            res
              .status(404)
              .json(`Axe with ${searchType} containing '${searchTerm}' was not found.`);
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
    res.status(500).json('Axe information was not found. Try again later.');
  }
};

export const createAxeData = async (req: any, res: any) => {
  try {
    if (req.oidc.isAuthenticated()) {
      let failMessage = '';
      const axe = {
        name: req.body.name,
        description: req.body.description,
        quality: req.body.quality
      };
      if (typeof axe.name != 'string') {
        failMessage += 'To create Axe data, enter a name string.\n';
      }
      if (typeof axe.description != 'string') {
        failMessage += 'To create Axe data, enter a description string.\n';
      }
      for (let i = 0; i < axe.quality.length; i++) {
        if (typeof axe.quality[i].quality != 'number') {
          failMessage += `To create Axe data, enter a numeric amount for entered quality item ${axe.quality[i].quality}.\n`;
        }
        if (
          (typeof axe.quality[i].quality == 'number' && axe.quality[i].quality < 1) ||
          axe.quality[i].quality > 4
        ) {
          failMessage += `To create Axe data, enter a numeric amount between 1 and 4 for entered quality item ${axe.quality[i].quality}.\n`;
        }
        if (typeof axe.quality[i].recipe != 'string' || axe.quality[i].recipe == '') {
          failMessage += `To create Axe data, enter a non-null recipe string value for entered quality item ${axe.quality[i].quality}.\n`;
        }
        if (typeof axe.quality[i].weight != 'number') {
          failMessage += `To create Axe data, enter a numeric weight amount for entered quality item ${axe.quality[i].quality}.\n`;
        }
        if (typeof axe.quality[i].durability != 'number') {
          failMessage += `To create Axe data, enter a numeric durability amount for entered quality item ${axe.quality[i].quality}.\n`;
        }
        if (typeof axe.quality[i].slash != 'number') {
          failMessage += `To create Axe data, enter a numeric slash amount for entered quality item ${axe.quality[i].quality}.\n`;
        }
        if (typeof axe.quality[i].spirit != 'number') {
          failMessage += `To create Axe data, enter a numeric spirit amount for entered quality item ${axe.quality[i].quality}.\n`;
        }
        if (typeof axe.quality[i].poison != 'number') {
          failMessage += `To create Axe data, enter a numeric poison amount for entered quality item ${axe.quality[i].quality}.\n`;
        }
        if (typeof axe.quality[i].chop != 'number') {
          failMessage += `To create Axe data, enter a numeric chop amount for entered quality item ${axe.quality[i].quality}.\n`;
        }
        if (typeof axe.quality[i].backstab != 'string') {
          failMessage += `To create Axe data, enter a backstab string for entered quality item ${axe.quality[i].quality}.\n`;
        }
        if (typeof axe.quality[i].stagger != 'number') {
          failMessage += `To create Axe data, enter a numeric stagger amount for entered quality item ${axe.quality[i].quality}.\n`;
        }
        if (typeof axe.quality[i].knockback != 'number') {
          failMessage += `To create Axe data, enter a numeric knockback amount for entered quality item ${axe.quality[i].quality}.\n`;
        }
        if (typeof axe.quality[i].blockForce != 'number') {
          failMessage += `To create Axe data, enter a numeric blockForce amount for entered quality item ${axe.quality[i].quality}.\n`;
        }
        if (typeof axe.quality[i].parryBonus != 'string') {
          failMessage += `To create Axe data, enter a parryBonus string for entered quality item ${axe.quality[i].quality}.\n`;
        }
        if (typeof axe.quality[i].movement != 'string') {
          failMessage += `To create Axe data, enter a movement string for entered quality item ${axe.quality[i].quality}.\n`;
        }
      }
      if (failMessage != '') {
        res.status(400);
        res.send(failMessage);
      } else {
        const response = await getDb().db('valheim').collection('axes').insertOne(axe);
        if (response.acknowledged) {
          res.status(201).json(response);
        } else {
          res
            .status(500)
            .json(
              response.error || 'Something went wrong while creating the axe data. Try again later.'
            );
        }
      }
    } else {
      res.status(401).json('You must login to run this request.');
    }
  } catch (err) {
    res.status(500).json('Something went wrong while creating the axe data. Try again later.');
  }
};

export const updateAxeData = async (req: any, res: any) => {
  try {
    if (req.oidc.isAuthenticated()) {
      if (!ObjectId.isValid(req.params.id)) {
        res.status(400).json('ID must be alphanumeric, 24 characters long.');
      } else {
        let failMessage = '';
        const axe = {
          name: req.body.name,
          description: req.body.description,
          quality1: {
            recipe: req.body.quality1.recipe,
            weight: req.body.quality1.weight,
            durability: req.body.quality1.durability,
            slash: req.body.quality1.slash,
            spirit: req.body.quality1.spirit,
            poison: req.body.quality1.poison,
            chop: req.body.quality1.chop,
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
            slash: req.body.quality2.slash,
            spirit: req.body.quality2.spirit,
            poison: req.body.quality2.poison,
            chop: req.body.quality2.chop,
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
            slash: req.body.quality3.slash,
            spirit: req.body.quality3.spirit,
            poison: req.body.quality3.poison,
            chop: req.body.quality3.chop,
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
            slash: req.body.quality4.slash,
            spirit: req.body.quality4.spirit,
            poison: req.body.quality4.poison,
            chop: req.body.quality4.chop,
            backstab: req.body.quality4.backstab,
            stagger: req.body.quality4.stagger,
            knockback: req.body.quality4.knockback,
            blockForce: req.body.quality4.blockForce,
            parryBonus: req.body.quality4.parryBonus,
            movement: req.body.quality4.movement
          }
        };
        if (typeof axe.name != 'string') {
          failMessage += 'To update Axe data, enter a name string.\n';
        }
        if (typeof axe.description != 'string') {
          failMessage += 'To update Axe data, enter a description string.\n';
        }
        if (typeof axe.quality1.recipe != 'string') {
          failMessage += 'To update Axe data, enter a quality1 recipe string.\n';
        }
        if (typeof axe.quality1.weight != 'number') {
          failMessage += 'To update Axe data, enter a quality1 numeric weight amount.\n';
        }
        if (typeof axe.quality1.durability != 'number') {
          failMessage += 'To update Axe data, enter a quality1 numeric durability amount.\n';
        }
        if (typeof axe.quality1.slash != 'number') {
          failMessage += 'To update Axe data, enter a quality1 numeric slash amount.\n';
        }
        if (typeof axe.quality1.spirit != 'number') {
          failMessage += 'To update Axe data, enter a quality1 numeric spirit amount.\n';
        }
        if (typeof axe.quality1.poison != 'number') {
          failMessage += 'To update Axe data, enter a quality1 numeric poison amount.\n';
        }
        if (typeof axe.quality1.chop != 'number') {
          failMessage += 'To update Axe data, enter a quality1 numeric chop amount.\n';
        }
        if (typeof axe.quality1.backstab != 'string') {
          failMessage += 'To update Axe data, enter a quality1 backstab string.\n';
        }
        if (typeof axe.quality1.stagger != 'number') {
          failMessage += 'To update Axe data, enter a quality1 numeric stagger amount.\n';
        }
        if (typeof axe.quality1.knockback != 'number') {
          failMessage += 'To update Axe data, enter a quality1 numeric knockback amount.\n';
        }
        if (typeof axe.quality1.blockForce != 'number') {
          failMessage += 'To update Axe data, enter a quality1 numeric blockForce amount.\n';
        }
        if (typeof axe.quality1.parryBonus != 'string') {
          failMessage += 'To update Axe data, enter a quality1 parryBonus string.\n';
        }
        if (typeof axe.quality1.movement != 'string') {
          failMessage += 'To update Axe data, enter a quality1 movement string.\n';
        }
        if (typeof axe.quality2.recipe != 'string') {
          failMessage += 'To update Axe data, enter a quality2 recipe string.\n';
        }
        if (typeof axe.quality2.weight != 'number') {
          failMessage += 'To update Axe data, enter a quality2 numeric weight amount.\n';
        }
        if (typeof axe.quality2.durability != 'number') {
          failMessage += 'To update Axe data, enter a quality2 numeric durability amount.\n';
        }
        if (typeof axe.quality2.slash != 'number') {
          failMessage += 'To update Axe data, enter a quality2 numeric slash amount.\n';
        }
        if (typeof axe.quality2.spirit != 'number') {
          failMessage += 'To update Axe data, enter a quality2 numeric spirit amount.\n';
        }
        if (typeof axe.quality2.poison != 'number') {
          failMessage += 'To update Axe data, enter a quality2 numeric poison amount.\n';
        }
        if (typeof axe.quality2.chop != 'number') {
          failMessage += 'To update Axe data, enter a quality2 numeric chop amount.\n';
        }
        if (typeof axe.quality2.backstab != 'string') {
          failMessage += 'To update Axe data, enter a quality2 backstab string.\n';
        }
        if (typeof axe.quality2.stagger != 'number') {
          failMessage += 'To update Axe data, enter a quality2 numeric stagger amount.\n';
        }
        if (typeof axe.quality2.knockback != 'number') {
          failMessage += 'To update Axe data, enter a quality2 numeric knockback amount.\n';
        }
        if (typeof axe.quality2.blockForce != 'number') {
          failMessage += 'To update Axe data, enter a quality2 numeric blockForce amount.\n';
        }
        if (typeof axe.quality2.parryBonus != 'string') {
          failMessage += 'To update Axe data, enter a quality2 parryBonus string.\n';
        }
        if (typeof axe.quality2.movement != 'string') {
          failMessage += 'To update Axe data, enter a quality2 movement string.\n';
        }
        if (typeof axe.quality3.recipe != 'string') {
          failMessage += 'To update Axe data, enter a quality3 recipe string.\n';
        }
        if (typeof axe.quality3.weight != 'number') {
          failMessage += 'To update Axe data, enter a quality3 numeric weight amount.\n';
        }
        if (typeof axe.quality3.durability != 'number') {
          failMessage += 'To update Axe data, enter a quality3 numeric durability amount.\n';
        }
        if (typeof axe.quality3.slash != 'number') {
          failMessage += 'To update Axe data, enter a quality3 numeric slash amount.\n';
        }
        if (typeof axe.quality3.spirit != 'number') {
          failMessage += 'To update Axe data, enter a quality3 numeric spirit amount.\n';
        }
        if (typeof axe.quality3.poison != 'number') {
          failMessage += 'To update Axe data, enter a quality3 numeric poison amount.\n';
        }
        if (typeof axe.quality3.chop != 'number') {
          failMessage += 'To update Axe data, enter a quality3 numeric chop amount.\n';
        }
        if (typeof axe.quality3.backstab != 'string') {
          failMessage += 'To update Axe data, enter a quality3 backstab string.\n';
        }
        if (typeof axe.quality3.stagger != 'number') {
          failMessage += 'To update Axe data, enter a quality3 numeric stagger amount.\n';
        }
        if (typeof axe.quality3.knockback != 'number') {
          failMessage += 'To update Axe data, enter a quality3 numeric knockback amount.\n';
        }
        if (typeof axe.quality3.blockForce != 'number') {
          failMessage += 'To update Axe data, enter a quality3 numeric blockForce amount.\n';
        }
        if (typeof axe.quality3.parryBonus != 'string') {
          failMessage += 'To update Axe data, enter a quality3 parryBonus string.\n';
        }
        if (typeof axe.quality3.movement != 'string') {
          failMessage += 'To update Axe data, enter a quality3 movement string.';
        }
        if (failMessage != '') {
          res.status(400);
          res.send(failMessage);
        } else {
          const userId = new ObjectId(req.params.id);
          const response = await getDb()
            .db('valheim')
            .collection('axes')
            .updateOne(
              { _id: userId },
              {
                $set: {
                  name: axe.name,
                  description: axe.description,
                  quality1: {
                    recipe: axe.quality1.recipe,
                    weight: axe.quality1.weight,
                    durability: axe.quality1.durability,
                    slash: axe.quality1.slash,
                    spirit: axe.quality1.spirit,
                    poison: axe.quality1.poison,
                    chop: axe.quality1.chop,
                    backstab: axe.quality1.backstab,
                    stagger: axe.quality1.stagger,
                    knockback: axe.quality1.knockback,
                    blockForce: axe.quality1.blockForce,
                    parryBonus: axe.quality1.parryBonus,
                    movement: axe.quality1.movement
                  },
                  quality2: {
                    recipe: axe.quality2.recipe,
                    weight: axe.quality2.weight,
                    durability: axe.quality2.durability,
                    slash: axe.quality2.slash,
                    spirit: axe.quality2.spirit,
                    poison: axe.quality2.poison,
                    chop: axe.quality2.chop,
                    backstab: axe.quality2.backstab,
                    stagger: axe.quality2.stagger,
                    knockback: axe.quality2.knockback,
                    blockForce: axe.quality2.blockForce,
                    parryBonus: axe.quality2.parryBonus,
                    movement: axe.quality2.movement
                  },
                  quality3: {
                    recipe: axe.quality3.recipe,
                    weight: axe.quality3.weight,
                    durability: axe.quality3.durability,
                    slash: axe.quality3.slash,
                    spirit: axe.quality3.spirit,
                    poison: axe.quality3.poison,
                    chop: axe.quality3.chop,
                    backstab: axe.quality3.backstab,
                    stagger: axe.quality3.stagger,
                    knockback: axe.quality3.knockback,
                    blockForce: axe.quality3.blockForce,
                    parryBonus: axe.quality3.parryBonus,
                    movement: axe.quality3.movement
                  },
                  quality4: {
                    recipe: axe.quality4.recipe,
                    weight: axe.quality4.weight,
                    durability: axe.quality4.durability,
                    slash: axe.quality4.slash,
                    spirit: axe.quality4.spirit,
                    poison: axe.quality4.poison,
                    chop: axe.quality4.chop,
                    backstab: axe.quality4.backstab,
                    stagger: axe.quality4.stagger,
                    knockback: axe.quality4.knockback,
                    blockForce: axe.quality4.blockForce,
                    parryBonus: axe.quality4.parryBonus,
                    movement: axe.quality4.movement
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
                  'Something went wrong while updating the axe data. Try again later.'
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

export const deleteAxeData = async (req: any, res: any) => {
  try {
    if (req.oidc.isAuthenticated()) {
      if (!ObjectId.isValid(req.params.id)) {
        res.status(400).json('ID must be alphanumeric, 24 characters long.');
      } else {
        const userId = new ObjectId(req.params.id);
        const response = await getDb()
          .db('valheim')
          .collection('axes')
          .deleteOne({ _id: userId }, true);
        if (response.deletedCount > 0) {
          res.status(200).send(`Axe data with ID ${userId} was deleted sucessfully.`);
        } else {
          res
            .status(500)
            .json(
              response.error || 'Something went wrong while deleting the axe data. Try again later.'
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
