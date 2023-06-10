import { Router } from 'express';
import {
  getAllShieldData,
  getShieldDataById,
  createShieldData,
  updateShieldData,
  deleteShieldData
} from '../controllers/shields.controller';
const shieldsRouter = Router();

// GET all shield data
shieldsRouter.get('/shields', getAllShieldData);

// GET shield data by id
shieldsRouter.get('/shields/:id', getShieldDataById);

// POST/Create shield data
shieldsRouter.post('/shields', createShieldData);

// PUT/Update shield data by id
shieldsRouter.put('/shields/:id', updateShieldData);

// DELETE axe data by id
shieldsRouter.delete('/shields/:id', deleteShieldData);

export default shieldsRouter;
