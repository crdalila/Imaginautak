import userController from "./userController.js";
import { isLoggedInAPI } from "../../middleware/authMiddleware.js";

async function getByID(req, res) {
    try {
        const id = req.params.id;
        const user = await userController.getByID(id);
        if (!user) {
            return res.status(404).json({ error: "Usuario no encontrado" });
        }
        res.json(user);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Error del servidor" });
    }
}

async function getByUsername(req, res) {
    try {
        const username = req.params.username;
        const user = await userController.getByUsername(username);
        if (!user) {
            return res.status(404).json({ error: "Usuario no encontrado" });
        }
        res.json(user);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Error del servidor" });
    }
}

async function edit(req, res) {
    try {
        const currentUser = req.user;
        const id = req.params.id;
        //si el usuario logueado no es el del perfil que quieres editar o si no es un admin
        if (currentUser.id !== id && !isAdmin(req)) {
            return res.status(403).json({ error: "No tienes permiso para editar este usuario." });
        }
        const result = await userController.edit(id, req.body);
        res.json(result);

    } catch (error) {
        console.error(error);
        if (error.statusCode) {
            res.status(error.statusCode).json({ error: error.message });
        } else {
            res.status(500).json({ error: "Error del servidor" });
        }
    }
}


async function remove(req, res) {
    try {
        const currentUser = req.user;
        const id = req.params.id;
        //si el usuario logueado no es el del perfil que quieres eliminar o si no es un admin
        if (currentUser.id !== id && !isAdmin(req)) {
            return res.status(403).json({ error: "No tienes permiso para eliminar este usuario." });
        }
        const response = await userController.remove(id);
        res.status(200).json({ message: "Usuario eliminado correctamente" });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Error del servidor" });
    }
}

// PARA SABER SI ERES ADMIN
function isAdmin(req) {
    const user = req.user;
    return user && user.role === "admin";
}


export default {
    getByID,
    getByUsername,
    edit,
    remove,
    isAdmin,
};