const http = require("http");

const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/plain; charset=utf-8" });

  if (req.url === "/") {
    res.statusCode = 200;
    res.end("Sistema técnico modular corriendo en contenedor Node");
  } else {
    res.statusCode = 400;
    res.end("Ruta no encontrada");
  }
});

server.listen(3000, () => {
  console.log("Servidor activo en puerto 3000");
});
