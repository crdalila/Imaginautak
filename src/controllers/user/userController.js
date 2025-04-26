import User from "../../models/user.js";

// Conseguir USER por su ID
async function getByID(id) {
    const user = await User.findByPk(id, {
        attributes: 
        { 
            exclude: ['password']  //para que no muestre la contraseña:
        }
    });

    if (!user) {
        throw new Error(`Usuario con ID ${id} no encontrado`);
    }

    return user;
}

// Conseguir USER por su USERNAME
async function getByUsername(username) {
    const user = await User.findOne({
        where: {
            username,
        },
        attributes: 
        { 
            exclude: ['password']  //para que no muestre la contraseña:
        }
    });

    if (!user) {
        throw new Error(`Usuario ${username} no encontrado`);
    }
    return user;
}

// Editar USER y sus datos
async function edit(id,data) {
    if (data.role) {
        data.role = data.role.toLowerCase();
        const validRoles = ["user", "admin"];

        if (!validRoles.includes(data.role)) {
        throw new Error('Rol del usuario incorrecto');
        }
    }
    const result = await User.update(
        data,
        {
            where: {
                user_id: id
            }
        });
    const editedUser = await User.findByPk(id);
    return editedUser;
}

// Eliminar USER
async function remove(id) {
        const response = await User.destroy({
            where: {
                user_id: id
            }
        });
        return response;
}

export default {
    getByID,
    getByUsername,
    edit,
    remove
};