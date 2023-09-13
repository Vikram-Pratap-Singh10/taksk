import jwt from "jsonwebtoken";
export const tokenVerification = (req, res, next) => {
    let token = req.headers.Authorization;
    try {
        if (!token)
            throw new Error();

        token = token.split(" ")[1]
        jwt.verify(token)
        next();
    }
    catch (err) {
        console.log(err);
        return res.status(401).json({ error: "unauthorized user", status: false })
    }
}