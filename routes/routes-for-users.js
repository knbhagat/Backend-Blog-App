import Express from 'express';
import { getAllUsers } from '../controllers/controller-for-user';

const router = Express.Router();
router.get("/", getAllUsers);
export default router;