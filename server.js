const express = require('express');
const http = require('http');
const socketio = require('socket.io');

const app = express();
//mongo connecting
const server = http.createServer(app)
const io = socketio(server);

io.on('connection', socket => {
	console.log('Server.io is running here')
	socket.on('disconnect', () => {
        io.emit('message', 'A user has left the chat')
    })
})
app.get('/', (req, res) => {
	res.send('API running');
	console.log(req.url);
	//console.log(data);
});
app.use(function(req, res, next) {
	res.status('404').send("Sorry, that route doesn't exist. Have a nice day :)");
});
const PORT = process.env.PORT || 5000;

server.listen(PORT, () => console.log(`Server had started on port ${PORT}`));