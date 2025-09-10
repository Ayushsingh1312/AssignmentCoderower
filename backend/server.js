import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors'; 
import configurationRoutes from './routes/configurationRoutes.js'
import dotenv from 'dotenv'

dotenv.config();

const app = express();
const PORT = 8080;
app.use(express.json());
app.use(cors());

mongoose.connect(process.env.MONGO_URL)
.then(() => console.log("MongoDB Connected"))
.catch(err => console.error("MongoDB Error:", err));

app.use("/api/myConfigs", configurationRoutes);


app.listen(PORT, () => {
  console.log(`Server Started at PortNo. ${PORT}`)
})
