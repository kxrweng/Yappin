import express from 'express'
import dotenv from 'dotenv'
import authRoutes from './routes/auth.routes.js'
import messageRoutes from './routes/message.routes.js'
import cookieParser from 'cookie-parser'
import connectToMongoDB from './db/connectToMongoDB.js';
import userRoutes from './routes/user.routes.js';

const app = express()
app.use(cookieParser());
app.use(express.json()); // To parse the incoming requests with JSON payloads
dotenv.config();
const PORT = process.env.PORT || 5000;

app.get("/", (req,res) => {
    res.json({message : "Hello World"})
})

app.use("/api/auth", authRoutes);
app.use("/api/messages", messageRoutes)
app.use("/api/users", userRoutes);

app.listen(PORT, () => {
    connectToMongoDB();
    console.log(`Server is running on PORT ${PORT}`);
})