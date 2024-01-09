import MediaBlog from '../model/MediaBlog';

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
    const newBlog = new MediaBlog({
        title,
        description,
        image, 
        user
    });
    try {
        await newBlog.save(); //saves blog to database
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