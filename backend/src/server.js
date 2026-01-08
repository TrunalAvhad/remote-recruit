import express from "express";
import{ENV} from "./lib/env.js";
import {connectDB} from "./lib/db.js";
import cors from "cors";
import { serve } from "inngest/express";
import inngestClient, { functions } from "./lib/inngest.js";
import path from "path";

const app = express();

const __dirname = path.resolve();
//console.log(ENV.PORT)

//middleware
app.use(express.json());

//credential true meaning cookies ko allow krna 
app.use(cors({ origin: ENV.CLIENT_URL, credentials: true }));

app.use("/api/inngest", serve({ client: inngestClient, functions }));

app.get("/", (req, res) => {
    res.status(200).json({msg:"success from api and is running"})
})


// for deployment 
if(ENV.NODE_ENV==="production"){
    app.use(express.static(path.join(__dirname,"../frontend/dist")));

    app.get("/{*any}",(req,res)=>{
        res.sendFile(path.join(__dirname,"../frontend","dist","index.html"));
    });
}

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
