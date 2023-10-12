import { getDb } from '../db/connect';
const ObjectId = require('mongodb').ObjectId;

export const getAllClubData = async (req: any, res: any) => {
  try {
    const result = await getDb().db('valheim').collection('clubs').find();
    result.toArray().then((lists: any) => {
      if (!lists[0]) {
        res.status(404).json('Club information was not found. Try again later.');
      } else {
        res.setHeader('Content-Type', 'application/json');
        res.status(200).json(lists);
      }
    });
  } catch (err) {
    res.status(500).json('Club information was not found. Try again later.');
  }
};

export const getClubDataById = async (req: any, res: any) => {
  try {
    if (!ObjectId.isValid(req.params.id)) {
      res.status(400).json('ID must be alphanumeric, 24 characters long.');
    } else {
      const userId = new ObjectId(req.params.id);
      const result = await getDb().db('valheim').collection('clubs').find({ _id: userId });
      result.toArray().then((lists: any) => {
        if (!lists[0]) {
          res.status(404).json(`Club with ID ${userId} was not found.`);
        } else {
          res.setHeader('Content-Type', 'application/json');
          res.status(200).json(lists[0]);
        }
      });
    }
  } catch (err) {
    res.status(500).json('Club information was not found. Try again later.');
  }
};

export const getClubDataByParameter = async (req: any, res: any) => {
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
      const result = await getDb().db('valheim').collection('clubs').find(query);
      result.toArray().then((lists: any) => {
        if (!lists[0]) {
          res.status(404).json(`Club with ${searchType} containing '${searchTerm}' was not found.`);
        } else {
          res.setHeader('Content-Type', 'application/json');
          res.status(200).json(lists);
        }
      });
    } else {
      res.status(400).json('Search types are name, description and recipe.');
    }
  } catch (err) {
    res.status(500).json('Club information was not found. Try again later.');
  }
};

