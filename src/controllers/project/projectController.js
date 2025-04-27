import Artist from "../../models/artist.js";
import Category from "../../models/category.js";
import Project from "../../models/project.js";
import Project_has_category from "../../models/project_has_category.js";
import Fan_favorites_project from "../../models/fan_favorites_project.js";
import { ProjectDateNotProvided, ProjectDescriptionNotProvided, ProjectTitleNotProvided, ProjectImgsNotProvided, ProjectURLNotProvided } from "../../utils/errors.js";

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
                        attributes: [] // para ocultar la tabla intermedia
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
                    attributes: [] // se puede poner esto o con el model: tabla intermedia, pero no hace falta porque sequelize ya lo hace solo
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
    // contar sus favoritos:
    const favoritesCount = await Fan_favorites_project.count({
        where: { project_id: project.project_id }
    });
    const projectData = project.toJSON();
    projectData.favorites_count = favoritesCount;
    
    return projectData;
}


// Conseguir PROJECT por su title y mostrar su artista y sus categorías
async function getByTitle(title) {
    const project = await Project.findOne( {
        where: { title },
        include: [
            {
                model: Artist,
                attributes: ['artist_id', 'artistic_name'],
                through: {
                    attributes: []
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
    // contar sus favoritos:
    const favoritesCount = await Fan_favorites_project.count({
        where: { project_id: project.project_id }
    });
    const projectData = project.toJSON();
    projectData.favorites_count = favoritesCount;
    
    return projectData;
}

// Crear un PROJECT y asociarlo con categorías
async function create(data) {
    if (!data.title) {
        throw new ProjectTitleNotProvided();
    }
    if (!data.description) {
        throw new ProjectDescriptionNotProvided();
    }
    if (!data.project_url) {
        throw new ProjectURLNotProvided();
    }
    if (!data.project_imgs) {
        throw new ProjectImgsNotProvided();
    }
    if (!data.created_at) {
        throw new ProjectDateNotProvided();
    }
    const newProject = await Project.create(data);
    // definir las categorías
    let categoryIds = [];
    if (data.categoryIds && data.categoryIds.length > 0) { // si pone categorías, que sea la que ha escrito
        categoryIds = data.categoryIds;
    } else {
        categoryIds = [21]; // si no, ponemos "otros" (id 21) por defecto
    }
    // crear las relaciones
    const categoryAssociations = categoryIds.map(category_id => ({
        project_id: newProject.project_id,
        category_id
    }));
    await Project_has_category.bulkCreate(categoryAssociations); // es como hacer create una a una, pero lo hace en lote. función de sequelize
    // para mostrar también las categorías cuando se crea:
    const createdProject = await Project.findByPk(newProject.project_id, {
        include: [
            {
                model: Category,
                attributes: ['category_id', 'category_name'],
                through: { attributes: [] }
            }
        ]
    });
    
    return createdProject;
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
    const editedProject = await Project.findByPk(id);
    return editedProject;
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
    getByTitle,
    create,
    edit,
    remove,
};