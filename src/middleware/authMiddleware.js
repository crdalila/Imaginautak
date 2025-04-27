import { verifyToken } from "../utils/token.js";

// Para saber si has iniciado sesión
function isLoggedInAPI(req, res, next){
    const authorization  = req.headers.authorization; // para conseguir el token, te devuelve BEARER ELTOKENENCUESTIÓN
    if(!authorization){
        res.status(401).json({error:"No has iniciado sesión"});
    }
    let token = authorization.split(" "); // para separar el BEARER del token en sí
    token = token.pop(); // nos quedamos con el último, el token
    const result = verifyToken(token);
    if(result){
        req.user = {
            user_id: result.user_id,
            role: result.role
        }
        next();
    }else{
        res.status(401).json({error:"No has iniciado sesión."});
    }
}

export {
    isLoggedInAPI,
}