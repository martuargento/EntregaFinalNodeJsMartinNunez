import jwt from 'jsonwebtoken';
import 'dotenv/config';

//configDotenv();

const secret_key = process.env.JWT_SECRET_KEY || "asdasdasdfsa";
console.log("Secret Key Usada:", secret_key);

export const generateToken = (userData) => {

    const user = {id: userData.id, email: userData.email};
    const expiration = {expiresIn: '1h'};
    return jwt.sign(user, secret_key, expiration);

}

const token = generateToken({id: "1", email: "test@gmail.com"});
console.log("Token Generado:", token); 