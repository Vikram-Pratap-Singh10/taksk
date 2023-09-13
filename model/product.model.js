import mongoose from "mongoose";

const ProductSchema = mongoose.Schema({
    productName:{
        type:String
    },
    productPrice:{
        type:Number
    },
    productQuantity:{
        type:Number
    },
    productDescription:{
        type:String
    }
})

export const Product = mongoose.model("product",ProductSchema);