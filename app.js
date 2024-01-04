import Express from 'express';
import Mongoose from 'mongoose';
import router from './routes/routes-for-users';

const app = Express();
app.use("/api/user", router); //http://localhost:8000/api/user/logon
Mongoose.connect('mongodb+srv://knbhagat:QcKb7UwsF1VRzilI@cluster0.laxhgma.mongodb.net/?retryWrites=true&w=majority')
    .then(() => app.listen(8000))
    .then(() => console.log("Connected To DataBase and Listening to LocalHost @8000"))
    .catch((err) => console.log("Error had been caught " + err));
