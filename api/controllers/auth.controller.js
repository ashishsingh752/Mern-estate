import User from "../model/user.model.js";
import bcryptjs from "bcryptjs";
import { errorHandler } from "../utils/error.js";

export const signup = async(req,res, next)=>{
    // console.log(req.body);  // to show in the terminal 
    const {username, email, password} = req.body;  
    const hashedPassword = bcryptjs.hashSync(password, 10) ;
    const newUser = new User({username, email, password: hashedPassword});
    try{
        await newUser.save();
        res.status(201).json('user created successfully');
    } catch(error){
        // res.status(404).json(error.message);
        next(error);
        // next(errorHandler(550,'error from the funtion'));
    }
};