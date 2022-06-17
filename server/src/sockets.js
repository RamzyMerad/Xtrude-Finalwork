module.exports = function (io) {
  io.sockets.on('connection', (socket) => {
    console.log("Userconnected");
    socket.on('disconnect',()=>{
      console.log("disconnected");
    });
  });
}