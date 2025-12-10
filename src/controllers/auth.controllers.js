import { generateToken } from "../data/token.js";

export const login = async (req, res) => {
    const {email, password} = req.body;
    if(email === "test@gmail.com" && password === "123456") {
        const user = {id: "123", email: email};
        const token = generateToken({user});
        res.json({token});
    }else{
    res.sendStatus(401);
    }
}

 