export const createClubData = async (req: any, res: any) => {
  try {
    if (req.oidc.isAuthenticated()) {
      let failMessage = '';
      const club = {
        name: req.body.name,
        description: req.body.description,
        quality1: {
          recipe: req.body.quality1.recipe,
          weight: req.body.quality1.weight,
          durability: req.body.quality1.durability,
          blunt: req.body.quality1.blunt,
          pierce: req.body.quality1.pierce,
          fire: req.body.quality1.fire,
          spirit: req.body.quality1.spirit,
          frost: req.body.quality1.frost,
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
          blunt: req.body.quality2.blunt,
          pierce: req.body.quality2.pierce,
          fire: req.body.quality2.fire,
          spirit: req.body.quality2.spirit,
          frost: req.body.quality2.frost,
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
          blunt: req.body.quality3.blunt,
          pierce: req.body.quality3.pierce,
          fire: req.body.quality3.fire,
          spirit: req.body.quality3.spirit,
          frost: req.body.quality3.frost,
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
          blunt: req.body.quality4.blunt,
          pierce: req.body.quality4.pierce,
          fire: req.body.quality4.fire,
          spirit: req.body.quality4.spirit,
          frost: req.body.quality4.frost,
          backstab: req.body.quality4.backstab,
          stagger: req.body.quality4.stagger,
          knockback: req.body.quality4.knockback,
          blockForce: req.body.quality4.blockForce,
          parryBonus: req.body.quality4.parryBonus,
          movement: req.body.quality4.movement
        }
      };
      if (typeof club.name != 'string') {
        failMessage += 'To create Club data, enter a name string.\n';
      }
      if (typeof club.description != 'string') {
        failMessage += 'To create Club data, enter a description string.\n';
      }
      if (typeof club.quality1.recipe != 'string') {
        failMessage += 'To create Club data, enter a quality1 recipe string.\n';
      }
      if (typeof club.quality1.weight != 'number') {
        failMessage += 'To create Club data, enter a quality1 numeric weight amount.\n';
      }
      if (typeof club.quality1.durability != 'number') {
        failMessage += 'To create Club data, enter a quality1 numeric durability amount.\n';
      }
      if (typeof club.quality1.blunt != 'number') {
        failMessage += 'To create Club data, enter a quality1 numeric blunt amount.\n';
      }
      if (typeof club.quality1.pierce != 'number') {
        failMessage += 'To create Club data, enter a quality1 numeric pierce amount.\n';
      }
      if (typeof club.quality1.fire != 'number') {
        failMessage += 'To create Club data, enter a quality1 numeric fire amount.\n';
      }
      if (typeof club.quality1.spirit != 'number') {
        failMessage += 'To create Club data, enter a quality1 numeric spirit amount.\n';
      }
      if (typeof club.quality1.frost != 'number') {
        failMessage += 'To create Club data, enter a quality1 numeric frost amount.\n';
      }
      if (typeof club.quality1.backstab != 'string') {
        failMessage += 'To create Club data, enter a quality1 backstab string.\n';
      }
      if (typeof club.quality1.stagger != 'number') {
        failMessage += 'To create Club data, enter a quality1 numeric stagger amount.\n';
      }
      if (typeof club.quality1.knockback != 'number') {
        failMessage += 'To create Club data, enter a quality1 numeric knockback amount.\n';
      }
      if (typeof club.quality1.blockForce != 'number') {
        failMessage += 'To create Club data, enter a quality1 numeric blockForce amount.\n';
      }
      if (typeof club.quality1.parryBonus != 'string') {
        failMessage += 'To create Club data, enter a quality1 parryBonus string.\n';
      }
      if (typeof club.quality1.movement != 'string') {
        failMessage += 'To create Club data, enter a quality1 movement string.\n';
      }
      if (typeof club.quality2.recipe != 'string') {
        failMessage += 'To create Club data, enter a quality2 recipe string.\n';
      }
      if (typeof club.quality2.weight != 'number') {
        failMessage += 'To create Club data, enter a quality2 numeric weight amount.\n';
      }
      if (typeof club.quality2.durability != 'number') {
        failMessage += 'To create Club data, enter a quality2 numeric durability amount.\n';
      }
      if (typeof club.quality2.blunt != 'number') {
        failMessage += 'To create Club data, enter a quality2 numeric blunt amount.\n';
      }
      if (typeof club.quality2.pierce != 'number') {
        failMessage += 'To create Club data, enter a quality2 numeric pierce amount.\n';
      }
      if (typeof club.quality2.fire != 'number') {
        failMessage += 'To create Club data, enter a quality2 numeric fire amount.\n';
      }
      if (typeof club.quality2.spirit != 'number') {
        failMessage += 'To create Club data, enter a quality2 numeric spirit amount.\n';
      }
      if (typeof club.quality2.frost != 'number') {
        failMessage += 'To create Club data, enter a quality2 numeric frost amount.\n';
      }
      if (typeof club.quality2.backstab != 'string') {
        failMessage += 'To create Club data, enter a quality2 backstab string.\n';
      }
      if (typeof club.quality2.stagger != 'number') {
        failMessage += 'To create Club data, enter a quality2 numeric stagger amount.\n';
      }
      if (typeof club.quality2.knockback != 'number') {
        failMessage += 'To create Club data, enter a quality2 numeric knockback amount.\n';
      }
      if (typeof club.quality2.blockForce != 'number') {
        failMessage += 'To create Club data, enter a quality2 numeric blockForce amount.\n';
      }
      if (typeof club.quality2.parryBonus != 'string') {
        failMessage += 'To create Club data, enter a quality2 parryBonus string.\n';
      }
      if (typeof club.quality2.movement != 'string') {
        failMessage += 'To create Club data, enter a quality2 movement string.\n';
      }
      if (typeof club.quality3.recipe != 'string') {
        failMessage += 'To create Club data, enter a quality3 recipe string.\n';
      }
      if (typeof club.quality3.weight != 'number') {
        failMessage += 'To create Club data, enter a quality3 numeric weight amount.\n';
      }
      if (typeof club.quality3.durability != 'number') {
        failMessage += 'To create Club data, enter a quality3 numeric durability amount.\n';
      }
      if (typeof club.quality3.blunt != 'number') {
        failMessage += 'To create Club data, enter a quality3 numeric blunt amount.\n';
      }
      if (typeof club.quality3.pierce != 'number') {
        failMessage += 'To create Club data, enter a quality3 numeric pierce amount.\n';
      }
      if (typeof club.quality3.fire != 'number') {
        failMessage += 'To create Club data, enter a quality3 numeric fire amount.\n';
      }
      if (typeof club.quality3.spirit != 'number') {
        failMessage += 'To create Club data, enter a quality3 numeric spirit amount.\n';
      }
      if (typeof club.quality3.frost != 'number') {
        failMessage += 'To create Club data, enter a quality3 numeric frost amount.\n';
      }
      if (typeof club.quality3.backstab != 'string') {
        failMessage += 'To create Club data, enter a quality3 backstab string.\n';
      }
      if (typeof club.quality3.stagger != 'number') {
        failMessage += 'To create Club data, enter a quality3 numeric stagger amount.\n';
      }
      if (typeof club.quality3.knockback != 'number') {
        failMessage += 'To create Club data, enter a quality3 numeric knockback amount.\n';
      }
      if (typeof club.quality3.blockForce != 'number') {
        failMessage += 'To create Club data, enter a quality3 numeric blockForce amount.\n';
      }
      if (typeof club.quality3.parryBonus != 'string') {
        failMessage += 'To create Club data, enter a quality3 parryBonus string.\n';
      }
      if (typeof club.quality3.movement != 'string') {
        failMessage += 'To create Club data, enter a quality3 movement string.';
      }
      if (failMessage != '') {
        res.status(400);
        res.send(failMessage);
      } else {
        const response = await getDb().db('valheim').collection('clubs').insertOne(club);
        if (response.acknowledged) {
          res.status(201).json(response);
        } else {
          res
            .status(500)
            .json(
              response.error ||
                'Something went wrong while creating the club data. Try again later.'
            );
        }
      }
    } else {
      res.status(401).json('You must login to run this request.');
    }
  } catch (err) {
    res.status(500).json('Something went wrong while creating the club data. Try again later.');
  }
};

