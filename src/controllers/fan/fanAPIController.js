import fanController from "./fanController.js";

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
        const fan = await fanController.create(req.body);
        res.json(fan);
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
        const result = await fanController.edit(id, req.body);
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