import authController from "./authController.js";
import { createToken } from "../../utils/token.js"

// REGISTRARSE
async function register(req, res) {
    try {
        const result = await authController.register(req.body);
        res.json(result);
    } catch (error) {
        console.error(error);
        if (error.statusCode) {
            res.status(error.statusCode).json({ error: error.message });
        } else {
            res.status(500).json({ error: "Error del servidor interno" });
        }
    }
}

// LOGGEARSE
async function login(req, res) {
    try {
        const {email, password} = req.body;
        const result = await authController.login(email, password); // lo que necesitamos para el login
        const loginData = { // para crear el token, necesita solo los datos específicos id y rol, para saber quién es y qué permisos tiene
            name: result.username,
            user_id: result.user_id,
            role: result.role,
        }
        const token = createToken(loginData);
        res.json({token:token, user:loginData});
    } catch (error) {
        console.error(error);
        if (error.statusCode) {
            res.status(error.statusCode).json({ error: error.message });
        } else {
            res.status(500).json({ error: "Error del servidor interno" });
        }
    }
}

// DESLOGGEARSE
async function logout(req, res) {
    try {
        // no se puede eliminar el token desde backend
        res.json({ message: "Has cerrado sesión correctamente." });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Error del servidor interno" });
    }
}

export default {
    register,
    login,
    logout
}