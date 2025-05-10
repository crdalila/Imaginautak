import fanController from "./fanController.js";
import { findFanByUserId, isOwner} from "../../utils/permissions.js";
import userAPIController from "../user/userAPIController.js";

async function getByID(req, res) {
    try {
        const id = req.params.id;
        const fan = await fanController.getByID(id);
        if (!fan) {
            return res.status(404).json({ error: "Fan no encontrado" });
        }
        res.json(fan);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Error del servidor" });
    }
}

async function create(req, res) {
    try {
        const userId = req.user.user_id;
        const existingFan = await findFanByUserId(userId);
        if (existingFan) {
            return res.status(400).json({ error: "Ya tienes un perfil de fan creado." });
        }
        // comprobar si la imagen ha sido subida
        if (!req.file) {
            return res.status(400).json({ error: "La imagen de perfil es obligatoria." });
        }
        const imgPath = req.file.path; // url o path de la img
        const { bio } = req.body;
        const fan = await fanController.create({
            img: imgPath,
            bio,
            fan_id: userId, // asociar el fan al usuario que está logueado
        });
        res.json(fan);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Error del servidor" });
    }
}


async function edit(req, res) {
    try {
        const id = req.params.id;
        const fan = await fanController.getByID(id);
        if (!fan) {
            return res.status(404).json({ error: "Fan no encontrado." });
        }
        // comprobar si quien ha iniciado sesión es el propietario de este perfil
        if (!isOwner(fan.fan_id, req.user.user_id)) {
            return res.status(403).json({ error: "No tienes permiso para editar este perfil." });
        }
        // si se suben nuevas imágenes, obtenerlas y actualizar el campo
        let imgPath = fan.img; // si no se sube nada, mantiene la imagen actual
        if (req.files && req.files.length > 1) {
            return res.status(400).json({ error: "Solo puedes subir una imagen de perfil." });
        }
        if (req.files && req.files.length === 1) {
            imgPath = req.files[0].path; // usar la imagen subida
        }
        // actualizar los datos del fan
        const updatedFanData = {
            ...req.body,
            img: imgPath
        };
        const result = await fanController.edit(id, updatedFanData);
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
        const id = req.params.id;
        const fan = await fanController.getByID(id);
        if (!fan) {
            return res.status(404).json({ error: "Fan no encontrado." });
        }
        // comprobar si quien ha iniciado sesión es el propietario de este perfil
        if (!isOwner(fan.fan_id, req.user.user_id) && !userAPIController.isAdmin(req)) {
            return res.status(403).json({ error: "No tienes permiso para eliminar este perfil." });
        }
        const response = await fanController.remove(id);
        res.status(200).json({ message: "Fan eliminado correctamente" });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Error del servidor" });
    }
}

export default {
    getByID,
    create,
    edit,
    remove
};