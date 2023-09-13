import mongoose from "mongoose";

const PaymentSchema = mongoose.Schema({
    cartType:{
        type:Number
    },
    cardNumber:{
        type : String,
    },
    nameOnCard:{
        type :String
    },
    expDateMonth:{
        type:String
    },
    expDateYear:{
        type:String
    },
    cvv:{
        type:String
    },
    payerEmail:{
        type:String
    }
})

export const Payment = mongoose.model("payment",PaymentSchema);