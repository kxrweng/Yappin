import express from 'express'
import dotenv from 'dotenv'
import authRoutes from './routes/auth.routes.js'
import connectToMongoDB from './db/connectToMongoDB.js';
const app = express()
app.use(express.json()); // To parse the incoming requests with JSON payloads
dotenv.config();
const PORT = process.env.PORT || 5000;

app.get("/", (req,res) => {
    res.json({message : "Hello World"})
})

app.use("/api/auth", authRoutes);

app.listen(PORT, () => {
    connectToMongoDB();
    console.log(`Server is running on PORT ${PORT}`);
})