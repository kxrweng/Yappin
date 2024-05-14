import express from 'express'
import dotenv from 'dotenv'
import authRoutes from './routes/auth.routes.js'
import messageRoutes from './routes/message.routes.js'
import cookieParser from 'cookie-parser'
import connectToMongoDB from './db/connectToMongoDB.js';
import userRoutes from './routes/user.routes.js';
import cors from 'cors'
import { app, server } from './socket/Socket.js'
import path from 'path'

const PORT = process.env.PORT || 5000;

const __dirname = path.resolve();
console.log(__dirname);

app.use(cookieParser());
app.use(express.json()); // To parse the incoming requests with JSON payloads


const corsOptions = {
    origin: 'http://localhost:5173',
    credentials: true,
  };
  
  app.use(cors(corsOptions)); // Enable CORS with specified options/ Specify the origin and enable credentials


dotenv.config();



app.use("/api/auth", authRoutes);
app.use("/api/messages", messageRoutes)
app.use("/api/users", userRoutes);

app.use(express.static(path.join(__dirname, '/frontend/dist')))

app.get("*", (req,res) => {
     res.sendFile(path.join(__dirname, "frontend","dist", "index.html"))
})

server.listen(PORT, () => {
    connectToMongoDB();
    console.log(`Server is running on PORT ${PORT}`);
})