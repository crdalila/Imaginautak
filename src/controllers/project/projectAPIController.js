import projectController from "./projectController.js";
import { findArtistByUserId, isOwner } from "../../utils/permissions.js";
import Artist from "../../models/artist.js";
import Project from "../../models/project.js";
import Artist_has_project from "../../models/artist_has_project.js";
import userAPIController from "../user/userAPIController.js";

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
        // localizar el artista
        const userId = req.user.user_id;
        const existingArtist = await findArtistByUserId(userId);
        if (!existingArtist) {
            return res.status(403).json({ error: "Debes ser un artista para crear un proyecto." });
        }
        // crear proyecto (con categorías)
        const projectData = {
            ...req.body,
            created_at: new Date() // si no se manda created_at en el formulario, lo añadimos aquí
        };
        const project = await projectController.create(projectData);

        // asociar el proyecto con el artista
        await Artist_has_project.create({
            artist_id: existingArtist.artist_id,
            project_id: project.project_id
        });
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
         // encontrar proyecto
         const id = req.params.id;
         const project = await projectController.getByID(id);
         if (!project) {
             return res.status(404).json({ error: "Proyecto no encontrado." });
         }
         // buscar todos los artistas asociados a este proyecto
         const artistProjects = await Artist_has_project.findAll({
             where: { project_id: id }
         });
         if (!artistProjects || artistProjects.length === 0) {
             return res.status(404).json({ error: "No se encontró ningún artista asociado a este proyecto." });
         }
         // extraer los artistas asociados
         const artistIds = artistProjects.map(ap => ap.artist_id);
 
         // comprobaciones
         const userId = req.user.user_id;
         const userIsArtistOfProject = artistIds.includes(userId); // ¿es uno de los artistas?
         if (!userIsArtistOfProject) {
             return res.status(403).json({ error: "No tienes permiso para eliminar este proyecto." });
         }
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
        // encontrar proyecto
        const id = req.params.id;
        const project = await projectController.getByID(id);
        if (!project) {
            return res.status(404).json({ error: "Proyecto no encontrado." });
        }
        // buscar todos los artistas asociados a este proyecto
        const artistProjects = await Artist_has_project.findAll({
            where: { project_id: id }
        });
        if (!artistProjects || artistProjects.length === 0) {
            return res.status(404).json({ error: "No se encontró ningún artista asociado a este proyecto." });
        }
        // extraer los artistas asociados
        const artistIds = artistProjects.map(ap => ap.artist_id);

        // comprobaciones
        const userId = req.user.user_id;
        const userIsArtistOfProject = artistIds.includes(userId); // ¿es uno de los artistas?
        const userIsAdmin = userAPIController.isAdmin(req); // ¿es admin? (no funciona isAdmin solo, necesita el userAPIController)

        if (!userIsArtistOfProject && !userIsAdmin) {
            return res.status(403).json({ error: "No tienes permiso para eliminar este proyecto." });
        }
        // eliminar el proyecto
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