import artistController from "./artistController.js";
import { findArtistByUserId, isOwner } from "../../middleware/rolesMiddleware.js";
import userAPIController from "../user/userAPIController.js";

async function getAll(req, res) {
    try {
        const artists = await artistController.getAll();
        res.json(artists);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Error del servidor" });
    }
}

async function getByID(req, res) {
    try {
        const id = req.params.id;
        const artist = await artistController.getByID(id);
        if (!artist) {
            return res.status(404).json({ error: "Artista no encontrado." });
        }
        res.json(artist);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Error del servidor" });
    }
}

async function getByName(req, res) {
    try {
        const artistic_name = req.params.artistic_name;
        const artist = await artistController.getByName(artistic_name);
        if (!artist) {
            return res.status(404).json({ error: "Artista no encontrado." });
        }
        res.json(artist);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Error del servidor" });
    }
}

async function create(req, res) {
    try {
        //comprobar que NO exista ya un perfil de artista para este user
        const userId = req.user.user_id;
        const existingArtist = await findArtistByUserId(userId);
        if (existingArtist) {
            return res.status(400).json({ error: "Ya tienes un perfil de artista creado." });
        }
        const { artistic_name, bio, website, social_media_01, social_media_02, img } = req.body;
        const artist = await artistController.create({
            artistic_name,
            bio,
            website,
            social_media_01,
            social_media_02,
            img,
            artist_id: userId, //asociar el artista al user que está logueado
        });

        res.json(artist);
    } catch (error) {
        console.error(error);
        if (error.statusCode) {
            res.status(error.statusCode).json({ error: error.message });
        } else {
            res.status(500).json({ error: "Error del servidor" });
        }
    }
}

async function edit(req, res) {
    try {
        const id = req.params.id;
        const artist = await artistController.getByID(id);
        //comprobar si quien ha iniciado sesión es el propietario de este perfil
        if (!isOwner(artist.artist_id, req.user.user_id)) {
            return res.status(403).json({ error: "No tienes permiso para editar este perfil." });
        }
        const result = await artistController.edit(id, req.body);
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
        const artist = await artistController.getByID(id);
        if (!artist) {
            return res.status(404).json({ error: "Artista no encontrado." });
        }
        //comprobar si quien ha iniciado sesión es el propietario de este perfil o es admin
        if (!isOwner(artist.artist_id, req.user.user_id) && !userAPIController.isAdmin(req)) {
            return res.status(403).json({ error: "No tienes permiso para eliminar este perfil." });
        }
        const response = await artistController.remove(id);
        if (response === 0) {
            return res.status(404).json({ error: "Error al eliminar el artista." });
        }
        return res.status(200).json({ message: "Artista eliminado correctamente." });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: "Error del servidor" });
    }
}


export default {
    getAll,
    getByID,
    getByName,
    create,
    edit,
    remove,
};