// module.exports = () => {
//   var io = require("socket.io")(strapi.server, {
//     cors: {
//       origin: "http://localhost:3000",
//       methods: ["GET", "POST"],
//       allowedHeaders: ["my-custom-header"],
//       credentials: true,
//     },
//   });
//   io.on("connection", function (socket) {
//     socket.on("join", ({ username, room }) => {
//       console.log("user connected");
//       console.log("username is ", username);
//       console.log("room is...", room);
//     });
//   });
// };
