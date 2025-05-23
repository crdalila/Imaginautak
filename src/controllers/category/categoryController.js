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
                    attributes: [] // no hace falta poner model porque sequelize ya sabe qué tabla intermedia es
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
    if (!data.category_name) {
        throw new CategoryNameNotProvided();
    }
    const newCategory = await Category.create(data);
    return newCategory;
}

// Editar CATEGORY
async function edit(id, data) {
    const result = await Category.update(
        data,
        {
            where: {
                category_id: id
            }
        });
    const editedCategory = await Category.findByPk(id);
    return editedCategory;
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