import artistController from "./artistController.js";

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
            return res.status(404).json({ error: "Artista no encontrado" });
        }
        res.json(artist);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Error del servidor" });
    }
}

async function create(req, res) {
    try {
        const artist = await artistController.create(req.body);
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
        const response = await artistController.remove(id);
        res.status(200).json({ message: "Artista eliminado correctamente" });
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