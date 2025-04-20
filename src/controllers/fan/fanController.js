import Fan from "../../models/fan.js";

// Conseguir FAN por su ID //TODO esto lo necesitamos??
async function getByID(id) {
    const fan = await Fan.findByPk(id);
    if (!fan) {
        throw new Error(`Fan con ID ${id} no encontrado`);
    }

    return fan;
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


export default {
    getByID,
    edit,
};