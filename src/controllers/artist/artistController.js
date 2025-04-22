import Artist from "../../models/artist.js";
import Artist_has_project from "../../models/artist_has_project.js";
import Project from "../../models/project.js";
import Project_has_category from "../../models/project_has_category.js";
import Category from "../../models/category.js";
import Fan_follows_artist from "../../models/fan_follows_artist.js";

// Conseguir todos los ARTIST (solo nombre artístico y ordenado por orden alfabético)
async function getAll() {
    const artists = await Artist.findAll({
        attributes: ['artistic_name', 'artist_id'],
        order: [['artistic_name', 'ASC']]
    });
    return artists;
} 

// Conseguir ARTIST por su ID y mostrar sus proyectos
async function getByID(id) {
    const artist = await Artist.findByPk(id, {
        include: [
            {
                model: Project,
                    through: {
                        model: Artist_has_project,
                        attributes: [] //así no se incluyen columnas de la tabla intermedia
                    },
                    attributes: ['project_id', 'title'],
                    include: [
                        {
                            model: Category,
                            through: {
                                model: Project_has_category,
                                attributes: []
                            },
                            attributes: ['category_id', 'category_name']
                        }
                    ],
            }],
        });
    if (!artist) {
        return null;
    }
    //contar sus followers:
    const followersCount = await Fan_follows_artist.count({
        where: { artist_id: id }
    });
    const artistData = artist.toJSON(); //lo convertimos en un obj de javascript en lugar de una instancia de sequelize para poder añadirle un atributo nuevo
    artistData.followers_count = followersCount;

    return artistData;
}

// Crear una cuenta ARTIST
async function create(data) {
    //TODO: errores genéricos
    if (!data.artistic_name) {
        throw new AppointmentDateNotProvided();
    }
    if (!data.bio) {
        throw new AppointmentDateNotProvided();
    }
    if (!data.social_media_01) {
        throw new AppointmentDescriptionNotProvided();
    }
    if (!data.img) {
        throw new AppointmentDescriptionNotProvided();
    }
    const newArtist = await Artist.create(data);
    return newArtist;
}

// Editar ARTIST y sus datos
async function edit(id, data) {
    const result = await Artist.update(
        data,
        {
            where: {
                artist_id: id
            }
        });
    return result;
}

// Eliminar la cuenta ARTIST (no user)
async function remove(id) {
    const response = await Artist.destroy({
        where: { 
            artist_id: id
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