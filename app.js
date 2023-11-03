const express = require('express')
const app = express();

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/views/index.html');
});

server = app.listen(3000, () => console.log('[APP: INFO] Listening on port 3000'));

const { Server } = require("socket.io")
const io = new Server(server);

io.on('connection', (socket) => {
	socket.on('client_message', (message) => {
		io.emit('client_message', message);
	});
})
