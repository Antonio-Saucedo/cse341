import { Router } from 'express';
import {
  getAllKnifeData,
  getKnifeDataById,
  createKnifeData,
  updateKnifeData,
  deleteKnifeData
} from '../controllers/knifes.controller';
const knifesRouter = Router();

// GET all knife data
knifesRouter.get('/knifes', getAllKnifeData);

// GET knife data by id
knifesRouter.get('/knifes/:id', getKnifeDataById);

// POST/Create knife data
knifesRouter.post('/knifes', createKnifeData);

// PUT/Update knife data by id
knifesRouter.put('/knifes/:id', updateKnifeData);

// DELETE knife data by id
knifesRouter.delete('/knifes/:id', deleteKnifeData);

export default knifesRouter;
