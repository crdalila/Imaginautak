import bcrypt from "bcrypt";

// Hashear la contraseña
async function hash(password) {
    const result = await bcrypt.hash(password, 10);
    return result;
}

// Comprobar si la contraseña introducida es correcta
async function compare(password, hash) {
    const result = await bcrypt.compare(password, hash);
    return result;
}

export {
    hash,
    compare
}