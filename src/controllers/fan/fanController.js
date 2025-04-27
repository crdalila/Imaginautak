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
                through: { attributes: [] }, // ocultamos la tabla intermedia
            },
            {
                model: Project,
                attributes: ['project_id', 'title'],
                through: { attributes: [] }
            }
        ]
    });
    return fan;
}

// Crear una cuenta FAN
async function create(data) {
    const { img, bio } = data; // si no desestructuras, tendríamos que poner data.img y data.bio y así utilizamos para crear ruta de la img
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
    const editedFan = await Fan.findByPk(id);
    return editedFan;
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