import {Server} from 'socket.io';
import http from 'http';
import express from 'express'


const app = express();
const server = http.createServer(app);

const io = new Server(server,{
    cors : {
        origin: ['http://localhost:5173'],
        // credentials: true,
        methods : ["GET","POST"]
    }
})

export const getReceiverSocketId = (receiverId) => {
    return userSocketMap[receiverId];
}

const userSocketMap = {};


io.on('connection', (socket) => {
    console.log("A user is connected", socket.id)
    const userId = socket.handshake.query.userId;
    if(userId != "undefined"){
        userSocketMap[userId] = socket.id;
    }
    //send events to all connected clients
    io.emit("getOnlineUsers", Object.keys(userSocketMap));
    
    // listen to events, used on both clients and server
    socket.on("disconnect", () => {
        console.log("User is disconnected", socket.id)
        delete userSocketMap[userId];
        io.emit("getOnlineUsers", Object.keys(userSocketMap));

    })
    })


export {app,io,server}