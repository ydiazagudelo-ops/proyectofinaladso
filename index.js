const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.get('/', (req, res) => {
    res.json({ message: "Servidor corriendo en el proyecto final ADSO" });
});

app.listen(PORT, () => {
    console.log(`Servidor activo en el puerto ${PORT}`);
});