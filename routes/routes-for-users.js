import Express from 'express';
import { getAllUsers, login, signup } from '../controllers/controller-for-user'; //is it because its a function

const router = Express.Router();
router.get("/", getAllUsers); 
router.post("/signup", signup);
router.post("/login", login);
export default router;