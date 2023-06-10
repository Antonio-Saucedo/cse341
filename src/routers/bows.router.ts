import { Router } from "express";
import {
    getAllBowData,
    getBowDataById,
    createBowData,
    updateBowData,
    deleteBowData,
} from "../controllers/bows.controller";
const bowsRouter = Router();

// GET all bow data
bowsRouter.get('/bows', getAllBowData);

// GET bow data by id
bowsRouter.get('/bows/:id', getBowDataById);

// POST/Create bow data
bowsRouter.post('/bows', createBowData);

// PUT/Update bow data by id
bowsRouter.put('/bows/:id', updateBowData);

// DELETE bow data by id
bowsRouter.delete('/bows/:id', deleteBowData);

export default bowsRouter;
