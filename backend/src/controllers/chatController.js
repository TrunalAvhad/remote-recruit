import { chatClient } from "../lib/stream.js";

export async function getStreamToken(req, res) {
    try {
        //use clerkid for stream (not mongo _id) bcaz it should match to that we have in 
        // stream dashboard

        const token= chatClient.createToken(req.user.clerkId);
        res.status(200).json({ 
            token,
            userId: req.user.clerkId,
            userName: req.user.name,
            userImage: req.user.image,
         });
    }
    catch (error) {
        console.error("Error in getStreamToken controller:", error.message);
        res.status(500).json({ message: "internal server error" });
    }
}