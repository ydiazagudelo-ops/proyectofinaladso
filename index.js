const express = require('express');
const userRoutes = require('./src/routes/userRoutes');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware para entender formato JSON en las peticiones
app.use(express.json());

// Conectar las rutas de usuarios
app.use('/api', userRoutes);

app.get('/', (req, res) => {
    res.json({ message: "Servidor corriendo en el proyecto final ADSO" });
});

app.listen(PORT, () => {
    console.log(`Servidor activo en el puerto ${PORT}`);
});