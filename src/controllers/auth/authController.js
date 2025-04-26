import User from "../../models/user.js";
import { hash, compare } from "../../utils/bcrypt.js";
import { UserEmailAlreadyExists, UserEmailNotProvided, UserInvalidCredentials, UserNameNotProvided, UserPasswordNotProvided, UserRoleIncorrect } from "../../utils/errors.js";


// REGISTRARSE
async function register(userData) {
    if (!userData.username) {
        throw new UserNameNotProvided();
    }
    if (!userData.email) {
        throw new UserEmailNotProvided();
    }
    if (!userData.password) {
        throw new UserPasswordNotProvided();
    }
    // si el rol me lo das en mayúsculas, lo paso a minus y si no me das nada, lo pongo user por defecto
    userData.role = userData.role ? userData.role.toLowerCase() : "user";
    const roles = ["user", "admin"];
    if (!roles.includes(userData.role)) {
        throw new UserRoleIncorrect();
    }
    // si el nuevo usuario que estás intentando crear ya existe
    const oldUser = await User.findOne({
        where: {
            email: userData.email
        }
    })
    if (oldUser) {
        throw new UserEmailAlreadyExists();
    }
    // hashear la contraseña
    const hashedPassword = await hash(userData.password);
    userData.password = hashedPassword;
    const result = await User.create(userData);

    return result;
}

// LOGGEARSE
async function login(email, password) {
    if (!email) {
        throw new UserEmailNotProvided();
    }
    if (!password) {
        throw new UserPasswordNotProvided();
    }
    const user = await User.findOne({
        where: {
            email: email
        }
    })
    if (!user) {
        throw new UserInvalidCredentials();
    }
    const isSamePassword = await compare(password, user.password);
    if (isSamePassword) { // si la contraseña es correcta 
        return user;
    } else {
        throw new UserInvalidCredentials();
    }
}

export default {
    register,
    login,
}