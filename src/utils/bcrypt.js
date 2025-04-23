import bcrypt from "bcrypt";

// HASHEAR LA CONTRASEÑA
async function hash(password) {
    const result = await bcrypt.hash(password, 10);
    return result;
}

// COMPROBAR SI LA CONTRASEÑA INTRODUCIDA ES CORRECTA
async function compare(password, hash) {
    const result = await bcrypt.compare(password, hash);
    return result;
}

export {
    hash,
    compare
}