import Express from 'express';
import { getAllUsers, signup } from '../controllers/controller-for-user'; //is it because its a function

const router = Express.Router();
router.get("/", getAllUsers); 
router.post("/signup", signup);
export default router;