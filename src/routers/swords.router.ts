import { Router } from 'express';
import {
  getAllSwordData,
  getSwordDataById,
  createSwordData,
  updateSwordData,
  deleteSwordData,
  getSwordDataByParameter
} from '../controllers/swords.controllers';
const swordsRouter = Router();

// GET all sword data
swordsRouter.get('/swords', getAllSwordData);

// GET all sword data
swordsRouter.get('/swords/:id', getSwordDataById);

// GET sword data by search type and term
swordsRouter.get('/swords/:searchType/:searchTerm', getSwordDataByParameter);

// POST/Create sword data
swordsRouter.post('/swords', createSwordData);

// PUT/Update sword data by id
swordsRouter.put('/swords/:id', updateSwordData);

// DELETE sword data by id
swordsRouter.delete('/swords/:id', deleteSwordData);

export default swordsRouter;
