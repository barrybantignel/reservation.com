import express  from 'express'
import dotenv from "dotenv"
import mongoose from "mongoose"
import authRoute from "./routes/auth.js"

const app = express()
dotenv.config()

const connect = async () => {
    try {
        await mongoose.connect(process.env.MONGO);
        console.log("connecté à la BD mongoDB")
    } catch (error) {
        throw error;
    }
};
mongoose.connection.on("déconnecté", () => {
    console.log("mongoDB déconnecté!")
})
mongoose.connection.on("connecté", () => {
    console.log("mongoDB connecté!")
})

//envois d'une requête
/*
app.get("/users", (req, res) => {
    res.json("Hello boubacar barry ma 1ère requête ")
})
*/
//Middleware
app.use("/gw/auth", authRoute);


app.listen(8800, () => {
    connect()
    console.log(`serveur connecté avec succès au port ${8800}` )
})
