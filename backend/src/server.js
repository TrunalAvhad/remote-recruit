import express from "express";
import{ENV} from "./lib/env.js";
import {connectDB} from "./lib/db.js";
import cors from "cors";
import {serv} from "inngest/express";
import {inngest,functions} from "./lib/inngest.js";

const app = express();

//console.log(ENV.PORT)

//middleware
app.use(express.json());

//credential true meaning cookies ko allow krna 
app.use(cors({origin:ENV.CLIENT_URL,credentials:true}));

app.use("api/inngest",serv(inngest, {functions}));

app.get("/", (req, res) => {
    res.status(200).json({msg:"success from api and is running"})
})

// app.listen(ENV.PORT,()=>
//     console.log("Server is running on port",ENV.PORT))

const startserver=async()=>{
    try {
        await connectDB();
        app.listen(ENV.PORT, ()=> console.log("Server running on port", ENV.PORT));
    } catch (error) {
        console.error("Failed to start server:", error);
    }
};

startserver();
