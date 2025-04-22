import Artist from "../../models/artist.js";
import Artist_has_project from "../../models/artist_has_project.js";
import Category from "../../models/category.js";
import Project from "../../models/project.js";
import Project_has_category from "../../models/project_has_category.js";


// Conseguir todos los PROJECTS (solo título, descripción y categorías)
async function getAll() {
    const projects = await Project.findAll({
            attributes: ['project_id', 'title'],
            include: [
                {
                    model: Category,
                    attributes: ['category_id', 'category_name'],
                    through: {
                        model: Project_has_category,
                        attributes: [] //para ocultar la tabla intermedia
                    },
                }
            ],
        order: [['title', 'ASC']]
    });
    return projects;
} 

// Conseguir PROJECT por su ID y mostrar su artista y sus categorías
async function getByID(id) {
    const project = await Project.findByPk(id, {
        include: [
            {
                model: Artist,
                attributes: ['artist_id', 'artistic_name'],
                through: {
                    attributes: [] // esto ya es suficiente, no necesitás poner `model`
                }
            },
            {
                model: Category,
                attributes: ['category_id', 'category_name'],
                through: {
                    attributes: []
                }
            }
        ]
    });
    if (!project) {
        return null;
    }
    return project;
}

// Crear un PROJECT
async function create(data) {
    //TODO: errores genéricos
    if (!data.title) {
        throw new AppointmentDateNotProvided();
    }
    if (!data.description) {
        throw new AppointmentDateNotProvided();
    }
    if (!data.project_url) {
        throw new AppointmentDescriptionNotProvided();
    }
    if (!data.project_imgs) {
        throw new AppointmentDescriptionNotProvided();
    }
    if (!data.created_at) {
        throw new AppointmentDescriptionNotProvided();
    }
    const newProject = await Project.create(data);
    return newProject;
}

// Editar PROJECT y sus datos
async function edit(id, data) {
    const result = await Project.update(
        data,
        {
            where: {
                project_id: id
            }
        });
    return result;
}

// Eliminar un PROJECT
async function remove(id) {
    const response = await Project.destroy({
        where: { 
            project_id: id
        }
    });
    return response;
}

export default {
    getAll,
    getByID,
    create,
    edit,
    remove,
};