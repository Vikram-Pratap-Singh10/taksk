import jwt from "jsonwebtoken";
export const tokenVerification = (req, res, next) => {
    let token = req.headers.authorization;
    try {
        if (!token)
            throw new Error();

        token = token.split(" ")[1]
        jwt.verify(token, "dfjkdlfkdfljklfjdfk")
        next();
    }
    catch (err) {
        console.log(err);
        return res.status(401).json({ error: "unauthorized user", status: false })
    }
}