import fanAPIController from '../controllers/fan/fanAPIController.js';
import artistAPIController from '../controllers/artist/artistAPIController.js';

// PARA SABER SI USER_ID CORRESPONDE CON UN FAN
async function findFanByUserId(id) {
    try {
        const fan = await fanAPIController.getByID(id);
        return fan || null;
    } catch (error) {
        console.error("Error buscando fan por ID:", error);
        return null;
    }
}

// PARA SABER SI USER_ID CORRESPONDE CON UN ARTISTA
async function findArtistByUserId(id) {
    try {
        const artist = await artistAPIController.getByID(id);
        return artist || null;
    } catch (error) {
        console.error("Error buscando artista por ID:", error);
        return null;
    }
}

// PARA SABER SI ERES EL PROPIETARIO DEL CONTENIDO AL QUE QUIERES ACCEDER:
function isOwner(resourceUserId, sessionUserId) {
    return resourceUserId === sessionUserId;
}


// PARA SABER SI ES FAN
async function isFanAPI(req, res, next) {
    const user = req.user;
    if (!user) {
        return res.status(401).json({ error: "No has iniciado sesión" });
    }
    try {
        const fan = await findFanByUserId(user.user_id);
        if (fan) {
            next();
        } else {
            return res.status(403).json({ error: "Acceso denegado. Solo los fans pueden realizar esta acción." });
        }
    } catch (error) {
        console.error("Error buscando fan por ID:", error);
        return res.status(500).json({ error: "Error del servidor buscando fan." });
    }
}

// PARA SABER SI ES ARTISTA
async function isArtistAPI(req, res, next) {
    const user = req.user;

    if (!user) {
        return res.status(401).json({ error: "No has iniciado sesión" });
    }

    try {
        const artist = await findArtistByUserId(user.artist_id);

        if (artist) {
            next();
        } else {
            return res.status(403).json({ error: "Acceso denegado. Solo los artistas pueden realizar esta acción." });
        }
    } catch (error) {
        console.error("Error buscando artista por ID:", error);
        return res.status(500).json({ error: "Error del servidor buscando artista." });
    }
}


export {
    findArtistByUserId,
    findFanByUserId,
    isOwner,
    isFanAPI,
    isArtistAPI
}