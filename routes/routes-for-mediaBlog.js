import Express from 'express';
import { addBlog, getAllBlogs, getById, updateBlog } from '../controllers/controller-for-mediaBlog';

const blogRouter = Express.Router();
blogRouter.get("/", getAllBlogs);
blogRouter.post("/add", addBlog);
blogRouter.put("/update/:id", updateBlog); //used to update for the user
blogRouter.get("/:id", getById);
export default blogRouter;
