// const WebSocket = require("ws");

// module.exports = (strapi) => {
//   const server = strapi.server.httpServer;
//   const wss = new WebSocket.Server({ server });

//   wss.on("connection", (ws) => {
//     ws.on("message", (message) => {
//       // Echo the received message back to the client
//       ws.send(message);
//     });

//     ws.on("error", (error) => {
//       console.error("WebSocket error:", error);
//     });
//   });
// };
