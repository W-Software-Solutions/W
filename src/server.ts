// const express = require("express")
import express from "express";
import dotenv from "dotenv"
import cors from "cors"
import connectDb from "./config/dbConfig";
import shortUrl from "./Routes/shortUrl"

dotenv.config();

connectDb()

const port = process.env.PORT || 5001

const app = express()

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cors({
    origin: "https://papaya-churros-86083a.netlify.app/",
    credentials: true,
}))

// app.get("/", (req, res)=>{
//     res.send("Hello World!!")
// }); 

//Routes

app.use("/", shortUrl);




app.listen(port, ()=>{
    console.log(`server started at ${port}`);
})

