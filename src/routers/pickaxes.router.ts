import { Router } from 'express';
import {
  getAllPickaxeData,
  getPickaxeDataById,
  createPickaxeData,
  updatePickaxeData,
  deletePickaxeData,
  getPickaxeDataByParameter
} from '../controllers/pickaxes.controller';
const pickaxesRouter = Router();

// GET all pickaxe data
pickaxesRouter.get('/pickaxes', getAllPickaxeData);

// GET pickaxe data by id
pickaxesRouter.get('/pickaxes/:id', getPickaxeDataById);

// GET pickaxe data by search type and term
pickaxesRouter.get('/pickaxes/:searchType/:searchTerm', getPickaxeDataByParameter);

// POST/Create pickaxe data
pickaxesRouter.post('/pickaxes', createPickaxeData);

// PUT/Update pickaxe data by id
pickaxesRouter.put('/pickaxes/:id', updatePickaxeData);

// DELETE axe data by id
pickaxesRouter.delete('/pickaxes/:id', deletePickaxeData);

export default pickaxesRouter;
