import { Router } from 'express';
import {
  getAllArrowData,
  getArrowDataById,
  createArrowData,
  updateArrowData,
  deleteArrowData
} from '../controllers/arrows.controller';
const arrowsRouter = Router();

// GET all arrow data
arrowsRouter.get('/arrows', getAllArrowData);

// GET arrow data by id
arrowsRouter.get('/arrows/:id', getArrowDataById);

// POST/Create arrow data
arrowsRouter.post('/arrows', createArrowData);

// PUT/Update arrow data by id
arrowsRouter.put('/arrows/:id', updateArrowData);

// DELETE arrow data by id
arrowsRouter.delete('/arrows/:id', deleteArrowData);

export default arrowsRouter;
