const express = require("express");

const app = express();
const server = require("http").createServer(app);
const port = process.env.PORT || 3000;
const io = require("socket.io")(server);

const path = require("path");
app.use(express.static(path.join(__dirname + "/public")));

// just to test the server
app.get("/", (req, res) => {
  res.status(200).send("Working");
});

io.on('connection', socket => { 

    socket.on('chat', msg => { 
        io.emit('chat', msg)
    })
})

server.listen(port, () => {
  console.log(`Server running on port: ${port}`);
});
