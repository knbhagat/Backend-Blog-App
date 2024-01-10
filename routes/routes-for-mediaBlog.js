import Express from 'express';
import { addBlog, deleteById, getAllBlogs, getById, getUser, updateBlog } from '../controllers/controller-for-mediaBlog';

const blogRouter = Express.Router();
blogRouter.get("/", getAllBlogs);
blogRouter.post("/add", addBlog);
blogRouter.put("/update/:id", updateBlog); //used to update for the user
blogRouter.get("/:id", getById);
blogRouter.delete("/:id", deleteById);
blogRouter.get("/user/:id", getUser);
export default blogRouter;
