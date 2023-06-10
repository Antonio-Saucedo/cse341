import { Router } from 'express';
import {
  getAllClubData,
  getClubDataById,
  createClubData,
  updateClubData,
  deleteClubData
} from '../controllers/clubs.controller';
const clubsRouter = Router();

// GET all club data
clubsRouter.get('/clubs', getAllClubData);

// GET club data by id
clubsRouter.get('/clubs/:id', getClubDataById);

// POST/Create club data
clubsRouter.post('/clubs', createClubData);

// PUT/Update club data by id
clubsRouter.put('/clubs/:id', updateClubData);

// DELETE axe club by id
clubsRouter.delete('/clubs/:id', deleteClubData);

export default clubsRouter;
