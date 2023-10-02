import { Router } from 'express';
import {
  getAllKnifeData,
  getKnifeDataById,
  createKnifeData,
  updateKnifeData,
  deleteKnifeData,
  getKnifeDataByParameter
} from '../controllers/knifes.controller';
const knifesRouter = Router();

// GET all knife data
knifesRouter.get('/knifes', getAllKnifeData);

// GET knife data by id
knifesRouter.get('/knifes/:id', getKnifeDataById);

// GET knife data by search type and term
knifesRouter.get('/knifes/:searchType/:searchTerm', getKnifeDataByParameter);

// POST/Create knife data
knifesRouter.post('/knifes', createKnifeData);

// PUT/Update knife data by id
knifesRouter.put('/knifes/:id', updateKnifeData);

// DELETE knife data by id
knifesRouter.delete('/knifes/:id', deleteKnifeData);

export default knifesRouter;
