import { Router } from 'express';
import {
  getAllPickaxeData,
  getPickaxeDataById,
  createPickaxeData,
  updatePickaxeData,
  deletePickaxeData
} from '../controllers/pickaxes.controller';
const pickaxesRouter = Router();

// GET all pickaxe data
pickaxesRouter.get('/pickaxes', getAllPickaxeData);

// GET pickaxe data by id
pickaxesRouter.get('/pickaxes/:id', getPickaxeDataById);

// POST/Create pickaxe data
pickaxesRouter.post('/pickaxes', createPickaxeData);

// PUT/Update pickaxe data by id
pickaxesRouter.put('/pickaxes/:id', updatePickaxeData);

// DELETE axe data by id
pickaxesRouter.delete('/pickaxes/:id', deletePickaxeData);

export default pickaxesRouter;
