import { Router } from 'express';
import {
  getAllSpearData,
  getSpearDataById,
  createSpearData,
  updateSpearData,
  deleteSpearData,
  getSpearDataByParameter
} from '../controllers/spears.controller';
const spearsRouter = Router();

// GET all spear data
spearsRouter.get('/spears', getAllSpearData);

// GET spear data by id
spearsRouter.get('/spears/:id', getSpearDataById);

// GET spear data by search type and term
spearsRouter.get('/spears/:searchType/:searchTerm', getSpearDataByParameter);

// POST/Create spear data
spearsRouter.post('/spears', createSpearData);

// PUT/Update spear data by id
spearsRouter.put('/spears/:id', updateSpearData);

// DELETE spear data by id
spearsRouter.delete('/spears/:id', deleteSpearData);

export default spearsRouter;
