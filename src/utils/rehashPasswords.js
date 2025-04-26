import bcrypt from 'bcrypt';

// Lista de contraseñas que ya tienes en texto plano
const users = [
    { email: 'marta.gomez@email.com', password: 'martag' },
    { email: 'juan.lopez@email.com', password: 'juanelo' },
    { email: 'ana.rivas@email.com', password: 'anar' },
    { email: 'pedro.martin@email.com', password: 'pedrom' },
    { email: 'laura.navas@email.com', password: 'launav' },
    { email: 'david.vera@email.com', password: 'dvera' },
    { email: 'sara.fuentes@email.com', password: 'saraf' },
    { email: 'alberto.rey@email.com', password: 'albr' },
    { email: 'ines.soler@email.com', password: 'iness' },
    { email: 'carlos.meza@email.com', password: 'cmeza' },
    { email: 'dalila@email.com', password: 'crdalila' },
    { email: 'vicky@email.com', password: 'vickypr' },
    { email: 'anais@email.com', password: 'done' },
    { email: 'igor@email.com', password: 'igoruve' },
    { email: 'izas@email.com', password: 'cascun' },
    { email: 'amaia@email.com', password: 'amaiabarrena' },
    { email: 'leo@email.com', password: 'views' },
    { email: 'lorna@email.com', password: 'lorr' },
    { email: 'kimetz@email.com', password: 'kimetza' },
    { email: 'noah@email.com', password: 'nooooah' },
    { email: 'admin@email.com', password: 'admin' }
];

// Función para rehacer los hashes
async function rehasearContraseñas() {
    for (const user of users) {
        const hashedPassword = await bcrypt.hash(user.password, 10);  // Hasheamos cada contraseña con bcrypt
        console.log(`Usuario: ${user.email}, Nuevo Hash: ${hashedPassword}`);
        // Aquí puedes actualizar la base de datos con el nuevo hash
    }
}

rehasearContraseñas();
