//==============================================================================
// ■ Index (index.js)
//------------------------------------------------------------------------------
//     Backend application main entry point.
//==============================================================================
require("./console");
const express = require("express");
const app = express();

//------------------------------------------------------------------------------
// ● Static-Content
//------------------------------------------------------------------------------
// The path in the express.static function is relative to
// the directory from where the node process is launched.
app.use(express.static("./frontend/"));

//------------------------------------------------------------------------------
// ● Body-Parser
//------------------------------------------------------------------------------
const bodyParser = require("body-parser");
app.use(bodyParser.json());

//------------------------------------------------------------------------------
// ● Morgan-Logger
//------------------------------------------------------------------------------
const logger = require("morgan");
app.use(logger("dev"));

//------------------------------------------------------------------------------
// ● Database
//------------------------------------------------------------------------------
const mongoose = require("mongoose");
const connectionString = "mongodb://localhost:27017/mevn-chat";
mongoose.connect(
  connectionString,
  { useNewUrlParser: true, useUnifiedTopology: true },
  (err) => {
    if (err) {
      console.log(err.name.bgRed);
      console.log(err.message.red);
      return;
    }
    console.log("♦ database is ready...".bgGreen, connectionString.blue);
  }
);

//------------------------------------------------------------------------------
// ● Models
//------------------------------------------------------------------------------
const Message = mongoose.model("Message", {
  name: String,
  content: String,
});

//------------------------------------------------------------------------------
// ● App-Server-Bootstrap
//------------------------------------------------------------------------------
const address = "localhost";
const port = 9090;
server = app.listen(port, address, () => {
  console.cls();
  const url = `http://${address}:${port}`;
  console.log("♦ server is listening...".bgGreen, url.blue);
});

//------------------------------------------------------------------------------
// ● Socket
//------------------------------------------------------------------------------
const io = require("socket.io")(server);
io.on("connection", (socket) => {
  console.log("A user is connected...");
});

//------------------------------------------------------------------------------
// ● Routes
//------------------------------------------------------------------------------
app.get("/api/messages/:name?", async (req, res, next) => {
  try {
    const { name } = req.params;
    const messages = await Message.find(name ? { name } : {});
    if (messages.length) {
      res.status(200).send(messages);
    } else {
      res
        .status(404)
        .send(
          name ? `No messages found for the name: \"${name}\".` : "No messages."
        );
    }
  } catch (e) {
    next(e);
  }
});
//------------------------------------------------------------------------------
app.post("/api/messages", async (req, res, next) => {
  try {
    const message = await new Message(req.body).save();
    console.log("• New message saved to database:".green, message);
    io.emit("new-message", message);
    console.log("• New message socket notification emitted!".green);
    res.status(201).send(`${message} created.`);
  } catch (e) {
    next(e);
  }
});
//------------------------------------------------------------------------------
app.delete("/api/messages/:name?", async (req, res, next) => {
  try {
    const { name } = req.params;
    const messages = await Message.find(name ? { name } : {});
    if (messages.length) {
      const { deletedCount } = await Message.deleteMany(name ? { name } : {});
      console.log(`• ${deletedCount} messages removed from database:`.green);
      res.status(200).send(`${deletedCount} messages deleted.`);
    } else {
      res
        .status(404)
        .send(
          name
            ? `Nothing deleted. No messages found for the name: \"${name}\".`
            : "Nothing deleted. No messages."
        );
    }
  } catch (e) {
    next(e);
  }
});

//------------------------------------------------------------------------------
// ● Routes-Error-Handling
//------------------------------------------------------------------------------
app.use((err, req, res, next) => {
  if (!err) next();
  console.log("♦ Error".bgRed, err.message.red);
  console.log(err.stack);
  res.status(500).json(err);
});
