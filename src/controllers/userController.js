const prisma = require('../prisma'); // Sube un nivel (a src) y encuentra prisma.js

// Función para registrar un nuevo usuario
const createUser = async (req, res) => {
    const { email, name } = req.body;

    try {
        // Validar que llegue el email
        if (!email) {
            return res.status(400).json({ error: "El email es obligatorio" });
        }

        // Crear el usuario en MySQL usando Prisma
        const newUser = await prisma.user.create({
            data: {
                email,
                name
            }
        });

        res.status(201).json({
            message: "Usuario creado con éxito",
            user: newUser
        });
    } catch (error) {
        // Manejar error si el email ya existe (P2002 es el código de Prisma para restricciones únicas)
        if (error.code === 'P2002') {
            return res.status(400).json({ error: "El email ya está registrado" });
        }
        
        res.status(500).json({ error: "Error interno del servidor", details: error.message });
    }
};

module.exports = {
    createUser
};