import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();
const JWT_SECRET = process.env.JWT_SECRET;


function createToken(userData) {
    const token = jwt.sign(userData, JWT_SECRET, { expiresIn: '4h' });
    return token;
}

function verifyToken(token) {
    const result = jwt.verify(token, JWT_SECRET);
    return result
}

export {
    createToken,
    verifyToken
}