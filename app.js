import Express from 'express';
import Mongoose from 'mongoose';
import router from './routes/routes-for-users';
import blogRouter from './routes/routes-for-mediaBlog';

const app = Express();
app.use(Express.json());
app.use("/api/user", router);
app.use("/api/media-blog", blogRouter);
Mongoose.connect('mongodb+srv://knbhagat:QcKb7UwsF1VRzilI@cluster0.laxhgma.mongodb.net/?retryWrites=true&w=majority')
    .then(() => app.listen(8000))
    .then(() => console.log("Connected To DataBase and Listening to LocalHost @8000"))
    .catch((err) => console.log("Error had been caught " + err));
