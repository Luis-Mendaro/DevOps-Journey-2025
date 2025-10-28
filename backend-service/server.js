const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const registroRoutes = require("./routes/registroRoutes");

dotenv.config();

const app = express();
const PORT = process.env.PORT || 4000;

app.use(cors());
app.use(express.json());

app.use("/api/registro", registroRoutes);

app.listen(PORT, () => {
  console.log(`🚀 Backend del sistema escuchando en http://localhost:${PORT}`);
});
