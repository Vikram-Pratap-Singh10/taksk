import { Product } from "../model/product.model.js";
import { task } from "../model/task.model.js"
import Jwt from "jsonwebtoken";
import http from "http"
import axios from "axios";

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

export const tokenGenerate = async (req, res, next) => {
    try {
        let token = await task.find({ authUser: req.body.authUser, authKey: req.body.authKey });
        if (!token) {
            return res.status(401).json({ error: "user not found", status: false });
        }
        else {
            let token = Jwt.sign({ subject: req.body.authUser }, "dfjkdlfkdfljklfjdfk");
            return res.status(200).json({ token: token, message: "token generate successful", status: true });
        }
    }
    catch (err) {
        console.log(err);
        return res.status(500).json({ error: "Internal server error", status: false });
    }
}

export const saveProduct = async (req, res, next) => {
    try {
        let product = await Product.create(req.body);
        return res.status(200).json({ Product: product, message: "product save successful", status: true });
    }
    catch (err) {
        console.log(err);
        return res.status(500).json({ error: "Internal server error", status: false });
    }
}

export const tokenPayment = async (req, res, next) => {
    try {
        let token = await task.find({ authUser: req.body.authUser, authKey: req.body.authKey });
        if (!token) {
            return res.status(401).json({ error: "user not found", status: false });
        }
        else {
            let token = Jwt.sign({ subject: req.body.authUser }, "dfjkdlfkdfljklfjdfk");
            return res.status(200).json({ token: token, message: "token generate successful", status: true });
        }
    }
    catch (err) {
        console.log(err);
        return res.status(500).json({ error: "Internal server error", status: false });
    }
}


// --------------------------------------------------
export const tokenGen = async (req, res, next) => {
    try {
        const response = await axios.post("https://api.bmicos.com/bmiecommerce/sandbox/api/v1/ecommerce/Token", {
            authUser: req.body.authUser,
            authKey: req.body.authKey
        });
        if (response.status === 200) {
            return res.status(200).json({ response: response.data, message: "successful", status: true });
        } else {
            return res.status(response.status).json({ error: "External API Error", status: false });
        }
    } catch (err) {
        console.error(err);
        return res.status(500).json({ error: "Internal Server Error", status: false });
    }
};

export const verifyUser = async (req, res, next) => {
    try {
        const token = req.headers.authorization;
        const response = await axios.post("https://api.bmicos.com/bmiecommerce/sandbox/api/v1/ecommerce/Quote",
            req.body,
            {
                headers: {
                    Authorization: token,
                },
            }
        );
        if (response.status === 200) {
            return res.status(200).json({response:response.data, message: "successful", status: true });
        } else {
            return res.status(response.status).json({ error: "External API Error", status: false });
        }
    } catch (err) {
        console.error(err);
        return res.status(500).json({ error: "Internal Server Error", status: false });
    }
};


