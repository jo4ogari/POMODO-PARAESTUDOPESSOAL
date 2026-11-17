// Servidor local mínimo para o pomodoro (o YouTube não toca embutido via file://)
const http = require("http");
const fs = require("fs");
const path = require("path");

const PORT = 5173;
const file = path.join(__dirname, "index.html");

http.createServer((req, res) => {
  fs.readFile(file, (err, data) => {
    if (err) { res.writeHead(500); return res.end("Erro ao ler index.html"); }
    res.writeHead(200, { "Content-Type": "text/html; charset=utf-8", "Cache-Control": "no-store" });
    res.end(data);
  });
}).listen(PORT, "127.0.0.1", () => {
  console.log(`Pomodoro rodando em http://localhost:${PORT}  (feche esta janela para parar)`);
});
