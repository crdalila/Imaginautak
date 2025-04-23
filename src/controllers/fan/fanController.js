import Fan from "../../models/fan.js";
import User from "../../models/user.js";
import Artist from "../../models/artist.js";
import Project from "../../models/project.js";
import { FanImgNotProvided, FanBioNotProvided } from "../../utils/errors.js";


// Conseguir FAN por su ID
async function getByID(id) {
    const fan = await Fan.findByPk(id, {
        include: [
            {
                model: User,
                attributes: ['username']
            },
            {
                model: Artist,
                attributes: ['artist_id', 'artistic_name'],
                through: { attributes: [] }, //ocultamos la tabla intermedia
            },
            {
                model: Project,
                attributes: ['project_id', 'title'],
                through: { attributes: [] }
            }
        ]
    });

    if (!fan) {
        throw new Error(`Fan con ID ${id} no encontrado`);
    }
    return fan;
}

// Crear una cuenta FAN
async function create(data) {
    if (!img) {
        throw new FanImgNotProvided();
    }
    if (!bio) {
        throw new FanBioNotProvided();
    }
    const newFan = await Fan.create(data);
    return newFan;
}

// Editar FAN y sus datos
async function edit(id, data) {
    const result = await Fan.update(
        data,
        {
            where: {
                fan_id: id
            }
        });
    return result;
}

// Eliminar cuenta FAN (no user)
async function remove(id) {
    const response = await Fan.destroy({
        where: { 
            fan_id: id
        }
    });
    return response;
}

export default {
    getByID,
    create,
    edit,
    remove,
};