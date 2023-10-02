import { Router } from 'express';
import {
  getAllPolearmData,
  getPolearmDataById,
  createPolearmData,
  updatePolearmData,
  deletePolearmData,
  getPolearmDataByParameter
} from '../controllers/polearms.controller';
const polearmsRouter = Router();

// GET all polearm data
polearmsRouter.get('/polearms', getAllPolearmData);

// GET polearm data by id
polearmsRouter.get('/polearms/:id', getPolearmDataById);

// GET polearm data by search type and term
polearmsRouter.get('/polearms/:searchType/:searchTerm', getPolearmDataByParameter);

// POST/Create polearm data
polearmsRouter.post('/polearms', createPolearmData);

// PUT/Update polearms data by id
polearmsRouter.put('/polearms/:id', updatePolearmData);

// DELETE polearms data by id
polearmsRouter.delete('/polearms/:id', deletePolearmData);

export default polearmsRouter;