export const updateClubData = async (req: any, res: any) => {
  try {
    if (req.oidc.isAuthenticated()) {
      if (!ObjectId.isValid(req.params.id)) {
        res.status(400).json('ID must be alphanumeric, 24 characters long.');
      } else {
        let failMessage = '';
        const club = {
          name: req.body.name,
          description: req.body.description,
          quality1: {
            recipe: req.body.quality1.recipe,
            weight: req.body.quality1.weight,
            durability: req.body.quality1.durability,
            blunt: req.body.quality1.blunt,
            pierce: req.body.quality1.pierce,
            fire: req.body.quality1.fire,
            spirit: req.body.quality1.spirit,
            frost: req.body.quality1.frost,
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
            blunt: req.body.quality2.blunt,
            pierce: req.body.quality2.pierce,
            fire: req.body.quality2.fire,
            spirit: req.body.quality2.spirit,
            frost: req.body.quality2.frost,
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
            blunt: req.body.quality3.blunt,
            pierce: req.body.quality3.pierce,
            fire: req.body.quality3.fire,
            spirit: req.body.quality3.spirit,
            frost: req.body.quality3.frost,
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
            blunt: req.body.quality4.blunt,
            pierce: req.body.quality4.pierce,
            fire: req.body.quality4.fire,
            spirit: req.body.quality4.spirit,
            frost: req.body.quality4.frost,
            backstab: req.body.quality4.backstab,
            stagger: req.body.quality4.stagger,
            knockback: req.body.quality4.knockback,
            blockForce: req.body.quality4.blockForce,
            parryBonus: req.body.quality4.parryBonus,
            movement: req.body.quality4.movement
          }
        };
        if (typeof club.name != 'string') {
          failMessage += 'To update Club data, enter a name string.\n';
        }
        if (typeof club.description != 'string') {
          failMessage += 'To update Club data, enter a description string.\n';
        }
        if (typeof club.quality1.recipe != 'string') {
          failMessage += 'To update Club data, enter a quality1 recipe string.\n';
        }
        if (typeof club.quality1.weight != 'number') {
          failMessage += 'To update Club data, enter a quality1 numeric weight amount.\n';
        }
        if (typeof club.quality1.durability != 'number') {
          failMessage += 'To update Club data, enter a quality1 numeric durability amount.\n';
        }
        if (typeof club.quality1.blunt != 'number') {
          failMessage += 'To update Club data, enter a quality1 numeric blunt amount.\n';
        }
        if (typeof club.quality1.pierce != 'number') {
          failMessage += 'To update Club data, enter a quality1 numeric pierce amount.\n';
        }
        if (typeof club.quality1.fire != 'number') {
          failMessage += 'To update Club data, enter a quality1 numeric fire amount.\n';
        }
        if (typeof club.quality1.spirit != 'number') {
          failMessage += 'To update Club data, enter a quality1 numeric spirit amount.\n';
        }
        if (typeof club.quality1.frost != 'number') {
          failMessage += 'To update Club data, enter a quality1 numeric frost amount.\n';
        }
        if (typeof club.quality1.backstab != 'string') {
          failMessage += 'To update Club data, enter a quality1 backstab string.\n';
        }
        if (typeof club.quality1.stagger != 'number') {
          failMessage += 'To update Club data, enter a quality1 numeric stagger amount.\n';
        }
        if (typeof club.quality1.knockback != 'number') {
          failMessage += 'To update Club data, enter a quality1 numeric knockback amount.\n';
        }
        if (typeof club.quality1.blockForce != 'number') {
          failMessage += 'To update Club data, enter a quality1 numeric blockForce amount.\n';
        }
        if (typeof club.quality1.parryBonus != 'string') {
          failMessage += 'To update Club data, enter a quality1 parryBonus string.\n';
        }
        if (typeof club.quality1.movement != 'string') {
          failMessage += 'To update Club data, enter a quality1 movement string.\n';
        }
        if (typeof club.quality2.recipe != 'string') {
          failMessage += 'To update Club data, enter a quality2 recipe string.\n';
        }
        if (typeof club.quality2.weight != 'number') {
          failMessage += 'To update Club data, enter a quality2 numeric weight amount.\n';
        }
        if (typeof club.quality2.durability != 'number') {
          failMessage += 'To update Club data, enter a quality2 numeric durability amount.\n';
        }
        if (typeof club.quality2.blunt != 'number') {
          failMessage += 'To update Club data, enter a quality2 numeric blunt amount.\n';
        }
        if (typeof club.quality2.pierce != 'number') {
          failMessage += 'To update Club data, enter a quality2 numeric pierce amount.\n';
        }
        if (typeof club.quality2.fire != 'number') {
          failMessage += 'To update Club data, enter a quality2 numeric fire amount.\n';
        }
        if (typeof club.quality2.spirit != 'number') {
          failMessage += 'To update Club data, enter a quality2 numeric spirit amount.\n';
        }
        if (typeof club.quality2.frost != 'number') {
          failMessage += 'To update Club data, enter a quality2 numeric frost amount.\n';
        }
        if (typeof club.quality2.backstab != 'string') {
          failMessage += 'To update Club data, enter a quality2 backstab string.\n';
        }
        if (typeof club.quality2.stagger != 'number') {
          failMessage += 'To update Club data, enter a quality2 numeric stagger amount.\n';
        }
        if (typeof club.quality2.knockback != 'number') {
          failMessage += 'To update Club data, enter a quality2 numeric knockback amount.\n';
        }
        if (typeof club.quality2.blockForce != 'number') {
          failMessage += 'To update Club data, enter a quality2 numeric blockForce amount.\n';
        }
        if (typeof club.quality2.parryBonus != 'string') {
          failMessage += 'To update Club data, enter a quality2 parryBonus string.\n';
        }
        if (typeof club.quality2.movement != 'string') {
          failMessage += 'To update Club data, enter a quality2 movement string.\n';
        }
        if (typeof club.quality3.recipe != 'string') {
          failMessage += 'To update Club data, enter a quality3 recipe string.\n';
        }
        if (typeof club.quality3.weight != 'number') {
          failMessage += 'To update Club data, enter a quality3 numeric weight amount.\n';
        }
        if (typeof club.quality3.durability != 'number') {
          failMessage += 'To update Club data, enter a quality3 numeric durability amount.\n';
        }
        if (typeof club.quality3.blunt != 'number') {
          failMessage += 'To update Club data, enter a quality3 numeric blunt amount.\n';
        }
        if (typeof club.quality3.pierce != 'number') {
          failMessage += 'To update Club data, enter a quality3 numeric pierce amount.\n';
        }
        if (typeof club.quality3.fire != 'number') {
          failMessage += 'To update Club data, enter a quality3 numeric fire amount.\n';
        }
        if (typeof club.quality3.spirit != 'number') {
          failMessage += 'To update Club data, enter a quality3 numeric spirit amount.\n';
        }
        if (typeof club.quality3.frost != 'number') {
          failMessage += 'To update Club data, enter a quality3 numeric frost amount.\n';
        }
        if (typeof club.quality3.backstab != 'string') {
          failMessage += 'To update Club data, enter a quality3 backstab string.\n';
        }
        if (typeof club.quality3.stagger != 'number') {
          failMessage += 'To update Club data, enter a quality3 numeric stagger amount.\n';
        }
        if (typeof club.quality3.knockback != 'number') {
          failMessage += 'To update Club data, enter a quality3 numeric knockback amount.\n';
        }
        if (typeof club.quality3.blockForce != 'number') {
          failMessage += 'To update Club data, enter a quality3 numeric blockForce amount.\n';
        }
        if (typeof club.quality3.parryBonus != 'string') {
          failMessage += 'To update Club data, enter a quality3 parryBonus string.\n';
        }
        if (typeof club.quality3.movement != 'string') {
          failMessage += 'To update Club data, enter a quality3 movement string.';
        }
        if (failMessage != '') {
          res.status(400);
          res.send(failMessage);
        } else {
          const userId = new ObjectId(req.params.id);
          const response = await getDb()
            .db('valheim')
            .collection('clubs')
            .updateOne(
              { _id: userId },
              {
                $set: {
                  name: club.name,
                  description: club.description,
                  quality1: {
                    recipe: club.quality1.recipe,
                    weight: club.quality1.weight,
                    durability: club.quality1.durability,
                    blunt: club.quality1.blunt,
                    pierce: club.quality1.pierce,
                    fire: club.quality1.fire,
                    spirit: club.quality1.spirit,
                    frost: club.quality1.frost,
                    backstab: club.quality1.backstab,
                    stagger: club.quality1.stagger,
                    knockback: club.quality1.knockback,
                    blockForce: club.quality1.blockForce,
                    parryBonus: club.quality1.parryBonus,
                    movement: club.quality1.movement
                  },
                  quality2: {
                    recipe: club.quality2.recipe,
                    weight: club.quality2.weight,
                    durability: club.quality2.durability,
                    blunt: club.quality2.blunt,
                    pierce: club.quality2.pierce,
                    fire: club.quality2.fire,
                    spirit: club.quality2.spirit,
                    frost: club.quality2.frost,
                    backstab: club.quality2.backstab,
                    stagger: club.quality2.stagger,
                    knockback: club.quality2.knockback,
                    blockForce: club.quality2.blockForce,
                    parryBonus: club.quality2.parryBonus,
                    movement: club.quality2.movement
                  },
                  quality3: {
                    recipe: club.quality3.recipe,
                    weight: club.quality3.weight,
                    durability: club.quality3.durability,
                    blunt: club.quality3.blunt,
                    pierce: club.quality3.pierce,
                    fire: club.quality3.fire,
                    spirit: club.quality3.spirit,
                    frost: club.quality3.frost,
                    backstab: club.quality3.backstab,
                    stagger: club.quality3.stagger,
                    knockback: club.quality3.knockback,
                    blockForce: club.quality3.blockForce,
                    parryBonus: club.quality3.parryBonus,
                    movement: club.quality3.movement
                  },
                  quality4: {
                    recipe: club.quality4.recipe,
                    weight: club.quality4.weight,
                    durability: club.quality4.durability,
                    blunt: club.quality4.blunt,
                    pierce: club.quality4.pierce,
                    fire: club.quality4.fire,
                    spirit: club.quality4.spirit,
                    frost: club.quality4.frost,
                    backstab: club.quality4.backstab,
                    stagger: club.quality4.stagger,
                    knockback: club.quality4.knockback,
                    blockForce: club.quality4.blockForce,
                    parryBonus: club.quality4.parryBonus,
                    movement: club.quality4.movement
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
                  'Something went wrong while updating the club data. Try again later.'
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

export const deleteClubData = async (req: any, res: any) => {
  try {
    if (req.oidc.isAuthenticated()) {
      if (!ObjectId.isValid(req.params.id)) {
        res.status(400).json('ID must be alphanumeric, 24 characters long.');
      } else {
        const userId = new ObjectId(req.params.id);
        const response = await getDb()
          .db('valheim')
          .collection('clubs')
          .deleteOne({ _id: userId }, true);
        if (response.deletedCount > 0) {
          res.status(200).send(`Club data with ID ${userId} was deleted sucessfully.`);
        } else {
          res
            .status(500)
            .json(
              response.error ||
                'Something went wrong while deleting the club data. Try again later.'
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
