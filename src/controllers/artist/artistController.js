import Artist from "../../models/artist.js";
import Project from "../../models/project.js";

// Conseguir todos los ARTIST
async function getAll() {
    const artists = await Artist.findAll({
        include: [
            {
                include: [
                    {
                        model: Project,
                        attributes: ['project_id', 'title', 'image']
                    }
                ],
                model: Project_has_category,
            },
        ],
      order: [['artistic_name', 'ASC']]
    });
    return artists;
} 

// Conseguir ARTIST por su ID
async function getByID(id) {
    const artist = await Artist.findByPk(id);
    if (!artist) {
        throw new Error(`Artista con ID ${id} no encontrado`);
    }

    return artist;
}

// Crear un ARTIST
async function create(data) {
    data.creation_date = new Date();
    if (!data.start_date) {
        throw new AppointmentDateNotProvided();
    }
    if (!data.end_date) {
        throw new AppointmentDateNotProvided();
    }
    if (!data.description) {
        throw new AppointmentDescriptionNotProvided();
    }
    const response = await Appointment.create(data);
    return response;
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

// Eliminar ARTIST
async function remove(id) {
    const response = await Appointment.destroy({
        where: { 
            appointment_id: id
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