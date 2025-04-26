import projectController from "./projectController.js";
import { findArtistByUserId } from "../../utils/permissions.js";

async function getAll(req, res) {
    try {
        const projects = await projectController.getAll();
        res.json(projects);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Error del servidor" });
    }
}

async function getByID(req, res) {
    try {
        const id = req.params.id;
        const project = await projectController.getByID(id);
        if (!project) {
            return res.status(404).json({ error: "Proyecto no encontrado" });
        }
        res.json(project);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Error del servidor" });
    }
}

async function getByTitle(req, res) {
    try {
        const title = req.params.title;
        const project = await projectController.getByTitle(title);
        if (!project) {
            return res.status(404).json({ error: "Proyecto no encontrado" });
        }
        res.json(project);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Error del servidor" });
    }
}

async function create(req, res) {
    try {
        const userId = req.user.user_id;
        //comprobar que el user es artista
        const existingArtist = await findArtistByUserId(userId);
        if (!existingArtist) {
            return res.status(403).json({ error: "Debes ser un artista para crear un proyecto." });
        }

        console.log("Artista encontrado:", existingArtist);  // Verifica que el artista está siendo encontrado.

        const project = await projectController.create(req.body);
        console.log("Proyecto creado:", project);  // Verifica que el proyecto se crea correctamente.

        // asociar el proyecto al artista en la tabla intermedia
        await existingArtist.addProject(project);
        console.log("Proyecto asociado al artista");  // Verifica que la asociación se realiza sin problemas.

        res.json(project);
    } catch (error) {
        console.error("Error:", error);
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
        const result = await projectController.edit(id, req.body);
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
        const response = await projectController.remove(id);
        res.status(200).json({ message: "Proyecto eliminado correctamente" });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Error del servidor" });
    }
}

export default {
    getAll,
    getByID,
    getByTitle,
    create,
    edit,
    remove,
};