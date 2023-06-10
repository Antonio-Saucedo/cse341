import { Router } from 'express';
import {
  getAllFoodData,
  getFoodDataById,
  createFoodData,
  updateFoodData,
  deleteFoodData
} from '../controllers/food.controller';
const foodsRouter = Router();

// GET all food data
foodsRouter.get('/food', getAllFoodData);

// GET food data by id
foodsRouter.get('/food/:id', getFoodDataById);

// POST/Create food data
foodsRouter.post('/food', createFoodData);

// PUT/Update food data by id
foodsRouter.put('/food/:id', updateFoodData);

// DELETE food data by id
foodsRouter.delete('/food/:id', deleteFoodData);

export default foodsRouter;
