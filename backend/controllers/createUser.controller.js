import { createuser } from "../services/user.service.js";

export const createUserController =async(req ,res,next)=>{
    try {
        const {name,email,description} =req.body;

        const user =createuser({name,email,description});

        return res.status(201).json({
            success:true,
            message:"succesfull create user",
            data:user
        })
        
    } catch (error) {
        next(error);
        
    }
}