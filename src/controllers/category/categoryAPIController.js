import categoryController from "./categoryController.js";
import userAPIController from "../user/userAPIController.js";
import Category from "../../models/category.js";

async function getAll(req, res) {
    try {
        const categories = await categoryController.getAll();
        res.json(categories);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Error del servidor" });
    }
}

async function getByID(req, res) {
    try {
        const id = req.params.id;
        const category = await categoryController.getByID(id);
        if (!category) {
            return res.status(404).json({ error: "Categoría no encontrada" });
        }
        res.json(category);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Error del servidor" });
    }
}

async function create(req, res) {
    try {
        //si no eres admin, error
        if (!userAPIController.isAdmin(req)) {
            return res.status(403).json({ error: "No tienes permiso para crear una categoría." });
        }
        //si existe ya la categoría
        const existingCategory = await Category.findOne({
            where: {
                category_name: req.body.category_name
            }
        });
        if (existingCategory) {
            return res.status(400).json({ error: "Ya existe una categoría con este nombre" });
        }
        const category = await categoryController.create(req.body);
        res.json(category);
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
        //si no eres admin, error
        if (!userAPIController.isAdmin(req)) {
            return res.status(403).json({ error: "No tienes permiso para editar una categoría." });
        }
        const id = req.params.id;
        const result = await categoryController.edit(id, req.body);
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
        //si no eres admin, error
        if (!userAPIController.isAdmin(req)) {
            return res.status(403).json({ error: "No tienes permiso para eliminar una categoría." });
        }
        const id = req.params.id;
        const response = await categoryController.remove(id);
        res.status(200).json({ message: "Categoría eliminada correctamente" });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Error del servidor" });
    }
}

export default {
    getAll,
    getByID,
    create,
    edit,
    remove,
};