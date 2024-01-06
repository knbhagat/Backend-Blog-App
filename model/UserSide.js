import Mongoose from 'mongoose';

const Schema = Mongoose.Schema;
const userSchema = new Schema({
    name: { //field object
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
        minLength: 6
    }
});
let exportSchema = Mongoose.model("User", userSchema);
export default exportSchema; //default makes it not an object?
// will be stored as users in mongoDB