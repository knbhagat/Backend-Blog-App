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

export const signup = async(request, response, next) => {
    const {name, email, password} = request.body; //Ex: name prints 'John', while {name} prints { name : 'John' }
    let definedUser;

    try {
        definedUser = await User.findOne({email}); //only will find one record from the database, and use brackets because email is an object. findOne is looking for an object
    } catch (err) {
        console.log(err);
    }
    if (existingUser) {
        return response.status(400).json({message : "User Already Exists! Choose to Log in"});
    }

    const newUser = new User({ // is an object because of the brackers
        name,
        email,
        password,
    });
    try {
        newUser.save(); //saves user to database
    } catch (err) {
        console.log(err);
    }
    return response.status(201).json({newUser});
};