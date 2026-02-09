const path = require("path");

const express = require("express");
const app = express();

const http = require("http");
const server = http.createServer(app);

const { Server } = require("socket.io");
const io = new Server(server);

const QRCode = require('qrcode')

const port = 3000;

app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "public", "index.html"));
})

io.on('connection', (socket) => {
  console.log('a user connected');

  socket.on("generateQR", (textValue) => {
    const qr = QRCode.toDataURL(textValue, function(err, url) {
        socket.emit("qrGenerated", url);
    })
  })
});

server.listen(port, () => {
    console.log(`Server is running on port ${port}`);
})
