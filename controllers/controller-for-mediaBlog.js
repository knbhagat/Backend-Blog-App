import Mongoose  from 'mongoose';
import MediaBlog from '../model/MediaBlog';
import User from '../model/UserSide';

export const getAllBlogs = async(req,res,next) => {
    let blogs;
    try {
        blogs = await MediaBlog.find();
    } catch (err) {
        console.log(err);
    }
    if (!blogs) {
        return res.status(404).json({message : "No Blogs Found"});
    }
    return res.status(200).json({blogs});
};

export const addBlog = async(req,res,next) => {
    const {title, description, image, user} = req.body;
    let definedUser;
    try {
        definedUser = await User.findById(user);
    } catch(err) {
        console.log(err);
    }
    if (!definedUser) {
        res.status(400).json({message : "Unable to find user by this id"});
    }
    const newBlog = new MediaBlog({
        title,
        description,
        image, 
        user
    });

    try {
        const session = await Mongoose.startSession();
        session.startTransaction();
        await newBlog.save({session}); //saves blog to database
        definedUser.blogs.push(newBlog);
        await definedUser.save({session});
        await session.commitTransaction();
    } catch (err) {
        return console.log(err);
    }
    return res.status(200).json({newBlog});
};

export const updateBlog = async(req,res,next) => {
    const {title, description} = req.body;
    const blogId = req.params.id;
    let blog;
    try {
        blog = await MediaBlog.findByIdAndUpdate(blogId, {
            title,
            description
        });
    } catch (err) {
        console.log(err);
    }
    if (!blog) {
        return res.status(500).json({message : "Could not update blog"});
    }
    return res.status(200).json({blog});
};

export const getById = async(req,res,next) => {
    const blogId = req.params.id;
    let getBlog;
    try {
        getBlog = await MediaBlog.findById(blogId);
    } catch (err) {
        console.log(err);
    }
    if (!getBlog) {
        return res.status(404).json({message : "Could Not Find Blog With Specified Id"});
    }
    return res.status(200).json({getBlog});
};

export const deleteById = async(req,res,next) => {
    const blogId = req.params.id;
    let getBlog;
    try {
        getBlog = await MediaBlog.findByIdAndDelete(blogId).populate("user");
    } catch (err) {
        console.log(err);
    }
    if (!getBlog) {
        return res.status(404).json({message : "Could Not Find Blog With Specified Id"});
    }

    let user;
    try {
        user = getBlog.user;
        await user.blogs.pull(getBlog);
        await user.save();
    } catch (err) {
        console.log(err);
    }
    res.status(200).json({message : "Succesfully Deleted", getBlog, user});
};

export const getUser = async(req,res,next) => {
    const userId = req.params.id;
    let findUserBlogs;
    try {
        findUserBlogs = await User.findById(userId).populate("blogs");
    } catch (err) {
        return console.log(err);
    }
    if (!findUserBlogs.blogs) {
        return res.status(400).json({message : "No Blogs Found"});
    }
    return res.status(200).json({blogs : findUserBlogs.blogs});
};