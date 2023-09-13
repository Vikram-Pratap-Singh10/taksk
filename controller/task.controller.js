import { Product } from "../model/product.model.js";
import { task } from "../model/task.model.js"
import Jwt  from "jsonwebtoken";

export const First = async (req, res, next) => {
    try {
        const authUser = await task.create(req.body);
        return res.status(200).json({ message: "save authUser and authKey", authUser: authUser, status: true });
    }
    catch (err) {
        console.log(err);
        return res.status(500).json({ error: "Internal server error", status: false });
    }
}

export const tokenGenerate = async (req,res,next)=>{
    try{
        let token = await task.find({authUser:req.body.authUser,authKey:req.body.authKey});
        if(!token){
            return res.status(401).json({error:"user not found",status:false});
        }
        else{
            let token = Jwt.sign({subject:req.body.authUser},"dfjkdlfkdfljklfjdfk");
            return res.status(200).json({token:token,message:"token generate successful",status:true});
        }
    }
    catch(err){
        console.log(err);
        return res.status(500).json({error:"Internal server error",status:false});
    }
}

export const saveProduct = async (req,res,next)=>{
    try{
        let product = await Product.create(req.body);
        return res.status(200).json({Product:product,message:"product save successful",status:true});
    }
    catch(err){
        console.log(err);
        return res.status(500).json({error:"Internal server error",status:false});
    }
}