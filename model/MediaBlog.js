import Mongoose from 'mongoose';

const Schema = Mongoose.Schema;
const blogSchema = new Schema({
    title : {
        type : String,
        required : true
    },
    description : {
        type : String,
        required : true
    },
    image : {
        type : String,
        required : true
    },
    user : {
        type : String,
        required : true
    }
});
export default Mongoose.model("Media Blog", blogSchema);