import User from "../model/UserSide"; //Why cant i put User in curly brackets

export const getAllUsers = async(request,res,next) => {
    let users;
    try {
        users = await User.find(); //constantly calls UserSide JavaScript
    } catch(err) {
        console.log(err);
    }
    if (!users) {
        return res.status(404).json({ message: "No Users Found"} );
    }
    return res.status(200).json({ users });
};