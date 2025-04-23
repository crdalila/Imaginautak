import { verifyToken } from "../utils/token.js";

// PARA SABER SI HAS INICIADO SESIÓN:
function isLoggedInAPI(req,res,next){
    const authorization  = req.headers.authorization; //para conseguir el token, te devuelve BEARER ELTOKENENCUESTIÓN
    if(!authorization){
        res.status(401).json({error:"No has iniciado sesión"});
    }
    let token = authorization.split(" "); //para separar el BEARER del token en sí
    token = token.pop(); //nos quedamos con el último, el token
    const result = verifyToken(token);
    if(result){
        req.user = {
            user_id: result.user_id,
            role: result.role
        }
        next();
    }else{
        res.status(401).json({error:"No has iniciado sesión"});
    }
}

// PARA SABER SI ERES ADMIN
function isAdmin(req, res, next) {
    const user = req.user; //esto ya se habrá chequeado en isLoggedIn
    if (!user) {
        return res.status(401).json({ error: "No has iniciado sesión" });
    }
    if (user.role === "admin") {
        return next();
    } else {
        return res.status(403).json({ error: "Acceso denegado: Tienes que ser admin para hacer esta operación" });
    }
}

export {
    isLoggedInAPI,
    isAdmin,
}