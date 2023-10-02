import { Router } from 'express';
import {
  getAllAxeData,
  getAxeDataById,
  createAxeData,
  updateAxeData,
  deleteAxeData,
  getAxeDataByParameter
} from '../controllers/axes.controller';
const axesRouter = Router();

// GET all axe data
axesRouter.get('/axes', getAllAxeData);

// GET axe data by id
axesRouter.get('/axes/:id', getAxeDataById);

// GET axe data by search type and term
axesRouter.get('/axes/:searchType/:searchTerm', getAxeDataByParameter);

// POST/Create axe data
axesRouter.post('/axes', createAxeData);

// PUT/Update axe data by id
axesRouter.put('/axes/:id', updateAxeData);

// DELETE axe data by id
axesRouter.delete('/axes/:id', deleteAxeData);

export default axesRouter;
