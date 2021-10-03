//App.js
const express = require('express');
const app = express();
const server = require('http').Server(app);

//Socket.io
const io = require('socket.io')(server);
io.on("connection", (socket) => {
  console.log("🔌 New user connected! 🔌");
})

const exphbs  = require('express-handlebars');

// Deviates from the tutorial to fix "views/layouts/" bug
app.engine(
    "handlebars",
    exphbs({
      extname: "handlebars",
      defaultLayout: false,
      layoutsDir: "views/layouts/"
    })
  );

app.set('view engine', 'handlebars');

app.get('/', (req, res) => {
  res.render('index.handlebars');
})

server.listen('3000', () => {
  console.log('Server listening on Port 3000');
})