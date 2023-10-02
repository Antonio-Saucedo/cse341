import { Router } from 'express';
import {
  getAllFistData,
  getFistDataById,
  createFistData,
  updateFistData,
  deleteFistData,
  getFistDataByParameter
} from '../controllers/fists.controller';
const fistsRouter = Router();

// GET all fist data
fistsRouter.get('/fists', getAllFistData);

// GET fist data by id
fistsRouter.get('/fists/:id', getFistDataById);

// GET fist data by search type and term
fistsRouter.get('/fists/:searchType/:searchTerm', getFistDataByParameter);

// POST/Create fist data
fistsRouter.post('/fists', createFistData);

// PUT/Update fist data by id
fistsRouter.put('/fists/:id', updateFistData);

// DELETE fist data by id
fistsRouter.delete('/fists/:id', deleteFistData);

export default fistsRouter;
