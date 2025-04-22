import Category from "../../models/category.js";
import Project from "../../models/project.js";
import { CategoryNameNotProvided } from "../../utils/errors.js";


// Conseguir todos los CATEGORYs
async function getAll() {
    const categories = await Category.findAll({
        order: [['category_name', 'ASC']]
    });
    return categories;
} 

// Conseguir CATEGORY por su ID y mostrar los proyectos que tiene
async function getByID(id) {
    const category = await Category.findByPk(id, {
        include: [
            {
                model: Project,
                attributes: ['project_id', 'title', 'description'],
                through: {
                    attributes: [] // esto ya es suficiente, no necesitás poner `model`
                },
                order: [['title', 'ASC']],
            }
        ]
    });
    if (!category) {
        return null;
    }
    return category;
}

// Crear una CATEGORY
async function create(data) {
    //TODO: errores genéricos
    if (!data.category_name) {
        throw new CategoryNameNotProvided();
    }
    const newCategory = await Category.create(data);
    return newCategory;
}

// Editar CATEGORY
async function edit(id, data) {
    const result = await Project.update(
        data,
        {
            where: {
                category_id: id
            }
        });
    return result;
}

// Eliminar una CATEGORY
async function remove(id) {
    const response = await Category.destroy({
        where: { 
            category_id: id
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