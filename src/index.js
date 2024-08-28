"use strict";
module.exports = {
  /**
   * An asynchronous register function that runs before
   * your application is initialized.
   *
   * This gives you an opportunity to extend code.
   */
  register({ strapi }) {},
  /**
   * An asynchronous bootstrap function that runs before
   * your application gets started.
   *
   * This gives you an opportunity to set up your data model,
   * run jobs, or perform some special logic.
   */

  //   bootstrap({ strapi }) {
  //     let { Server } = require("socket.io");
  //     //strapi.server.httpServer is the new update for Strapi V4
  //     let io = new Server(strapi.server.httpServer, {
  //       cors: {
  //         // cors setup
  //         origin: "http://localhost:3000",
  //         methods: ["GET", "POST"],
  //         allowedHeaders: ["my-custom-header"],
  //         credentials: true,
  //       },
  //     });

  //     io.on("connection", function (socket) {
  //       //Listening for a connection from the frontend
  //       console.log("listening for connection");
  //       socket.on("join", ({ username }) => {
  //         // Listening for a join connection
  //         console.log("user connected");
  //         console.log("username is ", username);
  //         if (username) {
  //           socket.join("group"); // Adding the user to the group
  //           socket.emit("welcome", {
  //             // Sending a welcome message to the User
  //             user: "bot",
  //             text: `${username}, Welcome to the group chat`,
  //             userData: username,
  //           });
  //         } else {
  //           console.log("An error occurred");
  //         }
  //       });
  //       socket.on("sendMessage", async (data) => {
  //         // Listening for a sendMessage connection
  //         let strapiData = {
  //           // Generating the message data to be stored in Strapi
  //           data: {
  //             user: data.user,
  //             message: data.message,
  //           },
  //         };
  //         var axios = require("axios");
  //         await axios
  //           .post("http://localhost:1337/api/messages", strapiData) //Storing the messages in Strapi
  //           .then((e) => {
  //             socket.broadcast.to("group").emit("message", {
  //               //Sending the message to the group
  //               user: data.username,
  //               text: data.message,
  //             });
  //           })
  //           .catch((e) => console.log("error", e.message));
  //       });
  //     });
  //   },
  // };

  // v2 -------------------

  bootstrap({ strapi }) {
    let { Server } = require("socket.io");
    //strapi.server.httpServer is the new update for Strapi V4

    let io = new Server(strapi.server.httpServer, {
      cors: {
        origin: "http://localhost:3000",
        methods: ["GET", "POST"],
        allowedHeaders: ["my-custom-header"],
        credentials: true,
      },
    });

    io.on("connection", function (socket) {
      console.log("listening for connection");

      socket.on("join", ({ username }) => {
        console.log("user connected");
        console.log("username is ", username);
        if (username) {
          socket.join("group");
          socket.emit("welcome", {
            user: "bot",
            text: `${username}, Welcome to the group chat k`,
            userData: username,
          });
        } else {
          console.log("An error occurred");
        }
      });

      socket.on("sendMessage", async (data) => {
        let strapiData = {
          data: {
            user: data.user,
            message: data.message,
          },
        };

        var axios = require("axios");
        await axios
          .post("http://localhost:1337/api/messages", strapiData)
          .then((e) => {
            // Echo the message back to the frontend
            socket.emit("message", {
              user: data.user,
              text: data.message,
            });

            // Optionally, broadcast to others in the group
            // socket.broadcast.to("group").emit("message", {
            //   user: data.user,
            //   text: data.message,
            // });
          })
          .catch((e) => console.log("error", e.message));
      });
    });
  },
};

// ---------------

// 'use strict';

// module.exports = {
//   /**
//    * An asynchronous register function that runs before
//    * your application is initialized.
//    *
//    * This gives you an opportunity to extend code.
//    */
//   register(/*{ strapi }*/) {},

//   /**
//    * An asynchronous bootstrap function that runs before
//    * your application gets started.
//    *
//    * This gives you an opportunity to set up your data model,
//    * run jobs, or perform some special logic.
//    */
//   bootstrap(/*{ strapi }*/) {},
// };
