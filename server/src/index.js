//dependencies
const cors = require("cors");
const express = require("express");
const http = require('http');
const morgan = require("morgan");
require("dotenv").config();
const router = require("./routes")
const {
  Server
} = require("socket.io");

const app = express();
const server = http.createServer(app);

const io = new Server(server, {
  cors: {
    origin: "*"
  }
});
app.set("socketio", io);
require("./sockets")(io);

app.use(cors());
app.use(morgan("short"));
app.use(express.json());
app.use("/api/v1", router);

app.get("/", (req, res) => {
  res.sendStatus(200);
});



server.listen(process.env.SERVER_PORT, () => {
  console.log(`running on port ${process.env.SERVER_PORT}`);
});