const express = require('express');
const path = require('path')
const http = require('http')
const socketIo = require('socket.io')
const app = express();
const server = http.createServer(app)

var io = socketIo(server)

io.on('connection', (socket)=>{
    console.log('New user connected')

socket.on('disconnect', ()=>{
    console.log('Disconnect the server')

})
})




       /*publicPath Step one  */
const publicPath = express.static(path.join(__dirname , '../public'))
app.use(publicPath);

       /*publicPath Step two  */
//const publicPath = path.join(__dirname, '../public')
//app.use(express.static(publicPath));

const port = process.env.PORT || '3000';
app.set(port, 'port');
server.listen(port, ()=>{
       console.log(`Server is running on port ${port}`)
   })
