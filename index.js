const express = require("express"); // Importamos el paquete express
const app = express(); // Inciializar servidor con express
const port = process.env.PORT || 3000; // Puerto a usar por el servidor

// Importar middlewares
const manage404 = require("./middlewares/manage404");
const checkApiKey = require("./middlewares/auth_api_key");
const morgan = require("./middlewares/morgan");

// Logger
app.use(morgan(':method :url :status :param[id] - :response-time ms :body'));
app.use(express.json()); // Middleware para parsear el body de las peticiones

// Rutas
const productsRoutes = require("./routes/products.routes")
const providersRoutes = require("./routes/providers.routes")

// GET http://localhost:3000/ --> Ruta /. La principal
app.get("/", (req, res) => {
  // req: request, res: response
  res.send("Hello World!. Welcome to Backend");
});

// Rutas a habilitar
app.use('/api/products',productsRoutes);
app.use('/api/providers',providersRoutes);

// Para ruta no existente
app.use("*", manage404);

app.listen(port, () => {
  console.log(`Example app listening on http://localhost:${port}`);
});
